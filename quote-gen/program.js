function getq(storage){

}

$(document).ready(function(){
  var obj;
  $('#triggr').on('click', function(e) {
      $.getJSON("https://andruxnet-random-famous-quotes.p.mashape.com/", function(data) {
        obj = data;
        $('#quote-text').html(obj.quote);
        $('#quote-author').html("By " + obj.author);
      }, 'jsonp');
      $(".content").animate({
        opacity: 0,
        background: "#FF4081"
      }, 100);
      $(".quote-content").animate({
        background: "#FF4081"
      }, 100);
      getq(obj)
      $(".content").animate({
        opacity: 1,
      }, 800);
      debounce = false
  });

  $("#tweet-button").on('click', function(){
    var tweetUrl = 'https://twitter.com/intent/tweet?text=' + ' "' + encodeURIComponent(obj.quote) + '" ' + " By " + encodeURIComponent(obj.author);
    window.open(tweetUrl);
  });
});
