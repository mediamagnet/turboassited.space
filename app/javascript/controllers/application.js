import { Application } from "@hotwired/stimulus"


//= require jquery3
//= require jquery_ujs
//= require materialize
//= require sweetalert2
//= require sweet-alert2-rails
//= require underscore
//= require_self
//= require_tree .

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

(function($){
    $(function(){

        $('.fixed-action-btn').floatingActionButton({
            direction: 'top',
            hoverEnabled: true
          });
        $('.sidenav').sidenav();
        $('.parallax').parallax();


    }); // end of document ready
})(jQuery); // end of jQuery name space%
