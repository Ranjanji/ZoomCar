let login=()=>{
    let number = document.getElementById("mobileNumber").value
    let password = document.getElementById("password").value
   
    if(number.length!=10){
      return alert("Please enter a valid Number")
    }
  
  
    if(validateLogin(number,password)){

    alert("login successful!")
    window.location.href = "./landing.html"
  }else{
    alert("login failed!")
  }

 }


 function validateLogin(number,password){
    let userArr = JSON.parse(localStorage.getItem("userArr"))
    console.log(userArr)

    let filtered = userArr.filter(function(ele){
        return ele.number == number && ele.password == password
    })
    if(filtered.length>0){
        localStorage.setItem("currUser",JSON.stringify(filtered))
        return true
    }else{
        return false
    }
 }