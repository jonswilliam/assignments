const auxHeader = document.getElementById("header")
const peachFuzz = "<span style='color: peachpuff'>Jon William</span> wrote the JavaScript"
auxHeader.innerHTML = peachFuzz
auxHeader.style.textAlign = "center"
auxHeader.style.fontWeight = "bold"

const mainHeader = document.createElement("header")
mainHeader.textContent = "JavaScript Made This!!"
mainHeader.style.textAlign = "center"
mainHeader.style.fontSize = "30px"
mainHeader.style.fontWeight = "bold"
mainHeader.style.paddingBottom = "30px"
document.body.prepend(mainHeader)

const leftMessages = document.querySelectorAll(".left")
const firstleftMessage = leftMessages[0].textContent = "Can we turn our beds into bunk beds??"
const secondleftMessage = leftMessages[1].textContent = "We've already figured out how to do this, the beds match up perfectly, and we would have so much more room for activities!"
const rightMessages = document.querySelectorAll(".right")
const firstRightMessage = rightMessages[0].textContent = "Why are you so sweaty?"
const secondRightMessage = rightMessages[1].textContent = "You don't need permission from us to build bunk beds, you're adults. You can do what you want."

const clearMessages = document.getElementById("clear-button")
clearMessages.addEventListener("click", clearButton)
function clearButton() {
    const messages = document.getElementsByClassName("messages")[0]
    messages.textContent = ""
}

// const count = 0
// const inputForm = document.getElementById("input")
// const send = document.querySelector("form")
// send.addEventListener("submit", addMessage)
// function addMessage(event) {
//     event.preventDefault()
//     const textValueDiv = document.createElement("div")
//     textValueDiv.innerHTML = inputForm.value
//     count++
//     if (count % 2 == 1) {
//         textValueDiv.classList.add("left")
//     } else {
//         textValueDiv.classList.add("right")
//     }
//     document.querySelector(".messages").appendChild(textValueDiv)
//     inputForm.value = ""
// }

// const select = document.getElementById("theme-drop-down")
// select.addEventListener("change", dropDown) 
// function dropDown() {
//     const themeValue = select.value
//     if (themeValue === "theme-one") {
//         document.getElementsByClassName("messages").style.color = "white"
//         leftMessages.style.backgroundColor = "blue"
//         rightMessages.style.backgroundColor = "brown"
//     } else if (themeValue === "theme-two") {
//         document.getElementsByClassName("messages").style.color = "white"
//         leftMessages.style.backgroundColor = "red"
//         rightMessages.style.backgroundColor = "black"
//     }
// })