# blog

[Nodeclipse team blog](https://github.com/Nodeclipse/nodeclipse-blog#blog)

## News

We got **150+** installs in the first week on [Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse)!    
nodeclipse-1 moved to [https://github.com/Nodeclipse/nodeclipse-1](https://github.com/Nodeclipse/nodeclipse-1)    
April 10th: We are in TOP100 on Marketplace!  
April 24th: We are in TOP50 on Marketplace!  
1072 installs only through Marketplace client in April.  
May 1st 2013, Adam Schmideg & Formula/400 have blessed Nodeclipse to be new home for CoffeeScript Editor.  
May 3rd 2013, Node Tool Suite aka NTS (Eclipse distribution with Nodeclipse-1 & Enide solution)
is release on [SourceForge.net](http://sourceforge.net/projects/nodeclipse/)  
2013-05-19 Nodeclipse 0.4 is released.  
2013-05-23 There was slow Internet connection, <font size="2">and deny of service ("No repository found" message in Eclipse)
 around period from 2012-05-22 21:00 UTC to 2012-05-23 9:30 UTC. This should be related to cloud provider hosting GitHub pages.
  Please report if you are unable to install.</font> We look carefully.   


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

Download site v0.1.8, v>0.3: <code>http://www.nodeclipse.org/updates</code>  
Download site v>0.2 (Nodeclipse-1): <code>http://www.tomotaro1065.com/nodeclipse/updates/</code>  
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

Main effort is Nodeclipse-1 Eclipse plugin. 
[https://github.com/Nodeclipse/nodeclipse-1](https://github.com/Nodeclipse/nodeclipse-1) v>0.2
 (and expected 0.3) by Tomoyuki Inagaki; in development;  
 web-site 1 [http://www.tomotaro1065.com/nodeclipse/](http://www.tomotaro1065.com/nodeclipse/)  
 web-site 2 [http://www.nodeclipse.org/](http://www.nodeclipse.org/)  

Old repository [https://github.com/Nodeclipse/nodeclipse/](https://github.com/Nodeclipse/nodeclipse/) v0.1.8 by LambGao; update 4 months ago  
 
Currently we focus on collecting ideas, and getting users feedback. 
 For that we promote our project in developers communities and to our friends.
 
We are to come to regular releases in the future. But for now it is about shaping of project.

## Distribution

#### Nodeclipse-1 Eclipse plugins

Update sites:

Download site v0.1.8: <code>http://www.nodeclipse.org/updates</code>  
Download site v>0.2 (Nodeclipse-1): <code>http://www.tomotaro1065.com/nodeclipse/updates/</code>  

Nodeclipse v0.2.0 was [published on Eclipse Marketspace](http://marketplace.eclipse.org/content/nodeclipse) on March 27th 2013.

Drag and drop this
<a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=759140" title="Drag and drop into a running Eclipse Indigo workspace to install Nodeclipse-1">
  <img src="http://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png"/>
</a>
into running Eclipse (for Indigo, Juno or Kepler).

#### Enide

[Eclipse Node.js IDE project (aka Enide)](https://github.com/Nodeclipse/eclipse-node-ide) 
 is for[distributing](http://marketplace.eclipse.org/content/enide-eclipse-nodejs-ide/click) Nodeclipse together with other plugins.  
See it on [Marketplace](http://marketplace.eclipse.org/content/enide-eclipse-nodejs-ide)

#### NTS

Node Tool Suite aka NTS (Eclipse distribution with Nodeclipse-1 & Enide solution)
is available on [SourceForge.net](http://sourceforge.net/projects/nodeclipse/)

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
- eclipse-platform-4.3M6
- Aptana Studio (with background color changed, see [#15](https://github.com/Nodeclipse/nodeclipse-1/issues/15) )
- Zend Studio 10.0

### Testing 0.4

- on Indigo and Juno ( on on Ubuntsu and Mac OS X 10.6 )
- 1) GGTS 3.1, based on Eclipse 3.8 (on Windows)
- 2) Eclipse for RCP and RAP Developers Juno SR2 (on Windows)
- 3) STS 3.2 Eclipse 3.8.2) (on Windows)
- 4) STS 2.9.1 (Eclipse 3.7.2) (on Windows)
- 5)  Eclipse for JavaEE Developers (4.2.2) Juno (on Windows)

*If your work configuration used with Nodeclipse is different, please let us know*

## Roadmap

See [Nodeclipse-1 roadmap](https://github.com/Nodeclipse/nodeclipse-1/#roadmap)

## Known Issues and Limitations

### Small issues

Nodeclipse has no support for black background color schemes. [#15](https://github.com/Nodeclipse/nodeclipse-1/issues/15)

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

