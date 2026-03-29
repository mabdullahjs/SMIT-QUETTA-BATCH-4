import React from 'react'

function Btn(props) {
  return (
    <button onClick={props.onclick}>{props.title}</button>
  )
}

export default Btn