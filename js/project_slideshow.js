var button = document.getElementById("start");
var proj = document.getElementById("proj_container");


button.addEventListener("mouseover", function(){
    button.animate({
        background: ["red", "blue"]
    }, 2000);
});

button.addEventListener("click", function(){

    var anim = proj.animate({
        transform: ["rotate3d(0,0,0, 0deg)", "rotate3d(1,1,0, 15deg) scale(30)"],
    }, {easing: 'ease-in',duration: 3000});

    anim.play();
    proj.style.transform = "rotate3d(1,1,0, 15deg) scale(30)";

    anim.onfinish = function(){
        proj.remove();
    }
});
