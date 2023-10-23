(function ($) {
  $(document).ready(function () {
    var observer = lozad(); // lazy loads elements with default selector as '.lozad'

    observer.observe();
    lozad(".lozad", {
      loaded: function (el) {
        // Custom implementation on a loaded element
        el.classList.add("loaded");
      },
    });
  });

  $(document).ready(function () {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  });

  // Fixed Nav
  // $(window).on("scroll", function() {
  //   var scrollPosition = $(window).scrollTop();
  //   if (scrollPosition > 500) {
  //     $('#header-fixed').addClass('active');
  //   } else {
  //     $('#header-fixed').removeClass('active');
  //   }
  // });

  // Animate on scroll
  AOS.init();

  // ScrollReveal
  //ScrollReveal().reveal('.reveal', { interval: 16, delay: 500 });

  // Responsive embeds
  $("iframe").addClass("embed-responsive-item");
  //$("iframe").wrap("<div class='embed-responsive embed-responsive-16by9'/>");

  $(".hamburger").on("click", function () {
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
      $("#mobile-menu, #mobile-menu ul.sub-menu, body").removeClass(
        "is-active"
      );
    } else {
      $(this).addClass("is-active");
      $("#mobile-menu, body").addClass("is-active");
    }
  });
  $("#mobile-menu,.hamburger,  #menu-header-menu").click(function (event) {
    event.stopPropagation();
  });

  $("#mobile-menu .arrow").on("click", function () {
    if ($(this).next("ul.sub-menu").hasClass("is-active")) {
      $(this).next("ul.sub-menu").removeClass("is-active");
    } else {
      $(this).next("ul.sub-menu").addClass("is-active");
    }
  });

  $("#mobile-menu .sub-menu .back").on("click", function () {
    if ($(this).parent("ul.sub-menu").hasClass("is-active")) {
      $(this).parent("ul.sub-menu").removeClass("is-active");
    }
  });

  //  $(".arrow-wrapper .arrow-back").on("click", function () {
  //    if ($(".custom-menu").hasClass("active")) {
  //      $(".custom-menu").removeClass("active");
  //    } else {
  //      $(".custom-menu").addClass("active");
  //    }
  //  });

  $("html").click(function (event) {
    $(".hamburger").removeClass("is-active");
  });

  //   $(".text-slider").slick({
  //     infinite: true,
  //     speed: 1000,
  //     slidesToShow: 1,
  //     adaptiveHeight: true,
  //     fade: true,
  //     arrows: true,
  //     autoplay: false,
  //     dots: true,
  //     autoplaySpeed: 2000,
  //   });

  //   $(".text-slider2").slick({
  //     infinite: true,
  //     speed: 1000,
  //     slidesToShow: 1,
  //     adaptiveHeight: true,
  //     fade: true,
  //     arrows: true,
  //     autoplay: false,
  //     dots: true,
  //     autoplaySpeed: 2000,
  //   });

  //   $(".ginput_container_fileupload input").on("change", function () {
  //     var buttonFiles = $(this);
  //     $(".newText").remove();
  //     $.each(buttonFiles, function (key, value) {
  //       var test = $(value);

  //       test = test[0].files[0].name;
  //       buttonFiles.after("<span class='newText'>" + test + "</span>");
  //       console.log(test);
  //     });
  //   });
})(jQuery);
