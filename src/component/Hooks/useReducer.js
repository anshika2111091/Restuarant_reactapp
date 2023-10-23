import React, { useReducer, useState } from "react";
import "./style.css";

const reducer=(state,action)=>{
    if(action.type==="INCR"){
        state=state+1;
    }
    if(state>0 && action.type==="DECR"){
        state=state-1;
    }
    return state;

}

const UseReducer=()=>{
    //  const mydata=10;
    // const [curdata,setdata]=useState(mydata);
    const initialdata=10;
const [state,dispatch]=useReducer(reducer,initialdata);

    return(
        <>
        <div className="center-div">
         
            <p>{state}</p>
            <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
                </div>
                <div className="button2" onClick={()=>dispatch({type:"DECR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
                </div>
                </div></>
    )
}
export default UseReducer