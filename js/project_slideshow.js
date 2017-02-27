var button = document.getElementById("start");
var proj = document.getElementById("fcc");



button.addEventListener("mouseover", function(){
    button.animate({
        background: ["red", "blue"]
    }, 2000)
});

button.addEventListener("click", function(){
    proj_container.style.position = "relative";
    proj_container.animate({
        left: ["0px", "-1000px"]
    }, 700)
    proj_container.style.left = "-1000px";
});
