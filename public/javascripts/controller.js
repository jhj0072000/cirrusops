var cirrusOps = angular.module('cirrusOps',[]);

/* ----------------------------------------------------------- */
/*  SUB MENU HANDLER FOR DETAIL PAGES
/* ----------------------------------------------------------- */
cirrusOps.controller('ScrollController', ['$scope', function($scope) {
	$(document).ready(function () {
		$(document).on("scroll", onScroll);
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
			var target = this.hash,
			menu = target;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 180
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
	function onScroll(event){
		var scrollPos = $(document).scrollTop() + 180;
		$('#solution-menu a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('#solution-menu ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});
	}
}]);

/* ----------------------------------------------------------- */
/*  SUB MENU HANDLER FOR LANDING PAGE
/* ----------------------------------------------------------- */
cirrusOps.controller('ScrollController2', ['$scope', function($scope) {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 80
				}, 1000);
				return false;
			}
		}
	});
}]);

/* ----------------------------------------------------------- */
/*  OWL CAROUSEL
/* ----------------------------------------------------------- */
cirrusOps.controller('OwlController', ['$scope', function($scope) {
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
			items: 4,
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
					sync2.trigger("owl.goTo", num - sync2visible.length+1)
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
}]);

cirrusOps.controller('MainHeaderController', ['$scope', function($scope) {
	$(document).ready(function() {

		var owl = $("#owl-header");

		owl.owlCarousel({
			singleItem: true,
			transitionStyle: "fade",
			autoPlay: 5000
		});

	});
}]);

/* ----------------------------------------------------------- */
/*  FORM VALIDATION
/* ----------------------------------------------------------- */
cirrusOps.controller('FormController', ['$scope', function($scope) {
	$(".demo-form").validate({
		rules: {
			firstName: {required: true},
			lastName: {required: true},
			email: {email: true, required: true},
			phoneNumber: {number: true},
			message: {required: true}
		},
		messages: {
			firstName: 'First name is required.',
			lastName: 'Last name is required.',
			email: {
				required: 'Email address is required.',
				email: 'Invalid email format.',
			},
			phoneNumber: {
				number: 'Invalid phone number.'
			},
			message: 'This field is required.',
		},
		tooltip_options: {
			// firstName: {trigger:'focus'},
			// lastName: {trigger:'focus'},
			// email: {trigger:'focus'},
			// phoneNumber: {trigger:'focus'},
			// contactTime: {trigger:'focus'},
			// message: {trigger:'focus'},
		},
	});

}]);










