/*
 * NAV Mobile
 */
const navMobileIcon = document.querySelector(".menu-icon");
let isMenuOpen = false;
function onClickMenu() {
  navContainer.classList.toggle("nav-container-mobile");
  navContainer.classList.toggle("nav-container");
  if (!isMenuOpen) {
    navMobileIcon.src = "./assets/icons8-close.svg";
  } else {
    navMobileIcon.src = "./assets/icons8-menu.svg";
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
 * SCROLL DOWN AND ANIMATE
 */

window.addEventListener("scroll", appearElement);

function appearElement() {
  //screen sroll value
  const screenPosition = (window.innerHeight / 2) * 1.3;
  const sectionImage = document.querySelector(".section-image");
  const sectionParagraph = document.querySelector(".section-paragraph");
  const frameworkContainer = document.querySelector(".framework-container");
  // console.log(sectionImage);

  const sectionImagePosition = sectionImage.getBoundingClientRect().top;
  const sectionParagraphPosition = sectionParagraph.getBoundingClientRect().top;
  const frameworkContainerPosition =
    frameworkContainer.getBoundingClientRect().top;

  if (sectionImagePosition < screenPosition) {
    sectionImage.classList.add("section-image-appear");
  }
  if (sectionParagraphPosition < screenPosition) {
    sectionParagraph.classList.add("section-parahraph-appear");
  }
  if (frameworkContainerPosition < screenPosition + 200) {
    frameworkContainer.classList.add("framework-container-appear");
  }
}
