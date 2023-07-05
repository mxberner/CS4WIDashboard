//element settings
var use_partition = 1; //1: By-District, 2: By-County
var show_Legend = true;
var show_customZoom = true;
var show_searchBar = true;
var use_tile = 1; //1: Carto, 2: OpenStreetMap
var override_doubleclick = true;

//coordinates
var initlat = 44.8;
var initlng = -89.5;
var initzoom = 7;
var southWestBound = L.latLng(41.5, -97), //(y, x) southeast bound
  northEastBound = L.latLng(48.1, -82.0),
  mapbounds = L.latLngBounds(southWestBound, northEastBound);

//choropleth visualization
var thresholds = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225]; //designed for size = 10
var less_levels = false; //skips over "odd" gradient/threshold values to double color difference, designed for 5 thresholds
var use_gradient = 1; //0: no_gradient, 1: blue_gradient, 2: red_gradient
blue_gradient = [
  "#FFFEDF",
  "#D7F3C1",
  "#ADDFAA",
  "#86C499",
  "#66A38F",
  "#477E86",
  "#2E587F",
  "#19307C",
  "#00137A",
  "#1D0949",
];
red_gradient = [
  "#FAF8E2",
  "#FFF89D",
  "#F0C6B4",
  "#D19262",
  "#CC553E",
  "#B20606",
  "#8F0011",
  "#660019",
  "#290027",
  "#050005",
];
no_gradient = ["#FAF8E2"];
