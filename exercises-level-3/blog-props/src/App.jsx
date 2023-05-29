import React from "react"
import Header from "./Header.jsx"
import BlogList from "./BlogList.jsx"
import Footer from "./Footer.jsx"
import "./style.css"

export default function App() {
  return (
    <main>
      <Header />
      <BlogList />
      <Footer />
    </main>
  )
}