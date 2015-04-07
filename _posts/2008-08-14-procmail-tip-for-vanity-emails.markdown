---
layout: post
status: publish
published: true
title: Procmail tip for Vanity emails.
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 148
wordpress_url: https://www.sourceguru.net/?p=148
date: !binary |-
  MjAwOC0wOC0xNCAyMzozODo0OCArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wOC0xNCAyMjozODo0OCArMDEwMA==
categories:
- Personal
tags:
- spam
- procmail
- vanity email
comments:
- id: 23653
  author: What happens to old email accounts?
  author_email: ''
  author_url: http://domains.hm/2008/08/18/what-happens-to-old-email-accounts/
  date: !binary |-
    MjAwOC0wOC0xOCAxMzoyNToyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0xOCAxMjoyNToyMyArMDEwMA==
  content: ! '[...] Procmail tip for Vanity emails.   Sphere: Related Content Ask
    a Question [...]'
- id: 322218
  author: Our site
  author_email: rtjhuvqq@gmail.com
  author_url: http://esetbase.ru/user/murnilursuify/
  date: !binary |-
    MjAxMy0wNy0xNCAwNToxMjozNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNy0xNCAwNDoxMjozNSArMDEwMA==
  content: I have to express my appreciation to this writer for bailing me out of
    this particular instance. Right after browsing throughout the internet and after
    that meeting notions that were probably not pleasant, I believed my entire life
    was probably done. Being alive without the strategies to the problems you've fixed
    as a result of this short post is a crucial court case, as well as the kind which
    may get negatively affected get entire career plainly hadn't discovered the website.
    Your own personal natural talent as well kindness as part of handling every item
    would be helpful. I'm not sure what would've performed only had not encountered
    a genuine solution prefer this. I can also at this point relish my potential future.
    Thanks so much for the skilled and then amazing help. I will not be reluctant
    that will refer your web site so that it will anyone whom will need recommendations
    on this matter.
- id: 684622
  author: gsa search engine ranker
  author_email: enndpczboi@gmail.com
  author_url: http://www.couponcodehere.com/top/gsa-search-engine-ranker-coupons/
  date: !binary |-
    MjAxNC0wOC0yNCAxNTo1Mjo0MCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yNCAxNDo1Mjo0MCArMDEwMA==
  content: What's up, this weekend is good for me, as this point in time i am reading
    this impressive informative piece of writing here at my residence.
permalink: procmail-tip-for-vanity-emails
---
<p>As you know, some sites allow you to have a vanity email, (ubuntu.com, kubuntu.org, php.net, debian.org, etc) - Usually - these are setup to forward to another account.</p>
<p>Well, after getting fed up of people spamming my php.net email account by using the address that it's forwarded to (which I have no idea where it's coming from) - I eventually decided to get my revenge and write a procmail recipe to get rid of these ;)</p>
<blockquote><p><code>:0:<br />
* ! ^Received:.*php.net.*sourceguru.net<br />
.Spam/</code></p></blockquote>
<p>This will send anything that does not have a header containing both php.net and sourceguru.net in the header line, and send it to the spam folder, this means that anything sent directly to &lt;alias&gt;@sourceguru.net instead of &lt;nick&gt;@php.net will be sent to spam. Yay! It's blocked... 5 spam in the time of writing this post.</p>
<p>Obviously, you have to be a bit careful with these things, there are other bits that you could add in, like checking that it was also recieved by &lt;server&gt;.php.net for &lt;nick&gt;@php.net (unfortunately, php.net's email servers don't seem to provide the "for" bit of it) - and some other checks. But as a basic rule, it goes pretty far (I wouldn't send this sorta thing to /dev/null however, there might be false positives)</p>
<p>Also, do be careful if you decide to do this for your @ubuntu.com email address. Until Launchpad has the extra features for setting an email as an alias for your @ubuntu.com email address, and having you @ubuntu.com email address set as your preferred email address at the same time, then Launchpad can and will send emails directly to your alias address... I'll probably update at some point with a nice procmail ruleset for ubuntu.com email addresses ;)</p>
<p>Hope this helps someone fight spam!</p>
<p>Oh, and of course, it does rely on you having a single email account for the alias, rather than just sending it to an address that you'd normally use!</p>
