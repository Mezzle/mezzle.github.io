---
layout: post
status: publish
published: true
title: iFolder apt Repositories
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 15
wordpress_url: http://www.sourceguru.net/archives/15
date: !binary |-
  MjAwNi0wMi0xOCAwNjowMzowMyArMDAwMA==
date_gmt: !binary |-
  MjAwNi0wMi0xOCAwNTowMzowMyArMDAwMA==
categories:
- Personal
tags: []
comments:
- id: 12
  author: Davyd
  author_email: davyd@madeley.id.au
  author_url: http://www.davyd.id.au/
  date: !binary |-
    MjAwNi0wMi0xOSAxNjowNDowNCArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMi0xOSAxNTowNDowNCArMDAwMA==
  content: ! "How does it work? I run the `ifolder3` binary, and something appears
    in the tray. If you double click on it, it tells you that it is starting iFolder,
    but doesn't seem to do anything.\r\n\r\nLooks a lot like <a href=\"https://launchpad.net/products/pkg-ifolder/+bug/31883\"
    rel=\"nofollow\">31883</a>.\r\n\r\nAt some point I'll see if it builds on amd64.
    Perhaps after I get it working on my i386."
- id: 40
  author: peter
  author_email: geisterschloss@t-online.de
  author_url: ''
  date: !binary |-
    MjAwNi0wMy0wNCAxMTowNDozNiArMDAwMA==
  date_gmt: !binary |-
    MjAwNi0wMy0wNCAxMDowNDozNiArMDAwMA==
  content: ! "apt-get update produces:\r\n\r\nW: GPG error: http://trunks.whiprush.org
    dapper Release: The following signatures couldn't be verified because the public
    key is not available: NO_PUBKEY 2404ED3A6AAAA569"
- id: 101
  author: tolan
  author_email: tolan@overtops.org
  author_url: ''
  date: !binary |-
    MjAwNi0wNC0xMiAyMzo1ODozMiArMDEwMA==
  date_gmt: !binary |-
    MjAwNi0wNC0xMiAyMjo1ODozMiArMDEwMA==
  content: ! "Hi, I've tried to report this on launchpad but i get:\r\n\r\n\r\n\"Ifolder
    Packages does not use Malone as its bug tracker.\r\nTo report a bug about Ifolder
    Packages, please use its official bug tracker.\"\r\n\r\nSo I'll pop it here.\r\n\r\nI'm
    getting a variation on what's described here : \r\nhttp://www.ifolder.com/index.php/Client_Troubleshooting:_n_items_not_synchronized\r\n\r\nWith
    these packages (after I've used the workaround described in https://launchpad.net/products/pkg-ifolder/+bug/31883
    ) every folder I sync with iFolder has one item not synchronized, so no synch
    ever complete. However all the items in the folder show up on the server.\r\n\r\nThe
    iFolder server is running on a CentOS box, so if you think this is likely to be
    a server-side issue then I'll report this elsewhere.\r\n\r\nCheers for the packages!"
- id: 102
  author: Tolan Blundell
  author_email: tolan@overtops.org
  author_url: ''
  date: !binary |-
    MjAwNi0wNC0xMyAwMDoxNjo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAwNi0wNC0xMiAyMzoxNjo0NCArMDEwMA==
  content: Apologies, realised I could double check this as I have a Windows partition.
    The same happens there so it looks like it's a server-side problem.
- id: 722732
  author: weight loss tips for men
  author_email: cortneystockwell@inbox.com
  author_url: http://www.verretrempelamine.com/
  date: !binary |-
    MjAxNC0xMC0wMiAwMDowNjozMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0xMC0wMSAyMzowNjozMSArMDEwMA==
  content: ! "I was very pleased to uncover this page. I wajted to thank you for your
    time duee to this wonderful read!!\r\nI definitely appreciated every little bit
    oof it andd I have you book-marked to look at new \r\nthings in your blog.\r\n\r\nFeell
    free to visit my site <a href=\"http://www.verretrempelamine.com/\" rel=\"nofollow\">weight
    loss tips for men</a>"
permalink: ifolder-apt-repositories
---
<p>Thanks muchly to Jorge Castro for Mirroring the apt-repository for iFolder</p>
<p>Add the following lines to your /etc/apt/sources.list to enable</p>
<p><code>deb http://trunks.whiprush.org/~jorge/ifolder dapper main<br />
deb-src http://trunks.whiprush.org/~jorge/ifolder dapper main</code></p>
<p>And this should allow you to use it.</p>
<p>Please report any bugs to the <a target="_blank" href="https://launchpad.net/products/pkg-ifolder/+filebug">pkg-ifolder product on launchpad</a><br />
<code /></p>
