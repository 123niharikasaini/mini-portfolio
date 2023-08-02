import React from "react";
import "../style/about.css";
import Box from "./Box";

const skills=["C++","Python",
"DSA",
"HTML","CSS","Javascript",
"React.js","Django"
]

const tools=["Jupyter Notebook","Figma","Bootstrap"];


const About=()=>{
    return(
        <>
        <div className="about">
            <Box name="Skills" arr={skills}/>
            <Box name="Tools used" arr={tools}/>
        
        </div>
        </>
    );
}

export default About;