$(document).ready(function() {
  $("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top
    }, 1000);
  });
  /*Scroll to top when arrow up clicked BEGIN*/
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#returntotop').fadeIn();
    } else {
      $('#returntotop').fadeOut();
    }
  });
  $("#returntotop").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  /*Scroll to top when arrow up clicked END*/
});