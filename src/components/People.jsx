import React, { useState, useEffect } from "react";
import axios from "axios";

const People = (props) => {
    //destructure props
    const { info } = props;
    let [ homeworld, setHomeworld ] = useState({});
    useEffect( () => {
        // make request for homeworld
        axios.get(`${ info.homeworld }`)
        .then(response => {
            console.log('axios response: ', response)
            setHomeworld(response.data)
        })
        .catch( error => {
            console.log('homeworld error', error)
        })
    }, [info])
    
    return (
        <>
            <p>Name: { info.name }</p>
            <p>Gender: { info.gender }</p>
            <p>Height: { info.height }</p>
            <p>Hair Color: { info.hair_color }</p>
            <p>Homeworld: { homeworld.name }</p>
        </>
    )
}

export default People;