let navbar =()=>{
    let navbar = document.querySelector(".header").innerHTML = `
    <div class="logo">

    <a href="./index.html">    <img
    src="https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png"
    alt=""
  /></a>
  </div>
  <div class="box2">
    <p>Become a Host</p>
    <p>ZMS</p>
    <p id=userName ><a href="./signup.html">Login/Signup</a> </p>
  </div>`

  return navbar
}
export default navbar