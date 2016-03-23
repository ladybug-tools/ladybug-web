<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/ladybug-web/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://github.com/ladybug-analysis-tools ) »

[Ladybug Web]( index.html )
===

_Ladybug for web provides [analemma]( https://en.wikipedia.org/wiki/Analemma ), solar and weather data visualization and analysis on the web_

Generally the following scripts

* Built using entry level JavaScript with no dependencies other than Three.js and/or SunCalc.js
* Enable rotation, zoom and pan using one, two or three fingers or left button, scroll wheel and right button on a mouse

## [Ladybug GitHub API Explorer]( http://ladybug-analysis-tools.github.io/ladybug-web/ladybug-github-api-explorer/ladybug-github-api-explorer-r1.html )

* A first pass at thinking out load about what the home page of a complex GitHub organization should do. Is it some kind of dashboard?


## [Ladybug Web Shadow Core]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-core/ )

* A basic engine for calculating and displaying analemmas and sun positions
* Supports any latitude and longitude
* Supports year, month, date, hour, minute date and time
* Loads JSON files from a URL
* Supports permalinks for the above plus
	* Camera position and camera target
	* Various other minor settings

## [Ladybug Web Shadow Explorer]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-explorer/ )

* Two column menu and contents display
	* Menu list files that can be displayed
* Loads Markdown files and converts them to HTML
* Loads JSON files using [Ladybug Web Shadow Core]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-core/ )
* Updates sun position in real-time

For details see the Read Me in [Ladybug Web Shadow Explorer]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-explorer/ )


## Full screen: [Analemma 3D]( http://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d/ )

### Mission

* To display one analemma for every hour of the day in 3D at any location on Earth
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
	* By latitude and longitude sliders
	* By selecting city from a gazetteer of over 2,000 places names
	* Default latitude and longitude is selected randomly from the gazetteer
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



### Latest update: 2016-03-22 / R10

* Add arcs for 21 of each month
* Add a north arrow 

### Latest update: 2016-03-21 / R9

* Analemmas are no longer upside down
* Calculates analemma for every day of month - not just first 28 as in previous release
* Add transparent yellow band to indicate full Sun path


### Issues

* Sun itself is shaded
* Sun path band incorrectly positions itself
	* Tries to be its own algorithm - good for checking errors
	* Fall back could be to create sun path band from analemma vertices
* Latitude and longitude sliders not working properly
* Maps not always not updating properly when using lat/lon sliders
* Permalink support (currently broken )


### Things To Do / Road Map

