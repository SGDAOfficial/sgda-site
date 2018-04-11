(function($) {
  "use strict"; // Start of use strict
  //Carousel interval timer
  $('.carousel').carousel({
    interval: 8000
  })
    
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
    speaker_img.classList.remove('active-Carousel-Item');
  });

  //This adds the carousel-Active-Item class whenever a new slide is introduced
  $('#carouselExampleControls').on('slide.bs.carousel', function () {

 //Grabbing each speaker name
  var current_carousel_speaker_name = document.getElementById('Speaker-' + idx).innerText;

  var speaker_img = document.getElementById('speaker-img-' + idx);

  switch (current_carousel_speaker_name){
    case 'Paul Laska':
      speaker_img.classList.add('active-Carousel-Item');
      idx = 1;
      break;
    case 'Koray Hagen':
      speaker_img.classList.add('active-Carousel-Item');
      idx = 2;
      break;
    case 'Rachelle Davis':
      speaker_img.classList.add('active-Carousel-Item');
      idx = 3;
      break;
    case 'Tim Ford':
      speaker_img.classList.add('active-Carousel-Item');
      idx = 4;
      break;
  }
  });

  //Predefine the index where to start
  var gdp_idx = $('.carousel-item').index() + 5;
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
        speaker_img.classList.add('active-Carousel-Item');
        gdp_idx = 1;
        break;
      case 'Carrie Patel':
        speaker_img.classList.add('active-Carousel-Item');
        gdp_idx = 2;
        break;
      case 'Benson Russell':
        speaker_img.classList.add('active-Carousel-Item');
        gdp_idx = 3;
        break;
      case 'Craig Brown':
        speaker_img.classList.add('active-Carousel-Item');
        gdp_idx = 4;
        break;
    }
  });
    
})(jQuery); // End of use strict