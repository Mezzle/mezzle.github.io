---
layout: post
status: publish
published: true
title: Forum Software - What are your thoughts?
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 152
wordpress_url: http://www.sourceguru.net/?p=152
date: !binary |-
  MjAwOC0wOC0yOSAyMjowMTo0MyArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wOC0yOSAyMTowMTo0MyArMDEwMA==
categories:
- Personal
tags: []
comments:
- id: 24478
  author: Stefano F. (tacone)
  author_email: tacone@gmail.com
  author_url: http://www.stefanoforenza.com
  date: !binary |-
    MjAwOC0wOC0yOSAyMzozMjo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0yOSAyMjozMjo1NCArMDEwMA==
  content: ! "Not sure about what you mean for abstracted Api.\r\nAs the main issue
    with forums is integrating them with your other existing websites I'd like to
    have good plugin architecture. \r\nSo you could plug-in an alternative Users datastore,
    alternative users login etc.\r\n\r\nIn my experience, the user's authentication
    and storing (which db table, which fields, etc) is the main issue.\r\n\r\nThen
    follows last post local/remote retrieval, thread retrieval, thread posting etc,
    but that's more easy usually."
- id: 24483
  author: Michael "The perfect forum" Howell
  author_email: mhowell123@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0zMCAwMDozMToxOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0yOSAyMzozMToxOSArMDEwMA==
  content: ! "The perfect web software (forums included):\r\n1) Should work in an
    SOA/ROA/RESTful manner and include built-in WSDL support.\r\n2) Should be written
    in C/C++ (FAST!!) and support dynamically loadable plug-ins using an abstracted
    core. (NOTE: C/C++ is the least important of the requirements) (NOTE2: I'd prefer
    C++)\r\n3) Should produce valid _and semantic_ HTML or XHTML (depending on the
    capability of the browser).\r\n4) Should support CSS style-sheets.\r\n5) Should
    not produce different pages for different browsers (except in the aforementioned
    HTML/XHTML switch, though they shouldn't be very divergent).\r\n6) Should support
    OpenID user registration."
- id: 24490
  author: Bugsbane
  author_email: bugsbane@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0zMCAwMjowNzo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwMTowNzo0OSArMDEwMA==
  content: ! "1. Ability (but requirement) to have Slashdot style community moderation.
    Trying to moderate a large forum without a whole stack of moderators is a pain!\r\n\r\n2.
    Ability to have the system send moderators \"warnings\" when particular users
    post or particular regex phrases occur in posts/PM's.\r\n\r\n3. Unintrusive spambot
    protection."
- id: 24493
  author: T. J. Brumfield
  author_email: enderandrew@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0zMCAwMjoyNzo0MCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwMToyNzo0MCArMDEwMA==
  content: ! "A modular API with plugins seems like a great way to go, but the problem
    with modular hooks is that they're not good for performance.  You get all these
    calls.  What I'd like to see is a series of plugins/modules/addons that are more
    like patches.  Have people write a bunch of mods, but instead of calling them
    with hooks, install them like a standard diff/patch, so in the end, you're not
    killing performance.  It would be nice to have a repository of modules/patches/addons,
    to keep track of which ones you've installed, which ones conflict with one another,
    and how to resolve those conflicts.  When you keep track of which ones you have
    installed, you can uninstall them with ease.\r\n\r\nAlso, look at something like
    phpbb which needs to run in all kinds of languages.  That is great since the whole
    world can use it, but for almost all use-cases, the forum itself with operate
    with one language.  Why have all the language hooks?  I'd prefer to see a diff
    file that targets all the strings.  People can translate that diff file, but the
    end product uses direct strings rather than look up the version.\r\n\r\nDo the
    same thing with themes/templates.  Instead of dynamically creating the page more
    with the template, use a diff again.  Each theme is a diff from vanilla, and you
    can revert the diff to go back to vanilla, and then install another theme.\r\n\r\nIn
    the end, your page generation times will be less, and there will be fewer DB calls.
    \ Performance goes through the roof."
- id: 24494
  author: T. J. Brumfield
  author_email: enderandrew@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0zMCAwMjozNjozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwMTozNjozOCArMDEwMA==
  content: ! "I'd like to addon to previous comments.  I know just enough PHP and
    SQL to get myself in trouble, but I'd love to develop a truly superb forum software
    package for personal use.  I'm all for keeping it OSS and letting others benefit.
    \ I don't have the skills to start anything from scratch and what I'm looking
    at doing is taking something like phpbb3, installing mods, integrating gallery2,
    integrating wordpress and then trying to streamline it for performance.  As phpbb3
    continues development, I'd try to patch in diffs from their latest branch.\r\n\r\nI
    want something very much feature rich in what it provides, while not dogging on
    performance.  If you take a look at something like phpbbfm, not only is it gaudy
    (poor choice of modules they've added) you get horrid performance.  They go nuts
    on SQL calls for useless features.\r\n\r\nLastly, the other big thing is to make
    _good_ use of AJAX features.  Why do all forums still use an ancient interface?
    \ Don't add eye candy that offers no real improvement, but why not utilize stuff
    like lightbox for images, ajax pop-up search boxes, auto-complete, etc?  PMs should
    also be ajax pop-ups as opposed to pop-up windows.  You should be able to drag
    the interface of the forum around, close down a section, open another up, etc.
    \ Reduce page-loads and allow a customizable interface that users will enjoy."
- id: 24497
  author: Big Dan
  author_email: dan@bigdan.us
  author_url: http://www.vbulletinadmin.com
  date: !binary |-
    MjAwOC0wOC0zMCAwMzoyMToxMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwMjoyMToxMiArMDEwMA==
  content: ! "I'm no developer and couldn't build my own forum script however I do
    run a couple of vBulletin based forums which seems to be the best out there currently,
    I can understand the reason why Ubuntu Forums runs on vB. My preference for forum
    software goes like this: vBulletin &gt; MyBB &gt; phpBB. \r\n\r\nHaving worked
    alot with just about all forum package except for IPB the following things seem
    to be missing or poorly implemented.\r\n\r\nTemplating System: In most forum packages
    everything is controlled by templates which a first look is a great idea, however
    once you customize the template, which nearly everyone does as who wants to run
    a board? version upgrades especially major upgrades bring all kinds of headaches
    and many templates that have to manually edited. I have no ideas on how to overcome
    this short coming but something should be done. \r\n\r\nUpgrades: If your software
    frequently releases updates, it should be able to auto update itself or at least
    download the package on it's own and let the user actually run the upgrade. None
    of this download the package from one site, decompress it, and overwrite the server
    side files via FTP. It's time consuming busy work. \r\n\r\nAdd-ons: It would be
    nice if addons were easier to install again I'd be very happy if I never had to
    see another FTP client. :D\r\n\r\nThanks for listening,\r\nDan"
- id: 24502
  author: Henry Miller
  author_email: hank@millerfarm.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0zMCAwMzo1ODowMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwMjo1ODowMiArMDEwMA==
  content: ! "I always want this more than anything else:  For every thread, when
    I click on it, it needs to take me to the next message after the last one I read.
    \  Many of them know which threads I've read, but in long threads I have no clue
    what page to visit to start today where I left yesterday.  Many of the last read
    threads are based on when I last visited the forum as a whole, and not the thread
    itself, which is annoying in itself.\r\n\r\nI'd like to see a NNTP interface to
    I can use a better client than a web browser as well.  (This would take care of
    the other problems), but it appears that this is a much harder problem than I
    would think as I've never seen it."
- id: 24506
  author: bÃ¸rge
  author_email: mail@forteller.net
  author_url: http://forteller.net/
  date: !binary |-
    MjAwOC0wOC0zMCAwNDoxMzoyNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwMzoxMzoyNiArMDEwMA==
  content: I love how the <a href="http://newsboard.unclassified.de/" rel="nofollow">Unclassified
    Newsboard</a> forum software lets you get a msg trough Jabber/XMPP when there's
    a new post in a thread you're active in. I wish more forum software had support
    for that.
- id: 24512
  author: Michael "ideas" Howell
  author_email: mhowell123@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0zMCAwNjoyNDo1MiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwNToyNDo1MiArMDEwMA==
  content: ! "IMO, the perfect forum software would:\r\n1) Be ROA/RESTful, and have
    built-in support for WSDL.\r\n2) Produce valid and semantic XHTML (or HTML if
    the browser doesn't support XHTML).\r\n3) Support plug-ins on an abstracted core.\r\n4)
    Be written in C++ (FAST!) and support runtime loaded plug-ins.\r\n5) Support CSS
    style-sheets.\r\n6) Besides the HTML/XHTML switch, produce the same markup for
    all browsers.\r\n7) Support OpenID sign-in (preferably as a removable plug-in).\r\n8)
    Produce RDFa meta-data."
