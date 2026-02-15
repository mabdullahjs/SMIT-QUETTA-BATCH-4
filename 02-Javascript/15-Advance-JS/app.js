// Variable Scoping 
// Closure 
// lexical scoping 
// IIFE 
// Object Methods (keys,values,freez,entries) 
// Exponentiation Operator 
// Optional chaining 
// Destructuring 
// Template literals 
// Destructuring 
// Default parameters 
// Rest parameter 
// Spread Operator 
// Arrow functions 
// Enhanced object literals 
// Iterators & For..of 
// Map 
// Array methods 
// Higher-order function 
// CallBack 
// Promises 
// Ternary Operator 
// modules // firebase ma prhainga



// variable scoping

// local variable
// global variable



// let a = 10; // global variable

// function test(){
//     let b = 20; // local varibale

//     console.log('inside function ===> ' , a , b);

// }

// console.log(b);

// test()


// function scope
// block scope

// if(true){
//     var a = 10; // function scope
//     let b = 20; // block scope
// }

// console.log(b);



// Closure 

// function outerFunc(){
//     console.log("outer function called");

//     function innerFunc(){
//         console.log("Inner function called");

//     }


//     return innerFunc
// }

// outerFunc()()

// let calledFunc = outerFunc()
// calledFunc()

// lexical scoping 


// function outerFunc(){
//     let a = 10;
//     console.log(b);


//     function innerOne(){
//         let b = 20;
//         console.log(a , c);

//     }

//     function innerTwo(){
//         let c = 30;
//         console.log(a , b);
//     }

//     innerOne()
//     innerTwo()
// }

// outerFunc()

// ES6 (Ecma script) org joka js ko back krti ha.

// IIFE  (immediately invoked function expression)

// (function greetUser(){
//     console.log("hello abdullah");

// })()

// greetUser()


//  Object Methods (keys,values,freez,entries) 


// const user = {
//     fullName: "Abdullah",
//     age: 22,
//     isLoggedIn: true
// }

// Object.freeze(user)
// user.new = "update";
// user.fullName = "Usman"
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));



// Exponentiation Operator 

// console.log(2 ** 10);
// console.log(2*2*2*2*2*2*2*2*2*2);



// Optional chaining

// const user = {
//     profile: {
//         settings: {
//             theme: {
//                 color: "dark"
//             }
//         }
//     }
// };

// console.log(user.profile?.settings?.user?.name);


// Destructuring 

// const user = {
//     username: "mabdullah",
//     age: 22,
//     isLoggedIn: true
// }

// const {username , isLoggedIn} = user
// console.log(username , isLoggedIn);


// const fruits = ['apple' , 'banana' , 'orange' , 'kiwi'];

// const [f1 , , , f2] = fruits

// console.log(f2);





// Template literals 

// const username = "mabdullah";
// const age = 22;

// console.log("username is " + username + " user age is " + age);
// console.log(`username is ${username} user age is ${age}`);


// Default parameters 

// function greetUser(username = "Ali"){
//     console.log(`hello ${username}`);

// }

// greetUser("abdullah")

// Rest parameter 

// function usernames(...username){
//     console.log(username);

// }

// usernames("Abdullah" , "usman" , "ali" , "nawaz")

// Spread Operator 

// const num1 = [1, 2, 3, 4, 5]
// const num2 = [6, 7, 8, 9]
// const num3 = [10, 11, 12, 13, 14, 15]
// const newArr = [...num1 , ...num3,  ...num2]
// console.log(newArr);



// Arrow functions

// hoisting
// this

// const greetUser = (username)=>{
//     return `hello ${username}`
// }

// console.log(greetUser("abdullah"));

// const greetUser = user => `hello ${user}`


// Enhanced object literals 

// const username = "Abdullah";
// const age = 28;

// const user = {
//     username, age
// }

// console.log(user);

// Iterators & For..of 

// const fruits = ["apple", "banana", "orange", "mango", "grapes"];

// for (const key in user) {
//     console.log(key , user[key]);


// }

// for (const element of fruits) {
//     console.log(element);

// }



// async

//settimeout
//setinterval
//fetch
//axios
//promises then catch
//async await

// const data = settimeout(data mangwalo , 2000)
// console(data)

// promises (console.log)

// resolve pending reject

// const age = 15

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(age >= 18){
//             resolve("promise resolved")
//         } else {
//             reject("promise reject")
//         }
//     }, 2000);
// })

// promise1
// .then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);

// })



function shaadiScnz(bankBalance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bankBalance >= 2000000) {
                resolve("shaadi Mubarak..")
            } else {
                reject("Ammi zehr kahlaingi..")
            }
        }, 1500);
    })
}

// promise chaining

shaadiScnz(10000000)
    .then((res) => {
        return `${res} updated`

    }).then((res) => {
        console.log(res);


    })
    .catch((err) => {
        console.log(err);

    }).finally(() => {
        console.log("finally laazmi chalaiga..");

    })








// Promises 
// Ternary Operator 

// const age = 15;

// // age >= 18 ? console.log("welcome to gym") : console.log("no gym access")

// age >= 16 ? console.log("welcome to gym") : age >= 15 ? console.log("1000 extra from gym access") : console.log("no gym access")

// if (age >= 16) {
//     console.log("welcome to gym");

// } else if (age >= 15) {
//     console.log("1000 extra from gym access");

// }

// else {
//     console.log("no gym access");

// }




// map, filter
// ternary operator (if else)
// DOM manipulation
// object and array destructuring
// arrow function return argument parameter
// Loops
// Object and array of objects
// local storage
// modules



const users = [
    {
        id: 1,
        fullname: 'John'
    },
    {
        id: 2,
        fullname: 'John'
    },
    {
        id: 3,
        fullname: 'John'
    },
    {
        id: 4,
        fullname: 'John'
    },
]


const userBtn = document.querySelector("#addUser");
const aboutBtn = document.querySelector("#aboutbtn");

const addUser = () => {
    const input = prompt("enter your name");
    users.push({
        id: Date.now(),
        fullname: input
    })
    console.log(users);
    
}



userBtn.addEventListener('click' , addUser)
aboutBtn.addEventListener("click" , ()=>{
    localStorage.setItem("users" , JSON.stringify(users))
    window.location = "about.html"
})