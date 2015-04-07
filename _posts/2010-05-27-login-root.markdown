---
layout: post
status: publish
published: true
title: Why shouldn't I login as root?
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: https://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: https://www.sourceguru.net/
wordpress_id: 326
wordpress_url: https://www.sourceguru.net/?p=326
date: !binary |-
  MjAxMC0wNS0yNyAyMToyMDoyOSArMDEwMA==
date_gmt: !binary |-
  MjAxMC0wNS0yNyAyMDoyMDoyOSArMDEwMA==
categories:
- Personal
tags:
- Linux
- root
comments:
- id: 57715
  author: Tomalak Geret'kal
  author_email: tom@kera.name
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yNyAyMToyNjowMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMDoyNjowMiArMDEwMA==
  content: No.
- id: 57717
  author: Dmitrijs Ledkovs
  author_email: dmitrij.ledkov@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yNyAyMTo0MzoyOCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMDo0MzoyOCArMDEwMA==
  content: set up sudoers correctly to allow users you want to run commands you want
    =) it's a simple human protection from a silly recursive remove command which
    will ask you for a sudo's password ;-)
- id: 57724
  author: alex
  author_email: alex@corcoles.net
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yNyAyMjowMToyMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMTowMToyMiArMDEwMA==
  content: You need a shared password. With sudo you can use your existing password,
    so no need to learn a new password. Also, if someone needs their access revoked
    to the box, you only need to disable their account.
- id: 57725
  author: Ray
  author_email: ray@poweredbytoast.com
  author_url: http://blog.poweredbytoast.com
  date: !binary |-
    MjAxMC0wNS0yNyAyMjowMTo0MCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMTowMTo0MCArMDEwMA==
  content: If you get comprimised as a user, the hackers get the user, but that's
    about it. If you get comprimised as root, the hackers get the system. Not logging
    in as root is a safety precaution for the off chance that there is a vulnerability
    in your software stack, and you do get hacked... I mean, they can do some pretty
    damaging stuff with even just a short time as root, like undo all those precautions
    you mentioned...
- id: 57728
  author: Ron
  author_email: rezphreak@hotmail.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yNyAyMjoyOToxOSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMToyOToxOSArMDEwMA==
  content: ! "\"Is there any good reason that I shouldnâ€™t be logging in as root
    in the above circumstances?\"\r\n\r\nYes.\r\n\r\nEven thought you are going over
    SSH, and even though it PROBABLY can't be sniffed, that doesn't mean it CAN'T
    be. Now, we can go 'round and 'round about this and that, but the real question
    is: Why do you need to login as root?\r\n\r\nWill sudo not work?\r\n\r\nIs there
    something you need that that cannot be done via sudo that REQUIRES you to login
    as the root user?\r\n\r\nYou want to use the least privileges possible. In other
    words, use whatever credentials are necessary, no more, mo less. If sudo works,
    don't login as root. If you can do something as a normal user and don't need sudo,
    then don't use sudo. This is really a security mindset.\r\n\r\nRon"
- id: 57729
  author: anonymous
  author_email: anonymous@example.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yNyAyMjozNjo0MSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMTozNjo0MSArMDEwMA==
  content: ! "&gt; Is there any good reason that I shouldnâ€™t be\r\n&gt; logging
    in as root in the above circumstances?\r\n\r\nYes, to shut the annoying people
    up."
- id: 57730
  author: Timo Juhani Lindfors
  author_email: timo.lindfors@iki.fi
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yNyAyMjo0Mjo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMTo0Mjo1NyArMDEwMA==
  content: People also often forget that if their normal user account ever gets compromised
    it is easy to wait in the background for the next sudo invocation and get root.
    Normal accounts get compromised more easily than the root account since people
    run web browsers and pdf readers. Also unless you have configured logging over
    network the audit trail of sudo can easily be removed when the attacker has gained
    root privileges (maybe one day we'll have some selinux style setups where not
    even root can erase log files).
- id: 57734
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yNyAyMzowNToxNCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMjowNToxNCArMDEwMA==
  content: ! "@Dmitrijs Ledkovs - but everything we need to access the server for
    requires root, so all we're going to do is sudo -i.\r\n\r\n@alex - no passwords
    are able to be used (except for physical console) - which is limited.  Revoke
    access? Remove the SSH key\r\n\r\n@Ray - We have safeguards against our local
    software stacks being poisoned.\r\n\r\n@Ron - someone would need a LOT of computing
    power to sniff an SSH stream as it stands at the moment.  We'd notice a mainframe
    in the car park. The rest of your argument just seems like \"Well, if you can
    do it that way - do it that way\" - in theory - your argument would mean no remote
    access whatsoever.  We can always go to the physical console.\r\n\r\n@Timo - indeed,
    espesically, as with sudo's implementation of not requiring a password every time,
    a normal account with sudo access (in my eyes) is potentially more dangerous (though
    theoretically unlikely).  At least with an SSH key, a password is needed"
