var weatherRequest = new XMLHttpRequest();
var weathURL = "https://api.openweathermap.org/data/2.5/weather?zip=55333,us&units=imperial&APPID=4108a443ab24740ff69262d55307a7c2";
weatherRequest.open('GET', weathURL, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
	var frankData = weatherRequest.response;
	
		var curtemp = frankData.main.temp;
		document.getElementById("curtemp").innerHTML = curtemp;
		var descrip = frankData.weather[0].description;
		document.getElementById("descrip").innerHTML = descrip;
		var high = frankData.main.temp_max;
		document.getElementById("high").innerHTML = high;
		var low = frankData.main.temp_min;
		document.getElementById("low").innerHTML = low;
		var wspeed = frankData.wind.speed;
		document.getElementById("wspeed").innerHTML = wspeed;
}