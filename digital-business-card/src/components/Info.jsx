import React from "react";
import photo from "../assets/cizal.jpg"
import email from "../assets/email-icon.png"
import linkedin from "../assets/linked-in.png"

export default function Info() {
  return (
    <div className="info">
      <img className="photo" src={photo} />
      <h3 className="name">Cizal Gautam</h3>
      <h4 className="profession">Student</h4>
      <h5 className="website">cizal.website</h5>
      <button className="email-button">
        <img src={email} />
        Email
      </button>
      <button className="linkedin-button">
        <img src={linkedin} />
          LinkedIn
      </button>
    </div>
  )
}