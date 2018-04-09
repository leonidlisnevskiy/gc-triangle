import sayHello from './lib/sayHello.js';
import slick from 'slick-carousel';

sayHello();

$(document).ready(function() {

  $('.js-read-more').click(function(e) {
    e.preventDefault();
    $(this).animate({opacity: '0'}, 600).fadeOut('fast');
    $(this).parent().find('.js-read-overlay').slideUp();
  });

  var $status = $('.js-slider-counter');
  var $slickElement = $('.js-slider-author');

  $('.js-slider-author').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false
  });

  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' / ' + slick.slideCount);
  });


});
