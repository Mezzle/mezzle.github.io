---
layout: post
status: publish
published: true
title: Gmail annoyances
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 86
wordpress_url: https://www.sourceguru.net/archives/86
date: !binary |-
  MjAwNy0wOS0xMSAxNjoxNDoyOCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wOS0xMSAxNToxNDoyOCArMDEwMA==
categories:
- Geeky
- Linux
- Ubuntu
- Rants
tags: []
comments:
- id: 12974
  author: Paolo
  author_email: paolo.ciarrocchi@gmail.com
  author_url: http://ubuntista.blogspot.com
  date: !binary |-
    MjAwNy0wOS0xMSAxODoyMzozNSArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMSAxNzoyMzozNSArMDEwMA==
  content: ! 'But you can go under settings -&gt; Send mail as  and add as many senders
    as you want.

    At least using the web interface...'
- id: 12976
  author: casey O'
  author_email: casey.orourke@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wOS0xMSAxOTozMToyMiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMSAxODozMToyMiArMDEwMA==
  content: yup, thats annoying. Thanks for the heads up! -=C
- id: 12988
  author: shoofy
  author_email: shoofy@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNy0wOS0xMiAwNToyNzowMiArMDEwMA==
  date_gmt: !binary |-
    MjAwNy0wOS0xMiAwNDoyNzowMiArMDEwMA==
  content: I believe that if you set your Ubuntu email as your default address in
    the Gmail settings (on the accounts tab), the Gmail SMTP server will send using
    that email. I haven't actually tried it, but I think I read that somewhere.
- id: 364139
  author: computer desk
  author_email: elidalevvy@gmail.com
  author_url: http://www.computerdesksgiant.com/
  date: !binary |-
    MjAxMy0xMC0xNyAxOTo0ODozMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0xMC0xNyAxODo0ODozMyArMDEwMA==
  content: ! "Niice post. I used too bbe checking constantly this blog and I \r\nam
    inspired! Very helpful info specifically the final phase :\r\n) I take care off
    such information much. I was looking for this particular information for a long
    time.\r\nThank you and good luck."
- id: 712762
  author: the north face outlet
  author_email: raognqqknpw@gmail.com
  author_url: http://www.northface2014.net
  date: !binary |-
    MjAxNC0wOS0yMyAwNzoyNToyMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMyAwNjoyNToyMSArMDEwMA==
  content: Thiy simply is basically the plot for each brought on by the episodes,
    extra like youâ€™ll find in many other monster of the week serieswe may Thelizabeth
    fun suited with the interactions between SD Zenki (took pleasure wonderfully by
    Kappei Yamaguchi) and Chiaki (end results always enjoyable Chisa Yokoyama). them
    cast catches nicely as well being, with Chiakiâ€™s aunty being pretty useful at
    times during the duration of helping starting from the various seeds and nuts,
    hst' brother Jukai, an abbot at a psychic temple in townas and his earlier days
    ward who is got a chasten on Chiaki. deliver a presentationâ€™s , too another
    monk who arrives wearing eye glasses whose after the fruit of horrible as wellor
    sometimes but hwill most likely background remains a mystery for most of the case.
permalink: gmail-annoyances
---
<p>Ok, so recently, I thought that my status as an ubuntu developer had expired, as I've had emails about my membership to ubuntu-dev expiring, and when I tried to send an email to a list in ubuntu (kubuntu-devel) it got bounced back to me. Now of course, I thought that the bounce was because the list was restricted for posting to developers only (as is ubuntu-devel)</p>
<p>I finally got a hold of a member of the Ubuntu Technical Board (thanks keybuk!) who explained to me..</p>
<blockquote><p>&lt;Keybuk&gt; ubuntu-dev is a dead team<br />
&lt;Keybuk&gt; rather than reject everyone, we're just letting the membership expire naturally<br />
&lt;Keybuk&gt; motu is the active "universe upload" team</p></blockquote>
<p>So I then went to look what was going on with my email.</p>
<p>As my ubuntu email recieves a HUGE amount of traffic. (I dread to think but just checked and it seems I've had ~15000 emails go through it since march... a lot less than I'd expected) I have it setup in launchpad to go through a gmail account which means that I don't overload my own server (as I was doing before when I hadn't learnt to tweak my mailserver so it's settings didn'tput my server into swap death!)</p>
<p>I was also sending outgoing email from my ubuntu email address through gmail's smtp service.</p>
<p>However, it seems recently, that gmail will now rewrite an email address if it isn't the one you're sending through. If I send an email as if it's coming from mez@ubuntu.com, then gmail's smtp server will rewrite it so that it comes from mez.ubuntu@gmail.com...</p>
<p>:(</p>
<p>I've now changed my email setup to use my server for all outgoing mail.</p>
