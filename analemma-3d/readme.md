<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/analemma-3d/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d ) »


[Analemma 3D Read Me]( index.html#readme.md )
===

## Full screen: [Analemma 3D]( https://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d/ )

### Mission

* To display one analemma for every hour of the day in 3D at any location on Earth as displayed on a 2D map
* To display the position of the Sun - using azimuth and altitude - at any date and time at any location on Earth


### Features

* 3D plot of analemmas of Sun azimuth and altitude once an hour for all the days of the month.
	* Lines connect each hour on the 21st of the month
	* Midnight highlighted is red. Noon highlighted in green
	* Placards indicate the hour of each analemma
	* Displays current position of sun
	* Displays shadow and shade
	* Displays a transparent yellow band indicating the total annual sun path 
	* Reference object (Trylon and Perisphere) to indicate shade and shadow coverage
* Select location
	* By entering latitude and longitude
	* By entering address
		* With auto-complete assistance
	* Default latitude and longitude is your current location
	* Sliders update latitude and longitude of analemma in real-time
* Select date and time
	* Sliders for month, date, hour and minutes
	* Update Sun position and shadows in real-time
* Displays map of location
	* Check boxes to toggle map display - also grid and axis
	* Nine maps styles to choose from
	* Sliders for map zoom factor and opacity 
* Information panel
	* Displays a variety of information including
	* Latitude and longitude
	* Local and UTC time
	* Time zone name, id and offset in hours
	* 3D arrow shows direction of north
* Full menu system
	* Accordion menus use HTML5 details and summary element
	* Works on all recent browsers - though still in beta on FF
	* Slide-out "hamburger" menu support for mobile devices


### Issues

* Analemmas only drawn correctly in NW lat/lons
* Typing in lat amd lon in input boxes is broken
* Sun path band incorrectly positions itself
	* Tries to be its own algorithm - good for checking errors
	* Fall back could be to create sun path band from analemma vertices
* Permalink support (currently broken )


### Things To Do / Road Map

* Add the ability to change the north based on an angle
* Add sun-path circles
* Add an option to re-scale the sunpath
* Add a button for top view and also save view to file.
* Start moving some of the code into libraries 
* Do something when Google API reports no time zone
* Animations
* Add reference object choices
* Add solar times readout - with buttons to display sun position for location, date and time 

### Goals

* Do everything the following do:
	* Animations from [Sun Position Calculator]( http://www.pveducation.org/pvcdrom/properties-of-sunlight/sun-position-calculator )
	* Data from [SunCalc.org]( http://www.suncalc.org/ )
	* UI aspects from [Sun Path 3]( http://andrewmarsh.com/apps/releases/sunpath3d.html )


## Previous updates

See main Read Me for latest updates

### 2016-05-17 / R12

* Using Ladybug Web Solar Calculator
	* Replaces Agafonkib calculator as used in previous releases
	* Work in progress
	* Works OK in NW lats/lons only
* Sun band positioning is improving
* Minor code clean-up


### 2016-05-01 / R11

* Add geolocation
* Add geoencoding
* Add reverse geoencoding
* Remove gazetteer


### Latest update: 2016-03-22 / R10

* Add arcs for 21 of each month
* Add a north arrow 

### Latest update: 2016-03-21 / R9

* Analemmas are no longer upside down
* Calculates analemma for every day of month - not just first 28 as in previous release
* Add transparent yellow band to indicate full Sun path


### Latest update: 2016-03-20 / R8

* Code clean-up and updates to many variable names
	* Always room from improvement
	* Now mostly based on init, set and get paradigm
* Analemma and sun position logic mostly - but not all - OK
* Improve action of date sliders
* Fixed updates time zone data always updating - even if no lat/lon changes
* Light shadow box included just for debug - zoom out to see it all


### Latest update: 2016-03-19 / R7

* Code clean-up and updates to many variable names
	* Making variable names more meaningful and consistent
* Add Sun mesh and direction light
	* Positions update with each slider movement
* Add shadows and shade
* Add Trylon and and Perisphere reference/demo objects
* Add more time-updating capabilities
* Random location at load time

### Latest update: 2016-03-18 / R4/R5/R6


* Mostapha's magic fixes
* Many new UI features
* Gazetteer

