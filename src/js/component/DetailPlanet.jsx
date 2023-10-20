import React, {useContext, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";


export const DetailPlanet = ()=>{
    const {store} = useContext(Context)
    const[detail, setDetail] = useState({})
    const params = useParams()
        

    const getDetail = () => {
        const results = store.planets.find((item)=> item.created == params.id)
        console.log(results);
        setDetail(results)
    }
//          callback, lista de dependencia
    useEffect( ()=>{getDetail()}, [])

    return(

        <div>
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="col-4">
                    <img src="https://www.tennrand.com/wp-content/uploads/2015/04/800x600.gif" className="card-img-top" alt="..."/>
                    </div>
                <div className="col-4">
                    <h1>{detail.planet}</h1>
                    </div>
                </div>
            </div>
        
            

            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">Name<p>{detail.name}</p></div>
                    <div className="col">Climate<p>{detail.climate}</p> </div>
                    <div className="col">Population<p>{detail.population}</p></div>
                    <div className="col">Orbital Period<p>{detail.orbital_period}</p></div>
                    <div className="col">Rotation Period<p>{detail.rotation_period}</p></div>
                    <div className="col">Diameter<p>{detail.diameter}</p></div>
            </div>
                </div>
        </div>
    )
}
