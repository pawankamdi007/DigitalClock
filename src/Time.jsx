import React,{useState} from 'react';
import './App.css';

const Time=()=>{

    const state=useState();

    const[time,setCount]=useState(0);


    const date=new Date().toLocaleTimeString();
   
    const Time=()=>{
       
       
        setCount(time+date);
    }


    return (
        <>
            <div className="div1">
            <h1 className="heading">{`${date}`}</h1>
            <button className="button" onClick={Time}>Get Time</button>

            </div>
        </>
    );
}

export default Time; 