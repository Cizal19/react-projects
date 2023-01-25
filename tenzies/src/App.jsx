import { useState, useEffect } from 'react'
import Die from './components/Die'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [count, setCount] = useState(0)

  const [rolls, setRolls] = useState(
    () => JSON.parse(localStorage.getItem("rolls")) || {lowestRolls: 20}
  )

  useEffect(() => {
    localStorage.setItem("rolls", JSON.stringify(rolls))
  }, [rolls])

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    if(allHeld && allSameValue){
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return(
      {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }
    )
  }

  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map( die => {
      return(
        die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die
      )
    })
    )
  }

  const dieElements = dice.map( dice => {
    return(
      <Die 
        key={dice.id} 
        value={dice.value}
        isHeld={dice.isHeld}
        holdDice={() => holdDice(dice.id)}
      />
    )
  })

  function rollDice(){
    if(!tenzies){
      setCount(prevCount => prevCount + 1)
      setDice(prevDice => prevDice.map(die => {
        return (
          die.isHeld?
          die :
          generateNewDie()
        )
      })
      )
    } else {
      setRolls(prevRolls => {
        if (count < prevRolls.lowestRolls){
          return(
            {
              lowestRolls: count
            }
          )
        } else {
          return prevRolls
        }
      })
      setCount(0)
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  return (
    <main>
      <h1 className="card--title">Tenzies</h1>
      <p className="card--text">
        Roll until all dice are the same.
        Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {dieElements}
      </div>
      {!tenzies && <div className="won--text">No of rolls: {count}</div>}
      {tenzies && <div className="won--text">You Won in {count} rolls!</div>}
      <button 
        className="card--button"
        onClick={rollDice}
      >
        {tenzies? "New Game" : "Roll"}
      </button>
      <div className="won--text">Lowest rolls for win: {rolls.lowestRolls}</div>
      {tenzies && <Confetti />}
    </main>
  )
}

export default App
