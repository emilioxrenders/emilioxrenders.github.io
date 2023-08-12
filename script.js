const nav = document.getElementById("nav-toggle");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");

nav.addEventListener("click", function() {
  nav.classList.toggle("active");
  navOpen.classList.toggle("hidden");
  navClose.classList.toggle("hidden");
});