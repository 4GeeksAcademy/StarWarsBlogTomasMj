import React from 'react'
import "../../styles/card.css";
import { Link } from "react-router-dom";



export const Card = (props) => {
  return (
    <div>

        <div className="card mx-2" style={{width: "18rem"}}>
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body" >
				<h5 className="card-title">{props.name}</h5>
				<p>Gender: {props.gender}</p>
				<p>Hair color: {props.hairColor}</p>
				<p>Eye color: {props.eyeColor}</p>
				<Link to="#" className="btn btn-primary">Learn More!</Link> 
			</div>
		</div>

    </div>
  )
}
