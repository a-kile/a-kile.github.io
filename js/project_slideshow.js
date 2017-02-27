var button = document.getElementById("next");
var proj = document.getElementById("fcc");
var start = document.getElementById("start");
button.addEventListener("mouseover", function(){
    button.animate({
        background: ["red", "blue"]
    }, 2000)
});

button.addEventListener("click", function(){
    start.style.position = "relative";
    start.animate({
        left: ["0px", "-1000px"]
    }, 1000)
    start.style.left = "-1000px";
});
