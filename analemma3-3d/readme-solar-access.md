
Solar Access Read Me
====

Wikipedia: [Solar Access]( https://en.wikipedia.org/wiki/Solar_access )

> Solar access is the ability of one property to continue to receive sunlight across property lines without obstruction from another’s property (buildings, foliage or other impediment). Solar access is calculated using a sun path diagram. Sun is the source of our vision and energy. Its movements inform our perception of time and space. Access to sun is essential to energy conservation and to the quality of our lives.

> Solar access is differentiated from solar rights or solar easement, which is specifically meant for direct sunlight for solar energy systems, whereas solar access is a right to sunlight upon certain building façades regardless of the presence of active or passive solar energy systems

## Mission

To supply free, open source online apps to help you measure and display Solar Access for any object or structure at any latitude and longitude and any data and time.


### Features

Givens

* Eleven light sources - the positions of the Sun from 8 am to 6 pm
* Any number of structures/models in 3D
* Any latitude / longitude
* Any day of the year
* A ground area divided into a 512 x 512 grid of triangular faces
* The ground may be of any typical terrain-like shape 

calculate

For every cell in the ground, for each of the eleven suns, determine if any of the 3D structures intersects the path between current Sun and current cell.

Color each cell according to the number of intersections with white indicating no intersections and dark blue indicating eleven intersections

## To Do


* 2017-07-31 ~ Export Solar Access output as JSON and PNG files
* 2017-07-31 ~ Make it faster!
* 2017-07-31 ~ Copy results to a new plane - so you can see ground and Solar Access data




## Change Log


_The following are early notes when Analemma 3D was just starting. In the future changes will be noted in the main Analemma 3D file unless very Solar Access specific_


### 2017-08-02 ~ 

Dealt with

* 2017-07-31 ~ fix the logic issues ~ maybe something as simple as reversing x and z ~ might be backwards

### 2017-07-15 ~ Theo

* 2017-07-14 ~ Why are some faces at the back of an object in white?
  * 2017-07-15 ~ fixed - only count one intersection per sun
* Simplify the code

### 2017-07-14 ~ Theo

* Fork to Glitch
* Add full menu
* Display results from five geometries

### 2017-07-13 ~ Theo

* Face coloring implemented
* A number of issues resolved - much learned in process
* generally: looking good


### 2017-07-12 ~ Theo

* Correct number of intersections being found
* Vertex colors added
* Added standard Ladybug colors


### 2017-07-11 ~ Theo

* Started finding intersections
* Added testing code and display 
