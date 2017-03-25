// get out game play elements using javascript DOM methods
var boxes = document.getElementsByClassName("box");
var dash = document.getElementById("dash")
var trigger = document.getElementById("playTrigger");

// Some colors that will be used in the game 
var colors = {
  defSelCol: "rgba(50, 48, 49, 0.2)",
  red: "#E3655B",
  green: "#8CB369",
  human: "#1F9E7C",
  playerHover: "#109370",
  computer: "#B244ED",
  computerHover: "#6E2594",
  defBoxCol: "#FFF"
}
// Set default game state and make sure every box is empty or 0
var state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// By default the game starts as soon as the page loads
var game = true;

/* Win matrix is used in checkWin(); to compare with the current board state and decide if the player 
won or not
*/
var winMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/* 
Human is going to be a true value, while computer is going to be a false value, this will later 
help in altering the turns while checking through the nodes for the best possible value
*/
var human = true;
var computer = false;

/* 
Player always tries to reduce the value of the node, while the computer always tries to maximize
the value of the node.
*/
var humval = -1;
var comval = 1;

// Quickly resets the whole game by changing the applied effects/colors & resetting the state to normal;
function reset() {
  for (var x = 0; x < 9; x++) {
    boxes[x].style.background = colors.defBoxCol;
    boxes[x].classList.remove("checked");
    state[x] = 0;
  }
}

// Renders a box(adds a new class) from the given index & player values
function renderBox(index, player) {
  if (player == human) {
    boxes[index].style.background = colors.human;
    boxes[index].classList.add("checked");
  } else {
    boxes[index].style.background = colors.computer;
    boxes[index].classList.add("checked");
  }
}
/*
  checkWin() iterates through each possible win value in winMatrix and then checks if any value in that 
  array is not equal to the given value, if any value is not equal, that means the current state is not a win
  state therefore the function throws back false, else if the iteration goes on to the end of atleast one 
  win state without throwing false, then the function throws back true
*/
function checkWin(currentState, player) {
  var playerVal = player == human ? humval : comval;
  for (var x = 0; x < 8; x++) {
    var win = true;
    for (var y = 0; y < 3; y++) {
      if (currentState[winMatrix[x][y]] != playerVal) {
        win = false;
        break;
      }
    }
    if (win) {
      return true;
    }
  }
  return false;
}

/*
checks if the box in the state which resembles the given index is empty, 
if it is empty, it then checks which player's value is to be set, if it's a human then it sets
the human value to that box and updates the state of the game & then renders the box with renderbox(), & vice versa. And then, it checks if the player won or not using checkWin();, if the player won, then the game ends, or else if the player hasn't won then checkFull() is run to see if the board is full or not, if it's full, the game ends with a draw, or else the game continues.
*/
function setBox(index, player) {
  if (state[index] == 0) {
    if (player == human) {
      state[index] = humval;
      renderBox(index, player);
    } else {
      state[index] = comval;
      renderBox(index, player);
    }

    if (winCheck(state, player) {
        game = false;
      }
    }
  }
}
// Checks if the board is full or not
function checkFull(board) {
  for (var x = 0; x < 9; x++) {
    if (board[x] == 0) {
      return false;
    }
  }
  return false;
}

/*
First, it checks if 
*/
function callAi(currentState, depth, player) {
  
}

function plot(box) {
  if (game) {
    for (var i = 0; i < 9; i++) {
      if (boxes[i] == box && state[i] == 0) {
        setBox(i, human);
        callAi(state, computer);
      }
    }
  }
}
