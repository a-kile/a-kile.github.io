$(document).ready(function(){

  $(".headr").animate({
    height: "30vh"
  }, 2000, function(){
    // callback
  });
  $(".headr h1").animate({
    opacity: 1
  }, 3000);

  $(".quote-content").animate({
    opacity: 1
  }, 2000);
});
