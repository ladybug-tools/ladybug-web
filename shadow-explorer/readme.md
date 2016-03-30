
<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/ladybug-web/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( http://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( http://ladybug-analysis-tools.github.io/ladybug-web/ ) »


[Ladybug Web Shadow Explorer Read Me]( #shadow-explorer/readme.md )
===


2016-03-22

Very R1.

The idea is to have a core or 'engine' that other scripts can call and embed in an `iframe`.
The engine is here: [Ladybug Web Shadow Core]( http://ladybug-analysis-tools.github.io/ladybug-web/shadow-core/ ).

The calling scripts tend to carry out fairly specialized tasks.
There can be communication between the calling scripts when needed.

The general strategy is to be something like node.js or jquery - a small core that accepts plugins of various types.

Communication between the calling scripts and the core is currently via location hash.
Often these URL strings are called 'permalinks'.

As and when needed it could also be via JSON or even .INI files or - for the fastest operation - via the iframe.contentWindow method.

Currently, he following parameters may be used to control the script. 
Only the parameters that need changing need to appear on the location.hash
Designated times for persistent shadows to be added. 
Also ability to load multiple projects.
Any others?

* file name
* latitude
* longitude
* year
* month
* date
* hours
* minutes
* placeMap.material.opacity
* project.rotation.x
* project.rotation.y
* project.rotation.z
* project.position.x
* project.position.y
* project.position.z
* project.scale.x
* project.scale.y
* project.scale.z
* camera.position.x
* camera.position.y
* camera.position.z
* controls.target.x
* controls.target.y
* controls.target.z



## Issues / To Do

* There is a big need for better models
* Rendering quality is still low/primitive
* Need for persistent shadows for designated time periods
* Import JSON 4 files
* Add materials




