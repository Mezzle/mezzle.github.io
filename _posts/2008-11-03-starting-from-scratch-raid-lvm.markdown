---
layout: post
status: publish
published: true
title: ! 'Starting from scratch: RAID + LVM'
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 166
wordpress_url: https://www.sourceguru.net/?p=166
date: !binary |-
  MjAwOC0xMS0wMyAxNzo0OTowMiArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMS0wMyAxNjo0OTowMiArMDAwMA==
categories:
- Personal
tags:
- lvm
- raid
comments:
- id: 29145
  author: Sven Hartge
  author_email: sven@svenhartge.de
  author_url: http://www.svenhartge.de
  date: !binary |-
    MjAwOC0xMS0wMyAxOTowMToxOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wMyAxODowMToxOCArMDAwMA==
  content: ! "Well, you should not (never!) partition a md-device. Very bad things
    will happen, if you try (which you just experienced).\r\n\r\nTrust me, your setup
    is not very exotic or special, you just need to follow a strict order:\r\n\r\n1)
    setup _all_ partitions\r\n2) setup every md-device\r\n2a) never partition a md-device.\r\n2b)
    no, don't do it, really!\r\n3) configure LVM\r\n4) profit\r\n\r\nI've done similar
    setups using the installer, worked like a charm."
- id: 29150
  author: Eric Pritchett
  author_email: eric@eboxstudios.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wMyAyMDowOToxMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wMyAxOTowOToxMCArMDAwMA==
  content: I can't even get raid to work.  Click F6 in windows and loading a driver
    is FAR EASIER than raid with Ubuntu.  Alan Pope did some videos about install
    raid a while back and I tried it with no success.  It would be great to get updated
    screencast/videos up explaining this with 8.10 from scratch. (FYI this is from
    a user's perspective).
- id: 29151
  author: Andre
  author_email: scroogie@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wMyAyMDoxOToyOSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wMyAxOToxOToyOSArMDAwMA==
  content: ! "I've had quite bad experiences with LVM, also in the combination with
    software raids (raid not starting after reboot, magically changing uuids, unable
    to assemble array although the devices are there, etc.) \r\nI don't know if i've
    been unlucky, but I stopped using LVM completely. IMHO it's just not worth it."
- id: 29168
  author: Sven Hartge
  author_email: sven@svenhartge.de
  author_url: http://www.svenhartge.de
  date: !binary |-
    MjAwOC0xMS0wNCAwMDo1NzoyMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wMyAyMzo1NzoyMCArMDAwMA==
  content: ! "I think LVM is the best invention since pre-sliced bread.\r\n\r\nI used
    it since the old 2.2.x days, when it was an addon patch to the kernel.\r\n\r\nRight
    now all my servers (several mail-storage setups in the multi-TB size, Xen-Hosts,
    multi-purpose systems, etc.) are setup using MD-RAID with LVM on top.\r\n\r\nMost
    people which had severe problems using LVM had a) faulty hardware, b) an error
    in their way of thinking or c) tried to use it in a way or for a purpose it was
    not designed for.\r\n\r\nMy setup normally looks like this:\r\n\r\n------------------------\r\n\r\nroot@XYZ-1:~#
    fdisk -l /dev/sda         \r\n\r\nDisk /dev/sda: 80 GB, 80023749120 bytes\r\n255
    heads, 63 sectors/track, 9729 cylinders\r\nUnits = cylinders of 16065 * 512 =
    8225280 bytes\r\n\r\n   Device Boot      Start         End      Blocks   Id  System
    \r\n/dev/sda1   *           1         243     1951866   fd  Lnx RAID auto\r\n/dev/sda2
    \            244         486     1943865   82  Linux swap\r\n/dev/sda3             487
    \       9729    74236365   fd  Lnx RAID auto\r\nroot@XYZ-1:~# fdisk -l /dev/sdb\r\n\r\nDisk
    /dev/sdb: 80 GB, 80023749120 bytes\r\n255 heads, 63 sectors/track, 9729 cylinders\r\nUnits
    = cylinders of 16065 * 512 = 8225280 bytes\r\n\r\n   Device Boot      Start         End
    \     Blocks   Id  System \r\n/dev/sdb1   *           1         243     1951866
    \  fd  Lnx RAID auto\r\n/dev/sdb2             244         486     1943865   82
    \ Linux swap\r\n/dev/sdb3             487        9729    74236365   fd  Lnx RAID
    auto\r\n\r\n------------------------\r\n\r\nOn the first partition is /dev/md0,
    which is / (root), while the third partition formes /dev/md1, where my LVM resides:\r\n\r\nroot@XYZ-1:~#
    lvscan\r\n  ACTIVE            '/dev/vg03/backup_lv' [1.09 TB] inherit\r\n  ACTIVE
    \           '/dev/vg02/home_lv' [1.00 TB] inherit\r\n  ACTIVE            '/dev/vg01/usr_lv'
    [4.00 GB] inherit\r\n  ACTIVE            '/dev/vg01/var_lv' [4.00 GB] inherit\r\n
    \ ACTIVE            '/dev/vg01/tmp_lv' [4.00 GB] inherit\r\n  ACTIVE            '/dev/vg01/vartmp_lv'
    [4.00 GB] inherit\r\n  ACTIVE            '/dev/vg01/spool_lv' [8.00 GB] inherit\r\n
    \ ACTIVE            '/dev/vg01/log_lv' [6.00 GB] inherit\r\n\r\n(vg02 and vg03
    are on a FibreChannel storage array.)\r\n\r\nAs you can see, I not even using
    the full 72GB of vg01. But if I ever need a bigger /var/log or some other filesystem,
    I can resize or create one, without the need of fiddling with partitions. And,
    this is the best part: I don't need to shutdown or reboot the machine. This is
    why I use LVM."
