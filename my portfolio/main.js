// alert("")
let countEl = document.getElementById("count-el")
let count = 0;
function increment(){
    count = count + 1;
    countEl.innerText = count
}




const  apearNav =  document.getElementById("menu-toggle");
const nav_header = document.getElementById("main-nav")


const  toggleNavbar = () => {
    // alert('hey bro')
    nav_header.toggle("active")
}
     

     apearNav = addEventListener('click',() => toggleNavbar())