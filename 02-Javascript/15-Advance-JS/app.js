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

