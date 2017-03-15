
// Pomodoro App Script, By @buoyantair (github/twitter)
var settings = document.getElementById("settings");
var trigger = document.getElementById("trigger");
var progress = document.getElementById("prog");
var horn = new Audio('media/horn.mp3');
var running = false;
var sessiontime = document.getElementById("sessiontime");
var breaktime = document.getElementById("breaktime");



function hide(){
    settings.style.display = "none";
    trigger.style.display = "none";
}
function show(){
    settings.style.display = "flex";
    trigger.style.display = "flex";
}

function valid(){
    if (!sessiontime.value){
        return false;
    } else if(sessiontime.value){
        return true;
    }
}



trigger.addEventListener("click", function(e){
    var validity = valid();
    if (!running && validity){
        progress.style.height = "0px";
        hide();
        running = true;
        var elapsed = 0;
        var session = setInterval(function(){
            if (elapsed == sessiontime.value){
                show();
                running = false;
                elapsed = 0;
                clearInterval(session);
            } else{
                hide();
                running = true;
                elapsed++;
                console.log(elapsed)
                var h = elapsed/(sessiontime.value) * 100  + "%";
                progress.animate([
                    {height: progress.style.height},
                    {height: h}
                ], {
                    duration: 500
                })
                progress.style.height = h;

            }
        }, 1000)
    } else if(running){
        show();
        running = false;
    }
})
