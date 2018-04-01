<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-tools.github.io/ladybug-web/solar-calculator-ladybug-web/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-tools/ladybug-web/tree/gh-pages/solar-calculator-ladybug-web/';
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Tools]( https://ladybug-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-tools.github.io/ladybug-web/ ) »

[Solar Calculator Ladybug Web Read Me]( https://ladybug-tools.github.io/ladybug-web/solar-calculator-ladybug-web/#readme.md )
===

## [Solar Calculator Ladybug Web Viewer]( https://ladybug-tools.github.io/ladybug-web/solar-calculator-ladybug-web/index.html )


## Mission

* To provide you with the position of the Sun - the azimuth ( apparent longitude ) and altitude ( apparent latitude ) -  quickly and easily
	* Given latitude, longitude, data and time
	* Usable in any number of ways
* Code that is readable by people with little programming experience
* Code that is readable by people with little astronomy experience
* Code that is readable by people with little experience of Euler notation
* Code that is auditable and verifiable and explains and links to its sources
* Provide small, tight, fast readable code
	* With no outside dependencies
* Viewer that displays output from all functions
	* Allows you to set location, date and time
* Viewers that display output and code side by side
* Documentation that helps you find further information
	* Provide links to all sources for all calculations
		* Make physics/science auditable/verifiable
	* Provide history, further insight, usage for each calculation
	* Explain the purpose, use and code for each and every function in simple English

## Features

* Calculate the position of the Sun
	* Given latitude, longitude, date and time - and return its azimuth and altitude in degrees
* All calculations based on the code of the [NOAA Solar Calculator]( http://www.esrl.noaa.gov/gmd/grad/solcalc/index.html )
* Variable names and function names written in clear English
	* Minimal use of unintelligible symbols
	* functions written as simple functions
* No outside dependencies
* JavaScript file usable by any app on the web
* Viewer files provides detailed example of functions and variables


## Issues

* There seems to be a minor time discrepancy - something with minutes?
* The underlying Bostock code contains about twenty lines of impenetrable code


## Links of Interest


* https://github.com/ladybug-analysis-tools/ladybug/blob/master/ladybug/sunpath.py
	* Ladybug's Python Sun path calculator
* https://books.google.com/books?id=cfCqBAAAQBAJ
* https://en.wikipedia.org/wiki/Jean_Meeus
* http://www.willbell.com/math/mc1.htm
* https://sourceforge.net/projects/astroalgorithms/
* http://www.geoastro.de/elevaz/basics/meeus.htm
* http://www.iau.org/
* http://www.iausofa.org/
* Simpler calculation: http://www.geoastro.de/elevaz/basics/meeus.htm
* Short definitions: http://www.ephemeris.com/space-time.html

## Solar Calculation Details

https://en.wikipedia.org/wiki/Position_of_the_Sun
https://en.wikipedia.org/wiki/Astronomical_Almanac

http://www.esrl.noaa.gov/gmd/grad/solcalc/calcdetails.html

### Julian Day

* https://en.wikipedia.org/wiki/Julian_day
* http://aa.usno.navy.mil/data/docs/JulianDate.php
* http://www.tondering.dk/claus/cal/julperiod.php
* http://javascript.about.com/library/bljulday.htm
* http://stackoverflow.com/questions/11759992/calculating-jdayjulian-day-in-javascript
	* See also http://javascript.about.com/library/bljulday.htm
	* looks interesting
	* Maybe nice use of JavaScript prototype
* http://www.physics.sfasu.edu/astro/javascript/julianday.html
	* Why so complicated?
* http://www.geoastro.de/elevaz/basics/meeus.htm
	* Has slightly modified version of NOAA Julian Day calculation


### Equation of Time

* https://en.wikipedia.org/wiki/Equation_of_time
* http://aa.usno.navy.mil/faq/docs/eqtime.php
* http://info.ifpan.edu.pl/firststep/aw-works/fsII/mul/mueller.html
	* lots of Euler stuff
* http://www.sundials.co.uk/equation.htm
* http://www.astronomynotes.com/nakedeye/s9.htm

### More

* https://en.wikipedia.org/wiki/Orbital_elements
* https://en.wikipedia.org/wiki/Mean_longitude
* https://en.wikipedia.org/wiki/Equation_of_the_center


## Change Log

### 2016-05-20

* Update readme
* Minor updates


### 2016-04-03

* Split into two sections
	* Ladybug Web Solar Calculator Bostock << currently the default
	* Ladybug Web Solar Calculator NOAA


### Update 2016-04-02

* R3
* Add seconds - in order to keep up with NOAA Solar Calculator
* Add Wikipedia links to viewer

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