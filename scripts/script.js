
// let map;
// let issInfo;
// let coordsArr = [];

// let satMarker;
// let satPath;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -0.0, lng: 0.0},
//     zoom: 3
//   });

//   requestIssCoords();

//   //get new coords every 5 seconds
//   const getSatLocInterval = setInterval(requestIssCoords, 5000);
// }

// function requestIssCoords() {
//   //ajax request
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       issInfo = JSON.parse(xhr.responseText);
//       issLocation = issInfo.iss_position;
//       lat = parseFloat(issLocation.latitude);
//       lng = parseFloat(issLocation.longitude);
//       const issCoords = {lat, lng};

//       //add locations to array
//       coordsArr.push(new google.maps.LatLng(issCoords.lat, issCoords.lng));

//       //if map has been moved.
//       if (map.center.lng() === 0 && map.center.lat() === 0 ) {
//         map.setCenter(issCoords);
//       }
//       updateMap();
//     }
//   };
//   xhr.open('GET', 'http://api.open-notify.org/iss-now.json');
//   xhr.send();
// }

// //draws markers on map
// function updateMap() {
  
//   const currentLocation = coordsArr[coordsArr.length - 1];
  
//   //icons
//   const icon = {
//     path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
//     fillColor: '#FF0000',
//     fillOpacity: .6,
//     anchor: new google.maps.Point(0,0),
//     strokeWeight: 0,
//     scale: .6
//   }

//   if (!satMarker) {
//     satMarker = new google.maps.Marker({
//       position: currentLocation,
//       map,
//       icon
//     });
//   }

//   if (!satPath) {
//     satPath = new google.maps.Polyline({
//       path: [],
//       strokeColor: '#9b59b6',
//       strokeOpacity: 0.5,
//       strokeWeight: 8,
//     });
//     satPath.setMap(map);
//   }

//   //update satellite marker for current position
//   satMarker.setPosition(currentLocation);

//   //update the path
//   satPath.getPath().push(currentLocation);

// }


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
