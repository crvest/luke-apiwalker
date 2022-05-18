import React from "react";

const Planets = (props) => {
    //destructure props
    const { info } = props;
    return (
        <>
            <p>Name: { info.name }</p>
            <p>Climate: { info.climate }</p>
            <p>Diameter: { info.diameter } km</p>
            <p>Terrain: { info.terrain }</p>
        </>
    )
}

export default Planets;