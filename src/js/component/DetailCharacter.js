import React, {useContext, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";


export const DetailCharacter = ()=>{

    const {store} = useContext(Context)
    const [detail, setDetail] = useState({})
    const params = useParams()

    const getDetailCharacter = () =>{
        const results = store.characters.find((item) => item.created == params.id)
        console.log(results);
        setDetail(results)
    }

    useEffect( () => {getDetailCharacter()}, [])

    return(
       
        <div>
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="col-4">
                    <img src="https://www.tennrand.com/wp-content/uploads/2015/04/800x600.gif" className="card-img-top" alt="..."/>
                    </div>
                <div className="col-4">
                    <h1>{detail.name}</h1>
                    </div>
                </div>
            </div>
        
            

            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">Name<p>{detail.name}</p></div>
                    <div className="col">Birth Year<p>{detail.birth_year}</p> </div>
                    <div className="col">Gender<p>{detail.gender}</p></div>
                    <div className="col">Height<p>{detail.height}</p></div>
                    <div className="col">Skin Color<p>{detail.skin_color}</p></div>
                    <div className="col">Eye Color<p>{detail.eye_color}</p></div>
            </div>
                </div>
        </div>

    )
}
