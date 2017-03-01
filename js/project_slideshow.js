var button = document.getElementById("start");
var proj = document.getElementById("proj_container");


button.addEventListener("mouseover", function(){
    button.animate({
        background: ["red", "blue"]
    }, 2000);
});

button.addEventListener("click", function(){
    proj.animate({
        transform: ["rotate3d(0,0,0, 0deg)", "rotate3d(1,1,0, 15deg) scale(30)"],
    }, 4000);
    proj.style.transform = "rotate3d(1,1,0, 15deg) scale(30)";
});
