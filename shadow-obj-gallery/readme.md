
<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-obj-gallery/index.html#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/tree/gh-pages/shadow-obj-gallery/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( https://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( https://ladybug-analysis-tools.github.io/ladybug-web/ ) »


[Ladybug Web Shadow OBJ Gallery Read Me]( index.html#readme.md )
===

_Use the menu on the left to call up files and adjust the date and time. Enjoy watching the shadows move as the hours go by._


## full screen: [Ladybug Web Shadow OBJ Gallery]( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-obj-gallery/ )

The idea is to have a core or 'engine' that other scripts - like the one you ae usung now - can call and embed in an `iframe`.
The engine is here: [Ladybug Web Shadow OBJ Core]( https://ladybug-analysis-tools.github.io/ladybug-web/shadow-obj-core/ ).

The calling scripts tend to carry out fairly specialized tasks.
There can be communication between the two scripts when needed.

The general strategy is to be something like node.js or jquery - a small core that accepts plugins of various types.

Communication between the calling scripts and the core is currently via location hash.
Often these URL strings are called 'permalinks'.

As and when needed it could also be via JSON or even .INI files or - for the fastest operation - via the iframe.contentWindow method.

Currently, the following parameters may be used to control the script. 
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



## Change Log


### 2016-05-17

* Many changes
* Many issues with move to Ladybug Web Solar Calculator
* Needs it;s own original read me!


### 2016-04-08

* Add link to Shadow Opener to every menu item
* Add messaging from core
* Big revision is in the works elsewhere


### 2016-04-04

* Add ladybug-web-shadow-explorer-bostock-json-r1.html
* Adds sun and position read out
* Code clean-up and multiple small fixes

### 2016-03-22

Very R1.

***

<center title="dingbat" >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; ><img src="https://ladybug-analysis-tools.github.io/images/ladybug-logo.png" width=48 ></a>
</center>