
import "@hotwired/turbo-rails"
import "./controllers"

	//= require sweetalert2
	//= require sweet-alert2-rails
	//= require underscore
	

document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.fixed-action-btn');
//    var instances = M.FloatingActionButton.init(elems, options);
  });
	
	(function($){
		$(function(){

			$('.dark-toggle').on('click',function(){
				if ($(this).find('i').text() == 'brightness_4'){
						$(this).find('i').text('brightness_high');
				} else {
						$(this).find('i').text('brightness_4');
				}
			});
	
			$('.fixed-action-btn').floatingActionButton({
					direction: 'top',
					hoverEnabled: true
				});
			$('.sidenav').sidenav();
			$('.parallax').parallax();
			$('.carousel').carousel();
	
		}); // end of document ready
	})(jQuery); // end of jQuery name space%
