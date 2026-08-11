// =========================
// HELD
// =========================

const hero = {
    maxHealth: 100,
    health: 100,
    attack: 10,
    level: 1,
    xp: 0,
    gold: 0
};


// =========================
// DUNGEON
// =========================

const dungeon = {
    name: "Die verlassene Mine",

    monsters: [
        {
            name: "Ratte",
            maxHealth: 25,
            attack: 4,
            xp: 10,
            goldMin: 1,
            goldMax: 3
        },

        {
            name: "Goblin",
            maxHealth: 40,
            attack: 6,
            xp: 15,
            goldMin: 3,
            goldMax: 6
        },

        {
            name: "Wolf",
            maxHealth: 55,
            attack: 8,
            xp: 20,
            goldMin: 4,
            goldMax: 8
        },

        {
            name: "Ork",
            maxHealth: 80,
            attack: 10,
            xp: 30,
            goldMin: 6,
            goldMax: 12
        },

        {
            name: "Ork-Häuptling",
            maxHealth: 130,
            attack: 14,
            xp: 60,
            goldMin: 15,
            goldMax: 25,
            boss: true
        }
    ]
};


let currentMonsterIndex = 0;

let monster = null;

let dungeonFinished = false;


// =========================
// HTML ELEMENTE
// =========================

const heroHealthText =
    document.getElementById("heroHealth");

const monsterHealthText =
    document.getElementById("monsterHealth");

const heroHealthBar =
    document.getElementById("heroHealthBar");

const monsterHealthBar =
    document.getElementById("monsterHealthBar");

const battleMessage =
    document.getElementById("battleMessage");

const attackButton =
    document.getElementById("attackButton");


// =========================
// MONSTER LADEN
// =========================

function loadMonster() {

    const template =
        dungeon.monsters[currentMonsterIndex];

    monster = {
        ...template,
        health: template.maxHealth
    };

    document.getElementById("monsterName").textContent =
        monster.name;

    updateDisplay();

    battleMessage.textContent =
        monster.boss
            ? "👑 Der Boss erscheint: " + monster.name + "!"
            : "⚔️ " + monster.name + " erscheint!";
}


// =========================
// ANZEIGE
// =========================

function updateDisplay() {

    heroHealthText.textContent =
        Math.max(hero.health, 0);

    monsterHealthText.textContent =
        Math.max(monster.health, 0);


    heroHealthBar.style.width =
        Math.max(
            hero.health / hero.maxHealth * 100,
            0
        ) + "%";


    monsterHealthBar.style.width =
        Math.max(
            monster.health / monster.maxHealth * 100,
            0
        ) + "%";


    document.getElementById("monsterMaxHealth").textContent =
        monster.maxHealth;

    document.getElementById("heroXP").textContent =
        hero.xp;

    document.getElementById("heroGold").textContent =
        hero.gold;

    document.getElementById("dungeonProgress").textContent =
        (currentMonsterIndex + 1)
        + " / "
        + dungeon.monsters.length;
}


// =========================
// ZUFALLSZAHL
// =========================

function randomNumber(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}


// =========================
// HELD AUTO-ANGRIFF
// =========================

function heroAttack() {

    if (dungeonFinished) {
        return;
    }

    if (hero.health <= 0) {
        return;
    }

    if (monster.health <= 0) {
        return;
    }


    monster.health -= hero.attack;


    battleMessage.textContent =
        "⚔️ Du verursachst "
        + hero.attack
        + " Schaden!";


    updateDisplay();


    checkMonsterDeath();
}


// =========================
// MONSTER AUTO-ANGRIFF
// =========================

function monsterAttack() {

    if (dungeonFinished) {
        return;
    }

    if (monster.health <= 0) {
        return;
    }

    if (hero.health <= 0) {
        return;
    }


    hero.health -= monster.attack;


    battleMessage.textContent =
        "👹 "
        + monster.name
        + " verursacht "
        + monster.attack
        + " Schaden!";


    updateDisplay();


    if (hero.health <= 0) {

        hero.health = 0;

        updateDisplay();

        battleMessage.textContent =
            "💀 Dein Held wurde besiegt.";

        attackButton.disabled = true;
    }
}


// =========================
// SCHWERER SCHLAG
// =========================

function heavyAttack() {

    if (dungeonFinished) {
        return;
    }

    if (hero.health <= 0) {
        return;
    }

    if (monster.health <= 0) {
        return;
    }


    const damage =
        hero.attack * 2;


    monster.health -= damage;


    battleMessage.textContent =
        "💥 Schwerer Schlag! "
        + damage
        + " Schaden!";


    updateDisplay();

    checkMonsterDeath();
}


// =========================
// MONSTER TOD
// =========================

function checkMonsterDeath() {

    if (monster.health > 0) {
        return;
    }


    monster.health = 0;


    const goldDrop =
        randomNumber(
            monster.goldMin,
            monster.goldMax
        );


    hero.gold += goldDrop;

    hero.xp += monster.xp;


    updateDisplay();


    battleMessage.textContent =
        "🏆 "
        + monster.name
        + " besiegt! +"
        + monster.xp
        + " XP | 🪙 +"
        + goldDrop
        + " Gold";


    currentMonsterIndex++;


    if (
        currentMonsterIndex >=
        dungeon.monsters.length
    ) {

        dungeonFinished = true;

        battleMessage.textContent =
            "🏆 Dungeon abgeschlossen! "
            + "Der Ork-Häuptling wurde besiegt!";

        attackButton.disabled = true;

        return;
    }


    setTimeout(
        loadMonster,
        1800
    );
}


// =========================
// BUTTON
// =========================

attackButton.addEventListener(
    "click",
    heavyAttack
);


// =========================
// AUTO-KAMPF
// =========================

setInterval(
    heroAttack,
    2000
);


setInterval(
    monsterAttack,
    2500
);


// =========================
// SPIELSTART
// =========================

loadMonster();
