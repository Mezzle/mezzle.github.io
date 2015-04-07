---
layout: post
status: publish
published: true
title: Hacky HTML
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 181
wordpress_url: https://www.sourceguru.net/?p=181
date: !binary |-
  MjAwOC0xMi0wOSAwMzoxOTo1NiArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMi0wOSAwMjoxOTo1NiArMDAwMA==
categories:
- Personal
tags:
- html
- css
- clearfix
comments:
- id: 30509
  author: jim
  author_email: jim@xxxxxxx.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0wOSAwNzoyNjozMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wOSAwNjoyNjozMCArMDAwMA==
  content: if all the images have the same height you could try with a min-height
    directly in the div which contain the description
- id: 30512
  author: Sander
  author_email: sanderb@gmail.com
  author_url: http://sanderbouwhuis.com
  date: !binary |-
    MjAwOC0xMi0wOSAwOTo1MDoyMSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wOSAwODo1MDoyMSArMDAwMA==
  content: ! "You could try floating the parent container too, that should solve the
    problem: See http://www.yongfook.com/items/view/81/10-dirty-little-web-development-tricks
    (#7)\r\n\r\nAs far as I know that works in every browser. Usually saves me a lot
    of hassle :)"
- id: 30517
  author: James Cape
  author_email: jcape@ignore-your.tv
  author_url: http://jcape.ignore-your.tv/
  date: !binary |-
    MjAwOC0xMi0wOSAxMTowMToyMyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wOSAxMDowMToyMyArMDAwMA==
  content: http://matthewjamestaylor.com/blog/perfect-multi-column-liquid-layouts
- id: 30518
  author: tsb
  author_email: foo@foo.foo
  author_url: http://blog.thomasbergheim.com
  date: !binary |-
    MjAwOC0xMi0wOSAxMToyMjo1NyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wOSAxMDoyMjo1NyArMDAwMA==
  content: I don't quite see the problem but honestly, how about spending time on
    things that matter and just use a table for this?
- id: 30519
  author: Dotan Cohen
  author_email: dotancohen@yahoo.com
  author_url: http://dotancohen.com
  date: !binary |-
    MjAwOC0xMi0wOSAxMToyNToxNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wOSAxMDoyNToxNiArMDAwMA==
  content: ! "You have code that works in Firefox/Opera/IE7 but not IE 8? That is
    unusual. Does the code ([X]HTML and CSS) pass W3C validation?\r\n\r\nDon't declare
    IE7 compatibility. It is the browser's job to display legal code, not the website's
    job to hack for any one browser. Put a disclaimer at the bottom declaring that
    the site does NOT work in IE, like this site does:\r\nhttp://what-is-what.com/\r\n\r\nWhen
    we stop bending over backwards to support IE, then the users will conclude that
    IE is broken and not the web. Those who insist upon using a broken web browser
    can see broken webpages."
- id: 30525
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0xMi0wOSAxMzo1NTozNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wOSAxMjo1NTozNiArMDAwMA==
  content: ! "jim:- The images aren't neccessarily all the same height. The min-height
    can be generated, but won't work on all browsers\r\n\r\nSander:- this shoves things
    around a little - and makes things not span the full page, but if I do that and
    add a width: 100%; it does work! yay!\r\n\r\ntsb:- Semantic Markup, accessibility,
    the list goes on. Tables are for tabulated data, not for layout.\r\n\r\nDotan,
    thing is, I don't want to alienate users... and yes, the CSS is valid."
- id: 30530
  author: parena
  author_email: parena@parena.net
  author_url: http://www.parena.net
  date: !binary |-
    MjAwOC0xMi0wOSAxNzowODozMyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0wOSAxNjowODozMyArMDAwMA==
  content: ! 'I''ve seen the huge negative margin hack cause another problem: non-working
    anchorst (clicking on a link to an anchor within the same page would simply do
    nothing), though I''m not sure it might have been caused by a combination of that
    hack together with other (bad) CSS.'
- id: 30551
  author: tsb
  author_email: foo@foo.foo
  author_url: http://blog.thomasbergheim.com
  date: !binary |-
    MjAwOC0xMi0xMCAxMjo0MzowNSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xMCAxMTo0MzowNSArMDAwMA==
  content: ! "@ mez: yes I know. But if there is a corner-case where it is hard to
    get it right and consistent, and it is a small and insignificant thing (ie not
    the whole site), I don't think it's going to matter (I did when I first started
    becoming tableless-infected years ago). The avoid-tables-at-all-costs is a bit
    hysterical IMHO. If you could specify things like hight-dependence among divs
    (css3) then it would be no need for them. But like it is presently, you have to
    use all sorts of divs in a div in a div, and that's not necessarily so semantic
    either; it's something of a hack.\r\n\r\nSo what I meant was, I'll make the page
    based on css and semantics, of course, but if I am having big problems with some
    insignificant small thing I'm not opposed to just slapping a table on it, call
    it a day and work on the product that matters instead."
