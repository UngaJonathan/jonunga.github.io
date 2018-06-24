let weatherRequest = new XMLHttpRequest();
var weatherURL = "http://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=4108a443ab24740ff69262d55307a7c2";
weatherRequest.open('GET', weatherURL, true);
weatherRequest.send();
weatherRequest.onload = function() {
	let weatherData = JSON.parse(weatherRequest.responseText);
	console.log(weatherData);
}
