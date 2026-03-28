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



// import React, { useRef, useState } from 'react'

// const App = () => {
//   // state

//   const titleVale = useRef();
//   const [todo, setTodo] = useState([])

//   const addTodo = (event) => {
//     event.preventDefault();
//     console.log("todo added ", titleVale.current.value);
//     todo.push({
//       todoTitle: titleVale.current.value
//     })
//     setTodo([...todo])
//     console.log(todo);



//   }

//   return (
//     <div>
//       <h1>Todo App</h1>

//       <form onSubmit={addTodo}>
//         <input type="text" placeholder='Enter the Title' ref={titleVale} />


//         <button type='submit'>Add Todo</button>
//       </form>

//       <div>
//         {
//           todo.length > 0 ? todo.map((item, index) => {
//             return <div key={index}>
//               <h1>{item.todoTitle}</h1>
//             </div>
//           })
//             : <h1>Not Found</h1>
//         }
//       </div>
//     </div>
//   )
// }

// export default App


// counter app
// input value


// import React, { useState } from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const changeCounter = (action) => {
//     console.log(action);

//     if (action === "increase") {
//       setCounter((prev) => prev + 1)
//       setCounter((prev) => prev + 1)
//       setCounter((prev) => prev + 1)
//       setCounter((prev) => prev + 1)
//       setCounter((prev) => prev + 1)
//       // setCounter(counter + 1)
//       // setCounter(counter + 1)
//       // setCounter(counter + 1)
//       // setCounter(counter + 1)
//       return
//     }

//     setCounter(counter - 1)


//   }
//   return (
//     <>
//       <h1>Counter App</h1>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: '20px'
//       }}>
//         <button onClick={() => changeCounter("decrease")}>-</button>
//         <h1>{counter}</h1>
//         <button onClick={() => changeCounter("increase")}>+</button>
//       </div>
//     </>
//   )
// }

// export default App

// todo = []
// todo.push
// todo = [...todo]



import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todo , setTodo] = useState([]);

  // add todo
  const addTodo = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(description);

    const obj = {
      title , description , id: Date.now()
    }
    todo.push(obj)
    console.log(obj);
    

    setTodo([...todo])
    

  }


  const updateTodo = (action , index)=>{
    console.log(action , index);

    if(action === "delete"){
      todo.splice(index , 1)
      setTodo([...todo])
    } else {
      const updatedTitle = prompt("enter updated title" , todo[index].title)
      todo[index].title = updatedTitle;
      setTodo([...todo])
    }
    
  }
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
        <textarea placeholder='enter description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea> <br /><br />
        <button type='submit'>add Todo</button>
      </form>


      {todo.length > 0 ? todo.map((item , index) => {
        return <div className='single-todo' key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={()=>updateTodo("delete" , index)}>delete</button>
          <button onClick={()=>updateTodo("update" , index)}>edit</button>
        </div>
      }) : <h3>No todo found</h3>}
    </>
  )
}

export default App