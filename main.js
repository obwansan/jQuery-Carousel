$(document).ready(function(){

    var slideSpeed = 1000
    var currentSlide = 1
    var firstSlide = 1

    var slider = $('#slider')
    var slidesRow = $('.slides')
    var slidesArray = $('.slide')
    var lastSlide = slidesArray.length

    function slideLeft() {
        if (currentSlide === lastSlide) {
            currentSlide = firstSlide
            slidesRow.css('margin-left', 0)
        }
        slidesRow.animate({'margin-left': '-=1000'}, slideSpeed)
        currentSlide++
    }

    function slideRight() {
        if (currentSlide === firstSlide) {
            currentSlide = lastSlide
            slidesRow.css('margin-left', -7000)
        }
        slidesRow.animate({'margin-left': '+=1000'}, slideSpeed, function () {
            currentSlide--
        })
    }
    $('.prev').click(slideLeft)
    $('.next').click(slideRight)

    slider.mouseenter(function() {
        $('.prev').show()
        $('.next').show()
    })
    slider.mouseleave(function() {
        $('.prev').hide()
        $('.next').hide()
    })
})
