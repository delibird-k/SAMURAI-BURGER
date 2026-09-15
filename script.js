const loader = document.querySelector(".loading-screen");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 650);
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
