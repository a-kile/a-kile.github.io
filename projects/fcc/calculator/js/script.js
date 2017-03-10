

var btns = document.getElementsByClassName("btn");

for(var index in btns){
    var btn = btns.item(index)
    var btnClicked = function(mouse){
        console.log(mouse);
    }
    btn.addEventListener("click", btnClicked)
}
