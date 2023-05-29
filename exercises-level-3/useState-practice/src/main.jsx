import { useState } from "react"

// const [color, setColor] = useState("pink")
// // setColor("indigo")
// setColor(prevColor => prevColor === "pink" ? "blue" : "pink")

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])
setPeople(prevPeople => ([
  ...prevPeople,
  {
    firstName: "Danny",
    lastName: "Provolone"
  }
]))

const [colors, setColors] = useState(["pink", "blue"])
setColors(prevColors => [...prevColors, "green"])

const [countObject, setCountObject] = useState({
	count: 0
})
setCountObject(prevState => ({count: prevState.count + 1}))

const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})
setPerson(prevPerson => ({
  ...prevPerson,
  age: 30
}))

// On our last exercise (not shown above), the issue with the state setter function is that it's overwriting the current value of the "colors" state.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)