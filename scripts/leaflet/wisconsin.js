var wisLayer;
var info;
var Selected = [];

//Event trigger on mouse hovering over polygon
function onMouseOver(e) {
  var layer = e.target;
  if (!isSubDistrict(layer)) {
    if (!isSelected(layer)) {
      layer.setStyle(layer_styles.highlight);
      layer.bringToFront();
    }
    info.update(layer.feature.properties);
  }
}
//Event trigger on mouse ceasing to hover over polygon
function onMouseOut(e) {
  var layer = e.target;
  if (!isSubDistrict(layer)) {
    if (!isSelected(layer)) {
      wisLayer.resetStyle(layer);
    }
    info.update();
  }
}
//Event trigger on click on polygon
var mouseclicks = 0;
function OnClick(e) {
  var layer = e.target;
  mouseclicks++;

  setTimeout(() => {
    if (mouseclicks >= 2) {
      onDouble(layer);
    }
    mouseclicks = 0;
  }, 200);

  if (isSelected(layer)) {
    Selected = Selected.filter(
      (obj) => obj != e.target.feature.properties.OBJECTID
    );
    wisLayer.resetStyle(e.target);
    layer.setStyle(layer_styles.highlight);
  } else {
    Selected.push(e.target.feature.properties.OBJECTID);
    layer.setStyle(layer_styles.selected);
  }
}

function onDouble(layer) {
  if (override_doubleclick) map.fitBounds(layer.getBounds());
}

function isSelected(layer) {
  for (var i = 0; i < Selected.length; i++) {
    if (layer.feature.properties.OBJECTID == Selected[i]) return true;
  }
  return false;
}

function onEachFeature(feature, layer) {
  //layer.bindPopup('<h4>' + feature.properties.DISTRICT + '</h4>');
  layer.on({
    mouseover: onMouseOver,
    mouseout: onMouseOut,
    click: OnClick,
  });
}

//draw wisconsin geoJSON graphical data.
wisLayer = L.geoJson(data, {
  maxZoom: 20,
  tolerance: 3,
  debug: 0,
  style: choropleth,
  onEachFeature: onEachFeature,
}).addTo(map);

hideSubDistrict();

info = L.control({ position: "topright" });
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  ("info");
  this.update();
  return this._div;
};

//Panel that displays county name when hovered.
info.update = function (props) {
  this._div.innerHTML = "<b>" + legend_text + "</b>";
  if (props) {
    this._div.innerHTML = "<b></b>";
    for (const [index, item] of legend_displayProperties.entries()) {
      if (props.hasOwnProperty(item)) {
        this._div.innerHTML += "<b>" + legend_displayLabels[index] + "</b>";
        this._div.innerHTML += "<b>" + props[item] + "</b>" + "</br>";
      }
    }
  }
};
info.addTo(map);

function isUnionDistrict(layer) {
  if (
    layer.feature.properties.DISTRICT == "Lakeland UHS" ||
    layer.feature.properties.DISTRICT == "Arrowhead UHS" ||
    layer.feature.properties.DISTRICT == "Waterford UHS" ||
    layer.feature.properties.DISTRICT == "Union Grove UHS" ||
    layer.feature.properties.DISTRICT == "Wilmot UHS" ||
    layer.feature.properties.DISTRICT == "Westosha Central UHS" ||
    layer.feature.properties.DISTRICT == "Big Foot UHS" ||
    layer.feature.properties.DISTRICT == "Lake Geneva-Genoa City UHS" ||
    layer.feature.properties.DISTRICT == "Nicolet UHS" ||
    layer.feature.properties.DISTRICT == "Hartford UHS"
  )
    return true;
  return false;
}

