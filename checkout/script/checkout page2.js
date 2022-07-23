let data=JSON.parse(localStorage.getItem("cardetail"))||{};
 console.log(data);
 let carName=document.querySelector("#name");
 carName.innerText=data.name;

 let startDate=localStorage.getItem("pickUpDate");
document.querySelector("#startDate>div").innerText=startDate;
let endDate=localStorage.getItem("dropDate");
document.querySelector("#endDate>div").innerText=endDate;

 display(data)
   function display(data){
    
    let names=document.querySelector("#names");
    names.innerText=data.name;
    if(data.trans=="Manual"){
        document.querySelector("#autoimg").src="https://zoomcar-assets.zoomcar.com/images/original/2aceee9e84a7bf79ae8928ace92944abbac907d4.png?1584455088"
    }
    else{
        document.querySelector("#autoimg").src="https://zoomcar-assets.zoomcar.com/images/original/d21cb94565e451326a2c6a43a8d2f1066e228e7b.png?1584455072"
    }
    document.querySelector("#auto").innerText=data.trans;
    document.querySelector("#image").src=data.image;
    document.querySelector("#rating").innerText=`${data.rating}(${data.num}) . ${data.drive}ms driven`;
   
    document.querySelector("#petrol").innerText=data.fuel;
    }
    let package=+localStorage.getItem("damage_package")
    let one=document.querySelector("#one");
    one.innerText=`₹${data.fare}`;

    let two=document.querySelector("#two");
    two.innerText=`₹${package}`;

    let three=document.querySelector("#three");
    three.innerText=`₹${data.fare+package}`;

    let five=document.querySelector("#five");
    five.innerText=`₹${data.fare+package}`;

 let btn=document.querySelector("#display_price>button");
 btn.innerText=`PROCEED TO PAY ₹${data.fare+package}`;
