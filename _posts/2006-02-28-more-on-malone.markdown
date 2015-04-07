---
layout: post
status: publish
published: true
title: More on malone
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 17
wordpress_url: https://www.sourceguru.net/archives/17
date: !binary |-
  MjAwNi0wMi0yOCAxOTo0NToxOSArMDAwMA==
date_gmt: !binary |-
  MjAwNi0wMi0yOCAxODo0NToxOSArMDAwMA==
categories:
- Geeky
- Linux
tags: []
comments:
- id: 22
  author: Martin-Ã‰ric
  author_email: q-funk@iki.fi
  author_url: http://q-funk.iki.fi
  date: !binary |-
    MjAwNi0wMi0yOCAyMToxMjo1OCArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMi0yOCAyMDoxMjo1OCArMDAwMA==
  content: ! 'Centralized bugzilla user database is something I''ve wanted for a long
    time. There''s even apparently a couple of proposed implementations available,
    according to the well-informed people on freenode #JoiIto. Why it hasn''t happened
    is something I simply don''t get. Not receiving an e-mail notification every time
    some punter adds or removes their name to the CC list for the bug would be nice
    too. Heck, automatic notification should be disabled by default!'
- id: 23
  author: JanC
  author_email: janc13@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNi0wMi0yOCAyMjo1Mzo0OCArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMi0yOCAyMTo1Mzo0OCArMDAwMA==
  content: And I think agreeing on a distributed bugtracker protocol would be even
    better, so that all bugtrackers (malone, bugzilla, trac, ...) can implement it!  :-)
- id: 24
  author: poningru
  author_email: poningru@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNi0wMy0wMSAwNDo1MzoxOCArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMy0wMSAwMzo1MzoxOCArMDAwMA==
  content: these things are planned in bugzilla except no one is there to do the work,
    https://bugzilla.mozilla.org/show_bug.cgi?id=123130
permalink: more-on-malone
---
<p>I have to agree with <a href="http://www.markshuttleworth.com/archives/25">Mark's latest blog post</a> regarding launchpad being able to open bugs in other bugzillas... There's been a couple of times when I've wanted to open a bug in Debian through launchpad - as It would be easier to do it that way.</p>
<p>However, I've thought of another solution. I'd love to see bugzilla adopt some sort of "Global" account system - where you can use your bugzilla account from one bugtracker in another. Sort of the way openID and Jabber do things - the whole account@bugzilla. This would then open up the doors to be able to cross post the same bug across many bugzillas.</p>
<p>I believe this is similar to what launchpad intends to do eventually - however - I think it would be better as native bugzilla code.</p>
<p>I mean - one centralised "bugzilla" may be good... but - a distributed bugzilla would be even better</p>
