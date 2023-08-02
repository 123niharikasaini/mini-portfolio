import React from "react";
import { NavLink } from "react-router-dom";

const Head=()=>{
    return(
        <>
        <div className="head">
            <div>
                <NavLink to="/" id="Link">Home</NavLink>
                </div>

                <div>
            <NavLink to="/about" id="Link">About</NavLink>
            </div>

            <div>
            <NavLink to="/projectlink" id="Link">Project Links</NavLink>
            </div>

            <div>
                <NavLink to="/links" id="Link">Social Links</NavLink>
                </div>
            
        </div>
        </>
    );
}

export default Head;