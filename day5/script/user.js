var phone = document.getElementById("pno");
phone.innerText = 7338301155;

let currUser = JSON.parse(localStorage.getItem('currUser'))
console.log(currUser)
document.getElementById("pno").innerText = currUser[0].number
document.querySelector(".user-name").innerText = currUser[0].name
document.querySelector(".user-phone-number").innerText = currUser[0].number
document.querySelector(".user-email").innerText = currUser[0].email
document.querySelector("#Email").innerText = currUser[0].email
document.querySelector("#Name").innerText = currUser[0].name


import nav from "../component/navbar.js"
nav()


// console.log(window.location.href)

if(window.location.href == "http://127.0.0.1:5500/day5/user.html"){
    document.querySelector(".header").style.position = "static"
}else{
    document.querySelector(".header").style.position = "fixed" 
}