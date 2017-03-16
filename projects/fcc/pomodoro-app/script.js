// Pomodoro App Script, By @buoyantair (github/twitter)
var settings = document.getElementById("settings");
var trigger = document.getElementById("trigger");
var progress = document.getElementById("prog");
var horn = new Audio('media/horn.mp3');
var running = false;
var sessiontime = document.getElementById("sessiontime");
var breaktime = document.getElementById("breaktime");



function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function hide() {
  settings.style.display = "none";
  trigger.style.display = "none";
}

function show() {
  settings.style.display = "flex";
  trigger.style.display = "flex";
}

function valid() {
  if (!sessiontime.value) {
    return false;
  } else if (sessiontime.value) {
    return true;
  }
}


trigger.addEventListener("click", function (e) {
  var validity = valid();
  if (!running && validity) {
    var stime = sessiontime.value * 60;
    var btime = breaktime.value * 60;
    progress.style.height = "0px";
    hide();
    running = true;
    var elapsed = 0;
    var session = setInterval(function () {
      if (elapsed == stime) {
        playSound(horn);
        show();
        running = false;
        elapsed = 0;
        var break = setInterval(function(){
            if()
        }, 1000)
      } else {
        hide();
        running = true;
        elapsed++;
        console.log(elapsed)
        var h = elapsed / stime * 100 + "%";
        progress.animate([
          {
            height: progress.style.height
          },
          {
            height: h
          }
                ], {
          duration: 500
        })
        progress.style.height = h;

      }
    }, 1000)
  } else if (running) {
    show();
    running = false;
  }
})
