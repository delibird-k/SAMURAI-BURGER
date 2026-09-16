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

const loadingScreen =
  document.querySelector('.loading-screen');

if (fixedReserveButton) {

  const checkFixedReserveButton = () => {

    // PCでは非表示
    if (window.innerWidth > 600) {
      fixedReserveButton.classList.add('is-hidden');
      return;
    }

    const screenHeight = window.innerHeight;

    // ローディング中かどうか
    const isLoading =
      loadingScreen &&
      !loadingScreen.classList.contains('hide');

    // 指定したセクションが画面内にあるか
    const isInSection = (section) => {
      if (!section) return false;

      const rect = section.getBoundingClientRect();

      return (
        rect.top < screenHeight * 0.7 &&
        rect.bottom > screenHeight * 0.3
      );
    };

    // HERO・ABOUT・RESERVATIONでは隠す
    const hide =
      isLoading ||
      isInSection(heroSection) ||
      isInSection(aboutSection) ||
      isInSection(reservationSection);

    fixedReserveButton.classList.toggle(
      'is-hidden',
      hide
    );
  };

  window.addEventListener(
    'scroll',
    checkFixedReserveButton,
    { passive: true }
  );

  window.addEventListener(
    'resize',
    checkFixedReserveButton
  );

  checkFixedReserveButton();
}
