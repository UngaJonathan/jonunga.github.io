function windchill() {
	var high = 90;
	var low = 66;
	var speed = 5;
	var avgtemp = ( high + low ) / 2;
	var wc = 35.74 + ( 0.6215 * avgtemp ) - ( 35.75 * ( Math.pow( speed, 0.16 ))) + ( 0.4275 * avgtemp * ( Math.pow( speed, 0.16)));
	var result = Math.round( wc );
	document.getElementById("windchill").innerHTML = result;
}
windchill();