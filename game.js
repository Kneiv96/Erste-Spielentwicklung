// =========================
// HELD
// =========================

const hero = {
    baseMaxHealth: 100,
    maxHealth: 100,
    health: 100,

    baseAttack: 10,
    attack: 10,

    baseDefense: 0,
    defense: 0,

    level: 1,
    xp: 0
};

// =========================
// INVENTAR
// =========================

const inventory = [];
const equipped = {
    weapon: null,
    armor: null
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

let currentDungeonLevel = 1;
let highestUnlockedLevel = 1;
let lastCompletedLevel = 0;

let farmMode = false;
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

const inventoryButton =
    document.getElementById("inventoryButton");

const inventoryScreen =
    document.getElementById("inventoryScreen");

const weaponInventoryList =
    document.getElementById("weaponInventoryList");

const armorInventoryList =
    document.getElementById("armorInventoryList");

const closeInventoryButton =
    document.getElementById("closeInventoryButton");
const equippedWeaponDisplay =
    document.getElementById("equippedWeapon");

const equippedArmorDisplay =
    document.getElementById("equippedArmor");
const nextDungeonButton =
    document.getElementById("nextDungeonButton");
// =========================
// MONSTER LADEN
// =========================

function loadMonster() {

    const template =
        dungeon.monsters[currentMonsterIndex];

 const healthMultiplier =
    1 + (currentDungeonLevel - 1) * 0.25;

const attackMultiplier =
    1 + (currentDungeonLevel - 1) * 0.15;


monster = {
    ...template,

    maxHealth:
        Math.round(
            template.maxHealth *
            healthMultiplier
        ),

    health:
        Math.round(
            template.maxHealth *
            healthMultiplier
        ),

    attack:
        Math.round(
            template.attack *
            attackMultiplier
        )
};

    document.getElementById("monsterName").textContent =
        monster.name;

    updateDisplay();
document.getElementById(
    "heroMaxHealth"
).textContent =
    hero.maxHealth;


document.getElementById(
    "heroAttack"
).textContent =
    hero.attack;


document.getElementById(
    "heroDefense"
).textContent =
    hero.defense;
    battleMessage.textContent =
        monster.boss
            ? "👑 Der Boss erscheint: " + monster.name + "!"
            : "⚔️ " + monster.name + " erscheint!";
}


// =========================
// ANZEIGE
// =========================

function updateDisplay() {

    // HELD
    heroHealthText.textContent =
        Math.max(hero.health, 0);

    heroHealthBar.style.width =
        Math.max(
            hero.health / hero.maxHealth * 100,
            0
        ) + "%";

    document.getElementById("heroXP").textContent =
        hero.xp;

    document.getElementById("heroMaxHealth").textContent =
        hero.maxHealth;

    document.getElementById("heroAttack").textContent =
        hero.attack;

    document.getElementById("heroDefense").textContent =
        hero.defense;


    // MONSTER
    // Nur aktualisieren, wenn bereits ein Monster existiert
    if (monster) {

        monsterHealthText.textContent =
            Math.max(monster.health, 0);

        monsterHealthBar.style.width =
            Math.max(
                monster.health / monster.maxHealth * 100,
                0
            ) + "%";

        document.getElementById(
            "monsterMaxHealth"
        ).textContent =
            monster.maxHealth;
    }
    if (
    currentDungeonLevel <
    highestUnlockedLevel
) {

    nextDungeonButton.textContent =
        "⚔️ Stufe "
        + highestUnlockedLevel
        + " versuchen";

} else {

    nextDungeonButton.textContent =
        "⚔️ Nächste Stufe";
}


    // DUNGEON-FORTSCHRITT
    document.getElementById(
        "dungeonProgress"
    ).textContent =
        (currentMonsterIndex + 1)
        + " / "
        + dungeon.monsters.length;
document.getElementById(
    "dungeonLevel"
).textContent =
    currentDungeonLevel;
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

    const damage =
        Math.max(
            1,
            monster.attack - hero.defense
        );

    hero.health -= damage;

    battleMessage.textContent =
        "👹 "
        + monster.name
        + " verursacht "
        + damage
        + " Schaden!";

    updateDisplay();

    if (hero.health <= 0) {

    hero.health = 0;

    updateDisplay();

    battleMessage.textContent =
        "💀 Niederlage auf Stufe "
        + currentDungeonLevel
        + "!";

    attackButton.disabled = true;


    setTimeout(
        returnToFarmLevel,
        2000
    );
}
}
// =========================
// HELDENWERTE BERECHNEN
// =========================

function recalculateHeroStats() {

    hero.attack =
        hero.baseAttack;

    hero.defense =
        hero.baseDefense;

    hero.maxHealth =
        hero.baseMaxHealth;


    if (equipped.weapon) {

        hero.attack +=
            equipped.weapon.attackBonus;
    }


    if (equipped.armor) {

        hero.defense +=
            equipped.armor.defenseBonus;

        hero.maxHealth +=
            equipped.armor.healthBonus;
    }


    if (hero.health > hero.maxHealth) {

        hero.health =
            hero.maxHealth;
    }


    updateDisplay();
}
// =========================
// ITEM AUSRÜSTEN
// =========================

function equipItem(index) {

    const item =
        inventory[index];


    if (!item) {
        return;
    }


    if (item.type === "weapon") {

        equipped.weapon =
            item;
    }


    if (item.type === "armor") {

        equipped.armor =
            item;
    }


    recalculateHeroStats();
saveGame();
    showInventory();
}
function saveGame() {

    const saveData = {
        inventory: inventory,
        equipped: equipped,
        resources: resources,
        heroXP: hero.xp,

        currentDungeonLevel:
            currentDungeonLevel,

        highestUnlockedLevel:
            highestUnlockedLevel,

        lastCompletedLevel:
            lastCompletedLevel
    };

    localStorage.setItem(
        "dungeonHeroSave",
        JSON.stringify(saveData)
    );
}
function loadGame() {

    const saved =
        localStorage.getItem(
            "dungeonHeroSave"
        );

    if (!saved) {
        return;
    }

    const data =
        JSON.parse(saved);


    if (data.inventory) {

        inventory.length = 0;

       data.inventory.forEach(item => {

    if (!item.id) {
        item.id = crypto.randomUUID();
    }

    inventory.push(item);
});
    }


   if (data.equipped) {

    if (data.equipped.weapon) {

        equipped.weapon =
            inventory.find(item =>
                item.type === "weapon" &&
                (
                    item.id === data.equipped.weapon.id ||
                    (
                        item.name === data.equipped.weapon.name &&
                        item.attackBonus === data.equipped.weapon.attackBonus
                    )
                )
            ) || null;
    }


    if (data.equipped.armor) {

        equipped.armor =
            inventory.find(item =>
                item.type === "armor" &&
                (
                    item.id === data.equipped.armor.id ||
                    (
                        item.name === data.equipped.armor.name &&
                        item.defenseBonus === data.equipped.armor.defenseBonus &&
                        item.healthBonus === data.equipped.armor.healthBonus
                    )
                )
            ) || null;
    }
}


    if (data.resources) {

        resources.gold =
            data.resources.gold || 0;

        resources.wood =
            data.resources.wood || 0;

        resources.stone =
            data.resources.stone || 0;

        resources.food =
            data.resources.food || 0;
    }


    if (
        data.heroXP !== undefined
    ) {

        hero.xp =
            data.heroXP;
    }
// Dungeon-Fortschritt laden

if (
    data.currentDungeonLevel !== undefined
) {

    currentDungeonLevel =
        data.currentDungeonLevel;
}


if (
    data.highestUnlockedLevel !== undefined
) {

    highestUnlockedLevel =
        data.highestUnlockedLevel;
}


if (
    data.lastCompletedLevel !== undefined
) {

    lastCompletedLevel =
        data.lastCompletedLevel;
}

    recalculateHeroStats();
}
// =========================
// AUSRÜSTUNG ANZEIGEN
// =========================

function showEquippedItems() {

    // WAFFE
    if (equipped.weapon) {

        equippedWeaponDisplay.innerHTML = `
            <strong>
                ${equipped.weapon.rarity.symbol}
                ${equipped.weapon.name}
            </strong>

            <br>

            ⚔️ +${equipped.weapon.attackBonus} Angriff
        `;

    } else {

        equippedWeaponDisplay.textContent =
            "Keine Waffe ausgerüstet";
    }


    // RÜSTUNG
    if (equipped.armor) {

        equippedArmorDisplay.innerHTML = `
            <strong>
                ${equipped.armor.rarity.symbol}
                ${equipped.armor.name}
            </strong>

            <br>

            🛡️ +${equipped.armor.defenseBonus} Verteidigung

            <br>

            ❤️ +${equipped.armor.healthBonus} Leben
        `;

    } else {

        equippedArmorDisplay.textContent =
            "Keine Rüstung ausgerüstet";
    }
}
// =========================
// INVENTAR ANZEIGEN
// =========================

function showInventory() {

    showEquippedItems();

    weaponInventoryList.innerHTML = "";
    armorInventoryList.innerHTML = "";

    let weaponCount = 0;
    let armorCount = 0;

    inventory.forEach((item, index) => {

        const box =
            document.createElement("div");

        box.classList.add("inventory-item");

        let values = "";
        let isEquipped = false;


        // =========================
        // WAFFE
        // =========================

        if (item.type === "weapon") {

            weaponCount++;

            values =
                `⚔️ +${item.attackBonus} Angriff`;

            if (
                equipped.weapon &&
                equipped.weapon.id === item.id
            ) {
                isEquipped = true;
            }
        }


        // =========================
        // RÜSTUNG
        // =========================

        if (item.type === "armor") {

            armorCount++;

            values =
                `🛡️ +${item.defenseBonus} Verteidigung
                <br>
                ❤️ +${item.healthBonus} Leben`;

            if (
                equipped.armor &&
                equipped.armor.id === item.id
            ) {
                isEquipped = true;
            }
        }


        if (isEquipped) {
            box.classList.add(
                "equipped-inventory-item"
            );
        }


        box.innerHTML = `
            <h3>${item.name}</h3>

            <p>
                ${item.rarity.symbol}
                ${item.rarity.name}
            </p>

            <p>
                ${values}
            </p>

            <button
                onclick="equipItem(${index})"
                ${isEquipped ? "disabled" : ""}
            >
                ${
                    isEquipped
                        ? "✅ Ausgerüstet"
                        : "Ausrüsten"
                }
            </button>
        `;


        if (item.type === "weapon") {

            weaponInventoryList.appendChild(
                box
            );
        }


        if (item.type === "armor") {

            armorInventoryList.appendChild(
                box
            );
        }

    });


    if (weaponCount === 0) {

        weaponInventoryList.innerHTML =
            "<p>Keine Waffen vorhanden.</p>";
    }


    if (armorCount === 0) {

        armorInventoryList.innerHTML =
            "<p>Keine Rüstungen vorhanden.</p>";
    }
}


    inventory.forEach((item, index) => {

        const box =
            document.createElement("div");

        box.classList.add(
            "inventory-item"
        );


       let values = "";


if (item.type === "weapon") {

    values =
        `⚔️ +${item.attackBonus} Angriff`;
}


if (item.type === "armor") {

    values =
        `🛡️ +${item.defenseBonus} Verteidigung
        <br>
        ❤️ +${item.healthBonus} Leben`;
}

        let isEquipped = false;


if (
    item.type === "weapon" &&
    equipped.weapon &&
    equipped.weapon.id === item.id
) {

    isEquipped = true;
}


if (
    item.type === "armor" &&
    equipped.armor &&
    equipped.armor.id === item.id
) {

    isEquipped = true;
}

if (isEquipped) {
    box.classList.add("equipped-inventory-item");
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

    <button
        onclick="equipItem(${index})"
        ${isEquipped ? "disabled" : ""}
    >
        ${isEquipped ? "✅ Ausgerüstet" : "Ausrüsten"}
    </button>
`;


        inventoryList.appendChild(
            box
        );
    });
}
inventoryButton.addEventListener(
    "click",
    function () {

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


closeInventoryButton.addEventListener(
    "click",
    function () {

        inventoryScreen.classList.add(
            "hidden"
        );

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
);
// =========================
// SCHWERER SCHLAG
// =========================
let heavyAttackCooldown = false;
function heavyAttack() {

    if (heavyAttackCooldown) {
    return;
}
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
startHeavyAttackCooldown();
}

function startHeavyAttackCooldown() {

    heavyAttackCooldown = true;

    let secondsLeft = 10;

    attackButton.disabled = true;

    attackButton.textContent =
        "💥 Schwerer Schlag (" + secondsLeft + "s)";


    const cooldownInterval =
        setInterval(function () {

            secondsLeft--;

            if (secondsLeft > 0) {

                attackButton.textContent =
                    "💥 Schwerer Schlag (" + secondsLeft + "s)";

            } else {

                clearInterval(cooldownInterval);

                heavyAttackCooldown = false;

                attackButton.disabled = false;

                attackButton.textContent =
                    "💥 Schwerer Schlag";
            }

        }, 1000);
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

    if (
        currentMonsterIndex >=
        dungeon.monsters.length
    ) {

        dungeonFinished = true;
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
        attackButton.disabled = true;

        battleMessage.textContent =
            "🏆 Dungeon abgeschlossen!";

        setTimeout(
            generateDungeonLoot,
            1200
        );

        return;
    }

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

            roll -= available[j].weight;

            if (roll <= 0) {

                selectedIndex = j;

                break;
            }
        }

        selected.push(
            available[selectedIndex]
        );

        available.splice(
            selectedIndex,
            1
        );
    }

    return selected;
}
// =========================
// GEGENSTÄNDE
// =========================

const weaponTypes = [
    "Kurzschwert",
    "Langschwert",
    "Kriegsaxt",
    "Streitaxt",
    "Kriegshammer",
    "Speer"
];


const armorTypes = [
    "Lederrüstung",
    "Schuppenrüstung",
    "Kettenrüstung",
    "Plattenrüstung"
];

// =========================
// SELTENHEIT
// =========================

function rollRarity() {

    const roll =
        Math.random() * 100;

    if (roll < 45) {
        return {
            name: "Gewöhnlich",
            symbol: "⬜",
            multiplier: 1
        };
    }

    if (roll < 72) {
        return {
            name: "Ungewöhnlich",
            symbol: "🟩",
            multiplier: 1.3
        };
    }

    if (roll < 87) {
        return {
            name: "Selten",
            symbol: "🟦",
            multiplier: 1.7
        };
    }

    if (roll < 95) {
        return {
            name: "Episch",
            symbol: "🟪",
            multiplier: 2.2
        };
    }

    if (roll < 99) {
        return {
            name: "Legendär",
            symbol: "🟧",
            multiplier: 3
        };
    }

    return {
        name: "Mythisch",
        symbol: "🟥",
        multiplier: 4
    };

    // Göttlich gibt es nicht in normalen Dungeons.
}
// =========================
// GEGENSTAND ERZEUGEN
// =========================

function createEquipment(type) {

    const rarity =
        rollRarity();


    // WAFFE
    if (type === "weapon") {

        const weaponName =
            weaponTypes[
                randomNumber(
                    0,
                    weaponTypes.length - 1
                )
            ];


        const baseAttack =
            randomNumber(3, 6);


        const attackBonus =
            Math.round(
                baseAttack *
                rarity.multiplier
            );


        return {
    id: crypto.randomUUID(),
    type: "weapon",
    name: name,
    rarity: rarity,
    attackBonus: attackBonus
};
    }


    // RÜSTUNG
    if (type === "armor") {

        const armorName =
            armorTypes[
                randomNumber(
                    0,
                    armorTypes.length - 1
                )
            ];


        const baseDefense =
            randomNumber(3, 6);


        const defenseBonus =
            Math.round(
                baseDefense *
                rarity.multiplier
            );


        return {
    id: crypto.randomUUID(),
    type: "armor",
    name: name,
    rarity: rarity,
    defenseBonus: defenseBonus,
    healthBonus: healthBonus
};
    }

}
       
// =========================
// WAFFE ERSTELLEN
// =========================

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

    const baseAttack =
        randomNumber(3, 6);

    const attackBonus =
        Math.round(
            baseAttack
            * rarity.multiplier
        );

    return {
        type: "weapon",
        name: name,
        rarity: rarity,
        attackBonus: attackBonus
    };
}


// =========================
// RÜSTUNG ERSTELLEN
// =========================

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

    const baseDefense =
        randomNumber(2, 5);

    const defenseBonus =
        Math.round(
            baseDefense
            * rarity.multiplier
        );

    const healthBonus =
        Math.round(
            randomNumber(5, 12)
            * rarity.multiplier
        );

    return {
        type: "armor",
        name: name,
        rarity: rarity,
        defenseBonus: defenseBonus,
        healthBonus: healthBonus
    };
}


// =========================
// DUNGEON-LOOT
// =========================

function generateDungeonLoot() {

    combatScreen.classList.add(
        "hidden"
    );

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


        // RESSOURCEN
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
                    ${item.icon} ${item.name}
                </h3>

                <p>
                    +${amount}
                </p>
            `;
        }


        // WAFFE
        else if (item.type === "weapon") {

            const weapon =
                generateWeapon();
inventory.push(weapon);
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


        // RÜSTUNG
        else if (item.type === "armor") {

            const armor =
                generateArmor();
inventory.push(armor);
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
       });

    saveGame();


    if (farmMode) {

        setTimeout(
            restartFarmDungeon,
            5000
        );
    }
}
// =========================
// FARM-DUNGEON NEU STARTEN
// =========================

function restartFarmDungeon() {

    currentDungeonLevel =
        lastCompletedLevel > 0
            ? lastCompletedLevel
            : 1;

    currentMonsterIndex = 0;

    dungeonFinished = false;

    hero.health =
        hero.maxHealth;

    attackButton.disabled = false;

    lootPanel.classList.add(
        "hidden"
    );

    combatScreen.classList.remove(
        "hidden"
    );

    loadMonster();

    saveGame();
}
// =========================
// ZUR FARM-STUFE ZURÜCK
// =========================

function returnToFarmLevel() {
farmMode = true;
    if (lastCompletedLevel > 0) {

        currentDungeonLevel =
            lastCompletedLevel;

    } else {

        currentDungeonLevel = 1;
    }


    currentMonsterIndex = 0;

    dungeonFinished = false;

    hero.health =
        hero.maxHealth;

    attackButton.disabled =
        false;

    lootPanel.classList.add(
        "hidden"
    );

    combatScreen.classList.remove(
        "hidden"
    );

    loadMonster();

    saveGame();
}
// =========================
// DUNGEON NEU STARTEN
// =========================

function restartDungeon() {
farmMode = false;
    if (
        currentDungeonLevel <
        highestUnlockedLevel
    ) {

        currentDungeonLevel =
            highestUnlockedLevel;
    }


    currentMonsterIndex = 0;

    dungeonFinished = false;

    hero.health =
        hero.maxHealth;

    // Loot ausblenden
    lootPanel.classList.add(
        "hidden"
    );

    // Kampfbildschirm anzeigen
    combatScreen.classList.remove(
        "hidden"
    );

    // Angriff wieder aktivieren
    attackButton.disabled = false;

    // Erstes Monster laden
    loadMonster();

    // Spielstand speichern
    saveGame();
}
// =========================
// BUTTON
// =========================

attackButton.addEventListener(
    "click",
    heavyAttack
);
nextDungeonButton.addEventListener(
    "click",
    restartDungeon
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
loadGame();
