/* Fade-in animation (Task-2 code kept) */
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});

/* Dynamic Navbar */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* Active Menu */
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* Contact Form Validation */
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";

  if (name.value.trim() === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").innerText = "Enter valid email";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

/* Dark Mode Toggle */
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
