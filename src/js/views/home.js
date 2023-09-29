import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";




export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log();

	const [characters, setCharacters] = useState([])

	useEffect(()=>{
		console.log("use effect activado..");
		fetch("https://www.swapi.tech/api/people") 
		.then((res) => res.json())
		// .then((data) => console.log(data.results))
		.then((data) => setCharacters(data.results))
	},[])

	return (

		<div className="container">
    		<div className="text-left mt-5">
        		<h1 className="text-danger">Characters</h1>
    		</div>

			{/* {characters.map((item, index) => <p key={item.uid}>{item.name}</p>)}	 */}

			<div  className={"scroll"} style={{display: 'inline-flex'}}>
			{characters.map((item, index) => <Card name={item.name}/>)}
			</div>

			{/* <Card name="casa"/> */}


		</div>
	);
}
	






	