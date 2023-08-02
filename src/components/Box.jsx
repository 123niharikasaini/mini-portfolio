import React from "react";
import "../style/about.css";

const arr=["C++","Python",
"HTML","CSS","Javascripts",
"React.js","Django"
]

const Box=(props)=>{
    return(
        <>
        
            <h2>{props.name}</h2>
            <div className="skills">
                {props.arr.map((val)=>(
                    <div>{val}</div>
                ))}
                
                {/* <div>Python</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>Javascript</div>
                <div>React.js</div>
                <div>Django</div> */}
            </div>
        </>
    );
}

export default Box;