
import "@hotwired/turbo-rails";
import "./controllers";
import "jquery";

//= require sweetalert2
//= require sweet-alert2-rails
//= require underscore

	

document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.fixed-action-btn');
//    var instances = M.FloatingActionButton.init(elems, options);

  });
	document.querySelectorAll('li').forEach(item => {
		item.addEventListener('click', darkMode);
	});
	
	function darkMode() {
		let body = document.querySelector('body');
		let mode = this.dataset.mode;
		body.dataset.theme = mode;
	}
	
	(function($){
		$(function(){
			console.log(jQuery);

			$('.dark-toggle').on('click',function(){
				if ($(this).find('i').text() == 'brightness_4'){
						$(this).find('i').text('brightness_high');
				} else {
						$(this).find('i').text('brightness_4');
				}
			});
	
			$('.fixed-action-btn').floatingActionButton({ direction: 'left', hoverEnabled: true }); 
			$('.sidenav').sidenav(); 
			$('.parallax').parallax(); 
			$('.scrollspy').scrollSpy(); 
			$('.slider').slider({height: 250, interval: 10000});
			$('.chips').chips();
			$('.materialboxed').materialbox();
			$('.tooltipped').tooltip();
			$('.collapsible').collapsible();
			$('select').formSelect();
	
		}); // end of document ready
	})(jQuery); // end of jQuery name space

	