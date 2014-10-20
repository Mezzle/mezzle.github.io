---
layout: post
status: publish
published: true
title: RSS, supybot and utf8
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 56
wordpress_url: http://www.sourceguru.net/archives/56
date: !binary |-
  MjAwNy0wNC0xNSAyMjoxMTozNCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNC0xNSAyMToxMTozNCArMDEwMA==
categories:
- Geeky
- Linux
tags: []
comments:
- id: 15926
  author: Wesley
  author_email: supybot@opperschaap.net
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0yOCAxMzoyMToyOSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0yOCAxMjoyMToyOSArMDAwMA==
  content: Thanks, this helped solving my problem as well.
- id: 606529
  author: international movers and packers delhi
  author_email: verenawarren@hotmail.com
  author_url: http://ukdomiciliaryhomecare.com/the-best-recommendation-for-those-promoting-real-estate/
  date: !binary |-
    MjAxNC0wNi0xNCAwNTowODozMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNi0xNCAwNDowODozMSArMDEwMA==
  content: ! "Wow, that's what I was searching for, what a information! present here
    \r\nat this web site, thanks admin of this website."
permalink: rss-supybot-and-utf8
---
<p>So, it seems that the issues I've been having with <a href="http://katapult.kde.org/wiki/Lethargy">Lethargy</a> are because supybot is not by default utf8 compliant. Meaning that it wont pick up RSS feeds that are.</p>
<p><a href="http://www.commandline.org.uk/">Zeth Green</a> came up with the following solution</p>
<blockquote><p>&lt;+zeth&gt; back up that file<br />
&lt;+zeth&gt; sudo cp -a /usr/bin/supybot /root/<br />
&lt;+zeth&gt; you see the line import sys<br />
&lt;+zeth&gt; after that add these 2 line<br />
&lt;+zeth&gt; reload(sys)<br />
&lt;+zeth&gt; sys.setdefaultencoding('utf-8')<br />
&lt;+zeth&gt; then restart Lethargy and see what happens :-)</p></blockquote>
<p>Well, it worked, now if only I could find the supybot bugtracker</p>
<blockquote><p>&lt;+zeth&gt; that is why those Launchpad people have a point<br />
&lt;+zeth&gt; One bugtracker to rule them all</p></blockquote>
<p><a href="http://www.sourceguru.net/archives/16">I totally agree </a></p>
