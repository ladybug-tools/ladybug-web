<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/ladybug-web/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( http://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( http://ladybug-analysis-tools.github.io/ladybug-web/ ) »


[Ladybug Web Solar Calculator Read Me]( #solar-calculator/readme.md )
===

Ladybug seeks accurate, fast and verifiable sources for its solar calculations.

## [Ladybug Web Solar Calculator Viewer ]( http://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator/index.html )

### Mission

* To provide you with the position of the azimuth ( apparent longitude ) and altitude ( apparent latitude ) of the Sun quickly and easily
	* Given latitude, longitude, data and time
	* Usable in any number of ways
* Code that is readable by people with little programming experience
* Code that is readable by people with little astronomy experience
* Code that is readable by people with little experience of Euler notation
* Code that is auditable and verifiable and explains and links to its sources
* Documentation that helps you find further information
 

### Features

* Calculate the position of the Sun - given latitude, longitude, date and time - and return its azimuth and altitude in degrees
* Based on the NOAA solar calculator


### Update 2016-03-30

* R1 is feature complete
	* Produces a sun position identical to NOAA Solar calculator
	* Most variable names are English-like
* R2 first commit
	* Separates JavaScript and viewer
		* JavaScript: [Ladybug Web Solar Calculator R2](  http://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator/ladybug-web-solar-calculator-r2.js )
		* Viewer: [Ladybug Web Solar Calculator Viewer R2](  http://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator/ladybug-web-solar-calculator-viewer-r2.html )

	* Continues code streamlining and simplification


### Update 2016-03-29

* Code is still at an early stage
	* As and when the construction dust starts to settle the main code will be split off into a separate .js file and made available to all Ladybug Web apps
* Equation of time working
* Sun position started

### First Commit ~ 2016-03-28


## Issues

* Should all calcs be in radians - would save many conversions back and forth?
* Is it 'alitude' or 'elevation'; - would like definitive, globally-oriented source/reference for current astronomical nomenclature



## Links of interest

* [Julian Day]( https://en.wikipedia.org/wiki/Julian_day )
* simpler calculation: http://www.geoastro.de/elevaz/basics/meeus.htm
* short definitions: http://www.ephemeris.com/space-time.html
* https://en.wikipedia.org/wiki/Orbital_elements
* https://en.wikipedia.org/wiki/Mean_longitude
* https://en.wikipedia.org/wiki/Equation_of_the_center


