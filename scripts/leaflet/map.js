//Set the scrollable lat/long range
var southWest = L.latLng(41.5, -97), //(y, x) southeast bound
  northEast = L.latLng(48.1, -82.0),
  mybounds = L.latLngBounds(southWest, northEast);

//Initializing the map view
var map = L.map("map", {
  center: [0, 0],
  scrollWheelZoom: "center",
  maxBounds: mapbounds,
  minZoom: 6,
  maxZoom: 10,
  zoomControl: !show_customZoom,
}).setView([initlat, initlng], initzoom);
map.doubleClickZoom.disable();
