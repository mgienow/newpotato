/*var about = document.querySelector("a[href='#about']");
var target = document.getElementById('about');


aboutLink.addEventListener('click', function(event) {
  if (window.scrollTo) {
    event.preventDefault();
    window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
  }
});*/

/*  SLIDES APPEAR THEN FADE

var slides = document.querySelectorAll('#quotes .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}*/

var carousel, next, prev, seats;

carousel = $('.carousel');

seats = $('.carousel-seat');

next = function(el) {
  if (el.next().length > 0) {
    return el.next();
  } else {
    return seats.first();
  }
};

prev = function(el) {
  if (el.prev().length > 0) {
    return el.prev();
  } else {
    return seats.last();
  }
};

$('.toggle').on('click', function(e) {
  var el, i, j, new_seat, ref;
  el = $('.is-ref').removeClass('is-ref');
  if ($(e.currentTarget).data('toggle') === 'next') {
    new_seat = next(el);
    carousel.removeClass('is-reversing');
  } else {
    new_seat = prev(el);
    carousel.addClass('is-reversing');
  }
  new_seat.addClass('is-ref').css('order', 1);
  for (i = j = 2, ref = seats.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
    new_seat = next(new_seat).css('order', i);
  }
  carousel.removeClass('is-set');
  return setTimeout((function() {
    return carousel.addClass('is-set');
  }), 50);
});
