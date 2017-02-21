function toC(K){
	return Math.floor((K - 32) * .5556)
}

function toF(K){
	return Math.floor(9/5*(K-273.15) + 32)
}



var temp, pressure, humidity;

$(document).ready(function(){
	var cel= false;
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			$.ajax({
				url: "https://api.darksky.net/forecast/907bca27cca7341c34e1744c9d0156dd/" + position.coords.latitude + "," + position.coords.longitude,
				dataType: "jsonp",
				success: function(data){
					$("#weather").html("There is " + data.currently.summary + " weather in " + data.timezone);
					temp = data.currently.temperature;
	        if (cel == false){
						$("#details").html("Temperature: " + temp + "&deg;F");
					} else if(cel == true){
						$("#details").html("Temperature: " + toC(temp) + "&deg;C");
					}
				}
			})
		});
	};

	$("#unit-toggle").on("click", function(){
		if (cel == false){
			cel = true;
			$("#details").html("Temperature: " + toC(temp) + "&deg;C");
		} else if(cel == true){
			cel = false;
			$("#details").html("Temperature: " + temp + "&deg;F");
		}
	});
});
