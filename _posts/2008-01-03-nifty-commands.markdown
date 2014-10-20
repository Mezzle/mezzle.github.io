---
layout: post
status: publish
published: true
title: Nifty commands
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 105
wordpress_url: http://www.sourceguru.net/archives/105
date: !binary |-
  MjAwOC0wMS0wMyAwMDozNDo0MiArMDAwMA==
date_gmt: !binary |-
  MjAwOC0wMS0wMiAyMzozNDo0MiArMDAwMA==
categories:
- Geeky
tags:
- Linux
- nifty
- shell
comments:
- id: 15518
  author: Dan
  author_email: parallelgrapefruit@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAwMDo1NTo0MSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMiAyMzo1NTo0MSArMDAwMA==
  content: I'm a big fan of the `pidof` command and the killall command myself.  They
    make life much easier than gifuckingantic shell constructs with tons of pipes
    for no reason.
- id: 15519
  author: Florob
  author_email: florob@babelmonkeys.de
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAwMTowMzo0MyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDowMzo0MyArMDAwMA==
  content: ! 'Why don''t you just do

    killall -9 amarok

    ?


    What I have to come to appreciate a lot is replacing with sed (very helpful when
    e.g. dist-upgrading):

    sed -i s/foo/bar/ file'
- id: 15520
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0wMS0wMyAwMTowNDoxMSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDowNDoxMSArMDAwMA==
  content: ! "Ah, but, that wouldn't catch \"ruby /usr/share/apps/amarok/scripts/score_default/score_default.rb\"
    (which was what was causing the issues) \r\n\r\nor say for example, with evolution\r\n\r\n<blockquote><pre>mez@apathy:~$
    ps x | grep evo\r\n 6906 ?        Sl     3:06 evolution\r\n 6918 ?        Sl     0:00
    /usr/lib/evolution/evolution-data-server-1.12 <snip>\r\n 6938 ?        Sl     0:05
    /usr/lib/evolution/2.12/evolution-exchange-storage <snip>\r\n</pre></blockquote>"
- id: 15521
  author: Diego Flameeyes PettenÃ²
  author_email: flameeyes@gmail.com
  author_url: http://farragut.flameeyes.is-a-geek.org/
  date: !binary |-
    MjAwOC0wMS0wMyAwMTowODoxOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDowODoxOCArMDAwMA==
  content: pkill is your friend then :)
- id: 15522
  author: Koko
  author_email: jhhksrgrukd@hkdjrfg.pl
  author_url: http://kadu.net
  date: !binary |-
    MjAwOC0wMS0wMyAwMTowOToyMiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDowOToyMiArMDAwMA==
  content: ! 'CTRL+R in terminal!   &lt;- history of previous commands.


    This one totally rocks! Ctrl+R , type "oxy" and you have: svn checkout /http://sdjghshkr.adjgh/
    oxygen icons trunk


    It''s better than "cd .." and "cd -" or "cd ~" for browsing folders.'
- id: 15523
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0wMS0wMyAwMToxMzoxMSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDoxMzoxMSArMDAwMA==
  content: Why use cd ~ when you can just cd?
- id: 15524
  author: Lee
  author_email: lee.b@peaceforge.org
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAwMToxNToxNSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDoxNToxNSArMDAwMA==
  content: ! '"pkill -9 amarok" is kind of nice.  It''s in the debian psutils package,
    I think.  There''s also a pgrep, which does something a lot like ps | grep.'
- id: 15525
  author: ubuntu user
  author_email: placeholder@justvisiting.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAwMToxOTowOCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDoxOTowOCArMDAwMA==
  content: ! "Here's something useful I learned recently. To print the man page for
    a command to pdf with nice formatting using an already-configured cups-pdf printer
    you can try:\r\n\r\nman -t  | lpr -P pdf\r\n\r\nIt's the -t option that produces
    the nice formatting."
- id: 15528
  author: Dennis K.
  author_email: dennis@kaarsemaker.net
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAwMToxOTo1MyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDoxOTo1MyArMDAwMA==
  content: evolution --force-shutdown
