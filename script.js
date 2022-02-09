// navbar
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {

  hamburger.classList.toggle("active");

  navMenu.classList.toggle("active");

}

// Testimonial

var slideIndex = 1;
showSlides(slideIndex);

function fadeout(el) {
  document.getElementsByClassName(el).style.transition = "opacity 2s fade-out ";
  document.getElementsByClassName(el).style.opacity = 0;
}

function plusTestimonial(n) {
  showSlides(slideIndex += n);

}

function currentTestimonial(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonialSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.transition = "ease-in-out 2s;";
  dots[slideIndex - 1].className += " active";
}

// Eassay Catagory
function show1() {

  document.getElementById('div2').style.display = "none";

  document.getElementById('div3').style.display = "none";

  document.getElementById('div1').style.display = "flex";

}

function show2() {

  document.getElementById('div2').style.display = "flex";

  document.getElementById('div3').style.display = "none";

  document.getElementById('div1').style.display = "none";

}

function show3() {

  document.getElementById('div2').style.display = "none";

  document.getElementById('div3').style.display = "flex";

  document.getElementById('div1').style.display = "none";

}

let button1 = document.querySelector('#button1');

let button2 = document.querySelector('#button2');

let button3 = document.querySelector('#button3');

button1.addEventListener('click', () => {

  button1.style.backgroundColor = '#020202'

  button2.style.backgroundColor = '#E97A12'

  button3.style.backgroundColor = '#E97A12'

  document.getElementById('multiple-sections').style.transition = "display 5s ease-in"

})

button2.addEventListener('click', () => {

  button1.style.backgroundColor = '#E97A12'

  button2.style.backgroundColor = '#020202'

  button3.style.backgroundColor = '#E97A12'

})

button3.addEventListener('click', () => {

  button1.style.backgroundColor = '#E97A12'

  button2.style.backgroundColor = '#E97A12'

  button3.style.backgroundColor = '#020202'

})


