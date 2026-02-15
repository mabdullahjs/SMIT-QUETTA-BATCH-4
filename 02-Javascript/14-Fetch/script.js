const fun  = ()=>{
    axios("https://jsonplaceholder.typicode.com/todos/1")
    .then(res =>{
        console.log(res);
        
    })
    .catch(err =>{
        console.log(err);
        
    })
}
fun()