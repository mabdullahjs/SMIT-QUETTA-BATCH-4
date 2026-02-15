// console.log("hello world");

// arrow function

// console.log(greetUser("abdullah"));

// function greetUser(user){
//     return `hello ${user}`
// }


// const greetUser = (user) => {
//     return `hello ${user}`
// }

// const greetUser = user => (
//     `hello ${user}`
// )
// console.log(greetUser("abdullah"));

// const sum = (num1 , num2) => num1 +  num2;
// console.log(sum(20 , 30));


// arrow function hoisting support nahi krta.


// for of

// const fruits = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Mango",
//     "Grapes",
//     "Pineapple",
//     "Strawberry",
//     "Watermelon",
//     "Papaya",
//     "Peach",
//     "Pear",
//     "Kiwi",
//     "Cherry",
//     "Blueberry",
//     "Raspberry",
//     "Plum",
//     "Apricot",
//     "Pomegranate",
//     "Guava",
//     "Lychee",
//     "Coconut"
// ];
// const ol = document.querySelector(".list");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
//     ol.innerHTML += `<li>${fruits[i]}</li>`

// }

// for (const element of fruits) {
//     console.log(element);
//     ol.innerHTML += `<li>${element}</li>`
// }

// for in

// const user = {
//   id: 1,
//   name: "Abdullah",
//   email: "abdullah@example.com",
//   age: 25,
//   isActive: true
// };

// for (const key in user) {
//     console.log(`${key} ==> ${user[key]}`);

// }

// callback function wo function hota ha jo kisi dosra function ya method ka argument ma ata ha.

// higher order function wo function hota ha jiska argument ma aik callback ata ha.

// foreach
// fruits.forEach(function (item , index , arr){
//     console.log(item , index , arr);

// })
// const iterated = fruits.forEach((element)=>{
//     // console.log(element);
//     ol.innerHTML += `<li>${element}</li>`
//     // return element x

// })

// console.log(iterated);


// map

// const iterated = fruits.map((element)=>{
//     console.log(element);
//     ol.innerHTML += `<li>${element}</li>`
//     return element + " update"

// })

// console.log(iterated);

// filter
const users = [
    { id: 1, name: "Ali", age: 22, role: "student", isActive: true },
    { id: 2, name: "Sara", age: 28, role: "developer", isActive: true },
    { id: 3, name: "Ahmed", age: 35, role: "manager", isActive: false },
    { id: 4, name: "Ayesha", age: 19, role: "student", isActive: true },
    { id: 5, name: "Bilal", age: 30, role: "developer", isActive: false },
    { id: 6, name: "Hina", age: 26, role: "designer", isActive: true },
    { id: 7, name: "Usman", age: 40, role: "manager", isActive: true },
    { id: 8, name: "Zara", age: 23, role: "student", isActive: false }
];


// const filteredArr = num.filter(function (item){
//     return item >= 5
// })

// const filteredArr = num.filter(item => item > 2)
// console.log(filteredArr);


// const filteredUser = users.filter(item => item.age > 25 && item.role === "developer")
// console.log(filteredUser);


// chaining

// const modifyUser = users.map(item => {
//     if(item.age >= 30) {
//         item.updated = true
//     } else {
//         item.updated = false
//     }
//     return item
// }).filter(item => item.updated).map(item => {
//     item.anotherKey = "another key created"
//     return item
// })

// console.log(modifyUser);


// reduce

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const sum = num.reduce((acc , cval)=>{
//     return acc + cval
// } , 0)

// console.log(sum);



// const item = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]

// console.log(item.map(item => item.name));


// const num = [-3, 4, -1, 7, -5]

// console.log(num.filter(item => item > 0));



// const players = [
//     { name: "Rohit", score: 50 },
//     { name: "Virat", score: 80 },
//     { name: "Dhoni", score: 70 },
//     { name: "Hardik", score: 60 },
//     { name: "Gill", score: 55 },
//     { name: "Surya", score: 75 },
//     { name: "Iyer", score: 65 },
//     { name: "Pant", score: 58 },
//     { name: "Rahul", score: 72 },
//     { name: "Bumrah", score: 40 }
// ];

// const totalScore = players.reduce((acc , cval)=> acc + cval.score , 0)
// console.log('average ==> ', totalScore / players.length);



// const items = [
// { item: "Pen", quantity: 20, price: 10 },
// { item: "Notebook", quantity: 5, price: 50 },
// { item: "Bag", quantity: 2, price: 300 },
// { item: "Bottle", quantity: 10, price: 40 },
// { item: "Pencil", quantity: 30, price: 5 },
// { item: "Marker", quantity: 15, price: 15 },
// { item: "Eraser", quantity: 25, price: 3 },
// { item: "Sharpener", quantity: 18, price: 6 },
// { item: "Calculator", quantity: 4, price: 200 },
// { item: "File", quantity: 12, price: 20 }
// ];


// const totalInventory = items.reduce((acc , cval)=>{
//     return acc + (cval.quantity * cval.price)
// } , 0)
// console.log(totalInventory);
