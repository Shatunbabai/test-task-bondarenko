// FAQ-PAGE
$(function() {
let $speed = 200;
let $class = 'open';
let $class_open = '.faq__answer';

    $(document).ready(function() {
        $('.faq__quests').on('click', function() {
        $div = $(this).closest('.faq__quest');
        $answer = $(this).closest('div').find($class_open);

        if (!$(this).closest('div').hasClass($class)) {
            $(this).find($('.fa-plus')).addClass('faq__cross');

            $div.find('div').each(function() {
            if ($(this).hasClass($class)) {
                $(this).removeClass($class).find($class_open).slideUp($speed);
                $(this).find($('.fa-plus')).removeClass('faq__cross');
                }
            });
        } else {
            $(this).find($('.fa-plus')).removeClass('faq__cross');
        }

        $answer
            .slideToggle($speed)
            .closest('div')
            .toggleClass($class);
        });
    });
});

// SlickSlider

$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.leftSlide'),
        nextArrow: $('.rightSlide'),
        responsive: [
            {
              breakpoint: 480, // брекпоинтов может быть сколько угодно
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },

          ]
      });
  });

let pages = $('.slide__counter');
let slider = $('.slider');

slider.on('init reInit afterChange', function(event, slick, currentSlide, ){

   let i = (currentSlide ? currentSlide : 0) + 1;
    pages.text('0' + i + '/' + '0' + slick.slideCount);
});

// BurgerMenu
$(document).ready(function(){
	$('.burger__menu').click(function(){
            $('.burger__container').toggle('slow');
	});

    $('.burger__container').click(function() {
        $('.burger__container').hide('slow');
    });
});