- id: 24514
  author: Bogdan Bivolaru
  author_email: bogdan.bivolaru@gmail.com
  author_url: http://bogdanfreedom.wordpress.com
  date: !binary |-
    MjAwOC0wOC0zMCAwNjozMDo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwNTozMDo0OSArMDEwMA==
  content: That API based forum would be truly useful. None found so far
- id: 24541
  author: Bert Van de Poel
  author_email: bert@bhack.net
  author_url: http://www.bhack.net
  date: !binary |-
    MjAwOC0wOC0zMCAwOToyNjozNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwODoyNjozNyArMDEwMA==
  content: A long time ago I did start to make my own forum with certain ideals and
    structures but I never finished it, the plan was to make a forum that was very
    simple, for users that didn't know a lot about how forums and other webapps function,
    it would be almost not customisable (only with a css file) to make things even
    easier. It would have the basic function that all forums have but nothing extra,
    no plugins or whatever. I thought that people who don't know a lot about webdesign
    could use it for an easy forum and also system admins and that kind of people
    for quick forums that don't need a lot of administration.
- id: 24544
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0wOC0zMCAwOTo1Mzo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwODo1Mzo0OSArMDEwMA==
  content: ! "What I mean by an abstracted API is so that, for example, another application
    can automatically link into the system, so they can, for example, have all their
    session and user management stuff done by calling\r\n\r\nSession::LoadUser();\r\n\r\nor
    similar, meaning that the base core components are there for anyone to use.\r\n\r\nI'm
    thinking along the lines of a Framework style thing, however, most of the frameworks
    out there don't go as far as that, (eZc being a noted exception) as far as I'm
    aware, and just put an abstraction on the bits that you'd use to put together
    something (form creation, input cleaning, etc etc) - whereas what I'm thinking
    of would go a step further, so that you can easily include all the functionality
    of the forums with a simple call, and have the backend use it, so you don't have
    to do special code checks to see if a user is logged in, or if a user has a special
    permission. You just call\r\n\r\nUser::is_admin();\r\n\r\nAnd that lets you know
    whether the user is an admin, displays a login form (from the main app) if there
    is one needed, etc etc.\r\n\r\nMichael, as much as C++ is great, it's not the
    easiest thing to write a web-app in.\r\n\r\nRegarding automated update. While
    it'd be nice, it's not particularly feasible.. :( Things being broken, etc etc.
    \r\n\r\nI think regarding automated updates, something along the lines of Bzr
    would work well for that, espescially if you have local modifications.\r\n\r\nActually,
    come to think of it, bzr would be great for add-ons etc etc. You could just\r\n\r\nbzr
    merge http://location/to/some/cool/feature\r\n\r\nAnd then it'd set it all up
    for you..."
- id: 24553
  author: Jelmer Vernooij
  author_email: jelmer@samba.org
  author_url: http://samba.org/~jelmer/
  date: !binary |-
    MjAwOC0wOC0zMCAxMDo0NzoxMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAwOTo0NzoxMyArMDEwMA==
  content: A mailing list or NNTP gateway would be a killer feature.
- id: 24557
  author: Milian Wolff
  author_email: mail@milianw.de
  author_url: http://milianw.de
  date: !binary |-
    MjAwOC0wOC0zMCAxMjo1MjowNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0zMCAxMTo1MjowNyArMDEwMA==
  content: ! "Most important things to me (and I've worked with phpBB 2+3, SMF and
    others):\r\n\r\n- easy integration with other Software, like $CMS, $SHOP, etc.,
    single-sign-on would be sufficient, but shared user-databases etc. would be even
    better.\r\n- plugin based =&gt; OpenID support, Mollom/Akismet integration, etc.
    etc.\r\n- clean separation of templates from PHP code, Drupal is a good example
    here for a job well done."
