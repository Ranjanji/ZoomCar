let x=document.querySelector("input");
    
x.addEventListener("input",()=>{
    let code=x.value;
    let btn=document.querySelector("button");
    if(x!=undefined)
    {
    btn.style.color="white";
    btn.style.border="1px solid #76b94e";
    btn.style.background="#76b94e";
    }
  
})