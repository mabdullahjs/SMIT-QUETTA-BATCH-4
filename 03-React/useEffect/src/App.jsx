import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log("useEffect chal gia");
  // })
  useEffect(() => {
    console.log("useEffect chal gia");
  } , [])

  return (
    <>
      <h4>Count:{count}</h4>
      <button onClick={() => setCount(count + 1)} >Increase</button>
    </>
  )
}

export default App

// 
// useEffect  => Hook

