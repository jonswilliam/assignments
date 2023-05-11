const name = "John"
let age = 101
function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]
const mapVegetables = (arr) => arr.map((carrot) => ({ type: "carrot", name: carrot }))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
const filterForFriendly = (arr) => arr.filter((person) => person.friendly)

const doMathSum = (a, b) => a + b
const produceProduct = (a, b) => a * b

const printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
]
const filterForDogs = arr => arr.filter(animal => animal.type === "dog")

const greeting = (location, name) => `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`