<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-noaa/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/solar-calculator-noaa/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-analysis-tools.github.io/ladybug-web/ ) »


[NOAA Sandbox Read Me]( index.html#readme.md )
===

## [Ladybug Web NOAA Sandbox]( http://ladybug-analysis-tools.github.io/ladybug-web/solar-calculator-noaa/ )

Ladybug seeks accurate, fast and verifiable sources for its solar calculations.
The National Oceanic and Atmospheric Administration is one such source.
Its [NOAA Solar Calculator]( http://www.esrl.noaa.gov/gmd/grad/solcalc/index.html ) has been published and updated for a number of years.

## Original [NOAA Solar Calculator]( http://www.esrl.noaa.gov/gmd/grad/solcalc/index.html )

### Primary JavaScript routine used to perform calculations [main.js]( http://www.esrl.noaa.gov/gmd/grad/solcalc/main.js )

### Issues

* Refers to 'azimuth' and 'elevation' rather than 'azimuth' and 'altitude'
* Does not provide negative elevations
* Requires the existence of specific HTML tags with specific IDs in order to operate
	* Too many things like this: document.getElementById("eqtbox").value = ""
	* Makes the source difficult to use generically
* Variable names not coordinated and often devoid of meaning
* Function names not coordinated
* Generally styled and coded in a slightly archaic fashion
* Provides many functions with useful results but provides no easy access to those functions


### Features

* Much simplified version of NOAA Solar Calculator web page
	* Allows data entry and update with a minimal interface
	* helps with debugging
* Loads the NOAA Solar Calculator [main.js]( http://www.esrl.noaa.gov/gmd/grad/solcalc/main.js )
* Displays the name of most functions along with the results returned by the function and and their units
* Results from this script will be used to verify results produced by various Ladybug Web scripts 
	* See [Calculations Compare]( http://ladybug-analysis-tools.github.io/ladybug-web/calculations-compare/ )






