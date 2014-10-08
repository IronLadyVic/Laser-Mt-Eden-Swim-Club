//google map


function initialize(){

	var mapLocation = new google.maps.LatLng(-36.875602, 174.757133);
	var mapStyles = [{
		stylers:[
			{hue: "#468C00"},
			{saturation: -50}
			]
	}];

	var markerStyles =[{
		stylers:[
		{hue: "#00205F"},
		{saturation: -50}
		]
	}]
	
	var mapOptions ={
		zoom: 16,
		center: mapLocation,
		styles: mapStyles

	}
	

	var map = new google.maps.Map(document.getElementById('flex-google'), mapOptions);

//geo position

// var request = {address: "Mt Eden Swimming Club, Auckland"};
// var geocoder = new google.maps.Geocoder();

// geocoder.geocode(request,function(results,status){

// 	// console.log(results);
// 	// console.log(status);

// 	if(status == 'OK'){

// 		var destination = results[0].geometry.location;
// 		map.setCenter(destination);

// 		// desitination marker
// 		var destinationMarker = new google.maps.Marker({map:map});
// 		destinationMarker.setPosition(destination);

// 		if(geo_position_js.init()){
// 			geo_position_js.getCurrentPosition(function(position){
// 				console.log(position);

// 				var origin = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
// 				var originMarker = new google.maps.Marker({map:map});
// 				originMarker.open(map,originMarker);
// 				// direction 
// 				var ds = new google.maps.DirectionServices();
// 				var request ={
// 					"origin":origin,
// 					"destination":destination,
// 					"travelMode": google.maps.TravelMode.Driving
// 				};
// 				ds.route(request,function(response,status){
// 						if(status == "OK"){
// 							var directionDisplay = new google.maps.DirectionsRenderer();
// 							directionDisplay.setMap(map);
// 							directionDisplay.setDirections(response);
// 						}

// 					});
// 			},
// 				function(error){
// 					console.log(error);
				

// 			});
// 		}else{
// 			console.log("functionality not working");
// 			}

// 		}
// 	});
// };


	// var logoMarker = 'img/Laser-Mt-Eden.png';

	var marker = new google.maps.Marker({
		position: mapLocation,
		map: map,
		styles: markerStyles,
		animation: google.maps.Animation.DROP,
		position: mapLocation,
		// icon: logoMarker
		// title: 'Laser Mt Eden Swim Club'
		
	});
	google.maps.event.addListener(marker,'click',toggleBounce);
}



//animate the marker

function toggleBounce(){

	if(marker.getAnimation() != null){
		marker.setAnimation(null);
	}else{
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

google.maps.event.addDomListener(window,'load',initialize);



