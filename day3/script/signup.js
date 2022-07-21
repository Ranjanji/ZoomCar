let singup = () => {
    let number = document.getElementById("mobileNumber").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(name, email, number);
    let obj = {
      name: name,
      number: number,
      email: email,
      password: password,
    };
    console.log(obj);
    let userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    if (number.length != 10) {
      return alert("Please enter a valid number");
    }
    if (name.length == 0) {
      return alert("Please enter a name");
    }
    if (email.length == 0) {
      return alert("Please enter a email");
    }
    if (password.length == 0) {
      alert("Please enter a password");
    }

    if (checkEmail(email)) {
      userArr.push(obj);
      localStorage.setItem("userArr", JSON.stringify(userArr));
      alert("singup success!");
      window.location.href = "./login.html";
    } else {
      alert("already have account please login");
    }
  };

  function checkEmail(email) {
    let userArr = JSON.parse(localStorage.getItem("userArr")) || [];

    let filtered = userArr.filter(function (ele) {
      return ele.email === email;
    });

    if (filtered.length > 0) {
      return false;
    } else {
      return true;
    }
  }