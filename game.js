// =====================================================
// DUNGEON HERO
// =====================================================


// =====================================================
// HELD
// =====================================================

const hero = {
    baseMaxHealth: 100,
    maxHealth: 100,
    health: 100,

    baseAttack: 15,
    attack: 15,

    baseDefense: 0,
    defense: 0,

    level: 1,
    xp: 0
};


// =====================================================
// LEVELSYSTEM
// =====================================================

const levelXPRequirements = {
    1: 1000,
    2: 2300,
    3: 3800,
    4: 5700,
    5: 7000,
    6: 8600,
    7: 10400,
    8: 12900,
    9: 15500,
    10: 18500,
    11: 22000,
    12: 26000,
    13: 30500,
    14: 35500,
    15: 41000,
    16: 47000,
    17: 54000,
    18: 62000,
    19: 71000,
    20: 81000,
    21: 95000,
    22: 110000,
    23: 125000,
    24: 140000,
    25: 150000,
    26: 170000,
    27: 190000,
    28: 210000,
    29: 230000,
    30: 250000,
    31: 280000,
    32: 305000,
    33: 335000,
    34: 365000,
    35: 390000,
    36: 430000,
    37: 465000,
    38: 505000,
    39: 545000,
    40: 580000,
    41: 635000,
    42: 690000,
    43: 745000,
    44: 800000,
    45: 860000,
    46: 915000,
    47: 975000,
    48: 1035000,
    49: 1095000,
    50: 1150000
};


const abilityLevels = [
    3,
    5,
    9,
    15,
    30,
    50,
    70,
    85,
    100
];
// =====================================================
// FÄHIGKEITEN
// =====================================================

const abilitiesByLevel = {

    3: [
        {
            id: "warrior",
            icon: "⚔️",
            name: "Krieger",
            description: "+15 % Angriff"
        },
        {
            id: "tough",
            icon: "❤️",
            name: "Zäh",
            description: "+20 % maximales Leben"
        },
        {
            id: "looter",
            icon: "🪙",
            name: "Plünderer",
            description: "+20 % Gold"
        }
    ],

    5: [
        {
            id: "heavyStrike",
            icon: "💥",
            name: "Wuchtiger Schlag",
            description: "Schwerer Schlag verursacht ×2,5 Schaden"
        },
        {
            id: "regeneration",
            icon: "🩸",
            name: "Regeneration",
            description: "Nach jedem besiegten Monster 8 % Leben regenerieren"
        },
        {
            id: "learner",
            icon: "⭐",
            name: "Lernfähig",
            description: "+15 % erhaltene XP"
        }
    ],

    9: [
        {
            id: "fastStrike",
            icon: "⚡",
            name: "Schneller Schlag",
            description: "Cooldown des Schweren Schlags −2 Sekunden"
        },
        {
            id: "armorTraining",
            icon: "🛡️",
            name: "Panzerung",
            description: "+20 % Verteidigung"
        },
        {
            id: "treasureHunter",
            icon: "🎁",
            name: "Schatzsucher",
            description: "+50 % Chance auf Waffen- und Rüstungsloot"
        }
    ],

    15: [
        {
            id: "weaponMaster",
            icon: "🗡️",
            name: "Waffenmeister",
            description: "Waffenboni wirken +25 % stärker"
        },
        {
            id: "indestructible",
            icon: "❤️",
            name: "Unverwüstlich",
            description: "+30 % maximales Leben"
        },
        {
            id: "collector",
            icon: "🌾",
            name: "Sammler",
            description: "+30 % Holz, Stein und Nahrung"
        }
    ],

    30: [
        {
            id: "executioner",
            icon: "💀",
            name: "Henker",
            description: "+35 % Schaden gegen Bosse"
        },
        {
            id: "bulwark",
            icon: "🛡️",
            name: "Bollwerk",
            description: "15 % weniger erlittener Schaden"
        },
        {
            id: "fortuneHunter",
            icon: "💰",
            name: "Glücksritter",
            description: "+50 % Gold"
        }
    ],

    50: [
        {
            id: "battleFrenzy",
            icon: "⚔️",
            name: "Kampfrausch",
            description: "Unter 40 % Leben +40 % Angriff"
        },
        {
            id: "veteranInstinct",
            icon: "🛡️",
            name: "Veteraneninstinkt",
            description: "Unter 30 % Leben: 10 Sek. +50 % Verteidigung"
        },
        {
            id: "masterLooter",
            icon: "🎁",
            name: "Meisterplünderer",
            description: "Deutlich bessere Chance auf hochwertige Ausrüstung"
        }
    ],

    70: [
        {
            id: "warlord",
            icon: "👑",
            name: "Kriegsherr",
            description: "+35 % Angriff und +15 % Verteidigung"
        },
        {
            id: "ruler",
            icon: "🏰",
            name: "Herrscher",
            description: "+50 % aller Ressourcen"
        },
        {
            id: "bossHunter",
            icon: "🔥",
            name: "Bossjäger",
            description: "+60 % Schaden gegen Bosse"
        }
    ],

    85: [
        {
            id: "superhuman",
            icon: "⚡",
            name: "Übermenschlich",
            description: "Schwerer Schlag ×4 und zusätzlich −2 Sek. Cooldown"
        },
        {
            id: "immortality",
            icon: "🩸",
            name: "Unsterblichkeit",
            description: "Einmal pro Dungeon mit 50 % Leben wiederauferstehen"
        },
        {
            id: "fateHunter",
            icon: "✨",
            name: "Schicksalsjäger",
            description: "Stark erhöhte Chance auf legendären und mythischen Loot"
        }
    ],

    100: [
        {
            id: "godOfWar",
            icon: "⚔️",
            name: "Gott des Krieges",
            description: "+100 % Angriff"
        },
        {
            id: "immortal",
            icon: "🛡️",
            name: "Unsterblicher",
            description: "+100 % Leben und +50 % Verteidigung"
        },
        {
            id: "divineFavor",
            icon: "🌟",
            name: "Göttliche Gunst",
            description: "+100 % Ressourcen und Göttliche Dropchance 1 % → 2 %"
        }
    ]
};


