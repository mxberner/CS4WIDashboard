var layer_styles = {
  default: {
    fillColor: "#e8e8e8",
    color: "#c2c2c2",
    fillOpacity: 0.75,
    weight: 3,
  },
  highlight: {
    fillColor: "#3c78fc",
    color: "#2367fc",
    fillOpacity: 0.75,
    weight: 3,
  },
  selected: {
    fillColor: "#2367fc",
    color: "#034be9",
    fillOpacity: 0.75,
    weight: 3,
  },
  transparent: {
    fillColor: "#2367fc",
    color: "#c2c2c2",
    fillOpacity: 0.0,
    weight: 3,
  },
};

//Style used to varie in intensity over some variable
function choropleth(feature) {
  return {
    fillColor: getColor(feature.properties.OBJECTID),
    weight: 2.5,
    opacity: 1,
    color: "#c2c2c2",
    dashArray: "2",
    fillOpacity: 0.75,
  };
}

//Function to determine color based on intensity thresholds
function getColor(d) {
  for (var i = 1; i <= thresholds.length; i++) {
    if (less_levels) i++;
    if (d >= thresholds[thresholds.length - i]) {
      if (use_gradient == 1) {
        if (thresholds.length - i >= blue_gradient.length) {
          return blue_gradient[blue_gradient.length - 1];
        }
        return blue_gradient[thresholds.length - i];
      } else if (use_gradient == 2) {
        if (thresholds.length - i >= red_gradient.length) {
          return red_gradient[red.length - 1];
        }
        return red_gradient[thresholds.length - i];
      } else {
        return no_gradient[0];
      }
    }
  }
  return no_gradient[0];
}
