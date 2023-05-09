const addDiv = document.getElementById("add")
const addForm = document.add
addForm.addEventListener("submit", addSubmit)
function addSubmit(event) {
    event.preventDefault()
    const num1 = Number(addForm.num1.value)
    const num2 = Number(addForm.num2.value)
    const result = num1 + num2
    const resultDiv = document.createElement("div")
    resultDiv.textContent = result
    addDiv.appendChild(resultDiv)
}

const subDiv = document.getElementById("sub")
const subForm = document.sub
subForm.addEventListener("submit", subSubmit)
function subSubmit(event) {
    event.preventDefault()
    const num1 = Number(subForm.num1.value)
    const num2 = Number(subForm.num2.value)
    const result = num1 - num2
    const resultDiv = document.createElement("div")
    resultDiv.textContent = result
    subDiv.appendChild(resultDiv)
}

const mulDiv = document.getElementById("mul")
const mulForm = document.mul
mulForm.addEventListener("submit", mulSubmit)
function mulSubmit(event) {
    event.preventDefault()
    const num1 = Number(mulForm.num1.value)
    const num2 = Number(mulForm.num2.value)
    const result = num1 * num2
    const resultDiv = document.createElement("div")
    resultDiv.textContent = result
    mulDiv.appendChild(resultDiv)
}