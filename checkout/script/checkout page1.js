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