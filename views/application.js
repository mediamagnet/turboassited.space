(function($){
    $(function(){

        $('.fixed-action-btn.click-to-toggle').floatingActionButton({
            direction: 'top',
            hoverEnabled: true
          });
        $('.sidenav').sidenav();
        $('.parallax').parallax();


    }); // end of document ready
})(jQuery); // end of jQuery name space

function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass === "dark-mode" ? "light-mode" : "dark-mode";
  }
