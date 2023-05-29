import React from "react"
import Card from "./Card.jsx"
import data from "./data.jsx"
import "./style.css"

export default function App() {
  const cards = data.map(card => 
		<Card
			key={card.id} 
			{...card}
		/>
  )
	return (
		<div>
			{cards}
		</div>
	)
}