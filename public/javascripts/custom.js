jQuery(function($){

	/* ----------------------------------------------------------- */
	/*  LOADING 
	/* ----------------------------------------------------------- */
	jQuery(window).load(function() { // makes sure the whole site is loaded
	  jQuery('.clock').fadeOut(); // will first fade out the loading animation
	  jQuery('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
	  jQuery('body').delay(100).css({'overflow':'visible'});
	});

	/* ----------------------------------------------------------- */
	/*  SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */
	jQuery(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  //Click event to scroll to top
  jQuery('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  /* ----------------------------------------------------------- */
  /*  SMOOTH SCROLL [credit to: https://css-tricks.com/snippets/jquery/smooth-scrolling]
  /* ----------------------------------------------------------- */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  /* ----------------------------------------------------------- */
  /*  SCROLL TO ANCHOR
  /* ----------------------------------------------------------- */
  // $(function() {
  //   $.scrollify({
  //     section : ".scrollify",
  //     sectionName: "home-section",
  //     setHeights: false,
  //     offset: -50,
  //   });
  // });

  /* ----------------------------------------------------------- */
  /*  HEADER CONTENT SLIDE (SLICK SLIDER)
  /* ----------------------------------------------------------- */
  jQuery('.header-slide').slick({
    dots: false,
    infinite: true,
    speed: 100,
    arrows:false, 
    autoplay: true,    
    autoplaySpeed: 1500, 
    slidesToShow: 1,
    slide: 'span',
    fade: false,
    cssEase: 'linear'
  });

  /* ----------------------------------------------------------- */
  /*  LEFT NAVIGATION BAR
  /* ----------------------------------------------------------- */
  $(document).ready(function () {
    var trigger = $('.hamburger'),
    listTrigger = $('.sidebar-nav li a'),
    overlay = $('.overlay'),
    isClosed = false;

    function buttonSwitch() {
      if (isClosed === true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

    trigger.click(function () {
      buttonSwitch();
    });

    listTrigger.click(function () {
      buttonSwitch();
    });

    overlay.click(function () {
      buttonSwitch();
    });

    $('[data-toggle="offcanvas"], .sidebar-nav li a, .overlay').click(function () {
      $('#wrapper').toggleClass('toggled');
    });

  });

  jQuery(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.hamb-middle, .hamb-bottom, .hamb-top').addClass('scrolled');
    } else {
      $('.hamb-middle, .hamb-bottom, .hamb-top').removeClass('scrolled');
    }
  });

  var screenSize = $(window).width();

  jQuery(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('#logosimple1').css('display', 'none');
      $('#logosimple2').css('display', 'block');
    } else if ($(this).scrollTop() < 300) {
      $('#logosimple1').css('display', 'block');
      $('#logosimple2').css('display', 'none');
    }
  });




});