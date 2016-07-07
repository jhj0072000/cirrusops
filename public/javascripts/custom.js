/* ----------------------------------------------------------- */
/*  LOADING 
/* ----------------------------------------------------------- */
$(window).load(function() { // makes sure the whole site is loaded
  jQuery('.clock').fadeOut(); // will first fade out the loading animation
  jQuery('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
  jQuery('body').delay(100).css({'overflow':'visible'});
});

/* ----------------------------------------------------------- */
/*  SCROLL TOP BUTTON
/* ----------------------------------------------------------- */
$(window).scroll(function(){
  if ($(this).scrollTop() > 300) {
    $('.scrollToTop').fadeIn();
  } else {
    $('.scrollToTop').fadeOut();
  }
});
//Click event to scroll to top
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});

/* ----------------------------------------------------------- */
/*  OWL CAROUSEL
/* ----------------------------------------------------------- */
$(document).ready(function() {
 
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    pagination: true,
    paginationSpeed: 400,
    slideSpeed: 400,
    autoPlay: 7000,
    afterAction : syncPosition,
    responsiveRefreshRate : 300,
  });
 
  sync2.owlCarousel({
    touchDrag: false,
    mouseDrag: false,
    items : 4,
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }
 
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
var first = $(location).attr('pathname');
first.indexOf(1);
first.toLowerCase();
firstURL = first.split("/")[1];
secondURL = first.split("/")[2];
// MENU HANDLER FOR MAIN NAVBAR
// if (firstURL == "solution") {
//   $("#solutionnav").addClass("active");
// } else if (firstURL == "") {
//   $("#homenav").addClass("active");
// } else if (firstURL == "about") {
//   $("#aboutnav").addClass("active");
// } else if (firstURL == "connect") {
//   $("#connectnav").addClass("active");
// }
// // SUB MENU HANDLER FOR SOLUTION PAGE
// if (secondURL == "quickbase") {
//   $("#quickbasenav").addClass("active");
// } else if (secondURL == "consulting") {
//   $("#consultingnav").addClass("active");
// } else if (secondURL == "spreadsheet") {
//   $("#spreadsheetnav").addClass("active");
// }
// SUB MENU HANDLER FOR DETAIL PAGES
// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top - 180
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop() + 180;
//     $('#solution-menu a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#solution-menu ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }





// PAGE TABS
// $.fn.responsiveTabs = function() {
//   this.addClass('responsive-tabs');
//   this.append($('<span class="glyphicon glyphicon-triangle-bottom"></span>'));
//   this.append($('<span class="glyphicon glyphicon-triangle-top"></span>'));

//   this.on('click', 'li.active > a, span.glyphicon', function() {
//     this.toggleClass('open');
//   }.bind(this));

//   this.on('click', 'li:not(.active) > a', function() {
//     this.removeClass('open');
//   }.bind(this));
// };

// $('.nav.nav-tabs').responsiveTabs();

// ANIMATE.CSS
// $('section').addClass('animated fadeIn');