const chosenAbilities = [];

let pendingAbilityLevels = [];

let abilitySelectionOpen = false;

let immortalityUsedThisDungeon = false;

let veteranInstinctActive = false;
let veteranInstinctCooldown = false;
function xpNeededForLevel(level) {

    if (level >= 100) {
        return null;
    }

    if (levelXPRequirements[level]) {
        return levelXPRequirements[level];
    }

    return Math.round(
        1150000 *
        Math.pow(
            1.045,
            level - 50
        )
    );
}


function getHeroRank(level) {

    if (level >= 100) {
        return "Göttlich";
    }

    if (level >= 85) {
        return "Halb-Gott";
    }

    if (level >= 70) {
        return "Lord";
    }

    if (level >= 50) {
        return "Veteran";
    }

    if (level >= 30) {
        return "Soldat";
    }

    if (level >= 15) {
        return "Rekrut";
    }

    if (level >= 5) {
        return "Anfänger";
    }

    return "Noob";
}


function checkLevelUp() {

    let leveledUp = false;

    while (hero.level < 100) {

        const neededXP =
            xpNeededForLevel(
                hero.level
            );

        if (
            neededXP === null ||
            hero.xp < neededXP
        ) {
            break;
        }

        hero.xp -=
            neededXP;

        hero.level++;

queueAbilityUnlock(
    hero.level
);

leveledUp = true;
    }

    if (leveledUp) {

        recalculateHeroStats();

        hero.health =
            hero.maxHealth;
    }

    saveGame();
}


// =====================================================
// INVENTAR & RESSOURCEN
// =====================================================

const inventory = [];

const equipped = {
    weapon: null,
    armor: null
};


const resources = {
    gold: 0,
    wood: 0,
    stone: 0,
    food: 0
};


// =====================================================
// DUNGEON & MONSTER-POOLS
// =====================================================

const dungeon = {

    name:
        "Die verlassene Mine",


    normalMonsters: [

        {
            name: "Ratte",
            maxHealth: 25,
            attack: 4,
            xp: 10
        },

        {
            name: "Goblin-Schürfer",
            maxHealth: 35,
            attack: 5,
            xp: 13
        },

        {
            name: "Höhlenspinne",
            maxHealth: 45,
            attack: 6,
            xp: 17
        },

        {
            name: "Wolf",
            maxHealth: 55,
            attack: 6,
            xp: 20
        },

        {
            name: "Skelettwächter",
            maxHealth: 70,
            attack: 7,
            xp: 25
        },

        {
            name: "Ork",
            maxHealth: 80,
            attack: 8,
            xp: 30
        },

        {
            name: "Minenkriecher",
            maxHealth: 95,
            attack: 9,
            xp: 36
        },

        {
            name: "Höhlentroll",
            maxHealth: 115,
            attack: 10,
            xp: 45
        },

        {
            name: "Oger",
            maxHealth: 135,
            attack: 11,
            xp: 52
        }
    ],


    bosses: [

        {
            name: "Ork-Häuptling",
            maxHealth: 165,
            attack: 13,
            xp: 70,
            boss: true
        },

        {
            name: "Trollkönig",
            maxHealth: 190,
            attack: 14,
            xp: 82,
            boss: true
        },

        {
            name: "Skelettchampion",
            maxHealth: 175,
            attack: 15,
            xp: 78,
            boss: true
        }
    ]
};


// =====================================================
// SPIELSTATUS
// =====================================================

let currentMonsterIndex = 0;

let monster = null;

let dungeonFinished = false;

let currentDungeonMonsters = [];


let currentDungeonLevel = 1;

let highestUnlockedLevel = 1;

let lastCompletedLevel = 0;


let farmMode = false;

let heavyAttackCooldown = false;


// =====================================================
// HTML-ELEMENTE
// =====================================================

const heroHealthText =
    document.getElementById(
        "heroHealth"
    );


const heroHealthBar =
    document.getElementById(
        "heroHealthBar"
    );


const monsterHealthText =
    document.getElementById(
        "monsterHealth"
    );


const monsterHealthBar =
    document.getElementById(
        "monsterHealthBar"
    );


const battleMessage =
    document.getElementById(
        "battleMessage"
    );


const attackButton =
    document.getElementById(
        "attackButton"
    );


const combatScreen =
    document.getElementById(
        "combatScreen"
    );


const lootPanel =
    document.getElementById(
        "lootPanel"
    );


const lootResults =
    document.getElementById(
        "lootResults"
    );


const inventoryButton =
    document.getElementById(
        "inventoryButton"
    );


const inventoryScreen =
    document.getElementById(
        "inventoryScreen"
    );


const closeInventoryButton =
    document.getElementById(
        "closeInventoryButton"
    );


const weaponInventoryList =
    document.getElementById(
        "weaponInventoryList"
    );


const armorInventoryList =
    document.getElementById(
        "armorInventoryList"
    );


const equippedWeaponDisplay =
    document.getElementById(
        "equippedWeapon"
    );


const equippedArmorDisplay =
    document.getElementById(
        "equippedArmor"
    );


const nextDungeonButton =
    document.getElementById(
        "nextDungeonButton"
    );


const tryNextLevelButton =
    document.getElementById(
        "tryNextLevelButton"
    );


const farmStatus =
    document.getElementById(
        "farmStatus"
    );

const abilitySelectionScreen =
    document.getElementById(
        "abilitySelectionScreen"
    );

