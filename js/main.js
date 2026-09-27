const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector(".form-message");

/* MOBILE NAVIGATION */

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));

    mainNav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");

      mainNav.classList.remove("is-open");
    });
  });
}

/* CONTACT FORM */

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please complete the required fields.";

      return;
    }

    formMessage.textContent = "Thank you. Your message has been received.";

    contactForm.reset();
  });
}

/* HEADER SCROLL STATE */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (!header) {
    return;
  }

  if (window.scrollY > 40) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});
