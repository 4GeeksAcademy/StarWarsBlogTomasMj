import React, {useContext} from 'react'
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const CardStarship = (props) => {

	const { store, actions } = useContext(Context);

  return (
    <div>

        <div className="card mx-2" style={{width: "18rem"}}>
			<img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="card-img-top" alt="..."/>
			<div className="card-body" >
				<h5 className="card-title">{props.nameStarship}</h5>
				<p>StarShip Class: {props.starship_class}</p>
				<p>Manufacturer: {props.manufacturer}</p>
				
				<Link to="#" className="btn btn-primary">Learn More!</Link> 
				<button onClick={ () => actions.addFavorite(props.nameStarship)}>Favorites</button>
			</div>
		</div>

    </div>
  )
}