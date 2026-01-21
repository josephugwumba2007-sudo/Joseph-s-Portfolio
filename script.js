/* ================================
   PORTFOLIO JAVASCRIPT
   ================================ */

/* -------- Mobile Menu Toggle -------- */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* -------- Smooth Scroll for Links -------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }

    navLinks.classList.remove("active");
  });
});

/* -------- Active Nav Link on Scroll -------- */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* -------- Simple Scroll Animation -------- */
const animatedElements = document.querySelectorAll(".animate");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* -------- Contact Form Validation -------- */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Message sent successfully!");
    contactForm.reset();
  });
}

/* -------- Footer Year Auto Update -------- */
const yearSpan = document.getElementById("year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ================================
  image animation----*/
  Window.addEventListener("scroll", () => {
    const image = document.querySelector(".scroll-image");
    imgs . forEach(img => {
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.classList.add("show");
      }
    });
  });

  fetch("http://localhost:3000/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Visitor Name",
    email: "visitor@email.com",
    message: "Hello, I want to work with you"
  })
});