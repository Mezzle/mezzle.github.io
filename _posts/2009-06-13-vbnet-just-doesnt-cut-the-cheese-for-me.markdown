---
layout: post
status: publish
published: true
title: VB.Net just doesn't cut the mustard for me
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 221
wordpress_url: https://www.sourceguru.net/?p=221
date: !binary |-
  MjAwOS0wNi0xMyAwMTo0Nzo0MyArMDEwMA==
date_gmt: !binary |-
  MjAwOS0wNi0xMyAwMDo0Nzo0MyArMDEwMA==
categories:
- Personal
- Geeky
- Rants
- Rants
tags:
- vb.net
- visual basic
- object oriented
- rant
comments:
- id: 38516
  author: Jo Shields
  author_email: directhex@apebox.org
  author_url: http://apebox.org
  date: !binary |-
    MjAwOS0wNi0xMyAwMjoyNzoxNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0xMyAwMToyNzoxNyArMDEwMA==
  content: ! 'As the maintainer for the VB.NET compiler package in Debian, let me
    say: "urgh" is deserved, VB.NET''s a pile of crap, and I''d never advocate using
    it - but I don''t want to lock out people who use it'
- id: 38519
  author: Ian Monroe
  author_email: ian.monroe@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNi0xMyAwMjo0MDo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0xMyAwMTo0MDo1MyArMDEwMA==
  content: ! "Basic is an inferior language for beginners as well. I'm teaching my
    girlfriend programming this summer, since she starts a Library Science program
    in the fall and will probably have to do some. We checked out a couple of Computer
    Science 101 textbooks that use python as their main language. We've only done
    a few chapters but its gone fairly quickly. Much less painful from when I taught
    myself programming by spending the whole damn summer reading \"Learn to Program
    C++ in 21 Days\". :D\r\n\r\nSo I think its a great beginner language. It has real
    OO, but you can also avoid defining classes and just use static methods to begin
    with. And having the interpreter is pretty much required for any beginning language
    in my opinion since its a great way to try out new syntax. Once she understands
    the programming basics I plan to introduce PyQt. This was the environment I actually
    originally learned Qt in. :)\r\n\r\nSo these days I don't really see what role
    Basic has to play.\r\n\r\nI suppose I do hold a similar opinion with Ada as you
    do with Basic. Ada was used as the language for my CS major, which I think was
    fine since its very structured and a very good procedural programming language.
    But then it got totally silly when one of the more advanced CS classes introduced
    OOP in the context of Ada. OOP is Ada is just freakin' weird. :)"
- id: 38643
  author: Richard
  author_email: nah@nah.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNi0xNSAwNDoyNTo1NSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0xNSAwMzoyNTo1NSArMDEwMA==
  content: ! "The difference between C# and VB.NET is mostly syntax. Most of the code
    in VB.NET can be translated directly into C# code.\r\n\r\nPublic Class Line\r\n\r\n
    \   Private mstrLine As String\r\n\r\n    Property Line() As String\r\n        Get\r\n
    \          Return mstrLine\r\n        End Get\r\n        Set(ByVal Value As String)\r\n
    \           mstrLine = Value\r\n        End Set\r\n    End Property\r\n     \r\n
    \   ReadOnly Property Length() As Integer\r\n       Get\r\n           Return mstrLine.Length\r\n
    \      End Get\r\n    End Property\r\nEnd Class\r\n\r\nis far from different from\r\npublic
    class Line {\r\n    \r\n    private string mstrLine;\r\n    \r\n    string Line
    {\r\n        get {\r\n            return mstrLine;\r\n        }\r\n        set
    {\r\n            mstrLine = value;\r\n        }\r\n    }\r\n    \r\n    int Length
    {\r\n        get {\r\n            return mstrLine.Length;\r\n        }\r\n    }\r\n}\r\n\r\nWhen
    you are discusing different languages VB.NET can be considered to be C# with a
    funny syntax. Sure there are minor differences between them but nothing that would
    make one or the other inherently worse than the other.\r\n\r\nThe isssue most
    people have with maintaining VB.Net code is that it's often written bad programmers
    which  is something the VB-community DOES have more of than for example C#. \r\n\r\nDon't
    blame the machines or the languages, blame the people responible for writing the
    piece of crap you are responsible for maintaining."
- id: 38754
  author: Thank you to mez &laquo; Wolfie&#8217;s Coder Corner
  author_email: ''
  author_url: http://blog.manticore-uk.com/2009/06/16/thank-you-to-mez/
  date: !binary |-
    MjAwOS0wNi0xNiAyMTozODoxOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0xNiAyMDozODoxOCArMDEwMA==
  content: ! '[...] I have a surprise when I looked at the stats! Mez&#8217;s pingback
    (click here to read) to my post about VB.Net caused a veritable storm in the water
    glass. In one day I had almost 400 [...]'
