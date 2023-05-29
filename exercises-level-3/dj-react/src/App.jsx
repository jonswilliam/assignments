import React from "react"
import Square from "./Square.jsx"
import "./style.css"

export default function App() {
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])

  function djSmall() {
    const toggle = colors.map(color => color === "white" ? "black" : "white")
    setColors(toggle)
  }
  
  function partyDJ() {
    const party = [...colors]
    party[0] = "purple"
    party[1] = "purple"
    setColors(party)
  }

  function leftBlue () {
    const leftBlue = [...colors]
    leftBlue[2] = "blue"
    setColors(leftBlue)
  }

  function rightBlue () {
    const rightBlue = [...colors]
    rightBlue[3] = "blue"
    setColors(rightBlue)
  }

  function bigDJOne() {
    const djOne = [...colors]
    djOne[0] = "green"
    setColors(djOne)
  }

  function bigDJTwo() {
    const djTwo = [...colors]
    djTwo[1] = "red"
    setColors(djTwo)
  }

  function bigDJThree() {
    const djThree = [...colors]
    djThree[2] = "brown"
    setColors(djThree)
  }

  function bigDJFour() {
    const djFour = [...colors]
    djFour[3] = "orange"
    setColors(djFour)
  }

  const square = colors.map(box => (
    <Square
      key={box.id}
      {...box}
      color={box}
    />
  ))

  return (
    <div className="container">
      <div className="square--container">
        {square}
      </div>
      <div className="button--container">
        <button onClick={djSmall}>DJ Small</button>
        <button onClick={partyDJ}>Party DJ</button>
        <button onClick={leftBlue}>Left Blue</button>
        <button onClick={rightBlue}>Right Blue</button>
        <button onClick={bigDJOne}>Big DJ One</button>
        <button onClick={bigDJTwo}>Big DJ Two</button>
        <button onClick={bigDJThree}>Big DJ Three</button>
        <button onClick={bigDJFour}>Big DJ Four</button>
      </div>
    </div>
  )
}