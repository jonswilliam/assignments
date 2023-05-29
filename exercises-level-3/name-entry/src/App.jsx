import React from "react"
import "./styles.css"

export default function App() {
  const [inputText, setInputText] = React.useState("")
  const [names, setNames] = React.useState([])

  function handleInputChnage(event) {
    setInputText(event.target.value)
  }

  function handleButtonClick() {
    setNames([...names, inputText])
    setInputText("")
  }

  const name = names.map(name => (
    <li key={name.id}>{name}</li>
  ))

  return (
    <div className="container">
      <input
        type="text"
        value={inputText}
        placeholder="Add Name"
        onChange={handleInputChnage}
      />
      <h1>{inputText}</h1>
      <button onClick={handleButtonClick}>Add Name to List</button>
      <ul>
        {name}
      </ul>
    </div>
  )
}