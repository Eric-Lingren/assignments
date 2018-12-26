const music = new Audio('./christmasSong.mp3')
const santa = document.getElementById('santa')
const textContainer = document.getElementById('text-container')
const p1 = document.getElementById('p1')
let w = window.innerWidth

music.play();

TweenMax.to(santa, 10, {x: w+1000, ease:Linear.easeNone, repeat:-1});

var tl = new TimelineLite()
    .staggerFrom("li", 2, {autoAlpha:0, y:150}, 4.5).delay(7)
    .staggerTo("li", 2, {autoAlpha:0, y:-150}, 4.5, 4.5);




var slideIndex = 0;
carousel()
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2550); // Change image every 2 seconds
}