const readlineSync = require("readline-sync")
function askQuestion(question) {
    return readlineSync.question(question + " ") 
}
function escapeRoom() {
    const name = askQuestion("Hello, stranger. What's your name?")
    console.log(`Greetings, ${name}. I'm afraid I have some bad news for you: you're currently stuck in this room with only one way out. To escape, you must find the key that belongs to the door. Note the hole in the wall. And beware: while still in this room, you could also be met with a very untimely demise.`)
    let gameOver = false
    while (!gameOver) {
        const action = askQuestion("Choose your destiny (search the room / put your hand in the hole)")
        switch (action) {
            case "search the room":
                console.log("You look tirelessly around the room but to no avail, until suddenly... you find a key cleverly hidden behind a picture frame!")
                const keyAction = askQuestion("What would you like to do next? (use key to unlock the door / put your hand in the hole)")
                switch (keyAction) {
                    case "use key to unlock the door":
                        console.log("After a perilous ordeal, you use the key to unlock the door and escape! Congratulations... you live to fight another day")
                        gameOver = true
                        break
                    case "put your hand in the hole":
                        console.log("Despite a seemingly certain escape, your curiosity gets the better of you. You put your hand in the hole and a guillotine severs your hand... with no way to treat your wound, you bleed out and die")
                        gameOver = true
                        break
                    default:
                        console.log("That is an invalid action. Do try again... if you want to live")
                }
                break
            case "put your hand in the hole":
                console.log("Your curiosity leads you straight to the hole in the wall. You put your hand inside and a guillotine severs your hand... with no way to treat your wound, you bleed out and die")
                gameOver = true
                break
            default:
                console.log("That is an invalid action. Do try again... if you want to live")
        }
    }
}
escapeRoom()