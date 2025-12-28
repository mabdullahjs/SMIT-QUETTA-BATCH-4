console.log("hello world");

// Number Methods

// round
// ceil
// floor
// random
// parseint
// parsefloat
// tofixed

// let num = 5.2;

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));



// console.log(Math.ceil(Math.random()*5)); generate random number from 1 to 5

// Toss app
 // 0 masjid
 // 1 chand

//  const h3 = document.querySelector("#result")
//  const img = document.querySelector("#image")

// function toss(selected){
//     console.log("user selected ===> " , selected);
//     const randomNumber = Math.floor(Math.random()*2);
//     console.log(randomNumber);
    

//     if((randomNumber === 0 && selected === "masjid") || (randomNumber === 1 && selected === "chand")){
//         console.log("user toss jeet gaya");
//         h3.innerHTML = "User won the toss"
        
//     }else {
//         console.log("user toss haar gaya");
//         h3.innerHTML = "User loss the toss"
        
//     }
    

//     if(randomNumber === 1){
//         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGI2rvg8r5VWyhgnFA7-HT927YCn7qUnefQ&s"
//     } else {
//         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQORvLB1jcIRSHTE0LoUvTkP45QbFsbHyu_A&s"
//     }
// }



const input = document.querySelector("#number");
const result = document.querySelector("#result");

function guessTheNumber(){
    if(input.value > 10 || input.value < 1){
        alert("bhaijaan 1 - 10 ka darmiyaan number daalo")
    }

    const userInput = +input.value

    const randomNumber = Math.ceil(Math.random()*10);
    console.log(randomNumber);
    
    if(randomNumber === userInput){
        result.innerHTML = "You won"
    } else if(randomNumber === userInput + 1 || randomNumber === userInput - 1) {
        result.innerHTML = "You are close enough"
    } else {
        result.innerHTML = "You loss"
    }
}