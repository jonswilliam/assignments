const readlineSync = require("readline-sync")

function caesarCipher(text, shift) {
    let result = ""
    for (let i = 0; i < text.length; i++) {
        const character = text[i]
        if (/[a-zA-Z]/.test(character)) {
            const alphabet = "abcdefghijklmnopqrstuvwxyz"
            const currentIndex = alphabet.indexOf(character.toLowerCase())
            const newIndex = (currentIndex + shift) % 26
            const shiftedPhrase = alphabet[newIndex]
            result += shiftedPhrase
        } else {
            result += character
        }
    }
    return result
}

const input = readlineSync.question("What phrase would you like to encrypt? ").toLowerCase()
const shift = parseInt(readlineSync.question("How many letters would you like to shift? "))

const encryptedText = caesarCipher(input, shift)
console.log(`Your encrypted text: ${encryptedText}`)