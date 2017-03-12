<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-tools.github.io/ladybug-web/shadow-obj-opener/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-tools/ladybug-web/tree/gh-pages/shadow-obj-opener';
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Tools]( https://ladybug-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-tools.github.io/ladybug-web/ ) »


[Ladybug Web Shadow OBJ Opener Read Me]( index.html#readme.md )
===

## Full screen: [Ladybug Web Shadow OBJ Opener]( index.html )

Links to files you can drag and drop the links into Ladybug Web Shadow OBJ Opener

* https://ladybug-tools.github.io/3d-models/content/obj/engel-house/AngelHouse_Bauhaus-in-Israel-r2.obj
* https://ladybug-tools.github.io/3d-models/content/obj/seaside-villa-obj/seaside-villa.mtl
* https://ladybug-tools.github.io/3d-models/content/obj/urban_model_001/model.mtl
* https://ladybug-tools.github.io/3d-models/content/obj/urban_model_001/model.obj
* https://jaanga.github.io/3d-models/obj/architecture/factory-complex/factory-complex.obj
	* Scale to 0.1
* https://jaanga.github.io/3d-models/obj/architecture/sydney-opera-house/sydney-opera-house.obj
	* Use 'zoom boundary' button

## Concept

To provide a simple user-interface for adding end aditing parameters used by Ladybug Web Shadow OBJ Core

***

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
* Creates  permalinks for the following parameters
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

* Not easy to return to start position, rotation etc. Because defaults are ignored
	* Workaround: set position px equal to 0.1, for example

## Wishlist

* Mostapha: Finally, isn't it easier to scale and move sunpath instead of the geometry? I imagine cases that the user input a complex mesh and moving or scaling the geometry will be expensive performance wise.



## Change Log


### 2016-05-21

* Update readme
* Fix links / add https

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
