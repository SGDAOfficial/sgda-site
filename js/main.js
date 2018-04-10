(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
    
  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 26) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });


  //Filter data
  //https://bootsnipp.com/snippets/r1Z7d
  $(document).ready(function(){

    $(".filter-btn").click(function(){
        $('.filter-btn').removeClass('active-filter');
        $(this).addClass("active-filter");
        
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show();
        }
        else
        {
            //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide();
            $('.filter').filter('.'+value).show();
            
        }
    });
  });

})(jQuery); // End of use strict
