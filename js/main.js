(function($) {
  "use strict"; // Start of use strict

  /*Pauses the Carousel whenever hover over with pointer in order to read the Speaker Bio otherwise it will move to the next item due to the time interval*/
  $('.carousel').carousel(function () {
    this.pause(true);
  });

  //Filter data
  //https://bootsnipp.com/snippets/r1Z7d
  $(document).ready(function(){

    $(".filter-btn").click(function(){
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
