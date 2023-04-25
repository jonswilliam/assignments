const readline = require("readline-sync")
function addNum(num1, num2) {
    return num1 + num2
}
function subNum(num1, num2) {
    return num1 - num2
}
function mulNum(num1, num2) {
    return num1 * num2
}
function divNum(num1, num2) {
    return num1 / num2
}
const firstNum = readlineSync.prompt("Please enter your first number ")
const secondNum = readlineSync.prompt("Please enter your second number ")
const operator = readlineSync.keyIn("Would you like to (A)dd, (S)ubtract, (M)ultiply, or (D)ivide? ", {limit: "$<a, s, m, d"})
let result
    if (operator === "a") {
        result = addNum(firstNum, secondNum)
    } else if (operator === "s") {
        result = subNum(firstNum, secondNum)
    } else if (operator === "m") {
        result = mulNum(firstNum, secondNum)
    } else if (operator === "d") {
        result = divNum(firstNum, secondNum)
    }
console.log("The result is: " + result)