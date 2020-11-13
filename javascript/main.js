/**
*
* themesflatSearch(); 
* FlatClient();
* parallax();
* tabs();
* woocommerceTabs();
* flatCounter();
* flatOwl();
* testimonialSlider();
* VideoPopup();
* flatIsotope();
* progressBar();
* detectViewport();
* projectGallary(); 
* flatSpacer();
* flatPaddingAuto();
* flatMarginAuto();
* flatEqualizeHeight();
* goTop();
* flatGallery();
* googleMap();
* accordionToggle();
* responsiveMenu();
* removePreloader();
* headerFixed();
* flatRetinaLogo();
* ajaxContactForm();
* ajaxSubscribe();
*
*/

;(function($) {
    "use strict";

    var themesflatSearch = function () {
       $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 's' ) ) {
                $('.top-search').removeClass('show');   
                $('.show-search').removeClass('active');             
            } 
        });

        $('.show-search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.show-search').on('click', function (e) {           
            if( !$( this ).hasClass( "active" ) )
                $( this ).addClass( 'active' );
            else
                $( this ).removeClass( 'active' );
             e.preventDefault();

            if( !$('.top-search' ).hasClass( "show" ) )
                $( '.top-search' ).addClass( 'show' );
            else
                $( '.top-search' ).removeClass( 'show' );
        });
    }  

 
    var FlatClient =  function(){
        $('.partner-clients').each(function() {            
            if ( $().owlCarousel ) {                
                $('.slide-client').owlCarousel({
                    loop: true,
                    margin: 70,
                    nav: $('.slide-client').data('nav'), 
                    dots: $('.slide-client').data('dots'), 
                    autoplay: $('.slide-client').data('auto'),                    
                    responsive:{
                        0:{
                            items: 2
                        },

                        600: {
                            items: 3
                        },

                        1000: {
                            items: $('.slide-client').data('item')
                        }
                    }
                });
            }
        });

    };

   var parallax = function() {
        if ( $().parallax  ) {
            $('.parallax1').parallax("50%", -0.12);
            $('.parallax2').parallax("50%", 0.4);  
            $('.parallax3').parallax("50%", 0.5);
            $('.parallax4').parallax("50%", -0.725);
            $('.parallax5').parallax("50%", -0.15);             
        }
    };

    var tabs = function() {
        $('.flat-tabs').each(function() {
            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();

            $(this).find('.menu-tab').children('li').on('click', function(e) {
                var liActive = $(this).index(),
                    contentActive = $(this).siblings().removeClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive);

                contentActive.addClass('active').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    };  

    var woocommerceTabs = function() {
        $('.woocommerce-tabs').each(function() {
            $('.tab').on('click',function (e) {
                var key = $(this).data('id');
                $('.tab-content').hide();
                $(key).show();
                $('.tabs li a').removeClass('active');
                $(this).addClass('active');
                return false;
            });
        });
    };

    var inViewport =  function() {
        $('[data-inviewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };
    
    var flatCounter = function() {
        if ( $().countTo ) {
            $('.counter').on('on-appear', function() {
                $(this).find('.numb-count').each(function() {
                    var to = $(this).data('to'),
                        speed = $(this).data('speed');
                        
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                });
            });
        }
    };

    var flatOwl = function() {
        if ( $().owlCarousel ) {
            $('.themesflat-carousel-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap")),
                dots = $this.data("dots"),
                nav = $this.data("nav");

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    loop:true,
                    dots:dots,
                    nav: nav,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        765:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
            $('.flat-testimonial-carousel').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap")),
                dots = $this.data('dots'),
                nav = $this.data('nav');

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    loop:false,
                    dots:dots,
                    nav: nav,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    navText:['&#x23;','&#x24;'],
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var testimonialSlider = function() {
        $('#flat-testimonials-slider').each(function(){
            $('#flat-testimonials-slider').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                directionNav: false,
            });
        });   
    }; 

    var VideoPopup =  function() {

        $(".fancybox").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type")
            }); // fancybox
            return false   
        }); // on
    };


    var flatIsotope = function() {         
        if ( $().isotope ) {           
            var $container = $('.isotope-project');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.imagebox',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };
    };

    var progressBar = function() {        
        $('.progres-bar').on('on-appear', function() {
            $(this).each(function() {
                $(this).css("overflow", "inherit");
                var percent = $(this).data('percent');                
                $(this).find('.progress-animate').animate({
                    "overflow":"inherit",
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );

                $(this).parent('.progress-item').find('.perc').addClass('show').animate({
                    "overflow":"inherit",
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );
            });
        });
    }; // Progress Bar

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            });
        });
    };

    var projectGallary = function() {         
        if ( $().isotope ) {           
            var $container = $('.flat-projects .flat-imagebox');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.imagebox',
                    transitionDuration: '1s'
                });
            });           
        };
    };


    var flatPaddingAuto = function () {
        $(window).on('load resize', function() {
            var mode = 'desktop';
            if(matchMedia('only screen and (max-width: 991px)').matches)
                mode = "mobile";
            $('.flat-padding-auto').each(function(){
                var padding = $(this).data('padding');
                if(padding) {
                    if(mode === 'desktop'){
                        $(this).attr('style','padding:' + $(this).data('padding'))
                    }else if( mode === 'mobile'){
                        $(this).attr('style','padding:' + $(this).data('mobilepadding'))
                    }
                }
            });
        });
    };

    var flatMarginAuto = function () {
        $(window).on('load resize', function() {
            var mode = 'desktop';
            if(matchMedia('only screen and (max-width: 991px)').matches)
                mode = "mobile";
            $('.flat-margin-auto').each(function(){
                var margin = $(this).data('margin');
                if(margin) {
                    if(mode === 'desktop'){
                        $(this).attr('style','margin:' + $(this).data('margin'))
                    }else if( mode === 'mobile'){
                        $(this).attr('style','margin:' + $(this).data('mobilemargin'))
                    }
                }
            });
        });
    };

    var flatSpacer = function() {
        $(window).on('load resize', function(){
            var mode = 'desktop';
            if(matchMedia('only screen and (max-width: 991px)').matches) 
                mode = 'mobile';
            if(matchMedia('only screen and (max-width: 767px)').matches)
                mode = 'smobile';
            $('.flat-spacer').each( function(){
                if( mode === 'desktop'){
                    $(this).attr('style','height:' + $(this).data('desktop') + 'px')
                }else if( mode === 'mobile') {
                    $(this).attr('style','height:' + $(this).data('mobile') + 'px')
                }else {
                    $(this).attr('style','height:' + $(this).data('smobile') + 'px')
                }
            });
        });
    };

    var flatEqualizeHeight = function() {
        $(window).on('load resize', function () {
            setTimeout(function () {
                $(document).imagesLoaded(function () {
                    if ( matchMedia( 'only screen and (max-width: 767px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        $('.equalize.equalize-auto').children().css("height", "");
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        $('.equalize.equalize-auto').children().css("height", "");
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 1199px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        $('.equalize.equalize-auto').children().css("height", "");
                        return false;
                    } else {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        return false;
                    }
                });
            }, 500);
        });
    };

    var goTop =  function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 300 ) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    var flatGallery = function() {
        if ( $().owlCarousel ) {
            $('.themesflat-gallery').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: false,
                    thumb: true,
                    dots:false,
                    thumbImage: true,
                    navigation : false,
                    pagination: false,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };  
            
    var googleMap = function () {
        // gmap default
        if ($().gmap3) {
            var data = JSON.parse('[{"address":"Westwell Leacon, Ashford, Vương Quốc Anh","content":""}]');
            $(".flat-map")
            .gmap3({
                map: {
                    options: {
                        zoom: 10,
                        center: [51.1946026,0.8140602,14.5],
                        mapTypeId: 'Standell',
                        mapTypeControlOptions: {
                            mapTypeIds: ['Standell', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: true
                    },
                },
            });

        }
        // json loop
        $.each(data, function (key, val) {
            $('.flat-map').gmap3({
                marker: {
                    values: [{
                        address: val.address,
                        options: {
                            icon: "./images/map/icon-map.png"
                        }
                        
                    }]
                },
                styledmaptype: {
                    id: "Standell",
                    options: {
                        name: "Standell"
                    },
                    styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": "-100"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "all",
                        "stylers": [
                        {
                            "visibility": "off"
                        }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 65
                        },
                        {
                            "visibility": "on"
                        }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": "50"
                        },
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": "-100"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [
                        {
                            "lightness": "30"
                        }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [
                        {
                            "lightness": "40"
                        }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "hue": "#ffff00"
                        },
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -97
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -100
                        }
                        ]
                    }
                    ]
                }
            });
        });
    };

    var accordionToggle = function() {
        var speed = {duration: 400};
        $('.toggle-content').hide();
        $('.accordion-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.accordion').find('.toggle-title').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle(speed);
            $(".toggle-content").not($(this).next()).slideUp(speed);
            if ($(this).is('.active')) {
                $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active')
                $(this).toggleClass('active');
            };
        });
    }; // Accordion Toggle

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header .container-header ').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header .container-header ').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.mobile-button').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    };

    var removePreloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
                $(this).remove();
            }); 
        });
    };

    var headerFixed = function() {
        var nav = $('#header');
        $(window).on('load', function(){
            var header = $('#header');           
            var offsetTop = $('#header').offset().top;
            var headerHeight = $('#header').height();             

            $(window).on('load scroll', function(){
                if ( $(window).scrollTop() > offsetTop  ) {
                    $('#header').addClass('fixed-header');
                } else {
                    $('#header').removeClass('fixed-header');
                }
            });
        });
    };

    var flatRetinaLogo = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
        var $logo = $('#logo img');
        var $logo_retina = $logo.data('retina');

        var $logo_ft = $('#logo-ft img');
        var $logo_retina_ft = $logo_ft.data('retina');

        if ( retina && $logo_retina ) {
            $logo.attr({
                src: $logo.data('retina'),
                width: $logo.data('width'),
                height: $logo.data('height')
            });
        } 

        if ( retina && $logo_retina_ft ) {
            $logo_ft.attr({
                src: $logo_ft.data('retina'),
                width: $logo_ft.data('width'),
                height: $logo_ft.data('height')
            });
        }
    };

    var tabService = function() {
        $('.flat-tabs').each(function() {
            $('.tab-content-service').css({'opacity':'0'});
            $('.tab-content-service').first().css({'opacity':'1'});;
            $('.iconbox-service-header').on('click', function(e) {
                $('.tab-content-service').css({'opacity':'0'});;
                var id = $(this).data("id");
                $(id).css({'opacity':'1'}).fadeIn('slow');
                e.preventDefault();
            });
        });
    };

    var ajaxContactForm = function() {  
        $('#contact-form').each(function() {
            $(this).validate({
                rules: {
                    phone: {
                        required: true,
                        number: true
                    }
                },
                submitHandler: function( form ) {
                    var $form = $(form),
                    str = $form.serialize();
                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data:  str,
                        beforeSend: function () {},
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg === 'Success' ) {                                
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                                );
                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                        }
                    });
                }
            });
        }); // each contactform
    };

    var ajaxSubscribe = function () {
        $('#subscribe-form').each(function () {
            $(this).validate({
                submitHandler: function (form) {
                    var $form = $(form);
                    $form.serialize();
                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        dataType: 'json',
                        data: {
                            subscribeEmail: $('#subscribe-email').val()
                        },
                        beforeSend: function () { },
                        success: function (responseData, textStatus, jqXHR) {

                            var subscribeEmail = $('#subscribe-email'),
                                subscribeButton = $('#subscribe-button'),
                                subscribeMsg = $('#subscribe-msg'),
                                subscribeContent= $("#subscribe-content"),
                                success_message = '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
                                failure_message = '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
                                noticeError = '<div class="notification_error">{msg}</div>',
                                noticeInfo = '<div class="notification_error">{msg}</div>';
                            var messageDiv = subscribeMsg.html('').hide();
                            if (responseData.status) {
                                subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(success_message).fadeIn(500);
                                });
                            } else {
                                switch (responseData.msg) {
                                    case "errormail":
                                    messageDiv.html(noticeError.replace('{msg}', 'Error! <strong>Error send email.</strong>'));
                                    break;
                                    case "duplicate":
                                    messageDiv.html(noticeError.replace('{msg}', 'Error! <strong>Email is duplicate.</strong>'));
                                    break;
                                    case "filewrite":
                                    messageDiv.html(noticeInfo.replace('{msg}', 'Error! <strong>Mail list file is open.</strong>'));
                                    break;
                                    case "undefined":
                                    messageDiv.html(noticeInfo.replace('{msg}', 'Error! <strong>undefined error.</strong>'));
                                    break;
                                    case "api-error":
                                    subscribeContent.fadeOut(500, function () {
                                        messageDiv.html(failure_message);
                                    });
                                }
                                messageDiv.fadeIn(500);
                            }
                        },
                        complete: function (xhr, status, error_thrown) {
                        }
                    });
                }
            });
         }); 
    };




            


          
   

// Dom Ready
    $(function() {
        themesflatSearch(); 
        FlatClient();
        parallax();
        tabs();
        woocommerceTabs();
        flatCounter();
        flatOwl();
        testimonialSlider();
        VideoPopup();
        flatIsotope();
        progressBar();
        detectViewport();
        projectGallary(); 
        flatSpacer();
        flatPaddingAuto();
        flatMarginAuto();
        flatEqualizeHeight();
        goTop();
        flatGallery();
        googleMap();
        accordionToggle();
        responsiveMenu();
        removePreloader();
        headerFixed();
        flatRetinaLogo();
        ajaxContactForm();  
        ajaxSubscribe();
        $( window ).load(function() {
            inViewport();
            tabService();
        });
        
    });
})(jQuery);