---
layout: post
status: publish
published: true
title: Compiz in Gutsy... a sort of review
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 71
wordpress_url: http://www.sourceguru.net/archives/71
date: !binary |-
  MjAwNy0wOC0xNiAyMzozMDo1OSArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wOC0xNiAyMjozMDo1OSArMDEwMA==
categories:
- Personal
tags: []
comments:
- id: 12614
  author: Travis
  author_email: amaranth@ubuntu.com
  author_url: http://www.realistanew.com
  date: !binary |-
    MjAwNy0wOC0xNyAwMzoxNjozNyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOC0xNyAwMjoxNjozNyArMDEwMA==
  content: Compiz-Fusion is a set of addon plugins and such for compiz so it's correct
    to still call it 'compiz'.
- id: 12619
  author: Matt Jones
  author_email: matt@mattjones.me.uk
  author_url: ''
  date: !binary |-
    MjAwNy0wOC0xNyAwODoxNzo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOC0xNyAwNzoxNzo1MyArMDEwMA==
  content: The hinting works fine for me in gutsy(gnome). I was using it on pidgin
    last night, just after I had set it up, and the effects are amazingly cool.
- id: 12632
  author: iGama
  author_email: igama@formatds.org
  author_url: http://www.formatds.org
  date: !binary |-
    MjAwNy0wOC0xOCAxNjo0MTowNCArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOC0xOCAxNTo0MTowNCArMDEwMA==
  content: ! "Have you tried fusion-icon ? i prefer it to compiz-tray-icon. It's updated
    comparing to compiz-tray-icon.\n\nJust download it from : \n\nhttp://gitweb.opencompositing.org/?p=users/crdlb/fusion-icon;a=snapshot;h=HEAD\n\nAnd:\n\n$
    sudo make install\n\nJust GTK (Gnome):\n\n$ sudo make frontends=gtk install\n\nStart-it:\n\n$
    fusion-icon &amp;\n\nHope you like it"
- id: 12638
  author: meneer R
  author_email: Ralf.Nieuwenhuijsen@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wOC0xOCAyMzo1MjoxMSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOC0xOCAyMjo1MjoxMSArMDEwMA==
  content: ! "The tray icon is giving troubles because its part of gnome, not part
    of Ubuntu. It has its own gnome-specific settings. You are better off not installing
    it. \n\nThings will be smoother. Ubuntu has its own desktop-effects tab on the
    appearce capplet, for gnome. And you can use the official compiz settings thingie
    to tweak settings.\n\nKDE has its own compiz back-end. I wonder what will happen
    when you install both GNOME and KDE. You might be better off (if you prefer KDE)
    to just install Kubuntu and enable compiz from there."
- id: 289211
  author: meiles zodziai
  author_email: laigyugmn@gmail.com
  author_url: http://www.23hq.com/cream2path/story/9810977
  date: !binary |-
    MjAxMy0wMi0yNiAyMzo0NjoxOSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMi0yNiAyMzo0NjoxOSArMDAwMA==
  content: I've been browsing on-line greater than 3 hours nowadays, but I never discovered
    any fascinating article like yours. Itâ€™s lovely price sufficient for me. In
    my view, if all web owners and bloggers made excellent content as you did, the
    internet will be a lot more helpful than ever before.
permalink: compiz-in-gutsy-a-sort-of-review
---
<p>Ok, so it's been a while since I've used compiz, simply because well, I liked Beryl better/ However, I didn't use that much because there were a few niggly bugs that just meade me annoyed as hell...</p>
<p>Anyway, seeing as I've now done a reinstall of Gutsy (due to a broken upgrade from feisty making dbus not work, half the udev stuff be missing, and it would only work with the feisty kernel!) I've decided to try what I now believe is called "Compiz Fusion" (though in ubuntu seems only to be called Compiz)</p>
<p>To start off with, I used the compiz-tray-icon, which gives you a nice menu to right click, and select "Gl Desktop", which is nice, and works pretty much straight off of the bat (after following <a href="https://help.ubuntu.com/community/CompositeManager/AIGLXOnEdgy#head-53afd5bec7a06c3f61c31c135f21448435dad6bd">these instructions</a>), giving you all your nice shiny desktop effects (you can find this as part of gnome-compiz-manager)</p>
<p><a href="http://www.sourceguru.net/wp-content/uploads/2007/08/compiz-tray.jpg" title="Compiz Tray Icon"><img src="http://www.sourceguru.net/wp-content/uploads/2007/08/compiz-tray.thumbnail.jpg" alt="Compiz Tray Icon" /></a>     <a href="http://www.sourceguru.net/wp-content/uploads/2007/08/compiz-tray.jpg" title="Compiz Tray Icon"><br />
</a></p>
<p>However as you should all know, my allegiance lies with KDE. Now, with KDE there are a few... issues, shall we say. First of all... viewports are broken and crackful at the moment in KDE. (from the perspective of me trying to use them with compiz), and dont pick up properly the sides of your cube. (confusingly enough, the desktop pager tried to give me 16 desktops with the generic cube!)</p>
<p>Luckily, I don't use the desktop switcher much anyway... but, there was another issue, that being that the K Menu, kicker, tooltips and a few other things were trying to cast a shadow, but couldn't for some reason (so I'd get a lovely white line around my tooltips, above my kicker, around the K Menu)</p>
<p>I loaded up ccsm (CompizConfig Settings Manager - package is called compizconfig-settings-manager -  a great compiz configuration tool!) and used that to edit my config for my Compiz settings.</p>
<p><a href="http://www.sourceguru.net/wp-content/uploads/2007/08/ccsm.jpg" title="CompizConfic Settings Manager"><img src="http://www.sourceguru.net/wp-content/uploads/2007/08/ccsm.thumbnail.jpg" alt="CompizConfic Settings Manager" /></a></p>
<p>Nothing changed.</p>
<p>I didn't know why until I tried running Compiz Manually... and all the changes I'd made there were.... there.</p>
<p>I don't use the tray icon anymore, and I have 2 icons on my desktop to switch back and forth between GL and non GL mode now.</p>
<p><a href="../wp-content/uploads/2007/08/compiz-icons.jpg" title="Compiz Icons on my Desktop"><img src="../wp-content/uploads/2007/08/compiz-icons.jpg" alt="Compiz Icons on my Desktop" /></a></p>
<p>I do however, have to conclude that Compiz is looking fantastic, working great, and Group and Tab Windows are the most useful feature ever, I'm already starting to Tab together a Kate window and a Konsole when I'm hacking! useful to be able to switch from one to the other with a &lt;Super&gt; + Arrow Key (yes, I know kate has a kpart for a konsole - but I don't like it - I prefer Konsole itself!)</p>
<p>However, the most annoying part of it all is ....</p>
<p>That Compiz's WM doesnt recognise window Hints properly (aka I dont get the window flashing when someone sends me a Message through pidgin!)</p>
<p>Next to review KDE4 :D</p>
