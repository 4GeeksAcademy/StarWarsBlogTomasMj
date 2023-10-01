import React from 'react'
import "../../styles/card.css";
import { Link } from "react-router-dom";



export const CardPlanet = (props) => {
  return (
    <div>

        <div className="card mx-2" style={{width: "18rem"}}>
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body" >
				<h5 className="card-title">{props.namePlanet}</h5>
				<p>Population: {props.population}</p>
				<p>Terrain: {props.terrain}</p>
				<Link to="#" className="btn btn-primary">Learn More!</Link> 
			</div>
		</div>

    </div>
  )
}