- id: 30553
  author: Zarquod
  author_email: sourceguru-net@backblog.dasistnichtmeinedomain.de
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0xMCAxMzoxMTo1NSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xMCAxMjoxMTo1NSArMDAwMA==
  content: Look at the clearfix article on PositionIsEverything again and you'll find
    a box at the top with a red border around it. Follow the link inside and you have
    your solution. Just add "overflow:auto" to the parent element.
- id: 55985
  author: Eric Patterson
  author_email: Ruf66@gmail.com
  author_url: http://www.pressure-sensors.org
  date: !binary |-
    MjAxMC0wNC0yOSAwMjo0MDo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNC0yOSAwMTo0MDo0NCArMDEwMA==
  content: Internet Explorer 8 is very good because it is as stable as Opera. I hate
    the previous versions of IE like IE6 because it hangs frequently.           *
- id: 356612
  author: stairlifts
  author_email: maurine_mehaffey@gmx.net
  author_url: http://www.originsguild.com/index.php?action=profile&amp;u=5059
  date: !binary |-
    MjAxMy0xMC0wMiAwNDoyNjozNiArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0xMC0wMiAwMzoyNjozNiArMDEwMA==
  content: ! "Hi to every , because I am actually keen of reading this blog's post
    to be updated regularly.\r\nIt includes good material.\r\n\r\nHere is my web-site
    <a href=\"http://www.originsguild.com/index.php?action=profile&amp;u=5059\" rel=\"nofollow\">stairlifts</a>"
- id: 598834
  author: town news
  author_email: rosalinagwin@gmail.com
  author_url: http://www.hometownpeople.com
  date: !binary |-
    MjAxNC0wNi0wNiAxNTo0MDoxNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNi0wNiAxNDo0MDoxNyArMDEwMA==
  content: ! "Hello there, I discovered your site by the use of Google even as searching
    for a similar subject, your site came up,it appears to be like good.I've bookmarked
    it in my \r\ngoogle bookmarks.\r\nHello there, simply was alert to your weblog
    through Google, and located that it is truly informative.\r\nI'm going to watch
    out for brussels. I will \r\nappreciate for those who proceed this iin future.
    Numerous \r\npeople shall be benefited out of your writing. Cheers!"
- id: 700948
  author: megapolis hack
  author_email: wilfredo.pawsey@gmail.com
  author_url: http://rapham.com/article.php?id=145
  date: !binary |-
    MjAxNC0wOS0xMSAwMjowOTowNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xMSAwMTowOTowNyArMDEwMA==
  content: ! "Hurrah, that's what I was looking for, what a material!\r\npresent here
    at this blog, thanks admin of this website."
permalink: hacky-html
---
<p>Ok, so working on a new site, I've realised that an image I've floated to the right of my text seems to be overlapping the items beneath it.</p>
<p><a href="https://www.sourceguru.net/wp-content/uploads/2008/12/without-no-sidebar.png"><img class="alignnone size-thumbnail wp-image-182" title="without-no-sidebar" src="https://www.sourceguru.net/wp-content/uploads/2008/12/without-no-sidebar-150x150.png" alt="" width="150" height="150" /></a></p>
<p>Ok, so, that's obviously not what we want!!!!</p>
<p>Normally, I'd use <a href="http://www.positioniseverything.net/easyclearing.html">clearfix</a> for this, however, I have the issue that I will also be using a sidebar (at times) and well, clearfix will interfere with this:-</p>
<p><a href="https://www.sourceguru.net/wp-content/uploads/2008/12/with-cf.png"><img class="alignnone size-thumbnail wp-image-183" title="with-cf" src="https://www.sourceguru.net/wp-content/uploads/2008/12/with-cf-150x150.png" alt="" width="150" height="150" /></a></p>
<p>So, that's obviously not something we want! - I had to find a nice way of doing this, without it interfering with everything else!</p>
<p>I thought about this, and thought I'd do a bit of voodoo with CSS and make this work!</p>
<p><a href="https://www.sourceguru.net/wp-content/uploads/2008/12/with-mine-sidebar.png"><img class="alignnone size-thumbnail wp-image-184" title="with-mine-sidebar" src="https://www.sourceguru.net/wp-content/uploads/2008/12/with-mine-sidebar-150x150.png" alt="" width="150" height="150" /></a></p>
<p>Yay! It worked!</p>
<p>How'd I do this you may ask. Well, the containing div needed the following CSS (which also, quite niftily extends the height of the float if it's the shorter one, making it the full height of the containing div</p>
<pre style="padding-left: 30px;">overflow: hidden;
padding-bottom: 32767px;
margin-bottom: -32767px;</pre>
<p>The only issue? - It doesn't work in any Internet Explorer Version, or Opera &lt;= 8 - though it works in pretty much every other browser (according to <a href="http://browsershots.org/">browsershots</a>)</p>
<p>*sigh* back to the drawing board, unless anyone else has some suggestions?</p>
<p>Edit: I was wrong - it works in IE7, but not in IE8<br />
Edit 2: and it works in IE8 if you tell it to run in IE7 compatibility mode</p>
