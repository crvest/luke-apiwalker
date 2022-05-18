import React from "react";

const Species = (props) => {
    // destructure props
    const { info } = props;
    return (
        <>
            <p>Name: { info.name }</p>
            <p>Classification: { info.classification }</p>
            <p>Language: { info.language }</p>
            <p>Designation: { info.designation }</p>
            <p>Average Lifespan: { info.average_lifespan } years</p>
        </>
    )
}

export default Species;