let data=JSON.parse(localStorage.getItem("cardetail"))||{};

let pay=document.getElementById("price")
pay.innerText=`PAY INR ${data.fare}`
// console.log(data.fare)


// let body=document.querySelector("body")
function openpopup(){
    let popup1=document.getElementById("boxx1")
    let blur=document.getElementById("payop")
    popup1.classList.add("openup")
    blur.classList.add("open")
    // body.style.opacity="0.4"
    console.log("hello")
}

function closepopup(){
    let popup1=document.getElementById("boxx1")
    let blur=document.getElementById("payop")
    popup1.classList.remove("openup")
    blur.classList.remove("open")
}


            let image = document.createElement("img")
            image.setAttribute("id", "imag");
            image.src = "https://c.tenor.com/0AVbKGY_MxMAAAAC/check-mark-verified.gif";
            let booked=document.createElement("div");
            booked.setAttribute("id","booked")
            let line=document.createElement("p");
            line.innerText="Order Booked";
            booked.append(image,line);
            booked.addEventListener("click",myfun)
            // booked.innerText="hello";

    function myfunc() {
        event.preventDefault();
        
        document.getElementById("proceed").style.backgroundColor="green"
        document.getElementById("proceed").style.color="white"
        function bankserver() {
            let pin = document.getElementById("card").value;
            let pin1 = document.getElementById("expiry").value;
            let pin2 = document.getElementById("cvv").value;
            console.log(pin);
            if (pin.length==12 && pin1<1299 && pin1.length==4 && pin1>0722 && pin2.length==3) {
                return true;
            }
            else {
                return false;
            }
        }
        
        // image.src = "https://c.tenor.com/K2UGDd4acJUAAAAC/load-loading.gif";
        // document.querySelector("#boxx1").append(image)

        let payment = new Promise(function (resolve, reject) {
            let pin = bankserver();
            setTimeout(function () {
                if (pin) {
                    resolve("payment successful")

                } else {
                    reject("try again later")

                }
            }, 500);
        })


        // document.querySelector("body").innerHTML = "";
        payment.then(function (resolve) {
            document.querySelector("body").innerHTML=""
            console.log(resolve)
            
            
            
            // image.addEventListener("click",myfun)
            
            document.querySelector("body").append(booked);

            // window.location.href="payment.html"

        });
        payment.catch(function (reject) {
            console.log(reject)
            
            // image.src = "https://c.tenor.com/oEJBaw58GEUAAAAj/cancel-deny.gif";
            // image.src="null"
            // image.style.opacity="0";
            // image.style.width="0";
            alert("Wrong details")

            
        })
    }


    let proceed=document.getElementById("proceed")
    proceed.innerText=`PAY INR${data.fare}`

    function myfun(){
        window.location.href="payment.html"
    }


    document.querySelector(".modal>p").innerText=`Amount: ₹${data.fare}`

