const readlineSync = require("readline-sync")
const player = {
    name: "",
    hp: 100,
    inventory: []
}
const enemies = ["direwolf", "orc", "hobgoblin", "ghoul"]
function randomEnemy() {
    return enemies[Math.floor(Math.random() * enemies.length)]
}
const randomItem = ["potion", "arcane essence", "dull blade"]
function randomItems() {
    return randomItem[Math.floor(Math.random() * randomItem.length)]
}
function printStats() {
    console.log(`Name: ${player.name}`)
    console.log(`HP: ${player.hp}`)
    console.log(`Inventory: ${player.inventory}`)
}
function colossalAdventure() {
    var enemy = randomEnemy()
    var item = randomItems()
    var enemyHP = Math.floor(Math.random() * 40)
    console.log(`A wild ${enemy} appeared!`)
    const playerOptions = ["Fight", "Run"]
    const prompt = readlineSync.keyInSelect(playerOptions, "How would you like to proceed?")
    const choice = playerOptions[prompt]
    if (choice === "Fight") {
        while (player.hp > 0 && enemyHP > 0) {
            const dealDamage = Math.floor(Math.random() * 11) + 20
            console.log(`You've dealt ${dealDamage} damage to the ${enemy}.`)
            enemyHP -= dealDamage
            const incurDamage = Math.floor(Math.random() * 10) + 15
            player.hp -= incurDamage
            console.log(`You've been dealt ${incurDamage} damage. Current HP is ${player.hp}.`)
            if (enemyHP <= 0) {
                player.hp += Math.floor(Math.random() * 6) + 5
                console.log(`You've vanquished the ${enemy}! You loot their body and recover some of your health. Current HP is ${player.hp}.`)
                player.inventory.push(`${item}`)
                const printPrompt = readlineSync.question("Print stats? Press (y/n) and 'Enter': ")
                if (printPrompt.toLowerCase() === "y") {
                    printStats()
                }
            }
            if (player.hp <= 0) {
                console.log("You've drawn your last breath, adventurer. Welcome to oblivion.")
                process.exit()
            }
        }
    } else if (choice === "Run") {
        const run = Math.random() < 0.5
        if (run) {
            console.log(`You succeeded in your escape but the ${enemy} still managed to deal some damage as you ran!`)
            const attackOfOpportunity = Math.floor(Math.random() * 10) + 10
            player.hp -= attackOfOpportunity
            console.log(`You were dealt ${attackOfOpportunity} collateral damage as a result of your escape. Current HP is ${player.hp}.`)
        } else {
            console.log(`Your escape attempt failed. As a result, the ${enemy} has an opportunity to attack!`)
            const attackOfOpportunity = Math.floor(Math.random() * 10) + 10
            player.hp -= attackOfOpportunity
            console.log(`You've been dealt ${attackOfOpportunity} damage. You must fight, adventurer! Current HP is ${player.hp}.`)
            while (player.hp > 0 && enemyHP > 0) {
                const dealDamage = Math.floor(Math.random() * 11) + 20
                console.log(`You've dealt ${dealDamage} damage to the ${enemy}.`)
                enemyHP -= dealDamage
                if (enemyHP <= 0) {
                    player.hp += Math.floor(Math.random() * 6) + 5
                    console.log(`You've vanquished the ${enemy}! You loot their body and recover some of your health. Current HP is ${player.hp}.`)
                    player.inventory.push(`${item}`)
                    const printPrompt = readlineSync.question("Print stats? Press (y/n) and 'Enter': ")
                    if (printPrompt.toLowerCase() === "y") {
                    printStats()
                    }
                    while (player.hp > 0) {
                        const movement = readlineSync.keyIn("Press 'w' to walk: ", {limit: "w"})
                        const encounter = Math.random() < 0.4
                        if (encounter) {
                            colossalAdventure()
                        } else {
                            console.log("You traverse the terrain with a look of determination.")
                        }
                    }
                    break
                }
                const incurDamage = Math.floor(Math.random() * 10) + 15
                player.hp -= incurDamage
                console.log(`You've been dealt ${incurDamage} damage. Current HP is ${player.hp}.`)
                if (player.hp <= 0) {
                    process.exit()
                }
            }
        }
    }
}
player.name = readlineSync.question("Welcome, adventurer! What is your name? ")
console.log(`It's a pleasure to meet you. It's time to embark on your journey! As a helpful tip, I recommend you follow the directions carefully and type your answers strictly as they are given to you.`)
while (player.hp > 0) {
    const movement = readlineSync.keyIn("Press 'w' to walk: ", {limit: "w"})
    const encounter = Math.random() < 0.4
    if (encounter) {
        colossalAdventure()
    } else {
        console.log("You traverse the terrain with a look of determination.")
    }
}
console.log("You've drawn your last breath, adventurer. Welcome to oblivion.")