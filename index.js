// Nav bar event listener
let navIsOpen = false;
const navigation = document.querySelector(".nav-container");
const hamburgerMenu = document.querySelector(".hamburger");

function toggleMobileNavigation() {
  navIsOpen = !navIsOpen;

  if (navIsOpen) {
    navigation.classList.add("open-nav");
    hamburgerMenu.src = "./images/close.svg";
    document.body.style.overflow = "hidden";
  } else {
    navigation.classList.remove("open-nav");
    hamburgerMenu.src = "./images/solar_hamburger-menu-broken.svg";
    document.body.style.overflow = "";
  }
}

hamburgerMenu.addEventListener("click", toggleMobileNavigation);

// HANDLE CAROUSEL

const slides = document.querySelectorAll(".slide");
const indices = document.querySelectorAll(".slide-index");
let currentSlide = 0;

// Function to update the slide and index view
function updateSlide(newIndex) {
  slides[currentSlide].classList.remove("active");
  indices[currentSlide].classList.remove("active");
  currentSlide = newIndex;
  slides[currentSlide].classList.add("active");
  indices[currentSlide].classList.add("active");
}

// Right button click (next slide)
document.querySelectorAll("#rightClick").forEach((button) => {
  button.addEventListener("click", () => {
    let newIndex = (currentSlide + 1) % slides.length;
    updateSlide(newIndex);
  });
});

// Left button click (previous slide)
document.querySelectorAll("#leftClick").forEach((button) => {
  button.addEventListener("click", () => {
    let newIndex = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(newIndex);
  });
});

setInterval(() => {
  let newIndex = (currentSlide + 1) % slides.length;
  updateSlide(newIndex);
}, 4000);

// COLLAPSE NAVBAR

const collapseButton = document.querySelector(".collapse");
const navLinks = document.querySelectorAll(
  ".nav-links>:not(svg,img,div>.toggle-switch)"
);
const notification = document.querySelector(".notification");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");
let isCollapsed = false; // Navbar is open by default

// Initialize the navbar in the open state
function initializeNavbar() {
  navLinks.forEach((navLink) => {
    navLink.style.display = "block";
  });

  logo.innerHTML = "full logo";

  header.style.width = "100%";

  notification.style.display = "flex";
}

// Function to toggle the collapsed state
function collapse() {
  isCollapsed = !isCollapsed;
  if (isCollapsed) {
    navLinks.forEach((navLink) => {
      navLink.style.opacity = 0;
      navLink.style.width = 0;
    });

    logo.innerHTML = "";
    logo.style.padding = "1rem";

    header.style.width = "5rem";

    notification.style.display = "none";
  } else {
    navLinks.forEach((navLink) => {
      navLink.style.opacity = 1;
      navLink.style.width = "fit-content";
    });

    logo.innerHTML = "full logo";
    logo.style.padding = ".5rem";

    header.style.width = "100%";

    notification.style.display = "flex";
  }
}

// Set the initial open state of the navbar
initializeNavbar();

// Add event listener to the collapse button
collapseButton.addEventListener("click", collapse);

// sasassasssasssasassassas
const toggleButton = document.querySelector(".toggle-switch");
const bodyElement = document.body;

// Toggle theme and save preference in localStorage
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
});
