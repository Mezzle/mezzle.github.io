---
layout: post
status: publish
published: true
title: iFolder on Ubuntu
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 10
wordpress_url: http://www.sourceguru.net/archives/10
date: !binary |-
  MjAwNi0wMi0xNCAwMjozOTowMiArMDAwMA==
date_gmt: !binary |-
  MjAwNi0wMi0xNCAwMTozOTowMiArMDAwMA==
categories:
- Geeky
- Linux
tags: []
comments:
- id: 4
  author: Marcus
  author_email: senectus@gmail.com
  author_url: http://www.modmeup.net
  date: !binary |-
    MjAwNi0wMi0xNCAwMjo1Mzo1NCArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMi0xNCAwMTo1Mzo1NCArMDAwMA==
  content: ! "Chin up mate.. Guys like me are _really_ counting on guys like you!\r\nGreat
    work :-D (remind me to buy you a beer at next years linconf)"
- id: 5
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwNi0wMi0xNCAwMzoyNDo1MCArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMi0xNCAwMjoyNDo1MCArMDAwMA==
  content: ! "It's really a shame I probably wont be there... unless its in England...
    \r\n\r\nAll this \"volunteering\" malarky doesnt earn me enough to go to foreign
    climes... except if I get sponsored :D"
- id: 697971
  author: handicraft viet nam
  author_email: brendacuriel@yahoo.com
  author_url: http://forum.unim.org/profile.php?id=14825
  date: !binary |-
    MjAxNC0wOS0wNyAyMzowMzowNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wNyAyMjowMzowNiArMDEwMA==
  content: ! "Outstanding story there. What happened after? Good luck!\r\n\r\n\r\nHere
    is my web page ... <a href=\"http://forum.unim.org/profile.php?id=14825\" rel=\"nofollow\">handicraft
    viet nam</a>"
permalink: ifolder-on-ubuntu
---
<p>Ever since I first got involved in iFolder - I've never managed to get Simias to build properly inside a chroot.</p>
<p>A sense of overwhelming achievement came across me today when I finally had this happen</p>
<blockquote><p><code> dpkg-genchanges: including full source code in upload<br />
dpkg-buildpackage: full upload (original source is included)<br />
Copying back the cached apt archive contents<br />
-> unmounting dev/pts filesystem<br />
-> unmounting proc filesystem<br />
Current time: Tue Feb 14 00:22:51 GMT 2006<br />
pbuilder-time-stamp: 1139876571<br />
-> cleaning the build env<br />
-> removing directory /scratch/cache/pbuilder/build//21686 and its subdirectories</code></p></blockquote>
<p>Ok, so everything may not be cool - I've just realised there are some thing in libsimias0 that should be in libsimias-dev - but hey - that's the smallest issue I've ever had.</p>
<p>You have NO idea how ... relieved this has made me feel. To finally have an actual fully built simias package. I'm really hoping that this is the final step - that I don't come across anything else. Because, for those of you who've been following my struggle with iFolder over the past <em>x</em> months will know it hasn't been a pretty one. Much to the fact that the Novell Code/my packaging have always been at a stage where they disagree with each other... but now they finally agree... now - onto iFolder itself... which is currently building nicely... lets just hope it'll build in a chroot ;)</p>
<p>*crosses fingers and hopes*</p>
