import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import "../style/links.css";
const Links=()=>{
    return(
        <>
        <div className="card">
            <div className="github">
                <a href="https://github.com/123niharikasaini"
                 target="_blank" rel="noopener noreferrer">
                    <GitHubIcon/>
                 </a>
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/niharika-saini-data"
                 target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon/>
                 </a>
            </div>
            <div className="gfg">
                <a href="https://auth.geeksforgeeks.org/user/saininiharika123/practice/" 
                target="_blank" rel="noopener noreferrer">
                    <DashboardIcon/>
                </a>
            </div>
        </div>
        </>
    );
}

export default Links;