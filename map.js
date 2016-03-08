function geoFindMe() {
	var output = document.getElementById("out");
	var output2 = document.getElementById("out2");
	if (!navigator.geolocation){
	    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
	    return;
	}
	function todegressLA(value){
	    var degrees = Math.floor(value)
	    var minutes = Math.floor((value - degrees)*60)
	    var seconds = Math.floor(((value-degrees)*60 -minutes)*60)
	    degrees +=180
	    var dd = degrees + minutes/60 + seconds/(60*60);
	    return dd
	}
	function todegressLO(value){
	    var degrees = Math.floor(value)
	    var minutes = Math.floor((value - degrees)*60)
	    var seconds = Math.floor(((value-degrees)*60 -minutes)*60)
	    degrees = -degrees
	    var dd = degrees + minutes/60 + seconds/(60*60);
	    return dd
	}
	function success(position) {
	    var latitude  = position.coords.latitude;
	    var longitude = position.coords.longitude;
	    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
	    var img = new Image();
	    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=5&size=300x300&sensor=false";
	    output.appendChild(img);
	    output2.innerHTML = '<p>Latitude is ' + (latitude + 180) + '° <br>Longitude is ' + (longitude + 180) + '°</p>';
	    var img2 = new Image();
	    img2.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + todegressLA(latitude) + "," + todegressLO(longitude) + "&zoom=5&size=300x300&sensor=false";
	    output2.appendChild(img2);
	};
	function error() {
	    output.innerHTML = "Unable to retrieve your location";
	    output2.innerHTML = "Unable to retrieve your location";
	};
	output.innerHTML = "<p>Locating…</p>";
	output2.innerHTML = "<p>Locating…</p>";
	navigator.geolocation.getCurrentPosition(success, error);
}