- id: 32996
  author: Nita
  author_email: sunshinegirl@usfcralliance.org
  author_url: http://www.usfcralliance.org/forums/
  date: !binary |-
    MjAwOS0wMi0yMSAxNjowODo1MyArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0yMSAxNTowODo1MyArMDAwMA==
  content: ! "Interesting topic!\r\n\r\nI have an IT (all mainframe) background. Once
    upon a time back in the mid eighties, myself and two other guys working through
    a consulting company designed and developed a â€œVariable Clinical Studiesâ€\x9D
    system for American Optical in western Massachusetts. That system was CICS/COBOL
    driven and contained a user control screen much the same as you see in vB software
    but, it was much more detailed/complex in terms of the creation of a clinical
    studies system, which of course would vary from study to study.\r\n\r\nThe primary
    user, usually a doctor, would define what the system screens, reports, and maintenance
    criteria IE: batch updates, backups of data files etc., would consist of. Basically
    that included everything, such as all calculations to achieve the desires results,
    how the screens would appear on the end users terminal, and all hard copy reports
    generated by the system - directly from the user control screen, which we would
    call a control panel today.\r\n\r\nIn a nutshell, that would be the ultimate forum
    software of the day! If I can ever get to the point of understanding xml, php,
    javascript, blah, blah, blah, I intend to write such a software system. For now
    though, I'm just trying to get a vB board up and running. The test version of
    that board will be the foundation I'll use to create the beast mentioned above.\r\n\r\nI've
    only been working on learning all this new stuff for about 2 years so don't expect
    anything soon, HA!\r\n\r\nRegards,\r\nNita"
