const leastToGreatest = arr => arr.sort((a, b) => a - b)

const greatestToLeast = arr => arr.sort((a, b) => b - a)

const lengthSort = arr => arr.sort((a, b) => a.length - b.length)

const alphabetical = arr => arr.sort((a, b) => a > b)

const byAge = arr => arr.sort((a, b) => a.age - b.age)