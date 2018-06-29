var dataRequest = new XMLHttpRequest();
var dataURL = "https://byui-cit230.github.io/weather/data/towndata.json";
dataRequest.open('GET', dataURL, true);
dataRequest.responseType = 'json';
dataRequest.send();

dataRequest.onload = function() {
	var townData = dataRequest.response;
	
		var motto1 = townData.towns[0].motto;
		document.getElementById("fmotto").innerHTML = motto1;
		var founded1 = townData.towns[0].yearFounded;
		document.getElementById("ffounded").innerHTML = founded1;
		var pop1 = townData.towns[0].currentPopulation;
		document.getElementById("fpop").innerHTML = pop1;
		var rain1 = townData.towns[0].averageRainfall;
		document.getElementById("frain").innerHTML = rain1;
	
		var motto2 = townData.towns[1].motto;
		document.getElementById("gmotto").innerHTML = motto2;
		var founded2 = townData.towns[1].yearFounded;
		document.getElementById("gfounded").innerHTML = founded2;
		var pop2 = townData.towns[1].currentPopulation;
		document.getElementById("gpop").innerHTML = pop2;
		var rain2 = townData.towns[1].averageRainfall;
		document.getElementById("grain").innerHTML = rain2;
	
		var motto3 = townData.towns[3].motto;
		document.getElementById("smotto").innerHTML = motto3;
		var founded3 = townData.towns[3].yearFounded;
		document.getElementById("sfounded").innerHTML = founded3;
		var pop3 = townData.towns[3].currentPopulation;
		document.getElementById("spop").innerHTML = pop3;
		var rain3 = townData.towns[3].averageRainfall;
		document.getElementById("srain").innerHTML = rain3;
}