var button = document.getElementById("start");
var proj = document.getElementById("fcc");
var projects = document.getElementsByClassName("projects")[0];


button.addEventListener("mouseover", function(){
    button.animate({
        background: ["red", "blue"]
    }, 2000)
});
