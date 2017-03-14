
// Pomodoro App Script, By @buoyantair (github/twitter)
var settings = document.getElementById("settings");
var trigger = document.getElementById("trigger");
var progress = document.getElementById("prog")

var sessionrunning = false;
var stime = 0;
var btime = 0;

function end(){
    // Toggle icons
    trigger.classList.toggle("ion-ios-gear-outline");
    trigger.classList.toggle("ion-ios-navigate-outline");
    // Show settings
    settings.style.display = "flex"
    trigger.style.display = "flex";

    // End Session
    sessionrunning = false
}

function session(){
    var domstime = document.getElementById("sessiontime")
    var dombtime = document.getElementById("sessiontime")

    if (sessionrunning == false){
        // Toggle icons
        trigger.classList.toggle("ion-ios-gear-outline");
        trigger.classList.toggle("ion-ios-navigate-outline");
        // Hide settings
        settings.style.display = "none";
        trigger.style.display = "none";

        // Start Session
        sessionrunning = true


        stime = 60 * domstime.value;
        btime = 60 * dombtime.value;
        var check = 0;
        prog.style.height = "0px";
        var starttime = new Date().getTime()
        var elapsed = 0;

        setTimeout(function(){
            console.log("AHHHHHHHH")
            end();
        }, 1000)


        /*
        setTimeout(function(){
            var endtime = new Date().getTime()
            var elapsed = endtime-starttime;
            console.log("Time ELAPSED " + elapsed);
            end();
        }, stime *1000)
        */
    } else if (sessionrunning == true){
        end();
    }
}
