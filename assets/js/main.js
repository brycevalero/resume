;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	// Counter
	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	// ScrollTop 
	var scrlTop =  function() {
		$('.fh5co-gotop').click(function(event){
			$('html, body').animate({
		        scrollTop: 0
		    }, 500, 'easeInOutExpo');

		    event.preventDefault();
		    return false;
		});
	};

	// Hover
	var imgHover = function() {
		$('.fh5co-project > a').mouseenter(function(){
			$(this).find('.fh5co-overlay, .fh5co-overlay-text').stop().animate({
				opacity: 1
			}, 400 );
		}).mouseleave(function(){
			$(this).find('.fh5co-overlay, .fh5co-overlay-text').stop().animate({
				opacity: 0
			}, 400 );
		});
	};

	// SmoothScroll
	var smoothScroll = function() {
		$('.smoothscroll').click(function(){

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 70
	    }, 700, 'easeInOutExpo');
	    return false;
		});
	};

	
	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
		  gallery:{
		    enabled:true
		  },
		  zoom: {
		    enabled: true, // By default it's false, so don't forget to enable it

		    duration: 300, // duration of the effect, in milliseconds
		    easing: 'ease-in-out', // CSS transition easing function

		    // The "opener" function should return the element from which popup will be zoomed in
		    // and to which popup will be scaled down
		    // By defailt it looks for an image tag:
		    opener: function(openerElement) {
		      // openerElement is the element on which popup was initialized, in this case its <a> tag
		      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
		      return openerElement.is('img') ? openerElement : openerElement.find('img');
		    }
		  }
		});
	};

	// Accordion
	var accordion = function() {
		$('.js-fh5co-accordion-toggle').click(function(event){
			var $this = $(this);
			if ( $this.closest('.fh5co-accordion').find('.fh5co-accordion-body').is(':visible') ) {
				$this.text('Show More');
			} else {
				$this.text('Show Less');
			}
			$this.closest('.fh5co-accordion').find('.fh5co-accordion-body').slideToggle(400, 'easeInOutExpo');
			event.preventDefault();
		})
	};

	// Scroll Animations

	// Animate Feature
	var animateSocial = function() {
		if ( $('#fh5co-intro-social').length > 0 ) {	
			$('#fh5co-intro-social > a').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInLeft animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Bio
	var animateBio = function() {
		if ( $('#bio-animate').length > 0 ) {
			$('#bio-animate .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};

	// Animate Counter 
	var animateCounter = function() {
		if ( $('#counter-animate').length > 0 ) {
			$('#counter-animate .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	}

	// Animate Projects
	var animateProjects = function() {
		if ( $('#projects-animate').length > 0 ) {
			$('#projects-animate .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Testimony
	var animateTestimony = function() {
		if ( $('#testimony-animate').length > 0 ) {
			$('#testimony-animate .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Testimony
	var animateServices = function() {
		if ( $('#services-animate').length > 0 ) {
			$('#services-animate .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Contact
	var animateContact = function() {
		if ( $('#contact-animate').length > 0 ) {
			$('#contact-animate .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Footer
	var animateFooter = function() {
		if ( $('#footer-animate').length > 0 ) {
			$('#footer-animate .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};



	
	// Waypoints 
	var heroWayPoint = function() {
		if ( $('#fh5co-header').length > 0 ) {
			$('#fh5co-header').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					
					setTimeout(function(){
						$('.animate-1').addClass('fadeInUp animated');
					}, 100);
					setTimeout(function(){
						$('.animate-2').addClass('fadeInUp animated');
					}, 400);

					setTimeout(animateSocial, 600);
					
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	var bioWayPoint = function() {
		if ($('#bio-animate').length > 0 ) {
			$('#bio-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateBio , 200);
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	var counterWayPoint = function() {
		if ($('#counter-animate').length > 0 ) {
			$('#counter-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateCounter , 200);
					setTimeout( counter , 400);

					
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	var projectsWayPoint = function() {
		if ($('#projects-animate').length > 0 ) {
			$('#projects-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateProjects , 200);
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};
	
	var testimonyWayPoint = function() {
		if ($('#testimony-animate').length > 0 ) {
			$('#testimony-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateTestimony , 200);
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	var servicesWayPoint = function() {
		if ($('#services-animate').length > 0 ) {
			$('#services-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateServices , 200);
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	var contactWayPoint = function() {
		if ($('#contact-animate').length > 0 ) {
			$('#contact-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateContact , 200);
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};
	
	var footerWayPoint = function() {
		if ($('#footer-animate').length > 0 ) {
			$('#footer-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout( animateFooter , 200);
					
					$(this).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};
	
	// email submission to bryce
	var blastEmail = function() {
		$('#emailForm').submit(function(event){
			// Stop form from submitting normally
		  	event.preventDefault();
		  	
		  	var ok = $( '#emailForm' ).parsley( 'validate' );
		  	
		  	if(ok){
			    
			    $( "#emailStatus" ).hide(2000);
			    
				// Get some values from elements on the page:
			    var	f_name = $( "#name" ).val(),
			    	f_email = $( "#email" ).val(),
			    	f_phone = $( "#phone" ).val(),
			    	f_message = $( "#message" ).val();
			    	
			    var url = window.location.protocol + "//" + window.location.host + "/email/blast"
				console.log(url);
				
			  	// Send the data using post
			  	var posting = $.post( url, { name: f_name, email: f_email, phone: f_phone, message: f_message} );
			 
			  	// Put the results in a div
			  	posting.done(function( data ) {
			  		if(data == "1"){
			  			$( "#emailSent" ).show(1000);
			  		}
			  		else{
			  			$( "#emailError" ).show(1000);
			  		}
			  	});
		  	} 
			
		})
	};
	

	
	$(function(){
		
		if ( !isiPad() || !isiPhone() ) {
			parallax();
		}

		imgHover();
		accordion();
		smoothScroll();
		scrlTop();
		magnifPopup();
		
		heroWayPoint();
		bioWayPoint();
		counterWayPoint();
		projectsWayPoint();
		testimonyWayPoint();
		servicesWayPoint();
		contactWayPoint();
		footerWayPoint();
		blastEmail();

	});


}());