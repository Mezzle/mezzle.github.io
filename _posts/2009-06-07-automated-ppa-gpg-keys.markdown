---
layout: post
status: publish
published: true
title: Automated PPA GPG Keys
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 212
wordpress_url: http://www.sourceguru.net/?p=212
date: !binary |-
  MjAwOS0wNi0wNyAwMToyOTowMyArMDEwMA==
date_gmt: !binary |-
  MjAwOS0wNi0wNyAwMDoyOTowMyArMDEwMA==
categories:
- Personal
tags: []
comments:
- id: 38230
  author: zerwas
  author_email: no@no.no
  author_url: ''
  date: !binary |-
    MjAwOS0wNi0wNyAwMzowNzowNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAwMjowNzowNCArMDEwMA==
  content: Woah cool, thanks!
- id: 38232
  author: Ken Bloom
  author_email: kbloom@gmail.com
  author_url: http://www.iit.edu/~kbloom1/
  date: !binary |-
    MjAwOS0wNi0wNyAwNDoxNzoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAwMzoxNzoyNyArMDEwMA==
  content: ! "A real secure technique\r\n\r\nThis really defeats the whole purpose
    of using PGP signatures to secure the repository. The script, when not hooked
    into apt, will be slightly more secure becuase you'll at least have to acknowledge
    that a new repository has been added, or its key has changed, before installing
    the key. Even better would be checking each key against the trust network in your
    personal GPG keychain, and asking confirmation before installing the key."
- id: 38235
  author: Trotamundos
  author_email: ttradeedddekl@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNi0wNyAwNDo1Mjo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAwMzo1Mjo1NiArMDEwMA==
  content: ! "No, 05ppa must containg the following line:\r\n\r\nAPT::Update::Pre-Invoke
    { â€œif [ -x /usr/local/bin/ppakeys/ ]; then /usr/local/bin/ppakeys/launchpad-update;
    fiâ€\x9D; };"
- id: 38245
  author: TheNano
  author_email: shwan.ciyako@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNi0wNyAwODoxNjo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAwNzoxNjo0MyArMDEwMA==
  content: ! "I get \r\n-desktop:/etc/apt/apt.conf.d$ sudo apt-get update\r\nE: Syntax
    error /etc/apt/apt.conf.d/05ppa:2: Extra junk at end of file\r\n\r\nany idea ,
    I needed to write in the code by hand and it worked.\r\nThank you"
- id: 38247
  author: TheNano
  author_email: shwan.ciyako@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNi0wNyAwODoxNzo1OCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAwNzoxNzo1OCArMDEwMA==
  content: I should mention that I was copying the code from planet.ubuntu.com , maybe
    copying it here could have worked!
- id: 38254
  author: Alan Pope
  author_email: alan@popey.com
  author_url: http://popey.com/
  date: !binary |-
    MjAwOS0wNi0wNyAxMDo0NDo1MSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAwOTo0NDo1MSArMDEwMA==
  content: Nice improvement Mez, like it!
