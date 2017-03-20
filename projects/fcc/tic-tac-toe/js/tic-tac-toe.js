var gameboard = document.getElementById("game");
var boxes = document.getElementsByClassName("box");
var dash = document.getElementById("dash")
var trigger = document.getElementById("trigger");

var heads = {
    obj: null,
    checked: false
};

heads.obj = document.getElementById("heads");
var tails = {
    obj: null,
    checked: false
};
tails.obj = document.getElementById("tails");
var colors = {
    defSelCol: "rgba(50, 48, 49, 0.2)",
    red: "#E3655B",
    green: "#8CB369",
    player: "#1F9E7C",
    playerHover: "#109370",
    computer: "#B244ED",
    computerHover: "#6E2594"
}
var player;

var coinSelected = false;

heads.obj.addEventListener("click", function() {
    if (!heads.checked) {
        coinSelected = true;
        heads.checked = true;
        player = "heads";
        heads.obj.style.background = colors.red;
        tails.obj.style.background = colors.defSelCol;
    } else if (heads.checked) {
        heads.checked = false;;
        heads.obj.style.background = colors.defSelCol;;
    }
})

tails.obj.addEventListener("click", function() {
    if (!tails.checked) {
        coinSelected = true;
        tails.checked = true;
        player = "tails";
        tails.obj.style.background = colors.green;
        heads.obj.style.background = colors.defSelCol;
    } else if (tails.checked) {
        tails.checked = false;
        tails.obj.style.background = colors.defSelCol;;
    }

})

for (box in boxes) {
    if (typeof boxes[box] == "object") {
        boxes[box].addEventListener("mouseenter", function(e) {
            e.srcElement.style.background = colors.playerHover;
        });
        boxes[box].addEventListener("mouseleave", function(e) {
            e.srcElement.style.background = "white";
        });
    }
}

trigger.addEventListener("click", function(){
    if(coinSelected){
        dash.style.display = "none";
    } else{
        $('#coinCheck').modal();
    }
})
