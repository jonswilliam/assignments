import React from "react"

export default function Pet({ name, breed }) {
    return (
        <div className="petData">
            <h4>Name: <span>{name}</span></h4>
            <h4>Breed: <span>{breed}</span></h4>
        </div>
    )
}