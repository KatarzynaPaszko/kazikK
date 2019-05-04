$(function() {

// hamburger menu at mobile view

    $('#nav-icon1').click(function(){
    		$(this).toggleClass('open');
    		$("#nav--main").toggleClass('open');
        $(".navbar__bg").toggleClass('open');
    });


// Sygnet fixed/absolute depending on document height

    window.onscroll = function() {
      // console.log(window.pageYOffset);
        if (window.pageYOffset >= (($(document).height()))-1087) {
            $('.k__sygnet').removeClass("fixed").addClass("absolute");
        } else {
          $('.k__sygnet').removeClass("absolute").addClass("fixed");
        }
    }

// REALIZACJE - w widoku mobilnym wyswietl wszytskie na raz, a w widoku na monitor wyswoetla jako pokaz slajdów
    if ($(window).width() <= 750) {
       $('.item').addClass("active");
    }

// dostosuj wysokość DIVa realizacje w zaleznosci od contetntu
    if ($(window).width() <= 750) {
      var result = $(".projects__show").height();
      // result = result + 100;
      console.log(result);

      $(".carousel-inner > .item > img").height(result);
    }

//pokaz opis reaalizacji projektu po kliknieciu w strzałke/ukrys po kliknieciu w krzyzyk

    var introSizeStart = $(".projects__show").height()
    $(".item > img").height(introSizeStart);

    $('.arrow').click(function(){

      var button = $(this).children();
      var detailsSize = $(this).parent().next().height();
      var introSize = $(this).parent().height();
      var allSize = $(this).parent().parent().prev();

      if (button.attr('src') == 'images/svg/strzalka_duza-01.svg') {
        button.attr('src',"images/svg/zamknij.svg");
        // $(".carousel-inner > .item > img").height(detailsSize+introSize);
        allSize.height(detailsSize+introSize);
      } else {
        button.attr('src',"images/svg/strzalka_duza-01.svg");
        allSize.height(introSize);
      }




        //
        // $(".projects__details").toggleClass('show');
        // $(".navbar__bg").toggleClass('open');
    });


// .img-responsive, .carousel-inner > .item > img, .carousel-inner > .item > a > img

})
