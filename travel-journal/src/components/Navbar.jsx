import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return(
    <nav>
      <FontAwesomeIcon className="nav--logo" icon={faEarthAsia} />
      <p className="nav--text">my travel journal.</p>
    </nav>
  )
}
