# CS4WIDashboard - Wisconsin Interactive Map

Wisconsin is one of the newest members of the ECEP Alliance. Wisconsin’s ECEP leadership team requires a centralized repository of current dashboard data, landscape reports, and planning materials. This project requires the technical and design “grunt work” of setting up a new website, but also offers the opportunity to gain greater insights into the current state of CS Education in our region, and to make a meaningful contribution to how that knowledge impacts policy, teachers and students.

In part of setting up a powerful dashboard, powerful and accessible interactive tools are required to make data access feasible for anyone. This tool specifically uses leaflet to build an interactive map of Wisconsin, complete with region selection, to allow users to geospacially select areas of interest. 

Implemented:
- Leaflet interactive choloropleth of Wisconsin
	- Region parsing: The map can configurably parse Wisconsin by either county or highschool districts.
  	- Data visualization: The map has a configurable heatmap visualization. Select a feature to visualize and it can supply a spectrum of high contrast colors and value thresholds. 
	- Search: The map can search across regions.
	- Geometry Selection: The user can select any set of regions.
	- Merged subdistricts under their UHS: Tweaks made to specifically filter out elementary school districts and associate them with highschool district instead.
	- Fully configurable "./scripts/leaflet/config.js"

Suggested Use:
The selected school districts could query/populate a dynamic data table, which in turn could dynamically build more powerful visualizations.