const abilitySelectionText =
    document.getElementById(
        "abilitySelectionText"
    );

const abilityChoices =
    document.getElementById(
        "abilityChoices"
    );

// =====================================================
// FÄHIGKEITSSYSTEM
// =====================================================

function hasAbility(id) {

    return chosenAbilities.includes(
        id
    );
}


function hasChosenAbilityForLevel(
    level
) {

    const abilities =
        abilitiesByLevel[level];

    if (!abilities) {
        return false;
    }

    return abilities.some(
        ability =>
            chosenAbilities.includes(
                ability.id
            )
    );
}


function queueAbilityUnlock(
    level
) {

    if (
        !abilityLevels.includes(
            level
        )
    ) {
        return;
    }


    if (
        hasChosenAbilityForLevel(
            level
        )
    ) {
        return;
    }


    if (
        pendingAbilityLevels.includes(
            level
        )
    ) {
        return;
    }


    pendingAbilityLevels.push(
        level
    );


    showNextAbilitySelection();
}


function showNextAbilitySelection() {

    if (abilitySelectionOpen) {
        return;
    }


    if (
        pendingAbilityLevels.length === 0
    ) {
        return;
    }


    const level =
        pendingAbilityLevels[0];


    const abilities =
        abilitiesByLevel[level];


    if (!abilities) {
        return;
    }


    abilitySelectionOpen =
        true;


    combatScreen.classList.add(
        "hidden"
    );

    lootPanel.classList.add(
        "hidden"
    );

    inventoryScreen.classList.add(
        "hidden"
    );

    abilitySelectionScreen.classList.remove(
        "hidden"
    );


    abilitySelectionText.textContent =
        "Level "
        + level
        + " erreicht – wähle 1 von 3 Fähigkeiten.";


    abilityChoices.innerHTML =
        "";


    abilities.forEach(
        ability => {

            const card =
                document.createElement(
                    "div"
                );


            card.classList.add(
                "ability-card"
            );


            card.innerHTML = `

                <div class="ability-icon">
                    ${ability.icon}
                </div>

                <h3>
                    ${ability.name}
                </h3>

                <p>
                    ${ability.description}
                </p>

                <button>
                    Auswählen
                </button>
            `;


            const button =
                card.querySelector(
                    "button"
                );


            button.addEventListener(
                "click",
                function () {

                    chooseAbility(
                        level,
                        ability.id
                    );
                }
            );


            abilityChoices.appendChild(
                card
            );
        }
    );
}


function chooseAbility(
    level,
    abilityId
) {

    if (
        hasChosenAbilityForLevel(
            level
        )
    ) {
        return;
    }


    chosenAbilities.push(
        abilityId
    );


    pendingAbilityLevels.shift();


    abilitySelectionOpen =
        false;


    abilitySelectionScreen.classList.add(
        "hidden"
    );


    recalculateHeroStats();

    saveGame();


    if (
        pendingAbilityLevels.length > 0
    ) {

        showNextAbilitySelection();

        return;
    }


    if (dungeonFinished) {

        lootPanel.classList.remove(
            "hidden"
        );

    } else {

        combatScreen.classList.remove(
            "hidden"
        );
    }
}
// =====================================================
// HILFSFUNKTIONEN
// =====================================================

function randomNumber(
    min,
    max
) {

    return Math.floor(
        Math.random()
        *
        (max - min + 1)
    ) + min;
}


function getDungeonXPMultiplier() {

    return Math.pow(
        1.045,
        currentDungeonLevel - 1
    );
}


function safeSetText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (element) {

        element.textContent =
            value;
    }
}


// =====================================================
// DUNGEON-GEGNER ZUSAMMENSTELLEN
// =====================================================

function generateDungeonMonsters() {

    const selectedMonsters =
        [];


    const availableMonsters =
        [
            ...dungeon.normalMonsters
        ];


    // 4 unterschiedliche normale Gegner

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const randomIndex =
            randomNumber(
                0,
                availableMonsters.length - 1
            );


        selectedMonsters.push(
            availableMonsters[
                randomIndex
            ]
        );


        availableMonsters.splice(
            randomIndex,
            1
        );
    }


    // zufälliger Boss

    const boss =
        dungeon.bosses[
            randomNumber(
                0,
                dungeon.bosses.length - 1
            )
        ];


    selectedMonsters.push(
        boss
    );


    currentDungeonMonsters =
        selectedMonsters;
}


// =====================================================
// MONSTER LADEN
// =====================================================

function loadMonster() {

    const template =
        currentDungeonMonsters[
            currentMonsterIndex
        ];


    if (!template) {

        console.error(
            "Kein Monster für Raum",
            currentMonsterIndex + 1,
            "gefunden."
        );

        return;
    }


    const healthMultiplier =
        1
        +
        (currentDungeonLevel - 1)
        * 0.25;


    const attackMultiplier =
        1
        +
        (currentDungeonLevel - 1)
        * 0.15;


    monster = {

        ...template,


        maxHealth:
            Math.round(
                template.maxHealth
                *
                healthMultiplier
            ),


        health:
            Math.round(
                template.maxHealth
                *
                healthMultiplier
            ),


        attack:
            Math.round(
                template.attack
                *
                attackMultiplier
            )
    };


    safeSetText(
        "monsterName",
        monster.name
    );


    battleMessage.textContent =
        monster.boss
            ?
            "👑 Der Boss erscheint: "
            + monster.name
            + "!"
            :
            "⚔️ "
            + monster.name
            + " erscheint!";


    updateDisplay();
}


// =====================================================
// ANZEIGE
// =====================================================

