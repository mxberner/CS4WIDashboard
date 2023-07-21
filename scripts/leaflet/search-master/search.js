var searchControl = new L.Control.Search({
  propertyName: "DISTRICT",
  layer: wisLayer,
  marker: false,
  collapsed: false,
  moveToLocation: function (latlng, title, map) {
    layer = latlng.layer;
    map.fitBounds(layer.getBounds());
    onSearch(layer);
  },
});

if (show_searchBar == true) map.addControl(searchControl); //init search control

function onSearch(layer) {
  var acton = layer;
  if (isSubDistrict(layer)) {
    acton = null;
  }
  if (acton) {
    if (isSelected(layer)) {
      Selected = Selected.filter(
        (obj) => obj != acton.feature.properties.OBJECTID
      );
      wisLayer.resetStyle(acton);
    } else {
      Selected.push(acton.feature.properties.OBJECTID);
      layer.setStyle(layer_styles.selected);
    }
  }
}
