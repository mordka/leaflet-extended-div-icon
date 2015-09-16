Tinytest.add('Leaflet - availability', function (test) {
  test.isNotUndefined(L, "Leaflet.js is not available.");
});
Tinytest.add('extendedDivIcon availability', function (test) {
  var marker = L.marker(L.latLng(0, 0), {
    icon: L.extendedDivIcon({

      // Set classes here, as usual
      className: 'class-a class-b class-c',

      // Set id here (new!)
      id: 'my-awesome-id',

      // Set style here (new!)
      style: {
        backgroundColor: '#fff'
      }
    })
  });
  test.isNotUndefined(marker, "extendedDivIcon is not available, check your exports ");
});