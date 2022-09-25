const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const hamburgerToggle = () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
}

const closeHamburgerOnClick = () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
}

hamburger.addEventListener("click", hamburgerToggle);
document.querySelectorAll(".menuLink").forEach(menuLi => menuLi.addEventListener("click", closeHamburgerOnClick));