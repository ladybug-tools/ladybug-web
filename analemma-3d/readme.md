<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/analemma-3d';
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-analysis-tools.github.io/ladybug-web/ ) »

[Analemma 3D Read Me]( index.html#readme.md )
===

## Full screen: [Analemma 3D]( https://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d/ )


## Concept

<iframe src=https://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d/analemma-3d-r14.html width=100% height=600 ></iframe>

<img src=analemma-3d-r12.png style=display:none; >

_Ladybug Web Analemma 3D_

### Mission

* To display one [analemma]( https://en.wikipedia.org/wiki/Analemma ) for every hour of the day in 3D at any location on Earth as displayed on a 2D map
* To display the position of the Sun - using [azimuth and altitude]( https://en.wikipedia.org/wiki/Azimuth ) - for any date and time at any location on Earth
* To display the shade and shadows cast by 3D objects onto themselves and the ground 


### Features

* 3D plot of analemmas of Sun azimuth and altitude once an hour for all the days of the year.
	* Lines connect each hour on the 21st of the month
	* Midnight highlighted is red. Noon highlighted in green
	* Placards indicate the hour of each analemma
	* Displays current position of sun
	* Displays a transparent yellow band indicating the total annual sun path
	* Displays shadow and shade
	* Displays a reference object - currently a [Trylon and Perisphere]( https://en.wikipedia.org/wiki/Trylon_and_Perisphere ) - to indicate shade and shadow coverage
	* 3D arrow shows direction of north
* Menu panel - display and set a variety of information including
	* Latitude and longitude
	* Local and UTC time
	* Time zone name, id and offset in hours
	* Display of elements
	* Type of map and map parameters


## Things you can do using the script

* Use one/two/three fingers to rotate/zoom/pan the display
* Click the three bars( 'hamburger menu icon' ) to slide the menu in and out
* Click in the location box and update the current center 
* Drag the date and time sliders to change the position of the sun
* Click the triangles in the menu to open and close menu items
* Toggle the display of any of items in the 'Display & Map' panel
* Use the slider to update the radius of the analemma or the scale of the reference objects
* Selected a different source for the maps
	* 2016-06-02 - only Google Maps working right now. ;-(
* Edit the map zoom level and opacity


_If you are in '[Home Page View]( https://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d/#readme.md )', you can do all this in the window just above._

## Things you can do by editing the code

<iframe class=ifr src=../ace-view-r1.html#https://ladybug-analysis-tools.github.io/ladybug-web/analemma-3d/analemma-3d-r14.html width=100% height=600px ></iframe>

<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/blob/gh-pages/analemma-3d/analemma-3d-r14.html';
value='Ladybug Web Analemma 3D: the entire source code listing' >


* Open this file: https://github.com/ladybug-analysis-tools/ladybug-web/blob/gh-pages/analemma-3d/analemma-3d-r14.html
* Click the 'Raw' icon and save the raw file to your computer
* Once you've downloaded the file, you can click it to run it.
* Open the file with a text editor
* Scroll to line 39 and comment out - add '//' - the default location of Sydney 
* Uncomment - remove the '//' - on Paris or Chile.
* Save and reload



## Issues

* Open Street Maps - and other maps - not showing because of HTTPS issues

## Things To Do / Road Map / Wish List

* Set intensity of Sun light
* Add display of current map source and copy right notices
* Add ability to turn off casting and receiving of shadows whenever the sun is below the ground plane/horizon.
* Add choice of 3D objects
* Add the ability to change the north point based on an angle
	* Select type of north point
* Add an option to re-scale the sun path
* Add a button for top view and also save view to file.
* Do something when Google API reports no time zone
* Animations / lighten end darken sky
	* Every hour of every day
	* Every day at same hour
* Start moving some of the code into libraries
* How best to display daily sun path?
	* As in lower left of [Sun Path 3]( http://andrewmarsh.com/apps/releases/sunpath3d.html )
* Permalink support

## Goals

* Do everything the following scripts do:
	* Animations from [Sun Position Calculator]( http://www.pveducation.org/pvcdrom/properties-of-sunlight/sun-position-calculator )
	* Data from [SunCalc.org]( http://www.suncalc.org/ )
	* UI aspects from [Sun Path 3]( http://andrewmarsh.com/apps/releases/sunpath3d.html )


## Links of Interest

* https://en.wikipedia.org/wiki/Analemma
* [Imgur: How the sun looks when you take a pictures at the same place and time every week for a year]( http://imgur.com/61YTxQ2 )
	* See also more links in the comments
* [StackEchange: How does the appearance of the analemma vary with latitude?]( http://astronomy.stackexchange.com/questions/12590/how-does-the-appearance-of-the-analemma-vary-with-latitude )
* [Science Blog: Why Our Analemma Looks like a Figure 8]( http://scienceblogs.com/startswithabang/2009/08/26/why-our-analemma-looks-like-a/ )
* [Stanford Solar Center: Viewing and Understanding the Analemma]( http://solar-center.stanford.edu/art/analemma.html )
* [analemma.com]( http://www.analemma.com/pages/framespage.html ) << mostly broken



## Change Log

### 2016-06-02

* Add much to this read me
* Add Iframe/image of the script
* Add source code view of the script


### 2016-05-23

* Add more visibility toggles
* Streamline UI


### 2016-05-21 / R13.2

* Update readme
* Add more display toggles
* Add to global vars


### 2016-05-20 / R13

* UI simplified
* Work on sun band placement
* Update readme


### 2016-05-17 / R12

* Using Ladybug Web Solar Calculator
	* Replaces Agafonkin calculator as used in previous releases
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

