import React from "react";
import img from "../assest/logo.jpg";
import Info from "./Info";

const Home=()=>{
    return(
        <>
        <div className="home">
            <div className="img">
                <img src={img} alt="..." />
            </div>

            <div className="greet">
                <h1>Hello</h1>
               <h2>I am Niharika Saini</h2>
               <p>A Passionate and self-motivated developer</p>
            </div>
        </div>
        </>
    );
}

export default Home;