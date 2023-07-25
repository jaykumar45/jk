const menuLog = document.querySelector(".menu-toggle");
const menuItems =document.querySelector(".navbar-items");

menuLog.addEventListener("click",() => {
    menuLog.classList.toggle("active");
    menuItems.classList.toggle("active");
})

document.querySelectorAll(".navbar-items").forEach(n => n.addEventListener("click",() => {
    menuLog.classList.remove("active");
    menuItems.classList.remove("active");   
}))