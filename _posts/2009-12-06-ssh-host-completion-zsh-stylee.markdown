---
layout: post
status: publish
published: true
title: SSH Host Completion - zsh Stylee
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 292
wordpress_url: http://www.sourceguru.net/?p=292
date: !binary |-
  MjAwOS0xMi0wNiAxMjo0OTo1OSArMDAwMA==
date_gmt: !binary |-
  MjAwOS0xMi0wNiAxMTo0OTo1OSArMDAwMA==
categories:
- Personal
tags:
- zsh
- ssh
- tab completion
comments:
- id: 46683
  author: tomÃ¡s zerolo
  author_email: tomas@tuxteam.de
  author_url: ''
  date: !binary |-
    MjAwOS0xMi0wNiAxMzo0Nzo1MCArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0xMi0wNiAxMjo0Nzo1MCArMDAwMA==
  content: ! "Cute.\r\n\r\nTo be fair, you should note why \"hashed\" known_hosts
    files are a good idea: an attacker getting hold of your account (at the moment
    your secret key is \"unlocked\") will have a nice directory of hosts to try next.\r\n\r\nThat's
    why it was introduced in the first place.\r\n\r\nSo whoever follows your advice
    should take this into consideration to strike the correct tradeoff.\r\n\r\nRegards\r\n--
    tomÃ¡s"
- id: 46694
  author: Ingmar Vanhassel
  author_email: ingmar@exherbo.org
  author_url: http://www.exherbo.org/
  date: !binary |-
    MjAwOS0xMi0wNiAyMDozNDowMiArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0xMi0wNiAxOTozNDowMiArMDAwMA==
  content: ! "As far as I can see zsh does this by default?\r\nI don't see why you
    need that zstyle call in zshrc."
- id: 46696
  author: cstamas
  author_email: cstamas@digitus.itk.ppke.hu
  author_url: ''
  date: !binary |-
    MjAwOS0xMi0wNiAyMjoxMTo0MyArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0xMi0wNiAyMToxMTo0MyArMDAwMA==
  content: ! "I do not know if you are familiar with grml.org/zsh If not you should
    give a try.\r\n\r\nregards,\r\n  cstamas"
- id: 46698
  author: Josip Rodin
  author_email: joy+sourceguru@entuzijast.net
  author_url: ''
  date: !binary |-
    MjAwOS0xMi0wNiAyMzo0Mjo0OCArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0xMi0wNiAyMjo0Mjo0OCArMDAwMA==
  content: ! "Why so ugly, and inflexible?\r\n\r\n\r\n  if [ -f ~/.ssh/known_hosts
    ]; then\r\n    hosts=(`awk '{print $1}' ~/.ssh/known_hosts | tr ',' '\\n' `)\r\n
    \ fi\r\n  if [ -f ~/.ssh/config ]; then\r\n    hosts=($hosts `grep ^Host ~/.ssh/config
    | sed s/Host\\ // | egrep -v '^\\*$'`)\r\n  fi\r\n  if [ -f /var/lib/misc/ssh_known_hosts
    ]; then\r\n    hosts=($hosts `awk -F \"[, ]\" '{print $1}' /var/lib/misc/ssh_known_hosts
    | sort -u`)\r\n  fi\r\n  if [ \"$hosts\" ]; then\r\n    zstyle ':completion:*:hosts'
    hosts $hosts\r\n  fi\r\n"
- id: 46711
  author: Jason 'vanRijn' Kasper
  author_email: vR@movingparts.net
  author_url: http://movingparts.net/
  date: !binary |-
    MjAwOS0xMi0wNyAwNzoxMjowMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0xMi0wNyAwNjoxMjowMCArMDAwMA==
  content: Really nice, Martin! =:) I can't do without zsh and the stupid hashed known_hosts
    file has been irking me for quite a while. Thanks for sharing!! =:)
- id: 60519
  author: MTecknology
  author_email: mtecknology@ubuntu.com
  author_url: http://profarius.com
  date: !binary |-
    MjAxMC0wNy0wNyAyMDowNDo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNy0wNyAxOTowNDo1MyArMDEwMA==
  content: ! "BTW- The correct link for my blog:\r\nhttp://profarius.com/content/ssh-tab-complete\r\n\r\nJosip:
    That is.. Ugly..\r\n[[ -f ~/.ssh/known_hosts ]] &amp;&amp; hosts=(`awk â€˜{print
    $1}â€™ ~/.ssh/known_hosts | tr â€˜,â€™ â€˜\\nâ€™ `)\r\n[[ -f ~/.ssh/config ]]
    &amp;&amp; hosts=($hosts `grep ^Host ~/.ssh/config | sed s/Host\\ // | egrep -v
    â€˜^\\*$â€™`)\r\n[[ -f /var/lib/misc/ssh_known_hosts ]] &amp;&amp; hosts=($hosts
    `awk -F â€œ[, ]â€\x9D â€˜{print $1}â€™ /var/lib/misc/ssh_known_hosts | sort -u`)\r\n[[
    \"$hosts\" ]] &amp;&amp; zstyle â€˜:completion:*:hostsâ€™ hosts $hosts\r\n\r\nUpi
    could also make each line into a single sed statement rather than all the pipes."
- id: 133946
  author: crs
  author_email: kwinczek@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMS0wOS0yNyAxMDo0NzowMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wOS0yNyAwOTo0NzowMyArMDEwMA==
  content: ! "Way cleaner way to do it I believe is:\r\n\r\nhosts=$(awk '/^Host /
    {printf(\"%s \",$2)}' ~/.ssh/config 2&gt;/dev/null)\r\nzstyle ':completion:*:hosts'
    hosts $hosts"
- id: 591919
  author: Odette Cobourn
  author_email: bwheyncslm@yahoo.com
  author_url: http://www.youtubetest.com
  date: !binary |-
    MjAxNC0wNS0zMCAyMjo1MjowOSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0zMCAyMTo1MjowOSArMDEwMA==
  content: Hey Fellas! I've by no means been part of a message board before, I hope
    that I'll be able to provide as effectively as receive suggestions in at this
    point.Thanks in advance!
permalink: ssh-host-completion-zsh-stylee
---
<p>Ok, so recently, <a href="http://blog.nixternal.com/?p=702">Richard Johnson</a> and <a href="http://profarius.com/content/%5Btitle-raw%5D-0">Michael Lustfield</a> blogged about tab completion for SSH hosts.</p>
<p>I'm an avid user of zsh, and have my own way of doing this (liberally stolen from <a href="http://blog.digital-scurf.org/">Daniel Silverstone</a>).</p>
<p>Now, this requires a little setup to start with, as some Linux Distributions have a habit of creating "hashed" known_hosts files.  So, what I've done, is before I ever SSH into a host, I add the following line to my <code>~/.ssh/config</code></p>
<blockquote><p><code>HashKnownHosts no</code></p></blockquote>
<p>From here, I can then add the following line to my ~/.zshrc</p>
<blockquote><p><code>zstyle -e ':completion::*:*:*:hosts' hosts 'reply=(${=${${(f)"$(cat {/etc/ssh_,~/.ssh/known_}hosts(|2)(N) /dev/null)"}%%[# ]*}//,/ })'</code></p></blockquote>
<p>Now, when I try and ssh into a host, I can use tab completion to complete any host I've previously ssh'd into and any new hosts I ssh into get automatically added to the list</p>
