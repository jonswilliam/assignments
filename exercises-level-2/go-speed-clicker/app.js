const button = document.getElementById("button")
const resetButton = document.getElementById("reset")
const clickerButton = document.getElementById("clickerButton")
const clickCountDiv = document.createElement("div")
clickCountDiv.textContent = "Clicks: 0"
clickerButton.appendChild(clickCountDiv)
const countdownTimer = document.createElement("div");
clickerButton.appendChild(countdownTimer)
let clickCount = 0
button.addEventListener("click", () => {
  clickCount++
  clickCountDiv.textContent = `Clicks: ${clickCount}`
  if (clickCount === 1) {
    const countdown = 30
    let secondsLeft = countdown;
    countdownTimer.textContent = `Time Left: ${secondsLeft} seconds`
    const timer = setInterval(() => {
      secondsLeft--
      countdownTimer.textContent = `Time Left: ${secondsLeft} seconds`
      if (secondsLeft === 0) {
        clearInterval(timer)
        button.disabled = true
      }
    }, 1000)
  }
  localStorage.setItem("clickCount", clickCount)
})

resetButton.addEventListener("click", () => {
    clickCount = 0
    clickCountDiv.textContent = `Clicks: ${clickCount}`
    localStorage.setItem("clickCount", clickCount)
})

const storedClickCount = localStorage.getItem("clickCount")
if (storedClickCount) {
  clickCount = parseInt(storedClickCount)
  clickCountDiv.textContent = `Clicks: ${clickCount}`
}