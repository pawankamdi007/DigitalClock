import React,{useState} from 'react';
import './App.css';

const Clock=()=>{

    const cTime=new Date().toLocaleTimeString();

    const[time,setCount]=useState(cTime);

    const Time=()=>{
       
        const NewTime=new Date().toLocaleTimeString();
        setCount(NewTime);
    }
    setInterval(Time,1000);

    return (
        <>
            <h1 className="heading1">Digital Clock</h1>
            <div className="div1">
            <h1 className="heading">{`${time}`}</h1>

            </div>
        </>
    );
}

export default Clock; 