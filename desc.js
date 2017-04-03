$(document).ready(function(){

	$('#BUTTONID').click(function(){

		var city = $("#INPUTID").val();

		if(city != ''){

			$.ajax({

				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244',
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);

					$("#show3").html(widget);
					$("#INPUTID").val('');
				}

			});

		}else{
			$("#ERRORID").html("<div class='alert alert-danger' id='errorcity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field CANT BE EMPTY!</div>");
		}

	});
});

function show(data){
	return "<h3 style='font-size:30px; font-weight:bold;'>Current Weather for "+ data.name +" ,"+ data.sys.country+ "</h3>" +
			"<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+
			"<h3>"+ data.weather[0].main +"</h3>" +
			"<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>"+
			"<h3><strong>Current Temperature</strong>: "+ data.main.temp + "&deg;C</h3>" +
			"<h3><strong>Minimum Temperature</strong>: "+ data.main.temp_min + "&deg;C</h3>" +
			"<h3><strong>Maximum Temperature</strong>: "+ data.main.temp_max + "&deg;C</h3>" +
			"<h3><strong>Humidity</strong>: "+ data.main.humidity + "%</h3>" +
			"<h3><strong>Wind Speed</strong>: "+ data.wind.speed + " m/s</h3>" +
			"<h3><strong>Pressure</strong>: "+ data.main.pressure + " hPa</h3>";
} 