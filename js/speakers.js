$(document).ready(function () {

(function($) {
  "use strict"; // Start of use strict
  //Carousel interval timer
  $('.carousel').carousel({
    interval: 0
  })

//Carousel
  /*Pauses the Carousel whenever hover over with pointer in order to read the Speaker Bio otherwise it will move to the next item due to the time interval*/
  $('.carousel').carousel(function () {
    this.pause(true);
  });

  // var $speaker_image_ID = $('#Speaker-images');
  // var $speaker_Row = ($speaker_image_ID);
  //
  // var $korayIsActive = '<div class="row"  id="Speaker-images">\n' +
  //   '\n' +
  //   '            <div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="0">\n' +
  //   '                <img id="speaker-img-0" src="img/speakers/paul_laska.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>\n' +
  //   '            <div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="1">\n' +
  //   '                <img id="speaker-img-1" src="img/speakers/koray_hagen.png" class="img-fluid p-2 active-Carousel-Item" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>\n' +
  //   '            <div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="2">\n' +
  //   '                <img id="speaker-img-2" src="img/speakers/rachelle_davis.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>\n' +
  //   '            <div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="3">\n' +
  //   '                <img id="speaker-img-3" src="img/speakers/tim_ford.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>\n' +
  //   '\n' +
  //   '          </div>';
  //
  // var $rachelleIsActive = '<div class="row"  id="Speaker-images">\n' +
  //   '\n' +
  //   '            <div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="0">\n' +
  //   '                <img id="speaker-img-0" src="img/speakers/paul_laska.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>\n' +
  //   '            <div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="1">\n' +
  //   '                <img id="speaker-img-1" src="img/speakers/koray_hagen.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>\n' +
  //   '            <div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="2">\n' +
  //   '                <img id="speaker-img-2" src="img/speakers/rachelle_davis.png" class="img-fluid p-2 active-Carousel-Item" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>\n' +
  //   '            <div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="3">\n' +
  //   '                <img id="speaker-img-3" src="img/speakers/tim_ford.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>\n' +
  //   '\n' +
  //   '          </div>';
  //
  // var paul_image_obj = '<div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="0">\n' +
  //   '               <img id="speaker-img-0" src="img/speakers/paul_laska.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>';
  //
  // var paul_active_image_obj = '<div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="0">\n' +
  //   '               <img id="speaker-img-0" src="img/speakers/paul_laska.png" class="img-fluid p-2 active-Carousel-Item" alt="">\n' +
  //   '              </a>';
  //
  // var koray_image_obj = '<div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="1">\n' +
  //   '               <img id="speaker-img-1" src="img/speakers/koray_hagen.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>';
  //
  // var koray_active_image_obj = '<div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="1">\n' +
  //   '               <img id="speaker-img-1" src="img/speakers/koray_hagen.png" class="img-fluid p-2 active-Carousel-Item" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>';
  //
  // var rachelle_image_obj = '<div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="2">\n' +
  //   '               <img id="speaker-img-2" src="img/speakers/rachelle_davis.png" class="img-fluid p-2" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>';
  //
  // var rachelle_active_image_obj = '<div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="2">\n' +
  //   '               <img id="speaker-img-2" src="img/speakers/rachelle_davis.png" class="img-fluid p-2 active-Carousel-Item" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>';
  //
  //   var tim_image_obj = '<div class="col-md-3 col-5 d-block mx-auto">\n' +
  //     '              <a href="" data-target="#carouselExampleControls" data-slide-to="3">\n' +
  //     '               <img id="speaker-img-3" src="img/speakers/tim_ford.png" class="img-fluid p-2" alt="">\n' +
  //     '              </a>\n' +
  //     '            </div>';
  //
  // var tim_active_image_obj = '<div class="col-md-3 col-5 d-block mx-auto">\n' +
  //   '              <a href="" data-target="#carouselExampleControls" data-slide-to="3">\n' +
  //   '               <img id="speaker-img-3" src="img/speakers/tim_ford.png" class="img-fluid p-2 active-Carousel-Item" alt="">\n' +
  //   '              </a>\n' +
  //   '            </div>';

    //$speaker_image_ID.prepend(tim_image_obj).prepend(rachelle_image_obj).prepend(koray_image_obj).prepend(paul_image_obj);

  /*THIS is only for the Engineering Panel Carousel*/
  //Grabbing the carousel item length
  var idx_len = $('.carousel-item').length;
  //console.log('Length is ' + idx_len);

  $('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    var active = $(e.target).find('.carousel-inner > .item.active');
    var from = active.index();
    var next = $(e.relatedTarget);
    var to = next.index();
    console.log(from + ' => ' + to);
    var current_carousel_speaker_name = document.getElementById('Speaker-' + to).innerText;
    //var speaker_img = document.getElementById('speaker-img-' + to);
    var $speaker_img = $('#speaker-img-1');

    switch (to){
      case 0:
        //console.log(current_carousel_speaker_name);
        //$speaker_image_ID.append(paul_image_obj);
        break;
      case 1:
        //console.log(current_carousel_speaker_name);
        //$speaker_image_ID.append(koray_image_obj);
        //$speaker_image_ID.append($korayIsActive);
        //$speaker_img.classList.add('.active-Carousel-Item');
        //$speaker_img.css("border-bottom", "5px solid rgb(56, 51, 101);");
        break;
      case 2:
        console.log(current_carousel_speaker_name);
        //$speaker_image_ID.append($rachelleIsActive);
        //$speaker_image_ID.replaceWith($rachelleIsActive);
        //$speaker_image_ID.append(rachelle_image_obj);
        //$speaker_img.classList.add('.active-Carousel-Item');
        break;
      case 3:
        console.log(current_carousel_speaker_name);
        //$speaker_image_ID.replaceWith(tim_image_obj);
        //$speaker_img.classList.add('.active-Carousel-Item');
        break;
    }


  })

})(jQuery); // End of use strict

}); //Document ready
