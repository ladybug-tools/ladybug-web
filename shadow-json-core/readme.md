<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( http://ladybug-analysis-tools.github.io/ladybug-web/#shadow-core/readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/shadow-core'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( http://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( http://ladybug-analysis-tools.github.io/ladybug-web/ ) »


[Ladybug Web Shadow Core Read Me]( #shadow-core/readme.md )
===

## Full screen: [Ladybug Web Shadow Core]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-json-core/index.html )

Older versions

* Full screen: [Ladybug Web Shadow Core Bostock]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-json-core/ladybug-web-shadow-core-bostock-r4.html )
* Full screen: [Ladybug Web Shadow Core NOAA]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-json-core/ladybug-web-shadow-core-noaa-r1.html )
* Full screen: [Ladybug Web Shadow Core SunCalc]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-json-core/ladybug-web-shadow-core-suncalc-r2.html )

***

## Features

* Draw the sun path
	* Given location, date and time
	* Displays analemmas and hour placards
* Loads and displays JSON file
	* Should handle all revisions of the Three.js JSON standard - R3 and R4 in particular
	* Uses both Three.js JSONLoader and ObjectLoader
	* Loads and makes use of and display texture bitmaps
* Supports permalinks
* Displays statistics
	* Displayed if window is top or debug is true
* Simple test button

## Issues


## Wishlist

* Mostapha: Finally, isn't it easier to scale and move sunpath instead of the geometry? I imagine cases that the user input a complex mesh and moving or scaling the geometry will be expensive performance wise.



## Change Log

### 2016-05-13

* R3
* Many changes
* Uses Ladybug Web solar calculator
* Hamburger menu


### 2016-04-09

* Add permalink support for groundPlane, analemma, sun intensity
* Add scale project and toggle
* Streamline code

### 2016-04-08

* Add send messages to parent
* Add toglle placeMap visibility
* Set default file to urban model 001
* Improve ability to load files
	* Add cast and receive shadows
	* Add two sides
* Add Edges Helpers to R4 files
* Other bits and bobs


### 2016-04-07

* Add R3
* Add support for all the Three.js JSON standards
* Fix scaling issues

### 2016-04-04

* Add Ladybug Web Shadow Core Bostock R2
* Analemmas no longer upside down
* Code and variable name logic clean-up 
* Add slide-out hamburger menu
* Add Sun position read-out to menus of all core apps
	* Finding issues with all of them. So it goes

### 2016-04-03

* Add Ladybug Web Shadow Core Bostock R1
* Rename from 'Ladybug Web Shadow Core' to 'Ladybug Web Shadow Core NOAA'

