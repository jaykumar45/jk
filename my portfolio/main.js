const menuLog = document.querySelector(".hamburger");
const menuItems =document.querySelector(".nav-menu");

menuLog.addEventListener("click",() => {
    menuLog.classList.toggle("active");
    menuItems.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    menuLog.classList.remove("active");
    menuItems.classList.remove("active");   
}))