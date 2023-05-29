import React from "react"
import Friend from "./Friend.jsx"
import data from "./data.jsx"

export default function FriendList() {
    const friends = data.map(friend => 
        <Friend
            key={friend.id}
            {...friend}
        />
    )
    return (
        <div className="friendList">
            {friends}
        </div>
    )
}