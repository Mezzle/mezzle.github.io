---
layout: post
status: publish
published: true
title: This whole GPG/PGP thing
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 210
wordpress_url: http://www.sourceguru.net/?p=210
date: !binary |-
  MjAwOS0wNS0xMCAxOTowMDozNCArMDEwMA==
date_gmt: !binary |-
  MjAwOS0wNS0xMCAxODowMDozNCArMDEwMA==
categories:
- Personal
tags: []
comments:
- id: 36765
  author: Tuss
  author_email: albin@luftslott.org
  author_url: http://luftslott.org
  date: !binary |-
    MjAwOS0wNS0xMCAyMDozNzowMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAxOTozNzowMyArMDEwMA==
  content: Well, another problem is SHA-1 seems to be the default for cryptsetup,
    which means both my hard drives in my laptop are encrypted in a way that uses
    SHA-1 for something (I have yet been unable to find out what).
- id: 36767
  author: Lee
  author_email: lee.b@irukado.org
  author_url: http://irukado.org
  date: !binary |-
    MjAwOS0wNS0xMCAyMDo1MjozNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAxOTo1MjozNiArMDEwMA==
  content: ! 'I haven''t followed the sha-1 stuff lately, but generally speaking,
    the problem does apply to signatures too... The issue is that, if the hash algorithm
    is compromised, then you can potentially CRAFT data that matches the desired signature
    -- i.e., YOUR signed work.  In other words, you signature can be forged, with
    all the implications that a person being able to forge your signature raises:
    things you send others can''t be trusted.  Things others trust "from you" with
    could do all sorts horrible damange to you or them or lots of people.  Basically,
    either you need the signature and the quality of the signature algorithm matters,
    or you don''t need it at all.  If you don''t need a signature, but use a flawed
    one anyway, it''s worse than just not using one, because it encourages a false
    sense of security for everyone involved.'
- id: 36768
  author: Kristof Provost
  author_email: Kristof@sigsegv.be
  author_url: http://www.sigsegv.be
  date: !binary |-
    MjAwOS0wNS0xMCAyMDo1ODozNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAxOTo1ODozNiArMDEwMA==
  content: ! "You're right, SHA-1 isn't broken yet, but  the point is to to replace
    any use  _before_ it's broken. \r\nWe don't want to get caught with our (metaphoric)
    pants down, having to replace a completely broken broken algorithm now, now, now."
- id: 36770
  author: Fri13
  author_email: friiduh@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNS0xMCAyMTowMjozMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAyMDowMjozMCArMDEwMA==
  content: If only the SHA-1 is "cracked", why not just move to SHA-2 (256/512/768bit
    etc)?
- id: 36773
  author: Debianero Rumbero
  author_email: debian@rul.es
  author_url: http://www.debian.org
  date: !binary |-
    MjAwOS0wNS0xMCAyMTozODo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAyMDozODo0NyArMDEwMA==
  content: ! "@Fri13, look at the comments in this post answering your question:\r\n\r\nhttp://www.debian-administration.org/users/dkg/weblog/48"
- id: 36775
  author: Flo
  author_email: florian@kriener.org
  author_url: ''
  date: !binary |-
    MjAwOS0wNS0xMCAyMTo0NToxNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAyMDo0NToxNCArMDEwMA==
  content: Yes you are right, you are safe from harm, except, that if a hacker can
    find a collision with the sha-1 hash of your banks certificate or even the roots
    certificate he can do a man in the middle attack without you ever figuring it
    out before it's too late.
- id: 36776
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOS0wNS0xMCAyMjowMTo1MiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAyMTowMTo1MiArMDEwMA==
  content: ! "Lee, as far as I'm aware, the SHA1 issues are a birthday attack only.
    Meaning that they'd have to find a collision. It doesn't work backwards. \r\n\r\nTo
    get a collision for a MEANINGFUL message would still take a long time.. And by
    meaningful I mean one that's written in plain text, in english, without random
    things popping up etc etc etc.\r\n\r\nThe main issue with birthday attacks is
    some sort of document that allows spurious hidden data, which plain text does
    not allow."
