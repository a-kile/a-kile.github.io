var boxes = document.getElementsByClassName("box");
var dash = document.getElementById("dash")
var trigger = document.getElementById("playTrigger");

var colors = {
    defSelCol: "rgba(50, 48, 49, 0.2)",
    red: "#E3655B",
    green: "#8CB369",
    player: "#1F9E7C",
    playerHover: "#109370",
    computer: "#B244ED",
    computerHover: "#6E2594",
    defBoxCol : "#FFF"
}

var state = [0,0,0,0,0,0,0,0,0];
var game = true;

var HUMAN = false;
var COMPUTER = true;

var HUMVAL = -1;
var COMVAL = 1;

var winMatrix = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function reset(){
    for(var i=0; i < 9; i++){
        boxes[i].style.background = "#fff";
        state[i] = 0;
    }

    game = true;
}

function plot(clicked){
    if(!game)
        return;

    for(var x=0; x < 9 ; x++){
        if(boxes[x] == clicked && state[x] ==0){
            set(x, HUMAN);
            callAI();
        }
    }
}

function set(index, player){
    if(!game)
        return;

    if(state[index] ==0){
        if(player == HUMAN){
            boxes[index].style.background = colors.player;
            state[index] = HUMVAL;
        } else {
            boxes[index].style.background = colors.computer;
            state[index] = COMVAL;
        }

        if(checkWin(state, player)){
            game = false;
        }
    }
}

function checkWin(board, player){
    var val = player == HUMAN ? HUMVAL : COMVAL;

    for(var x=0; x < 8; x++){
        var win = true;
        for(var y=0; y < 3; y++){
            if(board[winMatrix[x][y]] != val){
                win = false;
                break;
            }
        }
        if(win){
            return true;
        }
    }
    return false;
}

function checkFull(board){
    for(var x=0; x < 9; x++){
        if(board[x] ==0){
            return false;
        }
    }
    return false;
}

function callAI(){
    aiturn(state, 0, COMPUTER);
}

function aiturn(board, depth, player){
    if(checkWin(board, !player)){
        return -10 + depth;
    }
    if(checkFull(board)){
        return 0;
    }

    var value = player == HUMAN ? HUMVAL : COMVAL;
    var max = -Infinity;
    var index = 0;
    for(var x=0; x < 9; x++){
        if(board[x] ==0){
            var newboard = board.slice();
            newboard[x] = value;

            var moveval = -aiturn(newboard, depth +1, !player);
            if(moveval > max){
                max = moveval;
                index = x;
            }
        }
    }
    if(depth ==0){
        set(index, COMPUTER);
    }
    return max;
}
