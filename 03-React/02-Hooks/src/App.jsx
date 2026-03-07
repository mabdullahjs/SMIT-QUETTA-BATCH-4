// // component
// // React fragments
// javascript xml (html with super powers)
// hooks (react built in functions / use sa shurw)

// import Btn from "./components/Btn"
// import Card from "./components/Card"

// function App(){
//   return (
//     <>
//       <h1>Hello world</h1>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//     </>
//   )
// }

// export default App



// import React from 'react'

// function App() {
//   let username = "Muhammad Abdullah"
//   return (
//     <>
//       <h1>Counter App {username}</h1>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste harum {username} culpa, ipsam amet quae magni aperiam distinctio {username}, eius doloribus vitae accusantium aliquam sunt provident maiores ipsum {username} odit?</p>
//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import './App.css'

// function App() {
//   // let counter = 0;
//   const [counter , setCounter] = useState(0)

//   // setCounter state ki value ko update krna ka liya kaam aayega

//   const addCounter = () => {
//     // console.log("add counter ")
//     // counter += 1; x
//     // console.log(counter)
//     setCounter(counter + 1) 
//   }
//   const lessCounter = () => {
//     if(counter > 0){
//       setCounter(counter - 1) 
//     }
//   }
//   return (
//     <>
//       {/* <h1>Counter App</h1> */}
//       <div className="container">
//         <button onClick={lessCounter}>LESS</button>
//         <h2>{counter}</h2>
//         <button onClick={() => addCounter(22)}>ADD</button>
//       </div>

//     </>
//   )
// }

// export default App



import React, { useState } from 'react'

const App = () => {
  // state
  const [input , setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    console.log("todo added " , input);

    setInput('')
  }

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={addTodo}>
        <input type="text" placeholder='enter todo' value={input} onChange={(e)=>setInput(e.target.value)} />

        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default App


// counter app
// input value