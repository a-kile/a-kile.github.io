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

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function replaceString(str, query, after) {
  var newStr = str.split(" ");
  for (var i=0; i < newStr.length; i++){
    if (newStr[i].toLowerCase() == query.toLowerCase()){
      newStr.splice(i, 1, after);
    }
  }
  return newStr.join(" ");
}

var headerTrigger = 126;
var projectsTrigger = 1000;

window.addEventListener("scroll", function(e){
  if (window.scrollY >= headerTrigger){
    if (!hasClass(document.getElementsByClassName("header")[0], "header-f")){
      document.getElementsByClassName("header")[0].className += " header-f";
    }
  } else if (window.scrollY <= headerTrigger){
    if (hasClass(document.getElementsByClassName("header")[0], "header-f")){
      document.getElementsByClassName("header")[0].className = replaceString(document.getElementsByClassName("header")[0].className, "header-f", "");
    }
  }
});
