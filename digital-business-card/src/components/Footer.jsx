import React from "react"; 
import twitter from "../assets/twitter-icon.png"
import facebook from "../assets/facebook-icon.png"
import instagram from "../assets/instagram-icon.png"
import github from "../assets/github-icon.png"


export default function Footer() {
  return (
    <footer>
      <img src={twitter} />
      <img src={facebook} />
      <img src={instagram} />
      <img src={github}/>
    </footer>
  )
}
