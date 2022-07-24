let navbar =()=>{
    let navbar = document.querySelector(".header").innerHTML = `
    <div class="logo">

    <a href="./index.html">    <img
    src="https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png"
    alt=""
  /></a>
  </div>
  <div class="box2">
  <p><a href="./Page-1/BecomeAhost/p1.html">Become a Host</a></p>
  <p><a href="./Page-1/BecomeAhost/p2.html">ZMS</a></p>
    <p id=userName ><a href="./signup.html">Login/Signup</a> </p>
  </div>`

  return navbar
}
export default navbar