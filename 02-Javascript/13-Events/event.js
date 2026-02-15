// onclick
// onmouseover
// onmouseout
// onsubmit
// onchange


// function greetUser(){
//     console.log("specific work.");
    
// }

// const btn = document.querySelector("#btn");

// // btn.addEventListener('click' , greetUser)

// btn.addEventListener('click' , function (){
//     console.log("custom function with add event listner");
    
// })


// form handeling

// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const form = document.querySelector("#form");


// form.addEventListener('submit' , function (event){
//     event.preventDefault()
//     console.log(email.value);
//     console.log(password.value);

    
// })



// const h1 = document.querySelector("#head");

// h1.addEventListener("mouseover" , function (){
//     console.log("mouse over");
    
// })
// h1.addEventListener("mouseout" , function (){
//     console.log("mouse out");
    
// })



// const img = document.querySelector("#img");

// img.addEventListener("mouseover" , function (){
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYP8qYAbhKk52klGvW3MaCPqw4H7NZmP5XQ&s"
// })

// img.addEventListener("mouseout" , function (){
//     img.src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png"
// })




// bubbling
// capturing


const ul = document.querySelector(".images");
const li = document.querySelector("#image-2");
const a = document.querySelector("#link-1");

// ul.addEventListener("click" , function (event){
//     if(event.target.parentNode.tagName === "LI"){
//         event.target.parentNode.remove()
//         return
//     }
//     console.log("nahi remove hoskta");
    
//     console.log("ul clicked");
    
// })

a.addEventListener('click' , function (event){
    event.preventDefault()
    console.log("anchor tag clicked");
    
})

// li.addEventListener("click" , function (event){
//     event.stopPropagation()    
//     console.log("li clicked");
    
// })