$(document).ready(function(){

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    //animate moving left
    function slideLeft() {
        if (currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
        }
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
            currentSlide++
        })
    }
    //animate moving right
    function slideRight() {
        if (currentSlide === 1) {
            $slideContainer.css('margin-left', -3600)
            currentSlide = $slides.length;
        }
        $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function () {
            currentSlide--
        })
    }
    $('.prev').click(slideLeft);
    $('.next').click(slideRight);
})
