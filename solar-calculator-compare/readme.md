﻿<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/ladybug-web/#calculations-compare/readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/calculations-compare'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >


[Ladybug Analysis Tools]( http://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( http://ladybug-analysis-tools.github.io/ladybug-web/ ) »

[Calculations Compare Read Me]( http://ladybug-analysis-tools.github.io/ladybug-web/index.html#calculations-compare/readme.md )
===

# full screen: [Calculations Compare]( http://ladybug-analysis-tools.github.io/ladybug-web/calculations-compare/ )

***

## Features

* Compares accuracy of multiple Sun position calculators
	* All given identical location, date and time
	* Displays azimuth and altitude of calculated by each script
	* Displays other related data to help verify accuracy ~ a work-in-progress
* Currently reports on the following
	* Ladybug Web Solar Calculator Bostock
	* Ladybug Web Solar Calculator NOAA
	* NOAA Solar Calculator
	* Vladimir Agafonkin's SunCalc.js
	* Mike Bostock's Solar Calculaor
* Where possible the source is original and canonical JavaScript file on the web


## Links to Ladybug Web Sun Position Scripts

### Ladybug Web Solar Calculator Bostock

* http://ladybug-analysis-tools.github.io/ladybug-web/index.html#solar-calculator/readme.md


### Ladybug Web Solar Calculator NOAA

* http://ladybug-analysis-tools.github.io/ladybug-web/index.html#solar-calculator/readme.md


### NOAA ~ Solar Calculator

* http://ladybug-analysis-tools.github.io/ladybug-web/#noaa-sandbox/readme.md
* http://www.esrl.noaa.gov/gmd/grad/solcalc/index.html


### Vladimir Agafonkin ~ SunCalc.js

* http://ladybug-analysis-tools.github.io/ladybug-web/#suncalc-sandbox/readme.md
* https://github.com/mourner/suncalc
* http://suncalc.net/

### Michael Bostock ~ Solar Calculator

* http://ladybug-analysis-tools.github.io/ladybug-web/#bostock-sandbox/readme.md
* https://bl.ocks.org/mbostock/7784f4b2c7838b893e9b

## Road Map / Things to do

* Make output easier to read
	* Tighten up display ~ requite less scrolling
* Add and display more calculations
* Add daylight saving time button
* Select location from a gazetteer


## Change Log

### 2016-04-03

* R4
* Add Adds Ladybug Web Solar Calculator Bostock
* Rename from 'Ladybug Web Solar Calculator' to 'Ladybug Web Solar Calculator NOAA'

### Update 2016-04-02

* R3
* Adds Ladybug Web Solar Calculator
* All sun positions in agreement ~ allowing for accuracy differences

### Update 2016-04-01


* Most issues seem to be solved
	* Many had to do with timezone and DST issues

### Update 2016-03-31

* R2
* Compares Agafonkin, Bostock and NOAA
* Nobody agrees on the position of the Sun ;-)
* Structural differences in the code make comparisons difficult


### Update 2016-03-21

* Very R1
* Compares Agafonkin and Bostock sun positions
* Will add NOAA and Ladybug calcs