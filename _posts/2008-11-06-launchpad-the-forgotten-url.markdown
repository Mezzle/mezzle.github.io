---
layout: post
status: publish
published: true
title: ! 'Launchpad: The forgotten URL'
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 172
wordpress_url: http://www.sourceguru.net/?p=172
date: !binary |-
  MjAwOC0xMS0wNiAxMjozNjoyOCArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMS0wNiAxMTozNjoyOCArMDAwMA==
categories:
- Personal
- Rants
tags: []
comments:
- id: 29290
  author: sandsmark
  author_email: sandsmark@samfundet.no
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wNiAyMTo0MzoyOSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNiAyMDo0MzoyOSArMDAwMA==
  content: That's what you get for using a closed source, proprietary solution :p
- id: 29294
  author: h2o
  author_email: kigurai@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wNiAyMjo0NzozMSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNiAyMTo0NzozMSArMDAwMA==
  content: ! "I have LP as my OpenID provider for SO, and I can still login and use
    it as normal.\r\n\r\nBut I have always specified \"https://login.launchpad.net\"
    instead of the specific LP user URL."
permalink: launchpad-the-forgotten-url
---
<p>A site I use quite regularly is <a href="http://www.stackoverflow.com/">Stack Overflow</a> - a great, community driven site for programmers.</p>
<p>At this site, you get rep when you post good answers, or good questions, which are voted up by the others on the site.</p>
<p>Imagine my dismay, when, this morning, I tried to <a href="http://launchpad.net/~mez">login using the normal URL that I use for OpenID logins</a>, only to find that the URL that it is delegated to has changed.</p>
<p>"What does this mean?" I might hear you asking.</p>
<p>Well, it means that anyone who's using Launchpad as their OpenID Provider (OP) doesn't have their openID assosciated to them anymore. For me, this means I can no longer access my stackoverflow account and my reputation starts at 1 again.</p>
<p>*sigh* - while I can understand that LP's OpenID implementation is still in Beta, I don't expect changes that completely change the way the system works. It's paramount to going through the system and changing everyone's username.... :(</p>
<p>I'm pretty annoyed at this, and have <a href="https://bugs.launchpad.net/bugs/294634">filed a bug about it.</a></p>
<p>Edit: It seems they've removed the delegation on the pages for users, and This is why it's happening...</p>
