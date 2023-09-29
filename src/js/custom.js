$(function() {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

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
    //menu
    if(jQuery('.menu-toggle').length) {
        var menu = $('.menu-toggle');
        menu.on('click', function(){
            $('.main-menu').toggleClass('active');
            $('.menu-toggle').toggleClass('active');
            $('body').toggleClass('body-modal-open');
        });
        $('.main-menu').mouseup(function (e){ // событие клика по веб-документу
            var div = $(".main-menu ul"); // тут указываем ID элемента
            var close = $('.menu-toggle');
            if (close.is(e.target)) {
        
            } else if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.main-menu').toggleClass('active');
                $('.menu-toggle').toggleClass('active');
                $('body').toggleClass('body-modal-open');
              
            }
        });
    }
    if(jQuery('.scroll-to').length) {
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
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+38 (999) 999-99-99");
        });
    }


    //modal
    if(jQuery('.modal__wrap').length) {
        let modalWrap = $('.modal__wrap');
        $(".modal-open").click(function (e){
          e.preventDefault();
          const btn = $(this);
          const numModal = btn.attr('href');
          const modal =  $(numModal);
          modalWrap.removeClass('animated fadeOutUp');
          modalWrap.addClass('animated fadeInDown');
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
        var form = $(this);
        form.find('.rfield').addClass('empty_field');

        // Функция проверки полей формы

        form.find('.rfield').each(function(){
            if($(this).val() != ''){
                // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');
                if (!form.find('.empty_field').length) {
                    if(form.attr("name") == "podderjka"){
                        ym(62113519,'reachGoal','callback');
                    }
                    if(form.attr("name") == "quiz"){
                        ym(62113519,'reachGoal','order'); 
                    }
                    $.ajax({
                        type: "POST",
                        url: "../mail.php", //Change
                        data: form.serialize()
                    }).done(function() {
                        var numModal = form.find('.btn-finish').attr('data-modal');
                        var modal =  $(numModal);
                        var modalWrap = $('.modal__wrap');
                        // modalWrap.removeClass('fadeOutUp');
                        // modalWrap.addClass('fadeInDown');
                        modalWrap.removeClass('animated zoomOut');
                        modalWrap.addClass('animated zoomIn');
                        $('.modal').addClass('disabled');
                        modal.removeClass('disabled');
                        modal.addClass('flex');
                        $('body').addClass('body-modal-open');
                        setTimeout(function() {
                            // Done Functions
                            // form.trigger("reset");
                        }, 1000);
                    });

                    $.ajax({
                        method: "POST",
                        url: "../telegram.php", //Change
                        data: form.serialize()
                    }).done(function(){});
                }
            } else {}
        });
		return false;
    });



});

