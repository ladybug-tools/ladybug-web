<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-compare/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/solar-calculator-compare/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >


[Ladybug Analysis Tools]( https://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-analysis-tools.github.io/ladybug-web/ ) »

[Solar Calculator Compare Read Me]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-compare/#readme.md )
===

## full screen: [Solar Calculator Compare]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-compare/ )

***

## Concept

We have looked at the efforts of:  

* [Agafonkin]( http://ladybug-analysis-tools.github.io/ladybug-web/index.html#suncalc-sandbox/readme.md )
* [Bostock]( http://ladybug-analysis-tools.github.io/ladybug-web/index.html#bostock-sandbox/readme.md )
* [Hoffman]( http://ladybug-analysis-tools.github.io/ladybug-web/sonnenverlauf/sonnenverlauf-test-r1.html )
* [NOAA]( http://ladybug-analysis-tools.github.io/ladybug-web/index.html#noaa-sandbox/readme.md )

We have found issues with each one of these efforts.
Therefore we propose a new effort that stands on their shoulders.

### Issues

The Bostock code contains about twenty lines if impenetrable code
* The NOAA code requires Julian Century, local time in minutes and timezone for each calculation
	* Much archaic style coding 
	* Bostock and Agafonkin use the basic JavaScript Date object - which is simpler and more standard


## Features

* Compares accuracy of multiple Sun position calculators
	* All given identical location, date and time
	* Displays azimuth and altitude of calculated by each script
	* Displays other related data to help verify accuracy ~ a work-in-progress
* Currently reports on the following
	* Ladybug Web Solar Calculator
	* NOAA Solar Calculator
	* Mike Bostock's Solar Calculator
	* Vladimir Agafonkin's SunCalc.js
* Where possible the link to the source is the original and canonical JavaScript file on the web


## Links to Ladybug Web Sun Calculator Scripts


### Solar Calculator Ladybug Web 

* [Script]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-ladybug-web/ )
* [Read Me]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-ladybug-web/#readme.md )


### Solar Calculator NOAA

* [Script]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-noaa/ )
* [Read Me](https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-noaa/#readme.md )
* [Solcalc Home Page]( http://www.esrl.noaa.gov/gmd/grad/solcalc/index.html )


### Solar Calculator Bostock

* [Script]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-bostock/#readme.md )
* [Read Me]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-bostock/#readme.md )
* [Solar Calculator Page]( https://bl.ocks.org/mbostock/7784f4b2c7838b893e9b )

### Solar Calculator Agafonkin ~ SunCalc.js

* [Script]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-agafonkin/ )
* [Read Me]( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-agafonkin/#readme.md )
* [Agafonkin GitHub](https://github.com/mourner/suncalc )
* [SunCalc]( http://suncalc.net/ )

## Road Map / Things to do

* Make output easier to read
	* Tighten up display ~ requite less scrolling
* Add and display more calculations
* Add daylight saving time button
* Select location from a gazetteer / Google Maps API


## Change Log

### 2016-05-20

* Update readme
* Minor updates & cleanup

### 2016-05-19

* https update
* Rearrange the lineup

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
