[Ladybug Web Project Explorer]( ladybug-web-via-github-api-r1.html )
===

_First thing: scroll down the page and have a look at the projects._
_Then come back here and read about what you have seen._


## Mission and Vision

Explore techniques for presenting an overview of the scripts available on Ladybug Web.

The code is fairly stable. The style is still at a very early stage.

* Provide a fast and easy-to-navigate visual overview of numerous apps
* Display latest version of scripts as full interactive apps in 3D
	* Disable certain features automatically to allow the page to be scrolled both on computers amd mobile devices
* Identify quickly what's new and what's hot
* Seamless two-way transition from read me files and source code to apps and web pages
* Write once, read many. Write something once and have the text appear where and when needed
* No 'webmaster' needed. Home pages update themselves
* No teaching/learning needed. Ability to copy and paste templates is all that's needed
* No server required. Works on static servers such as GitHub pages


## Features

* Uses GitHub API to obtain up-to-date list of files
	* GitHub API rate limits are not abused because pocessing is done client-side and each individual client has their own separate quota
* If a folder has a file titled 'index.html' then the folder is added to the list of items of interest 
	* Otherwise the folder is ignored
* The index file pints to the script in the folder that should be run at load time
* If a folder has a readme.md' file than that file is read, the contents converted from Markdown to HTML and displayed
* If a script of interest has HTML meta tags for description, keywords and data then that information is displayed
* In order to keep things moving fast, at any given time, only three iframes are in active use
	* Iframes only become active once they scroll into view
 


## Current Effort

Two avenues of user guidance are being explored:

## All-In-One

Documentation is kept inside the HTML files.
Information is stored in standard HTML meta tags
Currently all the files have tags for

* Description
* Key words
* Date

Their contents are displayed just under each full-width view of each script

### Cons

* This can cause file bloat and slow down the process of loading files.

### Pros

* Everything - html, css, JavaScript and documentation is kept together in one place in a single file
* Once downloaded and code is compiled has no affect on performance
* Might help with search engine optimization
* Markdown may be embedded in the meta tags


## Read Me Files

The more traditional way of documenting things.

The contents of the Read Me file for each script is displayed just under the meta data in each full-width view of each script.
The text is scaled down to 75% of normal size.

