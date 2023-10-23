import React, { useState } from "react";
import "./style.css";

const UseState=()=>{
     const mydata=10;
    const [curdata,setdata]=useState(mydata);
    return(
        <>
        <div className="center-div">
         
            <p>{curdata}</p>
            <div className="button2" onClick={()=>setdata(curdata+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
                </div>
                <div className="button2" onClick={()=>(curdata>0)?setdata(curdata-1):setdata(0)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
                </div>
                </div></>
    )
}
export default UseState