function updateDisplay() {

    heroHealthText.textContent =
        Math.max(
            hero.health,
            0
        );


    heroHealthBar.style.width =
        Math.max(
            hero.health
            /
            hero.maxHealth
            *
            100,
            0
        )
        + "%";


    safeSetText(
        "heroMaxHealth",
        hero.maxHealth
    );


    safeSetText(
        "heroAttack",
        hero.attack
    );


    safeSetText(
        "heroDefense",
        hero.defense
    );


    safeSetText(
        "heroXP",
        hero.xp
    );


    safeSetText(
        "heroLevel",
        hero.level
    );


    safeSetText(
        "heroRank",
        getHeroRank(
            hero.level
        )
    );


    const neededXP =
        xpNeededForLevel(
            hero.level
        );


    safeSetText(
        "heroXPNeeded",
        neededXP === null
            ? "MAX"
            : neededXP
    );


    if (monster) {

        monsterHealthText.textContent =
            Math.max(
                monster.health,
                0
            );


        monsterHealthBar.style.width =
            Math.max(
                monster.health
                /
                monster.maxHealth
                *
                100,
                0
            )
            + "%";


        safeSetText(
            "monsterMaxHealth",
            monster.maxHealth
        );
    }


    safeSetText(
        "dungeonLevel",
        currentDungeonLevel
    );


    safeSetText(
        "dungeonProgress",

        (currentMonsterIndex + 1)
        + " / "
        + currentDungeonMonsters.length
    );


    if (
        nextDungeonButton
    ) {

        nextDungeonButton.textContent =
            currentDungeonLevel
            <
            highestUnlockedLevel
                ?
                "⚔️ Stufe "
                + highestUnlockedLevel
                + " versuchen"
                :
                "⚔️ Nächste Stufe";
    }


    updateNextLevelButton();

    updateFarmStatus();
}


// =====================================================
// FARM-ANZEIGE
// =====================================================

function updateNextLevelButton() {

    if (
        !tryNextLevelButton
    ) {
        return;
    }


    if (
        farmMode
        &&
        highestUnlockedLevel
        >
        currentDungeonLevel
    ) {

        tryNextLevelButton
            .classList
            .remove(
                "hidden"
            );


        tryNextLevelButton
            .textContent =
            "⚔️ Stufe "
            + highestUnlockedLevel
            + " versuchen";

    } else {

        tryNextLevelButton
            .classList
            .add(
                "hidden"
            );
    }
}


function updateFarmStatus() {

    if (
        !farmStatus
    ) {
        return;
    }


    farmStatus.textContent =
        farmMode
            ?
            "Farmen – Stufe "
            + currentDungeonLevel
            :
            "Fortschritt";
}


// =====================================================
// AUTO-ANGRIFF HELD
// =====================================================

function heroAttack() {
if (abilitySelectionOpen) {
    return;
}
    if (
        dungeonFinished
        ||
        hero.health <= 0
        ||
        !monster
        ||
        monster.health <= 0
    ) {

        return;
    }


    monster.health -=
        hero.attack;


    battleMessage.textContent =
        "⚔️ Du verursachst "
        + hero.attack
        + " Schaden!";


    updateDisplay();

    checkMonsterDeath();
}


// =====================================================
// MONSTER-ANGRIFF
// =====================================================

function monsterAttack() {
if (abilitySelectionOpen) {
    return;
}
    if (
        dungeonFinished
        ||
        !monster
        ||
        monster.health <= 0
        ||
        hero.health <= 0
    ) {

        return;
    }


    const damage =
        Math.max(
            1,
            monster.attack
            -
            hero.defense
        );


    hero.health -=
        damage;


    battleMessage.textContent =
        "👹 "
        + monster.name
        + " verursacht "
        + damage
        + " Schaden!";


    updateDisplay();


    if (
        hero.health <= 0
    ) {

        hero.health = 0;


        updateDisplay();


        battleMessage.textContent =
            "💀 Niederlage auf Stufe "
            + currentDungeonLevel
            + "!";


        attackButton.disabled =
            true;


        setTimeout(
            returnToFarmLevel,
            2000
        );
    }
}


// =====================================================
// SCHWERER SCHLAG
// =====================================================

function heavyAttack() {

    if (
        heavyAttackCooldown
        ||
        dungeonFinished
        ||
        hero.health <= 0
        ||
        !monster
        ||
        monster.health <= 0
    ) {

        return;
    }


    const damage =
        hero.attack
        *
        2;


    monster.health -=
        damage;


    battleMessage.textContent =
        "💥 Schwerer Schlag! "
        + damage
        + " Schaden!";


    updateDisplay();

    checkMonsterDeath();

    startHeavyAttackCooldown();
}


// =====================================================
// SCHWERER SCHLAG COOLDOWN
// =====================================================

function startHeavyAttackCooldown() {

    heavyAttackCooldown =
        true;


    let secondsLeft =
        6;


    attackButton.disabled =
        true;


    attackButton.textContent =
        "💥 Schwerer Schlag ("
        + secondsLeft
        + "s)";


    const cooldownInterval =
        setInterval(

            function () {

                secondsLeft--;


                if (
                    secondsLeft > 0
                ) {

                    attackButton.textContent =
                        "💥 Schwerer Schlag ("
                        + secondsLeft
                        + "s)";

                    return;
                }


                clearInterval(
                    cooldownInterval
                );


                heavyAttackCooldown =
                    false;


                attackButton.textContent =
                    "💥 Schwerer Schlag";


                if (
                    !dungeonFinished
                    &&
                    hero.health > 0
                ) {

                    attackButton.disabled =
                        false;
                }
            },

            1000
        );
}


// =====================================================
// MONSTER BESIEGT
// =====================================================

