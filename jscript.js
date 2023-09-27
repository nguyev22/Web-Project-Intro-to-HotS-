// https://www.w3schools.com/w3css/w3css_slideshow.asp
var slidePosition = 1;
showSlides();

function showSlides(){
    var slides = document.getElementsByClassName("mySlides"); // Declare var for slides with class name mySlides
    var dots = document.getElementsByClassName("dot"); // Declare var for dots with class name dot
    for (i = 0; i < slides.length; i++) { // Loops thru slides and removes aforementioned, otherwise it creates another slide below
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // Replaces dot to be darkened when clicked and elsewhere to be bright/"active"
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slidePosition > slides.length) {
        slidePosition = 1; // Goes back to beginning if goes past last slide
    } 
    if (slidePosition < 1) {
        slidePosition = slides.length; // Goes backwards to last slide if at beginning
    } 
    slides[slidePosition-1].style.display = "block";
    dots[slidePosition-1].className += " active";
  }


function arrowButtons(current){
    clearInterval(timer); //Clears timer
    nextprevButtons(current); 
    // Timer 5 seconds
    // SOURCE: https://www.w3schools.com/jsref/met_win_setinterval.asp
    if (current < 0){ // Sets new timer when arrow is pressed
        timer = setInterval(function(){nextprevButtons(current + 2)}, 5000);
    } 
    else {
        timer = setInterval(function(){nextprevButtons(current + 1)}, 5000);
    }
}

// Next/previous controls  
function nextprevButtons(current){
    if (current < 0){
        showSlides(slidePosition -= 1); // Previous button
    } 
    if (current >= 0){
        showSlides(slidePosition += 1); // Next button
    }
}

// Image controls with dots
function currentSlide(n) {
    showSlides(slidePosition = n);
}

window.addEventListener("load",function() {
    showSlides(slidePosition);
    timer = setInterval(function(){arrowButtons(1)}, 5000);
})
