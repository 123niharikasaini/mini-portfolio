import React from "react";
import list from "./ProjectList";
import "../style/project.css";
const Project=()=>{
    return(
        <>
        <div className="title">
                My Frontend Projects
        </div>
        <div className="grid">
            

            {/* <div className="FrontEnd"> */}
                {list.map((val)=>(
                    <div className="cards">
                        <a href={val.direct} target="_blank" rel="noopener noreferrer">
                            <div className="name">{val.name}</div>
                            <hr/>
                            <img src={val.img} alt="..." className="img"/>
                        </a>
                    </div>
                ))}
            </div>
        {/* </div> */}
        </>
    );
}

export default Project;