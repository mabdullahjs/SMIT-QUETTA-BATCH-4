import React, { useEffect, useState } from 'react'
import Btn from './Btn'

function Card({title , desc , btnTitle}) {
  const [counter , setCounter] = useState(0)
  const [secondcounter , setSecondCounter] = useState(10)
  useEffect(()=>{
    console.log("component mount");
    

    // return ()=>{
    //   console.log("component unmount");
      
    // }
  } , [counter])

  function changeCounter (){
    setSecondCounter(secondcounter + 1)
  }
  return (
    <div>
      <button onClick={()=>setCounter(prev=> prev + 1)}>add first Counter {counter}</button>
      <Btn onclick={changeCounter} title={`second counter ${secondcounter}`}/>
        <h1>{title}</h1>
        <p>{desc}</p>
        <Btn title={btnTitle}/>

        
    </div>
  )
}

export default Card



// agar dependency array doga to sirf one time component mount pa chalaiga
// agar  dependency array nahi doga to har state change pa chalaiga
// agar dependency array ka undar state doga to sirf usi state change pa chalaiga.