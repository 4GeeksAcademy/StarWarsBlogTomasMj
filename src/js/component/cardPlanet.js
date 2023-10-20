import React, {useContext} from 'react'
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const CardPlanet = (props) => {

	const { store, actions } = useContext(Context);

  return (
    <div>

        <div className="card mx-2" style={{width: "18rem"}}>
			<img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="card-img-top" alt="..."/>
			<div className="card-body" >
				<h5 className="card-title">{props.namePlanet}</h5>
				<p>Population: {props.population}</p>
				<p>Terrain: {props.terrain}</p>
				<Link to={`/planets/${props.created}`} className="btn btn-primary">Learn More!</Link> <button onClick={ () => actions.addFavorite(props.namePlanet)}>Favorites</button>
			</div>
		</div>

    </div>
  )
}
