$(function() {
    // Instance using native lazy loading
    const lazyContent = new LazyLoad({
        use_native: true // <-- there you go
    });

    // Instance without native lazy loading
    const lazyBackground = new LazyLoad({
        // DON'T PASS use_native: true HERE
    });
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        console.log($(this).index());
        console.log($(this));
        if($(this).closest('.tabs').hasClass('packages-item__choices')){
            let valOption = $(this).attr('data-val');
            console.log(valOption);
            $('#packageStandart input[name="info"]').attr('value', 'пакет стандарт - ' + valOption);
        }
        if($(this).closest('.tabs').hasClass('emotions-tabs')){
            $('.tabs__caption li').removeClass('active6 active5 active4 active3 active2');
            switch($(this).index()) {
                case 0 :
                    break;
                case 1 :
                    $('.tabs__caption li').eq(0).addClass('active6');
                    break;
                case 2 :
                    $('.tabs__caption li').eq(0).addClass('active5');
                    $('.tabs__caption li').eq(1).addClass('active6');
                    break;
                case 3 :
                    $('.tabs__caption li').eq(0).addClass('active4');
                    $('.tabs__caption li').eq(1).addClass('active5');
                    $('.tabs__caption li').eq(2).addClass('active6');
                    break;
                case 4 :
                    $('.tabs__caption li').eq(0).addClass('active3');
                    $('.tabs__caption li').eq(1).addClass('active4');
                    $('.tabs__caption li').eq(2).addClass('active5');
                    $('.tabs__caption li').eq(3).addClass('active6');
                    break;
                case 5 :
                    $('.tabs__caption li').eq(0).addClass('active2');
                    $('.tabs__caption li').eq(1).addClass('active3');
                    $('.tabs__caption li').eq(2).addClass('active5');
                    $('.tabs__caption li').eq(3).addClass('active5');
                    $('.tabs__caption li').eq(4).addClass('active6');
                    break;
            }
        }
    });

    $('.packages-items').slick({
        slidesToShow: 3,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    });
    $('.packages__steps').slick({
        slidesToShow: 4,
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.reviews__items').slick({
        slidesToShow: 4,
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.reviews__btn a').click(function(e){
        e.preventDefault();
        $this = $(this);
        $this.addClass('hide')
        $('.reviews__item--hidden').addClass('active');
    })
    if($('.accordeon').length) {
        var contents = $('.accordeon-content');
        var titles = $('.accordeon-title');
        titles.on('click',function(){
            var title = $(this);
            contents.filter(':visible').slideUp(function(){
                $(this).prev('.accordeon-title').removeClass('is-opened');
            });

            var content = title.next('.accordeon-content');

            if (!content.is(':visible')) {
                content.slideDown(function(){title.addClass('is-opened')});
            }
        });
    }

    if($('.scroll-to').length) {
        var $page = $('html, body');
        $('.scroll-to[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            if ( window.innerWidth < 992 || window.screen.width < 992) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
            }
            return false;
        });
    }

    //select-number form
    if($('.phone-mask').length) {
        $(".phone-mask").mask("+38 (999) 999-99-99");
    }

    //modal
    if($('.modal__wrap').length) {
        let modalWrap = $('.modal__wrap');
        $(".modal-open").click(function (e){
          e.preventDefault();
          const btn = $(this);
          const numModal = btn.attr('href');
          const modal =  $(numModal);
          modalWrap.removeClass('fadeOutUp');
          modalWrap.addClass('fadeInDown');
          modal.removeClass('disabled');
          modal.addClass('flex');
          $('body').addClass('body-modal-open');

        });
        $('.modal-close').click(function (){
            if ( window.innerWidth < 750 || window.screen.width < 750) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
            }
            modalWrap.removeClass('fadeInDown');
            modalWrap.addClass('fadeOutUp');
            setTimeout(function() {
                $('.modal').addClass('disabled');
                }, 700);
            setTimeout(function() {
                $('.modal').removeClass('flex');
                $('body').removeClass('body-modal-open');
                }, 800);  
        });
        $('.modal').mouseup(function (e){
            const div = $(".modal__body");
            const close = $('.modal-close');
          if (close.is(e.target)) {
          } else if (!div.is(e.target)
          && div.has(e.target).length === 0) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
                const modalWrap = $('.modal__wrap');
                modalWrap.removeClass('fadeInDown');
                modalWrap.addClass('fadeOutUp');
                setTimeout(function() {
                    $('.modal').addClass('disabled');
                }, 700);
                setTimeout(function() {
                    $('.modal').removeClass('flex');
                    $('body').removeClass('body-modal-open');
                }, 800);
          }
        });
    }

    // form
    $('form').submit(function() { 
        const form = $(this);
        form.find('.rfield').addClass('empty_field');
        form.find('.rfield').each(function(){
            if($(this).val() != ''){
                $(this).removeClass('empty_field');
                if (!form.find('.empty_field').length) {
                    $.ajax({
                        type: "POST",
                        url: "../mail.php",
                        data: form.serialize()
                    }).done(function() {
                        window.location.replace("/thanks.html");
                    });

                    $.ajax({
                        method: "POST",
                        url: "../telegram.php",
                        data: form.serialize()
                    }).done(function(){});
                }
            }
        });
		return false;
    });



});

