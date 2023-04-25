// const peopleWhoWantToSeeMadMaxFuryRoad = [
//   {
//     name: "Mike",
//     age: 12,
//     gender: "male"
//   },{
//     name: "Madeline",
//     age: 80,
//     gender: "female"
//   },{
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
//   },{
//     name: "Sam",
//     age: 30,
//     gender: "male"
//   },{
//     name: "Suzy",
//     age: 4,
//     gender: "female"
//   }
// ]
// for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//   const madMaxPeeps = peopleWhoWantToSeeMadMaxFuryRoad[i]  
//   if (madMaxPeeps.age >= 18) {
//       console.log(madMaxPeeps.name + " is old enough. " + (madMaxPeeps.gender === "male" ? "He’s " : "She’s ") + "cleared to see Mad Max Fury Road.")
//     } else {
//       console.log(madMaxPeeps.name + " is not old enough, " + (madMaxPeeps.gender === "male" ? "don’t let him in." : "don’t let her in."))
//     }
// }

const numbers = [2, 5, 435, 4, 3]
function addNums(numbers) {
  let sum = 0
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}
const sum = addNums(numbers)
if (sum % 2 == 0) {
  console.log("The light is off")
} else {
  console.log("The light is on")
}