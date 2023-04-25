const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(people, alphabet) {
    const barneyArr = []
    for (let i = 0; i < people.length; i++) {
       barneyArr.push(people[i] + ":")
       for (let j = 0; j < alphabet.length; j++) {
        barneyArr.push(alphabet[j].toUpperCase())
       }
    }
    return barneyArr
}
console.log(forception(people, alphabet))