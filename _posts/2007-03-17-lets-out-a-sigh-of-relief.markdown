---
layout: post
status: publish
published: true
title: ! '*lets out a sigh of relief*'
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 54
wordpress_url: http://www.sourceguru.net/archives/54
date: !binary |-
  MjAwNy0wMy0xNyAxMTo0OToyNiArMDAwMA==
date_gmt: !binary |-
  MjAwNy0wMy0xNyAxMDo0OToyNiArMDAwMA==
categories:
- Linux
- Ubuntu
- Rants
tags: []
comments:
- id: 4058
  author: dAniel hAhler
  author_email: blog_200703@thequod.de
  author_url: http://daniel.hahler.de/
  date: !binary |-
    MjAwNy0wMy0xNyAyMDowMzoyMiArMDAwMA==
  date_gmt: !binary |-
    MjAwNy0wMy0xNyAxOTowMzoyMiArMDAwMA==
  content: Hmm.. have you confused xbd-data with xbd-config? I could not find xbd-config,
    even on packages.ubuntu.com.
permalink: lets-out-a-sigh-of-relief
---
<p>Ok, so not that long ago, I had to reinstall Kubuntu (we won't explain why here! - I'm too ashamed to tell!)</p>
<p>Anyway, I installed Kubuntu Dapper, and that all worked fine. However, after upgrading to Feisty, I had a strange problem, I no longer had an English Keyboard layout, and I couldn't change it.</p>
<p>So, I put up with it, after searching the ubuntu forums and realising a couple of people had a similar issue to me, thinking it was a bug.</p>
<p>Today, however, it really got to me (again, not something I wan't to explain why)</p>
<p>So, I started bitching on IRC.</p>
<p>Again, as usual, my bitching and ranting and raving was unfounded. (sort of) The code WAS right in feisty, but for some reason, had been removed from my system. Grr.... I guess that the upgrade path is broken somewhere (seeing as I had to have about 3 attempts to do the upgrade with modding a couple of init scripts to just return true as they were giving me huge headaches! (one of the font updating things I believe))</p>
<p>But yeah, It's fixed now, and much thanks to Colin Watson for pointing out that the file was in the package, as if it wasn't for that, I wouldn't have thought to just</p>
<blockquote><p>sudo apt-get install --reinstall xkb-data</p></blockquote>
<p>So I'm now back on a UK keyboard, and after using it for a month as a US keyboard, am now having difficulty switching back!</p>
<p>I should switch to dvorak, and just make my life even more confusing :D</p>
