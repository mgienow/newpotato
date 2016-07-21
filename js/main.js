/*var about = document.querySelector("a[href='#about']");
var target = document.getElementById('about');


aboutLink.addEventListener('click', function(event) {
  if (window.scrollTo) {
    event.preventDefault();
    window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
  }
});*/

var slides = document.querySelectorAll('#quotes .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
