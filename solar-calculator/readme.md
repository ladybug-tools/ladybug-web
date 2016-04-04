<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/ladybug-web/#solar-calculator/readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/solar-calculator'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( http://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( http://ladybug-analysis-tools.github.io/ladybug-web/ ) »

[Ladybug Web Solar Calculator Read Me]( #solar-calculator/readme.md )
===

Ladybug seeks accurate, fast and verifiable sources for its solar calculations.

We have looked at the efforts of:  

* [Agafonkin]( http://ladybug-analysis-tools.github.io/ladybug-web/index.html#suncalc-sandbox/readme.md )
* [Bostock]( http://ladybug-analysis-tools.github.io/ladybug-web/index.html#bostock-sandbox/readme.md )
* [Hoffman]( http://ladybug-analysis-tools.github.io/ladybug-web/sonnenverlauf/sonnenverlauf-test-r1.html )
* [NOAA]( http://ladybug-analysis-tools.github.io/ladybug-web/index.html#noaa-sandbox/readme.md )

We have found issues with each one of these efforts.
Therefore we propose a new effort that stands on their shoulders.
Currently there are two calculators. One based on Bostock - the other on NOAA.
They replace the previous SunCalc.js code which has been used in unaltered form.
Currently the Bostck calculater is being used.




## Full screen: [Ladybug Web Solar Calculator Bostock Viewer ]( http://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator/index.html )


## Source code: [Ladybug Web Solar Calculator Bostock R1](  http://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator/ladybug-web-solar-calculator-bostock-r1.js )


## Full screen: [Ladybug Web Solar Calculator NOAA Viewer ]( http://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator/ladybug-web-solar-calculator-noaa-viewer-r3.html )


## Source code: [Ladybug Web Solar Calculator NOAA R2](  http://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator/ladybug-web-solar-calculator-r2.js )

***

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
* Documentation that helps you find further information
	* Provide links to all sources for all calculations
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

The Bostock code contains about twenty lines if impenetrable code
* The NOAA code requires Julian Century, local time in minutes and timezone for each calculation
	* Much archaic style coding 
	* Bostock and Agafonkin use the basic JavaScript Date object - which is simpler and more standard


## Change Log

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


## Issues/Questions

* The NOAA Solar Calculator code is undocumented
	* Finding sources for the algorithms is not easy
	* Is use of Julian Century now archaic with use of modern computers?
* Is it 'altitude' or 'elevation'; - would like definitive, globally-oriented source/reference for current astronomical nomenclature
* Should all calcs be in radians - might save some conversions back and forth?


## Road Map

* find ways of verifying calculations
* Compare NOAA, meeus and StackOverflow methods for accuracy and speed
	* over several thousand years


## Links of interest

* http://www.iau.org/
* http://www.iausofa.org/

* simpler calculation: http://www.geoastro.de/elevaz/basics/meeus.htm
* short definitions: http://www.ephemeris.com/space-time.html


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


* https://en.wikipedia.org/wiki/Orbital_elements
* https://en.wikipedia.org/wiki/Mean_longitude
* https://en.wikipedia.org/wiki/Equation_of_the_center

***

<center>
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; ><img src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f41e.png?v6" ></a>
</center>