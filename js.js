$(document).ready(function(){

    var slideSpeed = 1000
    var currentSlide = 1
    var firstSlide = 1 // could be a const

    var slidesRow = $('.slides') // ul 'box' of lis / slides
    var slides = $('.slide') // array of slides
    var lastSlide = slides.length // number of slides
    // var $slider = $('#slider');
    // var $slideContainer = $('.slides');
    // var $slides = $('.slide');


    function slideLeft() {

        if (currentSlide === lastSlide) {
            currentSlide = firstSlide
            slidesRow.css('margin-left', 0)
        }
        slidesRow.animate({'margin-left': '-=750'}, slideSpeed, function() {
            currentSlide++
        })

    }

    function slideRight() {

        if (currentSlide === firstSlide) {
            currentSlide = lastSlide
            slidesRow.css('margin-left', -5250)
        }
        slidesRow.animate({'margin-left': '+=750'}, slideSpeed, function () {
            currentSlide--
        })
    }
    $('.prev').click(slideLeft)
    $('.next').click(slideRight)
})