- id: 29200
  author: Michal
  author_email: a@b.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMS0wNCAyMjoxMjoxNSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMS0wNCAyMToxMjoxNSArMDAwMA==
  content: You can give the recent openSUSE release (11.1) a try, complex stuff like
    raid+lvm should be supported out of the box and the partitioning configuration
    has been much improved lately.
- id: 33175
  author: mrmatthew
  author_email: matthew.j.mellor@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMi0yNSAxODozNzo1NCArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0yNSAxNzozNzo1NCArMDAwMA==
  content: ! "\"Well, you should not (never!) partition a md-device. Very bad things
    will happen, if you try (which you just experienced).\"\r\n\r\nif you don't setup
    partition on the md0,md1,md2 then the install won't continue. Can you elaborate
    about what we are supposed to do after that?"
- id: 33769
  author: alex
  author_email: alex@desertwolfe.com
  author_url: http://techiehut.net
  date: !binary |-
    MjAwOS0wMy0xMiAwNDoxMToxNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMy0xMiAwMzoxMToxNiArMDAwMA==
  content: ! "You should either partition your drives and then setup raids across
    the partitions for each mountpoint. Meaning you format /dev/md0 etc directly as
    ext3 or whatever you want.\r\n\r\nOR\r\n\r\nUse LVM to \"partition\" your raid
    device. Meaning you format the logical volumes and mount those.\r\n\r\nI don't
    know if I express that correctly,\r\nCheck out http://tldp.org/HOWTO/Software-RAID-HOWTO.html"
permalink: starting-from-scratch-raid-lvm
---
<p>Ok, so working with RAID and LVM is... well... not easy.</p>
<p>I have three hard drives in this machine, all of different sizes, (160Gb, 200Gb, and 300Gb), and I'm gong to be setting these up so that I have a  RAID-5 made up of three 160Gb Partitions, (with LVM on top) a RAID-1 Partition of 40Gb (no LVM) and the rest split between boot, swap, and misc.</p>
<p>However, the ubuntu alternative CD doesn't make this easy, and, one of my favourite annoyances is that once you configure RAID, you cannot make changes to the partitions on the disk where you have RAID partitions :( (hidden away in the middle of a block of text that people aren't likely to read... I only spotted it on the 4th/5th attempt)</p>
<p>Getting RAID setup is fine, getting RAID+LVM has taken me... 6 attempts so far, and I think that I've managed to say the right prayers to the right gods this time... or maybe not...</p>
<p>"The kernel was unable to re-read the partititon table on /dev/md1 (Invalid argument). This means Linux won't know anything about the modifications you made until you reboot. you should reboot your computer before doing anything with /dev/md1</p>
<p>Maybe I should do this manually *clicks reboot*</p>
