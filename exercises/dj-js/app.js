const djSquare = document.getElementById("djSquare")

function mouseOver() {
    djSquare.style.backgroundColor = "blue"
    console.log("Color was changed to blue!")
}
djSquare.addEventListener("mouseover", mouseOver)

function mouseDown() {
    djSquare.style.backgroundColor = "red"
    console.log("Color was changed to red!")
}
djSquare.addEventListener("mousedown", mouseDown)

function mouseUp() {
    djSquare.style.backgroundColor = "yellow"
    console.log("Color was changed to yellow!")
}
djSquare.addEventListener("mouseup", mouseUp)

function doubleClick() {
    djSquare.style.backgroundColor = "green"
    console.log("Color was changed to green!")
}
djSquare.addEventListener("dblclick", doubleClick)

function scrollWheel() {
    djSquare.style.backgroundColor = "orange"
    console.log("Color was changed to orange!")
}
window.addEventListener("wheel", scrollWheel)


function keyFunk(KeyboardEvent) {
    const key = KeyboardEvent.key
    if (key === "b") {
        djSquare.style.backgroundColor = "blue"
        console.log("Color was changed to blue!")
    } else if (key === "r") {
        djSquare.style.backgroundColor = "red"
        console.log("Color was changed to red!")
    } else if (key === "y") {
        djSquare.style.backgroundColor = "yellow"
        console.log("Color was changed to yellow!")
    } else if (key === "g") {
        djSquare.style.backgroundColor = "green"
        console.log("Color was changed to green!")
    } else if (key === "o") {
        djSquare.style.backgroundColor = "orange"
        console.log("Color was changed to orange!")
    }
}
window.addEventListener("keypress", keyFunk)