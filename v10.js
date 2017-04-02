(function() {    
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "Havasu Falls",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {        
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#draggable" );        
        if ( i === 10 ) {
          return false;
        }
      });
    });
})();


$( function() {
    $( "#draggable" ).draggable({ revert: true,axis: "y",appendTo: "body",scroll:false });
  } );


function myMap() {
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {
    center: new google.maps.LatLng(36.255322, -112.698316),
    zoom:20,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(mapCanvas,mapOptions);
}