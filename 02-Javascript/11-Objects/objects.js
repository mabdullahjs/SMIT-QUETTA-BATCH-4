// let fruit = ['apple' , 'banana', 'mango'];
// console.log(fruit[0])

// collection of keys and properties is called object.

// const user = {
//     username: 'Muhammad Abdullah',
//     email: 'mabdullah@gmail.com',
//     age: 22,
//     isLoggedIn: true
// }

// console.log(user.username);
// console.log(user.email);
// console.log(user['age']);

// const user = {
//     fullName: 'Muhammad Abdullah',
//     age: 22,
//     isLoggedIn: true,
//     hobbies: ['swimming' , 'sleeping' , ['hello' , ['world']]],
//     greetUser: function (){
//         console.log(this);

//     }
// }

// console.log(user.hobbies[2][1][0]);
// user.greetUser()

// console.log(this);

// window.alert('hello world')
// window.console.log("hello from window object")

// function parentFunc(){
//     console.log("hello parent func");

//     function childrenFunc(){
//         console.log("hello children");

//     }

//     childrenFunc()

// }

// parentFunc()

// const city = {
//     name: 'Karachi',
//     population: 20000000,
//     province: 'Sindh',
//     country: 'Pakistan'
// }

// city.country = "India"
// city.crime = true
// delete city.province
// console.log(city);

//obj banana haa name,email,age,greetuser

// firstname and last name add krna ha
// name ko delete krna ha
// greetuser ka func jab call ho tu return kra hello or usi object ka fullname `hello ${this.fullname}`

// html ma 4 input bnana hain
// fullname email age city
// js ma console hoga object ki form ma.

// {
//     name: 'userval',
//     email: 'userval',
//     age: 'userval',
//     city: 'userval'
// }

// const nestedObject = {
//     user: 'Abdullah',
//     age: 22,
//     otherDetail: {
//         Address: 'FB area block 16 Karachi',
//         Province: 'Sindh',
//         extraOtherDetail: {
//             country: 'Pakistan',
//             continent: 'Asia'
//         }
//     }
// }

// console.log(nestedObject.otherDetail.extraOtherDetail.country);

// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];

// console.log(nestedData[1].subcategories[1].products[0].brand);


// const users = [
//   {
//     name: "Alice",
//     age: 25,
//     hobbies: ["Reading", "Painting"],
//   },
//   {
//     name: "Bob",
//     age: 30,
//     hobbies: ["Playing guitar", "Cooking"],
//   },
//   {
//     name: "Charlie",
//     age: 22,
//     hobbies: ["Hiking", "Photography"],
//   },
//   {
//     name: "David",
//     age: 28,
//     hobbies: ["Running", "Watching movies"],
//   },
//   {
//     name: "Ella",
//     age: 35,
//     hobbies: ["Traveling", "Knitting"],
//   },
//   {
//     name: "Frank",
//     age: 20,
//     hobbies: ["Gaming", "Drawing"],
//   },
//   {
//     name: "Grace",
//     age: 27,
//     hobbies: ["Singing", "Dancing"],
//   },
//   {
//     name: "Hannah",
//     age: 32,
//     hobbies: ["Cooking", "Yoga"],
//   },
//   {
//     name: "Ian",
//     age: 24,
//     hobbies: ["Playing football", "Reading"],
//   },
//   {
//     name: "Jessica",
//     age: 29,
//     hobbies: ["Writing", "Cycling", "swimming"],
//   },
// ];

// // console.log(users);
// const div = document.querySelector('.container');
// for(let i = 0; i < users.length; i++){
//     div.innerHTML += `<h1>${users[i].name}</h1>`
    
// }



const products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "Powerful laptop for all your computing needs.",
  },
  {
    name: "Headphones",
    price: 79.99,
    description: "High-quality headphones for immersive audio experience.",
  },
  {
    name: "Smartphone",
    price: 699.99,
    description: "Advanced smartphone with cutting-edge features.",
  },
  {
    name: "Tablet",
    price: 449.99,
    description: "Portable tablet for entertainment and productivity.",
  },
  {
    name: "Smartwatch",
    price: 249.99,
    description: "Stay connected and track your fitness with this smartwatch.",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    description: "Experience the thrill of gaming with this powerful console.",
  },
  {
    name: "Camera",
    price: 599.99,
    description: "Capture life's moments with stunning clarity and detail.",
  },
  {
    name: "Wireless Speaker",
    price: 129.99,
    description: "Enjoy your favorite music wirelessly with this speaker.",
  },
  {
    name: "External Hard Drive",
    price: 129.99,
    description: "Expand your storage and backup your files with ease.",
  },
  {
    name: "Wireless Mouse",
    price: 29.99,
    description: "Navigate your computer with precision and comfort.",
  },
  {
    name: "Printer",
    price: 199.99,
    description: "Print documents and photos with exceptional quality.",
  },
  {
    name: "Desk Lamp",
    price: 49.99,
    description: "Illuminate your workspace with adjustable brightness.",
  },
  {
    name: "Fitness Tracker",
    price: 79.99,
    description: "Monitor your health and track your workouts.",
  },
  {
    name: "Bluetooth Earbuds",
    price: 99.99,
    description: "Wireless earbuds for on-the-go audio enjoyment.",
  },
  {
    name: "Portable Charger",
    price: 39.99,
    description: "Charge your devices anywhere, anytime.",
  },
  {
    name: "USB Flash Drive",
    price: 19.99,
    description: "Store and transfer your files conveniently.",
  },
  {
    name: "Monitor",
    price: 299.99,
    description: "Upgrade your display for enhanced productivity.",
  },
  {
    name: "Keyboard",
    price: 49.99,
    description: "Type comfortably with this reliable keyboard.",
  },
  {
    name: "Computer Mousepad",
    price: 9.99,
    description: "Enhance your mouse precision with this smooth pad.",
  },
  {
    name: "Graphic Tablet",
    price: 199.99,
    description: "Express your creativity with this digital drawing tablet.",
  },
  {
    name: "Wireless Router",
    price: 79.99,
    description: "Fast and reliable internet connection for your home network.",
  },
];


const div = document.querySelector(".container");
for(let i = 0; i < products.length; i++){
    console.log(products[i]);
    div.innerHTML += `<div class="card">
            <h2>${products[i].name}</h2>
            <p>${products[i].description.slice(0 , 20)}...</p>
            <h3>Price: $${products[i].price}</h3>
        </div>`
    
}

// object literal
// constructor function
// class
