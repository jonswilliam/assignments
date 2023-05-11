const total = arr => arr.reduce((final, num) => final += num)

const stringConcat = arr => arr.reduce((final, num) => final + num.toString())

const totalVotes = voters.reduce((final, voter) => voter.voted ? final + 1 : final, 0)

const shoppingSpree = arr => arr.reduce((final, item) => final + item.price, 0)

const flatten = arr => arr.reduce((final, stuff) => [...final, ...stuff], [])

function voterResults(arr) {
    const youngVotes = arr.filter(voter => voter.age >= 18 && voter.age <= 25 && voter.voted).length
    const youngPeople = arr.filter(voter => voter.age >= 18 && voter.age <= 25).length
    const midVotesPeople = arr.filter(voter => voter.age >= 26 && voter.age <= 35 && voter.voted).length
    const midPeople = arr.filter(voter => voter.age >= 26 && voter.age <= 35).length
    const oldVotesPeople = arr.filter(voter => voter.age >= 36 && voter.age <= 55 && voter.voted).length
    const oldPeople = arr.filter(voter => voter.age >= 36 && voter.age <= 55).length
    return {
      numYoungVotes: youngVotes,
      numYoungPeople: youngPeople,
      numMidVotesPeople: midVotesPeople,
      numMidsPeople: midPeople,
      numOldVotesPeople: oldVotesPeople,
      numOldsPeople: oldPeople
    }
}