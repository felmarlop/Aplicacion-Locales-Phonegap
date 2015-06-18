var lat;
var lng;
function verMapa(cl) {
	clave = cl;
	$("#map-canvas").html(" ");
	$.mobile.changePage("#map-page", "slide");
}
$('#map-page').live('pageshow', function() {
	var geocoder= new google.maps.Geocoder();
	var newAddress = localStorage.getItem(clave).split("::")[7]+","+localStorage.getItem(clave).split("::")[3]+","+localStorage.getItem(clave).split("::")[2]+","+localStorage.getItem(clave).split("::")[1];
	geocoder.geocode( { 'address': newAddress }, function(results, status) {
		newAddress = results[0].geometry.location;
		if (status == google.maps.GeocoderStatus.OK) {
			lat = newAddress.lat();
			lng = newAddress.lng();
			coordenada= new google.maps.LatLng(lat,lng);
			var options = {
					zoom :18,
					center : coordenada,
					mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			mapa = new google.maps.Map(document.getElementById("map-canvas"),options);
			var marker = new google.maps.Marker({
		        position: coordenada,
		        map: mapa,
		        title: localStorage.getItem(clave).split("::")[0]
		    });
		}
	});
}); 