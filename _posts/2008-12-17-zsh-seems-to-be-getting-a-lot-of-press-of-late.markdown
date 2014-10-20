---
layout: post
status: publish
published: true
title: zsh seems to be getting a lot of press of late ...
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 188
wordpress_url: http://www.sourceguru.net/?p=188
date: !binary |-
  MjAwOC0xMi0xNyAwMjo1MzozMiArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMi0xNyAwMTo1MzozMiArMDAwMA==
categories:
- Personal
tags:
- zsh
- title
- xterm
- screen
- gnu screen
- dotfiles
comments:
- id: 30801
  author: Jason 'vanRijn' Kasper
  author_email: vR@movingparts.net
  author_url: http://movingparts.net/
  date: !binary |-
    MjAwOC0xMi0xNyAwNTo0OTozNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xNyAwNDo0OTozNiArMDAwMA==
  content: ! "Hi Martin! \r\n\r\nThanks for the cool blog post! I've been using zsh
    for a long time and I'm absolutely in love with it. I tried your functions and
    they are really nice! =:) One thing, though.... I use the prompt built-in for
    my zsh shell theme (autoload promptinit; promptinit; prompt fade green) and I
    think it does something with precmd and preexec too, so your functions and those
    done by prompt were conflicting (one or the other wasn't getting executed. Anyway,
    I think i've found a way around it. $(man zshall) shows that zsh actually allows
    an array of function names for precmd and preexec. So I've changed your function
    names to myprecmd and mypreexec and then declared arrays so that zsh calls my
    precmd/preexec as well as whatever else declares these. What I have looks like
    this:\r\n\r\n<blockquote>\r\nmyprecmd () {\r\n# ... the same stuff you had above...\r\n}\r\nmypreexec
    () {\r\n# ... the same stuff you had above...\r\n}\r\n# now declare arrays for
    precmd and preexec...\r\nset -A precmd_functions precmd myprecmd\r\nset -A preexec_functions
    preexec mypreexec\r\n# now set our prompt...\r\nautoload promptinit\r\npromptinit\r\nprompt
    fade green\r\n</blockquote>\r\n\r\nAnyway, thanks again for the great blog post!
    Zsh rocks!! =:)"
- id: 30803
  author: Mark Kretschmann
  author_email: kretschmann@kde.org
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0xNyAwOToxODowMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xNyAwODoxODowMCArMDAwMA==
  content: ! "While ZSH is getting a lot of press, I find it worth checking out the
    Fish shell, which is powerful and yet easy to use:\r\n\r\nhttp://www.fishshell.org/\r\nhttp://arstechnica.com/articles/columns/linux/linux-20051218.ars/2"
- id: 30817
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0xMi0xNyAxNTozNTowNCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xNyAxNDozNTowNCArMDAwMA==
  content: ! "Jason:- thanks for the tip\r\n\r\nMark:- I'll have a look at it sometime
    ;)"
- id: 30821
  author: Shadowfiend
  author_email: savedfastcool@gmail.com
  author_url: http://shadowfiend.posterous.com
  date: !binary |-
    MjAwOC0xMi0xNyAxNzoyNjozNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xNyAxNjoyNjozNiArMDAwMA==
  content: ! "I'd like to offer a +1 for the Fish shell. This baby's the best shell
    I've ever used, even though it took a little bit of getting used to due to my
    embedded bashisms.\r\n\r\nI've been using http://github.com/zmalltalker/fish-nuggets/tree/master
    for some more goodness including marking the current branch when you are in a
    git repository directory and such."
- id: 30822
  author: MJ Ray
  author_email: mjr@phonecoop.coop
  author_url: http://mjr.towers.org.uk/
  date: !binary |-
    MjAwOC0xMi0xNyAxODozODoxMyArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xNyAxNzozODoxMyArMDAwMA==
  content: zsh? fish?  Use rc, the shell whose grammar you can understand!
- id: 30872
  author: jpds
  author_email: jpds@ubuntu.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0xOCAyMToyMTowMCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xOCAyMDoyMTowMCArMDAwMA==
  content: This code looks familiar. ;-)
- id: 30898
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0xMi0xOSAwODoxOTo1MiArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0xOSAwNzoxOTo1MiArMDAwMA==
  content: jpds - I wrote it myself ;)
- id: 303639
  author: tory burch outlet store
  author_email: teritysfrus*lmain*@hotmail.com
  author_url: http://www.toryburchspringoutlet.com/
  date: !binary |-
    MjAxMy0wNC0yNyAyMjo0Nzo0MSArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNC0yNyAyMTo0Nzo0MSArMDEwMA==
  content: ! "and later in the LORD counterattack, in this non-stop development, Hong
    Hyun own, or blend as a single, throw dross, constantly absorb, <strong>tory burch
    outlet store</strong> Street in enhance balanced way come from Hongjun at this
    point been evidenced, Hong Hyun own restore rapid surge! \r\nI do not know where
    it originated sound like the purest sound between heaven plus earth, accompanied
    by sonic booms heartstrings high in volume, a thunder is no sign of coming down
    through the emptiness, and then they broke to the"
- id: 707623
  author: hearthstone cheat sheet
  author_email: ewancarrier@web.de
  author_url: http://gamesandgamers221.jimdo.com/2014/04/08/hearthstone-game/
  date: !binary |-
    MjAxNC0wOS0xNyAxNDoxMjo1NSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xNyAxMzoxMjo1NSArMDEwMA==
  content: ! "Admiring the time and energy you put into your website and \r\nin depth
    information you offer. It's nice to come across a blog every once \r\nin a while
    that isn't the same old rehashed information. \r\nGreat read! I've bookmarked
    your site and I'm adding your RSS feeds to my Google \r\naccount."
permalink: zsh-seems-to-be-getting-a-lot-of-press-of-late
---
<p>And so it should - it's an awesome shell.</p>
<p>Anyway, I've just spent a lot of time sorting out my zsh so it does titles in the right way. By this, I mean changing the title of your xterm window, and/or your screen window.</p>
<p>Anyway, here's the code that I use for my zsh titles</p>
<pre style="padding-left: 30px;">precmd () {
 case $TERM in
 screen)
 print -Pn "\e]0;%n@%m: %~\a"
 print -Pn "\ekzsh: %~\e\"
 ;;
 xterm*|rxvt)
 print -Pn "\e]0;%n@%m: %~\a"
 ;;
 esac
}

preexec () {
 case $TERM in
 screen)
 print -Pn "\e]0;%n@%m: $1\a"
 print -Pn "\ek$1\e\"
 ;;
 xterm*|rxvt)
 print -Pn "\e]0;%n@%m: $1\a"
 ;;
 esac

}</pre>
<p>I find this works in the same way that the default bash shell does ;) though - it also works quite nicely with screen, and sets the screen titles for you too :D</p>
<p>Also - my prompt lines are (inspired by Daniel Silverstone circa 2005)</p>
<pre style="padding-left: 30px;">export RPROMPT='%B%d%b %t '
export PROMPT='%B%n@%m %#%b '</pre>
<p>Happy zsh'ing folks!</p>
