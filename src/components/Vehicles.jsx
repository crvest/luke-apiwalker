import React from "react";

const Vehicles = (props) => {
    //destructure props
    const { info } = props;
    return (
        <>
            <p>Name: { info.name }</p>
            <p>Cost: { info.cost_in_credits } Galactic Credits</p>
            <p>Crew: { info.crew }</p>
            <p>Manufacturer: { info.manufacturer } </p>
        </>
    )
}

export default Vehicles;