- id: 292924
  author: promovare web
  author_email: connie_jasper@arcor.de
  author_url: http://Www.glasgowstudent.net/forum/profile.php?id=230913
  date: !binary |-
    MjAxMy0wMy0xMSAxNjoyNzozMSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMy0xMSAxNjoyNzozMSArMDAwMA==
  content: ! "I just could not go away your web site before suggesting \r\nthat I
    actually enjoyed the standard information an individual \r\nsupply for your visitors?
    Is going to be again continuously in \r\norder to check out new posts"
- id: 364202
  author: beer city usa
  author_email: raquelervin@freenet.de
  author_url: http://www.mycroburst.com/users/connorlopez23
  date: !binary |-
    MjAxMy0xMC0xNyAyMzozODoyNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0xMC0xNyAyMjozODoyNSArMDEwMA==
  content: I'm excited to uncover this site. I need to to thank you for your time
    just for this wonderful read!! I definitely enjoyed every part of it and I have
    you book marked to check out new information on your website.
- id: 420251
  author: Osvaldo Dubonnet
  author_email: emilialionel@gmail.com
  author_url: http://www.peninsula-benefits.com/2014/01/baboon-syndrome-the-case-of-antibiotic-complication/
  date: !binary |-
    MjAxNC0wMS0wNiAxMDoxMjoyMyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0wNiAxMDoxMjoyMyArMDAwMA==
  content: ! "I am no longer positive where you're getting your information, however
    good \r\ntopic. I must spend a while finding out much more or understanding \r\nmore.
    Thanks for fantastic info I was on the lookout for this information for my mission."
- id: 435748
  author: malware antivirus software
  author_email: margret.fine@yahoo.com
  author_url: http://www.shisha-forum.co.uk/user/83417-ceceliax7/
  date: !binary |-
    MjAxNC0wMS0zMCAxODoxMzozNSArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0zMCAxODoxMzozNSArMDAwMA==
  content: ! "The last but not least, you need to be very prudent to remove \r\nfake
    Malware Protection virus related files and entries, because \r\nany mis-operation
    may lead to system failure, just click here and ask online \r\ncomputer experts
    for help  to remove Fake Malware Protection virus \r\ncompletely. t make any alteration
    to the default setting of the program and \r\nlet the installation finished without
    any changes.\r\nDesired search will not be done by the search engine taking the
    user \r\nto the unknown links."
- id: 488132
  author: 0q52tlq3ap
  author_email: ovstqscck@aol.com
  author_url: ''
  date: !binary |-
    MjAxNC0wMy0yNCAwMTo0NToyMyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMy0yNCAwMTo0NToyMyArMDAwMA==
  content: yayhd4 zDThu55 hhtoa63 rrnBJ31 tkfnc20 bzIzx49 TMjvo90 ucFHj3
- id: 565606
  author: sky contact number
  author_email: fredagalway@gmail.com
  author_url: https://Www.youtube.com/user/contactnumbers
  date: !binary |-
    MjAxNC0wNS0xNCAxMToyMzoyNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0xNCAxMDoyMzoyNiArMDEwMA==
  content: ! "IT departments tend to think in isolation when it comers to tthe I.\r\nTo
    qualify for a bookkeeper position you \r\nshould have at leasxt taken a four year
    collegiate course in Accounting or any \r\nBusiness course. Her boss believes
    that weeken team building events are good for morale, team spirit and \r\nvery
    motivational."
