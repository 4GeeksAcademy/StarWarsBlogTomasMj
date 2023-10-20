import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { CardPlanet } from "../component/cardPlanet";
import { CardStarship } from "../component/cardStarship";



export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log();

	return (

		<div className="container">
    		<div className="text-left mt-5">
        		<h1 className="text-danger">Characters</h1>
    		</div>

			<div  className={"scroll"} style={{display: 'inline-flex'}}>
			{store.characters.map((item, index) => <Card  name={item.name} gender={item.gender} eyeColor={item.eye_color} hairColor={item.hair_color} created={item.created}/>)}
			</div>

			<div className="text-left mt-5">
        		<h1 className="text-danger">Planets</h1>
    		</div>

			<div  className={"scroll"} style={{display: 'inline-flex'}}>

				{store.planets.map((item) => <CardPlanet namePlanet={item.name} population={item.population} terrain={item.terrain} created={item.created} />)}
			
			</div>
			
			<div className="text-left mt-5">
        		<h1 className="text-danger">Starships</h1>
    		</div>

			<div  className={"scroll"} style={{display: 'inline-flex'}}>

				{store.starships.map((item) => <CardStarship nameStarship={item.name} starship_class={item.starship_class} manufacturer={item.manufacturer} created={item.created}/>)}	
			
			</div>
		
		</div>
	);
}
	






	