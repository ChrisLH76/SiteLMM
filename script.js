const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-150px";
  }
});
