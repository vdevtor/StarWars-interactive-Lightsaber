window.onload = function(){
	var isOn = false;
	document.getElementById("on-off").onclick = function() {myFunction()};
	function myFunction() {
		if (isOn) {
			document.getElementById("turnOff").play()
			isOn = false
		}else{
			document.getElementById("turnOn").play()
			isOn = true
		}
	}

}