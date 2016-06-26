
<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-gallery/index.html#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/shadow-range-obj-gallery/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-analysis-tools.github.io/ladybug-web/ ) »


[Ladybug Web Shadow Range OBJ Gallery Read Me]( index.html#readme.md )
===

## full screen: [Ladybug Web Shadow Range OBJ Gallery]( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-gallery/ )


## Concept

<img src='https://cloud.githubusercontent.com/assets/547626/16360355/8e0b9900-3b13-11e6-97c7-e2b0375b1866.png' style=display:none; width=800 >

<iframe src='https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-gallery/' width=100% height=600 ></iframe>

_Ladybug Web Analemma 3D_

***

## Concept

### Mission

* Uses location.hash to load OBJ and MTL files and display a Sun range 
	* According to latitude, longitude, date and time
* Select current model from a menu of a variety of curated OBJ and MTL files
* Adjust a variety of parameters


### Vision

* To help engineers and architects design in more Sun-aware ways  

### Features

* Calls [Ladybug Web Shadow Range OBJ Core]( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-core/index.html#readme.md ) 
	* Load OBJ and MTL files
	* Uses Three.js to draw Sun shadow range according to date, latitude and longitude
	* Uses Google Geolocation API to calculate time offsets from UTC 
* Adjust a wide variety of parameters using menu UI
	* Date and location
* View Sun positions
* Adjust Sun parameters
* Toggle the display of a variety of elements
* Select models from a curated menu of models


## Things you can do using the script

* TBD
* Use one/two/three fingers to rotate/zoom/pan the display in 3D
	* Or left/scroll/right with your pointing device 
* Click the three bars( 'hamburger menu icon' ) to slide the menu in and out
* Click the [Stats]( https://github.com/mrdoob/stats.js/ ) box in the top corner to toggle FPS / MS / MB views
* Press Control-U/Command-Option-U to view the source code
* Press Control-Shift-J/Command-Option-J to see if the JavaScript console reports any errors



## Things you can do by editing the code

<iframe src='https://ladybug-analysis-tools.github.io/ladybug-web/ace-view-r1.html#
	https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-gallery/ladybug-web-shadow-range-obj-gallery-r5.html' width=100% height=600 ></iframe>

<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/blob/gh-pages/shadow-range-obj-gallery/ladybug-web-shadow-range-obj-gallery-r5.html';
value='Source code listing' >

* Open this file: https://github.com/ladybug-analysis-tools/ladybug-web/blob/gh-pages/ladybug-web-shadow-range-obj-core-r5.html
* Click the 'Raw' icon and save the raw file to your computer
* Once you've downloaded the file, you can click it to run it.
* Open the file with a text editor
<!--
//* Scroll to line 57 and 88 and comment out - add '//' - the default location of Sydney 
//* Uncomment - remove the '//' - on any of the other default file names.
-->
* Edit, save and reload


## Issues / To Do

* Rendering quality is still low/primitive
* Combine multiple models
* First person bcamera


## Change Log

### 2016-06-26 ~ R5.1

* Improve auto-rotate behavior
* Add to read me


### 2016-06-25 ~ R5

* Code clean up
	* All menu items use HTML5 details
* Add display time zone
* Add north arrow
* Add toggle elements display
* Add auto-rotate 


### 2016-06-17 ~ R4

* Add display of Sun positions

### 2016-06-16 ~ R3.2

* Add interval in minutes

### 2016-06-07

* Tweaking code
* Add iframes and images to Read me
* Add text
* Add back to top links

### 2016-05-31

* Final cleanup before write up
* Add dates to all models


### 2016-05-23

* Streamlining messaging
* Clean up

### 2016-05-22 / R1.2

* Add core message
* Drop sun position - because there are 10!

### 2016-05-21

* Update readme


### 2016-05-16

* Very R1

***

<center title="Ladybug Web" >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; ><img src="https://ladybug-analysis-tools.github.io/images/ladybug-logo.png" width=48 ></a>
</center>