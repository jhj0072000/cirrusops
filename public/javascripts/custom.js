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
        $('body').css("overflow", "hidden");
      } else {
        $(this).text(text.replace('LESS -', 'MORE +')); 
        $('body').css("overflow", "visible");
      }
    });
    
    // MENU HANDLER
    // var url = window.location;
    // $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).parent().addClass('active');

  var first = $(location).attr('pathname');
  first.indexOf(1);
  first.toLowerCase();
  firstURL = first.split("/")[1];
  secondURL = first.split("/")[2];
  console.log(secondURL);

  if (firstURL == "solution") {
    $("#solutionnav").addClass("active");
  } else if (firstURL == "") {
    $("#homenav").addClass("active");
  } else if (firstURL == "about") {
    $("#aboutnav").addClass("active");
  } else if (firstURL == "connect") {
    $("#connectnav").addClass("active");
  }

    // STICKY
    $(document).ready(function(){
      $("#sticker").sticky({topSpacing:0});
    });

    // PAGE TABS
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


    /* ----------------------------------------------------------- */
    /*  PAGES
    /* ----------------------------------------------------------- */



  });
