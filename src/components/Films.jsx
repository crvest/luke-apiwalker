import React from "react";

const Films = (props) => {
    //destructure props
    const { info } = props;
    return (
        <>
            <p>Title: { info.title }</p>
            <p>Opening Crawl: { info.opening_crawl }</p>
            <p>Director: { info.director }</p>
            <p>Release Date: { info.release_date }</p>
        </>
    )
}

export default Films;