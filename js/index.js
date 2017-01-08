$('document').ready(function(){
  $('#blackout').animate({
    opacity: 0,
    height: 0
  }, 2000)

  $( "#about" ).animate({
    opacity: 1,
    top: "+=50",
  }, 1000, function() {
    // Animation complete.
  });
})

// Hobbie #1
$('#web_dev_b').hover(function(){
  $('#web_dev_c').show();
}, function(){
  $('#web_dev_c').hide();
});

// Hobbie #2
$('#g_dev_b').hover(function(){
  $('#g_dev_c').show();
}, function(){
  $('#g_dev_c').hide();
});