function checkMonsterDeath() {

    if (
        !monster
        ||
        monster.health > 0
    ) {

        return;
    }


    monster.health = 0;


    const earnedXP =
        Math.round(
            monster.xp
            *
            getDungeonXPMultiplier()
        );


    hero.xp +=
        earnedXP;


    checkLevelUp();


    battleMessage.textContent =
        "🏆 "
        + monster.name
        + " besiegt! +"
        + earnedXP
        + " XP";


    currentMonsterIndex++;


    if (
        currentMonsterIndex
        >=
        currentDungeonMonsters.length
    ) {

        dungeonFinished =
            true;


        lastCompletedLevel =
            Math.max(
                lastCompletedLevel,
                currentDungeonLevel
            );


        highestUnlockedLevel =
            Math.max(
                highestUnlockedLevel,
                currentDungeonLevel + 1
            );


        attackButton.disabled =
            true;


        battleMessage.textContent =
            "🏆 Dungeon abgeschlossen!";


        saveGame();

        updateDisplay();


        setTimeout(
            generateDungeonLoot,
            1200
        );


        return;
    }


    updateDisplay();


    setTimeout(
        loadMonster,
        1800
    );
}


// =====================================================
// HELDENWERTE
// =====================================================

function recalculateHeroStats() {

    hero.baseAttack =
        15
        +
        (hero.level - 1)
        *
        2;


    hero.baseMaxHealth =
        100
        +
        (hero.level - 1)
        *
        5;


    hero.baseDefense =
        0;


    hero.attack =
        hero.baseAttack;


    hero.defense =
        hero.baseDefense;


    hero.maxHealth =
        hero.baseMaxHealth;


    if (
        equipped.weapon
    ) {

        hero.attack +=
            Number(
                equipped.weapon
                    .attackBonus
            )
            ||
            0;
    }


    if (
        equipped.armor
    ) {

        hero.defense +=
            Number(
                equipped.armor
                    .defenseBonus
            )
            ||
            0;


        hero.maxHealth +=
            Number(
                equipped.armor
                    .healthBonus
            )
            ||
            0;
    }


    if (
        hero.health
        >
        hero.maxHealth
    ) {

        hero.health =
            hero.maxHealth;
    }


    updateDisplay();
}


// =====================================================
// AUSRÜSTUNG
// =====================================================

const rarityTierByName = {

    "Gewöhnlich": 1,

    "Ungewöhnlich": 2,

    "Selten": 3,

    "Episch": 4,

    "Legendär": 5,

    "Mythisch": 6,

    "Göttlich": 7
};


const weaponAttackRanges = {

    1: [3, 5],

    2: [6, 8],

    3: [9, 12],

    4: [13, 17],

    5: [18, 23],

    6: [24, 31],

    7: [32, 45]
};


const armorDefenseRanges = {

    1: [2, 3],

    2: [4, 5],

    3: [6, 8],

    4: [9, 12],

    5: [13, 17],

    6: [18, 24],

    7: [25, 35]
};


const armorHealthRanges = {

    1: [5, 10],

    2: [11, 17],

    3: [18, 27],

    4: [28, 40],

    5: [41, 57],

    6: [58, 80],

    7: [81, 120]
};


// =====================================================
// ALTE ITEMS REPARIEREN
// =====================================================

function normalizeInventoryItem(
    item
) {

    if (
        !item.id
    ) {

        item.id =
            crypto.randomUUID();
    }


    if (
        !item.rarity
    ) {

        item.rarity = {

            name:
                "Gewöhnlich",

            symbol:
                "⬜",

            tier:
                1
        };
    }


    if (
        !item.rarity.tier
    ) {

        item.rarity.tier =
            rarityTierByName[
                item.rarity.name
            ]
            ||
            1;
    }


    const tier =
        item.rarity.tier;


    if (
        item.type ===
        "weapon"
    ) {

        const value =
            Number(
                item.attackBonus
            );


        if (
            !Number.isFinite(
                value
            )
            ||
            value <= 0
        ) {

            const range =
                weaponAttackRanges[
                    tier
                ]
                ||
                weaponAttackRanges[
                    1
                ];


            item.attackBonus =
                randomNumber(
                    range[0],
                    range[1]
                );

        } else {

            item.attackBonus =
                value;
        }
    }


    if (
        item.type ===
        "armor"
    ) {

        const defense =
            Number(
                item.defenseBonus
            );


        const health =
            Number(
                item.healthBonus
            );


        if (
            !Number.isFinite(
                defense
            )
            ||
            defense <= 0
        ) {

            const range =
                armorDefenseRanges[
                    tier
                ]
                ||
                armorDefenseRanges[
                    1
                ];


            item.defenseBonus =
                randomNumber(
                    range[0],
                    range[1]
                );

        } else {

            item.defenseBonus =
                defense;
        }


        if (
            !Number.isFinite(
                health
            )
            ||
            health <= 0
        ) {

            const range =
                armorHealthRanges[
                    tier
                ]
                ||
                armorHealthRanges[
                    1
                ];


            item.healthBonus =
                randomNumber(
                    range[0],
                    range[1]
                );

        } else {

            item.healthBonus =
                health;
        }
    }


    return item;
}


// =====================================================
// ITEM AUSRÜSTEN
// =====================================================

function equipItem(
    index
) {

    const item =
        inventory[
            index
        ];


    if (!item) {
        return;
    }


    if (
        item.type ===
        "weapon"
    ) {

        equipped.weapon =
            item;
    }


    if (
        item.type ===
        "armor"
    ) {

        equipped.armor =
            item;
    }


    recalculateHeroStats();

    saveGame();

    showInventory();
}


// =====================================================
// SPEICHERN
// =====================================================

function saveGame() {

    const saveData = {

        inventory:
            inventory,

        equipped:
            equipped,

        resources:
            resources,

        heroXP:
            hero.xp,

        heroLevel:
            hero.level,

        currentDungeonLevel:
            currentDungeonLevel,

        highestUnlockedLevel:
            highestUnlockedLevel,

        lastCompletedLevel:
            lastCompletedLevel,

        farmMode:
    farmMode,

chosenAbilities:
    chosenAbilities
    };


    localStorage.setItem(
        "dungeonHeroSave",
        JSON.stringify(
            saveData
        )
    );
}


