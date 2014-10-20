---
layout: post
status: publish
published: true
title: War Dialling ?
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 111
wordpress_url: http://www.sourceguru.net/archives/111
date: !binary |-
  MjAwOC0wMS0wNyAxNToxMTozNyArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMS0wNyAxNDoxMTozNyArMDAwMA==
categories:
- Personal
tags:
- php
- munging
- code
- puzzle
comments:
- id: 15604
  author: jldugger
  author_email: jldugger@gmail.com
  author_url: http://projecteuler.net/
  date: !binary |-
    MjAwOC0wMS0wNyAyMToxNzo0NyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wNyAyMDoxNzo0NyArMDAwMA==
  content: There's a ton more of these types of problems at Project Euler. I've started
    on them recently, and I'm not sure if it's that they're just problems 7 years
    old but they don't yet seem to need intelligent programming to solve. The hardest
    one so far was the one where I tried using a big int library, and wound up just
    using 64 bit arithmatic.
- id: 15605
  author: Nils
  author_email: nilsrichter@yahoo.de
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wNyAyMzowNDowNCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wNyAyMjowNDowNCArMDAwMA==
  content: ! "I also wrote a small PHP script.\r\n\r\nI assume that the second number
    (of 4 digits) must be greater than 724 (724 are added), the first digit of the
    second number must be 0 or 1 because 8000 are subtracted and the STD is 0161 so
    the first part of the checksum is 8.\r\n\r\nWith these assumptions there are only
    4077 possible numbers that could be correct (checksum must be 29-8=21)."
- id: 15620
  author: Paul
  author_email: paul@giannaros.org
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wOCAxNzozNTo1NSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wOCAxNjozNTo1NSArMDAwMA==
  content: I haven't tried this, but what about the constraint that the first number
    must be &gt;= 27? You didn't mention that one, Nils, but I'm guessing you included
    it.
permalink: war-dialling
---
<p>When a few people in IRC noticed <a href="http://blog.digital-scurf.org/life/new-home-phone.html">Daniel Silverstone's post about his new phone number</a>, that started a whole conversation regarding whether his number crunching alogorithm was good enough.</p>
<p>I made a lovely script in PHP, which told me the numbers that it could have been.</p>
<p>There are 67786 combinations that it could be, it took me about 27 seconds to find that once I'd written and debugged the code.</p>
<p>It's an interesting puzzle, so if you're bored, why not write some code and see whether you can get the same answer?</p>
