---
layout: post
status: publish
published: true
title: Over-Zealous Webserver
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 11
wordpress_url: https://www.sourceguru.net/archives/11
date: !binary |-
  MjAwNi0wMi0xNCAyMDozOTowOSArMDAwMA==
date_gmt: !binary |-
  MjAwNi0wMi0xNCAxOTozOTowOSArMDAwMA==
categories:
- Personal
- Geeky
- Rants
- Rants
tags: []
comments:
- id: 6
  author: Michael Hofmann
  author_email: mh21@piware.de
  author_url: ''
  date: !binary |-
    MjAwNi0wMi0xNCAyMjoyMDoxMiArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMi0xNCAyMToyMDoxMiArMDAwMA==
  content: Could be that "Options -MultiViews" in .htaccess would do the trick (http://httpd.apache.org/docs/2.0/mod/core.html#options).
    But I've never encountered that problem myself.
- id: 7
  author: Stuart Langridge
  author_email: sil@kryogenix.org
  author_url: http://www.kryogenix.org/
  date: !binary |-
    MjAwNi0wMi0xNCAyMjoyNzo0OCArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMi0xNCAyMToyNzo0OCArMDAwMA==
  content: ! "I'm not sure what it is that's making the webserver do the automatic
    \"correction\", but it might be that MultiViews is turned on. Try \"Options -MultiViews\"
    in .htaccess, which should turn it off if you're allowed to do so (and if that's
    what's causing the problem).\r\nAlternatively, it might be mod_speling (http://httpd.apache.org/docs/2.0/mod/mod_speling.html)
    that's doing it. If it is, then \"CheckSpelling Off\" in .htaccess will disable
    that.\r\nIf it's neither of those, I don't know what it is :)"
- id: 8
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwNi0wMi0xNSAwNzo0Mzo1OCArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMi0xNSAwNjo0Mzo1OCArMDAwMA==
  content: Thankyou Aq! It seems it was the mod_speling that was causing the problems
    :D now I can go about using my webserver properly
- id: 295925
  author: A charmed life
  author_email: ykmmwf@gmail.com
  author_url: http://bbs.5156fun.com
  date: !binary |-
    MjAxMy0wMy0yMiAwNDozNDo0MCArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMy0yMiAwNDozNDo0MCArMDAwMA==
  content: I did however expertise a few technical points using this site, as I experienced
    to reload the site many times previous to I could get it to load properly. A charmed
    life http://bbs.5156fun.com/forum.php?mod=viewthread&amp;tid=54045
- id: 694990
  author: webinar wiki
  author_email: lazaroeklund@gmail.com
  author_url: http://vischeck.com/vischeck/vischeckUrl=.php?origUrl=http://username2374230v.sosblogs.com
  date: !binary |-
    MjAxNC0wOS0wNSAwMDozMToxOCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wNCAyMzozMToxOCArMDEwMA==
  content: ! "It's a shame you don't have a donate button! I'd without a doubt \r\ndonate
    to this excellent blog! I suppose for now i'll settle for book-marking and adding
    your \r\nRSS feed to my Google account. I look forward to new updates and will
    share this website with my Facebook group.\r\nChat soon!\r\n\r\nmy homepage ...
    <a href=\"http://vischeck.com/vischeck/vischeckUrl=.php?origUrl=http://username2374230v.sosblogs.com\"
    rel=\"nofollow\">webinar wiki</a>"
permalink: over-zealous-webserver
---
<p>So, not too long ago - I moved to a different webhosting provider, thinking it'd provide me with everything I needed and more.</p>
<p>Now, I'm sort of wishing I hadn't. It's getting to the point where I'm just thinking that the support people are complete and utter dumbasses.</p>
<p>Now, to start off, I used to use Bazaar ... which is a great Revision Control System - though slightly ancient. Well - back in those times - I was using webdav to post my stuff to my webserver!</p>
<p>Great you might say, except for the fact that to use webdav I had to use my main FTP login. Not good... for security reasons. Meaning I'd have to find another way - or setup webdav slightly differently. So - going onto the support site, I looked through everything, and it seemed that I'd be able to use webdav with Frontpage extensions enabled, using the username and password for that. Did that work? no... so I email support, telling them my situation, the problems, how to get round them usually, what wasn't working, exact errors, debugging info etc. What do they do? send me to the same thing I read before. So I email them back telling them that I've read all that, and I've tried it and it doesn't work, and that I'd actually told them that in the previous email that I'd done so. I get a reply back sending me to random stuff that has nothing to do with webdav at all.</p>
<p>So, I give up on that line.</p>
<p>I then start using Bazaar-NG - hoping that the next generation stuff would be useful for me. After managing to set it up and get it all running over the slow sftp connection provided... I then get people reporting that they can't get the archive. After a lil chat with the bzr people, I finally find out it's because my webserver is being over zealous - for a file called bla.bla.bla.sig that doesn't exist, it's returning an error 300 saying "bla.bla.bla.sig doesnt exist, but bla.bla.bla does"... meaning that Bazaar-NG doesnt know what to do... and falls over.<br />
Yay I say to myself. Yay.</p>
<p>I've just emailed support asking if they know how to switch that off... because technically it can be a security<br />
risk. If anyone knows - please tell me! It has to be done through a .htaccess though..</p>
<p>*sighs* lets hope the fact that this is on a couple of planets saves my ass and gets me through<br />
this nightmare, because I doubt that the support will come up with anything useful</p>
