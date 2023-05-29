import React from "react"
import Navbar from "./Navbar.jsx"

export default function Header() {
    return (
        <header className="header">
            <div className="navbar--title">
                <h2>Start Bootstrap</h2>
            </div>
            <Navbar />
            <div className="titleContainer">
                <h1 className="header--title">Clean Blog</h1>
                <h2 className="header--subtitle">A Blog Theme by Start Bootstrap</h2>
            </div>
        </header>
    )
}