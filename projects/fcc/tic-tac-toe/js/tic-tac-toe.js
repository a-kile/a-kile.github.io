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
var player = {
    coin: "",
    color: ""
};

var numChecked = 0;

var coinSelected = false;

heads.obj.addEventListener("click", function() {
    if (!heads.checked) {
        coinSelected = true;
        heads.checked = true;
        player.color = colors.red;
        player.coin = "heads";
        heads.obj.style.background = colors.red;
        tails.obj.style.background = colors.defSelCol;
    } else if (heads.checked) {
        coinSelected = false;
        heads.checked = false;
        heads.obj.style.background = colors.defSelCol;
    }
})

tails.obj.addEventListener("click", function(e) {
    if (!tails.checked) {
        coinSelected = true;
        tails.checked = true;
        player.coin = "tails";
        player.color = colors.green;
        tails.obj.style.background = colors.green;
        heads.obj.style.background = colors.defSelCol;
    } else if (tails.checked) {
        coinSelected = false;
        tails.checked = false;
        tails.obj.style.background = colors.defSelCol;;
    }
    e.srcElement.removeEventListener("click", check)
})

function compCheck(){
    var randomBox = boxes[Math.floor(Math.random() * 9)];
    if (!randomBox.dataset.checked){
        if(player.color == colors.red && player.coin == "heads"){
            randomBox.dataset.checked = true;
            var syb = document.createElement("div");
            syb.classList.add("ion-ios-flower", "checked");
            randomBox.append(syb);
            randomBox.style.background = colors.green;
        } else if(player.color == colors.green && player.coin == "tails"){
            randomBox.dataset.checked = true;
            var syb = document.createElement("div");
            syb.classList.add("ion-ios-medical", "checked");
            randomBox.append(syb);
            randomBox.style.background = colors.red;
        }
    } else {
        compCheck();
    }
}

function check(e){
    if(!e.srcElement.dataset.checked){
        e.srcElement.removeEventListener("click", check);
        console.log("EVENT LISTENER REMOVED")
        e.srcElement.dataset.checked = true;
        numChecked++;
        e.srcElement.style.background = player.color;
        if(player.coin == "heads"){
            var syb = document.createElement("div");
            syb.classList.add("ion-ios-medical", "checked");
            e.srcElement.append(syb);
        } else if (player.coin == "tails"){
            var syb = document.createElement("div");
            syb.classList.add("ion-ios-flower", "checked");
            e.srcElement.append(syb);
        }
        compCheck();
    } else if (e.srcElement.dataset.checked){
        console.log("YOU CANT DO THIS!")
    }
}

for (box in boxes) {
    if (typeof boxes[box] == "object") {
        boxes[box].addEventListener("mouseenter", function(e) {
            if(!e.srcElement.dataset.checked){
                e.srcElement.style.background = colors.playerHover;
            }
        });
        boxes[box].addEventListener("mouseleave", function(e) {
            if(!e.srcElement.dataset.checked){
                e.srcElement.style.background = "white";
            }
        });
        boxes[box].addEventListener("click",check);
    }
}

trigger.addEventListener("click", function(){
    if(coinSelected){
        dash.style.display = "none";
    } else{
        $('#coinCheck').modal();
    }
})
