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
  "Sibi",
];

const div = document.querySelector(".container");
const ol = document.querySelector(".list");

for (let i = 0; i < pakistaniCities.length; i++) {
  // console.log(pakistaniCities[i]);
  // div.innerHTML += `<p>${pakistaniCities[i]}</p>`
  ol.innerHTML += `<li>${pakistaniCities[i]}</li>`;
}

// while loop

// let i = 11;
// while(i < 10){
//   console.log(i);

//   i++
// }

// do while loop

// let i = 11;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// while or do while ma ya farq ha k do while condition false hona ma aik dafa laazmi chalta ha.

// practice questions



// for loop
// array pa loop lagaoga
// array ko screen pa render kroga using loop
// while
// do while loop
// 10 files ka question solve kroga.



// question 1


// let sentence = "Learning Javascript is fun and rewarding!"
// let vowel = 0
// // console.log(sentence[0]);
// for(let i = 0; i < sentence.length; i++){
//   if(sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u"){
//     vowel += 1
//     console.log(sentence[i]);
//     console.log("vowel ha ya wala");
    
//   }
  
// }

// console.log(vowel);





// Question 2

// let numbers = [23, 45, 12, 67, 34, 89, 21]
// let maxNum = 0;

// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
//   if(maxNum < numbers[i]){
//     maxNum = numbers[i]
//   }
  
// }

// console.log("max num ===>" , maxNum);

// console.log(5**5);
// 5x5x5x5x5


// Question 3

// for(let i = 1; i <= 10; i++){
//   console.log(`square of ${i} is ${i**2}`);
  
// }


// Question 4

// let word = "Hello, welcome to the world of loops!"
// let count = 0

// for(let i = 0; i < word.length; i++){
//   console.log(word[i]);
//   if(word[i] === "l"){
//     count += 1
//   }
  
// }

// console.log(count);


// Question 5

// let text = "programming"
// let str = ""

// for(let i = 0; i < text.length; i++){
//   if(i % 2 === 0){
//     str += text[i]

//   }
  
// }

// console.log(str);


// for(let i = 10; i > 0; i--){
//   console.log(i);
  
// }


// let num = 36
// for(let i = 1; i <= 36; i++){
//   if(num % i === 0){
//     console.log(i);
    
    
//   }
  
// }

// requirement for todo app:

// function with argument and parameter
// array push and splice method
// dom manipulation (onclick, input val)
// loop
// array ko screen pa render krwana using loop



//https://drive.google.com/file/d/15fDoJPHWrLv1m42j4bouM5aQrBgiz1xo/view?usp=sharing