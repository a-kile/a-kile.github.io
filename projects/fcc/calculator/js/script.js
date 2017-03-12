

var display = document.getElementById("display");


var whichButton = function (e) {
    // Handle different event models
    var data = e.target.dataset.value
    switch (data) {
        case "clear":
            console.log("Clearing");
            display.value = "";
            break;
        case "solve":
            var operations = display.value.match(/\W/g);
            var num = display.value.split(/\W/g);
            console.log(operations, num);

            var result;

            for(var i=0; i < operations.length; i++){
                if ( operations[i] == '+' ) {
                    if (i===0){
                        result = Number(num[i]) + Number(num[i+1]);
                    } else{
                        result += Number(num[i+1]);
                    }
                } else if (operations[i] == '-'){
                    if (i===0){
                        result = Number(num[i]) - Number(num[i+1]);
                    } else{
                        result -= Number(num[i+1]);
                    }
                } else if (operations[i] == '*'){
                    if (i===0){
                        result = Number(num[i]) * Number(num[i+1]);
                    } else{
                        result *= Number(num[i+1]);
                    }
                } else if (operations[i] == '/'){
                    if (i===0){
                        result = Number(num[i]) / Number(num[i+1]);
                    } else{
                        result /= Number(num[i+1]);
                    }
                }
            }

            display.value = result;

            break;
        default:
            display.value+= data;
    };
};
