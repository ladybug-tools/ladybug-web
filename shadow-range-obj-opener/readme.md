<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://rawgit.com/ladybug-tools/ladybug-web/shadow-range-obj-opener/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/shadow-range-obj-opener';
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://rawgit.com/ladybug-tools/ladybug-tools.github.io/master/ ) » [Ladybug Web ]( https://rawgit.com/ladybug-tools/ladybug-web/gh-pages/ ) »


[Ladybug Web Shadow Range OBJ Opener Read Me]( index.html#readme.md )
===

## Full screen: [Ladybug Web Shadow Range OBJ Opener]( https://rawgit.com/ladybug-tools/ladybug-web/gh-pages/shadow-range-obj-opener/ )

Links to files you can drag and drop the links into Ladybug Web Shadow OBJ Opener:

* https://rawgit.com/ladybug-tools/3d-models/gh-pages/content/obj/engel-house/AngelHouse_Bauhaus-in-Israel-r2.obj
* https://rawgit.com/ladybug-tools/3d-models/gh-pages/content/obj/seaside-villa-obj/seaside-villa.mtl
* https://rawgit.com/ladybug-tools/3d-models/gh-pages/content/obj/urban_model_001/model.mtl
* https://rawgit.com/ladybug-tools/3d-models/gh-pages/content/obj/urban_model_001/model.obj
* https://jaanga.github.io/3d-models/obj/architecture/factory-complex/factory-complex.obj
	* Scale to 0.1
* https://jaanga.github.io/3d-models/obj/architecture/sydney-opera-house/sydney-opera-house.obj
	* Use 'zoom boundary' button


<img src="https://cloud.githubusercontent.com/assets/547626/15871740/0675c73e-2cab-11e6-88c6-0a412f8c24fd.png" style=display:none; width=800 >

<iframe src="https://rawgit.com/ladybug-tools/ladybug-web/gh-pages/shadow-range-obj-opener/ladybug-web-shadow-range-obj-opener-r2.html" width="100%" height=600 ></iframe>

_Ladybug Web Shadow Range OBJ Opener_

***

## Concept

### Mission

* To provide a simple user-interface for adding and editing parameters used by [Ladybug Web Shadow OBJ Core]( https://rawgit.com/ladybug-tools/ladybug-web/gh-pages/shadow-range-obj-core/ )
* To prepare links for use by [Ladybug Web Shadow OBJ Gallery]( https://rawgit.com/ladybug-tools/ladybug-web/gh-pages/shadow-range-obj-gallery/ )

### Vision

* To demonstrate that creating, updating and sending a wide variety of parameters to a script can be carried out by beginning to intermediate level programmers



## Features

* 3D plot of analemmas of Sun azimuth and altitude once an hour for all the days of the month.
	* Lines connect each hour on the 21st of the month
	* Midnight highlighted is red. Noon highlighted in green
	* Placards indicate the hour of each analemma
	* Displays current position of sun
	* Displays shadow and shade
	* 3D arrow shows direction of north
* Loads and displays OBJ and MTL files
	* Loads, makes use of and displays texture bitmaps
	* Displays progress messages and errors in menu when needed
* Date and location panel displays:
	* Latitude and longitude input
	* Time zone
	* Selected month and day slider bar
* Sun positions panel display:
	* Displays azimuth and altitude in degrees for each sun position
* Sun Controls panel
	* Sun intensity, start time, number of positions, interval in mibutes
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



## Things you can do using the script

* Set the latitude and longitude to your current location
* Set the month and day to the longest and shortest days of the year
* Set the start time a bit earlier and set the number of positions to 12
* Turn off the display of the ground plane and turn on the auto-rotate
* Adjust the scale, position and rotation of the model
* Drag and drop a file UR into the text edit box and adjust its parameters
* Use one/two/three fingers to rotate/zoom/pan the display in 3D
	* Or left/scroll/right with your pointing device
* Click the three bars( 'hamburger menu icon' ) to slide the menu in and out
* Click the check box to display mesh as solid or wireframe
* Click the 'I' in the circle to go to the read me file
* Click on the title to reload the script
* Click the [Stats]( https://github.com/mrdoob/stats.js/ ) box in the top corner to toggle FPS / MS / MB views
* Press Control-U/Command-Option-U to view the source code
* Press Control-Shift-J/Command-Option-J to see if the JavaScript console reports any errors


## Creating a URL for a file on your computer

* Open the 3D model data file in your browser
* Copy and paste the link in the address bar into the text box in Shadow Range OBJ Opener
	* or
* Drag and drop the icon to the left of the address bar into the text box in Shadow Range OBJ Opener


_Probably needs a video..._



## Things you can do by editing the code

<iframe src=https://rawgit.com/ladybug-tools/ladybug-web/gh-pages/ace-view-r1.html#
	https://rawgit.com/ladybug-tools/ladybug-web/gh-pages/shadow-range-obj-opener/ladybug-web-shadow-range-obj-opener-r2.html width=100% height=600 ></iframe>

<input type=button onclick=window.location.href='https://github.com/ladybug-tools/ladybug-web/blob/gh-pages/shadow-range-obj-opener/ladybug-web-shadow-range-obj-opener-r2.html';
value='Source code listing' >

* Open this file: https://github.com/ladybug-tools/ladybug-web/blob/gh-pages/
* Click the 'Raw' icon and save the raw file to your computer
* Once you've downloaded the file, you can click it to run it.
* Open the file with a text editor


## Issues

* UI too sensitive. Clicking fast on number parameters cause WebGL to crash
	* May meed to go to slower data entry method ;-(
* Not easy to return to start position, rotation etc. Because defaults are ignored
	* Workaround: set position px equal to 0.1, for example

## Wishlist

* Highlight a particular Sun Position - darken its shadow and dim the other shadows
* Add geolocation?
* Add analemmas?
* Sun positions panel: number the items?

* Mostapha: Finally, isn't it easier to scale and move sunpath instead of the geometry? I imagine cases that the user input a complex mesh and moving or scaling the geometry will be expensive performance wise.



## Change Log

### 2016-06-27 ~ R2.1

* Update read me
* Add degree symbols to Sun Positions panel
* Adjust css
* Add time zone update

### 2016-06-26 ~ R2

* Menu mostly complete and operational

### 2016-06-17

* Add display Sun positions read out and Sun controls

### 2016-06-07

* Tweak code
* Update read me


### 2016-05-31

First commit


***

<center title="Ladybug Web" >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; ><img src="https://rawgit.com/ladybug-tools/ladybug-tools.github.io/master/images/ladybug_tools_logo.png" width=48 ></a>
</center>

