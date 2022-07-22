window.addEventListener("scroll",()=>{
    let nav=document.querySelector(".navbar");
    let position=window.scrollY>0;
    nav.classList.toggle("afterscroll", position);
    let arrow=document.querySelector("#arrow");
    arrow.src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-back-icon-png-image_4221994.jpg";
    arrow.style.width="30px"
    
    if(position==0)
    {
     arrow.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VpEv_6Ei9xQ8pQ1TEg5TS5_sMFWYjmP-vrDOC1M3386sPWRHdrt5twPP3y3zSFMZqaM&usqp=CAU";
     arrow.style.width="23px"
    
    }
 })

 let data=JSON.parse(localStorage.getItem("cardetail"))||{};
 console.log(data);
 let carName=document.querySelector("#name");
 carName.innerText=data.name;
 let price=document.querySelector("#price");
 price.innerText=`₹ ${data.fare}`;
 display(data)
   function display(data){
    let box=document.querySelector("#div1");
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
    

 
