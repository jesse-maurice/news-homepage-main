const mobileMenu = document.querySelector(".ham");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".nav-mobile");
const overlay = document.querySelector(".overlay");

mobileMenu.addEventListener("click", () => {
  menu.classList.add("hidden");
  overlay.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("hidden");
  overlay.style.display = "none";
});
