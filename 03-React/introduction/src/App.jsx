import React, { useState } from 'react'
import "./App.css"

function App() {
  const [counter, setCounter] = useState(0)
  console.log(counter);

  const increment = () => {
         setCounter(counter + 1)
  }


  return (
  
    <>
      <div>
        <button className='logo'  onClick={increment} >+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  )
}

export default App