import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { CardPlanet } from "../component/cardPlanet";



export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log();

	// const [characters, setCharacters] = useState([])

	// useEffect(()=>{
	// 	// console.log("use effect activado..");
	// 	fetch("https://swapi.dev/api/people") 
	// 	.then((res) => res.json())
	// 	// .then((data) => console.log(data.results))
	// 	.then((data) => setCharacters(data.results))
	// },[])

	return (

		<div className="container">
    		<div className="text-left mt-5">
        		<h1 className="text-danger">Characters</h1>
    		</div>

			{/* {characters.map((item, index) => <p key={item.uid}>{item.name}</p>)}	 */}

			<div  className={"scroll"} style={{display: 'inline-flex'}}>
			{store.characters.map((item, index) => <Card name={item.name} gender={item.gender} eyeColor={item.eye_color} hairColor={item.hair_color}/>)}
			</div>

			<div className="text-left mt-5">
        		<h1 className="text-danger">Planets</h1>
    		</div>

			<div  className={"scroll"} style={{display: 'inline-flex'}}>

				{store.planets.map((item) => <CardPlanet namePlanet={item.name} population={item.population} terrain={item.terrain} />)}
			
			</div>
			
			<div className="text-left mt-5">
        		<h1 className="text-danger">Planets</h1>
    		</div>
			


			
			
		
		</div>
	);
}
	






	