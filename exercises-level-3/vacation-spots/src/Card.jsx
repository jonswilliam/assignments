import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imgUrl}/>
            <div className="card--info">
                <p>Destination: <span>{props.place}</span></p>
                <p>Price: <span>${props.price}</span></p>
                <p>Season: <span>{props.timeToGo}</span></p>
            </div>
        </div>
    )
}