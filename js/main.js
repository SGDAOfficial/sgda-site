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
    

  //Carousel
  /*Pauses the Carousel whenever hover over with pointer in order to read the Speaker Bio otherwise it will move to the next item due to the time interval*/
  $('.carousel').carousel(function () {
    this.pause(true);
  });
    
  /*THIS is only for the Engineering Panel Carousel*/
  //Grabbing the carousel item length
  var idx_len = $('.carousel-item').length;
  //console.log('Length is ' + idx_len);

  //Predefine the index where to start
  var idx = $('.carousel-item').index() + 1;
  //console.log('Current Carousel item is ' + idx);

  //Removes the carousel-Active-Item class whenever carousel moves to new slide
  $('#carouselExampleControls').on('slid.bs.carousel', function () {
    //Grabs the current speaker img element to see what is grabbed
    var speaker_img = document.getElementById('speaker-img-' + idx);
    speaker_img.classList.remove('active-Carousel-Item')
  });

  //This adds the carousel-Active-Item class whenever a new slide is introduced
  $('#carouselExampleControls').on('slide.bs.carousel', function () {

 //Grabbing each speaker name
  var current_carousel_speaker_name = document.getElementById('Speaker-' + idx).innerText;

  var speaker_img = document.getElementById('speaker-img-' + idx);

  switch (current_carousel_speaker_name){
    case 'Paul Laska':
      // console.log('Slide # is ' + idx);
      // console.log(current_carousel_speaker_name);
      // console.log(speaker_img);
      speaker_img.classList.add('active-Carousel-Item')
      //$s_img.toggleClass('active-Carousel-Item');
      idx++;
      break;
    case 'Koray Hagen':
      // console.log('Slide # is ' + idx);
      // console.log(current_carousel_speaker_name);
      // console.log(speaker_img);
      speaker_img.classList.add('active-Carousel-Item')
      //$s_img.toggleClass('active-Carousel-Item');
      idx--;
      break;
  }
  });

  //Predefine the index where to start
  var gdp_idx = $('.carousel-item').index() + 3;
  //Removes the carousel-Active-Item class whenever carousel moves to new slide
  $('#carouselExampleControls-2').on('slid.bs.carousel', function () {
    //Grabs the current speaker img element to see what is grabbed
    var speaker_img = document.getElementById('speaker-img-' + gdp_idx);
    speaker_img.classList.remove('active-Carousel-Item')
  });

  //This adds the carousel-Active-Item class whenever a new slide is introduced
  $('#carouselExampleControls-2').on('slide.bs.carousel', function () {

    //Grabbing each speaker name
    var current_carousel_speaker_name = document.getElementById('Speaker-' + gdp_idx).innerText;

    var speaker_img = document.getElementById('speaker-img-' + gdp_idx);

    switch (current_carousel_speaker_name){
      case 'Jason Fader':
        // console.log('Slide # is ' + gdp_idx);
        // console.log(current_carousel_speaker_name);
        // console.log(speaker_img);
        speaker_img.classList.add('active-Carousel-Item')
        //$s_img.toggleClass('active-Carousel-Item');
        gdp_idx++;
        break;
      case 'Carrie Patel':
        // console.log('Slide # is ' + gdp_idx);
        // console.log(current_carousel_speaker_name);
        // console.log(speaker_img);
        speaker_img.classList.add('active-Carousel-Item')
        //$s_img.toggleClass('active-Carousel-Item');
        gdp_idx--;
        break;
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
