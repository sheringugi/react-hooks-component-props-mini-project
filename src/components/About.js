import React from "react";
import blogData from "../data/blog";

function About( {
    image="https://via.placeholder.com/215",
    about,
}) {

    return(
        <aside>
            <img src={blogData.image} alt={blogData.logo} ></img>
            <p>{blogData.about}</p>
        </aside>

    );
}

export default About;
