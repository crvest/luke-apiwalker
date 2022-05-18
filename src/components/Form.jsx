import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {

    let [ category, setCategory ] = useState("");
    let [ id, setId ] = useState("");
    let history = useHistory();

    const search = (e) => {
        e.preventDefault();

        history.push(`/${category}/${id}`)
    }

    return (
        <>
            <form onSubmit={search}>
                <h1>Star Wars API</h1>
                <label htmlFor='search'>Search for: </label>
                <select name='search' id='search' defaultValue='default' onChange={ (e) =>{setCategory(e.target.value)} }>
                    <option value='default' disabled hidden>Choose an option</option>
                    <option value='planets'>Planets</option>
                    <option value='starships'>Starships</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='people'>People</option>
                    <option value='films'>Films</option>
                    <option value='species'>Species</option>
                </select>
                &nbsp; &nbsp;
                <label htmlFor='id'>ID: </label>
                <input type='text' id='id' name='id' onChange={ (e)=>{setId(e.target.value)} }></input>
                <input type='submit' value='Search'></input>
            </form>
            <hr />
        </>
    )
}

export default Form;