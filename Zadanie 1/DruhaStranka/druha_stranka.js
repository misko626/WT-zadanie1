/*
 * NAV Mobile
 */
const navMobileIcon = document.querySelector(".menu-icon");
let isMenuOpen = false;
function onClickMenu() {
  navContainer.classList.toggle("nav-container-mobile");
  navContainer.classList.toggle("nav-container");
  if (!isMenuOpen) {
    navMobileIcon.src = "../assets/icons8-close.svg";
  } else {
    navMobileIcon.src = "../assets/icons8-menu.svg";
  }

  isMenuOpen = isMenuOpen === false ? true : false;
  console.log(isMenuOpen);
}

/*
 * NAV Animation from TOP
 */

const navContainer = document.getElementById("navContainer");
const navbar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-link");

const navLinkSearch = document.querySelector(".nav-link-search");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navContainer.classList.add("nav-contaniner-scrolled");
    for (var link of navLinks) {
      link.classList.add("link-scrolled");
    }
  } else {
    navContainer.classList.remove("nav-contaniner-scrolled");
    for (var link of navLinks) {
      link.classList.remove("link-scrolled");
    }
  }
});

/*
 * ZOOM image Function
 */

const image = document.querySelector(".sekcia-zmena-image");
const blure = document.querySelector(".blure-image-zoom");

const closeImageZoom = document.querySelector(".close-image-zoom");

function closeImage() {
  console.log(blure);
  blure.classList.remove("blure-opened");
  image.classList.remove("zoomed-image");
  image.style.width = "30vw";
  closeImageZoom.classList.remove("close-image-zoom-display");
}

function zoomImage() {
  let imgWidth = image.offsetWidth;
  // let imgHeight = image.offsetHeight;
  let viewport_width = document.documentElement.clientWidth;
  let viewport_height = document.documentElement.clientHeight;

  // console.log(viewport_width);
  if (imgWidth * 2 > viewport_width * 0.9) {
    imgWidth = viewport_width * 0.9;
  } else {
    imgWidth *= 2;
  }

  image.style.width = imgWidth + "px";
  console.log(viewport_height);
  if (imgWidth > viewport_height) {
    image.style.width = viewport_height * 0.9 + "px";
  }

  // console.log(imgWidth);
  // console.log(blure);
  image.classList.add("zoomed-image");
  blure.classList.add("blure-opened");
  closeImageZoom.classList.add("close-image-zoom-display");
}
