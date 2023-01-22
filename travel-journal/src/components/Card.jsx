import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Card(props){
  return(
    <div className="card">
      <img src={props.imageUrl} className="card--image"/>
      <div className="card--info">
        <div className="card--stats">
          <FontAwesomeIcon icon={faLocationDot}  className="card--location-dot"/>
          <h3 className="card--location">{props.location}</h3>
          <a href={props.googleMapsUrl} className="card--maps-url">View on Google Maps</a>
        </div> 
        <h3 className="card--title">{props.title}</h3>
        <h4 className="card--dates">{props.startDate} - {props.endDate}</h4>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  )
}