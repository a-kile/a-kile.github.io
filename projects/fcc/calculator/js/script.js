

var display = document.getElementById("display");


var whichButton = function (e) {
    // Handle different event models
    var data = e.target.dataset.value
    switch (data) {
        case "clear":
            console.log("Clearing");
            break;
        case "solve":
            console.log("SOLVING IT!!!");

            console.log(Number(display.value));
            break;
        default:
            console.log("Concatting numbers meh");
            display.value+= data;
    };
};
