import nav from "../component/navbar.js"


nav()


let currUser = JSON.parse(localStorage.getItem('currUser'))
if (currUser != null) {
    document.getElementById("userName").innerHTML = `<a href="./user.html">${currUser[0].name}<i class="far fa-lg (33% increase) fa-user-circle"></i></a>`

    document.getElementById("user").innerHTML = ` ${currUser[0].name}<span>${currUser[0].email}</span><span>${currUser[0].number}</span>`
}




document.getElementById("logout").addEventListener("click", logoutpop)
function logoutpop() {
    let popup = document.querySelector(".popup")
    popup.classList.remove("open-popup")
    let sidebar = document.getElementById("sidebarMenu")
    sidebar.style.opacity = "0.7"
}

document.getElementById("yes").addEventListener("click", clearCurrUser)

function clearCurrUser() {
    localStorage.removeItem("currUser")
    let popup = document.querySelector(".popup")
    popup.style.display = "none"
    window.location.reload()
}

document.getElementById("no").addEventListener("click", notClear)

function notClear() {
    let popup = document.querySelector(".popup")
    popup.style.display = "none"
    window.location.reload()
}
