import React from "react";
import trollFace from "../assets/troll-face.png"

export default function Navbar() {
  return(
    <nav>
      <div className="logo">
        <img src={trollFace} className="nav--img" />
        <h1 className="nav--title">meme generator</h1>
      </div>
      <h2 className="nav--text">React Course Project-3</h2>
    </nav>
  )
}