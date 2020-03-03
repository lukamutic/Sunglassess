$(document).ready(function () {

    if ($('.hero-slider').length > 0) {
        $('.hero-slider').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true
        });
    }


    if ($('.product-slider').length > 0) {
        $('.product-slider').owlCarousel({
            margin: 30,
            autoplay: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 2,
                    slideBy: 2

                },
                992: {
                    items: 4,
                    slideBy: 4
                }
            }
        });
    }



    if ($('.contact-form').length > 0) {

        //FORM VALIDATION
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true
                    }


                },
                messages: {

                    name: {
                        required: 'The Name* is required field.'
                    },
                    email: {
                        required: 'The Email* is required field.',
                        email: 'Please provide a valid Email address.'
                    },
                    message: {
                        required: 'The Message* is required field.'
                    }



                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }




   
    
    
    
    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function() {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
	    let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
		$(this).css('animation-delay', delay);               
		$(this).addClass(animation);               
            }
        });
    }
    animation();
    $(window).scroll(function() {
        animation();
        animateHeader();
    });
    
    
    
    function animateHeader(){
        let top = $(window).scrollTop();
        
        if(top > 100){
            $('header').addClass('smallHeader');
        }else{
            $('header').removeClass('smallHeader');
        }
    }
    
    animateHeader();




 if ($('.counter').length > 0) {
        $('.counter').counterUp({
           time: 1000
        });
    }
    
    
    $("header").on('click', '.nav-link',function() {
       let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800);
});

});

