function showHead() {
  $("#head").fadeIn(2000);
}
$(document).ready(function() {
  $("#head").hide();
  $("#dev").hide();
  $("#design").hide();
  $("#dev").slideDown('slow');
  $("#design").slideDown('slow').promise().done(showHead());

});

$(".nav a").on("click", function() {
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

$(".thumbnail").on("click", function() {
  var clicked = $(".thumbnail").index(this) + 1;
  $('#imagepreview' + clicked).attr('src', $('#project' + clicked).attr('src'));
  $('#modal' + clicked).modal('show');
});