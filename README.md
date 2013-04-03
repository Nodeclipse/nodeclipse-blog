# blog

[Nodeclipse team blog](https://github.com/Nodeclipse/nodeclipse-blog#blog)

## News

We got **150+** installs in the first week on [Eclipse Marketspace](http://marketplace.eclipse.org/content/nodeclipse)!

Check also [blog itself](https://github.com/Nodeclipse/nodeclipse-blog/blob/master/Blog.md) and 
 Eclipse Node IDE [Hints](https://github.com/Nodeclipse/eclipse-node-ide/blob/master/Hints.md)

## Vision

One-stop shop for Node.js tools.

We can't develop everything at once, but we let you know what are the best things around for Node.js development with Eclipse.

## Features

* Creating default structure for New Node Project and New Node Source File 
* Creating new [Express](http://expressjs.com/) project
* JavaScript Syntax highlighting
* Content Assistant
* NPM support
* Debugging - Breakpoint, Trace, etc... via [Eclipse debugger plugin for V8](http://code.google.com/p/chromedevtools/)
* Markdown (*.md files support; see Enide below) 
* Support for Juno

## Installing

Download site v0.1.8: http://www.nodeclipse.org/updates  
Download site v>0.2 (Nodeclipse-1): http://www.tomotaro1065.com/nodeclipse/updates/
or via [Eclipse Marketspace](http://marketplace.eclipse.org/content/nodeclipse)

## Usage

Check out [great article](http://www.tomotaro1065.com/nodeclipse/) and [watch video](http://tomotaro1065.github.com/nodeclipse/index2.htm).    
For debugging check [Using-Eclipse-as-Node-Applications-Debugger]( https://github.com/joyent/node/wiki/Using-Eclipse-as-Node-Applications-Debugger)

For [Markdown](http://daringfireball.net/projects/markdown/dingus): 

1. Window -> Show View -> Other... -> Markdown
2. Click inside "Markdown HTML Preview" view to refresh rendering
3. (Optional, may be useful because double whitespace is hard line break) 
	Show whitespace character via Preferences > General > Editors > Text Editors : checkbox labeled "Show whitespace characters"

# Developing & Contributing

## Repositories

[Nodeclipse organization](https://github.com/Nodeclipse/) has several [repositories](https://github.com/Nodeclipse/repositories).
 Use star to vote on what feature/repository, you think is most important.

Main effort is Nodeclipse Eclipse plugin. Currently it has 2 repositories:

[https://github.com/Nodeclipse/nodeclipse/](https://github.com/Nodeclipse/nodeclipse/) v0.1.8 by LambGao; update 4 months ago;  
 web-site [http://www.nodeclipse.org/](http://www.nodeclipse.org/)
 
[https://github.com/tomotaro1065/nodeclipse/](https://github.com/tomotaro1065/nodeclipse/) v0.2
 (and expected 0.3) by Tomoyuki Inagaki; in development;  
 web-site [http://www.tomotaro1065.com/nodeclipse/](http://www.tomotaro1065.com/nodeclipse/)

**Versions after 0.3 are expected to go on in [one place](https://github.com/Nodeclipse/).**

This may be source of confusion, but we expect to clone tomotaro1065 repository into [Nodeclipse organization](https://github.com/Nodeclipse/),
and discuss how to merge and continue after 0.3 release. 
<!-- The cause was moving original repository into new GitHub Nodeclipse organization. -->

Currently we focus on collecting ideas, and getting users feedback. 
 For that we promote our project in developers communities and to our friends.
 
We are to come to regular releases in the future. But for now it is about shaping of project.

## Distribution

Update sites:

Download site v0.1.8: <code>http://www.nodeclipse.org/updates</code>  
Download site v>0.2 (Nodeclipse-1): <code>http://www.tomotaro1065.com/nodeclipse/updates/</code>  

Nodeclipse v0.2.0 was [published on Eclipse Marketspace](http://marketplace.eclipse.org/content/nodeclipse) on March 27th 2013.

This button
<a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=759140" title="Drag and drop into a running Eclipse Indigo workspace to install Nodeclipse">
  <img src="http://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png"/>
</a>


#### Enide

[https://github.com/Nodeclipse/eclipse-node-ide](https://github.com/Nodeclipse/eclipse-node-ide) repository (aka Enide)
 is for [distributing](https://raw.github.com/Nodeclipse/eclipse-node-ide/master/EclipseNodeIDE-0.2.p2f) Nodeclipse together with other plugins.

Eclipse distribution called [Node on Eclipse Studio (NES)](https://github.com/Nodeclipse/Node-Eclipse-Studio) is under investigation.

For organization questions, create issue or send [email to dev group](mailto:dev@nodeclipse.org?subject=Nodeclipse-blog - Question
&body=I have pressed link in Nodeclipse-blog). 

*So let us know what you think.*
 
added by Paul Verest, 2013/3/26

## Tested platforms

We don't have goal to test Nodeclipse-1 plugin on all possible [Eclipse distribution](http://www.eclipse.org/downloads/). It just works for us.

Below is list that we know Nodeclipse can run on:

- Eclipse for JavaEE Developers (4.2.2) Juno (Windows x32, x64)
- Eclipse for RCP & RAP Developers (4.2.2) Juno
- Eclipse for Testers (4.2.2) Juno 
- STS 3.1.0.RELEASE, 3.2.0.RELEASE (based on Eclipse 3.8.1, 3.8.2 Juno) 
- JBoss Developer Studio version 6.0.0.GA

*If your work configuration used with Nodeclipse is different, please let us know*

## Roadmap

### 0.3 (April-May 2013)

- Add [Markdown](http://daringfireball.net/projects/markdown/dingus) support via [Markdown Editor plugin for Eclipse]
(http://www.winterwell.com/software/markdown-editor.php) developped by [Daniel Winterstein](http://winterstein.me.uk)  
	Download site: http://winterwell.com/software/updatesite/
- Add JSHInt integration	
- Update template for new project
* Add README.md template
* Add hello-world-server.js
* Add package.json (This is good practice)
* [Publish](http://marketplace.eclipse.org/quickstart) on [Eclipse Marketspace](http://marketplace.eclipse.org/content/nodeclipse)

* [t#3 [Feature Request] allow passing arguments](https://github.com/tomotaro1065/nodeclipse/issues/3)  
* [n#2 on x64 windows doesn't find NodeJS dir automatically](https://github.com/Nodeclipse/nodeclipse/issues/2)

### 0.4 (May-June-July 2013)

- JSquared Editor
- When creating Node project and folder already exists, then add only .project file and don't add 3 files (README.md, hello-world-server.js, package.json)
- Add Express Project in main menu under File -> New (in Node perspective)

### Next

* [t#4 [Low priority enhancement] Option to Run project default module (taken from package.json), 
 when righ-clicking project folder](https://github.com/tomotaro1065/nodeclipse/issues/4)


## Known Issues and Limitations

### Small issues

Nodeclipse has no support for black background color schemes.

## Ideas

Please add your ideas below. 

...

## Contacts
Do not hesitate to contact developers. 
Create issue to appropriate [repository](https://github.com/Nodeclipse/repositories) or send [email to dev group](mailto:dev@nodeclipse.org).
Or skype by ID pverest; or QQ 908781544.

## For Bloggers and Users of Twitter, Flickr, LinkedIn, Weibo etc.

In case you plan to blog or tweet about the Nodeclipse plugin, please use the tags #nodeclipse #enide
 in order to make it easier to find all the comments and pictures. Thanks a lot for telling the world about the project!  
  | 请用#nodeclipse# #enide# 标签微博一下。   
  | Por favor, utilizar etiqueta #nodeclipse #enide   
  | ツイートする時は、＃nodeclipse #enide タグを使用してください。    
  | Bitte benutzen Sie tag #nodeclipse #enide um zu twiten.  

