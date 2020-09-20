import React, { useState } from 'react';
import './App.css';



const App=()=> {
  const state=useState();

    const[count,setCount]=useState(0);
    

  const hello=()=>{
      var time=new Date();
      setCount(count+1);
  }
  

  return (
    <>
    <div className="div1">
      <h1 className="heading">{count}</h1>
      <button className="button" onClick={hello}>Click Me</button>
      </div>
    </>
  );
}

export default App;