- id: 583599
  author: csr racing hack android free download no survey
  author_email: bethsherman@gmail.com
  author_url: http://linavahi.wordpress.com/2014/04/21/free-download-csr-racing-apk-hack-full-version/
  date: !binary |-
    MjAxNC0wNS0yNSAyMjo1ODo1OCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yNSAyMTo1ODo1OCArMDEwMA==
  content: ! "Heya i am for the first time here. I came across this board \r\nand
    I find It truly useful &amp; it helped me \r\nout much. I hope to give something
    back and aid others like you helped me."
- id: 586622
  author: csr racing hacker.rar
  author_email: alexshepherdson@inbox.com
  author_url: http://ooo211.ru/otzyvy.html
  date: !binary |-
    MjAxNC0wNS0yNyAxOTo0NTozNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yNyAxODo0NTozNyArMDEwMA==
  content: ! "This is really interesting, You're a very skilled blogger. I have joined
    your \r\nrss feed and look forward to seeking more of \r\nyour great post. Additionally,
    I've shared your web site in my \r\nsocial networks"
- id: 629367
  author: bet on the sports
  author_email: corneliusboothe@fastmailbox.net
  author_url: http://alibaba.com
  date: !binary |-
    MjAxNC0wNy0wMSAyMzo0NDowMyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0wMSAyMjo0NDowMyArMDEwMA==
  content: ! "Thank you for sharing your info. I really appreciate your efforts and
    I am waiting for your further post thanks once \r\nagain."
- id: 638797
  author: cheap oakley asian fit sunglasses
  author_email: fqauqsr@gmail.com
  author_url: http://www.manyoksunglasses.com/oakley-sunglasses-oakley-asian-fit-sunglasses-sale-16_19.html
  date: !binary |-
    MjAxNC0wNy0wOCAwMjoxMTozNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0wOCAwMToxMTozNyArMDEwMA==
  content: ! "Reviews Best Classes Telephones Notebooks Televisions Pills Camcorders
    Devices Vehicle Technology Audio Personal computers Software Headphones Laser
    printers Networking Wearable Technology Discounts\r\ncheap oakley asian fit sunglasses
    http://www.manyoksunglasses.com/oakley-sunglasses-oakley-asian-fit-sunglasses-sale-16_19.html"
- id: 642635
  author: Salvatore Cokely
  author_email: nathanielheysen@care2.com
  author_url: https://www.ohloh.net/accounts/CoffeeMakers9841
  date: !binary |-
    MjAxNC0wNy0xMCAyMToxMToyNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0xMCAyMDoxMToyNCArMDEwMA==
  content: ! "I used to be recommended this web site via my cousin. I am now not certain
    whether this submit is written through him as nobody else recognize such special
    approximately my difficulty.\r\nYou are incredible! Thanks!"
- id: 647335
  author: Absolutpr
  author_email: albertokon999@gmail.com
  author_url: http://kovrik.info/internet_magazin/voylochnie_kovri
  date: !binary |-
    MjAxNC0wNy0xNSAwNDo1NDowMiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0xNSAwMzo1NDowMiArMDEwMA==
  content: ! "Hellow .\r\nGorgeous here. I liked it!\r\nKeep up the good work! :)"
- id: 672176
  author: Floyd Brewer
  author_email: ''
  author_url: http://www.white2do.com/?document_srl=851580
  date: !binary |-
    MjAxNC0wOC0wOSAwNTo0MDoyMyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0wOSAwNDo0MDoyMyArMDEwMA==
  content: ! '<strong>Floyd Brewer...</strong>


    Forum Software - What are your thoughts? Â« Source Guru...'
- id: 684916
  author: Meir Ezra Business Strategies
  author_email: michalestarling@gmail.com
  author_url: http://vimeo.com/74021257
  date: !binary |-
    MjAxNC0wOC0yNSAwMzo0NToxMCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yNSAwMjo0NToxMCArMDEwMA==
  content: ! "As a part of my management training with the BMW Group, we received
    a 3 day coaching course, having \r\na 2 day follow up. If you do not possess a
    full-blown POS system on your retail business, you happen to be losing money --
    guaranteed.\r\nAfter cold calling on 100 prospects take a step \r\nback and evaluate
    that which you saw."
