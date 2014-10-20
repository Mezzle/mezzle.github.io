---
layout: post
status: publish
published: true
title: A plea for help.
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 87
wordpress_url: http://www.sourceguru.net/archives/87
date: !binary |-
  MjAwNy0wOS0xMSAyMzozNDowMCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wOS0xMSAyMjozNDowMCArMDEwMA==
categories:
- Geeky
- Linux
- Ubuntu
tags: []
comments:
- id: 12982
  author: Tom Haddon
  author_email: tom@greenleaftech.net
  author_url: http://www.greenleaftech.net
  date: !binary |-
    MjAwNy0wOS0xMiAwMDowMTowNCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMSAyMzowMTowNCArMDEwMA==
  content: https://bugs.edge.launchpad.net/ubuntu/ source/gxine/ bug/130218
- id: 12983
  author: Qhartman
  author_email: qhartman@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wOS0xMiAwMDozNTozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMSAyMzozNTozOCArMDEwMA==
  content: I had a similar problem recently that was corrected by changing the output
    surface that Xine used. Apparently some change in my video card drivers made xv
    output stop working. Changing the Xine settings really just worked around a symptom
    of the problem, but since that seems to be the only thing that (for me) was negatively
    affected... I'd give you more details, but that was on a mahcine at home, and
    I'm at work right now...
- id: 12987
  author: Dread Knight
  author_email: dk.vali@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wOS0xMiAwNToxMzoxNSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMiAwNDoxMzoxNSArMDEwMA==
  content: ! 'Disable the desktop effects (if you still have them).


    I have the compizfusion thing now and it seems that the "video" plugin is not
    working well... we''ll have to wait for a while to get fixed.'
- id: 13001
  author: diel
  author_email: djlangton@googlemail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wOS0xMiAxMjowNjowOCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMiAxMTowNjowOCArMDEwMA==
  content: Had same issues - do you have an intel graphics chip?  Gutsy changed from
    the i810 driver to the intel driver. I had to change the output plugins for most
    of the players and then they worked fine.  If available in your media player,
    OpenGL output works nicely with this new driver.
- id: 13003
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwNy0wOS0xMiAxMjoyNDoxNiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMiAxMToyNDoxNiArMDEwMA==
  content: ! "QHartman, I cant find any setting for me that works in Xine.\r\n\r\nDread
    Knight, I'm not running Compiz... though I might try disabling AIGLX...\r\n\r\n\r\ndief,
    nope - ati drivers... and well, if I use opengl output... I get a nice error\r\n\r\n<img
    src=\"http://www.sourceguru.net/files/xineissues.jpg\" />"
- id: 13014
  author: coolvibe
  author_email: coolvibe@ninthcircle.xs4all.nl
  author_url: ''
  date: !binary |-
    MjAwNy0wOS0xMyAwNzozNjo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMyAwNjozNjo1NCArMDEwMA==
  content: Use plain x11 output as a fallback. If you can do desktop effects, your
    video card will be fast enough to handle that.
- id: 13018
  author: Meneer R
  author_email: Ralf.Nieuwenhuijsen@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wOS0xMyAyMzowOToyNiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMyAyMjowOToyNiArMDEwMA==
  content: ! "Just a guess: you have an nvidia card and xine defaults to opengl\n\nOpenGL
    in apps when running compiz fusion does not work correctly because the xsever
    abi is different from the nvidia-driver's abi.\n\nIt has to do with a bugfix to
    make xserver work on ubuntu-mobile.\nBut it breaks with the current nvidia-driver.
    \n\nYou should try glxgears .. see if that runs.."
permalink: a-plea-for-help
---
<p>It seems that since I've started using gutsy, my PC does not want to play (well, display) any video files played through xine. Which is very very very very annoying. It worked fine originally in fesity, then, when I upgraded to gutsy, the video I wanted to watch decided not to play (and OGG/Theora video)</p>
<p>Then, due to issues, It still won't play. I've tried everything, adn xine itself isn't thtrowing up anything in the log that's making me think it's an issue with that.</p>
<p>Does anyone have any ideas, or would anyone be able to tell me where to look to sort this out? I've been all over my xorg.conf, the Xine settings, all to no avail.</p>
<p>Any help would be muchly appreciated! This seems to be one of the only problems I'm, having with gutsy atm!)</p>
