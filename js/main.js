$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300){
            $('.scrollToTop').fadeIn()
        } else {
            $('.scrollToTop').fadeOut()
        }
    })

    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop : 0},800)
        return false
    })

    //Smooth scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault()

        let elementId = $(this).data('scroll')
        let elementOffset = $(elementId).offset().top

        console.log(elementOffset)

        $("html, body").animate({
            scrollTop: elementOffset - 50
        },700)
    })

})

