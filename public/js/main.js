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
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $("#slogan-text").typed({
    strings: ["Software developer^300.", "Studied full stack web development. ^1000With JavaScript", "at Fullstack Academy of Code (NYC)", "I took C++ classes at BYU (Utah)", "which led me follow a coding career"],
    typeSpeed: 0,
    backDelay: 3000,
    showCursor: true,
    cursorChar: "|",
    loop: true
  });
  $("#resume").typed({
    strings: ["Get to know me better"],
    typeSpeed: 0,
    backDelay: 2000,
    showCursor: true,
    cursorChar: "|",
    loop: true
  });
});