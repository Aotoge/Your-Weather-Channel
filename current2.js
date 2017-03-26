$(document).ready(function(){

	var avg=0;
	$('#BUTTON2ID').click(function(){

		var city1 = $("#INPUTID1").val();
		var city2 = $("#INPUTID2").val();
		var city3 = $("#INPUTID3").val();
		var city4 = $("#INPUTID4").val();
		var avg=0;

		var urls = ['http://api.openweathermap.org/data/2.5/weather?q='+ city1 + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244',
		'http://api.openweathermap.org/data/2.5/weather?q='+ city2 + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244',
		'http://api.openweathermap.org/data/2.5/weather?q='+ city3 + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244',
		'http://api.openweathermap.org/data/2.5/weather?q='+ city4 + '&units=metric' + '&APPID=385d17c855f75959504cef74ca36d244'];

		$.each(urls, function(i,u){ 
     		$.ajax(u, 
       		{ 
       			type: 'GET',
         		dataType: "jsonp",
         		success: function (data){
             		avg+=data.main.temp;
         		} 
       		});
     	});

		var widget = wait();
		$("#show2").html(widget);

		setTimeout(function(){
			avg = avg/4.0;
			var widget = show(avg);
			$("#show2").html(widget);
			avg=0;
			$("#INPUTID1").val('');
			$("#INPUTID2").val('');
			$("#INPUTID3").val('');
			$("#INPUTID4").val('');
		},3500);

     });
});

function wait(){
	return "<h3><br />Please wait while we process your request</h3>";
}

function show(avg){
	return 	"<h3><strong><br />Average Temperature</strong>: "+ avg +"&deg;</h3>";
}