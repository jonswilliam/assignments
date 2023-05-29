import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState("")

  useEffect(() => {
    function getRandomColor() {
      axios.get("http://www.colr.org/json/color/random")
        .then(response => {
          const randomColor = response.data.new_color
          setBackgroundColor(`#${randomColor}`)
        })
        .catch(error => {
          console.error('Error retrieving random color:', error);
        })
    }
    getRandomColor()
  }, [])

  return (
    <>
      <div style={{ backgroundColor }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
