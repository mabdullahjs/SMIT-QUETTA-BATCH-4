import React, {  useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  // const [secCount, setSecCount] = useState(10);
  // useEffect(() => {
  //   console.log("Mount");

  //   return ()=>{
  //     console.log("UnMount");
  //   }
  // }, [count])



  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res)
  //     })
  //     .catch((eror) => {
  //       console.log(eror);
  //     })

  // }, [])


  return (
    <>
      {/* <h4>Count:{count}</h4>
      <button onClick={() => setCount(count + 1)} >Increase</button>

      <h4>SecCount:{secCount}</h4>
      <button onClick={() => setSecCount(secCount + 1)} >Increase</button> */}



      {/* {data ? (
        data.map(item => (
          <h1 key={item.id}>{item.name} {item.email}</h1>
        ))
      ) : (
        <h1>Loading..</h1>
      )} */}

   





    </>
  )
}

export default App

// 
// useEffect  => Hook
// useEffect ma Dependency array na dy to wo every time run go ga 
//  useEffect ma Dependency array empty de to wo one time run ho ga
// useEffect ma Dependency array ma state pas ke to os state ky change per he useEffect chaly ga