- id: 38255
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOS0wNi0wNyAxMDo0NzoyNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAwOTo0NzoyNSArMDEwMA==
  content: ! "Ken, I agree, it's not secure. But I'm happy for now to have it this
    way!\r\n\r\nI believe that most PPA keys wont show up in the trust chain though
    :(\r\n\r\nMaybe I can make some tweaks :D"
- id: 38262
  author: Mantenha as chaves GPG do Launchpad sempre actualizadas! | Ubuntued
  author_email: ''
  author_url: http://ubuntued.info/2009/06/mantenha-as-chaves-gpg-do-launchpad-sempre-actualizadas.html
  date: !binary |-
    MjAwOS0wNi0wNyAxNDo1NDozNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAxMzo1NDozNyArMDEwMA==
  content: ! '[...] GPG Keys e o segundo blog Ã© do Martin Meredith que, atravÃ©s
    do artigo do Alan Pope, fez o artigo Automated PPA GPG Keys. AtravÃ©s deste Ãºltimo
    poderei explicar como manter o seu sistema sempre actualizado ao nÃ­vel de [...]'
- id: 38271
  author: I&#8217;m impressed &laquo; Source Guru
  author_email: ''
  author_url: http://www.sourceguru.net/archives/216
  date: !binary |-
    MjAwOS0wNi0wNyAxNjo1MzoxOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAxNTo1MzoxOCArMDEwMA==
  content: ! '[...] Source Guru       &laquo; Automated PPA GPG Keys [...]'
- id: 38299
  author: ! 'ppakeysupdate: .deb para agregar / actualizar GPG Keys para PPAs de forma
    automÃ¡tica | evelio.info'
  author_email: ''
  author_url: http://evelio.info/2009/06/07/ppakeysupdate-deb-para-agregar-actualizar-gpg-keys-para-ppas-de-forma-automatica/
  date: !binary |-
    MjAwOS0wNi0wOCAwMDo1MTowMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wNyAyMzo1MTowMyArMDEwMA==
  content: ! '[...] y de gran utilidad. Consiste en dos scripts: Launchpad Update
    por parte de Dominic Evans y otro mÃ¡s pequeÃ±o pero que le da la automatizaciÃ³n
    a la cosa, por parte de Martin Meredith&#8230; esto ya no serÃ¡ [...]'
- id: 38308
  author: ! 'Launchpad y las llaves GPG: SoluciÃ³n &#8220;automÃ¡gica&#8221; &laquo;
    GNU/Linux Atelier'
  author_email: ''
  author_url: http://glatelier.wordpress.com/2009/06/08/launchpad-y-las-llaves-gpg-solucion-automagica/
  date: !binary |-
    MjAwOS0wNi0wOCAwNTo0Njo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wOCAwNDo0Njo1NyArMDEwMA==
  content: ! '[...] Evans que descarga y agrega por nosotros todas las llaves pÃºblicas
    que no tengamos. MÃ¡s tarde, Source Guru lo extendiÃ³ para que se ejecute automÃ¡ticamente
    cada vez que el sistema intente conectarse a los repositorios, [...]'
- id: 38320
  author: Mantenha as chaves GPG do Launchpad sempre actualizadas!
  author_email: ''
  author_url: http://www.ubuntudicas.com.br/?p=1255
  date: !binary |-
    MjAwOS0wNi0wOCAxMjoyNjoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wOCAxMToyNjoyNyArMDEwMA==
  content: ! '[...] GPG Keys e o segundo blog Ã© do Martin Meredith que, atravÃ©s
    do artigo do Alan Pope, fez o artigo Automated PPA GPG Keys. AtravÃ©s deste Ãºltimo
    poderei explicar como manter o seu sistema sempre actualizado ao nÃ­vel de [...]'
- id: 38333
  author: Validar llaves de GPG de forma automatica &laquo; Ubuntu Life
  author_email: ''
  author_url: http://ubuntulife.wordpress.com/2009/06/08/validar-llaves-de-gpg-de-forma-automatica/
  date: !binary |-
    MjAwOS0wNi0wOCAyMToyMzo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wOCAyMDoyMzo0OSArMDEwMA==
  content: ! '[...] | Source Guru Tema | Alvaro Blue for Dust Wallpaper | Foto del
    aÃ±o [...]'
- id: 38353
  author: Aggingere automaticamente le chiavi GPG dei repository Launchpad
  author_email: ''
  author_url: http://www.gnukhole.com/2009/06/09/aggingere-automaticamente-le-chiavi-gpg-dei-repository-launchpad/
  date: !binary |-
    MjAwOS0wNi0wOSAwMjo0Mjo1NSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0wOSAwMTo0Mjo1NSArMDEwMA==
  content: ! '[...] la parte piÃ¹ lunga, spesso, Ã¨ la ricerca e l&#8217;aggiunta
    delle chiavi GPG. Ieri, tramite questo articolo di Source Guru, sono venuto a
    conoscenza di uno script che scarica ed aggiunge le chiavi dei [...]'
- id: 38592
  author: Validando llaves GPG para PPAs de forma automÃ¡tica &laquo; Un Bioinformatiquillo
  author_email: ''
  author_url: http://bioinformatiquillo.wordpress.com/2009/06/14/validando-llaves-gpg-para-ppas-de-forma-automatica/
  date: !binary |-
    MjAwOS0wNi0xNCAxMDozOTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0xNCAwOTozOTo0MyArMDEwMA==
  content: ! '[...] buena soluciÃ³n la que encuentro en Source Guru, que usa un conocido
    script para validarÂ  automÃ¡ticamente las llaves de PPAs en [...]'
- id: 38831
  author: Peng&#8217;s links for Wednesday, 17 June &laquo; I&#8217;m Just an Avatar
  author_email: ''
  author_url: http://nancib.wordpress.com/2009/06/17/pengs-links-for-wednesday-17-june/
  date: !binary |-
    MjAwOS0wNi0xNyAyMjoxNDo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0xNyAyMToxNDo1MyArMDEwMA==
  content: ! '[...] process of getting the keys for PPA&#8217;a you&#8217;ve already
    added to your sources.list. And Martin Meredith took Alan&#8217;s script and may
    just have made it even [...]'
- id: 39640
  author: LinuxLSC &raquo; Blog Archive &raquo; SoluciÃ³n &#8220;automÃ¡gica&#8221;
    para las llaves GPG de Launchpad
  author_email: ''
  author_url: http://www.linuxlsc.cl/solucion-automagica-para-las-llaves-gpg-de-launchpad
  date: !binary |-
    MjAwOS0wNi0yOSAwMDoxMToyNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNi0yOCAyMzoxMToyNyArMDEwMA==
  content: ! '[...] por Dominic Evans que descarga y agrega por nosotros todas las
    llaves pÃºblicas que no tengamos. Source Guru lo extendiÃ³ para que se ejecute
    automÃ¡ticamente cada vez que el sistema intente conectarse a los repositorios,
    [...]'
- id: 45503
  author: SOURCES.LIST &raquo; Post Topic &raquo; Script di Dominic Evans per automatizzare
    l&#8217;autentificazione dei repository
  author_email: ''
  author_url: http://www.sourceslist.eu/guide/script-di-dominic-evans-per-automatizzare-lautentificazione-dei-repository/
  date: !binary |-
    MjAwOS0xMS0wNiAyMToxOTo1OSArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0xMS0wNiAyMDoxOTo1OSArMDAwMA==
  content: ! '[...] come suggerito da Source Guru, se volete che ad ogni &#8220;sudo
    apt-get update&#8221; venga eseguito automaticamente lo script [...]'
- id: 45505
  author: ingalex
  author_email: allanav@tin.it
  author_url: http://www.sourceslist.eu
  date: !binary |-
    MjAwOS0xMS0wNiAyMTozNzo1NiArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0xMS0wNiAyMDozNzo1NiArMDAwMA==
  content: ! 'Here you can find more than one script to add only missing gpg key or
    all gpg key: http://www.sourceslist.eu/guide/aggiungere-le-chiavi-gpg/'
- id: 305970
  author: goods
  author_email: kvwyvdu@gmail.com
  author_url: http://www.marylandbaseball.org/index.php/forum/3-suggestion-box/176786-rak8---ny2-cp#176786
  date: !binary |-
    MjAxMy0wNS0wNyAwNDo0Nzo1OCArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0wNyAwMzo0Nzo1OCArMDEwMA==
  content: I together with my guys were found to be checking out the good key points
    from your web page then quickly got a horrible feeling I never expressed respect
    to the blog owner for those tips. Those men are already  stimulated to read through
    them and now have extremely been having fun with them. Many thanks for truly being
    indeed kind and then for opting for this kind of great information most people
    are really desperate to be aware of. My honest apologies for not expressing gratitude
    to  earlier.
- id: 609728
  author: minecraft premium account
  author_email: abbeyneeley@gmx.de
  author_url: http://minecraft-premiums.com/
  date: !binary |-
    MjAxNC0wNi0xOCAwMzo1NTowOCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNi0xOCAwMjo1NTowOCArMDEwMA==
  content: ! "Having read this I believed it was rather enlightening. I appreciate
    you finding the time and effort to put this \r\ncontent together.I once again
    find myself personally spending a \r\nlot oof tume both reading and leaving comments.
    But so what, it was still worth it!\r\n\r\n\r\nHere is my site <a href=\"http://minecraft-premiums.com/\"
    rel=\"nofollow\">minecraft premium account</a>"
- id: 673241
  author: Agencja SEO
  author_email: ashlypoupinel@gmail.com
  author_url: http://graffitistyle.pl/profile/?u=8278
  date: !binary |-
    MjAxNC0wOC0xMCAwMzozMTo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0xMCAwMjozMTo0NyArMDEwMA==
  content: ! "Your website must give you a clear message \r\nusing a goal-oriented
    direction, setting you apart from the competition. An HVAC repair clients are
    most \r\noften started by a technician that has learned the trade through previous
    employment.\r\n\" The company sees innovation as one of its core organizational
    competencies.\r\n\r\nmy webpage - <a href=\"http://graffitistyle.pl/profile/?u=8278\"
    rel=\"nofollow\">Agencja SEO</a>"
- id: 676282
  author: Christian Louboutin Pumps
  author_email: casimirascollen@gmail.com
  author_url: http://louboutinshoes-uk.resedio.com/
  date: !binary |-
    MjAxNC0wOC0xMyAwNjoxNzozNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0xMyAwNToxNzozNCArMDEwMA==
  content: ! "Hello! I know this is kind of off topic but I was wondering if you knew
    where I could get a captcha plugin for my comment form?\r\nI'm using the same
    blog platform as yours and I'm having trouble finding one?\r\nThanks a lot!"
- id: 686432
  author: Http://Www.Eurochicago.Com/2011/10/Theodosii-Spassov
  author_email: florenebellingshausen@care2.com
  author_url: http://www.eurochicago.com/2011/10/theodosii-spassov/
  date: !binary |-
    MjAxNC0wOC0yNiAyMToxMjoyOCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yNiAyMDoxMjoyOCArMDEwMA==
  content: ! "Thanks for sharing your thoughts abÖ…ut hellß‹ hero hack ios.\r\n\r\nÆ¦egards"
- id: 694633
  author: sims 3 pets free Download
  author_email: mazieparmley@yahoo.de
  author_url: http://2U.lc/KC3C
  date: !binary |-
    MjAxNC0wOS0wNCAxNjoxNTozNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wNCAxNToxNTozNiArMDEwMA==
  content: ! "Greate post. Keep posting such kind of information on your page.\r\nIm
    really impressed by it.\r\nHey there,  You have performed an excellent job. I'll
    certainly digg it and \r\nfor my part suggest to my friends. I am confident \r\nthey'll
    be benefited from this website.\r\n\r\nmy page ... <a href=\"http://2U.lc/KC3C\"
    rel=\"nofollow\">sims 3 pets free Download</a>"
- id: 711214
  author: latest iphone games 2011
  author_email: elizbeth.bradway@zoho.com
  author_url: http://aboutfamilyhealth.blogspot.ro/2012/06/intermission-time.html
  date: !binary |-
    MjAxNC0wOS0yMSAwNjo0ODoxNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMSAwNTo0ODoxNyArMDEwMA==
  content: Excellent, what a website it is! This blog provides valuable information
    to us, keep it up.
- id: 726665
  author: shoes
  author_email: ''
  author_url: http://scoutwiki.ru/index.php/%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA:MarylynThacker
  date: !binary |-
    MjAxNC0xMC0wNSAxNToyNzo1MSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0xMC0wNSAxNDoyNzo1MSArMDEwMA==
  content: ! '<strong>shoes...</strong>


    Automated PPA GPG Keys Â« Source Guru...'
- id: 727148
  author: sniper elite 3 direct download
  author_email: francisca_lapine@gmail.com
  author_url: http://snipereliteiii.wordpress.com/
  date: !binary |-
    MjAxNC0xMC0wNSAyMzowMDowMiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0xMC0wNSAyMjowMDowMiArMDEwMA==
  content: ! "This is the perfect webpage for everyone who really wants to find out
    about this topic.\r\nYou know a whole lot its almost tough to argue with you (not
    that \r\nI personally would want toâ€¦HaHa). You certainly put a fresh spin on
    a topic that has been discussed for a long time.\r\nGreat stuff, just wonderful!"
permalink: automated-ppa-gpg-keys
---
<p>After reading <a href="http://popey.com">Alan Pope</a>'s recent post on <a href="http://popey.com/Easy_Script_To_Get_And_Install_PPA_GPG_Keys">installing GPG keys for PPAs easily</a>, I thought I'd have a bit of a hack around.</p>
<p>Personally, I regularly add PPAs to my system, whether it be for <a href="https://edge.launchpad.net/~chromium-daily/+archive/ppa">Chromium Daily Builds</a>, <a href="http://bazaar-vcs.org">Bazaar</a>, <a href="https://edge.launchpad.net/gwibber">Gwibber</a>, or anything else. I've found the most annoying thing is the installation of the GPG keys.</p>
<p>Now, I wouldn't reccomend this for everyone, but, for some, it might be exactly what you've been looking for.</p>
<p>Here's what I did:-</p>
<p>Firstly, I saved the Script that Alan linked to as /usr/local/bin/ppakeys and chmod'd it to 755. I then created a new file, "/etc/apt/apt.conf.d/05ppa" containing the following line</p>
<blockquote><p><code>APT::Update::Pre-Invoke       { "if [ -x /usr/local/bin/ppakeys ]; then /usr/local/bin/ppakeys; fi"; };</code></p></blockquote>
<p>Now, every time I do a "sudo apt-get update" - it'll check for new keys that I need, and install them as neccessary.</p>
<p>Magic!</p>
<p>&lt;edit&gt; Please make sure the quotes are correct if you copy and paste this!&lt;/edit&gt;</p>
