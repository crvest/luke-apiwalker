import React from "react";

const Starships = (props) => {
    //destructure props
    const { info } = props;
    return (
        <>
            <p>Name: { info.name }</p>
            <p>Cost: { info.cost_in_credits } Galactic Credits</p>
            <p>Crew: { info.crew }</p>
            <p>Manufacturer: { info.manufacturer } </p>
            <p>Hyperdrive Rating: { info.hyperdrive_rating }</p>
        </>
    )
}

export default Starships;