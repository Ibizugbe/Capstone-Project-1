const menuOpen = document.querySelector(".hamburger-bar");
const containerNav = document.querySelector(".container-nav");
const menuClose = document.querySelector(".close-hamb");
const navList = document.querySelector(".my-nav");
const about = document.querySelectorAll(".mobile-nav-li");

menuOpen.addEventListener("click", () => {
  containerNav.style.display = "flex";
  navList.style.display = "none";
});

menuClose.addEventListener("click", () => {
  containerNav.style.display = "none";
  navList.style.display = "flex";
});

about.forEach((n) => {
  n.addEventListener("click", () => {
    containerNav.style.display = "none";
  });
});
