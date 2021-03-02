// Your code goes here
let mynavigation = document.querySelector(".nav a");
mynavigation.addEventListener("mouseenter",function( event) {
    event.target.style.color = "pink";
})

let mybtn = document.querySelectorAll(".btn");
console.log(mybtn)
 mybtn.forEach(function(items) {
    items.addEventListener("click", function(event) {
        event.target.style.background = "Blue"
    })
 })
 
const letsgoimage = document.querySelector(".img-content img")
console.log(letsgoimage)
letsgoimage.addEventListener("wheel",(event) =>{
    console.log(event)
    event.src = "img/adventure.jpg"
})

let mynav =document.querySelectorAll(".nav a");
mynav.forEach(function (event) {
    event.addEventListener("focus", function(event) {
        event.target.style.background = "green"
})
})

// window.addEventListener("resize", () => {
//     intro.src = 
// })
// I couldn't figure out how to add save pic, to make change/resize picture that I saved.


let des = document.querySelectorAll(".destination h4");
console.log(des)
des.forEach(function(items) {
    items.addEventListener("click", function(event) {
        event.target.style.background = "pink";
    })
})  

let mypara = document.querySelectorAll(".destination p");
console.log(mypara)
mypara.forEach(function(items) {
    items.addEventListener("scroll", function(event){
        event.target.textContent = content-destination["destination h4"]
    })
})

let textcon = document.querySelectorAll(".text-content, content-destination, h2");
console.log(textcon)
textcon.forEach(function(items) {
    items.addEventListener("dblclick", function(event) {
        event.target.style.background = "red";
    })
})  

let lowerfoot = document.querySelector(".footer h4")
console.log(lowerfoot)
lowerfoot.addEventListener("drag, drop", function(event) {
    event.target.textContent = ["footer p"]
});