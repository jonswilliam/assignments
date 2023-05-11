const fiveAndGreaterOnly = arr => arr.filter(num => num >= 5)

const evensOnly = arr => arr.filter(num => num % 2 === 0)

const fiveCharactersOrFewerOnly = arr => arr.filter(stuff => stuff.length <= 5)

const peopleWhoBelongToTheIlluminati = arr => arr.filter(person => person.member === true)

const ofAge = arr => arr.filter(person => person.age >= 18)