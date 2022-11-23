// import navbar from "../login-signup/component/navbar.js";
// console.log(navbar())
// document.getElementsByClassName("header").innerHTML=navbar();



let pickUpDate=localStorage.getItem("pickUpDate");
let pickUpTime=localStorage.getItem("pickUpTime");

let dropDate=localStorage.getItem("dropDate");
let dropTime=localStorage.getItem("dropTime");

if(pickUpDate !=undefined && pickUpTime !=undefined)
{
    document.querySelector("#head10").innerText=`${pickUpDate} ${pickUpTime}`;
    document.querySelector("#head12").innerText=`${dropDate} ${dropTime}`;
}

let user=JSON.parse(localStorage.getItem("currUser"));
if(user!=null)
{
    document.querySelector("#userName").innerText=user[0].name;
}





let data=[
    {
        image:"https://zoomcar-assets.zoomcar.com/photos/original/ffa01311aba57692bd5cbf4de83ea12bd9176985.jpg?1656062154",
        head1:"A car for every need",
        head2:"SUVs, Sedans, Hatchback, Luxury cars - we got it all!"
    },
    {
        id:1,
        name:"Maruti Baleno",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/289ac94026c19af09c0dd6de322896ebd2a9b227.png?1663874188",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.8,
        fare:1618,
        type:"hatchback",
        del:"Home Delivery",
        fuel:"Petrol",
        num:26,
        drive:"51k",
    },
    {
        id:2,
        name:"Renault Triber",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/95868cff18ee4c522b0f49553f3eb0c628540509.png?1663876134",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"7",
        rating:4.6,
        fare:2424,
        type:"SUV",
        del:"Home Delivery",
        fuel:"Petrol",
        num:45,
        drive:"36k",
    },
    {
        id:3,
        name:"Honda Mobilo",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/a9da5e1244b4c6f13a062514fdd4d0f42d4570f6.png?1663873287",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"7",
        rating:4.8,
        fare:1735,
        type:"SUV",
        del:"Home Delivery",
        fuel:"Petrol",
        num:54,
        drive:"36k",
    },
    {
        id:4,
        name:"Maruti Swift",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/f1850c781ba0aeae715eaa922dc15b4dc3654a09.png?1663874619",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.5,
        fare:1800,
        type:"hatchback",
        del:"Home Delivery",
        fuel:"Petrol",
        num:32,
        drive:"27k",
    },
    {
        id:5,
        name:"Maruti Ignis",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/49e306b0384497ca15414c0f4e13b58ab02a962f.png?1663874453",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.6,
        fare:1772,
        type:"hatchback",
        del:"Airport",
        fuel:"Petrol",
        num:25,
        drive:"26k",
    },
    {
        image:"https://zoomcar-assets.zoomcar.com/photos/original/88e0fd3c66b5f376edd7db32cb0eda2b0341f892.jpg?1656062347",
        head1:"Available in 30+ airports",
        head2:"On time free delivery!"
    },
    {
        id:6,
        name:"MAhindra TUV 300",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/c321761627c8fd556f2ae32348686f92c0eec849.png?1663876014",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"7",
        rating:4.7,
        fare:2597,
        type:"SUV",
        del:"Home Delivery",
        fuel:"Diesel",
        num:25,
        drive:"35k",
    },
    {
        id:7,
        name:"Maruti Dezire",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/a49559a67ba1d5fd7e2ffea2f78f654691ee018e.png?1663874345",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.0,
        fare:1742,
        type:"Sedan",
        del:"Home Delivery",
        fuel:"Petrol",
        num:22,
        drive:"27k",
    },
    {
        id:8,
        name:"Maruti Ciaz",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/4591ed5749ed95845712e7f86a42f2575b5cc6a3.png?1663874318",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.1,
        fare:2531,
        type:"Sedan",
        del:"Home Delivery",
        fuel:"Petrol",
        num:18,
        drive:"19k",
    },
    {
        id:9,
        name:"Hyundai Creta",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/aac05ee37980c8d94e9657bc8ddea29312b0e6ae.jpg?1620384508",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.4,
        fare:2539,
        type:"SUV",
        del:"Airport",
        fuel:"Petrol",
        num:25,
        drive:"35k",
    },
    {
        id:10,
        name:"Honda Amaze",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/42f650b8dee1baef441fef362e4a5efbd5b519a3.png?1663872410",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.3,
        fare:2042,
        type:"Sedan",
        del:"Home Delivery",
        fuel:"Petrol",
        num:45,
        drive:"19k",
    },
    {
        image:"https://zoomcar-assets.zoomcar.com/photos/original/695a7814f73093f9530c80d12da72587b3ea4131.jpg?1657959963",
        head1:"Use code : ALGETSETGOA",
        head2:"Book a Zoomcar between 15-31 July & stand a chance to win a free trip to Goa for 2"
    },
    {
        id:11,
        name:"Mahindra KUV 100",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/ed9a65d8dc05ef4a910ce081fa6e6ce64e4b3114.png?1663872241",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"6",
        rating:4.6,
        fare:1627,
        type:"hatchback",
        del:"Home Delivery",
        fuel:"Petrol",
        num:44,
        drive:"18km",
    },
    
    {
        id:12,
        name:"Mahindra Scorpio",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/ed9a65d8dc05ef4a910ce081fa6e6ce64e4b3114.png?1663872241",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"7",
        rating:5.0,
        fare:2545,
        type:"SUV",
        del:"Home Delivery",
        fuel:"Diesel",
        num:45,
        drive:"36k",
    },
    {
        id:13,
        name:"Maruti Wagon R",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/2733bd472b2c1cf2964cb9612854abbea8a9aeaa.png?1663874676",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:3.9,
        fare:1654,
        type:"hatchback",
        del:"Airport",
        fuel:"Petrol",
        num:55,
        drive:"19k",
    },
    {
        id:14,
        name:"Tata Tiago",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/199675b25d7039eb0713c43ba5f13f2cbd65cb85.png?1663876397",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.2,
        fare:1682,
        type:"hatchback",
        del:"Airport",
        fuel:"Petrol",
        num:44,
        drive:"18km",
    },
    {
        id:15,
        name:"Maruti Brezza",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/a49559a67ba1d5fd7e2ffea2f78f654691ee018e.png?1663874345",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.6,
        fare:1468,
        type:"SUV",
        del:"Home Delivery",
        fuel:"Diesel",
        num:44,
        drive:"18km",
    },
    {
        image:"https://zoomcar-assets.zoomcar.com/photos/original/851772d8a58b889c5a52899e6b63cb6305c9afe0.jpg?1656059279",
        head1:"70 Lakh+ 5 star trips and counting",
        head2:"Come, join the Zoomcar Community, the largest car sharing platform"
    },
    {
        id:16,
        name:"Hyundai Verna",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/7da6a84a3997f5d39a80653d488dbf9412f5dd3b.png?1663873214",
        trans:"Automatic",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"7",
        rating:4.7,
        fare:2059,
        type:"Sedan",
        del:"Airport",
        fuel:"Diesel",
        num:56,
        drive:"26k",
    },
    {
        id:17,
        name:"Ford Ecosport",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/ed9a65d8dc05ef4a910ce081fa6e6ce64e4b3114.png?1663872241",
        trans:"Automatic",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"6",
        rating:4.9,
        fare:2552,
        type:"SUV",
        del:"Home Delivery",
        fuel:"Petrol",
        num:44,
        drive:"19k",
    },
    {
        id:18,
        name:"Maruti Celerio",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/289ac94026c19af09c0dd6de322896ebd2a9b227.png?1663874188",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.0,
        fare:1666,
        type:"hatchback",
        del:"Airport",
        fuel:"Petrol",
        num:23,
        drive:"31km",
    },
    {
        id:19,
        name:"Hyundai Centro",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/7f4a674aa51af027c8f0017fe823fb34e5d90a05.png?1663873067",
        trans:"Automatic",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:5.0,
        fare:1737,
        type:"hatchback",
        del:"Home Delivery",
        fuel:"Petrol",
        num:11,
        drive:"26k",
    },
    {
        id:20,
        name:"Maruti S-Presso",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/4591ed5749ed95845712e7f86a42f2575b5cc6a3.png?1663874318",
        trans:"Manual",
        image1:"https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533",
        seat:"5",
        rating:4.7,
        fare:2075,
        type:"hatchback",
        del:"Airport",
        fuel:"Petrol",
        num:25,
        drive:"19k",
    },
    {
        image:"https://zoomcar-assets.zoomcar.com/photos/original/851772d8a58b889c5a52899e6b63cb6305c9afe0.jpg?1656059279",
        head1:"We trust you",
        head2:"No security deposit for you!",
    }
]
// console.log(data)
let sum=0;
let price=0;
display(data);
function display(data){
    document.querySelector("#box2").innerHTML=""
    // let res=data.forEach(function(el){
    for(let i=0;i<data.length;i++){
        if(i%6!==0){
        let boxx=document.createElement("div");
        boxx.setAttribute("class","boxx")
        
        // box21
        let box21=document.createElement("div");
        box21.setAttribute("class","box21");
        let imag=document.createElement("img");
        imag.setAttribute("class","imag")
        imag.src=data[i].image;
        box21.append(imag);

        // box22
        let box22=document.createElement("div");
        box22.setAttribute("class","box22");
        let heading1=document.createElement("h3");
        heading1.innerText=data[i].name;
        heading1.setAttribute("class","heading1")
        let heading2=document.createElement("p");
        heading2.innerText=`${data[i].trans}  · ${data[i].fuel}  · ${data[i].seat} Seats`;
        heading2.setAttribute("class","heading2")
        let image2=document.createElement("img");
        image2.setAttribute("class","image2")
        image2.src=data[i].image1;
        let heading3=document.createElement("p");
        heading3.innerText=`${data[i].rating} (${data[i].num})  · ${data[i].drive} kms driven`;
        heading3.setAttribute("class","heading3")
        box22.append(heading1,heading2,image2,heading3);

        // box23
        let box23=document.createElement("div");
        box23.setAttribute("class","box23");
        let price=document.createElement("h3");
        price.innerText=`₹${data[i].fare}`;
        price.setAttribute("class","price")
        let btn=document.createElement("button")
        btn.innerText="BOOK NOW";
        btn.setAttribute("class","btn")
        // a.innerText="BOOK NOW"
        btn.addEventListener("click",function(){
            localStorage.setItem("cardetail", JSON.stringify(data[i]));
            window.location.href="../checkout/checkout page1.html"
        })
        box23.append(price,btn);
        boxx.append(box21,box22,box23)
        document.querySelector("#box2").append(boxx);
    }
    // else{
    //     let boxx=document.createElement("div");
    //     boxx.setAttribute("class","boxx")

    //     let box21=document.createElement("div");
    //     box21.setAttribute("class","box21");
    //     let imagg=document.createElement("img");
    //     imagg.setAttribute("class","imagg")
    //     imagg.src=data[i].image;
    //     box21.append(imagg);
    //     let heading1=document.createElement("h3");
    //     heading1.innerText=data[i].head1;
    //     heading1.setAttribute("class","heading1")
    //     let heading2=document.createElement("p");
    //     heading2.innerText=data[i].head2;
    //     heading2.setAttribute("class","heading2")
        
    //     boxx.append(box21,heading1,heading2)

    //     document.querySelector("#box2").append(boxx);
    // }

    }
    console.log("sum:",sum)
    console.log("price:",price)
}