- id: 690669
  author: ppc.ciac.jl.cn
  author_email: ''
  author_url: http://ppc.ciac.jl.cn/awstats7/cgi-bin/awstats.pl?framename=mainright&amp;output=refererpages
  date: !binary |-
    MjAxNC0wOC0zMSAwNTo1NDo0OSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0zMSAwNDo1NDo0OSArMDEwMA==
  content: ! '<strong>ppc.ciac.jl.cn...</strong>


    Forum Software - What are your thoughts? Â« Source Guru...'
- id: 692531
  author: Latanya
  author_email: latanyaredman@gmail.com
  author_url: https://Www.Youtube.com/watch?v=DrQBXd7DCkQ&amp;feature=youtu.be
  date: !binary |-
    MjAxNC0wOS0wMiAxMTo0MjozMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wMiAxMDo0MjozMSArMDEwMA==
  content: ! "Iâ€™m not that much of a internet reader to be honest but your \r\nblogs
    really nice, keep it up! I'll go ahead and bookmark \r\nyour website to come back
    later. Cheers"
- id: 702085
  author: repairs roofing
  author_email: lolacanter@gmail.com
  author_url: http://free.yudu.com/library/662744/doylelffv-s-Library
  date: !binary |-
    MjAxNC0wOS0xMSAyMzo0NzozMyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xMSAyMjo0NzozMyArMDEwMA==
  content: ! "In case the assessment districts unequal appraisal analysis documents
    \r\na reduction, both the informal appraiser or even the ARB should probably make
    the adjustment in assessed worth for you.\r\n\r\nUsing damaged materials, such
    as cracked shingles, \r\ncan be a primary cause of a leak right from the start.\r\nIf
    the heavy rain has not only destroyed your roof, then try to go through roofing
    \r\ncontractors Atlanta, which will provide different contracting services.\r\n\r\n\r\nMy
    weblog ... <a href=\"http://free.yudu.com/library/662744/doylelffv-s-Library\"
    rel=\"nofollow\">repairs roofing</a>"
- id: 712411
  author: Rent A Dumpster Jacksonville VT
  author_email: selma.chinn@bigstring.com
  author_url: http://www.rent-dumpster.com/vermont/rent-a-dumpster-in-jacksonville-vt/
  date: !binary |-
    MjAxNC0wOS0yMiAyMDoyMzozOCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMiAxOToyMzozOCArMDEwMA==
  content: ! "Griffin Waste not solely presents price-efficient junk elimination and
    dumpster leases, \r\nhowever is also actively concerned in preserving the Asheville
    area's pure surroundings.\r\nWhen you've got lots of associates who own vehicles
    or if you have tons of \r\ntrashcans, you won't want a roll off rental."
- id: 718661
  author: Tatiana
  author_email: kermitslowik@freenet.de
  author_url: http://bing.com
  date: !binary |-
    MjAxNC0wOS0yOSAwMDo0MTo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yOCAyMzo0MTo1NiArMDEwMA==
  content: ! "Hello there! I know this is kinda off topic however I'd figured I'd
    ask.\r\nWould you be interested in trading links or maybe guest writing a blog
    post \r\nor vice-versa? My website goes over a lot of the same topics as yours
    and I think \r\nwe could greatly benefit from each other. If you are interested
    feel free to shoot me an e-mail.\r\nI look forward to hearing from you! Fantastic
    blog by the way!"
- id: 726352
  author: http://immortalpoetry.com/
  author_email: murraykearns@freenet.de
  author_url: http://immortalpoetry.com/User:DeliaSaucier
  date: !binary |-
    MjAxNC0xMC0wNSAwNzoxNzoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0xMC0wNSAwNjoxNzoyNyArMDEwMA==
  content: ! "I would like to thank you for the efforts you've put in writing this
    website.\r\nI really hope to check out the same high-grade content from you later
    on as \r\nwell. In truth, your creative writing abilities \r\nhas motivated me
    to get my very own website now ;)"
permalink: forum-software-what-are-your-thoughts
---
<p>Having worked for two different competitors in the Forum Software Market, and watching over the last few months at the ranting and raving about the incompetency of these companies and others (Not by me, but by others - I can't (for legal reasons) express my personal opinions regarding them) It's led me to ask the question.</p>
<blockquote><p>If you were to write your own, perfect Forum Software, what features would it have, and what would be "special" about it?</p></blockquote>
<p>Personally, I'd like to see a Forum System that had an abstracted API at it's core, so addon features could be added nicely. I'd also like to see that it'd be a RESTful system (or at least work in a Resource Oriented Architectural Manner)</p>
<p>So, tell me your thoughts...</p>
