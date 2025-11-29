// alert()
// prompt()
// console.log();

// function reusableCode() {
//   console.log("hello world 1");
//   console.log("hello world 2");
//   console.log("hello world 3");
//   console.log("hello world 4");

//   return "hello world 3"
// }

// reusableCode() // function call krna
// reusableCode() // function call krna
// reusableCode() // function call krna

// reuseable function
// parameter
// arguments

// function greetUser(username , age){ // para receive krna
//     console.log("hello " + username + " with age " + age);

// }

// greetUser("abdullah" , 22) // arg send krna
// greetUser("Usman" , 18)

// function sum(num1 , num2){
//     console.log("sum of the number is " , num1 + num2);

// }

// sum(20 , 30)

// undefined
// null

// let username = null;
// console.log(username);

// function greetUser(username){
//     console.log("hello " + username);
// }

// // greetUser("abdullah")
// // greetUser("Usman")
// // greetUser("Ammar")
// // greetUser("Affan")
// greetUser()

// return

// console.log("hello world");

// function greetUser(username) {
//     console.log("hello " + username);
//     return "hello " + username

// }

// let username =  greetUser("abdullah")
// console.log("username ==> " , username);

// let username = prompt("enter your username");
// console.log(username);

// js ma return ka matlb jaha func call hua ha waha return hui wi value ajayegi
// return function ma sirf aik dafa hoga.
// return ka baad kou bhi piece of code nahi chalaiga.

// function sum(num1 , num2){
//     return num1 + num2
// }

// let total = sum(20 , 30)
// console.log(total);

// console.log(sum(20 , 30));
// console.log(typeof("abdu"));

// function calculatePercentage(username , num1, num2, num3) {
//   let totalMarks = 300;
//   let obtainedMarks = num1 + num2 + num3;

//   let percentage = (obtainedMarks / totalMarks) * 100;

//   return username + " total percentage is " + percentage + "%";
// }

// console.log(calculatePercentage("abdullah" , 80, 60, 70));
// console.log(calculatePercentage("Usman" , 70, 70, 90));
// console.log(calculatePercentage("Ammar" , 100, 90, 90));



// local variable
// global variable

// let fullName = "Abdullah khan" // global
// function greetUser(){
//     let username = "Abdullah" // local var
//     console.log(username);
//     console.log(fullName);

// }
// // console.log(username); nahi milaiga
// console.log(fullName);


// greetUser()



// const head = document.querySelector("#head");
// console.log(head.innerHTML);
// head.innerHTML = "Change through js"

// DOM manipulation

// const para = document.querySelector("#para");

// para.innerHTML = "change thorugh javascript"


// const ul = document.querySelector("#list");

// ul.innerHTML = "<li>hello</li><li>world</li><li>about</li>"

// const head = document.querySelector("#head");
// function greetuser(){
//     console.log("hello world");
//     head.innerHTML = "change"

// }


// const let var


// var username = "mabdullah";
// username = "mabd" // reassign
// var username = "Mkhan" // redeclare
// console.log(username);



// let age = 21;
// age = 22;
// let age = 92 x redeclare
// console.log(age);

// const city = "karachi";
// city = "asdsad"
// console.log(city);



// let username;
// username = "abdullah"
// console.log(username);


// const username = "abdullah";
// console.log(username);






// user greetings. har user ka name alg hoga.
// return ka simple matlb jaha function call hua ha waha return kri hui value ajaeygi


// function greetUser(username){
//     return "hello " + username
// }

// let greetings = greetUser("abdullah"); // argument send krna
// console.log(greetings);
// console.log(greetUser("usman"));


// kisi bhi html element ko js ka through change krna.

// const h1 = document.querySelector("#head");
// h1.innerHTML = "Change through js"
// console.log(h1.innerHTML);



// const p = document.querySelector("#para");
// p.innerHTML = "change this para using javascript DOM manipulation..."


// const ul = document.querySelector("#list");

// function checkBtn(){
//     console.log("hello world");
//     ul.innerHTML = "<li>Home</li><li>about</li><li>contact</li>"

// }


// const h1 = document.querySelector("#head");

// function changeText(){
//     if(h1.innerHTML === "Hello world"){
//         h1.innerHTML = "change through js"
//     }else {
//         h1.innerHTML = "Hello world"
//     }
// }

// get input value

// const input = document.querySelector("#input");

// function getVal(){
//     console.log(input.value);

// }



// js ka through styling krna 

// const h1 = document.querySelector("#head");

// function changecolor() {
//     h1.style.backgroundColor = "red"
//     h1.style.color = "white"
// }