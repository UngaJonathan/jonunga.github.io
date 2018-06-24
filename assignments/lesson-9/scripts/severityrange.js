var slider = document.getElementById("severity");
var output = document.getElementById("strength");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}