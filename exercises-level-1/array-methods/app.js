const fruit = ["banana", "apple", "orange", "watermelon"]
const vegetables = ["carrot", "tomato", "pepper", "lettuce"]
vegetables.pop()
fruit.shift()
const orangeIndex = fruit.indexOf("orange")
fruit.push(orangeIndex)
const vegArrLength = vegetables.length
vegetables.push(vegArrLength)
const food = fruit.concat(vegetables)
const splicedArr = food.splice(4, 2)
const reversedArr = food.reverse()
console.log(reversedArr.join())