(function ($) {
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

  $("html").click(function (event) {
    $(".hamburger").removeClass("is-active");
  });

})(jQuery);
