$(document).ready(function() {
  $('#slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var check = function() {
    return $(window).width() <= 769;
  };

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    if (this.classList.value.includes('about-us')) {
      if (check()) {
        $('#about-us .sub_menu').toggleClass('d-block');
      }
    } else {
      if (check()) {
        $('#about-us .sub_menu').removeClass('d-block');
      }
      window.scrollTo({
        top: $($.attr(this, 'href')).offset().top,
        behavior: 'smooth'
      });
    }
  });

  $('.custom-arrow-left').on('click', function() {
    $('#slider').slick('slickPrev');
  });

  $('.custom-arrow-right').on('click', function() {
    $('#slider').slick('slickNext');
  });
});
