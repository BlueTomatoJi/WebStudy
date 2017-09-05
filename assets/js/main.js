/**
 * Created by lansetudou on 2017/6/16.
 */
$(document).ready(function () {
    "use strict";
//        导航条
    $('.show-menu').hover(function(){
        $(this).find('.sub-menu').slideToggle(800);
    });
    $('.sub-menu li').mouseenter(function () {
        $(this).find('a').css({'color':'#1bb4b9',
                                "background-color":"#ffffff"})
    }).mouseleave(function () {
        $(this).find('a').removeAttr('style')
    });
    $('.show-menu a').mouseenter(function () {
        $(this).css('color','#1bb4b9')
    }).mouseleave(function () {
        $(this).removeAttr('style')
    });
    // 导航条滚动
    function gettop() {
        var mytop = $(document).scrollTop();
        if (mytop > 300){
            $('.header-footer').css({
                                        'top':'0',
                                        "position":'fixed',
                                        'z-index':'9999',
                                        'width':'100%'
            }).addClass('animated fadeIn');
            $('.header-footer .logo').css('padding','10px 0');
            $('.header-footer .main-menu-area').css('padding','0')
        }else {
            $('.header-footer').removeAttr('style').removeClass('animated fadeIn');
            $('.header-footer .logo').removeAttr('style');
            $('.header-footer .main-menu-area').removeAttr('style')

        }
        setTimeout(gettop);
    }
        gettop();
//        搜索
    $('.header-search').click(function () {
        $('.search').toggle();
    });
    // mobile area
    $('.dropdown').click(function () {
        $(this).find('a').css('background-color','#ffffff');
    });
//        登陆
    $('.login').hover(function () {
        $(this).find('.login-form').slideToggle(400);
    }).mouseenter(function () {
        $(this).find('a').css('color','#f5b120')
    }).mouseleave(function () {
        $(this).find('a').css('color','#ffffff')
    });
    $('.sign').hover(function () {
        $(this).find('.register-form').slideToggle(400);
    }).mouseenter(function () {
        $(this).find('a').css('color','#f5b120')
    }).mouseleave(function () {
        $(this).find('a').css('color','#ffffff')
    });
    $('.button-over').mouseenter(function () {
        $(this).css('background-color','#f5b120')
    }).mouseleave(function () {
        $(this).css('background-color','#1bb4b0')
    });
    $('.button-caption').mouseenter(function () {
        $(this).css({'background':'#1bb','color':'#ffffff'});
    }).mouseleave(function () {
        $(this).removeAttr('style')
    });
//        轮播
    $('#carousel-example-generic').carousel('pause');
    $('#carousel-class-generic').carousel('pause');
    $('#gly-left,#gly-right').mouseenter(function () {
        $(this).css('background-color','#1bb4b0');
    }).mouseleave(function () {
        $(this).css('background-color','rgba(0,0,0,0.1)')
    });
//        our classes
    $('#class-carousel,#blog-carousel').owlCarousel({
        dots:false,
        autoPlay: false,
        slideSpeed:2000,
        pagination:false,
        navigation:true,
        items:1,
        responsive:{
            375:{
                items:1
            },
            768:{
                items:2
            },
            980:{
                items:1
            },
            1199:{
                items:3
            }
        }
    });
    $('#classes-prev,#blog-prev').click(function () {
        $('.owl-prev').click();
    });
    $('#classes-next,#blog-next').click(function () {
        $('.owl-next').click();
    });

    $('.single-class').mouseenter(function () {
        $(this).find('.single-text-cover').fadeIn()
    }).mouseleave(function () {
        $(this).find('.single-text-cover').fadeOut()
    });
    $('.single-class').mouseenter(function () {
        $(this).find('.arrow >a').css({'background-color':'#1bb4b0',
            'color':'#ffffff',
            "transition":'all 500ms ease'
        });
    }).mouseleave(function () {
        $(this).find('.arrow >a').removeAttr('style')
    });
    $('.single-services-item').mouseenter(function () {
        $(this).find('p').animate({top:'-36px'},'slow').css('display','block');
        $(this).find('h4').animate({top:'-36px'},'slow').css('font-weight','800');
        $(this).find('.single-services-icon').css({'background-color':'#ffffff',
            'color':'#f5b120'})
    }).mouseleave(function () {
        $(this).find('p').animate({top:'0'},'slow').css('display','none');
        $(this).find('h4').animate({top:'0'},'slow').removeAttr('style');
        $(this).find('.single-services-icon').removeAttr('style')
    });
//        fun-factor-area
//     var options = {
//         useEasing : true,
//         useGrouping : true,
//         separator : ',',
//         decimal : '.'
//     };
//
//     var doStart = 1;
//     $(window).scroll(function() {
//         if($(window).scrollTop() <= 3000 && doStart){
//             doStart = 0;
//             var demo = new CountUp("counter-one", 0, 25, 0, 2.5, options);
//             demo.start();
//             var demo = new CountUp("counter-two", 0, 45, 0, 2.5, options);
//             demo.start();
//             var demo = new CountUp("counter-three", 0, 55, 0, 2.5, options);
//             demo.start();
//             var demo = new CountUp("counter-four", 0, 250, 0, 2.5, options);
//             demo.start();
//         }
//     });
        $('.counter').countUp();

        $("[data-countdown]").countdown("2017/08/30", function(event) {
            $(this).html(
                event.strftime('<div class="cdown"><span class="counting-days">%D</span>DAYS</div><div class="cdown"><span class="counting-hours">%H</span>HOURS</div><div class="cdown"><span class="counting-minutes">%M</span>MINS</div><div class="cdown"><span class="counting-seconds">%S</span>SECS</div>')
            );
        });
//        our teacher
    $('#images-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        focusOnSelect: true,
        asNavFor: '#text-carousel',
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: false,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: true
                }
            }]

    });
    $('#text-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        centerMode: false,
        asNavFor: '#images-carousel'
    });
//     our gallery
    $('.filter').click(function () {
        $('.filter').eq($(this).index()).addClass('active').css('color','#1bb').siblings().removeClass('active').removeAttr('style');
    });
    $('.filter-items').mixItUp({
    })

});
