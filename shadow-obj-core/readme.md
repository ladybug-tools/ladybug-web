<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-obj-core/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/shadow-obj-core/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-analysis-tools.github.io/ladybug-web/ ) »


[Ladybug Web Shadow OBJ Core Read Me]( index.html#readme.md )
===


## Full screen: [Ladybug Web Shadow OBJ Core]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-obj-core/ )

***

## Concept

* To have a core or 'engine' that other scripts may call and use to embed in an `iframe`
	* Parent scripts can be made with jQuery, Go or whatever
* Everything needed - CSS, HTML and JavaScript - in one small tidy place
	* But will probably eventually go on to also existing as multiple individual JavaScript files

## Features

* 3D plot of analemmas of Sun azimuth and altitude once an hour for all the days of the month.
	* Lines connect each hour on the 21st of the month
	* Midnight highlighted is red. Noon highlighted in green
	* Placards indicate the hour of each analemma
	* Displays current position of sun
	* Displays shadow and shade
	* 3D arrow shows direction of north
* Loads and displays OBJ and MTL files
	* Loads and makes use of and display texture bitmaps
* Information panel displays a variety of information including
	* Latitude and longitude
	* Selected time
	* If not top window - ie in an iframe - Information panel does not display
* Supports permalinks for the following parameters
	* Only the parameters that need changing need to appear on the location.hash
	* file name
	* latitude
	* longitude
	* year
	* month
	* date
	* hours
	* minutes
	* placeMap.material.opacity
	* project.rotation.x
	* project.rotation.y
	* project.rotation.z
	* project.position.x
	* project.position.y
	* project.position.z
	* project.scale.x
	* project.scale.y
	* project.scale.z
	* cx - camera.position.x
	* cy - camera.position.y
	* cz - camera.position.z
	* tx - controls.target.x
	* ty - controls.target.y
	* tz - controls.target.z


## Issues

* Small discrepancy with NOAA/Bostacl calcs



## Wish List

* Mostapha: Finally, isn't it easier to scale and move sunpath instead of the geometry? I imagine cases that the user input a complex mesh and moving or scaling the geometry will be expensive performance wise.


### Change Log


### 2016-05-29

* Too many minor changes to document easily
* Whole thing seems to be settling down and becoming more stable
* Light intensity to zero if Sun.position.y < 0

### 2016-05-22

* Simplify messaging
* Add more xhr error-trapping
* Add 'location is timeless' error-handling
* Add messaging system idea



### 2016-04-09

* Add permalink support for groundPlane, analemma, sun intensity
* Add scale project and toggle
* Streamline code

### 2016-04-08

* Add send messages to parent
* Add toggle placeMap visibility
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

