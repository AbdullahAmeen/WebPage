
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var typed = new Typed(".headersecondline", {
  strings:["Hello, Abdullah Ameen is a Geospatial Analyst, Civil Engineer, and an Experienced Program/Project Manager. <br> <br> Scroll Down to See Samples of His Work"],
  typeSpeed: 90,
  backSpeed:5,
  loop: true,

})
