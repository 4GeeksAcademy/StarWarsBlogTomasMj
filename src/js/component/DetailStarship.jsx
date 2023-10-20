import React, {useContext, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { Context } from "../store/appContext";

export const DetailStarShip = () =>{
    const {store} = useContext(Context)
    const[detail, setDetail] = useState({})
    const params = useParams()

    const getDetailStarships = () =>{
        const results = store.starships.find((item) => item.created == params.id)
        console.log(results)
        setDetail(results)
    } 
    
    
    useEffect( () =>{getDetailStarships()},[])

    return(
        <h1>Detalle naves{detail.name}</h1>
    )
}