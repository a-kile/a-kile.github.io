// Pomodoro App Script, By @buoyantair (github/twitter)
var settings = document.getElementById("settings");
var trigger = document.getElementById("trigger");
var progress = document.getElementById("prog");
var horn = new Audio('media/horn.mp3');
var running = false;
var sessiontime = document.getElementById("sessiontime");
var breaktime = document.getElementById("breaktime");

var sessionColor = "#FFF88C";
var breakColor = "#d32f2f";


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
  if (!sessiontime.value && !breaktime.value) {
    return false;
} else if (sessiontime.value && breaktime.value) {
    return true;
  }
}

trigger.addEventListener("click", function(e){
    var validity = valid();
    if (validity){
        hide();
        var stime = sessiontime.value * 60; // Session time in minutes
        var btime = breaktime.value * 60; // Break time in minutes
        progress.style.height = "0px";
        var session = true;
        var brk = false;
        var elapsed = 0;
        var Round = setInterval(function(){
            if(session && elapsed != stime && !brk){
                elapsed++;
                var h = elapsed / stime * 100 + "%";
                progress.animate([
                  {height: progress.style.height},
                  {height: h}], {
                  duration: 500
                })
                progress.style.height = h;
            }else if(session && elapsed == stime && !brk){
                progress.style.height = "0px";
                session = false;
                brk = true;
                elapsed = 0;
                console.log("SESSION FINISHED")
                progress.style.background = breakColor;
            } else if(!session && brk && elapsed != btime){
                elapsed++;
                var h = elapsed / btime * 100 + "%";
                progress.animate([
                  {height: progress.style.height},
                  {height: h}], {
                  duration: 500
                })
                progress.style.height = h;
            } else if(!session &&  brk && elapsed == btime ){
                progress.style.height = "0px";
                brk = false;
                session = true;
                elapsed = 0;
                console.log("BREAK FINISHED")
                progress.style.background = sessionColor;
            }
        }, 1000)
    } else {
        // Do something if the validity is not there!
    }
})

/*
trigger.addEventListener("click", function (e) {

  if (!running && validity) {
    var stime = sessiontime.value * 60;
    var btime = breaktime.value * 60;

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


      }
    }, 1000)
  } else if (running) {
    show();
    running = false;
  }
})
*/