- id: 57737
  author: Ron
  author_email: rezphreak@hotmail.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yNyAyMzozNTowMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMjozNTowMiArMDEwMA==
  content: ! "@NMez\r\n\r\n\"someone would need a LOT of computing power to sniff
    an SSH stream as it stands at the moment. Weâ€™d notice a mainframe in the car
    park. \"\r\n\r\nTrue. It is POSSIBLE, but not PROBABLE, therein lies the difference.
    The fact it is POSSIBLE, leaves room for doubt on security. I err on the side
    of caution and paranoia.\r\n\r\n\"The rest of your argument just seems like â€œWell,
    if you can do it that way â€“ do it that wayâ€\x9D â€“ in theory â€“ your argument
    would mean no remote access whatsoever. We can always go to the physical console.\"\r\n\r\nYes,
    this is deal. If you have local, physical access to the box on a regular basis,
    then remote access (even encrypted) still poses a risk.\r\n\r\nAll that being
    said though, you never answered my questions."
- id: 57738
  author: ethana2
  author_email: ethana2@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yNyAyMzozNjo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMjozNjo1MyArMDEwMA==
  content: Your bash aliases won't work and you have to practically learn another
    language just to administrate the machine.
- id: 57750
  author: Leandro Penz
  author_email: lpenz@terra.com.br
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yOCAwMzoyMzo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwMjoyMzo1NiArMDEwMA==
  content: On the other hand, there is no good reason to login as root.
- id: 57751
  author: TIm
  author_email: tim@tim-richardson.net
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yOCAwMzo0MDowMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwMjo0MDowMyArMDEwMA==
  content: it's flak not flack
- id: 57752
  author: Eric Hammond
  author_email: ehammond@thinksome.com
  author_url: http://alestic.com
  date: !binary |-
    MjAxMC0wNS0yOCAwMzo1NjowMSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwMjo1NjowMSArMDEwMA==
  content: ! "I don't particularly care if you ssh as root or not, though I've chosen
    to not.  I wrote the following article for people who are used to ssh as root
    and are forced to do otherwise (originally targeted for users of Amazon EC2):\r\n\r\n
    \ http://alestic.com/2009/04/ubuntu-ec2-sudo-ssh-rsync\r\n\r\n-- Eric Hammond"
- id: 57757
  author: Anonymous
  author_email: anonymous@example.org
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yOCAwNjoxNzo0MCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNToxNzo0MCArMDEwMA==
  content: ! 'The biggest argument: each administrator can have their own personal
    configuration in their home directory (editor, shell, aliases, scripts, and other
    miscellaneous dotfiles), whereas root only has one configuration.'
- id: 57761
  author: Andy Cater
  author_email: amacater@galactic.demon.co.uk
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yOCAwNzoxODoyNyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNjoxODoyNyArMDEwMA==
  content: ! 'If all you ever want to do is run a couple of commands - e.g. to a headless
    box which has no keyboard: ssh keys with forced commands may also help.'
- id: 57765
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yOCAwNzo1NDo0MCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNjo1NDo0MCArMDEwMA==
  content: ! '@Tim It can be either.'
- id: 57766
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yOCAwNzo1NToxMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNjo1NToxMiArMDEwMA==
  content: ! '@Leandro Why not?'
- id: 57767
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yOCAwNzo1NjozOSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNjo1NjozOSArMDEwMA==
  content: ! '@ethana2


    1) I use zsh

    2) We generally all use the same subset of commands. Not many of us use aliases.
    I prefer to use the command I want to use instead of having issues logging into
    some random box and finding the command doesn''t exist, then spending time finding
    out what the actual command was'
- id: 57768
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yOCAwNzo1Nzo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNjo1Nzo1MyArMDEwMA==
  content: ! '@Ron


    Then, to answer your questions


    1) No

    2) Not having extra attack vectors from usernames that don''t get used'
- id: 57770
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yOCAwNzo1ODozNCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNjo1ODozNCArMDEwMA==
  content: ! "@Eric\n\nGreat link! \n\nPersonally, my own boxes, I'll never login
    as root... but that doesn't apply @ work."
- id: 57771
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yOCAwNzo1OToxNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNjo1OToxNSArMDEwMA==
  content: ! '@Anonymous Good point - but generally the only thing we edit on these
    servers is the .vimrc - and we all share a common one.'
- id: 57772
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yOCAwNzo1OToyOSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAwNjo1OToyOSArMDEwMA==
  content: ! '@Andy If only that were the case :('
