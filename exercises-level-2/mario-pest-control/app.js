const totalPrice = document.getElementById("totalPrice")
const submitButton = document.getElementById("submit")
const priceForm = document.priceForm
priceForm.addEventListener("submit", finalPrice)
function finalPrice(event) {
    event.preventDefault()
    const goombaCost = priceForm.goomba.value * 5
    const bobombCost = priceForm.bobomb.value * 7
    const cheepCost = priceForm.cheepCheep.value * 11
    const result = goombaCost + bobombCost + cheepCost
    const resultDiv = document.createElement("div")
    resultDiv.textContent = `Total Price: ${result} Coins`
    while (totalPrice.firstChild) {
        totalPrice.removeChild(totalPrice.firstChild)
    }
    totalPrice.appendChild(resultDiv)
}