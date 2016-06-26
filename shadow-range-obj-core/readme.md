
<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-core/index.html#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/shadow-range-obj-core/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-analysis-tools.github.io/ladybug-web/ ) »


[Ladybug Web Shadow Range OBJ Core Read Me]( index.html#readme.md )
===


## full screen: [Ladybug Web Shadow Range OBJ Core]( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-core/ )

<img src='https://cloud.githubusercontent.com/assets/547626/16139094/2be7e97a-33f9-11e6-9847-7e13d8280e6f.png' style=display:none; width=800 >

<iframe src=https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-core/index.html width=100% height=600px ></iframe>


_Ladybug Web Shadow Range OBJ Core_


***

## Concept

### Mission

* Display a shadow range for any date at any latitude and longitude
* Open and display the 3D model of your choice
* Adjust all parameters so as to create a meaningful and useful displays


### Features

* Display Sun shadow range according to date, latitude and longitude
* Load OBJ and MTL files
* Adjust a wide variety of parameters
* Uses location.hash or 'permalinks' to save parameters


## Things you can do using this script

* Use one/two/three fingers to rotate/zoom/pan the display in 3D
	* Or left/scroll/right with your pointing device 
* Click the three bars( 'hamburger menu icon' ) to slide the menu in and out
* Click the [Stats]( https://github.com/mrdoob/stats.js/ ) box in the top corner to toggle FPS / MS / MB views
* Press Control-U/Command-Option-U to view the source code
* Press Control-Shift-J/Command-Option-J to see if the JavaScript console reports any errors


## Things you can do by editing the code

<iframe src='https://ladybug-analysis-tools.github.io/ladybug-web/ace-view-r1.html#
	https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-core/ladybug-web-shadow-range-obj-core-r3.html' width=100% height=600px ></iframe>


_Source code Ladybug Web Shadow Range OBJ Core_

* Open this file: https://github.com/ladybug-analysis-tools/ladybug-web/blob/gh-pages/ladybug-web-shadow-range-obj-core-r3.html
* Click the 'Raw' icon and save the raw file to your computer
* Once you've downloaded the file, you can click it to run it.
* Open the file with a text editor
* Scroll to line 57 and 88 and comment out - add '//' - the default location of Sydney 
* Uncomment - remove the '//' - on any of the other default file names.
* Save and reload

## Creating Visualizations

There are two methods for creating Sun range visualizations

### Method 1: Edit Permalinks

1. Copy and paste a URL into your browser
2. Edit the parameters
3. Refresh the page to view the updates

Here is a typical URL that you can practice with:

    https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-core/#https://ladybug-analysis-tools.github.io/3d-models/content/obj/urban_model_001/model.mtl#la=-33#lo=151#sx=0.1#sy=0.1#sz=0.1#px=20#rx=90#ry=180';

A full list of parameters is provided below. Not all parameters work with Sun Range as some parameters are for the Shadow series 


### Method 2: Use Shadow Range OBJ Opener

Edit the parameters using [Ladybug Web Shadow Range OBJ Opener]( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-opener/ )


## Permalink codes

The following are the currently available permalink or location.hash codes.
See [Ladybug Web Shadow Range OBJ Core Source Code](https://github.com/ladybug-analysis-tools/ladybug-web/blob/gh-pages/shadow-range-obj-core/ladybug-web-shadow-range-obj-core-r2.html] ) for examples of usage.

aa= analemmaColor  
ar= analemmaRadius  
av= analemmaVisible  
la= latitude  
lo= longitude  

yr= year  
mo= month  
da= date  
  
hr= hours  
mn= minutes  
  
go= groundPlaneOpacity  
gv= groundPlaneVisible  


sc= sunRangeCount  
sh= sunRangeHelpers  
si= sunRangeIntensity  
sm= sunRangeMinutes  
sp= sunRangePlacards  
sr= sunRangeRadius  
ss= sunRangeStart  
  
  
rx= model.rotation.x  
ry= model.rotation.y  
rz= model.rotation.z  
  
px= model.position.x  
py= model.position.y  
pz= model.position.z  
  
sx= model.scale.x  
sy= model.scale.y  
sz= model.scale.z  
  
cx= camera.position.x  
cy= camera.position.y  
cz= camera.position.z  
  
tx= controls.target.x  
ty= controls.target.y  
tz= controls.target.z  


## Issues / To Do

* All time parameters in pud
* Add north point
* Need more examples with parameters
* Add ways of improving shadow quality
* Should parameters and model be a single Three.js object instead of two?
* Should analemmas be added?

## Links of Interest

* [Wikipedia Sun Path]( https://en.wikipedia.org/wiki/Sun_path )
* [Wikipedia Position of the Sun]( https://en.wikipedia.org/wiki/Position_of_the_Sun )
* [Generate Simple Shadow Study in Rhino]( http://performance-and-form.com/projects/generate-simple-shadow-study-in-rhino/ )
* [SketchUp Shadow Study / Solar Analysis Tutorial]( http://kjzhang.freehostia.com/sketchup_shadow_study_tutorial.html )
	* Requires use of PhotoShop to build a composite of multiple images
* [Ecotect: Shadows & Sunlight Hours]( http://sustainabilityworkshop.autodesk.com/buildings/ecotect-shadows-sunlight-hours )
* https://lumion3d.com/ ??



## Change Log

Note that [Ladybug Web Shadow Range OBJ Opener ]( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-opener/ ) and 
[Ladybug Web Shadow Range OBJ Gallery ]( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-range-obj-gallery/ ) are automatically updated
as a well since they rely on core for all Three.js operations.

### 2016-06-25 ~ R3.2 / R4

* Lights add and remove as expected
* Add time time data to global parameters object
* Sun is no longer shaded
* Source code displays properly in read me

### 2016-06-16

* Update read me with permalink/location hash parameters
* Fix display of sun positions in menu
* Add to and edit location hash parameters
	* Add set number of minutes between sun positions
	* Add toggle helpers
	* Add toggle placards
* Add display of yellow spheres as suns
* Add placards above te suns with time display

### 2016-06-03

* Update read me
* Add iframe and image
* Add source code view

## 2016-05-23 / R1


***

<center title="Ladybug Web" >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; ><img src="https://ladybug-analysis-tools.github.io/images/ladybug-logo.png" width=48 ></a>
</center>