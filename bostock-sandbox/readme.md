<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/ladybug-web/#bostock-sandbox/readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/bostock-sandbox/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( http://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( http://ladybug-analysis-tools.github.io/ladybug-web/ ) »

[Bostock Solar Calculator Read Me]( http://ladybug-analysis-tools.github.io/ladybug-web/index.html#bostock-sandbox/readme.md )
===

Mike Bostock's Solar Calculator. Mike is the maintainer for D3 - a very pewerful 2D JavaScript visualization library for HTML and SVG.
Mike's code is derived from the NOAA Solar Calculator. The code is is shorter and mostly simpler than the NOAA code.
The discrepancies with NOAA code are smaller than the Agafonkin code
In particular, his code only asks for a JavaScript Date object - whereas the NOAA code asks for Julian century, local time, and time zone.

Unfortunately for Ladybug, Mike's code requires D3 - and Ladybug Web discourages dependencies on multiple JavaScript libraries.
We are trying to remove the dependency - and have had some success.
See work discussed in the [Ladybug Web Solar Calculator Read Me ]( http://ladybug-analysis-tools.github.io/ladybug-web/#solar-calculator/readme.md )

## Full screen: [Bostock Solar Calculator Original]( bostock-solar-calculator-original.html )

## Full screen: [Bostock Solar Calculator Viewer R5]( bostock-solar-calculator-viewer-r5.html )

* Viewer displays most of Bostocks calculations
* [Core]( ./bostock-solar-calculator-r2.js ) is partially re-written version of Bostock's code

## Features

* Generally simpler than NOAA code
* Has some good insight as to where Ladybug Web Solar Calculator could simplify
* Determines user location and time automatically


## Issues

* Requires [D3]( https://d3js.org/ ) for certain date calculations
	* Unwanted external dependence
	* D3 date method is used only once in calculations essential to Lasybug Web - but this single reference is embedded in a highly complex and opaque line of code: 
	* L24: var azimuth = ((date - d3.time.day.utc.floor(date)) / 864e5 * pi2 + equationOfTime( centuries ) + λ) % pi2 - pi;
* Uses UTF-8 encoding - which is nice - but then embeds Greek characters - which is also cool 
	* But this makes it all even more remote and abstract for the layperson



## Links of interest

* https://bost.ocks.org/mike/
* https://bl.ocks.org/mbostock
* https://bl.ocks.org/mbostock/c5504ab3cd25f93af26a
* https://bl.ocks.org/mbostock/7784f4b2c7838b893e9b
* Mike Bostock's Block 7784f4b2c7838b893e9b [Solar Path]( http://bl.ocks.org/mbostock/7784f4b2c7838b893e9b#solar-calculator.js ) 
* Original version: [solar-caculator.js]( https://gist.githubusercontent.com/mbostock/7784f4b2c7838b893e9b/raw/01ec896bf379c960c4cdb27150986ae5dffd4905/solar-calculator.js )


## Updates

### 2016-04-03

* Add bostock-solar-calculator-viewer-r5.html
* Add bostock-solar-calculator-r2.js
* Continue to find issues
* Update this readme


### 2016-03-29

* Files renamed
* Read Me added to
* Meta tag content updated
