import React, {useContext} from 'react'
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Card = (props) => {
	const { store, actions } = useContext(Context);
  return (
    <div>

        <div className="card mx-2" style={{width: "18rem"}}>
			<img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="card-img-top" alt="..."/>
			<div className="card-body" >
				<h5 className="card-title">{props.name}</h5>
				<p>Gender: {props.gender}</p>
				<p>Hair color: {props.hairColor}</p>
				<p>Eye color: {props.eyeColor}</p>
				<div className={"h"}>
				<Link to={`/characters/${props.created}`} className="btn btn-primary">Learn More!</Link> <button onClick={ () => actions.addFavorite(props.name)}><i className="far fa-heart favorite"></i></button>
				</div>
			</div>
		</div>

    </div>
  )
}
