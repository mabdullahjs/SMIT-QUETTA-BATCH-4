import React, { useState } from 'react'

function Toogel() {
  const [show , setShow] = useState(false)
  return (
    <>
    <button onClick={()=> setShow(!show)}>Toogel</button>
    {show && <p>Show</p> }
    </>
  )
}

export default Toogel