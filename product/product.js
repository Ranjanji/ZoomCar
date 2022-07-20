let data=[
    {
        id:1,
        name:"Maruti Baleno",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
        trans:"Manual",
        seat:5,
        rating:4.8,
        fare:1618,
        type:"hatchback",
        del:"Homedel",
        fuel:"Petrol",
        num:26,
        drive:"51k",

    },
    {
        id:1,
        name:"Maruti Baleno",
        image:"https://zoomcar-assets.zoomcar.com/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
        trans:"Manual",
        seat:5,
        rating:4.8,
        fare:1618,
        type:"hatchback",
        del:"Homedel",
        fuel:"Petrol",
        num:26,
        drive:"51k",

    },

    // {
    //     id:,
    //     name:"",
    //     image:"",
    //     trans:"",
    //     seat:,
    //     rating:,
    //     fare:,
    //     type:"",
    //     del:"",
    //     fuel:"",
    //     num:,
    //     drive:,
    //     num:"",

    // }
]
// console.log(data)
let sum=0;
let price=0;
function display(data){
    let res=data.forEach(function(el){
        let =document.createElement("div");
        // divs.innerText=el.name
        // divs.setAttribute("class","divs")
        
        sum=sum+el.id;
        price=price+(+el.fare);
        // document.querySelector("#box2").append(divs);
    })
    console.log("sum:",sum)
    console.log("price:",price)
}

display(data);