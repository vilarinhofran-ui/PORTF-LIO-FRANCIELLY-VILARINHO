window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
});

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

new Typed("#typing", {
  strings: [
    "Data Analyst",

    "Systems Analyst",

    "Business Intelligence",

    "Founder",

    "Mentor",
  ],

  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;

    const elementTop = item.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".testimonial-card");

  if (cards.length === 0) return;

  let current = 0;

  cards.forEach((card) => {
    card.classList.remove("active");
  });

  cards[0].classList.add("active");

  setInterval(() => {
    cards[current].classList.remove("active");

    current++;

    if (current >= cards.length) {
      current = 0;
    }

    cards[current].classList.add("active");
  }, 20000); // 15 segundos
});
