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


// =====================================================
// LEVEL-HILFSFUNKTIONEN
// =====================================================

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
// DUNGEON & MONSTER
// =====================================================

const dungeon = {

    name: "Die verlassene Mine",

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

const abilitiesButton =
    document.getElementById(
        "abilitiesButton"
    );

const abilitiesScreen =
    document.getElementById(
        "abilitiesScreen"
    );

const chosenAbilitiesList =
    document.getElementById(
        "chosenAbilitiesList"
    );

const closeAbilitiesButton =
    document.getElementById(
        "closeAbilitiesButton"
    );
function showChosenAbilities() {

    if (
        !chosenAbilitiesList
    ) {

        console.error(
            "chosenAbilitiesList wurde nicht gefunden."
        );

        return;
    }


    chosenAbilitiesList.innerHTML =
        "";


    // Noch keine Fähigkeiten

    if (
        chosenAbilities.length === 0
    ) {

        chosenAbilitiesList.innerHTML = `
            <p>
                Noch keine Fähigkeiten freigeschaltet.
            </p>

            <p>
                Die erste Fähigkeit erhältst du auf Level 3.
            </p>
        `;

        return;
    }


    abilityLevels.forEach(
        level => {

            const abilities =
                abilitiesByLevel[
                    level
                ];


            if (
                !abilities
            ) {

                return;
            }


            const chosen =
                abilities.find(
                    ability =>
                        chosenAbilities.includes(
                            ability.id
                        )
                );


            if (
                !chosen
            ) {

                return;
            }


            const card =
                document.createElement(
                    "div"
                );


            card.classList.add(
                "chosen-ability-card"
            );


            card.innerHTML = `

                <div class="ability-icon">
                    ${chosen.icon}
                </div>

                <div>

                    <strong>
                        ${chosen.name}
                    </strong>

                    <br>

                    <small>
                        Freigeschaltet auf Level ${level}
                    </small>

                    <p>
                        ${chosen.description}
                    </p>

                </div>
            `;


            chosenAbilitiesList.appendChild(
                card
            );
        }
    );
}
// =====================================================
// FÄHIGKEITEN-ÜBERSICHT ÖFFNEN
// =====================================================

if (
    abilitiesButton
    &&
    abilitiesScreen
) {

    abilitiesButton.addEventListener(
        "click",
        function () {

            // Während einer echten neuen
            // Fähigkeitswahl darf die Übersicht
            // nicht geöffnet werden.
            if (
                abilitySelectionOpen
            ) {

                return;
            }


            // Alle anderen Bildschirme ausblenden

            combatScreen.classList.add(
                "hidden"
            );


            lootPanel.classList.add(
                "hidden"
            );


            inventoryScreen.classList.add(
                "hidden"
            );


            if (
                abilitySelectionScreen
            ) {

                abilitySelectionScreen
                    .classList
                    .add(
                        "hidden"
                    );
            }


            // Fähigkeiten anzeigen

            abilitiesScreen.classList.remove(
                "hidden"
            );


            showChosenAbilities();
        }
    );
}


// =====================================================
// FÄHIGKEITEN-ÜBERSICHT SCHLIESSEN
// =====================================================

if (
    closeAbilitiesButton
    &&
    abilitiesScreen
) {

    closeAbilitiesButton.addEventListener(
        "click",
        function () {

            abilitiesScreen.classList.add(
                "hidden"
            );


            // Falls der Dungeon beendet ist,
            // zurück zum Loot.

            if (
                dungeonFinished
            ) {

                lootPanel.classList.remove(
                    "hidden"
                );

            }

            // Sonst zurück zum Kampf.

            else {

                combatScreen.classList.remove(
                    "hidden"
                );
            }
        }
    );
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


function getDungeonXPMultiplier() {

    return Math.pow(
        1.045,
        currentDungeonLevel - 1
    );
}


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


function queueMissingAbilityChoices() {

    abilityLevels.forEach(
        level => {

            if (
                hero.level >= level
                &&
                !hasChosenAbilityForLevel(
                    level
                )
                &&
                !pendingAbilityLevels.includes(
                    level
                )
            ) {

                pendingAbilityLevels.push(
                    level
                );
            }
        }
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

    if (
        !abilitySelectionScreen
        ||
        !abilitySelectionText
        ||
        !abilityChoices
    ) {

        console.error(
            "Fähigkeitsauswahl fehlt in index.html."
        );

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

                <button type="button">
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


    const validAbility =
        abilitiesByLevel[level]
            ?.some(
                ability =>
                    ability.id ===
                    abilityId
            );


    if (!validAbility) {
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


    // Schweren Schlag nach der
    // Fähigkeitsauswahl korrekt aktivieren

    if (
        !heavyAttackCooldown
        &&
        hero.health > 0
    ) {

        attackButton.disabled =
            false;

        attackButton.textContent =
            "💥 Schwerer Schlag";

    } else {

        attackButton.disabled =
            true;
    }
}

}
// =====================================================
// LEVEL-UP
// =====================================================

function checkLevelUp() {

    let leveledUp =
        false;


    while (
        hero.level < 100
    ) {

        const neededXP =
            xpNeededForLevel(
                hero.level
            );


        if (
            neededXP === null
            ||
            hero.xp < neededXP
        ) {

            break;
        }


        // XP werden NICHT abgezogen.
        // hero.xp bleibt die gesamte
        // bisher verdiente XP-Menge.


        hero.level++;


        queueAbilityUnlock(
            hero.level
        );


        leveledUp =
            true;
    }


    if (
        leveledUp
    ) {

        recalculateHeroStats();


        hero.health =
            hero.maxHealth;
    }


    saveGame();
}
// =====================================================
// HELDENWERTE
// =====================================================

function recalculateHeroStats() {

    hero.baseAttack =
        15
        +
        (hero.level - 1) * 2;


    hero.baseMaxHealth =
        100
        +
        (hero.level - 1) * 5;


    hero.baseDefense =
        0;


    // -------------------------
    // WAFFENBONUS
    // -------------------------

    let weaponBonus =
        0;


    if (equipped.weapon) {

        weaponBonus =
            Number(
                equipped.weapon
                    .attackBonus
            ) || 0;


        if (
            hasAbility(
                "weaponMaster"
            )
        ) {

            weaponBonus *=
                1.25;
        }
    }


    // -------------------------
    // ANGRIFF
    // -------------------------

    let attackMultiplier =
        1;


    if (
        hasAbility(
            "warrior"
        )
    ) {

        attackMultiplier +=
            0.15;
    }


    if (
        hasAbility(
            "warlord"
        )
    ) {

        attackMultiplier +=
            0.35;
    }


    if (
        hasAbility(
            "godOfWar"
        )
    ) {

        attackMultiplier +=
            1.00;
    }


    hero.attack =
        Math.round(
            (
                hero.baseAttack
                +
                weaponBonus
            )
            *
            attackMultiplier
        );


    // -------------------------
    // LEBEN
    // -------------------------

    let healthMultiplier =
        1;


    if (
        hasAbility(
            "tough"
        )
    ) {

        healthMultiplier +=
            0.20;
    }


    if (
        hasAbility(
            "indestructible"
        )
    ) {

        healthMultiplier +=
            0.30;
    }


    if (
        hasAbility(
            "immortal"
        )
    ) {

        healthMultiplier +=
            1.00;
    }


    hero.maxHealth =
        Math.round(
            hero.baseMaxHealth
            *
            healthMultiplier
        );


    // -------------------------
    // RÜSTUNGSBONUS
    // -------------------------

    let armorDefense =
        0;


    if (equipped.armor) {

        armorDefense =
            Number(
                equipped.armor
                    .defenseBonus
            ) || 0;


        hero.maxHealth +=
            Number(
                equipped.armor
                    .healthBonus
            ) || 0;
    }


    // -------------------------
    // VERTEIDIGUNG
    // -------------------------

    let defenseMultiplier =
        1;


    if (
        hasAbility(
            "armorTraining"
        )
    ) {

        defenseMultiplier +=
            0.20;
    }


    if (
        hasAbility(
            "warlord"
        )
    ) {

        defenseMultiplier +=
            0.15;
    }


    if (
        hasAbility(
            "immortal"
        )
    ) {

        defenseMultiplier +=
            0.50;
    }


    if (
        veteranInstinctActive
    ) {

        defenseMultiplier +=
            0.50;
    }


    hero.defense =
        Math.round(
            (
                hero.baseDefense
                +
                armorDefense
            )
            *
            defenseMultiplier
        );


    if (
        hero.health >
        hero.maxHealth
    ) {

        hero.health =
            hero.maxHealth;
    }


    updateDisplay();
}


// =====================================================
// SCHADENSBERECHNUNG
// =====================================================

function calculateHeroDamage(
    baseDamage
) {

    let damage =
        baseDamage;


    // Kampfrausch

    if (
        hasAbility(
            "battleFrenzy"
        )
        &&
        hero.health /
        hero.maxHealth
        <
        0.40
    ) {

        damage *=
            1.40;
    }


    // Boss-Fähigkeiten

    if (
        monster
        &&
        monster.boss
    ) {

        if (
            hasAbility(
                "executioner"
            )
        ) {

            damage *=
                1.35;
        }


        if (
            hasAbility(
                "bossHunter"
            )
        ) {

            damage *=
                1.60;
        }
    }


    return Math.round(
        damage
    );
}


// =====================================================
// RESSOURCENBONI
// =====================================================

function getResourceMultiplier(
    type
) {

    let multiplier =
        1;


    // Plünderer

    if (
        type === "gold"
        &&
        hasAbility(
            "looter"
        )
    ) {

        multiplier +=
            0.20;
    }


    // Sammler

    if (
        (
            type === "wood"
            ||
            type === "stone"
            ||
            type === "food"
        )
        &&
        hasAbility(
            "collector"
        )
    ) {

        multiplier +=
            0.30;
    }


    // Glücksritter

    if (
        type === "gold"
        &&
        hasAbility(
            "fortuneHunter"
        )
    ) {

        multiplier +=
            0.50;
    }


    // Herrscher

    if (
        hasAbility(
            "ruler"
        )
    ) {

        multiplier +=
            0.50;
    }


    // Göttliche Gunst

    if (
        hasAbility(
            "divineFavor"
        )
    ) {

        multiplier +=
            1.00;
    }


    return multiplier;
}


// =====================================================
// GÖTTLICHER LOOT
// =====================================================

function getDivineDropChance() {

    // Bis einschliesslich Level 90:
    // keine Dropchance.

    if (
        hero.level <= 90
    ) {

        return 0;
    }


    // Level 91 = 0.1 %
    // Level 92 = 0.2 %
    // ...
    // Level 100 = 1.0 %

    let chance =
        (hero.level - 90)
        *
        0.1;


    // Göttliche Gunst:
    // Level 100 = 2 %

    if (
        hasAbility(
            "divineFavor"
        )
    ) {

        chance *=
            2;
    }


    return Math.min(
        chance,
        2
    );
}


// =====================================================
// DUNGEON-GEGNER GENERIEREN
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


    // Danach genau 1 Boss

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


    // =====================================================
// MONSTER-SKALIERUNG
// =====================================================

let healthMultiplier =
    1
    +
    (currentDungeonLevel - 1)
    *
    0.25;


let attackMultiplier =
    1
    +
    (currentDungeonLevel - 1)
    *
    0.15;


// =====================================================
// FARM-MODUS
// Monster sind deutlich einfacher.
// XP und Loot bleiben unverändert.
// =====================================================

if (
    farmMode
) {

    healthMultiplier *=
        0.60;

    attackMultiplier *=
        0.55;
}

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


    updateNextLevelButton();

    updateFarmStatus();
}


// =====================================================
// FARM-ANZEIGE
// =====================================================

function updateNextLevelButton() {

    if (!tryNextLevelButton) {
        return;
    }


    if (
        farmMode
        &&
        highestUnlockedLevel >
        currentDungeonLevel
    ) {

        tryNextLevelButton
            .classList
            .remove(
                "hidden"
            );


        tryNextLevelButton.textContent =
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

    if (!farmStatus) {
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
// AUTO-ANGRIFF DES HELDEN
// =====================================================

function heroAttack() {

    if (
        abilitySelectionOpen
    ) {
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


    const damage =
        calculateHeroDamage(
            hero.attack
        );


    monster.health -=
        damage;


    battleMessage.textContent =
        "⚔️ Du verursachst "
        + damage
        + " Schaden!";


    updateDisplay();

    checkMonsterDeath();
}


// =====================================================
// MONSTER-ANGRIFF
// =====================================================

function monsterAttack() {

    if (
        abilitySelectionOpen
    ) {
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


    let damage =
        Math.max(
            1,
            monster.attack
            -
            hero.defense
        );


    // Bollwerk:
    // 15 % weniger erlittener Schaden

    if (
        hasAbility(
            "bulwark"
        )
    ) {

        damage =
            Math.max(
                1,
                Math.round(
                    damage *
                    0.85
                )
            );
    }


    hero.health -=
        damage;


    // Veteraneninstinkt

    if (
        hasAbility(
            "veteranInstinct"
        )
        &&
        hero.health > 0
        &&
        hero.health /
        hero.maxHealth
        <
        0.30
        &&
        !veteranInstinctCooldown
    ) {

        veteranInstinctActive =
            true;

        veteranInstinctCooldown =
            true;


        recalculateHeroStats();


        setTimeout(
            function () {

                veteranInstinctActive =
                    false;

                recalculateHeroStats();

            },
            10000
        );


        setTimeout(
            function () {

                veteranInstinctCooldown =
                    false;

            },
            30000
        );
    }


    // Unsterblichkeit

    if (
        hero.health <= 0
        &&
        hasAbility(
            "immortality"
        )
        &&
        !immortalityUsedThisDungeon
    ) {

        immortalityUsedThisDungeon =
            true;


        hero.health =
            Math.round(
                hero.maxHealth *
                0.50
            );


        battleMessage.textContent =
            "🩸 Unsterblichkeit! Du kehrst mit 50 % Leben zurück.";


        updateDisplay();

        return;
    }


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

        hero.health =
            0;


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
        abilitySelectionOpen
    ) {
        return;
    }


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


    let heavyMultiplier =
        2;


    // Wuchtiger Schlag

    if (
        hasAbility(
            "heavyStrike"
        )
    ) {

        heavyMultiplier =
            2.5;
    }


    // Übermenschlich überschreibt
    // den normalen Multiplikator.

    if (
        hasAbility(
            "superhuman"
        )
    ) {

        heavyMultiplier =
            4;
    }


    const damage =
        calculateHeroDamage(
            hero.attack *
            heavyMultiplier
        );


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
// COOLDOWN SCHWERER SCHLAG
// =====================================================

function startHeavyAttackCooldown() {

    heavyAttackCooldown =
        true;


    let secondsLeft =
        6;


    // Schneller Schlag

    if (
        hasAbility(
            "fastStrike"
        )
    ) {

        secondsLeft -=
            2;
    }


    // Übermenschlich

    if (
        hasAbility(
            "superhuman"
        )
    ) {

        secondsLeft -=
            2;
    }


    secondsLeft =
        Math.max(
            1,
            secondsLeft
        );


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
                    &&
                    !abilitySelectionOpen
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


    // -------------------------
    // XP
    // -------------------------

    let xpMultiplier =
        getDungeonXPMultiplier();


    if (
        hasAbility(
            "learner"
        )
    ) {

        xpMultiplier *=
            1.15;
    }


    const earnedXP =
        Math.round(
            monster.xp
            *
            xpMultiplier
        );


    hero.xp +=
        earnedXP;


    // -------------------------
    // REGENERATION
    // -------------------------

    if (
        hasAbility(
            "regeneration"
        )
    ) {

        const healing =
            Math.round(
                hero.maxHealth
                *
                0.08
            );


        hero.health =
            Math.min(
                hero.maxHealth,
                hero.health
                +
                healing
            );
    }


    // -------------------------
    // LEVEL-UP
    // -------------------------

    checkLevelUp();


    battleMessage.textContent =
        "🏆 "
        + monster.name
        + " besiegt! +"
        + earnedXP
        + " XP";


    currentMonsterIndex++;


    // -------------------------
    // DUNGEON FERTIG
    // -------------------------

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
// SELTENHEITS-STUFEN
// =====================================================

const rarityTierByName = {

    "Gewöhnlich":
        1,

    "Ungewöhnlich":
        2,

    "Selten":
        3,

    "Episch":
        4,

    "Legendär":
        5,

    "Mythisch":
        6,

    "Göttlich":
        7
};


// =====================================================
// WAFFENWERTE
// =====================================================

const weaponAttackRanges = {

    1: [3, 5],

    2: [6, 8],

    3: [9, 12],

    4: [13, 17],

    5: [18, 23],

    6: [24, 31],

    7: [32, 45]
};


// =====================================================
// RÜSTUNGSWERTE
// =====================================================

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

    if (!item.id) {

        item.id =
            crypto.randomUUID();
    }


    if (!item.rarity) {

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


    // -------------------------
    // WAFFE
    // -------------------------

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


    // -------------------------
    // RÜSTUNG
    // -------------------------

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


    if (!saved) {

        recalculateHeroStats();

        return;
    }


    const data =
        JSON.parse(
            saved
        );


    // -------------------------
    // INVENTAR
    // -------------------------

    if (
        Array.isArray(
            data.inventory
        )
    ) {

        inventory.length =
            0;


        data.inventory.forEach(
            item => {

                inventory.push(
                    normalizeInventoryItem(
                        item
                    )
                );
            }
        );
    }


    // -------------------------
    // GEWÄHLTE FÄHIGKEITEN
    // -------------------------

    if (
        Array.isArray(
            data.chosenAbilities
        )
    ) {

        chosenAbilities.length =
            0;


        data.chosenAbilities.forEach(
            abilityId => {

                chosenAbilities.push(
                    abilityId
                );
            }
        );
    }


    // -------------------------
    // AUSRÜSTUNG LADEN
    // -------------------------

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


    // -------------------------
    // RESSOURCEN
    // -------------------------

    if (
        data.resources
    ) {

        resources.gold =
            Number(
                data.resources.gold
            )
            ||
            0;


        resources.wood =
            Number(
                data.resources.wood
            )
            ||
            0;


        resources.stone =
            Number(
                data.resources.stone
            )
            ||
            0;


        resources.food =
            Number(
                data.resources.food
            )
            ||
            0;
    }


    // -------------------------
    // HELD
    // -------------------------

    if (
        data.heroXP !==
        undefined
    ) {

        hero.xp =
            Number(
                data.heroXP
            )
            ||
            0;
    }


    if (
        data.heroLevel !==
        undefined
    ) {

        hero.level =
            Math.max(
                1,
                Math.min(
                    100,
                    Number(
                        data.heroLevel
                    )
                    ||
                    1
                )
            );
    }


    // -------------------------
    // DUNGEON
    // -------------------------

    if (
        data.currentDungeonLevel !==
        undefined
    ) {

        currentDungeonLevel =
            Math.max(
                1,
                Number(
                    data.currentDungeonLevel
                )
                ||
                1
            );
    }


    if (
        data.highestUnlockedLevel !==
        undefined
    ) {

        highestUnlockedLevel =
            Math.max(
                1,
                Number(
                    data.highestUnlockedLevel
                )
                ||
                1
            );
    }


    if (
        data.lastCompletedLevel !==
        undefined
    ) {

        lastCompletedLevel =
            Math.max(
                0,
                Number(
                    data.lastCompletedLevel
                )
                ||
                0
            );
    }


    if (
        data.farmMode !==
        undefined
    ) {

        farmMode =
            Boolean(
                data.farmMode
            );
    }


    recalculateHeroStats();

    saveGame();
}


// =====================================================
// AUSGERÜSTETE ITEMS ANZEIGEN
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
// VERKAUFSWERT
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


// =====================================================
// ITEM VERKAUFEN
// =====================================================

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


    if (!confirmed) {
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


    let weaponCount =
        0;


    let armorCount =
        0;


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


            // -------------------------
            // WAFFE
            // -------------------------

            if (
                item.type ===
                "weapon"
            ) {

                weaponCount++;


                values =
                    `⚔️ +${item.attackBonus} Angriff`;


                isEquipped =
                    Boolean(
                        equipped.weapon
                    )
                    &&
                    equipped.weapon.id ===
                    item.id;
            }


            // -------------------------
            // RÜSTUNG
            // -------------------------

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
                    Boolean(
                        equipped.armor
                    )
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
// INVENTAR ÖFFNEN
// =====================================================

inventoryButton.addEventListener(
    "click",
    function () {

        if (
            abilitySelectionOpen
        ) {
            return;
        }


        combatScreen.classList.add(
            "hidden"
        );


        lootPanel.classList.add(
            "hidden"
        );


        inventoryScreen.classList.remove(
            "hidden"
        );


        showInventory();
    }
);


// =====================================================
// INVENTAR SCHLIESSEN
// =====================================================

closeInventoryButton.addEventListener(
    "click",
    function () {

        inventoryScreen.classList.add(
            "hidden"
        );


        if (
            abilitySelectionOpen
        ) {
            return;
        }


        if (
            dungeonFinished
        ) {

            lootPanel.classList.remove(
                "hidden"
            );

        } else {

            combatScreen.classList.remove(
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
        type:
            "gold",

        name:
            "Gold",

        icon:
            "🪙",

        weight:
            25
    },

    {
        type:
            "wood",

        name:
            "Holz",

        icon:
            "🪵",

        weight:
            20
    },

    {
        type:
            "stone",

        name:
            "Stein",

        icon:
            "🪨",

        weight:
            20
    },

    {
        type:
            "food",

        name:
            "Nahrung",

        icon:
            "🌾",

        weight:
            20
    },

    {
        type:
            "weapon",

        name:
            "Waffe",

        icon:
            "⚔️",

        weight:
            8
    },

    {
        type:
            "armor",

        name:
            "Rüstung",

        icon:
            "🛡️",

        weight:
            7
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
// LOOT-KATEGORIEN AUSWÄHLEN
// =====================================================

function drawUniqueLootCategories(
    amount
) {

    const available =
        lootCategories.map(
            item => {

                const copy = {
                    ...item
                };


                // Schatzsucher:
                // +50 % Gewicht für Waffe/Rüstung

                if (
                    hasAbility(
                        "treasureHunter"
                    )
                    &&
                    (
                        copy.type ===
                        "weapon"
                        ||
                        copy.type ===
                        "armor"
                    )
                ) {

                    copy.weight *=
                        1.5;
                }


                return copy;
            }
        );


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
// SELTENHEIT WÜRFELN
// =====================================================

// =====================================================
// LOOT-QUALITÄT NACH DUNGEON-STUFE
// =====================================================

function getEffectiveLootDungeonLevel() {

    let effectiveLevel =
        currentDungeonLevel;


    // Meisterplünderer:
    // Loot wird behandelt wie +15 Dungeon-Stufen

    if (
        hasAbility(
            "masterLooter"
        )
    ) {

        effectiveLevel +=
            15;
    }


    // Schicksalsjäger:
    // Loot wird behandelt wie +30 Dungeon-Stufen

    if (
        hasAbility(
            "fateHunter"
        )
    ) {

        effectiveLevel +=
            30;
    }


    return Math.min(
        effectiveLevel,
        100
    );
}


// =====================================================
// LOOT-ECKPUNKTE
// =====================================================

const lootRarityMilestones = [

    {
        level: 1,

        common: 62.000,
        uncommon: 27.000,
        rare: 9.000,
        epic: 1.989,
        legendary: 0.010,
        mythic: 0.001
    },

    {
        level: 5,

        common: 61.450,
        uncommon: 26.970,
        rare: 9.240,
        epic: 2.198,
        legendary: 0.115,
        mythic: 0.027
    },

    {
        level: 10,

        common: 60.350,
        uncommon: 26.920,
        rare: 9.710,
        epic: 2.616,
        legendary: 0.324,
        mythic: 0.080
    },

    {
        level: 25,

        common: 55.800,
        uncommon: 26.710,
        rare: 11.660,
        epic: 4.350,
        legendary: 1.190,
        mythic: 0.290
    },

    {
        level: 50,

        common: 38.000,
        uncommon: 26.230,
        rare: 20.500,
        epic: 8.180,
        legendary: 6.320,
        mythic: 0.770
    },

    {
        level: 75,

        common: 29.000,
        uncommon: 23.500,
        rare: 24.000,
        epic: 13.000,
        legendary: 8.500,
        mythic: 2.000
    },

    {
        level: 100,

        common: 20.000,
        uncommon: 22.000,
        rare: 27.000,
        epic: 18.000,
        legendary: 10.000,
        mythic: 3.000
    }
];


// =====================================================
// ZWISCHENWERTE BERECHNEN
// =====================================================

function getLootRarityChances() {

    const dungeonLevel =
        getEffectiveLootDungeonLevel();


    let lower =
        lootRarityMilestones[0];


    let upper =
        lootRarityMilestones[
            lootRarityMilestones.length - 1
        ];


    for (
        let i = 0;
        i < lootRarityMilestones.length - 1;
        i++
    ) {

        const current =
            lootRarityMilestones[i];

        const next =
            lootRarityMilestones[i + 1];


        if (
            dungeonLevel >= current.level
            &&
            dungeonLevel <= next.level
        ) {

            lower =
                current;

            upper =
                next;

            break;
        }
    }


    // exakt auf Eckpunkt

    if (
        lower.level === upper.level
    ) {

        return {
            common: lower.common,
            uncommon: lower.uncommon,
            rare: lower.rare,
            epic: lower.epic,
            legendary: lower.legendary,
            mythic: lower.mythic
        };
    }


    const progress =
        (
            dungeonLevel - lower.level
        )
        /
        (
            upper.level - lower.level
        );


    function interpolate(
        start,
        end
    ) {

        return start
            +
            (
                end - start
            )
            *
            progress;
    }


    return {

        common:
            interpolate(
                lower.common,
                upper.common
            ),

        uncommon:
            interpolate(
                lower.uncommon,
                upper.uncommon
            ),

        rare:
            interpolate(
                lower.rare,
                upper.rare
            ),

        epic:
            interpolate(
                lower.epic,
                upper.epic
            ),

        legendary:
            interpolate(
                lower.legendary,
                upper.legendary
            ),

        mythic:
            interpolate(
                lower.mythic,
                upper.mythic
            )
    };
}


// =====================================================
// SELTENHEIT WÜRFELN
// =====================================================

function rollRarity() {

    // -------------------------
    // 1. GÖTTLICHER LOOT
    // -------------------------

    const divineChance =
        getDivineDropChance();


    if (
        Math.random() * 100
        <
        divineChance
    ) {

        return {
            name:
                "Göttlich",

            symbol:
                "🌟",

            tier:
                7
        };
    }


    // -------------------------
    // 2. NORMALER LOOT
    // -------------------------

    const chances =
        getLootRarityChances();


    const roll =
        Math.random() * 100;


    let threshold =
        chances.common;


    if (
        roll < threshold
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


    threshold +=
        chances.uncommon;


    if (
        roll < threshold
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


    threshold +=
        chances.rare;


    if (
        roll < threshold
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


    threshold +=
        chances.epic;


    if (
        roll < threshold
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


    threshold +=
        chances.legendary;


    if (
        roll < threshold
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


    const attackBonus =
        randomNumber(
            range[0],
            range[1]
        );


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
            attackBonus
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


    const defenseBonus =
        randomNumber(
            defenseRange[0],
            defenseRange[1]
        );


    const healthBonus =
        randomNumber(
            healthRange[0],
            healthRange[1]
        );


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
            defenseBonus,

        healthBonus:
            healthBonus
    };
}


// =====================================================
// DUNGEON-LOOT
// =====================================================

function generateDungeonLoot() {

    if (
        abilitySelectionOpen
    ) {
        return;
    }


    combatScreen.classList.add(
        "hidden"
    );


    inventoryScreen.classList.add(
        "hidden"
    );


    lootPanel.classList.remove(
        "hidden"
    );


    // =====================================================
// LOOT ZUSAMMENSTELLEN
// Immer:
// 2 unterschiedliche Ressourcen
// + 1 Waffe oder Rüstung
// =====================================================

const resourceLootPool = [
    {
        type: "gold",
        name: "Gold",
        icon: "🪙"
    },
    {
        type: "wood",
        name: "Holz",
        icon: "🪵"
    },
    {
        type: "stone",
        name: "Stein",
        icon: "🪨"
    },
    {
        type: "food",
        name: "Nahrung",
        icon: "🌾"
    }
];


// Pool mischen

const shuffledResources =
    [...resourceLootPool]
        .sort(
            () =>
                Math.random() - 0.5
        );


// Genau zwei verschiedene Ressourcen

const selectedResources =
    shuffledResources.slice(
        0,
        2
    );


// Genau ein Ausrüstungsgegenstand

const equipmentLoot =
    Math.random() < 0.5
        ?
        {
            type: "weapon",
            name: "Waffe",
            icon: "⚔️"
        }
        :
        {
            type: "armor",
            name: "Rüstung",
            icon: "🛡️"
        };


// Endgültiger Loot

const loot = [
    ...selectedResources,
    equipmentLoot
];


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


            // -------------------------
            // RESSOURCEN
            // -------------------------

            if (
                item.type === "gold"
                ||
                item.type === "wood"
                ||
                item.type === "stone"
                ||
                item.type === "food"
            ) {

                const baseAmount =
                    randomNumber(
                        10,
                        30
                    );


                const amount =
                    Math.round(
                        baseAmount
                        *
                        getResourceMultiplier(
                            item.type
                        )
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


            // -------------------------
            // WAFFE
            // -------------------------

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


            // -------------------------
            // RÜSTUNG
            // -------------------------

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


    // -------------------------
    // FARM-LOOP
    // -------------------------

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
// DUNGEON-RUN VORBEREITEN
// =====================================================

function prepareDungeonRun() {

    immortalityUsedThisDungeon =
        false;


    veteranInstinctActive =
        false;


    currentMonsterIndex =
        0;


    dungeonFinished =
        false;


    hero.health =
        hero.maxHealth;


    attackButton.disabled =
        false;


    lootPanel.classList.add(
        "hidden"
    );


    inventoryScreen.classList.add(
        "hidden"
    );


    if (
        abilitySelectionScreen
    ) {

        abilitySelectionScreen.classList.add(
            "hidden"
        );
    }


    combatScreen.classList.remove(
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
        abilitySelectionOpen
    ) {
        return;
    }


    if (
        highestUnlockedLevel <=
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
// FARM-DUNGEON NEU STARTEN
// =====================================================

function restartFarmDungeon() {

    if (
        abilitySelectionOpen
    ) {
        return;
    }


    currentDungeonLevel =
        lastCompletedLevel > 0
            ?
            lastCompletedLevel
            :
            1;


    prepareDungeonRun();
}


// =====================================================
// NACH NIEDERLAGE FARMEN
// =====================================================

function returnToFarmLevel() {

    if (
        abilitySelectionOpen
    ) {
        return;
    }


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
// NÄCHSTE DUNGEON-STUFE
// =====================================================

function restartDungeon() {

    if (
        abilitySelectionOpen
    ) {
        return;
    }


    farmMode =
        false;


    if (
        currentDungeonLevel <
        highestUnlockedLevel
    ) {

        currentDungeonLevel =
            highestUnlockedLevel;
    }


    prepareDungeonRun();
}

// =====================================================
// OFFLINE-FARM
// =====================================================

const OFFLINE_MAX_HOURS =
    8;

const OFFLINE_EFFICIENCY =
    0.60;

const OFFLINE_DUNGEON_MINUTES =
    3;

const OFFLINE_MINIMUM_MINUTES =
    0,1;

const OFFLINE_TIME_KEY =
    "dungeonHeroLastActive";


// =====================================================
// LETZTE AKTIVITÄT SPEICHERN
// =====================================================

function saveLastActiveTime() {

    localStorage.setItem(
        OFFLINE_TIME_KEY,
        Date.now().toString()
    );
}


// =====================================================
// OFFLINE-ZEIT FORMATIEREN
// =====================================================

function formatOfflineTime(
    milliseconds
) {

    const totalMinutes =
        Math.floor(
            milliseconds /
            60000
        );


    const hours =
        Math.floor(
            totalMinutes /
            60
        );


    const minutes =
        totalMinutes %
        60;


    if (
        hours > 0
    ) {

        return (
            hours
            +
            " Std. "
            +
            minutes
            +
            " Min."
        );
    }


    return (
        minutes
        +
        " Min."
    );
}


// =====================================================
// XP EINES OFFLINE-DUNGEONS
// =====================================================

function calculateOfflineDungeonXP() {

    const normalPool =
        [
            ...dungeon.normalMonsters
        ];


    // Pool zufällig mischen

    normalPool.sort(
        () =>
            Math.random() - 0.5
    );


    // Genau vier verschiedene normale Monster

    const selectedMonsters =
        normalPool.slice(
            0,
            4
        );


    // Ein zufälliger Boss

    const boss =
        dungeon.bosses[
            randomNumber(
                0,
                dungeon.bosses.length - 1
            )
        ];


    let baseXP =
        boss.xp;


    selectedMonsters.forEach(
        monsterTemplate => {

            baseXP +=
                monsterTemplate.xp;
        }
    );


    let multiplier =
        getDungeonXPMultiplier();


    // Fähigkeit Lernfähig

    if (
        hasAbility(
            "learner"
        )
    ) {

        multiplier *=
            1.15;
    }


    return Math.round(
        baseXP *
        multiplier
    );
}


// =====================================================
// ZWEI OFFLINE-RESSOURCEN AUSWÄHLEN
// =====================================================

function getOfflineResourceTypes() {

    const types = [
        "gold",
        "wood",
        "stone",
        "food"
    ];


    types.sort(
        () =>
            Math.random() - 0.5
    );


    return types.slice(
        0,
        2
    );
}


// =====================================================
// OFFLINE-BELOHNUNGEN BERECHNEN
// =====================================================

function calculateOfflineRewards(
    dungeonCount
) {

    const rewards = {

        xp: 0,

        gold: 0,
        wood: 0,
        stone: 0,
        food: 0,

        weapons: 0,
        armor: 0,

        rarity: {
            common: 0,
            uncommon: 0,
            rare: 0,
            epic: 0,
            legendary: 0,
            mythic: 0,
            divine: 0
        }
    };


    for (
        let i = 0;
        i < dungeonCount;
        i++
    ) {

        // -------------------------
        // XP
        // -------------------------

        rewards.xp +=
            calculateOfflineDungeonXP();


        // -------------------------
        // GENAU 2 RESSOURCEN
        // -------------------------

        const resourceTypes =
            getOfflineResourceTypes();


        resourceTypes.forEach(
            type => {

                const baseAmount =
                    randomNumber(
                        10,
                        30
                    );


                const amount =
                    Math.round(
                        baseAmount
                        *
                        getResourceMultiplier(
                            type
                        )
                    );


                resources[
                    type
                ] +=
                    amount;


                rewards[
                    type
                ] +=
                    amount;
            }
        );


        // -------------------------
        // GENAU 1 AUSRÜSTUNG
        // -------------------------

        if (
            Math.random() < 0.5
        ) {

            const weapon =
                generateWeapon();


            inventory.push(
                weapon
            );


            rewards.weapons++;


            countOfflineRarity(
                rewards,
                weapon.rarity
            );

        } else {

            const armorItem =
                generateArmor();


            inventory.push(
                armorItem
            );


            rewards.armor++;


            countOfflineRarity(
                rewards,
                armorItem.rarity
            );
        }
    }


    return rewards;
}


// =====================================================
// SELTENHEIT FÜR OFFLINE-STATISTIK
// =====================================================

function countOfflineRarity(
    rewards,
    rarity
) {

    if (!rarity) {
        return;
    }


    switch (
        rarity.name
    ) {

        case "Gewöhnlich":

            rewards.rarity.common++;
            break;


        case "Ungewöhnlich":

            rewards.rarity.uncommon++;
            break;


        case "Selten":

            rewards.rarity.rare++;
            break;


        case "Episch":

            rewards.rarity.epic++;
            break;


        case "Legendär":

            rewards.rarity.legendary++;
            break;


        case "Mythisch":

            rewards.rarity.mythic++;
            break;


        case "Göttlich":

            rewards.rarity.divine++;
            break;
    }
}


// =====================================================
// OFFLINE-FENSTER ANZEIGEN
// =====================================================

function showOfflineFarmResults(
    offlineTime,
    dungeonCount,
    farmLevel,
    rewards
) {

    const screen =
        document.getElementById(
            "offlineFarmScreen"
        );


    const details =
        document.getElementById(
            "offlineFarmDetails"
        );


    if (
        !screen
        ||
        !details
    ) {

        return;
    }


    details.innerHTML = `

        <p>
            Du warst
            <strong>
                ${formatOfflineTime(
                    offlineTime
                )}
            </strong>
            offline.
        </p>

        <p>
            Farm-Stufe:
            <strong>
                ${farmLevel}
            </strong>
        </p>

        <p>
            ⚙️ Offline-Effizienz:
            <strong>
                60 %
            </strong>
        </p>

        <hr>

        <p>
            🏰 Gefarmte Dungeons:
            <strong>
                ${dungeonCount}
            </strong>
        </p>

        <p>
            ⭐ XP:
            <strong>
                +${rewards.xp}
            </strong>
        </p>

        <p>
            🪙 Gold:
            +${rewards.gold}
        </p>

        <p>
            🪵 Holz:
            +${rewards.wood}
        </p>

        <p>
            🪨 Stein:
            +${rewards.stone}
        </p>

        <p>
            🌾 Nahrung:
            +${rewards.food}
        </p>

        <hr>

        <p>
            ⚔️ Waffen:
            ${rewards.weapons}
        </p>

        <p>
            🛡️ Rüstungen:
            ${rewards.armor}
        </p>

    `;


    const rareLoot = [];


    if (
        rewards.rarity.epic > 0
    ) {

        rareLoot.push(
            "🟪 Episch: "
            +
            rewards.rarity.epic
        );
    }


    if (
        rewards.rarity.legendary > 0
    ) {

        rareLoot.push(
            "🟧 Legendär: "
            +
            rewards.rarity.legendary
        );
    }


    if (
        rewards.rarity.mythic > 0
    ) {

        rareLoot.push(
            "🟥 Mythisch: "
            +
            rewards.rarity.mythic
        );
    }


    if (
        rewards.rarity.divine > 0
    ) {

        rareLoot.push(
            "🌟 Göttlich: "
            +
            rewards.rarity.divine
        );
    }


    if (
        rareLoot.length > 0
    ) {

        details.innerHTML += `

            <hr>

            <h3>
                Besondere Funde
            </h3>

            <p>
                ${rareLoot.join(
                    "<br>"
                )}
            </p>
        `;
    }


    screen.classList.remove(
        "hidden"
    );
}


// =====================================================
// OFFLINE-FARM AUSWERTEN
// =====================================================

function applyOfflineProgress() {

    const savedTime =
        Number(
            localStorage.getItem(
                OFFLINE_TIME_KEY
            )
        );


    const now =
        Date.now();


    // Beim allerersten Start existiert
    // noch kein Zeitstempel.

    if (
        !savedTime
    ) {

        saveLastActiveTime();

        return;
    }


    const actualOfflineTime =
        Math.max(
            0,
            now - savedTime
        );


    const minimumTime =
        OFFLINE_MINIMUM_MINUTES
        *
        60
        *
        1000;


    if (
        actualOfflineTime <
        minimumTime
    ) {

        saveLastActiveTime();

        return;
    }


    // Maximal 8 Stunden berücksichtigen

    const maxOfflineTime =
        OFFLINE_MAX_HOURS
        *
        60
        *
        60
        *
        1000;


    const creditedOfflineTime =
        Math.min(
            actualOfflineTime,
            maxOfflineTime
        );


    const offlineMinutes =
        creditedOfflineTime
        /
        60000;


    // Beispiel:
    // 60 Minuten / 3 Minuten
    // = 20 Dungeons
    //
    // × 60 %
    // = 12 Dungeons

    const dungeonCount =
        Math.floor(
            (
                offlineMinutes
                /
                OFFLINE_DUNGEON_MINUTES
            )
            *
            OFFLINE_EFFICIENCY
        );


    if (
        dungeonCount <= 0
    ) {

        saveLastActiveTime();

        return;
    }


    // Offline wird immer die zuletzt
    // erfolgreich abgeschlossene Stufe gefarmt.

    const farmLevel =
        lastCompletedLevel > 0
            ?
            lastCompletedLevel
            :
            1;


    // Die Loot-Berechnung verwendet
    // currentDungeonLevel.
    // Deshalb kurz auf die Farm-Stufe wechseln.

    const originalDungeonLevel =
        currentDungeonLevel;


    currentDungeonLevel =
        farmLevel;


    const rewards =
        calculateOfflineRewards(
            dungeonCount
        );


    // Ursprünglichen Dungeon wiederherstellen

    currentDungeonLevel =
        originalDungeonLevel;


    // XP hinzufügen

    hero.xp +=
        rewards.xp;


    // Eventuelle Levelaufstiege ausführen

    checkLevelUp();


    recalculateHeroStats();


    saveGame();


    showOfflineFarmResults(
        creditedOfflineTime,
        dungeonCount,
        farmLevel,
        rewards
    );


    // Ab jetzt läuft die neue
    // Online-Zeit.

    saveLastActiveTime();
}


// =====================================================
// OFFLINE-TRACKING STARTEN
// =====================================================

function startOfflineTracking() {

    // Alle 30 Sekunden speichern,
    // dass der Spieler noch aktiv ist.

    setInterval(
        saveLastActiveTime,
        30000
    );


    // Tab / Browser wird verlassen

    window.addEventListener(
        "beforeunload",
        saveLastActiveTime
    );


    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.visibilityState
                ===
                "hidden"
            ) {

                saveLastActiveTime();
            }
        }
    );


    const closeButton =
        document.getElementById(
            "closeOfflineFarmButton"
        );


    const screen =
        document.getElementById(
            "offlineFarmScreen"
        );


    if (
        closeButton
        &&
        screen
    ) {

        closeButton.addEventListener(
            "click",
            function () {

                screen.classList.add(
                    "hidden"
                );
            }
        );
    }
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

    tryNextLevelButton.addEventListener(
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


// Offline-Farm berechnen

applyOfflineProgress();


// Normalen Dungeon vorbereiten

generateDungeonMonsters();

loadMonster();


// Noch offene Fähigkeiten prüfen

queueMissingAbilityChoices();


// Offline-Zeit ab jetzt verfolgen

startOfflineTracking();