* Add the ability to change the north based on an angle
* Add sun-path circles
* Add being able to import json files
* Add an option to re-scale the sunpath
* Add ability to add sun positions for a time-range (21 Dec, 9 am - 5 pm)
* Add a button for top view and also save view to file.
* Start moving some of the code into libraries 
* Do something when Google API reports no time zone
* Text input for lat and lon // or wait for permalinks?
* Replace/Upgrade SunCalc.js with NOAA/Bostock JavaScript
* Animations
* Add reference object choices
* Add solar times readout - with buttons to display sun position for location, date and time 
* Add access to geolocation - as in [ Google Developers Geolocation API]( https://developers.google.com/maps/documentation/javascript/examples/map-geolocation )
* Add access to places autocomplete = as in [Google Maps JavaScript API Place Autocomplete]( https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete )
* Open Street gazetteer

### Goals

* Do everything the following do:
	* Animations from [Sun Position Calculator]( http://www.pveducation.org/pvcdrom/properties-of-sunlight/sun-position-calculator )
	* Data from [SunCalc.org]( http://www.suncalc.org/ )
	* UI aspects from [Sun Path 3]( http://andrewmarsh.com/apps/releases/sunpath3d.html )



## [Analemma 2D]( http://ladybug-analysis-tools.github.io/ladybug-web/analemma-2d/ )

### Features

* 2D plot of Sun azimuth and altitude once an hour at the 21st of each month. 
* Default is lat/lon of San Francisco
* Latitude and longitude sliders - with real-time updates
* Buttons to display data for New York, Isfahan, San Francisco and Sydney
* Midnight highlighted in red. Noon highlighted in green
* Hourly data output in degrees
* Permalink support
* Slide-out menu support - helps with use on tablets

### Latest update: 2016-03-14 /R3

* Rename from 'Analemma Sandbox' to 'Analemma 2D'
* Adds slide-out 'hamburger' menu
* Code clean-up
* Adds latitude and longitude sliders - real-time updates
* Display and text readout calculated in degrees ( was radians ) 
* Permalink support

### Issues

* Funky stuff happens when using latitude slider
	* Is this our error or a SunCalc.js error?


## [Sun Azimuth Altitude OBJ Viewer]( http://ladybug-analysis-tools.github.io/ladybug-web/sun-azimuth-altitude-obj/ )

Latest update: 2016-03-06 / R1

### Features
* Built on [SunCalc]( https://github.com/mourner/suncalc )
* Creates a 3D Sun path
* Displays Sun times and position in radians and degree
* Set the date and time
* Loads and displays OBJ files - with shade and shadow
	* Includes five samples
* API that creates and accepts permalinks

### Things to Do / Road Map

* Rotate default buildings to correct orientation
* Fix azimuth/altitude error
* Allow for updates that don't reset parameters
* Faster ways for setting data and time


## [SunCalc Sandbox]( http://ladybug-analysis-tools.github.io/ladybug-web/suncalc-sandbox/ )

### Features

* Built on [SunCalc.js]( https://github.com/mourner/suncalc )
* Calculates and reports Sun times and position in radians and degrees
* Calculates and reports Moon illumination, times and positions in radians and degrees
* API that creates, updates and accepts permalinks
	* Accept date, time, latitude and longitude
* Buttons provide data for selected cities


### Latest update: 2016-03-14 / R7

* Code clean-up
* Display data in UTC plus in the time zone of the remote location
* Redesign permalinks
* Add buttons

<!--
### Permalinks

* [Barcelona Pavilion]( ./suncalc-sandbox/index.html#yr=2016#mo=1#da=1#hr=12#mn=0#la=41.3706#lo=2.1500 )
	* [SunCalc.net]( http://suncalc.net/#/41.3706,2.1500,12/2016.01.01/12:00/1 )
	* [SunCalc.org]( http://suncalc.org/#/41.3706,2.1500,12/2016.01.01/12:00/1 )
* [Robie House, Chicago]( ./suncalc-sandbox/index.html#yr=2016#mo=1#da=1#hr=12#mn=0#la=41.7898#lo=-87.5959 )
	* [SunCalc.net]( http://suncalc.net/#/41.7898,-87.5959,12/2016.01.01/12:00/1 )
	* [SunCalc.org]( http://suncalc.org/#/41.7898,-87.5959,12/2016.01.01/12:00/1 )
* [Schroder House, Utrecht]( ./suncalc-sandbox/index.html#yr=2016#mo=1#da=1#hr=12#mn=0#la=52.0853#lo=5.1472 )
	* [SunCalc.net]( http://suncalc.net/#/52.0853,5.1472,12/2016.01.01/12:00/1 )
	* [SunCalc.org]( http://suncalc.org/#/52.0853,5.1472,12/2016.01.01/12:00/1 )
* [Sydney Opera House]( ./suncalc-sandbox/index.html#yr=2016#mo=1#da=1#hr=12#mn=0#la=-33.8587#lo=151.2140 )
	* [SunCalc.net]( http://suncalc.net/#/-33.8587,151.2140,12/2016.01.01/12:00/1 )
	* [SunCalc.org]( http://suncalc.org/#/-33.8587,151.2140,12/2016.01.01/12:00/1 )
* [Villa Savoye, Poissy]( ./suncalc-sandbox/index.html#yr=2016#mo=1#da=1#hr=12#mn=0#la=48.9231#lo=2.02658 )
	* [SunCalc.net]( http://suncalc.net/#/48.9231,2.02658,12/2016.01.01/12:00/1 )
	* [SunCalc.org]( http://suncalc.org/#/48.9231,2.02658,12/2016.01.01/12:00/1 )
-->

### Issues

* More testing need to confirm times are correct


### Things to Do / Road Map

* Separate into engine and viewers  << 2016-03-08 separation process just starting with R5
* Select locations from a gazetteer of with lat/lon of over 2,000 places names
* Select lat/lon by clicking on a map or globe
* Click on each item of Sun times to update Sun position. Ditto Moon
* Highlight with color currently selected location


### Notes / Remarks

* SunCalc accepts dates both as ASCII and UNIX timestamps in milliseconds


## [Sun Azimuth Altitude]( http://ladybug-analysis-tools.github.io/ladybug-web/sun-azimuth-altitude/ )

Embedded description: _Set date and time. Set the location to any lat/lon. Adjust the view. View the Sun azimuth, altitude and shadows for that place and time. Permalinks created on the fly._

Latest update: 2016-03-06 / R3

### Features

* Set date and time
* Set latitude and longitude
* View Sun azimuth and altitude
* View shadow simulation
* API that creates and accepts permalinks

### Things to Do / Road Map

* Menu works on mobiles
* Select lat/lon by clicking on a map or globe
* Add gazetteer?
* Insert OBJ, JSON and other files into the scene
* Pick up 3D data from Google Street View - follow Callum Prentice


## Issues of Interest

https://github.com/ladybug-analysis-tools/ladybug-web/issues/1

* [Python Code]( https://github.com/ladybug-analysis-tools/ladybug-core/blob/master/ladybug/sunpath.py#L97-L138 )

## Links of Interest


[Sun Path in WebGL]( http://www.pycheung.com/weblog/?p=1394 ) 
* Shows how Analemma are created ~ [PY Cheung]( http://www.pycheung.com/weblog/ )
* No code or explanation

[Sunlight Hours Ladybug Dynamo]( http://hydrashare.github.io/hydra/viewer?owner=mostaphaRoudsari&fork=hydra_1&id=Sunlighthours_Ladybug_Dynamo&slide=0&scale=2.7215798676177987&offset=-765.8096117029108,-203.1389988323118 )
* Here it is in Python. Can we do it in JavaScript?
* [Source]( https://github.com/ladybug-analysis-tools/ladybug-core/blob/master/ladybug/sunpath.py#L97-L138 )


[SunCalc]( https://github.com/mourner/suncalc ) ~ Thank you [Vladimir Agafonkin]( http://agafonkin.com/en/ )!

[Astronomy Answers ~ Position of the Sun]( http://aa.quae.nl/en/reken/zonpositie.html )

[SunCalc.net]( http://suncalc.net/ ) ~ Vladimir Agafonkin!
* You must use the time of the local computer location. 
	* In order to see sunrise in Europe from a computer in San Francisco, you must set time as, say, 23:50
 

[SunCalc.org]( http://www.suncalc.org/ ) ~ [Torsten Hoffman]( http://www.torsten-hoffmann.de/ )  
[MoonCalc.org]( http://www.mooncalc.org ) ~ [Torsten Hoffman]( http://www.torsten-hoffmann.de/ )  
* These apps also use the time at you current location
	* But also displays local time at the location being viewed

[NOAA Solar Calculator]( http://www.esrl.noaa.gov/gmd/grad/solcalc/index.html )
* [Main JavaScript routine]( http://www.esrl.noaa.gov/gmd/grad/solcalc/main.js )
* Main page fairly easy to update
* Calls them 'azimuth' and 'elevation'
* Does not give negative elevations


[Sun Earth Tools]( http://www.sunearthtools.com/dp/tools/pos_sun.php ) ~ no API ~ UK app - no authors listed

[Sun Path 3]( http://andrewmarsh.com/apps/releases/sunpath3d.html ) ~ no API ~ [Dr Andrew Marsh]( http://andrewmarsh.com/ )

[Solar Path]( http://bl.ocks.org/mbostock/7784f4b2c7838b893e9b#solar-calculator.js ) ~ Mike Bostock

[NOAA Solar Calculator]( http://www.esrl.noaa.gov/gmd/grad/solcalc/ ) ~ Find Sunrise, Sunset, Solar Noon and Solar Position for Any Place on Earth
* http://www.esrl.noaa.gov/gmd/grad/solcalc/emaps.js
* Previous version: http://www.esrl.noaa.gov/gmd/grad/solcalc/azel.html

[Motions of the Sun Simulator]( http://astro.unl.edu/naap/motion3/animations/sunmotions.html )
* Uses Flash


[Sun Position Calculator]( http://www.pveducation.org/pvcdrom/properties-of-sunlight/sun-position-calculator )


http://www.metafilter.com/130877/SunCalc-a-solar-azimuth-calculator

http://www.analemma.com/Pages/indexPage.html
* Old and has issues

### Wikipedia

* [Position of the Sun]( https://en.wikipedia.org/wiki/Position_of_the_Sun )
* [Sun path]( https://en.wikipedia.org/wiki/Sun_path )


***

<center title="dingbat" >
# <a href=javascript:window.scrollTo(0,0); > ❦ </a>
</center>
