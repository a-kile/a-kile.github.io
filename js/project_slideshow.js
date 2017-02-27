var button = document.getElementById("start");
var proj = document.getElementById("fcc");
var projects = document.getElementsByClassName("projects")[0];


button.addEventListener("mouseover", function(){
    button.animate({
        background: ["red", "blue"]
    }, 2000)
});

button.addEventListener("click", function(){

    // Animate the header out of the way
    proj_container.style.position = "relative";
    proj_container.animate({
        left: ["0px", "-1000px"]
    }, 700)
    proj_container.style.left = "-1000px";

    // Display projects
    projects.animate({
        opacity: [0, 1],
    }, 3000)
    projects.style.opacity = 1;
});
