import React from "react"

export default function Dicebox() {
    const [numbers, setNumbers] = React.useState([])
    function handleClick() {
        const newNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1)
        setNumbers(newNumbers)
    }
    const clicketyClack = numbers.map(number => (
        <div key={number.id}>{number}</div>
    ))
    return (
        <div className="diceBox">
            <div className="dice">
                {clicketyClack}
            </div>
            <button onClick={handleClick}>Shake Dicebox</button>
        </div>
    )
}