<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/ladybug-web/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/ladybug-web/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( http://ladybug-analysis-tools.github.io/ ) » [Ladybug Web ]( http://ladybug-analysis-tools.github.io/ladybug-web/ ) »

[Ladybug Web Project Explorer Read Me]( http://ladybug-analysis-tools.github.io/ladybug-web#project-explorer-readme.md )
===


## Mission and Vision

The idea here is to explore techniques for presenting an overview of the scripts available on Ladybug Web.

The code is fairly stable. The style is still at a very early stage.

Mission statements

* Provide a fast and easy-to-navigate visual overview of numerous apps
	* Some big, some small. Some fresh, some stale
* Display latest version of scripts as full interactive apps in 3D
	* Disable certain features automatically to allow the page to be scrolled both on computers and mobile devices
* Identify quickly what's new and what's hot
* Seamless two-way transition from read me files and source code to apps and web pages
* Write once, read many. Write something once and have the text appear where and when needed
* No 'webmaster' needed. Home pages update themselves
* No teaching/learning needed. Ability to copy and paste templates is all that's needed
* No server required. Works on static servers such as GitHub pages


## Features

* Uses GitHub API to obtain up-to-date list of files
	* GitHub API rate limits are not abused because processing is done client-side
	* Each individual client has their own separate quota
* General mechanism is quite straightforward
	* If a folder has a file titled 'index.html' then the folder is added to the list of items of interest 
	* Otherwise the folder is ignored
* The index file points to the script in the folder that should be run at load time
* If a folder has a readme.md' file than that file is read
	* Contents converted from Markdown to HTML and displayed
* If a script of interest has HTML meta tags for description, keywords and data then that information is displayed
* Apps are displayed in iframes
	* In order to keep things moving fast, at any given time, only three iframes are in active use
	* Iframes only become active once they scroll into view
 


## Current Effort

Two avenues of user guidance are being explored - 'All-in-one' and 'Read Me'. 
Both types are exhibited below - just beneath the full-width app 'splash screen'.

### All-In-One

Documentation is kept inside the HTML files.
Information is stored in standard HTML meta tags
Currently all the files have tags for:

* Description
* Key words
* Date

Their contents are displayed just under each full-width view of each script

#### Cons

* This can cause file bloat and slow down the process of loading files.

#### Pros

* Everything - html, css, JavaScript and documentation is kept together in one place in a single file
* Once downloaded and code is compiled has no affect on performance
* Might help with search engine optimization
* Markdown may be embedded in the meta tags


### Read Me Files

The more traditional way of documenting things - using external read me files.

The contents of the Read Me file for each script is displayed just under the meta data in each full-width view of each script.
The text is scaled down to 75% of normal size and enclosed in a box with red border.

## Current thinking

The all-in-one system is fine for small amounts of text, but becomes very cumbersome when there are more than a few dozen words.
The current work process is creating and maintaining fairly small meta tag content and putting most content in the read me files.

## Issues

* Allowing for easy scrolling means to not allow full width apps to get access to the scroll wheel or touch interactions
	* Preventing such interactions is a work in progress
* For experienced users who just want to get to a particular folder there is far too much scrolling involved
	* Something like a simple, text 'table of contents' might help here
* The current rev shows the coolness of the scripts, but does little to show you how short and simple the code is
* Needs indicators - text or charts - as to where the action is

## Road Map / To Do List

* Access RSS feed and display summary of latest commits
* Add section on coding style


## Change Log


### 2016-05-14

* Shadow JSON ~ many small updates

### 2016-04-03

* Project Explorer read me created and content moved here from main read me