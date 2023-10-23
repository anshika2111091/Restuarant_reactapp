import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect=()=>{
     const mydata=10;
    const [curdata,setdata]=useState(mydata);
    useEffect(()=>{
        document.title=`Chats(${curdata})`
    });
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
                </div></>
    )
}
export default UseEffect