- id: 15529
  author: Jeff Schroeder
  author_email: jeffschroeder@computer.org
  author_url: http://www.digitalprognosis.com
  date: !binary |-
    MjAwOC0wMS0wMyAwMToyOTozMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDoyOTozMCArMDAwMA==
  content: ! 'In re: to your original ps command...

    pkill -u $USER -9 amarok"


    Also take a look at pgrep and the man pages.


    "tload" Ascii system load graph (installed by default normally)



    "lsof +c 15 | awk ''{print $1}'' | uniq -c | sort -rn | head" Sorted list of the
    top 15 processes with the largest number of open files'
- id: 15530
  author: mike
  author_email: gufymike@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAwMTozMDo1NCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDozMDo1NCArMDAwMA==
  content: ! "I'm a big fan of find myself.  I use it for various things, examples:\n\nfind
    . -type d -name \"temp?\" -exec rm -Rf {} + # or \\; can be used, using + process
    all files on rm line, \\; runs rm per file\n\nfind . -mtime 1 -maxdepth 1  # find
    files and directories modified in the last day in the current directory.  \n\nFind
    is just nifty in itself, I don't use xargs much with find as many people do, just
    like the -exec option better."
- id: 15531
  author: John Doe
  author_email: a@a.com
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAwMTozMToyNSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDozMToyNSArMDAwMA==
  content: ! 'That is unnecesarily complex, this should do the same task: killall
    -s 9 -r evolution'
- id: 15532
  author: Jeff Schroeder
  author_email: jeffschroeder@computer.org
  author_url: http://www.digitalprognosis.com
  date: !binary |-
    MjAwOC0wMS0wMyAwMTozNTo0OCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDozNTo0OCArMDAwMA==
  content: ! "wordpress mundged the ' in the awk command. make sure to use single
    quotes around the awk statement and it works like a charm:\njeff@omniscience:~$
    lsof +c 15 | awk '{print $1}' | uniq -c | sort -rn | head\n    325 epiphany\n
    \   283 liferea-bin\n    250 thunderbird-bin\n    248 python\n    238 tomboy\n
    \   225 nautilus\n    215 gnome-panel\n    199 update-manager\n    181 mixer_applet2\n
    \   177 update-notifier"
- id: 15534
  author: Michael R. Head
  author_email: burner@suppressingfire.org
  author_url: http://suppressingfire.livejournal.com
  date: !binary |-
    MjAwOC0wMS0wMyAwMTo0ODoxOSArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDo0ODoxOSArMDAwMA==
  content: yeah, evolution --force-shutdown appears in my Alt-F2 history. There used
    to be a killev script, but once the --force-shutdown option was added to the evo
    binary, they got rid of that one.
- id: 15535
  author: Janne
  author_email: jan.moren@gmail.com
  author_url: http://janneinosaka.blogspot.com
  date: !binary |-
    MjAwOC0wMS0wMyAwMTo1NDo0MiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMDo1NDo0MiArMDAwMA==
  content: ! 'If you''re a frequent camera user it might be instructive to check what
    focal length you''re actually using the most. If you have "exiv2", an exif data
    reader/writer installed, you can easily do this:


    exiv2 @(@(JPG)|@(jpg)) |sed -n -e "s/.*Focal length    : \([0-9.]*\).*/\1/p"|sort
    -n|uniq -c


    You get the number of images per focal length, sorted by length. If you want a
    graphical representation it''s trivial to cut and paste the output to gnumeric
    or some other spreadsheet and graph it.'
- id: 15536
  author: Stand back, I know regular expressions at Source Guru
  author_email: ''
  author_url: http://www.sourceguru.net/archives/106
  date: !binary |-
    MjAwOC0wMS0wMyAwMjowOToxNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMTowOToxNiArMDAwMA==
  content: ! '[...] Register          &laquo; Nifty commands [...]'
- id: 15537
  author: Zeth
  author_email: warrior@commandline.org.uk
  author_url: http://commandline.org.uk
  date: !binary |-
    MjAwOC0wMS0wMyAwMjozNTozMiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMTozNTozMiArMDAwMA==
  content: ! 'I like to combine pdftotext with grep so I can search for keywords in
    a bunch of PDFs.

    E.g. http://files.zeth.net/pdfgrep.txt'
- id: 15540
  author: ! 'The Linux Index &raquo; Martin Meredith: Stand back, I know regular expressions'
  author_email: ''
  author_url: http://www.linuxindex.com/2008/01/02/martin-meredith-stand-back-i-know-regular-expressions/
  date: !binary |-
    MjAwOC0wMS0wMyAwNDozMTozNCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAwMzozMTozNCArMDAwMA==
  content: ! '[...] after the last blog post, I was talking to Seveas and mentioned
    how I thought with all the nifty and useful commands coming [...]'
