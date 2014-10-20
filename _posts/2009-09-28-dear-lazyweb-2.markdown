---
layout: post
status: publish
published: true
title: Dear Lazyweb...
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 259
wordpress_url: http://www.sourceguru.net/dear-lazyweb-2/
date: !binary |-
  MjAwOS0wOS0yOCAxNjo1OTozNSArMDEwMA==
date_gmt: !binary |-
  MjAwOS0wOS0yOCAxNTo1OTozNSArMDEwMA==
categories:
- Personal
tags:
- lazyweb
- dotfile
comments:
- id: 43877
  author: Matthew Walster
  author_email: matthew@walster.org
  author_url: http://asnumber.net
  date: !binary |-
    MjAwOS0wOS0yOCAxNzoyMDoyOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNjoyMDoyOSArMDEwMA==
  content: ! "When you say dotfile, do you mean dotfile or config file in etc?\r\n\r\nI
    tend to use etckeeper, but I haven't synced my \"dotfiles\" in quite a while :S\r\n\r\nLet
    me know if you find something!"
- id: 43878
  author: Ryan
  author_email: darwinawdwinner+comments@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wOS0yOCAxNzoyMzozOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNjoyMzozOSArMDEwMA==
  content: A simple solution would be to use rsync and make an rsync-filter file that
    only includes dotfiles.
- id: 43879
  author: sparkes
  author_email: sparkes@westmids.biz
  author_url: http://zx-81.com
  date: !binary |-
    MjAwOS0wOS0yOCAxNzoyNjowOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNjoyNjowOCArMDEwMA==
  content: I used to have subversion home directories across my machines, overkill
    and it didn't last.
- id: 43880
  author: Josh Triplett
  author_email: josh@joshtriplett.org
  author_url: http://joshtriplett.org
  date: !binary |-
    MjAwOS0wOS0yOCAxNzozOTowMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNjozOTowMCArMDEwMA==
  content: I can't imagine something that would work better than a version control
    system.  I keep my dotfiles in Git, which works really well; feel free to check
    out git://joshtriplett.org/git/home if you want.
- id: 43881
  author: Steve
  author_email: steve@steve.org.uk
  author_url: http://www.steve.org.uk/
  date: !binary |-
    MjAwOS0wOS0yOCAxNzo0MDoyMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNjo0MDoyMSArMDEwMA==
  content: ! "I too came up with my own system - I have ~/.dotfiles/ containing files
    such as:\r\n\r\n_vimrc\r\n_screenrc\r\n_emacs\r\n\r\nThen a small makefile to
    add/remove symlinks to those files.  The actual files are stored under revision
    control and the system works well enough - but it would be nice to have something
    more general purpose."
- id: 43882
  author: Gordon Schulz
  author_email: gordon.schulz@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wOS0yOCAxNzo0ODoyMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNjo0ODoyMyArMDEwMA==
  content: I am using Dropbox with symbolic links pointing to the appropriate dotfiles.
    Works like a charm for me and my multiple boxes.
- id: 43883
  author: Hans
  author_email: hanswchen@gmail.com
  author_url: http://hanswchen.wordpress.com
  date: !binary |-
    MjAwOS0wOS0yOCAxNzo1NDozMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNjo1NDozMSArMDEwMA==
  content: ! "I just started to manage my dotfiles with Git today. First I created
    a .dotfiles directory in ~, moved the relevant dotfiles there and made a script
    to create symlinks in ~.\r\n\r\nMy plan is to have master contain all common settings,
    and have one branch for each computer (desktop/laptop/netbook/possibly university
    computers) to allow local customizations. If I've made a change in a local branch
    that I want to apply everywhere, I cherry-pick it from master (not sure how good
    this works yet).\r\n\r\nGuess you can count this as a \"homebrew implementation\",
    but if you're confident with Git (which I'm not) it should be fairly straight-forward
    to setup. I haven't found a perfect guide for this, but a search for \"git dotfiles\"
    should give you some hints."
- id: 43884
  author: molok
  author_email: none@example.com
  author_url: ''
  date: !binary |-
    MjAwOS0wOS0yOCAxODozOToxMyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNzozOToxMyArMDEwMA==
  content: I long the day all the apps will just use ~/.config/
- id: 43886
  author: Josh Triplett
  author_email: josh@joshtriplett.org
  author_url: http://joshtriplett.org
  date: !binary |-
    MjAwOS0wOS0yOCAxODo1MDozMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxNzo1MDozMCArMDEwMA==
  content: ! '@Steve: Why the separate directory and the symlinks?'
- id: 43888
  author: foo
  author_email: foo@bar.com
  author_url: ''
  date: !binary |-
    MjAwOS0wOS0yOCAxOTo0NTozMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOCAxODo0NTozMCArMDEwMA==
  content: Ubuntu Debian? You missed something inbetween, isn't it?
