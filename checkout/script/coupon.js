let x=document.querySelector("input");
    
x.addEventListener("input",()=>{
   
    let btn=document.querySelector("button");
    if(x!=undefined)
    {
    btn.style.color="white";
    btn.style.border="1px solid #76b94e";
    btn.style.background="#76b94e";
    }
})
document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault();
    let code=x.value;
    localStorage.setItem("coupon",code)
    localStorage.setItem("discount",Math.ceil(150*Math.random()));
    let box=document.createElement("div");
    let img=document.createElement("img");
    img.src="https://cdn.dribbble.com/users/82092/screenshots/1073359/spinner.gif";
    img.setAttribute("id","loading_logo");
    box.append(img)
    document.querySelector("body").append(box);
    const {  
        top: t,  
        left: l  
      } = box.getBoundingClientRect();  
      img.style.transform=`translate(${l}%,-${t}px)`;
      console.log(t, l)
  setTimeout(()=>{
    box.innerHTML=""
    window.location.href="checkout page1.html";
    },600)
})
document.querySelector(".standard").addEventListener("input",()=>{
    let coupon=document.querySelector('input[name="coupon"]:checked').value;
    localStorage.setItem("coupon",coupon);
    localStorage.setItem("discount",Math.ceil(150*Math.random()));
    let box=document.createElement("div");
    let img=document.createElement("img");
    img.src="https://cdn.dribbble.com/users/82092/screenshots/1073359/spinner.gif";
    img.setAttribute("id","loading_logo");
    box.append(img)
    document.querySelector("body").append(box);
    const {  
        top: t,  
        left: l  
      } = box.getBoundingClientRect();  
      img.style.transform=`translate(${l}%,-${t}px)`;
      console.log(t, l)
  setTimeout(()=>{
    box.innerHTML=""
    window.location.href="checkout page1.html";
    },600)
    
})