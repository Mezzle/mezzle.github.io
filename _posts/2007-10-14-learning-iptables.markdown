---
layout: post
status: publish
published: true
title: Learning IPTables
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 94
wordpress_url: http://www.sourceguru.net/archives/94
date: !binary |-
  MjAwNy0xMC0xNCAwMDozMzo0NyArMDEwMA==
date_gmt: !binary |-
  MjAwNy0xMC0xMyAyMzozMzo0NyArMDEwMA==
categories:
- Geeky
- Linux
tags:
- radio amarok
- iptables
- Linux
- firewall
comments:
- id: 13843
  author: Mikkel HÃ¸gh
  author_email: mikkel@hoegh.org
  author_url: http://mikkel.hoegh.org
  date: !binary |-
    MjAwNy0xMC0xNCAwOTozMDoxMSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0xNCAwODozMDoxMSArMDEwMA==
  content: ! "A piece of advice - use Shorewall: http://shorewall.net\r\n\r\nI was
    in the same situation as you a few years back, and although IPtables is not hard
    to learn, a ruleset quickly becomes unmanageable. Shorewall allows you to use
    normal configuration files and is much easier to set up - but still allows me
    to use all of IPtables' strength."
- id: 13844
  author: Segedunum
  author_email: dav22syd@aol.com
  author_url: http://ponsaelius.blogspot.com/
  date: !binary |-
    MjAwNy0xMC0xNCAxMTo1Njo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0xMC0xNCAxMDo1Njo1NCArMDEwMA==
  content: Yep. I'm certainly familiar with IP tables, but quite frankly, I can't
    be bothered these days. Shorewall makes it much easier, and it's a whole lot more
    logical to be able to say "I want to give this network access to this network"
    in a config file.
- id: 444185
  author: Plus belle la vie
  author_email: alannahaugen@yahoo.com
  author_url: http://plusbellelaviee.wordpress.com/2014/02/12/plus-belle-la-vie-episode-2429-hd-stream-gratuit-2/
  date: !binary |-
    MjAxNC0wMi0xNCAxNDo1NjoyNyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMi0xNCAxNDo1NjoyNyArMDAwMA==
  content: ! "I know this if off topic but I'm looking into starting my own weblog
    \r\nand was wondering what all is needed to get set up?\r\nI'm assuming having
    a blog like yours would cost a pretty \r\npenny? I'm not very internet savvy so
    I'm not 100% certain.\r\nAny suggestions or advice would be greatly appreciated.\r\nAppreciate
    it"
permalink: learning-iptables
---
<p>Generally, I'm pretty lax when it comes to Firewalls in Linux, for the simple fact that I use kubuntu/ubuntu, which opens no ports by default. So any open ports on the system, I generally know about.</p>
<p>Anyway, as I've recently had a new server setup for <a href="http://www.radioamarok.com/">Radio Amarok</a> (many thanks to <a href="http://www.bitfolk.com/"><u><em>BitFolk</em></u></a> for this, who have provided this service for us) and I knew that it would be something that's going to be in the public eye, I thought that I better get a firewall up and running</p>
<p>So yes, I've been learning how to use Iptables correctly, and having to learn more about how TCP/IP works. I knew the basics, but actually sitting down and learning more about it is definitely interesting. Though, I've still not much idea on some issues, like why Aaron Krill's ISP can't route him to the Radio Amarok server (Andy Smith tried explaining - but I still had no idea what was going on!)</p>
<p>On another note, Radio Amarok is still looking for help. So if you have anything to offer (we're looking for sponsors, artists, DJs, and web developers/designers (and at some point we'll be looking for a sysadmin)), so if you have anything to offer us, feel free to pop into IRC (irc.freenode.net #amarok.radio) or email me (mez AT radioamarok DOT com)</p>
