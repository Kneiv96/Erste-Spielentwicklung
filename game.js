// =========================
// HELD
// =========================

const hero = {
const hero = {
    maxHealth: 100,
    health: 100,
    attack: 10,
    defense: 0,
    level: 1,
    xp: 0
};


// =========================
// RESSOURCEN
// =========================

const resources = {
    gold: 0,
    wood: 0,
    stone: 0,
    food: 0
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
            xp: 10
        },

        {
            name: "Goblin",
            maxHealth: 40,
            attack: 6,
            xp: 15
        },

        {
            name: "Wolf",
            maxHealth: 55,
            attack: 8,
            xp: 20
        },

        {
            name: "Ork",
            maxHealth: 80,
            attack: 10,
            xp: 30
        },

        {
            name: "Ork-Häuptling",
            maxHealth: 130,
            attack: 14,
            xp: 60,
            boss: true
        }
    ]
};


let currentMonsterIndex = 0;
let monster = null;
let dungeonFinished = false;


// =========================
// HTML-ELEMENTE
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

const lootPanel =
    document.getElementById("lootPanel");

const lootResults =
    document.getElementById("lootResults");

const combatScreen =
    document.getElementById("combatScreen");


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
// ANZEIGE AKTUALISIEREN
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

    if (!monster || monster.health <= 0) {
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

    if (!monster || monster.health <= 0) {
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

    if (!monster || monster.health <= 0) {
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
// MONSTER BESIEGT
// =========================

function checkMonsterDeath() {

    if (monster.health > 0) {
        return;
    }


    monster.health = 0;

    hero.xp += monster.xp;

    updateDisplay();


    battleMessage.textContent =
        "🏆 "
        + monster.name
        + " besiegt! +"
        + monster.xp
        + " XP";


    currentMonsterIndex++;


    // DUNGEON BEENDET
    if (
        currentMonsterIndex >=
        dungeon.monsters.length
    ) {

        dungeonFinished = true;

        attackButton.disabled = true;

        battleMessage.textContent =
            "🏆 Dungeon abgeschlossen!";


        setTimeout(
            generateDungeonLoot,
            1200
        );

        return;
    }


    // NÄCHSTES MONSTER
    setTimeout(
        loadMonster,
        1800
    );
}


// =========================
// LOOT-KATEGORIEN
// =========================

const lootCategories = [

    {
        type: "gold",
        name: "Gold",
        icon: "🪙",
        weight: 25
    },

    {
        type: "wood",
        name: "Holz",
        icon: "🪵",
        weight: 20
    },

    {
        type: "stone",
        name: "Stein",
        icon: "🪨",
        weight: 20
    },

    {
        type: "food",
        name: "Nahrung",
        icon: "🌾",
        weight: 20
    },

    {
        type: "weapon",
        name: "Waffe",
        icon: "⚔️",
        weight: 8
    },

    {
        type: "armor",
        name: "Rüstung",
        icon: "🛡️",
        weight: 7
    }
];
// =========================
// WAFFEN
// =========================

const weaponNames = [
    "Kurzschwert",
    "Langschwert",
    "Kriegsaxt",
    "Streitkolben",
    "Speer"
];


// =========================
// RÜSTUNGEN
// =========================

const armorNames = [
    "Lederrüstung",
    "Kettenrüstung",
    "Schuppenrüstung",
    "Plattenrüstung",
    "Verstärkte Rüstung"
];

// =========================
// 3 VERSCHIEDENE LOOTS
// =========================

function drawUniqueLootCategories(amount) {

    const available =
        [...lootCategories];

    const selected = [];


    for (let i = 0; i < amount; i++) {

        const totalWeight =
            available.reduce(
                (sum, item) =>
                    sum + item.weight,
                0
            );


        let roll =
            Math.random() * totalWeight;


        let selectedIndex = 0;


        for (
            let j = 0;
            j < available.length;
            j++
        ) {

            roll -=
                available[j].weight;


            if (roll <= 0) {

                selectedIndex = j;

                break;
            }
        }


        selected.push(
            available[selectedIndex]
        );


        // Gezogenen Loot entfernen:
        // dadurch keine Doppelungen
        available.splice(
            selectedIndex,
            1
        );
    }


    return selected;
}


// =========================
// SELTENHEIT
// =========================

function rollRarity() {

    const roll =
        Math.random() * 100;


    if (roll < 45) {
        return {
            name: "Gewöhnlich",
            symbol: "⬜"
        };
    }


    if (roll < 72) {
        return {
            name: "Ungewöhnlich",
            symbol: "🟩"
        };
    }


    if (roll < 87) {
        return {
            name: "Selten",
            symbol: "🟦"
        };
    }


    if (roll < 95) {
        return {
            name: "Episch",
            symbol: "🟪"
        };
    }


    if (roll < 99) {
        return {
            name: "Legendär",
            symbol: "🟧"
        };
    }


    return {
        name: "Mythisch",
        symbol: "🟥"
    };

    // Göttlich hat in diesem Dungeon 0 %
}


// =========================
// DUNGEON-LOOT
// =========================

function generateDungeonLoot() {

    // Kampf ausblenden
    combatScreen.classList.add(
        "hidden"
    );


    // Loot-Bildschirm anzeigen
    lootPanel.classList.remove(
        "hidden"
    );


    const loot =
        drawUniqueLootCategories(3);


    lootResults.innerHTML = "";


    loot.forEach(item => {

        const box =
            document.createElement("div");


        box.classList.add(
            "loot-item"
        );


        // RESSOURCE
        if (
            item.type === "gold" ||
            item.type === "wood" ||
            item.type === "stone" ||
            item.type === "food"
        ) {

            const amount =
                randomNumber(10, 30);


            resources[item.type] +=
                amount;


            box.innerHTML = `
                <h3>
                    ${item.icon}
                    ${item.name}
                </h3>

                <p>
                    +${amount}
                </p>
            `;
        }


        // WAFFE / RÜSTUNG
        else {

            const rarity =
                rollRarity();


            box.innerHTML = `
                <h3>
                    ${item.icon}
                    ${item.name}
                </h3>

                <p>
                    ${rarity.symbol}
                    ${rarity.name}
                </p>
            `;
        }


        lootResults.appendChild(
            box
        );
    });
}


// =========================
// SCHWERER-SCHLAG-BUTTON
// =========================

attackButton.addEventListener(
    "click",
    heavyAttack
);


// =========================
// AUTO-KAMPF
// =========================

// Held: alle 2 Sekunden
setInterval(
    heroAttack,
    2000
);


// Monster: alle 2,5 Sekunden
setInterval(
    monsterAttack,
    2500
);


// =========================
// SPIEL STARTEN
// =========================

loadMonster();
