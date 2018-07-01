var weatherRequest1 = new XMLHttpRequest();
var weathURL1 = "https://api.openweathermap.org/data/2.5/weather?zip=01103,us&units=imperial&APPID=4108a443ab24740ff69262d55307a7c2";
weatherRequest1.open('GET', weathURL1, true);
weatherRequest1.responseType = 'json';
weatherRequest1.send();

weatherRequest1.onload = function() {
	var springData = weatherRequest1.response;
	
		var curtemp1 = springData.main.temp;
		document.getElementById("curtemp1").innerHTML = curtemp1;
		var descrip1 = springData.weather[0].description;
		document.getElementById("descrip1").innerHTML = descrip1;
		var high1 = springData.main.temp_max;
		document.getElementById("high1").innerHTML = high1;
		var low1 = springData.main.temp_min;
		document.getElementById("low1").innerHTML = low1;
		var wspeed1 = springData.wind.speed;
		document.getElementById("wspeed1").innerHTML = wspeed1;