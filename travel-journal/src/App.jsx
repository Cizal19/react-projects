import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"

function App() {

  const cards = data.map(item => {
    if (item.id < data.length){
      return(
        <div>
          <Card
            key={item.id}
            {...item}
          />
          <hr className='card--line' />
        </div>
      )
    } else {
      return ( 
        <Card
          key={item.id}
          {...item}
        />
    )
    }


  })

  return (
    <div className="App">
      <Navbar />
      <div className='container'>{cards}</div>
    </div>
  )
}

export default App