- id: 43479
  author: Bill S
  author_email: softstaff1@live.com
  author_url: ''
  date: !binary |-
    MjAwOS0wOS0yMSAxNjoyNjoyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yMSAxNToyNjoyMyArMDEwMA==
  content: ! "I'll probably get banged because of the email address.  So be it.\r\n\r\n\"Basic
    is for beginners, it was never designed for the more complex stuff, which should
    probably be left to languages that were designed to handle it.\"\r\n\r\nOk, I'll
    bite, what \"complex\" stuff are you addressing that is CLEARLY not doable in
    VB.Net but doable in say C#.  Forget the Perls, C++, etc.\r\n\r\nOh, and when
    supplying an answer answer this question, \"Of this so-called complex stuff not
    doable or as easily doable in VB.Net but trivial in C#, what amount of a an active
    working programmers life will require such sophistication?\"  How often does such
    really arise?  And, can't I effectively employ the C# gurus to write the small
    amount of \"complex\" stuff as necessary, while the majority is left to the sufficiently
    capable mundane handler of VB.Net?  Unless you want to say that transitioning
    from VB.Net to C# is ... well relatively trivial?  Is that also the case?\r\n\r\nThanks"
- id: 43480
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAwOS0wOS0yMSAxNjo1ODowNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yMSAxNTo1ODowNiArMDEwMA==
  content: ! "Bill S, put simply, as I've tried to put across, anything that is OO.
    \ Ok, it might do some basic stuff OO well, but if you get along the lines of
    inheritance, or anything remotely beyond just keeping variables in an object,
    it can get very complex, and really hard to understand.\r\n\r\nBasic is designed
    as a linear programming language. Shoe-horning OO concepts into the language that's
    not designed to be OO is never a good idea."
- id: 48257
  author: Daryl
  author_email: dbutcher@gmail.com
  author_url: http://vbguru.wordpress.com/
  date: !binary |-
    MjAxMC0wMS0wNCAyMzowNjo1NyArMDAwMA==
  date_gmt: !binary |-
    MjAxMC0wMS0wNCAyMjowNjo1NyArMDAwMA==
  content: I started writing in BASIC, moved on to VB6, and now write in VB.NET.  I
    love it.  Sometimes I have to write in C# or even C++ for work and I always think
    how i could write the code faster or better in VB.NET. I even convinced my employer
    once to let me re-write a device driver in VB that was written in C++, and my
    driver ran faster.  But VB.NET &amp; C# are piratically the same language. Most
    of the time you just have to drop the semi-Colin and the code becomes VB.  I also
    love using inheritance which I think is easy to understand in VB.
- id: 71029
  author: Jon Ogden
  author_email: jono@psaico.com
  author_url: ''
  date: !binary |-
    MjAxMC0xMC0yMCAwMDowODo0NSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0xMC0xOSAyMzowODo0NSArMDEwMA==
  content: Sorry but you are obviously unfamiliar with VB and mistaking your personal
    prejudices for natural laws. I  code in both languages and I have never, ever
    been in a situation where I could not do something in one that i could not do
    equally well and equally efficiently in the other. If either language has any
    advantage it is in VB's verbosity which allows it to be maintained somewhat more
    easily.
- id: 296510
  author: Chennai Express Trailer
  author_email: impson@gmail.com
  author_url: http://www.raincoast.com/member/750915/
  date: !binary |-
    MjAxMy0wMy0yNSAxMjowNjoxNyArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMy0yNSAxMjowNjoxNyArMDAwMA==
  content: Howdy! I merely would like to give a huge thumbs up for the excellent data
    you might have here on this post. I will probably be coming once more to your
    weblog for much more soon.
- id: 301533
  author: quack
  author_email: quack@blank.com
  author_url: ''
  date: !binary |-
    MjAxMy0wNC0xNiAxNToxOTo1MiArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNC0xNiAxNDoxOTo1MiArMDEwMA==
  content: ! "excuse me twit heads, python is great vb is crap. got it? now go home
    and start using python before the world kills you. you are already ticking away
    like a time bomb towards your death. \r\n\r\nregards\r\ndoggywoggy doodle brain"
- id: 342594
  author: ! '"mer information"'
  author_email: ''
  author_url: http://billiga-resor.manifo.com/blog/billiga-flyg
  date: !binary |-
    MjAxMy0wOC0yOCAxNjo1OToxMSArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wOC0yOCAxNTo1OToxMSArMDEwMA==
  content: ! '<strong>"mer information"...</strong>


    "[...]r A cool goods from you, man. DUBSTEP GUNS 007 Video Recording Games|007MRLUK
    rk[...]"...'
- id: 675423
  author: http://denniswatsonseo.com
  author_email: linwood.begay@gmail.com
  author_url: http://kcseoexpert.weebly.com/
  date: !binary |-
    MjAxNC0wOC0xMiAwMzo1OTo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0xMiAwMjo1OTo1NCArMDEwMA==
  content: ! "Hi there, I want to subscribe for this webpage to get hottest updates,
    therefore where \r\ncan i do it please help out."
