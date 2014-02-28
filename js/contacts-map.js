function initializeContactsMap() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(55.752406, 37.562713),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false
  }
  
  var map = new google.maps.Map(document.getElementById("contactsMap"),
      mapOptions);
      
  map.set('styles', [
    {
      featureType: "all",
      stylers: [
        { saturation: -100 }
      ]
    }
  ]);
      
  var image = 'images/map-pin.png';
  var myLatLng = new google.maps.LatLng(55.751406, 37.565713);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initializeContactsMap);