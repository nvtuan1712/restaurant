'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});


/**
 * BUTTON MENU
 */

const btnMenu = document.getElementById('btn')
const itemMenuH = document.getElementsByClassName('hide-m')
const btnSpan = btnMenu.children

btnMenu.addEventListener('click', function(e){
  e.preventDefault()
})

btnMenu.addEventListener('click', showMenu)
function showMenu() {
  itemMenuH.item(0).classList.add('show')
  itemMenuH.item(1).classList.add('show')
  itemMenuH.item(2).classList.add('show')
  itemMenuH.item(3).classList.add('show')
  btnSpan.item(0).innerHTML = 'View less menu'
  btnSpan.item(1).innerHTML = 'View less menu'
  btnMenu.classList.add('hide-m')
}


/**
 * BUTTON MENU
 */
const btnSubmit = document.getElementById('btnb')
const inputName = document.getElementById('name')
const inputPhone = document.getElementById('phone')
const inputPerson = document.getElementById('person')
const inputDate = document.getElementById('date')
const inputTime = document.getElementById('time')

btnSubmit.addEventListener('click', function(e){
  e.preventDefault()
})

btnSubmit.addEventListener('click', getData)
function getData() {
  checkErrName()
  checkErrPhone()
  checkErrDate()
}


/**
 * CHECK ERR
 */
var pass = true
function checkErrName() {
  if (inputName.value == '') {
    inputName.setAttribute('placeholder',"Please enter your name to continue");
    inputName.style.border = '1px solid red'
    inputName.focus()
    pass = false
  } else if (!isNaN(inputName.value)) {
    inputName.setAttribute('placeholder',"Your name must be characters");
    inputName.value = ''
    inputName.style.border = '1px solid red'
    inputName.focus()
    pass = false
  } else {
    inputName.style.border = '1px solid var(--white-alpha-10)'
    pass = true
  }
}

function checkErrPhone() {
  if (inputPhone.value == '') {
    inputPhone.setAttribute('placeholder',"Please enter your phone to continue");
    inputPhone.style.border = '1px solid red'
    inputPhone.focus()
    pass = false
  } else if (isNaN(inputPhone.value)) {
    inputPhone.setAttribute('placeholder',"Your phone must be number");
    inputPhone.value = ''
    inputPhone.style.border = '1px solid red'
    inputPhone.focus()
    pass = false
  } else {
    inputPhone.style.border = '1px solid var(--white-alpha-10)'
    pass = true
  }
}

function checkErrDate() {
  if (inputDate.value == '') {
    inputDate.style.border = '1px solid red'
    inputDate.focus()
    pass = false
  }
}

console.log(inputTime.value);




