// console.log("hello world");

// for 
// while
// do while

// initialization
// condition
// increment


// for(let i = 0; i < 10; i++){
//     console.log("hello world" , i);
    
// }


// for(let i = 1; i <= 10; i++){
//     console.log("hello world" , i);
    
// }



// table

// let userInput = prompt("enter number")
// let howManyTimes = prompt("how many times?")
// for(let i = 1; i <= howManyTimes; i++){
//     console.log(userInput + " * "  + i + " = " + userInput*i);
    
// }



// infinite loop

// for(let i = 10; i > 0; i--){
//     console.log(i);
    
// }

// for(let i = 1; i > 0; i++)


// nested loop

// let arr = ["hello" , ["world" , ["nested"]]]
// console.log(arr[1][1][0]);


// for(let i = 1; i <= 5; i++){
//     console.log('outer loop ===> ' , i);

//     for(let j = 1; j <= 10; j++){
//         console.log('inner loop ===> ' , j);   
//     }

// }

// console.log("console after loop");





// for(let i = 1; i <= 1000; i++){
//     console.log('--------Table of  ' , i , '------');

//     for(let j = 1; j <= 10; j++){
//         console.log(i + " * " + j + " = " + i*j);
//     }

// }



// loops with array
// const div = document.querySelector(".container");

// let fruits = ["apple" , "banana" , "orange" , "pineapple" , "kiwi"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i] , i);
//     // div.innerHTML += fruits[i]
//     div.innerHTML = div.innerHTML + fruits[i] + "<br/>"
    
// }

// bactick

// let username = `hello world`
// console.log(username);

// username is Muhammad abdullah with email mabdullah@gmail.com with age 22

// let username = "Muhammad Abdullah";
// let email = "mabdullah@gmail.com";
// let age = 22;

// // console.log("username is " + username + " with email " + email + " with age " + age);

// console.log(`username is ${username} ${20+20} with email ${email} with age ${age}`);



const pakistaniCities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
  "Hyderabad",
  "Sukkur",
  "Bahawalpur",
  "Sargodha",
  "Kasur",
  "Sheikhupura",
  "Larkana",
  "Mardan",
  "Abbottabad",
  "Rahim Yar Khan",
  "Jhang",
  "Gujrat",
  "Okara",
  "Wah Cantt",
  "Dera Ghazi Khan",
  "Sahiwal",
  "Mirpur Khas",
  "Nawabshah",
  "Chiniot",
  "Kamoke",
  "Hafizabad",
  "Kohat",
  "Dera Ismail Khan",
  "Charsadda",
  "Mingora (Swat)",
  "Mansehra",
  "Gwadar",
  "Turbat",
  "Zhob",
  "Chaman",
  "Muzaffarabad",
  "Mirpur (AJK)",
  "Kotli",
  "Skardu",
  "Gilgit",
  "Khuzdar",
  "Jacobabad",
  "Jhelum",
  "Attock",
  "Tando Adam",
  "Bhakkar",
  "Khanewal",
  "Hangu",
  "Haripur",
  "Nowshera",
  "Kabal",
  "Swabi",
  "Battagram",
  "Bannu",
  "Tank",
  "Shikarpur",
  "Badin",
  "Khairpur",
  "Ghotki",
  "Dadu",
  "Thatta",
  "Umerkot",
  "Tando Allahyar",
  "Layyah",
  "Lodhran",
  "Vehari",
  "Mianwali",
  "Khushab",
  "Toba Tek Singh",
  "Narowal",
  "Pakpattan",
  "Bahawalnagar",
  "Jaranwala",
  "Jauharabad",
  "Muzaffargarh",
  "Jalalpur Jattan",
  "Kharian",
  "Taxila",
  "Murree",
  "Kot Addu",
  "Shahdadpur",
  "Kandhkot",
  "Malakand",
  "Dir Lower",
  "Dir Upper",
  "Khar Bajaur",
  "Pano Aqil",
  "Rohri",
  "Khuzdar",
  "Ziarat",
  "Kalat",
  "Hub",
  "Sibi"
];


const div = document.querySelector(".container");
const ol = document.querySelector(".list");

for(let i = 0; i < pakistaniCities.length; i++){
    console.log(pakistaniCities[i]);
    // div.innerHTML += `<p>${pakistaniCities[i]}</p>`
    ol.innerHTML += `<li>${pakistaniCities[i]}</li>`
    
}


// while loop
// do while loop
// practice questions
