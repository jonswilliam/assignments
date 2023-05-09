function collectAnimals(...animals) {  
    return animals
}
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")

function combineFruit(fruit, sweets, vegetables) {
  return {
    fruit: fruit,
    sweets: sweets,
    vegetables: vegetables
  }
}
combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"])

const madlib = {
  location: "Burly Idaho",
  duration: "2 weeks"
}
function parseSentence({location}, {duration}) {
  return `We're going to have a good time in ${location} for ${duration}`
}

function returnFirst(items) {
    const [firstItem] = items
    return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]
function returnFavorites(arr) {
  const [firstFav, secondFav, thirdFav] = arr
  return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}
returnFavorites(favoriteActivities)

function combineAnimals(animals1, animals2, animals3) {
    return [...animals1, ...animals2, ...animals3]
}
const realAnimals = ["dog", "cat", "mouse"]
const magicalAnimals = ["jackolope"]
const mysteriousAnimals = ["platypus"]
combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)

const product = (...numbers) => {
  return numbers.reduce((acc, number) => {
    return acc * number
  }, 1)
}

const unshift = (array, a, b, c, d, e) => [a, b, c, d, e, ...array]

function populatePeople(names) {
  return names.map(name => {
    const [firstName, lastName] = name.split(' ')
    return { firstName, lastName }
  })
}
populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])