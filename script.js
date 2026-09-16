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
// スマホ固定予約ボタンの表示・非表示
const fixedReserveButton =
  document.querySelector('.mobile-fixed-reserve');

const heroSection =
  document.querySelector('.hero');

const aboutSection =
  document.querySelector('#about');

const reservationSection =
  document.querySelector('#reservation');
const loadingScreen = document.querySelector('.loading-screen');


if (fixedReserveButton) {
  const checkFixedReserveButton = () => {
    // PCでは何もしない
    if (window.innerWidth > 600) return;

    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;

    const isLoading =
  loadingScreen &&
  !loadingScreen.classList.contains('hide');

    const isInSection = (section) => {
      if (!section) return false;

      const rect = section.getBoundingClientRect();

      return (
        rect.top < screenHeight * 0.7 &&
        rect.bottom > screenHeight * 0.3
      );
    };

    const hide =
       isLoading ||
  isInSection(heroSection) ||
  isInSection(aboutSection) ||
  isInSection(reservationSection);

    fixedReserveButton.classList.toggle('is-hidden', hideButton);
  };

  window.addEventListener('scroll', checkFixedReserveButton);
  window.addEventListener('resize', checkFixedReserveButton);

  checkFixedReserveButton();
}
