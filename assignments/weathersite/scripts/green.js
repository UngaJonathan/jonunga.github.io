var weatherRequest = new XMLHttpRequest();
var weathURL = "https://api.openweathermap.org/data/2.5/weather?zip=29603,us&units=imperial&APPID=4108a443ab24740ff69262d55307a7c2";
weatherRequest.open('GET', weathURL, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
	var greenData = weatherRequest.response;
	
		var curtemp = greenData.main.temp;
		document.getElementById("curtemp").innerHTML = curtemp;
		var descrip = greenData.weather[0].description;
		document.getElementById("descrip").innerHTML = descrip;
		var high = greenData.main.temp_max;
		document.getElementById("high").innerHTML = high;
		var low = greenData.main.temp_min;
		document.getElementById("low").innerHTML = low;
		var wspeed = greenData.wind.speed;
		document.getElementById("wspeed").innerHTML = wspeed;
}