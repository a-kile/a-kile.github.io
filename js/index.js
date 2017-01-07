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

function accordian(obj, btns){
  for(var i=0; i < btns.length; i++){
    btns[i].addEventListener("Click");
    })
  }
}

accordian("d", document.getElementsByClassName["accord"][0].childNodes)

function generateParticles(parent, amount){
  for (var i=0; i < amount; i++){
    var particle = document.createElement("span");
    parent.appendChild(particle);
    particle.className = "particle";
  }
}
generateParticles(document.getElementsByClassName("fly-through")[0], 100);
