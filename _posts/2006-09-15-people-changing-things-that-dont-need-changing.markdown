---
layout: post
status: publish
published: true
title: People changing things that don't need changing
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 42
wordpress_url: http://www.sourceguru.net/archives/42
date: !binary |-
  MjAwNi0wOS0xNSAxNjozMDo0NSArMDEwMA==
date_gmt: !binary |-
  MjAwNi0wOS0xNSAxNTozMDo0NSArMDEwMA==
categories:
- Geeky
- Linux
- Rants
tags: []
comments:
- id: 1037
  author: Ian Monroe
  author_email: soureguru@monroe.nu
  author_url: http://www.monroe.nu
  date: !binary |-
    MjAwNi0wOS0xNSAxODoxNDozMyArMDEwMA==
  date_gmt: !binary |-
    MjAwNi0wOS0xNSAxNzoxNDozMyArMDEwMA==
  content: Um, dynamic collection? Hello McFly?
- id: 1038
  author: Louis
  author_email: louis.roederer@gmail.com
  author_url: ''
  date: !binary |-
    MjAwNi0wOS0xNSAxODo0MzozNSArMDEwMA==
  date_gmt: !binary |-
    MjAwNi0wOS0xNSAxNzo0MzozNSArMDEwMA==
  content: Yes, I was wondering why Katapult was starting the wrong song :-)  I do
    understand your frustration, and I hope you won't be discouraged from continued
    development; Katapult is a favorite of mine, and I'll patiently wait for the fix.  Thanks
    for your work.
- id: 1039
  author: Max
  author_email: mkossick@gmx.de
  author_url: ''
  date: !binary |-
    MjAwNi0wOS0xNSAyMjoxNToyMCArMDEwMA==
  date_gmt: !binary |-
    MjAwNi0wOS0xNSAyMToxNToyMCArMDEwMA==
  content: ! "The only people who decide what needs changing in Amarok's database
    are the Amarok devs. If you want to use Amarok's database, you have to use the
    schema we decided on. And there was a good reason to change the way URL's are
    stored, Dynamic Collection. \r\n\r\nWe are happy to help you solve your problem.
    Just ask us what we changed and what you have to do to get Katapult running again
    by e-mail or in #amarok. But please don't expect us to remove Dynamic Collection
    just because it breaks Katapult."
- id: 1040
  author: Martin Aumueller
  author_email: aumuell@reserv.at
  author_url: ''
  date: !binary |-
    MjAwNi0wOS0xNSAyMjozMzozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwNi0wOS0xNSAyMTozMzozOCArMDEwMA==
  content: ! 'This change was not for no reason: since 1.4.2, Amarok has a feature
    called ''dynamic collection''. This means that file systems may be added and removed
    to Amarok''s collection without a full collection rescan. However, e.g. USB connected
    drives might not be mounted at the same mount point each time they are connected.
    Thus, only the path relative to the file system root is stored in the collection,
    not an absolute path.'
- id: 1041
  author: Seb Ruiz
  author_email: me+sourceguru@sebruiz.net
  author_url: http://www.sebruiz.net/
  date: !binary |-
    MjAwNi0wOS0xNiAwMDozMTo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAwNi0wOS0xNSAyMzozMTo0NCArMDEwMA==
  content: ! "Be careful when you do this, you could get yourself into some more trouble
    :).\r\n\r\nYou need to prepend the device path which can be determined from the
    device id in the tags table.  For example, you might have two paths which look
    pretty similar:\r\n\r\n./music/file1.mp3\r\n./music/file2.mp3\r\n\r\nHowever,
    if the device ids are different, it means they are stored somewhere completely
    different: eg:\r\n\r\n/home/music/file1.mp3\r\n/media/usb/music/file2.mp3"
- id: 1071
  author: Max Howell
  author_email: max.howell@methylblue.com
  author_url: http://www.methylblue.com
  date: !binary |-
    MjAwNi0wOS0yMCAxMDoyODo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAwNi0wOS0yMCAwOToyODo1NyArMDEwMA==
  content: I have to agree with you, this seems like a stupid decision and change.
    Amarok lacks quality control.
permalink: people-changing-things-that-dont-need-changing
---
<p>Recently, Amarok decided to change the way they store URL's in it's database, meaning that it's now a PITA to try and get a song to play, as for some reason - they all now start with ./ - instead of just /.</p>
<p> So now I have to go hacking away to make katapult use the proper URLs. This is going to be even more fun as it will also need to detect the version of amarok. - Yay!</p>
<p> Lets just hope KURL::<strong>isRelativeURL</strong> (const QString &_url) works well enough to determine the type of path amarok is returning ;)</p>