// =====================================================
// LADEN
// =====================================================

function loadGame() {

    const saved =
        localStorage.getItem(
            "dungeonHeroSave"
        );


    if (
        !saved
    ) {

        recalculateHeroStats();

        return;
    }


    const data =
        JSON.parse(
            saved
        );


    if (
        data.inventory
    ) {

        inventory.length =
            0;


        data.inventory
            .forEach(

                item => {

                    inventory.push(
                        normalizeInventoryItem(
                            item
                        )
                    );
                }
            );
    }


    if (
        data.equipped
        &&
        data.equipped.weapon
    ) {

        equipped.weapon =
            inventory.find(

                item =>

                    item.type ===
                    "weapon"
                    &&
                    (
                        item.id ===
                        data.equipped
                            .weapon
                            .id
                        ||
                        (
                            item.name ===
                            data.equipped
                                .weapon
                                .name
                            &&
                            item.attackBonus ===
                            data.equipped
                                .weapon
                                .attackBonus
                        )
                    )

            )
            ||
            null;
    }


    if (
        data.equipped
        &&
        data.equipped.armor
    ) {

        equipped.armor =
            inventory.find(

                item =>

                    item.type ===
                    "armor"
                    &&
                    (
                        item.id ===
                        data.equipped
                            .armor
                            .id
                        ||
                        (
                            item.name ===
                            data.equipped
                                .armor
                                .name
                            &&
                            item.defenseBonus ===
                            data.equipped
                                .armor
                                .defenseBonus
                            &&
                            item.healthBonus ===
                            data.equipped
                                .armor
                                .healthBonus
                        )
                    )

            )
            ||
            null;
    }


    if (
        data.resources
    ) {

        resources.gold =
            data.resources.gold
            ||
            0;


        resources.wood =
            data.resources.wood
            ||
            0;


        resources.stone =
            data.resources.stone
            ||
            0;


        resources.food =
            data.resources.food
            ||
            0;
    }


    if (
        data.heroXP !==
        undefined
    ) {

        hero.xp =
            data.heroXP;
    }


    if (
        data.heroLevel !==
        undefined
    ) {

        hero.level =
            data.heroLevel;
    }


    if (
        data.currentDungeonLevel !==
        undefined
    ) {

        currentDungeonLevel =
            data.currentDungeonLevel;
    }


    if (
        data.highestUnlockedLevel !==
        undefined
    ) {

        highestUnlockedLevel =
            data.highestUnlockedLevel;
    }


    if (
        data.lastCompletedLevel !==
        undefined
    ) {

        lastCompletedLevel =
            data.lastCompletedLevel;
    }


    if (
        data.farmMode !==
        undefined
    ) {

        farmMode =
            data.farmMode;
    }


    recalculateHeroStats();

    saveGame();
}


// =====================================================
// AUSGERÜSTETE ITEMS
// =====================================================

function showEquippedItems() {

    if (
        equipped.weapon
    ) {

        equippedWeaponDisplay.innerHTML = `

            <strong>
                ${equipped.weapon.rarity.symbol}
                ${equipped.weapon.name}
            </strong>

            <br>

            ⚔️ +${equipped.weapon.attackBonus}
            Angriff
        `;

    } else {

        equippedWeaponDisplay.textContent =
            "Keine Waffe ausgerüstet";
    }


    if (
        equipped.armor
    ) {

        equippedArmorDisplay.innerHTML = `

            <strong>
                ${equipped.armor.rarity.symbol}
                ${equipped.armor.name}
            </strong>

            <br>

            🛡️ +${equipped.armor.defenseBonus}
            Verteidigung

            <br>

            ❤️ +${equipped.armor.healthBonus}
            Leben
        `;

    } else {

        equippedArmorDisplay.textContent =
            "Keine Rüstung ausgerüstet";
    }
}


// =====================================================
// VERKAUF
// =====================================================

function getSellPrice(
    item
) {

    const prices = {

        "Gewöhnlich":
            10,

        "Ungewöhnlich":
            20,

        "Selten":
            40,

        "Episch":
            100,

        "Legendär":
            260,

        "Mythisch":
            550,

        "Göttlich":
            3000
    };


    return (
        prices[
            item.rarity.name
        ]
        ||
        10
    );
}


function sellItem(
    index
) {

    const item =
        inventory[
            index
        ];


    if (!item) {
        return;
    }


    const isEquippedWeapon =
        item.type ===
        "weapon"
        &&
        equipped.weapon
        &&
        equipped.weapon.id ===
        item.id;


    const isEquippedArmor =
        item.type ===
        "armor"
        &&
        equipped.armor
        &&
        equipped.armor.id ===
        item.id;


    if (
        isEquippedWeapon
        ||
        isEquippedArmor
    ) {

        return;
    }


    const price =
        getSellPrice(
            item
        );


    const confirmed =
        confirm(

            item.name
            + " für "
            + price
            + " Gold verkaufen?"
        );


    if (
        !confirmed
    ) {

        return;
    }


    resources.gold +=
        price;


    inventory.splice(
        index,
        1
    );


    saveGame();

    showInventory();
}


// =====================================================
// INVENTAR ANZEIGEN
// =====================================================