- id: 677036
  author: event coordinator
  author_email: bessjorgenson@gmail.com
  author_url: http://socialmediaecho.blogspot.com/2014/08/wedding-planning-without-hassle-and.html
  date: !binary |-
    MjAxNC0wOC0xNCAwMzozNToyMiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0xNCAwMjozNToyMiArMDEwMA==
  content: ! "Have you ever considered publishing an e-book or guest authoring \r\non
    other sites? I have a blog based on the same information you discuss and \r\nwould
    really like to have you share some stories/information. I know my audience would
    value your work.\r\nIf you are even remotely interested, feel free to shoot me
    an e-mail."
- id: 687587
  author: 0l3.de
  author_email: kennithcongreve@gmail.com
  author_url: http://0L3.de/clashofclans26554+
  date: !binary |-
    MjAxNC0wOC0yOCAwNToxNDowNSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yOCAwNDoxNDowNSArMDEwMA==
  content: I am really grateful to the owner of this web page who has shared this
    wonderful post at at this time.
- id: 708820
  author: Hacer clic aqui
  author_email: conrad_banfield@elitemail.org
  author_url: http://bitacoras.com/bitacora/cochesone.blogspot.com
  date: !binary |-
    MjAxNC0wOS0xOCAxNzowNDowNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xOCAxNjowNDowNiArMDEwMA==
  content: ! "This design is spectacular! You definitely know how to keep a \r\nreader
    entertained. Between your wit and your videos, I was almost \r\nmoved to start
    my own blog (well, almost...HaHa!) Excellent job.\r\nI really enjoyed what you
    had to say, and more than that, \r\nhow you presented it. Too cool!\r\n\r\nFeel
    free to surf to my site <a href=\"http://bitacoras.com/bitacora/cochesone.blogspot.com\"
    rel=\"nofollow\">Hacer clic aqui</a>"
permalink: vbnet-just-doesnt-cut-the-cheese-for-me
---
<p>So, this morning (or yesterday morning, as it is now!), my attention got drawn to <a href="http://blog.manticore-uk.com/2009/06/08/the-great-vbnet-horror/">Wolfgang's post regarding VB.Net</a>. While I understand his point, I'm not too sure whether I agree with it in it's entirity.</p>
<p>When I first started programming, I learnt how to write Basic. I don't mean Basic as it stands nowadays, but Basic as it was back then (or should that be BASIC?). I learnt to code while I was wheelchair bound, as my father thought it'd be something interesting for me to do. It taught me the basics of programming, and I stemmed from there, moving on to learn Perl, then PHP, then C, etc etc etc.</p>
<p>The first time I ever wrote an application for a Modern computer, I wrote it in Visual Basic. I loved it. It was so simple to use, and I could use everything I'd learnt (apart from stuff like Music Envelopes etc etc) with ease in it.</p>
<p>Since then however, the world of programming has moved on. People have discovered Object Oriented programming, and found new and better ways of describing the data structures and logic behind an application. I have also moved on, I no longer write my own code in Visual Basic. I'll generally use a tool more suited to the task.</p>
<p>I do, however, have to maintain some VB.Net code. In fact, it's the code that Wolfgang mentions in his article. I can fully understand why the original subject's response was "Urgh!" - the code is horrid.</p>
<p>I don't neccesarily, however, think that this is because of the coders themselves. While this may have contributed (I've had many a "WTF" moment) - I think that the main problem behind it is the fact that it's an Object Oriented design written in a language that's tried to shoehorn Object Orientation into it's core functionality, where the core functionality should probably never have had something like that done to it. It sits in my mind like some bad genetic experience resulting in some sort of mutated behemoth.</p>
<p>VB.Net, to me, just seems like a poorly made implementation of something it was never originally designed for. Wolfgang mentions that the ease of use of the Basic Language allows a user to start working without having to dive straight into OO programming, as would be forced onto you using something like C#, and in a way, I agree. The thing is, that Basic, as Wolfgang rightly said, is meant for beginners, after all, it was originally an acronym. "Beginners All Purpose Symbolic Instruction Code". This, in my opinion, is where it should stay. Basic is great for beginners, and VB6 was amazing. But, the advent of VB.Net means that programmers are going to start writing OO code in Basic, something it was never designed for, and to that end, fall into pitfalls and misconceptions where they have been led to believe that the VB.Net way of doing something is the de-facto standard. When they come to start working in another language, they have to re-learn things from scratch. If their experience is in a corporate environment, then their skills are only transferrable to something <em>also</em> written in VB.Net, and rarely anything else.</p>
<p>Basic is for beginners, it was never designed for the more complex stuff, which should probably be left to languages that were designed to handle it.</p>
