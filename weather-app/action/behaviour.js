colors = ["#ff4081", "#9c27b0", "#4caf50", "#00897b", "#8d6e63", "#c0ca33", "#c0ca33", "#9fa8da", "#ff5722", "#ffca28"]
function randomColor(table){
  return colors[Math.floor((Math.random() * (table.length*1) -1 ) + 1)];
};


$(document).ready(function(){
  $("body").css("background", randomColor(colors));
});