- id: 36777
  author: Simon
  author_email: simon@technocool.net
  author_url: ''
  date: !binary |-
    MjAwOS0wNS0xMCAyMjowNzo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAyMTowNzo1NCArMDEwMA==
  content: ! "The bad guys are good at hiding stuff.\r\n\r\nIf you sign change files
    - just be sure not to sign any with extensive comment changes in, or any particularly
    large one (such that rarely used code could be removed and replaced with commented
    padding), and it'll probably be okay because probably no one will try and meddle
    with it anyway. Indeed lets not bother signing it because it isn't often someone
    tries to insert malicious code.\r\n\r\nI think the bigger issue is that SHA-1
    is used extensively throughout all the HTTPS cryptographic infrastructure."
- id: 36778
  author: mahoutsukai
  author_email: kloecker@kde.org
  author_url: ''
  date: !binary |-
    MjAwOS0wNS0xMCAyMjoyNjozNCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMCAyMToyNjozNCArMDEwMA==
  content: ! "Read this thread (from gnupg-users):\r\nhttp://markmail.org/message/adcxxcv3uewm5wob\r\n\r\nIn
    particular, read the following message:\r\nhttp://markmail.org/message/i746cxydmtdf73om\r\n\r\nQuote:\r\n\"Also
    note that the results are about collision attacks and not about\r\nsecond preimage
    attacks.  Thus the whole thing basically boils down to\r\nthe concept of non-repudiation;
    something which is very hard to achieve\r\nanyway.\"\r\n\r\nIOW: The new results
    on finding collisions of SHA-1 do not affect your usage of OpenPGP in any way."
