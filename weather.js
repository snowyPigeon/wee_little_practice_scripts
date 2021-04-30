$(document).ready(function(){
	$('#submitWeather').click(function(){
		var city = $('#city').val();
		if(city != ''){
			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&appid=006a0d5b8cea5b0e8f840ad2dbc0ebe6',
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					console.log(data);
					var new_speed = Math.round(data.wind.speed * 2.236936);
					$('#weather-report').html("Forecast: " + data.weather[0].description + ", Temp: " +
					data.main.temp + "C" + ", Temp Feels Like: " + data.main.feels_like + "C" + ", Wind Speed: " +
					new_speed + " MPH");
					$('#weather-icon').attr("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
				}
			})
		} else {
			$('#error').html('Field cannot be empty');
		}
	})
});