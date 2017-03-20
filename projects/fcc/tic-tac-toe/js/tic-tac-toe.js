var gameboard = document.getElementById("game");
var boxes = document.getElementsByClassName("box");
var dash = document.getElementById("dash")
var closeDash = document.getElementById("close");
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
    green: "#8CB369"
}
var player;

var coinSelected = false;

heads.obj.addEventListener("click", function() {
    coinSelected = true;
    if (!heads.checked) {
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
    coinSelected = true;
    if (!tails.checked) {
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
            var col = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
            e.srcElement.style.background = col;
        });
        boxes[box].addEventListener("mouseleave", function(e) {
            e.srcElement.style.background = "white";
        });
    }
}

closeDash.addEventListener("click", function() {
    dash.style.display = "none"
})