- id: 15548
  author: litb
  author_email: schaub-johannes@web.de
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAxODo0Nzo0NyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAxNzo0Nzo0NyArMDAwMA==
  content: ! "my commands of choice:\n# waits until the given processes (may be multiple
    pids) are not running anymore\n# killall -w does this too, but it waits 1second
    at least.\n# we don't want to wait so long o.O .\n# NOTE: this doesn't work on
    a system which uses randomized PIDs . afaik\n# linux tries to use PIDs which were
    not used before, so that is\n# not a problem here.\nfunction wait_for_pid() {\n
    \   # $@ means \"$1\" \"$2\" ... \"$n\" . ( all the args given to this function
    )\n    while ( for i in $@; do [[ -d /proc/\"$i\" ]] &amp;&amp; return 0; done;
    return 1 ); do\n        sleep 0.15s;\n    done\n}\n\ni would be glad to know how
    this could be even made better!"
- id: 15550
  author: joi
  author_email: joi@kadu.net
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wMyAxOTozOTo1MiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wMyAxODozOTo1MiArMDAwMA==
  content: http://speculation.org/garrick/kill-9.html
- id: 15580
  author: Enver ALTIN
  author_email: ealtin@gmail.com
  author_url: http://enveraltin.com/
  date: !binary |-
    MjAwOC0wMS0wNSAyMDo0ODo0MyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wNSAxOTo0ODo0MyArMDAwMA==
  content: ! 'You can use `evolution --force-shutdown` for a graceful one.


    -HTH'
- id: 15628
  author: Kai Grossjohann
  author_email: kai.grossjohann@gmx.net
  author_url: ''
  date: !binary |-
    MjAwOC0wMS0wOSAxNjo0OToxNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0wMS0wOSAxNTo0OToxNiArMDAwMA==
  content: ! 'I suggest not to use killall; if you ever use it on a Solaris box, you''ll
    be surprised.


    pkill appears to be more portable.'
- id: 668878
  author: best digital camera 2014
  author_email: elmer.blankinship@internet-mail.org
  author_url: http://Bestcompactdigitalcamera2013.com/
  date: !binary |-
    MjAxNC0wOC0wNSAyMzozMTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0wNSAyMjozMTo0MyArMDEwMA==
  content: ! "I've been exploring for a little for any \r\nhigh-quality articles or
    weblog posts in this sort of house .\r\nExploring in Yahoo I ultimately stumbled
    upon this web site.\r\nReading this info So i'm satisfied to express that I have
    a very excellent \r\nuncanny feeling I discovered just what I needed. I such a
    lot undoubtedly will make certain to \r\ndon?t fail to remember this site and
    provides it a look regularly."
- id: 685905
  author: Bestgamingmonitorreviews2014.com
  author_email: sheritadownie@fastmailbox.net
  author_url: http://Bestgamingmonitorreviews2014.com
  date: !binary |-
    MjAxNC0wOC0yNiAwNzoxMzo1OCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yNiAwNjoxMzo1OCArMDEwMA==
  content: ! "This is really interesting, You're a very skilled blogger.\r\nI've joined
    your feed and look forward to seeking more of your excellent post.\r\nAlso, I
    have shared your website in my social networks!"
permalink: nifty-commands
---
<p>So, helping someone with an issue earlier (amarok had crashed and they couldn't kill it properly), I told them to issue the following command</p>
<blockquote>
<pre>ps x | awk '/amarok/ {print $1}' | xargs kill -9</pre>
</blockquote>
<p>Now, this is a command I use a lot to kill programs that are being evil (generally, I use it to kill evolution!)</p>
<p>But the comment came back "That's nifty!"</p>
<p>So I've got to ask, what are your favourite "nifty" commands? and what do they do?</p>
<p><strong>&lt;edit&gt;</strong>  So far, within 5 mins of posting this, I've had 2 people ask why I don't just use killall</p>
<blockquote>
<pre>mez@apathy:~$ ps x -ocommand | grep [e]vo
evolution
/usr/lib/evolution/evolution-data-server-1.12 &lt;snip&gt;
/usr/lib/evolution/2.12/evolution-exchange-storage &lt;snip&gt;</pre>
</blockquote>
