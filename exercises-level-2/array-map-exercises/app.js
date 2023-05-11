const doubleNumbers = arr => arr.map(num => num * 2)

const stringItUp = arr => arr.map(num => String(num))

const capitalizeNames = arr => arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())

const namesOnly = arr => arr.map(name => name.name)

const makeStrings = arr => arr.map(({ name, age }) => age >= 18 ? `${name} can go see The Matrix` : `${name} is underage!! THEY SHALL NOT PASS!!`)

const readyToPutInTheDOM = arr => arr.map(({ name, age }) => `<h1>${name}</h1><h2>${age}</h2>`)