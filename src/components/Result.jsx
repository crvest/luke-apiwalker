import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Species from "./Species";
import Planets from "./Planets";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import People from "./People";
import Films from "./Films";

const Result = () => {
let { category, id } = useParams();
let [ info, setInfo ] = useState({});
// state variable for errors
let [ error, setError ] = useState(false);

useEffect( () => {
    // make axios request to api
    axios.get(`https://swapi.dev/api/${category}/${id}`)
    .then(response => {
        setError(false)
        console.log('axios response: ', response)
        setInfo(response.data)
    })
    .catch( error => {
        console.log('something went wrong', error)
        setError(true);
    })
}, [category, id])

    return (
        <>
            {
                error == true?
                <div>
                    <h1>These are not the droids you're looking for</h1>
                    <img src="https://static.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest?cb=20111115052816" width="200px" alt="" />
                </div>: category == 'planets'?
                <div>
                    <Planets info={ info }></Planets>
                </div>: category == 'starships'?
                <div>
                    <Starships info={ info }></Starships>
                </div>: category == 'vehicles'?
                <div>
                    <Vehicles info={ info }></Vehicles>
                </div>: category == 'people'?
                <div>
                    <People info={ info }></People>
                </div>: category == 'films'?
                <div>
                    <Films info={ info }></Films>
                </div>: category == 'species'?
                <div>
                    <Species info={ info }></Species>
                </div>: null
            }

        </>
    )
}

export default Result;