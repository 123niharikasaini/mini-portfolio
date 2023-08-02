import React from "react";


const Info=(props)=>{
    return(
        <>
        <div className="name">
                    <div className="ques">{props.ques}</div>
                    <div className="ans">{props.ans}</div>
        </div>
        </>
    );
}

export default Info;