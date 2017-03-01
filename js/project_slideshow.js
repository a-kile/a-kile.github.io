var button = document.getElementById("start");
var projects = {
    "Tribute Page" : {
        link : "NO LINK FOR THIS YER"
    },
    "Random Quote Machine" : {

    },
    "Local Weather App" : {

    },
    "Search Wikipedia" : {

    },
    "Twitch Streamers Watch" : {

    }
}


button.addEventListener("mouseover", function(){
    button.animate({
        background: ["red", "blue"]
    }, 2000);
});

button.addEventListener("click", function(){
    var proj = document.getElementById("proj_container");
    var domProj = document.getElementById("fcc");

    var anim = proj.animate({
        transform: ["rotate3d(0,0,0, 0deg)", "rotate3d(1,1,0, 15deg) scale(30)"],
    }, {easing: 'ease-in',duration: 3000});

    anim.play();
    proj.style.transform = "rotate3d(1,1,0, 15deg) scale(30)";

    anim.onfinish = function(){
        proj.remove();

        for(project in projects){
            var ap = document.createElement("div");
            ap.innerHTML = "<h1>" + project +  "</h1>";
            document.getElementById("fcc").appendChild(ap);
        }
    }



});
