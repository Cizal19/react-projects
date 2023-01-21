import React from "react";
import logo from "../assets/react.png"

export default function Nav(){
  return(
    <nav>
        <img className="nav--logo" src={logo} />
        <h3 className="nav--logo-text">ReactFacts</h3>
        <h4 className="nav--title"> React Course Project 1</h4>
    </nav>
  )
}