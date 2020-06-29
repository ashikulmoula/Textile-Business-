(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(".listing-carosel").owlCarousel({
      nav: false,
      dots: false,
      loop: true,
      autoplay: false,
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        700: {
          items: 4,
        },
        900: {
          items: 5,
        },
      },
    });
  });

  jQuery(document).ready(function ($) {
    $(".news-carosel").owlCarousel({
      nav: false,
      dots: true,
      loop: true,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        737: {
          items: 2,
        },
      },
    });
  });

  jQuery(document).ready(function ($) {
    $(".testomonial-carosel").owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      loop: true,
      autoplay: false,
    });
  });

  jQuery(document).ready(function ($) {
    $(".counter").counterUp({
      delay: 16,
      time: 1000,
    });
  });

  jQuery(document).ready(function ($) {
    $(".toggel-nav").click(function () {
      $("nav").toggleClass("active");
    });
  });

  jQuery(window).load(function () {});
})(jQuery);
