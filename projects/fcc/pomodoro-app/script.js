
// Pomodoro App Script, By @buoyantair (github/twitter)
var settings = document.getElementById("settings")

var sessionrunning = false;
var stime = 0;
var btime = 0;

function session(){
    var domstime = document.getElementById("sessiontime")
    var dombtime = document.getElementById("sessiontime")

    if (sessionrunning == false){
        stime =domstime.value;
        btime = dombtime.value;
        settings.style.display = "none"
        sessionrunning = true
    } else if (sessionrunning == true){
        settings.style.display = "flex"
        sessionrunning = false
    }
}