function showInventory() {

    showEquippedItems();


    weaponInventoryList.innerHTML =
        "";


    armorInventoryList.innerHTML =
        "";


    let weaponCount = 0;

    let armorCount = 0;


    inventory.forEach(

        (
            item,
            index
        ) => {


            const box =
                document.createElement(
                    "div"
                );


            box.classList.add(
                "inventory-item"
            );


            let values =
                "";


            let isEquipped =
                false;


            if (
                item.type ===
                "weapon"
            ) {

                weaponCount++;


                values =
                    `⚔️ +${item.attackBonus} Angriff`;


                isEquipped =
                    !!equipped.weapon
                    &&
                    equipped.weapon.id ===
                    item.id;
            }


            if (
                item.type ===
                "armor"
            ) {

                armorCount++;


                values =
                    `🛡️ +${item.defenseBonus} Verteidigung
                    <br>
                    ❤️ +${item.healthBonus} Leben`;


                isEquipped =
                    !!equipped.armor
                    &&
                    equipped.armor.id ===
                    item.id;
            }


            if (
                isEquipped
            ) {

                box.classList.add(
                    "equipped-inventory-item"
                );
            }


            box.innerHTML = `

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.rarity.symbol}
                    ${item.rarity.name}
                </p>

                <p>
                    ${values}
                </p>


                <div class="inventory-buttons">

                    <button
                        onclick="equipItem(${index})"
                        ${isEquipped ? "disabled" : ""}
                    >
                        ${
                            isEquipped
                                ?
                                "✅ Ausgerüstet"
                                :
                                "Ausrüsten"
                        }
                    </button>


                    <button
                        onclick="sellItem(${index})"
                        ${isEquipped ? "disabled" : ""}
                    >
                        🪙 Verkaufen
                        (${getSellPrice(item)} Gold)
                    </button>

                </div>
            `;


            if (
                item.type ===
                "weapon"
            ) {

                weaponInventoryList
                    .appendChild(
                        box
                    );
            }


            if (
                item.type ===
                "armor"
            ) {

                armorInventoryList
                    .appendChild(
                        box
                    );
            }
        }
    );


    if (
        weaponCount ===
        0
    ) {

        weaponInventoryList.innerHTML =
            "<p>Keine Waffen vorhanden.</p>";
    }


    if (
        armorCount ===
        0
    ) {

        armorInventoryList.innerHTML =
            "<p>Keine Rüstungen vorhanden.</p>";
    }
}


// =====================================================
// INVENTAR BUTTONS
// =====================================================

inventoryButton.addEventListener(

    "click",

    function () {

        combatScreen
            .classList
            .add(
                "hidden"
            );


        lootPanel
            .classList
            .add(
                "hidden"
            );


        inventoryScreen
            .classList
            .remove(
                "hidden"
            );


        showInventory();
    }
);


closeInventoryButton.addEventListener(

    "click",

    function () {

        inventoryScreen
            .classList
            .add(
                "hidden"
            );


        if (
            dungeonFinished
        ) {

            lootPanel
                .classList
                .remove(
                    "hidden"
                );

        } else {

            combatScreen
                .classList
                .remove(
                    "hidden"
                );
        }
    }
);


// =====================================================
// LOOT-KATEGORIEN
// =====================================================

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


// =====================================================
// WAFFEN
// =====================================================

const weaponNames = [

    "Kurzschwert",

    "Langschwert",

    "Kriegsaxt",

    "Streitkolben",

    "Speer",

    "Kriegshammer",

    "Hellebarde",

    "Doppelaxt",

    "Morgenstern",

    "Krummsäbel",

    "Bastardschwert",

    "Gleve",

    "Streitaxt",

    "Runenklinge",

    "Dämonenbrecher"
];


// =====================================================
// RÜSTUNGEN
// =====================================================

const armorNames = [

    "Lederrüstung",

    "Kettenrüstung",

    "Schuppenrüstung",

    "Plattenrüstung",

    "Verstärkte Rüstung",

    "Beschlagene Lederrüstung",

    "Ringpanzer",

    "Lamellenrüstung",

    "Ritterrüstung",

    "Wächterrüstung",

    "Runenpanzer",

    "Drachenplattenrüstung",

    "Obsidianrüstung",

    "Titanenpanzer",

    "Schattenrüstung"
];


// =====================================================
// LOOT AUSWÄHLEN
// =====================================================

function drawUniqueLootCategories(
    amount
) {

    const available =
        [
            ...lootCategories
        ];


    const selected =
        [];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const totalWeight =
            available.reduce(

                (
                    sum,
                    item
                ) =>
                    sum
                    +
                    item.weight,

                0
            );


        let roll =
            Math.random()
            *
            totalWeight;


        let selectedIndex =
            0;


        for (
            let j = 0;
            j < available.length;
            j++
        ) {

            roll -=
                available[
                    j
                ].weight;


            if (
                roll <= 0
            ) {

                selectedIndex =
                    j;

                break;
            }
        }


        selected.push(
            available[
                selectedIndex
            ]
        );


        available.splice(
            selectedIndex,
            1
        );
    }


    return selected;
}


// =====================================================
// SELTENHEIT
// =====================================================

function rollRarity() {

    const roll =
        Math.random()
        *
        100;


    if (
        roll < 45
    ) {

        return {
            name:
                "Gewöhnlich",

            symbol:
                "⬜",

            tier:
                1
        };
    }


    if (
        roll < 72
    ) {

        return {
            name:
                "Ungewöhnlich",

            symbol:
                "🟩",

            tier:
                2
        };
    }


    if (
        roll < 87
    ) {

        return {
            name:
                "Selten",

            symbol:
                "🟦",

            tier:
                3
        };
    }


    if (
        roll < 95
    ) {

        return {
            name:
                "Episch",

            symbol:
                "🟪",

            tier:
                4
        };
    }


    if (
        roll < 99
    ) {

        return {
            name:
                "Legendär",

            symbol:
                "🟧",

            tier:
                5
        };
    }


    return {

        name:
            "Mythisch",

        symbol:
            "🟥",

        tier:
            6
    };
}


