// =========================
// HELD
// =========================

const hero = {

    maxHealth: 100,

    health: 100,

    attack: 10
};


// =========================
// MONSTER
// =========================

const monster = {

    name: "Goblin",

    maxHealth: 40,

    health: 40,

    attack: 6
};


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
// ANZEIGE AKTUALISIEREN
// =========================

function updateDisplay() {

    heroHealthText.textContent =
        Math.max(hero.health, 0);

    monsterHealthText.textContent =
        Math.max(monster.health, 0);


    heroHealthBar.style.width =
        (hero.health / hero.maxHealth * 100) + "%";

    monsterHealthBar.style.width =
        (monster.health / monster.maxHealth * 100) + "%";
}



// =========================
// HELD AUTO-ANGRIFF
// =========================

function heroAttack() {

    if (hero.health <= 0) {
        return;
    }

    if (monster.health <= 0) {
        return;
    }


    monster.health -= hero.attack;


    battleMessage.textContent =
        "⚔️ Der Held verursacht "
        + hero.attack
        + " Schaden!";


    updateDisplay();


    if (monster.health <= 0) {

        battleMessage.textContent =
            "🏆 Der Goblin wurde besiegt!";

    }
}



// =========================
// MONSTER AUTO-ANGRIFF
// =========================

function monsterAttack() {

    if (monster.health <= 0) {
        return;
    }

    if (hero.health <= 0) {
        return;
    }


    hero.health -= monster.attack;


    battleMessage.textContent =
        "👹 Der Goblin verursacht "
        + monster.attack
        + " Schaden!";


    updateDisplay();


    if (hero.health <= 0) {

        battleMessage.textContent =
            "💀 Dein Held wurde besiegt.";

    }
}



// =========================
// FÄHIGKEIT
// =========================

function heavyAttack() {

    if (monster.health <= 0) {
        return;
    }

    if (hero.health <= 0) {
        return;
    }


    const damage =
        hero.attack * 2;


    monster.health -= damage;


    battleMessage.textContent =
        "💥 Schwerer Schlag: "
        + damage
        + " Schaden!";


    updateDisplay();


    if (monster.health <= 0) {

        battleMessage.textContent =
            "🏆 Der Goblin wurde besiegt!";

    }
}


attackButton.addEventListener(
    "click",
    heavyAttack
);


// =========================
// AUTO-KAMPF STARTEN
// =========================


// Held greift alle 2 Sekunden an

setInterval(
    heroAttack,
    2000
);


// Goblin greift alle 2.5 Sekunden an

setInterval(
    monsterAttack,
    2500
);


updateDisplay();