- id: 36790
  author: Daniel Kahn Gillmor
  author_email: dkg@fifthhorseman.net
  author_url: http://cmrg.fifthhorseman.net/wiki/dg
  date: !binary |-
    MjAwOS0wNS0xMSAwNToxNToyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMSAwNDoxNToyMyArMDEwMA==
  content: ! "Mez--  I appreciate your skepticism.  And i have no specific, demonstrated
    exploit to point you toward.  Making a new key is a proactive step toward a healthy
    web of  trust and OpenPGP systems that can survive further compromises of SHA-1.
    \ And currently, we don't even have a way to explicitly deprecate signatures based
    on SHA-1 in our most widely-used OpenPGP implementation.  So it's not a situation
    where a panic or immediate abandonment of anything related to SHA-1is a healthy
    (or even possible) response.\r\n\r\nI wanted to clarify what look like a few misconceptions
    in your post: you do make non-plain-text signatures, at least when you certify
    other people's User IDs (you have three such certifications over other DDs at
    least).  And even for plaintext data, a possible collision attack against a digest
    algorithm might very well be able to take advantage of  random-looking fields
    in the text messages.  For example,  creating an XS-Tumor: pseudo-header in a
    .dsc, URL in a changelog entry, or e-mail signature lines (\"geek code\"?) that
    look a lot like line noise.     You might also be interested in reading <a href=\"http://kitenet.net/~joey/blog/entry/sha-1/\"
    rel=\"nofollow\">Joey Hess' description of an (entirely theoretical) SHA-1-based
    attack on signed tags in git</a>.   I grant you that getting you to sign something
    containing these right now would be very unlikely, but it's worth playing through
    the scenario as a hypothesis -- what if this kind of attack becomes more realistic
    in two years?  in five?  what are our options in response?  how does our infrastructure
    need to change to be able to respond robustly to such a situation?  what kind
    of groundwork can we lay to prepare for it?\r\n\r\nI'm also <em>not</em> not aware
    that the recently-announced attacks against SHA-1 have anything to do with its
    use in a password-hashing context.  Do you really think it's necessary to migrate
    away from SHA-1for that problem space?  Can you describe the scenario you're concerned
    about or point me to some reading?\r\n\r\nI don't think anyone is asking you to
    immediately replace your OpenPGP key, but i do think it's a good idea to create
    a new key that is capable of making longer-than-SHA1 signatures, which your current
    1024-bit DSA key is not.  You can use your old key in places where you need to
    right now (for example, where you need to rely on the existing certifications,
    or where your key is already in the debian keyring).  And it's OK if the transition
    takes a while, too.  I outlined a 3-month timeframe to give an example of a concrete
    plan (and to reflect my own experience with a successful key transition), but
    there are obviously people for whom the transition could be reasonably faster
    or slower."
- id: 36805
  author: Andy
  author_email: andy-sourceguru@ultra-premium.com
  author_url: http://www.ultra-premium.com/b
  date: !binary |-
    MjAwOS0wNS0xMSAxMDoxNDozNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wNS0xMSAwOToxNDozNyArMDEwMA==
  content: ! "If you are super paranoid, just make sure you never sign something you
    didn't create or modify (this goes for any hash algorithm).\r\n\r\nThe attack
    here is to create two things which have the same hash, and get the victim to sign
    one that says \"I'd like a free puppy\". The signature then gets attached to the
    \"Kill all puppies\" message, and is valid.\r\n\r\nGenerally, these two \"things\"
    will be more complicated than plain text, e.g. they might be postscript files,
    which support conditionals. So you can write something like:\r\n\r\nif A=A:\r\n
    render(\"I'd like a free puppy\")\r\nelse:\r\n render(\"Kill all puppies\")\r\n\r\n\r\nand\r\nif
    A=B:\r\n render(\"I'd like a free puppy\")\r\nelse:\r\n render(\"Kill all puppies\")\r\n\r\nWhere
    \"A\" and \"B\" hash to the same thing (and then you have to also make the blocks
    in the hash line up... but that is just details). Now you have two documents which
    will look normal when viewed, but can have arbitrary content."
- id: 566166
  author: ogÅ‚oszenia drobne biaÅ‚ystok
  author_email: samantha.sleep@arcor.de
  author_url: http://www.lastfm.pl/user/Kazik266
  date: !binary |-
    MjAxNC0wNS0xNCAxODoyOToyNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0xNCAxNzoyOToyNiArMDEwMA==
  content: ! "Hello to every body, it's my first pay a quick visit of this \r\nweb
    site; this blog contains remarkable and genuinely good \r\ninformation designed
    for visitors.\r\n\r\nmy web-site: <a href=\"http://www.lastfm.pl/user/Kazik266\"
    rel=\"nofollow\">ogÅ‚oszenia drobne biaÅ‚ystok</a>"
- id: 567005
  author: ogÅ‚oszenia drobne
  author_email: edmundosteven@freenet.de
  author_url: http://tokidt.pinger.pl/
  date: !binary |-
    MjAxNC0wNS0xNSAwOToyMDo1MiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0xNSAwODoyMDo1MiArMDEwMA==
  content: ! "Thanks to my father who told me on the topic of this web site,\r\nthis
    blog is really awesome.\r\n\r\nMy page: <a href=\"http://tokidt.pinger.pl/\" rel=\"nofollow\">ogÅ‚oszenia
    drobne</a>"
- id: 708144
  author: cod black ops zombie crack
  author_email: indiana.grogan@gmail.com
  author_url: http://rumblegames.weebly.com/metro-last-light-how-much-time-do-you-play-for-this-game.html
  date: !binary |-
    MjAxNC0wOS0xOCAwMjoyODoyNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xOCAwMToyODoyNCArMDEwMA==
  content: ! "What a data of un-ambiguity and preserveness of precious knowledge \r\nabout
    unexpected feelings."
permalink: this-whole-gpgpgp-thing
---
<p>So, SHA-1 has potential exploits, but you know what? I only use it for signing plain text things. Email, change files... I've no reason to use it for encryption, as I don't encrypt things</p>
<p>Surely, if anyone is going to make something that collides with a valid signature of mine, it's going to either a) be noticable to the person reading it (random characters in an email?) or b) not be processable by whatever automated sytem is using it.</p>
<p>I've yet to hear of any exploit that could affect the way I use SHA-1 in a meaningful way. Ok, yes, I'm not going to be using it to hash passwords in future (well, GPG uses it to hash passwords, but generally, to be able to crack that, someone would have to have my secret key anyway, which I would count as being compromised!)</p>
<p>If someone can give me a real world example of how this can be used against me, I might go out of my way to replace my key, but for now, I don't see the need. Ok, I might take the next time I meet up with a fellow Debian Developer as a chance to replace my key, but I'm not going to go out of my way to do so (as I had to for getting my key signed by my first Debian/Ubuntu Developer in the first place)</p>
