import React from "react"
import Pet from "./Pet.jsx"


export default function Friend({ name, age, pets }) {
    const petList = pets.map(pet =>
        <Pet
            key={pet.id}
            {...pet}
        />
    )
    return (
        <div className="friendData">
            <h2>Name: <span>{name}</span></h2>
            <h3>Age: <span>{age}</span></h3>
            <h3>Pets:</h3>
                {petList}
        </div>
    )
}