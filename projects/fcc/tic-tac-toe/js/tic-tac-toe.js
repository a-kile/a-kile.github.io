var gameboard = document.getElementById("game");
var boxes = document.getElementsByClassName("box");
for(box in boxes){
    if(typeof boxes[box] == "object"){
        boxes[box].addEventListener("mouseenter", function(e){
            e.srcElement.style.background = "rgb(" + Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) + ")";
        });
        boxes[box].addEventListener("mouseleave", function(e){
            e.srcElement.style.background = "white";
        });
    }
}
/*
*/