// =====================================================
// WAFFE GENERIEREN
// =====================================================

function generateWeapon() {

    const rarity =
        rollRarity();


    const name =
        weaponNames[
            randomNumber(
                0,
                weaponNames.length - 1
            )
        ];


    const range =
        weaponAttackRanges[
            rarity.tier
        ];


    return {

        id:
            crypto.randomUUID(),

        type:
            "weapon",

        name:
            name,

        rarity:
            rarity,

        attackBonus:
            randomNumber(
                range[0],
                range[1]
            )
    };
}


// =====================================================
// RÜSTUNG GENERIEREN
// =====================================================

function generateArmor() {

    const rarity =
        rollRarity();


    const name =
        armorNames[
            randomNumber(
                0,
                armorNames.length - 1
            )
        ];


    const defenseRange =
        armorDefenseRanges[
            rarity.tier
        ];


    const healthRange =
        armorHealthRanges[
            rarity.tier
        ];


    return {

        id:
            crypto.randomUUID(),

        type:
            "armor",

        name:
            name,

        rarity:
            rarity,

        defenseBonus:
            randomNumber(
                defenseRange[0],
                defenseRange[1]
            ),

        healthBonus:
            randomNumber(
                healthRange[0],
                healthRange[1]
            )
    };
}


// =====================================================
// DUNGEON-LOOT
// =====================================================

function generateDungeonLoot() {

    combatScreen
        .classList
        .add(
            "hidden"
        );


    inventoryScreen
        .classList
        .add(
            "hidden"
        );


    lootPanel
        .classList
        .remove(
            "hidden"
        );


    const loot =
        drawUniqueLootCategories(
            3
        );


    lootResults.innerHTML =
        "";


    loot.forEach(

        item => {


            const box =
                document.createElement(
                    "div"
                );


            box.classList.add(
                "loot-item"
            );


            if (
                [
                    "gold",
                    "wood",
                    "stone",
                    "food"
                ]
                .includes(
                    item.type
                )
            ) {

                const amount =
                    randomNumber(
                        10,
                        30
                    );


                resources[
                    item.type
                ] +=
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


            else if (
                item.type ===
                "weapon"
            ) {

                const weapon =
                    generateWeapon();


                inventory.push(
                    weapon
                );


                box.innerHTML = `

                    <h3>
                        ⚔️ ${weapon.name}
                    </h3>

                    <p>
                        ${weapon.rarity.symbol}
                        ${weapon.rarity.name}
                    </p>

                    <p>
                        ⚔️ +${weapon.attackBonus}
                        Angriff
                    </p>
                `;
            }


            else if (
                item.type ===
                "armor"
            ) {

                const armor =
                    generateArmor();


                inventory.push(
                    armor
                );


                box.innerHTML = `

                    <h3>
                        🛡️ ${armor.name}
                    </h3>

                    <p>
                        ${armor.rarity.symbol}
                        ${armor.rarity.name}
                    </p>

                    <p>
                        🛡️ +${armor.defenseBonus}
                        Verteidigung
                    </p>

                    <p>
                        ❤️ +${armor.healthBonus}
                        Leben
                    </p>
                `;
            }


            lootResults.appendChild(
                box
            );
        }
    );


    saveGame();


    if (
        farmMode
    ) {

        setTimeout(
            restartFarmDungeon,
            2500
        );
    }
}


// =====================================================
// DUNGEON-VORBEREITUNG
// =====================================================

function prepareDungeonRun() {

    currentMonsterIndex =
        0;


    dungeonFinished =
        false;


    hero.health =
        hero.maxHealth;


    attackButton.disabled =
        false;


    lootPanel
        .classList
        .add(
            "hidden"
        );


    inventoryScreen
        .classList
        .add(
            "hidden"
        );


    combatScreen
        .classList
        .remove(
            "hidden"
        );


    generateDungeonMonsters();


    loadMonster();


    saveGame();
}


// =====================================================
// HÖCHSTE FREIGESCHALTETE STUFE VERSUCHEN
// =====================================================

function tryHighestUnlockedLevel() {

    if (
        highestUnlockedLevel
        <=
        currentDungeonLevel
    ) {

        return;
    }


    farmMode =
        false;


    currentDungeonLevel =
        highestUnlockedLevel;


    prepareDungeonRun();
}


// =====================================================
// FARM-LOOP
// =====================================================

function restartFarmDungeon() {

    currentDungeonLevel =
        lastCompletedLevel > 0
            ?
            lastCompletedLevel
            :
            1;


    prepareDungeonRun();
}


// =====================================================
// NACH NIEDERLAGE ZUR FARM-STUFE
// =====================================================

function returnToFarmLevel() {

    farmMode =
        true;


    currentDungeonLevel =
        lastCompletedLevel > 0
            ?
            lastCompletedLevel
            :
            1;


    prepareDungeonRun();
}


// =====================================================
// NÄCHSTE STUFE STARTEN
// =====================================================

function restartDungeon() {

    farmMode =
        false;


    if (
        currentDungeonLevel
        <
        highestUnlockedLevel
    ) {

        currentDungeonLevel =
            highestUnlockedLevel;
    }


    prepareDungeonRun();
}


// =====================================================
// BUTTONS
// =====================================================

attackButton.addEventListener(

    "click",

    heavyAttack
);


nextDungeonButton.addEventListener(

    "click",

    restartDungeon
);


if (
    tryNextLevelButton
) {

    tryNextLevelButton
        .addEventListener(

            "click",

            tryHighestUnlockedLevel
        );
}


// =====================================================
// AUTO-KAMPF
// =====================================================

setInterval(
    heroAttack,
    2000
);


setInterval(
    monsterAttack,
    2500
);


// =====================================================
// SPIELSTART
// =====================================================

loadGame();

generateDungeonMonsters();

loadMonster();
