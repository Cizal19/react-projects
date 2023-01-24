import React from "react"
import Navbar from "./components/Navbar"
import Meme from "./components/Meme"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Meme />  
      </div>
    </div>
  )
}

export default App
