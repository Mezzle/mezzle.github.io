---
layout: post
status: publish
published: true
title: Data-Scraping Evilness
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 170
wordpress_url: https://www.sourceguru.net/?p=170
date: !binary |-
  MjAwOC0xMS0wNSAyMzo0NzoyNyArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMS0wNSAyMjo0NzoyNyArMDAwMA==
categories:
- Geeky
tags: []
comments:
- id: 29238
  author: Roland
  author_email: rolandl@cavenet.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wNiAwMDoxODo0NyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNSAyMzoxODo0NyArMDAwMA==
  content: ! "See recent article on this:\r\nhttp://ask.slashdot.org/article.pl?sid=08/10/27/1245219\r\nand
    a reply that is very relevant:\r\nhttp://ask.slashdot.org/comments.pl?sid=1008923&amp;cid=25527129"
- id: 29239
  author: woot
  author_email: ewm-list@redtetrahedron.org
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wNiAwMDoyNjoyNCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNSAyMzoyNjoyNCArMDAwMA==
  content: Dude, this is one of the things rss was invented for.  The different website
    should be convinced to provide the data as a feed.
- id: 29243
  author: Greg
  author_email: greg@grossmeier.net
  author_url: http://blog.grossmeier.net/
  date: !binary |-
    MjAwOC0xMS0wNiAwMToxNDozNyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNiAwMDoxNDozNyArMDAwMA==
  content: ! "Is it considered scraping if you are using an email sent to yourself?
    \ You are given implicit license to use that email for whatever personal purposes
    you might have.  If you are also a person who happens to run a site that displays
    events and you are getting event email from another source, then by all means
    use it.\r\n\r\nIt isn't like you are actively downloading all event pages on Facebook
    and scraping them; facebook actually SENT you the data.\r\n\r\n+1 from me!\r\n\r\nThe
    more of Facebook's walled garden data that gets out the better."
- id: 29275
  author: Mary
  author_email: mary@puzzling.org
  author_url: http://puzzling.org/
  date: !binary |-
    MjAwOC0xMS0wNiAxNDozNjoyOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNiAxMzozNjoyOCArMDAwMA==
  content: ! "Facebook has an iCal export of events you are invited to. Click on \"Events\"
    under the \"Applications\" listing, and then on \"Export events\" to get the URL
    for the iCal feed.\r\n\r\nAnd encourage other sites to support iCal..."
- id: 572318
  author: facebook page likes
  author_email: florene.constant@yahoo.de
  author_url: http://blog.robinmackert.de/2009/10/03/chemo/
  date: !binary |-
    MjAxNC0wNS0xOSAwMzowMTo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0xOSAwMjowMTo1NCArMDEwMA==
  content: ! "This is very interesting, You are a very skilled blogger.\r\nI have
    joimed your feed and look forward to seeking more of \r\nyour magnificentt post.
    Also, I've shared your site in my social networks!\r\n\r\n\r\n\r\nHere is my blog
    - <a href=\"http://blog.robinmackert.de/2009/10/03/chemo/\" rel=\"nofollow\">facebook
    page likes</a>"
- id: 584887
  author: free facebook likes
  author_email: yukiko.doan@gmail.com
  author_url: http://www.rawrdenim.com/forum/member.php?u=180243-HP70
  date: !binary |-
    MjAxNC0wNS0yNiAxODoxNzoyNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yNiAxNzoxNzoyNiArMDEwMA==
  content: ! "WOW just what I was searching for. Came here \r\nby searching for facebook
    page likes\r\n\r\nAlso visit myy webpage ... <a href=\"http://www.rawrdenim.com/forum/member.php?u=180243-HP70\"
    rel=\"nofollow\">free facebook likes</a>"
permalink: data-scraping-evilness
---
<p>So, I'm sure most of you are aware of <a href="http://www.facebook.com/">Facebook</a> - if not, where have you been?</p>
<p>Anyway, I run a site that promotes local events and gigs for a specific group of people, and a lot of the work for the site is in keeping it up to date - going and grabbing the info from various different websites, and plonking it into the format that's used by the website. (which could consume hours)</p>
<p>This morning I noticed that I kept getting invites to events on Facebook that I should be adding to the website. I also noticed that the emails I got from Facebook were all in the same form.</p>
<p>Regex anyone?</p>
<blockquote><p><code><span style="color: #000000;"><span style="color: #0000bb;">preg_match</span><span style="color: #007700;">(</span><span style="color: #dd0000;">"/^Event: (.*)\n.*\"(.*)\"\nWhat: (.*)\nHost: (.*)\nStart Time: (.*)\nEnd Time: (.*)\nWhere: (.*)\n\nTo see more details and RSVP, follow the link below:\n(.*)\n/m"</span><span style="color: #007700;">, </span><span style="color: #0000bb;">$email</span><span style="color: #007700;">, </span><span style="color: #0000bb;">$matches</span><span style="color: #007700;">);</span></span></code></p></blockquote>
<p>So, yup, that's what I did - I poked it all through a script, registered a new Facebook account, and now - through the magic of Regular Expressions, when someone invites the special user to an event, it automatically gets added to the site (through a bit of PHP + procmail magic! (with sanity checks!))</p>
<p>It was certainly interesting to get going, and well, quite fun... but I feel a bit dirty doing it ;)</p>
<p>Anyway, now all I need to do is create screen scrapers for the different websites that I get the gig listings from, and well, hopefully, then, I'll be able to have everything automated!</p>
<p>If only...</p>
