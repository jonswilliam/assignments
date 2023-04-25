// function findLargestNum(randomArr) {
//     let largest = randomArr[0]
//     for (let i = 1; i < randomArr.length; i++) {
//         if (randomArr[i] > largest) {
//             largest = randomArr[i]
//         }
//     }
//     console.log(largest)
// }
// const randomArr = [6, 13, 250, 3]
// findLargestNum(randomArr)

// function lettersWithStrings(randomArr, string) {
//     const boop = []
//     for (let i = 0; i < randomArr.length; i++) {
//         if (randomArr[i].includes(string)) {
//             boop.push(randomArr[i])
//         }
//     }
//     return boop
// }
// const randomArr = ["#3", "$$$", "C%4!", "Hey!"]
// const stringToFind = ["!"]
// const findMatch = lettersWithStrings(randomArr, stringToFind)
// console.log(findMatch)

// function isDivisible(num1, num2) {
//     if (num1 % num2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isDivisible(4, 2))