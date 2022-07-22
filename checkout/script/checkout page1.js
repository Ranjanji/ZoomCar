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

let apply_coupon=localStorage.getItem("coupon");
if(apply_coupon!=null)
{
    let c=document.querySelector("#apply_coupon");
    c.innerText=apply_coupon;
    c.style.border="2px dashed rgb(16,163,16)";
    c.style.padding="3px 5px"
}

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

    document.querySelector("#div2").addEventListener("input",()=>{
        let asdd=+document.querySelector('input[name="rate"]:checked').value;
        price.innerText=`₹ ${+data.fare+asdd}`;
        localStorage.setItem("damage_package",asdd)
        let box=document.createElement("div");
        let img=document.createElement("img");
        img.src="https://cdn.dribbble.com/users/194846/screenshots/1452453/loadingspinner.gif";
        img.setAttribute("id","loading_logo");
        box.append(img)
        document.querySelector("body").append(box);
        const {  
            top: t,  
            left: l  
          } = box.getBoundingClientRect();  
          img.style.transform=`translate(0%,-${t-30}px)`;
          console.log(t, l)
      setTimeout(()=>{
        box.innerHTML=""
        },400)
       
        
    })

    document.querySelector("#checkbox").addEventListener("click",()=>{
        let box=document.createElement("div");
        let img=document.createElement("img");
        img.src="https://cdn.dribbble.com/users/194846/screenshots/1452453/loadingspinner.gif";
        img.setAttribute("id","loading_logo");
        box.append(img)
        document.querySelector("body").append(box);
        const {  
            top: t,  
            left: l  
          } = box.getBoundingClientRect();  
          img.style.transform=`translate(0%,-${t-30}px)`;
          console.log(t, l)
      setTimeout(()=>{
        box.innerHTML=""
        },400)
    })
    
    
   

 
