var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend"),
    grades = thresholds,
    labels = [];

  for (var i = 0; i < grades.length; i++) {
    if (!less_levels) {
      div.innerHTML +=
        '<i style="background:' +
        getColor(grades[i] + 1) +
        '"></i> ' +
        grades[i] +
        (grades[i + 1] ? "&ndash;" + (grades[i + 1] - 1) + "<br>" : "+");
    } else {
      div.innerHTML +=
        '<i style="background:' +
        getColor(grades[i] + 1) +
        '"></i> ' +
        grades[i] +
        (grades[i + 2] ? "&ndash;" + (grades[i + 2] - 1) + "<br>" : "+");
      i++;
    }
  }
  return div;
};

if (show_Legend == true) legend.addTo(map);
