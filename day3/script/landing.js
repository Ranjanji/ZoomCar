import nav from "../component/navbar.js"


nav()


let currUser = JSON.parse(localStorage.getItem('currUser'))
document.getElementById("userName").innerHTML = `${currUser[0].name}<i class="far fa-lg (33% increase) fa-user-circle"></i>`

document.getElementById("user").innerHTML =` ${currUser[0].name}<span>${currUser[0].email}</span><span>${currUser[0].number}</span>`