function isSubDistrict(layer) {
  subdistrict = layer.feature.properties.DISTRICT;
  if (
    subdistrict == "North Lakeland" || //"Lakeland UHS"
    subdistrict == "Woodruff J1" ||
    subdistrict == "Minocqua J1" ||
    subdistrict == "Lac du Flambeau #1" ||
    subdistrict == "Richmond" || //"Arrowhead UHS"
    subdistrict == "Swallow" ||
    subdistrict == "Merton Community" ||
    subdistrict == "Hartland-Lakeside J3" ||
    subdistrict == "Lake Country" ||
    subdistrict == "North Lake" ||
    subdistrict == "Stone Bank" ||
    subdistrict == "Washington-Caldwell" || //"Waterford UHS"
    subdistrict == "Norway J7" ||
    subdistrict == "North Cape" ||
    subdistrict == "Waterford Graded J1" ||
    subdistrict == "Raymond #14" || //"Union Grove UHS"
    subdistrict == "Yorkville J2" ||
    subdistrict == "Union Grove J1" ||
    subdistrict == "Dover #1" ||
    subdistrict == "Trevor-Wilmot Consolidated" || //"Wilmot UHS"
    subdistrict == "Silver Lake J1" ||
    subdistrict == "Randall J1" ||
    subdistrict == "Twin Lakes #4" ||
    subdistrict == "Bristol #1" || //"Westosha Central UHS"
    subdistrict == "Paris J1" ||
    subdistrict == "Brighton #1" ||
    subdistrict == "Salem" ||
    subdistrict == "Wheatland J1" ||
    subdistrict == "Linn J6" || //"Big Foot UHS"
    subdistrict == "Fontana J8" ||
    subdistrict == "Walworth J1" ||
    subdistrict == "Sharon J11" ||
    subdistrict == "Lake Geneva J1" || //"Lake Geneva-Genoa City UHS"
    subdistrict == "Genoa City J2" ||
    subdistrict == "Linn J4" ||
    subdistrict == "Geneva J4" ||
    subdistrict == "Maple Dale-Indian Hill" || //"Nicolet UHS"
    subdistrict == "Glendale-River Hills" ||
    subdistrict == "Fox Point J2" ||
    subdistrict == "Holy Hill Area" || //"Hartford UHS"
    subdistrict == "Erin" ||
    subdistrict == "Hartford J1" ||
    subdistrict == "Herman-Neosho-Rubicon"
  )
    return true;
  return false;
}

function hideSubDistrict() {
  wisLayer.eachLayer(function (layer) {
    if (isSubDistrict(layer)) layer.setStyle(layer_styles.transparent);
    else if (isUnionDistrict(layer)) layer.bringToFront();
  });
}

/*
function getDistrict(subdistrict) {
    //"Lakeland UHS"
    if (subdistrict == "North Lakeland"
        || subdistrict == "Woodruff J1"
        || subdistrict == "Minocqua J1"
        || subdistrict == "Lac du Flambeau #1")
        return "Lakeland UHS";
    //"Arrowhead UHS"
    if (subdistrict == "Richmond"
        || subdistrict == "Swallow"
        || subdistrict == "Merton Community"
        || subdistrict == "Hartland-Lakeside J3"
        || subdistrictT == "Lake Country"
        || subdistrict == "North Lake"
        || subdistrict == "Stone Bank")
        return "Arrowhead UHS";
    //"Waterford UHS"
    if (subdistrict == "Washington-Caldwell"
        || subdistrict == "Norway J7"
        || subdistrict == "North Cape"
        || subdistrict == "Waterford Graded J1")
        return "Waterford UHS";
    //"Union Grove UHS"
    if (subdistrict == "Raymond #14"
        || subdistrict == "Yorkville J2"
        || subdistrict == "Union Grove J1"
        || subdistrict == "Dover #1")
        return "Union Grove UHS";
    //"Wilmot UHS"
    if (subdistrict == "Trevor-Wilmot Consolidated"
        || subdistrict == "Silver Lake J1"
        || subdistrict == "Randall J1"
        || subdistrict == "Twin Lakes #4")
        return "Wilmot UHS";
    //"Westosha Central UHS"
    if (subdistrict == "Bristol #1"
        || subdistrict == "Paris J1"
        || subdistrict == "Brighton #1"
        || subdistrict == "Salem"
        || subdistrict == "Wheatland J1")
        return "Westosha Central UHS";
    //"Big Foot UHS"
    if (subdistrict == "Linn J6"
        || subdistrict == "Fontana J8"
        || subdistrict == "Walworth J1"
        || subdistrict == "Sharon J11")
        return "Big Foot UHS";
    //"Lake Geneva-Genoa City UHS"
    if (subdistrict == "Lake Geneva J1"
        || subdistrict == "Genoa City J2"
        || subdistrict == "Linn J4"
        || subdistrict == "Geneva J4")
        return "Lake Geneva-Genoa City UHS";
    //"Nicolet UHS"
    if (subdistrict == "Maple Dale-Indian Hill"
        || subdistrict == "Glendale-River Hills"
        || subdistrict == "Fox Point J2")
        return "Nicolet UHS";
    //"Hartford UHS"
    if (subdistrict == "Holy Hill Area"
        || subdistrict == "Erin"
        || subdistrictT == "Hartford J1"
        || subdistrict == "Herman-Neosho-Rubicon")
        return "Hartford UHS";
    return "";
}
*/