// getdata=(data)=>{
//     let arr1=[];
//     for(let i=0;i<data.length;i++){
//         if(data[i].type==="SUV"){
//             arr1.push(data[i]);
//         }else if(arr1.length%6===0){
//             arr1.push(data[arr1.length])
//         }
//     }
//     display(arr1);
    // data.forEach(function(el){
    //     if(el.type==="SUV"){
    //         arr1.push(el);
    //     }else if(arr1.length%6===0){
    //         arr1.push(el)
    //     }
    // })


// gedata=(data)=>{
//     let arr2=[];
//     data.forEach(function(el){
//         if(el.type==="hatchback"){
//             arr2.push(el);
//         }
//     })
//     display(arr2);
// }

// gdata=(data)=>{
//     let arr3=[];
//     data.forEach(function(el){
//         if(el.type==="Sedan"){
//             arr3.push(el);
//         }
//     })
//     display(arr3);
// }



// document.querySelector(".set").addEventListener("click",function(el){
//     let arr2=[];
//     if(arr2.length==0){
//         arr2.push(el);
//     }
//     else if(arr2.includes(el)){
//         arr2.splice(el,1);
//     }
//     console.log(arr2)
// })
    
    // document.querySelector("#seat1").addEventListener("click",myfil)
    // el=document.querySelector("#seat1").innerText;
    // document.querySelector("#seat2").addEventListener("click",myfill)
    // el1=document.querySelector("#seat2").innerText;



    // const array=[];
    // function myfil(){
    //     array.push(el)
    //     console.log(el);
    // }

    // function myfill(){
    //     array.push(el1)
    //     console.log(el1);
    // }

    // console.log(array)


    let parent=document.getElementById("filter");
    parent.addEventListener("click",myfunc);

    var array=[];
    function myfunc(e){
        if(!array.includes(e.target.innerText)){
            // var clicked=e.target.innerText;
            e.target.style.backgroundColor="green";
            e.target.style.color="white";
            array.push(e.target.innerText)
            // alert("Hello"+clicked);
        }
        else if(array.includes(e.target.innerText)){
            e.target.style.backgroundColor="whitesmoke";
            e.target.style.color="black";
            array.splice(array.indexOf(e.target.innerText),1)
            console.log(e.target.innerText)
        }
        console.log(array);
         
        // for(let i=0;i<array.length;i++){
        let seeds=[];
        for(let j=0;j<data.length;j++){
            for(let i=0;i<array.length;i++){
                if((data[j].type===array[i] || data[j].seat===array[i] || data[j].trans===array[i] || data[j].del===array[i]) && !seeds.includes(data[j])){
                    seeds.push(data[j]);
                }
                // else if(seeds.length%6===0){
                //     seeds.push(data[seeds.length])
                // }
            }
        }
        display(array)
        display(seeds);
    }
        
    

    
    

    // let paren=document.getElementById("type");
    // paren.addEventListener("click",myfun);


    // function myfun(e){
    //     if(!array.includes(e.target.innerText)){
    //         // var clicked=e.target.innerText;
    //         array.push(e.target.innerText)
    //         // alert("Hello"+clicked);
    //     }
    //     else if(array.includes(e.target.innerText)){
    //         array.splice(array.indexOf(e.target.innerText),1)
    //         console.log(e.target.innerText)
    //     }
    //     console.log(array);
    // }




    // console.log(ell.innerText)
    // function myfil(){
    //     let ell=document.querySelectorAll(".set");
    //     let see=[];
    
    //     for(let i=0;i<ell.length;i++){
    //             // if(el[i].innerText===5 || el[i].innerText===6 || el[i].innerText===7){
    //         see.push(ell[i].innerText)
    //         // }

    //     }
    //     // console.log(see);
    //     return see;
    //     // dee(data)
    // }
    

// function dee(data){
//     myfil();
//     let seeds=[];
//     for(let i=0;i<see.length;i++){
//         for(let i=0;i<data.length;i++){
//             if(el.type===see[i] || el.seat===see[i] || el.trans===see[i] || el.del===see[i]){
//                 seeds.push(el);
//             }
//         }
//     }
//     display(seeds)
// }







// for(let i=0;i<el.length;i++){
//     console.log(el[i])

// }
// function seatdata(el){
//     let arr3=[];
// }



// console.log(el)
// myfunc=(el)=>{
    
//     console.log(arr2)
// }


// https://www.zoomcar.com/img/icons/icons-arrow-right-small.png ===  arrow_image;
