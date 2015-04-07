---
layout: post
status: publish
published: true
title: Stand back, I know regular expressions
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 106
wordpress_url: https://www.sourceguru.net/archives/106
date: !binary |-
  MjAwOC0wMS0wMyAwMjowOToxMiArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMS0wMyAwMTowOToxMiArMDAwMA==
categories:
- Personal
tags:
- regular expressions
- awk
- gawk
- grep
- egrep
comments:
- id: 15538
  author: Jeff Schroeder
  author_email: jeffschroeder@computer.org
  author_url: http://www.digitalprognosis.com
  date: !binary |-
    MjAwOC0wMS0wMyAwMzozODo0NyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMjozODo0NyArMDAwMA==
  content: ! 'You know regular expressions, but you don''t know that apt supports
    them!


    I think my version is the prettiest:

    apt-cache search ''^.*[^-]utils$'' | wc -l'
- id: 15541
  author: Sebastian
  author_email: webmaster@hartwork.org
  author_url: http://www.hartwork.org/
  date: !binary |-
    MjAwOC0wMS0wMyAwNzoxNToxOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwNjoxNToxOCArMDAwMA==
  content: ! 'I cannot resist: why ''^.*'' in front?

    How about this one:


    apt-cache search ''[^-]utils$'' | wc -l

'
- id: 15542
  author: Pistahh
  author_email: szekeres@iii.hu
  author_url: http://pista.iii.hu
  date: !binary |-
    MjAwOC0wMS0wMyAwODoxMzo1OCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwNzoxMzo1OCArMDAwMA==
  content: ! 'instead of grep ... | wc -l  you can use grep -c ...


    Pistahh'
- id: 15543
  author: Joe Smith
  author_email: yasumoto7@gmail.com
  author_url: http://www.joemsmith.com
  date: !binary |-
    MjAwOC0wMS0wMyAwODo1NzoxMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwNzo1NzoxMCArMDAwMA==
  content: I just picked up Mastering Regular Expressions (http://www.amazon.com/Mastering-Regular-Expressions-Jeffrey-Friedl/dp/0596528124)
    for Christmas, and it's already made my life a million times easier :)
- id: 15546
  author: Eike Herzbach
  author_email: beispielsweise@googlemail.de
  author_url: http://herzbach.net/
  date: !binary |-
    MjAwOC0wMS0wMyAxMjoxOTozNyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAxMToxOTozNyArMDAwMA==
  content: Stand back, http://partmaps.org/era/unix/award.html#wc ;)
- id: 15547
  author: ilmari
  author_email: ilmari+sourceguru@ilmari.org
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAxNzozMjo0MiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAxNjozMjo0MiArMDAwMA==
  content: ! 'I was going to point out that apt-cache takes regexps, but instead I''ll
    just mention the --names-only option, which you want in this case (it still searches
    provides as well as the package name itself, which is why util-linux shows up,
    as it Provides: schedutils).'
- id: 15551
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0wMS0wMyAyMDo0OTozMSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAxOTo0OTozMSArMDAwMA==
  content: Eiki, I know I know, but sometimes, you just get lazy
- id: 15552
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0wMS0wMyAyMDo1MDo1NSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAxOTo1MDo1NSArMDAwMA==
  content: Sebastian, as that was the quickest thing to start with - before the expression
    was refined... yeah, stupid I know.. but, in my experience egrep is generally
    ungreedy
- id: 15553
  author: suy
  author_email: alex@disperso.net
  author_url: http://barnacity.net/
  date: !binary |-
    MjAwOC0wMS0wMyAyMzoxNDozOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAyMjoxNDozOCArMDAwMA==
  content: Not only apt supports regular expressions directly, but also aptitude has
    much nicer support for searches. I never ever had to grep the output from aptitude,
    specially because it's impossible inside the (optional) GUI mode (and that's the
    main reason for aptitude having such a powerful search method).
permalink: stand-back-i-know-regular-expressions
---
<p>So, after the <a href="https://www.sourceguru.net/archives/105">last blog post</a>, I was talking to <a href="http://blogs.ubuntu-nl.org/dennis/">Seveas</a> and mentioned how I thought with all the nifty and useful commands coming in on here, I might make a <em>niftyutils</em> package. The conversation is as follows</p>
<blockquote><p>&lt;Mez&gt;    thinking of compiling a few of these into a nifty-utils package ;)<br />
&lt;Seveas&gt;    so we have coreutils, moreutils and nifty-utils?<br />
&lt;Seveas&gt;    just contribute them to moreutils :)<br />
&lt;Mez&gt;    and a few more<br />
&lt;Mez&gt;    patch-utils being the most obvious<br />
&lt;Mez&gt;    findutils, psutils ...<br />
&lt;Seveas&gt;    dennis@mirage:~$ apt-cache -n search utils | wc -l<br />
&lt;Seveas&gt;    266</p></blockquote>
<p>Ok, so I had to get one up on this, as I only wanted fooutils, not foo-utils or foo-utils-bar, and came up with</p>
<blockquote>
<pre>apt-cache search utils | awk '{print $1}' | egrep '^.*[^-]utils$' | wc -l</pre>
</blockquote>
<p>for which I got told off. Awk can do everything, so why pipe to grep?</p>
<p>After a bit of back and forthing, the equivalent command, without egrep is</p>
<blockquote>
<pre>apt-cache search utils | awk '/^[[:alnum:]]*([-[:alnum:]])*[^-]utils[[:space:]].*/' | wc -l</pre>
</blockquote>
<p>I think the first version was prettier.</p>
<p>Oh, and another comment relating to my last post, specially going out for "Bork Fomb":- I've deleted your post, and I'm glad I have approval on here - you could have done some damage to people who didn't know what that does, so here's a special command, just for you</p>
<blockquote><pre>sudo iptables -I INPUT -s 77.185.71.113 -j DROP</pre>
</blockquote>
