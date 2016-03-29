[Ladybug Web]( ladybug-web-via-github-api-r1.html )
===

Exploring ways of presenting an overview of the scripts available from Ladybug Web.
The code is fairly stable. The style is still a a very early stage.

Two avenues of user guidance are being explored

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

Their contents of the Read Me file for each script is displayed just under the meta data in each full-width view of each script.
The text is scaled down to 75% of normal size.

