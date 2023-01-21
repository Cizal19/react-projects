import React from "react"
import { ReactDOM } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"

export default function App(){
  return(
    <div className="container">
      <Nav />
      <Main />
    </div>
  )
}
