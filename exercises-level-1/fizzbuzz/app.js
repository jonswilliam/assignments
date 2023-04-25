const fizzbuzzChallenge = []
let tally = {
    fizz: 0,
    buzz: 0,
    fizzbuzz: 0
}
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzbuzzChallenge.push("fizzbuzz")
        tally.fizzbuzz++
    } else if (i % 5 == 0) {
        fizzbuzzChallenge.push("buzz")
        tally.buzz++
    } else if (i % 3 === 0) {
        fizzbuzzChallenge.push("fizz")
        tally.fizz++
    } else {
        fizzbuzzChallenge.push(i)
    }
}
const results = {
    fizzbuzzChallenge,
    tally
}
console.log(results)