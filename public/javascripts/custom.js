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
  /*  NAVIGATION
  /* ----------------------------------------------------------- */

  $(document).ready(function() {
    $('[data-toggle=collapse-side]').click(function(e) {
      $('.side-collapse').toggleClass('open');
    });
  });
  $('.navbar-toggle').click(function () {
    var text = $(this).text();
    if($('#toggle-selector').hasClass("open")){
      $(this).text(text.replace('MORE +', 'LESS -'));
    } else {
      $(this).text(text.replace('LESS -', 'MORE +')); 
    }
  });
  // IF SCROLLED
  $(document).scroll(function () {
    if ($(document).scrollTop() >= 70) {
      $('.side-collapse').css("top","70px");
    } else {
      $('.side-collapse').css("top","97px");
    }
  });
  
  // MENU HANDLER
  var url = window.location;
  
  $('ul.nav a').filter(function() {
      return this.href == url;
  }).parent().addClass('active');

  // STICKY
  $(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
  });

  // HOVER MENU
  // $(document).ready(function(){
  //   $(".dropdown").hover(            
  //     function() {
  //       $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
  //       $(this).toggleClass('open');        
  //     },
  //     function() {
  //       $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
  //       $(this).toggleClass('open');       
  //       }
  //   );
  // });
$.fn.responsiveTabs = function() {
  this.addClass('responsive-tabs');
  this.append($('<span class="glyphicon glyphicon-triangle-bottom"></span>'));
  this.append($('<span class="glyphicon glyphicon-triangle-top"></span>'));

  this.on('click', 'li.active > a, span.glyphicon', function() {
    this.toggleClass('open');
  }.bind(this));

  this.on('click', 'li:not(.active) > a', function() {
    this.removeClass('open');
  }.bind(this));
};

$('.nav.nav-tabs').responsiveTabs();



});