- id: 57786
  author: Gert
  author_email: gert@gertschepens.be
  author_url: http://www.gertschepens.be
  date: !binary |-
    MjAxMC0wNS0yOCAxMjowMzowOSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAxMTowMzowOSArMDEwMA==
  content: ! "Security is all about closing up possible attack vectors. Do you Really
    NEED that ssh root login? Is it possible, maybe with a bit more effort, to do
    whatever you need to do on there without loging in as root? If so, then why not
    close up that one attack vector? (Devils Advocate answer: its convenient - but
    security is not about convenience :/)\r\n\r\nAnd yes, you make the point that
    the root ssh access is set up with SSH keys, which are generally considered safe.\r\nExcept
    that one time last year (or so) when people discovered a bug in the relevant code,
    making all SSH keys vulnerable. Possibly including the one you depend on for your
    root access (Its possible you weren't actually affected, this time, but..) It
    was fixed within days if I remember correctly, but in the mean while, your root
    SSH would 've been wide open.\r\n\r\nNow if you simply disallow ssh login as root
    (\"PermitRootLogin no\" in the sshd_conf), thats one less vector to be concerned
    about. :)"
- id: 57787
  author: JW
  author_email: jw2online@verizon.net
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yOCAxMjoyMToxMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAxMToyMToxMiArMDEwMA==
  content: After a protracted conversation about this with someone on IRC, I think
    I refined my recommendation on this.  There are several good reasons stated here
    why it is a potential security issue.  However, at the end of the day it is your
    decision with your computer.  That being said, I urge you not to promote this
    as a best practice.  In general, it is a safer and better practice to log in as
    a user who has been granted permissions via the sudoers list.  Along those lines,
    if hope if you are maintaining computers that are not your personal computers
    you are doing the ultimate system owners a favor and not logging in as root; you
    could be compromising their system security based on your preference here.  Root
    is a powerful user to have compromised.
- id: 57792
  author: Mez
  author_email: martin@sourceguru.net
  author_url: https://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yOCAxMzo1MDo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAxMjo1MDo1NyArMDEwMA==
  content: JW, I completely agree, and I'd never promote it as best practice... it's
    just practice here.
- id: 57798
  author: Ron
  author_email: rezphreak@hotmail.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yOCAxNTowNTozMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAxNDowNTozMyArMDEwMA==
  content: ! "@Gert - Agreed. Security is not about conveience.\r\n\r\n@Mez - Then
    if:\r\n\r\nRon: Will sudo not work?\r\nMez: No\r\n\r\nRon: Ron: Then nowThen now
    I must ask: Why not?\r\n\r\nRon: Is there something you need that that cannot
    be done via sudo that REQUIRES you to login as the root user?\r\n\r\nMez: Not
    having extra attack vectors from usernames that donâ€™t get used.\r\n\r\nRon:
    Then logging at as root is MORE of a risk. Think about it. root is open wide.
    root is KNOWN to exist on systems. It, like \"Administrator\" on Windows, is the
    default account to be attacked. (which is why I always rename it to something
    else instead.) On Ubuntu, root is disabled by default and the first account created
    is in the sudoers file. You can easily limit that account, thus making it much
    more secure than logging in as root.\r\n\r\nQ: Why do you need to login as root?\r\nA:
    You don't need to. You WANT to. It's just like the people that think they NEED
    wifi in their house when they can just run CAT5e cabling instead, which is faster
    and more secure. Laziness, Ego. Not sure what the reasons are why people do that,
    but *NEEDED* isn't one of them.\r\n\r\nRon"
- id: 57802
  author: Carsten
  author_email: comment@miyameca.de
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yOCAxNjo1MDo1MSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOCAxNTo1MDo1MSArMDEwMA==
  content: ! "Well, if a direct ssh connection for user root could be sniffed, te
    same applies to getting the password for the sudo via ssh connection.\r\n\r\nIf
    you need root access for several users, but want some kind of audit trail:\r\n\r\nCreate
    multiple root users (all have the same uid/gid 0/0), but they have different home
    directories thus their own history, settings, shells...\r\n\r\nIf you don't trust
    the local system, forward your log files to a dedicated \"locked down\" syslog
    host where not a single user has ever access to (require two distinct local passwords
    via pam).\r\n\r\nThe biggest issue still is that you cannot check if the people
    use a good passphrase (or one at all) for their ssh private key, thus you might
    need a good way to revoke such keys: For that I'd put the ssh keys on a physically
    made read-only memory - provided no one can access the system easily and mount
    the ssh public keys from there (and enure that ssh reads them from there only.\r\n\r\nFinal
    comment, go for ssh with x509 certificates (patches see globus.org or VDT). There
    user names are in the certificate in clear text and people are usually more conscious
    to protect things where their name is directly attached to (call it \"social security\")
    ;)\r\n\r\nHTH\r\n\r\nCarsten\r\n\r\nPS: I'm working on *many* machines and unfortunately
    it's  90% the time as root - it works, but you just need to get into the habit
    of thinking before you type, rarely use rm, use mv first and rm later, and so
    on"
- id: 57837
  author: Dirk
  author_email: morticah@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMC0wNS0yOSAwOToxNjoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yOSAwODoxNjoxMCArMDEwMA==
  content: ! "Not to login as root is one of the so called \"Best Practice\". And
    like many \"Best Practices\" they were introduced many years ago. After that they
    were pushed by many people. But not anyone ever thinks about if they are still
    right as they might have been ages ago. Times change, systems change, people change
    and findings and insights change. \r\nA lot of \"Best Practices\" are meaningless
    and often counterproductive today. Just think of the rules to change passwords
    on a regular basis.\r\n\r\nSame is right for \"Never login as root\". It was instituted
    in a time where you logged in via telnet, rsh, ftp, http and nearly all users
    had a shell-login. All connections were without encryption and only based on password-authentication.\r\n\r\nToday
    things are different. You only allow secured channels to login to a server. The
    first thing you do is disable Password-Auth via ssh on a new server. So there
    is no way anyone can ever brute force the root pw. \r\n\r\nEvery hurdle you put
    up, that makes your work harder has to pass the test if it really has an effect
    in security that's value is higher than the extra hassle. \r\n\r\nSecurity is
    about convenience in that way that if it impacts your work too much, people will
    find ways around the whole system to get their work done and you will end up with
    no security at all.\r\n\r\nIf you allow root-logins your weak-point is the .authorized_keys
    if you don't your weakpoint ist sudoers. No gain.\r\n\r\nToday allowing root login
    via ssh with keyauth only is perfectly reasonable."
- id: 58021
  author: mathew
  author_email: meta@pobox.com
  author_url: http://www.pobox.com/~meta/
  date: !binary |-
    MjAxMC0wNi0wMSAyMToxMDo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNi0wMSAyMDoxMDo0NyArMDEwMA==
  content: ! "If you're the only one who ever uses root (i.e. no password sharing),
    and you only log in via secure ttys, then there's probably no danger in logging
    in as root. But what's the point? I find it easier to follow the same procedure
    for root access on all machines, than to have to remember which ones are set up
    for root login and which aren't.\r\n\r\nHence I never log in directly as root
    on any machine, at work or at home. I've yet to encounter any situation that requires
    it. So I agree with Ron, get over your bad habit."
- id: 65775
  author: uray
  author_email: uraymeiviar@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMC0wOC0yMyAxMzoxNDo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wOC0yMyAxMjoxNDo1NCArMDEwMA==
  content: ! "I run and logged in as root all the time, I even autologin it using
    root. \r\n\r\nsome people value more to their workflow efficiency while other
    on the security.\r\n\r\nif you donâ€™t care about security the risk is yours,
    linux is about freedom, including freedom to destroy your own data, privacy and
    security."
- id: 111826
  author: mchaos
  author_email: dreiman@reimancts.com
  author_url: ''
  date: !binary |-
    MjAxMS0wNi0yNCAwMzowOTo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNi0yNCAwMjowOTo1NyArMDEwMA==
  content: Root is god. I like to feel like god!!!!
- id: 245198
  author: Homer Smith
  author_email: homerwsmith@lightlink.com
  author_url: http://www.lightlink.com
  date: !binary |-
    MjAxMi0xMS0xNyAwNDowMDo0OSArMDAwMA==
  date_gmt: !binary |-
    MjAxMi0xMS0xNyAwNDowMDo0OSArMDAwMA==
  content: ! "A while back I ran into an sshd on a remote\r\nmachine that was infected.
    \ When it sshd into \r\nmy local shell machine it replaced the existing\r\nsshd
    with an infected one.  Fortunately tripwire\r\ncaught it within a minute.\r\n\r\nAllowing
    root sshd to sshd connections is only\r\nas safe as you can trust your sshd's,
    and if\r\nit is someone else's sshd, trust is poor.\r\n\r\npam.d allows one to
    specify who can log in as root\r\nand who can't. One can thus allow root access\r\namongst
    local machines that are more trusted,\r\nbut not from the world at large.\r\n\r\nSecurity
    is complicated as it tries to deny access,\r\nbut access is necessary to get work
    done.  For example\r\nwhen copying large numbers of root files from\r\nmachine
    to machine, rsync etc, doing it without root\r\naccess becomes more complicated
    and painful.\r\n\r\nHomer"
- id: 276168
  author: L
  author_email: ipacheco1995@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMy0wMS0xNiAxMDozMzo0MSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMS0xNiAxMDozMzo0MSArMDAwMA==
  content: ! "A good setup would be to disable root login (in tty and gui) and create
    a new account with a name more concealed to use as a sudo or with PID 0, but without
    rights to login in gui (so it cannot use pdf readers or browsers).\r\n\r\nIs a
    good idea?"
- id: 367463
  author: veterinarian scales
  author_email: gradylutes@live.com
  author_url: http://www.slideshare.net/VeterinaryTechx/veterinary-tech-salary
  date: !binary |-
    MjAxMy0xMC0yNSAyMzoyMzoxMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0xMC0yNSAyMjoyMzoxMiArMDEwMA==
  content: ! "Having read this I believed it was really enlightening.\r\nI appreciate
    you finding the time and energy to put this article together.\r\nI once again
    find myself personally spending a lot of time \r\nboth reading and posting comments.
    But so what, it was still worth it!"
- id: 420249
  author: Morgan Whitsell
  author_email: sondradefazio@gmail.com
  author_url: http://www.operadornet.com/2014/01/06/the-biggest-public-health-battles-of-2013/
  date: !binary |-
    MjAxNC0wMS0wNiAxMDoxMDoxMiArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0wNiAxMDoxMDoxMiArMDAwMA==
  content: ! "Hello I am so delighted I found your web site, I really found you by
    mistake, while I was looking on Askjeeve for something else, Regardless I am here
    now and would just \r\nlike to say thank you for a marvelous post and a all round
    entertaining blog (I also love the theme/design),\r\nI don't have time to browse
    it all at the minute but I have bookmarked it and also included your RSS feeds,
    \r\nso when I have time I will be back to read a great deal more, Please do \r\nkeep
    up the great work."
- id: 439179
  author: Riley
  author_email: rileygooge@freenet.de
  author_url: http://www.youtube.com/watch?v=ne44XetjsE8
  date: !binary |-
    MjAxNC0wMi0wNiAwNjowMDowOSArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMi0wNiAwNjowMDowOSArMDAwMA==
  content: ! "As soon as you've mined your historic riches in this Park,\r\nyou will
    have a conclusion to make. Certain areas have dining tables which are so \r\nsteamy,
    an individual wonder the actual number \r\nof gallons of beer have been spilled
    truth be told there, \r\nand additionally whether or not the bartenders understands
    the idea \r\nof \"wiping down.\r\n\r\nmy web-site myrtle beach golf vacation (<a
    href=\"http://www.youtube.com/watch?v=ne44XetjsE8\" rel=\"nofollow\">Riley</a>)"
- id: 476792
  author: ospreyadventuresusa.com
  author_email: leon.bair@live.de
  author_url: http://www.ospreyadventuresusa.com/having-a-difficult-schedule-select-on-the-go-dog-grooming-services/
  date: !binary |-
    MjAxNC0wMy0xNSAyMzowNzo1MiArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMy0xNSAyMzowNzo1MiArMDAwMA==
  content: ! "Good day! I could have sworn I've been to this website before \r\nbut
    after browsing through some of the post I realized it's new to me.\r\nNonetheless,
    I'm definitely happy I found it and I'll be book-marking and checking \r\nback
    often!\r\n\r\nAlso visit my site: best fleas treatment for dogs (<a href=\"http://www.ospreyadventuresusa.com/having-a-difficult-schedule-select-on-the-go-dog-grooming-services/\"
    rel=\"nofollow\">ospreyadventuresusa.com</a>)"
- id: 488519
  author: InternationalBusiness
  author_email: Colona33051@yahoo.com
  author_url: http://testamenttheplay.com
  date: !binary |-
    MjAxNC0wMy0yNCAwNjo0MDoxNyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMy0yNCAwNjo0MDoxNyArMDAwMA==
  content: I have been reading out a few of your posts and i can state pretty clever
    stuff. I will surely bookmark your website.
- id: 587138
  author: hexacube singapore
  author_email: fermintabarez@googlemail.com
  author_url: http://www.idealproperty.com.sg/hexacube/
  date: !binary |-
    MjAxNC0wNS0yOCAwMzo0Mzo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yOCAwMjo0Mzo0NyArMDEwMA==
  content: ! "Wonderful, what a webpage it is! This weblog gives useful \r\ndata to
    us, keep it up."
- id: 590271
  author: hhpkieraqqskldsge.pen.io
  author_email: shaniakhurst@gmail.com
  author_url: http://hhpkieraqqskldsge.pen.io/
  date: !binary |-
    MjAxNC0wNS0yOSAyMjozNTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yOSAyMTozNTo0MyArMDEwMA==
  content: ! "As part of a larger commitment made by President Obama it needs 100,
    000 kilometers are said \r\nto be a lot of time together watching the King's races
    over the years when I hwaded North.\r\nImprezaThis car is one of them, so you
    want to acquire your first car at a discount?\r\nAs with personal computing, you
    ccan consider buying as per your \r\nneeds cars in india and demands."
- id: 591023
  author: CAR Speranta
  author_email: shadforster@zoho.com
  author_url: http://www.car-speranta.ro
  date: !binary |-
    MjAxNC0wNS0zMCAxMDozMDo1NCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0zMCAwOTozMDo1NCArMDEwMA==
  content: ! "Pretty component of content. I just stumbled upon your web \r\nsite
    and in accession capital to say that I acquire in fact loved \r\naccount your
    weblog posts. Anyway I'll be subscribing on your augment or even I fulfillment
    you get admission to persistently quickly."
- id: 642188
  author: Wilburn
  author_email: wilburnrudall@googlemail.com
  author_url: http://www.youtube.com/watch?v=6lt7DjNu_fQ
  date: !binary |-
    MjAxNC0wNy0xMCAxNTowNzo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0xMCAxNDowNzo0MyArMDEwMA==
  content: ! "We All vouch for sub-contract-work on, process can accrued space of
    time towards higher toughness.\r\nTo this profound discovery, Ribbe explained,
    \"Obviously this could lead to new ways to create synthetic liquid fuels if we
    can make longer carbon-carbon chains. Upgrading your locks and lock systems are
    keys to keeping your family and the valuables you have at home safe and secure."
- id: 652260
  author: kids beach wedding shoes
  author_email: ''
  author_url: http://the-atg.com/xe/atg_notice1/29755
  date: !binary |-
    MjAxNC0wNy0xOSAyMjozMDo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0xOSAyMTozMDo1NiArMDEwMA==
  content: ! '<strong>kids beach wedding shoes...</strong>


    Why shouldnÂ’t I login as root? Â« Source Guru...'
- id: 658863
  author: TÃ©lÃ©charger Sous les jupes des filles Gratuit
  author_email: karolynwand@gmail.com
  author_url: https://www.facebook.com/souslesjupesdesfilles
  date: !binary |-
    MjAxNC0wNy0yNiAxNTozNTowMCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0yNiAxNDozNTowMCArMDEwMA==
  content: ! "Hmm it seems like your site ate my first comment (it \r\nwas extremely
    long) so I guess I'll just sum it up what I had written and say, I'm thoroughly
    enjoying \r\nyour blog. I as well am an aspiring blog blogger but I'm still new
    to the whole thing.\r\nDo you have any recommendations for newbie blog writers?\r\nI'd
    really appreciate it.\r\n\r\nFeel free to visit my webpage ... <a href=\"https://www.facebook.com/souslesjupesdesfilles\"
    rel=\"nofollow\">TÃ©lÃ©charger Sous les jupes des filles Gratuit</a>"
- id: 682338
  author: http://www.youtube.com/watch?V=1TvNPaQuWx0
  author_email: charliegibbs@googlemail.com
  author_url: http://www.youtube.com/watch?v=1TvNPaQuWx0
  date: !binary |-
    MjAxNC0wOC0yMSAxOTowMjo0MCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yMSAxODowMjo0MCArMDEwMA==
  content: ! "Sixty Dollar Mower\r\n\r\nLook into my blog post :: Have you seen this
    man? [<a href=\"http://www.youtube.com/watch?v=1TvNPaQuWx0\" rel=\"nofollow\">http://www.youtube.com/watch?V=1TvNPaQuWx0</a>]"
- id: 685661
  author: latest iphone games free download
  author_email: geniahalcomb@web.de
  author_url: http://mylivetvlinks.blogspot.ch/2013/04/MTVHD.html
  date: !binary |-
    MjAxNC0wOC0yNiAwMTozMjoyMCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yNiAwMDozMjoyMCArMDEwMA==
  content: ! "Heya! I just wanted to ask if you ever have any trouble with \r\nhackers?
    My last blog (wordpress) was hacked and I ended up losing many months of hard
    work \r\ndue to no back up. Do you have any methods to \r\nprotect against hackers?"
- id: 701653
  author: Top 10 muscle building Supplements
  author_email: gabrielabraswell@gmx.de
  author_url: http://nicholas-whatthe.blogspot.co.il/2010/09/kinda-diggin-that-odonnell-character.html
  date: !binary |-
    MjAxNC0wOS0xMSAxNjo0ODozNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xMSAxNTo0ODozNCArMDEwMA==
  content: ! "Hello, i feel that i noticed you visited my site so i got here to return
    the want?.I'm \r\nattempting to find things to improve my website!I guess its
    adequate to use \r\na few of your ideas!!\r\n\r\nLook at my blog ... <a href=\"http://nicholas-whatthe.blogspot.co.il/2010/09/kinda-diggin-that-odonnell-character.html\"
    rel=\"nofollow\">Top 10 muscle building Supplements</a>"
- id: 702165
  author: continuity editing
  author_email: aileenakins@googlemail.com
  author_url: http://www.zucchorovanytocomboe.com
  date: !binary |-
    MjAxNC0wOS0xMiAwMTo0MToyNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xMiAwMDo0MToyNiArMDEwMA==
  content: ! "I absolutely love your blog and find nearly all of your post's to \r\nbe
    just what I'm looking for. Would you offer guest writers to write \r\ncontent
    to suit your needs? I wouldn't mind creating \r\na post or elaborating on some
    of the subjects you write related to here.\r\n\r\nAgain, awesome web log!"
- id: 703055
  author: business procrastination
  author_email: maude.graham@yahoo.com
  author_url: http://www.lindaharmsen.nl/gallery/image-22/
  date: !binary |-
    MjAxNC0wOS0xMyAwNDo0MjoxNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xMyAwMzo0MjoxNiArMDEwMA==
  content: If you would like to get much from this post then you have to apply these
    techniques to your won website.
- id: 705170
  author: agen bola tangkas
  author_email: tyreegonsalves@gmail.com
  author_url: http://maricejephcott.wordpress.com/
  date: !binary |-
    MjAxNC0wOS0xNSAwODoxNTo1MyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xNSAwNzoxNTo1MyArMDEwMA==
  content: ! "If you have an election related issue you'd like to see explored, please
    let me know.\r\n\r\nWith all the dueling monologues, there is no dialogue.\r\nLook
    inside the records for more information before placing your \r\nsoccer bets."
- id: 707923
  author: casino en ligne
  author_email: elizabet.stonehaven@gmail.com
  author_url: http://google.fr/
  date: !binary |-
    MjAxNC0wOS0xNyAyMToyMDowNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xNyAyMDoyMDowNCArMDEwMA==
  content: ! "Ceux-lÃ  avaient dÃ» atteindre en escaladant un tas de fagots \r\nadossÃ©
    au mur croulant de la femme insistÃ¨rent si longtemps pour penser Ã  autre dâ€™une
    voix \r\nbrusque, casino sottises! Une nuance dâ€™effroi se firent leurs \r\ncomplices,
    rÃ©tablirent, sinon assouvir, la tÃªte, des accrocs, toute cette affaire est-elle
    plus intÃ©ressante pour vous; cependant rien nâ€™est plus maintenant.\r\nMais
    moi aussi jâ€™ai passÃ© ma soirÃ©e avec eux.\r\n\r\nFrantz expliquerait tout;
    mais Laurie courait avec plus dâ€™attention, on me place en Ã©touffant casino
    mal mes sanglots convulsifs."
- id: 709477
  author: auto repair mechanic san diego
  author_email: minervarobillard@yahoo.com
  author_url: https://www.youtube.com/watch?v=v8lJY2xOMlA
  date: !binary |-
    MjAxNC0wOS0xOSAwNzo1NzowNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xOSAwNjo1NzowNyArMDEwMA==
  content: ! "This is particularly true in greatly populated and multi dimensionally
    equipped areas like Los \r\nAngeles, Pasadena, Glendale and Burbank. By comparing
    parts and \r\nauto repair place san diego labor charges. Look for your reliable
    appliance \r\nrepair service organisation of the area. Finding a company \r\nthat
    serves auto repair place san diego a multi-purpose service.\r\nSelecting how to
    get your darned contraption to work the way it's supposed to and the other one
    that offers \r\nbrand, type, or model of an appliance repair Murrieta expert.\r\n\r\nThe
    warranty period and only 18."
- id: 710712
  author: gta 5 online money glitch 1.16
  author_email: delia_grassi@gmail.com
  author_url: https://vimeo.com/105100813
  date: !binary |-
    MjAxNC0wOS0yMCAxNjo1NjowNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMCAxNTo1NjowNCArMDEwMA==
  content: ! "Excellent blog you have here.. It's difficult to find high quality writing
    \r\nlike yours nowadays. I seriously appreciate people like you!\r\nTake care!!\r\n\r\nMy
    blog: <a href=\"https://vimeo.com/105100813\" rel=\"nofollow\">gta 5 online money
    glitch 1.16</a>"
- id: 711360
  author: softeclipse
  author_email: monserratesears@gmail.com
  author_url: http://tnurl.net/httpsofteclipsecom127729
  date: !binary |-
    MjAxNC0wOS0yMSAxMjoxNDo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMSAxMToxNDo0NyArMDEwMA==
  content: ! "I am regular reader, how are you everybody? This post posted at this
    web site is \r\ngenuinely nice."
- id: 711386
  author: write my essay
  author_email: judelevin@bigstring.com
  author_url: http://writemyessayonline.com/
  date: !binary |-
    MjAxNC0wOS0yMSAxMjo1NjoyMiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMSAxMTo1NjoyMiArMDEwMA==
  content: ! "I got this web site from my buddy who shared with me regarding this
    web page and at the moment this time I am visiting this web site and reading very
    informative articles at this time.\r\n\r\n\r\nReview my website ... <a href=\"http://writemyessayonline.com/\"
    rel=\"nofollow\">write my essay</a>"
- id: 713051
  author: posicionamiento sem en madrid
  author_email: bryonpuente@yahoo.com
  author_url: https://www.google.com/maps/d/edit?mid=zp6nZNYZg-s0.kG24qdKx2C7w
  date: !binary |-
    MjAxNC0wOS0yMyAxNjowODoyMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMyAxNTowODoyMSArMDEwMA==
  content: ! "No puedes dejar pasar la oportunidad que representa un buen posicionamiento
    sin costo en los mejores buscadores web, si desperdicias \r\nesta oportunidad
    para lograr un buen posicionamiento sin coste en internet ,\r\nlos usuarios de
    internet que realizan consultas sobre su Ã¡mbito seguramente hallen una \r\npÃ¡gina
    web de la competencia."
- id: 714887
  author: yamaha R15
  author_email: bennie.hermanson@gmail.com
  author_url: http://dirtyrottendan.tumblr.com/post/93859413503/harga-motor-yamaha-r15
  date: !binary |-
    MjAxNC0wOS0yNSAwMTozNjozMCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yNSAwMDozNjozMCArMDEwMA==
  content: ! "In that situation 40 percent of the buyers will change their idea and
    look for \r\nany other alternative of Yamaha bikes but some smart people will
    go with the same bike the difference is only it has been used by the other person.
    \r\nThis bike has a record of being the most used bike by bike racing \r\nenthusiasts.
    This bike is powered by 150cc engine and has 4 stroke,\r\nliquid cool, single
    cylinder, 4 valves and SOHC."
- id: 715664
  author: sbo thai
  author_email: corinne.murry@t-online.de
  author_url: http://Empire-Groups.ru/
  date: !binary |-
    MjAxNC0wOS0yNSAxNDozMToxMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yNSAxMzozMToxMSArMDEwMA==
  content: ! "Hey there! Do you use Twitter? I'd like to follow you if that would
    be okay.\r\nI'm undoubtedly enjoying your blog and look forward to new updates."
- id: 717224
  author: wacoswe.wordpress.com
  author_email: alvarocoffey@freenet.de
  author_url: http://wacoswe.wordpress.com/
  date: !binary |-
    MjAxNC0wOS0yNyAwNDozNDowNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yNyAwMzozNDowNCArMDEwMA==
  content: ! "Just desire to say your article is aas amazing. The clarity in youir
    post is \r\njust excellent and i can assume you are an expert on this subject.\r\nFine
    with your permission let me to grab your feed to keep updated with forthcoming
    post.\r\nThanks a million and please keep upp the gratifying work.\r\n\r\n\r\nHere
    is my wesite - hoow to create a website (<a href=\"http://wacoswe.wordpress.com/\"
    rel=\"nofollow\">wacoswe.wordpress.com</a>)"
- id: 719928
  author: hedgehogs pets
  author_email: caroline.bennelong@aol.com
  author_url: https://play.google.com/store/apps/details?id=kg.Tamagotchiapps.HedgehogPetSA
  date: !binary |-
    MjAxNC0wOS0zMCAwMToyOTozNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0zMCAwMDoyOTozNyArMDEwMA==
  content: ! "Hey! This is kind of off topic but I need some advice \r\nfrom an established
    blog. Is it difficult to set up your \r\nown blog? I'm not very techincal but
    I can figure things out pretty quick.\r\nI'm thinking about setting up my own
    but I'm not sure where to begin. \r\nDo you have any points or suggestions?  Thank
    you"
- id: 719948
  author: agen ibcbet
  author_email: francisco_marmion@web.de
  author_url: http://bolavita.com/ibcbet
  date: !binary |-
    MjAxNC0wOS0zMCAwMTo1OTozMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0zMCAwMDo1OTozMSArMDEwMA==
  content: ! "I visit every day some websites and blogs to read articles,\r\nhowever
    this website gives feature based posts."
- id: 723167
  author: followers free
  author_email: leolaevans@freenet.de
  author_url: http://moroivr.3322.org:809/songta/Shownews.asp?id=317
  date: !binary |-
    MjAxNC0xMC0wMiAwNzowOTozOSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0xMC0wMiAwNjowOTozOSArMDEwMA==
  content: ! "Hello, all the time i used to check webpage posts here early in the
    dawn, as i \r\nlike to find out more and more."
permalink: login-root
---
<p>I've recently gotten a lot of flack from a couple of people for an innocent comment I made about logging into a machine as root.<br />
I'd like to think of myself as pretty savvy when it comes to security, and as far as I'm concerned, the reasons for not logging in as root are:-</p>
<ul>
<li>Password could theoretically be sniffed</li>
<li>Unsecure connection could theoretically be hijacked</li>
<li>You don't get an audit trail like you would with su or sudo</li>
<li>Password could be brute forced</li>
<li>You could easily run a command unintentionally which causes damage to your system</li>
</ul>
<p>Ok, so we have the reasons not to - and they're good reasons.  This is why, generally, I don't login to my boxes as root.  However, the box in concern mitigates the above in the following ways</p>
<ul>
<li>We only ever connect via SSH</li>
<li>Access to root is only allowable through SSH keys</li>
<li>Due to the nature of the server (local file storage) we don't need an audit trail</li>
<li>Password login is only ever allowed from a secure TTY (aka the box itself)</li>
<li>The only reason we ever need to login to this machine is to perform maintenance which requires root access</li>
</ul>
<p>Is there any good reason that I shouldn't be logging in as root in the above circumstances?</p>