- id: 43901
  author: Ryan
  author_email: darwinawdwinner+comments@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wOS0yOSAwMzo0MzoxNyArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOSAwMjo0MzoxNyArMDEwMA==
  content: If you have a script for autocreating symlinks into a directory, you might
    also want to write a script for migrating newly-created real dotfiles into the
    directory and replacing them with symlinks.
- id: 43903
  author: foo
  author_email: foo@bar.com
  author_url: ''
  date: !binary |-
    MjAwOS0wOS0yOSAwNDowMTo1MCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOSAwMzowMTo1MCArMDEwMA==
  content: http://vcs-home.madduck.net/
- id: 43907
  author: siretart
  author_email: siretart@tauware.de
  author_url: ''
  date: !binary |-
    MjAwOS0wOS0yOSAwNzozOTo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOSAwNjozOTo1NiArMDEwMA==
  content: ! "@josh: because you don't need every dotfile on every computer. sometimes,
    you have different versions of your dotfiles for different machines. The indirection
    allows to control what dotfile is actually in use more in a more fine-granular
    way.\r\n\r\nFWIW, I have my ~/.env bzr controlled and symlinked at the actual
    locations."
- id: 43912
  author: Steve
  author_email: steve@steve.org.uk
  author_url: http://www.steve.org.uk/
  date: !binary |-
    MjAwOS0wOS0yOSAwOTo0MjoxNSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOSAwODo0MjoxNSArMDEwMA==
  content: ! "The seperate directory is needed so that repository can be checked out
    - its really as simple as that.\r\n\r\nIf I have \".dotfiles/\" under revision
    control then it can be checked out to ~/, or to ~/local, or similar.\r\n\r\nWhile
    I could store ~ under revision control I find that the contents vary too much
    on different machines.  So in practise I have three repositories:\r\n\r\n~/.dotfiles
    \ [Shell config, emacs config, etc]\r\n~/.dotfiles-private [Procmail + Mutt config
    - files that are sensitive]\r\n~/bin/      [Shell tools etc]"
- id: 43924
  author: Steve Kemp
  author_email: steve@steve.org.uk
  author_url: http://www.steve.org.uk/
  date: !binary |-
    MjAwOS0wOS0yOSAxNjo0Njo1OSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOSAxNTo0Njo1OSArMDEwMA==
  content: ! "I decided to take this post as an opportunity to rationalise my setup.\r\n\r\nSo
    I've posted: http://www.steve.org.uk/tmp/dotfile-manager.txtr"
- id: 43932
  author: Daniel Hahler
  author_email: blogs-2009@thequod.de
  author_url: http://daniel.hahler.de/
  date: !binary |-
    MjAwOS0wOS0yOSAxOToyNDowOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0yOSAxODoyNDowOCArMDEwMA==
  content: ! "This is an interesting read for you:\r\nhttp://she.geek.nz/archives/546-migrating-my-homedirectory-from-one-repo-to-many.html\r\n\r\nIt
    describes the process of using git in an awesome way to achieve this, but is really
    homebrewn, too.\r\n\r\nI'd really like to see something like etckeeper especially
    for dotfiles.\r\nHowever, maybe just using etckeeper on $HOME would work good
    enough? - at least for keeping track that is. You may use different repositories
    for different kind of files still, e.g. a repo/directory for vim config."
- id: 43984
  author: Marius Gedminas
  author_email: marius@gedmin.as
  author_url: http://gedmin.as
  date: !binary |-
    MjAwOS0wOS0zMCAxNTo1NTowMSArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0wOS0zMCAxNDo1NTowMSArMDEwMA==
  content: ! "I keep my home directory in Subversion.  It's nice that you can check
    out subdirectories, since checking out the whole ~ is usually overkill (too big,
    too slow)/painful (conflicts with unversioned files)/not what I want anyway (*lots*
    of automatically generated/updated files).\r\n\r\nFor this reason I also keep
    my most important dotfiles in ~/dotfiles, with symlinks pointing to them.  This
    separate subdirectory stuff worked great for ~/.mutt and ~/.vim (with an extra
    symlink for ~/.vimrc)."
- id: 44252
  author: Peter Eisentraut
  author_email: peter_e@gmx.net
  author_url: http://petereisentraut.blogspot.com/
  date: !binary |-
    MjAwOS0xMC0wNyAxNTozMzoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0xMC0wNyAxNDozMzoxMCArMDEwMA==
  content: I use unison to sync the dotfiles around.  It's not as featureful as a
    VCS-based solution, but it forces me to keep the configuration the same on all
    machines, which is arguably a good thing.
permalink: dear-lazyweb-2
---
<p>Is there a decent dotfile manager packaged in Ubuntu/Debian? I need something that'll let me have a repository of my dotfiles and manage them easily amongst multiple locations.</p>
<p>I've seen a lot of homebrew implementations of something like this, I'm just wondering if there's something that's worth using already out there!</p>
