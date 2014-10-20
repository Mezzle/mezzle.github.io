---
layout: post
status: publish
published: true
title: Setting up networking on an ubuntu server
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 124
wordpress_url: http://www.sourceguru.net/?p=124
date: !binary |-
  MjAwOC0wNC0xNCAyMDo0NDozOCArMDEwMA==
date_gmt: !binary |-
  MjAwOC0wNC0xNCAxOTo0NDozOCArMDEwMA==
categories:
- Geeky
- Linux
- Ubuntu
- Interweb
- Rants
tags:
- Ubuntu
- server
- networking
- interfaces
- eth0
comments:
- id: 18519
  author: Jeff Schroeder
  author_email: jeffschroeder@computer.org
  author_url: http://www.digitalprognosis.com
  date: !binary |-
    MjAwOC0wNC0xNCAyMTozOTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xNCAyMDozOTo0MyArMDEwMA==
  content: ipconfig is for windows, ifconfig is for Linux. You might want to update
    that typo on your post :)
- id: 18522
  author: Joe Terranova
  author_email: joeterranova@gmail.com
  author_url: http://www.joeterranova.net
  date: !binary |-
    MjAwOC0wNC0xNSAwMDowNDoyNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xNCAyMzowNDoyNiArMDEwMA==
  content: ! "resolv.conf is an extremely transient file, especially if you are using
    DHCP. <a href=\"https://www.opendns.com/start?device=ubuntu\" title=\"Unix/Linux
    Ubuntu\" rel=\"nofollow\">As described here</a> in the second step, you'd want
    to add:\r\nprepend domain-name-servers 208.67.222.222,208.67.220.220;\r\nTo your
    /etc/dhcp3/dhclient.conf . Your resolv.conf will get wiped out every time you
    connect through dhcp, and replaced with the dhcp server's recommendation. Adding
    a prepend will put the OpenDNS servers first in your generated resolv.conf . More
    conveniently, instead of changing all your servers to Open DNS, if you have control
    of your router, change <strong>it</strong> to use OpenDNS.\r\n\r\nThe changes
    to resolv.conf are necessary for a static IP setup; for DHCP, while you need to
    make those changes to make the DNS change right away, they need to change dhclient.conf
    (or your router) to make them permanent. \r\n\r\nOverall, good post. Did you see
    if similar instructions were on <a href=\"http://help.ubuntu.com\" rel=\"nofollow\">help.ubuntu.com</a>,
    and add/merge your instructions?"
- id: 18526
  author: tucker
  author_email: tucker@mailinator.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNC0xNSAwMTozNToxNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xNSAwMDozNToxNiArMDEwMA==
  content: If you're not familiar enough with vi to use it instead of nano, you probably
    shouldn't attempt this on your own.
- id: 18542
  author: Greg Nagy
  author_email: nagy.gergely@gnanet.net
  author_url: ''
  date: !binary |-
    MjAwOC0wNC0xNSAwODoxMDoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xNSAwNzoxMDoxMCArMDEwMA==
  content: ! "Typo fix:\r\nnameserver : 208.67.222.222 \r\nnote: the 3rd block is
    222"
- id: 18543
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0wNC0xNSAwODo1OTozOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNC0xNSAwNzo1OTozOCArMDEwMA==
  content: ! "Thanks for the pointers. For some reason wordpress decided to cut the
    last digit off of the end of a few lines :( and iponfig - meh - how I didn't spot
    that I don't know.\r\n\r\nWith regards to /etc/resolv.conf. while I do understand
    that this is transient, reading my instructions,you'll find that I only suggest
    editing it when it doesn't auto-configure - though its a good point.\r\n\r\ntucker.
    nano comes installed by default in ubuntu. I was trying to write this tutorial
    to make it easy for people.\r\n\r\nAnyway, real programmers use cat ;)"
- id: 20597
  author: caedo
  author_email: caedo.00@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNi0yNCAxNzoxNjowMiArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNi0yNCAxNjoxNjowMiArMDEwMA==
  content: ! "Great explanation. \r\nFollowing the \"how-to\" make me solve the problem
    in no time.\r\n\r\nthanks"
- id: 21042
  author: Deidgar
  author_email: johndiener@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0wNy0wMSAxMTowMTozOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0wMSAxMDowMTozOSArMDEwMA==
  content: I installed Ubuntu Server and the network at our office uses a static IP
    address and DNS.  I edited interfaces and resolv.conf to include the DNS server
    and static IP address.  however, I still can't ping anything.  I know the cable
    is fine, I know the network is live, I just can't get Ubuntu on it.  I don't understand
    what's the issue.  Any ideas for what to try next?
- id: 22403
  author: Marcus Koze
  author_email: marius@evolver-minds.net
  author_url: http://evolver-minds.net
  date: !binary |-
    MjAwOC0wNy0yNSAxMDoyODoxOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0yNSAwOToyODoxOCArMDEwMA==
  content: I have the same problem as Deidgar, installed but doesn't manage to ping
    anything, nor access the internet (need to install things, etc). If there's any
    kind soul around and in knowledge of it... Also, i tried to issue the 'ipconfig'
    command, but it says that it is an unrecognized command. weird i'd say ...
- id: 22552
  author: Iggy
  author_email: iggy@asdf.com
  author_url: http://www.asdf.com
  date: !binary |-
    MjAwOC0wNy0yNyAyMjowODowOSArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wNy0yNyAyMTowODowOSArMDEwMA==
  content: Marcus, you must use ifconfig. Ipconfig is for Windows.
- id: 31974
  author: Karuna
  author_email: never_hurt_you@blackdeskcustom.com
  author_url: http://www.blackdeskcustom.com
  date: !binary |-
    MjAwOS0wMS0yOCAwOTowNzoxNiArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMS0yOCAwODowNzoxNiArMDAwMA==
  content: What if you have a wireless LAN adapter and want to connect your server
    to your router? how would you go about doing that?
- id: 46548
  author: Bill
  author_email: allforums@exemail.com.au
  author_url: ''
  date: !binary |-
    MjAwOS0xMi0wMyAwODowMjo1NCArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0xMi0wMyAwNzowMjo1NCArMDAwMA==
  content: ! "In the lines\r\n\" auto lo\r\niface lo inet loopback\"\r\n\r\nIs 'lo'
    LowerCase-L_LowerCase-O or NUMBER-ONE_LowerCase-O?\r\n\r\nThanks.\r\n\r\nBill\r\nPS:
    what does it mean?"
- id: 57735
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://www.sourceguru.net/
  date: !binary |-
    MjAxMC0wNS0yNyAyMzoxNToyMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNS0yNyAyMjoxNToyMiArMDEwMA==
  content: ! "@Bill - both are lowercase letters L and O\r\nIt stands for \"loopback\"\r\n\r\n@Deidger
    - might want to check out whether your netmask is correct - and also check the
    output from ip ro show to see if you have a default route."
- id: 66362
  author: cyberdutch
  author_email: will@cyberdutch.com
  author_url: ''
  date: !binary |-
    MjAxMC0wOC0zMCAwOTozMjo0MSArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wOC0zMCAwODozMjo0MSArMDEwMA==
  content: Thanks, Mez. Great, very helpful step-by-step approach to the subject
- id: 66789
  author: Graham
  author_email: graham@communicate.za.net
  author_url: ''
  date: !binary |-
    MjAxMC0wOS0wNCAxMTo1Njo1OCArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wOS0wNCAxMDo1Njo1OCArMDEwMA==
  content: ! "I have an Ubuntu server running inside a VMWare machine on Windows Server
    2003. The Windows Server 2003 machine IS a router (It has a dial-up connection
    using an ADSL USB Modem), and it runs Internet Connection Sharing. All other machines
    on the network have Internet access because their default gateway is that of the
    router (192.168.0.1).\r\n\r\nMy Linux VM can ping other machines on the local
    network, and machines on the network can ping my VM (although only by IP Address,
    not by name). I gave my Linux machine a static IP of 192.168.0.3 (Subnet mask
    255.255.255.0, Broadcast address 192.168.0.255). It can resolve www.google.co.za
    but cannot ping it (The ping never comes back).\r\n\r\nAny idea what the problem
    could be? It's Ubuntu 10.04 LTS."
- id: 100148
  author: Dan
  author_email: dtemmons@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMS0wNC0xNSAwNToxNzo1OSArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wNC0xNSAwNDoxNzo1OSArMDEwMA==
  content: Thanks for the post.  You helped me get a networking issue squared away.
- id: 127264
  author: jtdb
  author_email: joe@mail.com
  author_url: http://www.tabletguru.co.za
  date: !binary |-
    MjAxMS0wOS0xNCAyMzowMjowNCArMDEwMA==
  date_gmt: !binary |-
    MjAxMS0wOS0xNCAyMjowMjowNCArMDEwMA==
  content: ! "Thanks for the pointers.\r\n\r\nStill not able to connect back to the
    world with my Ububuntu 11.4 but can ping loopback and even that static configured
    interface with your help.\r\n\r\nSuppose my issue is with the HyperV facility
    I am using to host my virtual Ubuntu server...\r\n\r\nI know it sounds strange
    to get a MS box to host Linux in a VM but I figured \" why the hell not\"\r\n\r\nthanks
    for the post  - kudos"
- id: 179569
  author: Chaitanya
  author_email: linux@enjayworld.com
  author_url: ''
  date: !binary |-
    MjAxMi0wNC0xMiAwNjoyOTo0MSArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wNC0xMiAwNToyOTo0MSArMDEwMA==
  content: ! "I have ubuntu 10.04 \"SERVER\" installed on a system with two ehternet
    ports. I use only one at a time. I wanted to know if I can switch between ports
    without using ifup and ifdown every time. That means when I connect my Lan cable
    on eth0 it should work and it does. But when I disconnect the lan cable and connect
    it on eth1 I have to ifdown eth0 and only then it works. In my /etc/network/interfaces
    file I have configured both eth0 and eth1. there is no problem other than I have
    to switch it manually with ifdown and ifup everytime.\r\n\r\nPlease guide. Thanks
    in advance"
- id: 215672
  author: Ali
  author_email: alastair.mcdonald@hotmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0wOC0xNiAyMDowMjozNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0wOC0xNiAxOTowMjozNSArMDEwMA==
  content: Thank you so much, this fixed my issue and you saved me hours of work -
    i was about to reinstall the entire thing.   I'm a total newbee to Ubuntu and
    this step through was really helpful.  Thanks again
- id: 231430
  author: randallard
  author_email: randallard@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxMi0xMC0xMiAxNjoyODozNiArMDEwMA==
  date_gmt: !binary |-
    MjAxMi0xMC0xMiAxNToyODozNiArMDEwMA==
  content: found you!  4 years later and still helping people out - thanks a ton -
    my issue was DNS setup.  u rock.
- id: 292665
  author: Neil F
  author_email: ne45@hotmail.co.uk
  author_url: http://barlowfletcher.co.uk
  date: !binary |-
    MjAxMy0wMy0xMCAxOTo0MjoxMiArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0wMy0xMCAxOTo0MjoxMiArMDAwMA==
  content: still helping 5 years later - i now have a connection to the big bad world
    - thank you
- id: 300810
  author: servidores linux
  author_email: BrueningNordlie271@hotmail.com
  author_url: http://24x7.cl/contacto/
  date: !binary |-
    MjAxMy0wNC0xMiAxODozNjowMCArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNC0xMiAxNzozNjowMCArMDEwMA==
  content: Excellent post. I was checking continuously this weblog and I'm impressed!
    Extremely useful information particularly the final part :) I take care of such
    information a lot. I used to be looking for this particular information for a
    long time. Thank you and best of luck.
- id: 304311
  author: krishna mohan
  author_email: mohan.kuchibhatla@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMy0wNC0zMCAxMjoyMDoyMSArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNC0zMCAxMToyMDoyMSArMDEwMA==
  content: I have installed ubuntu12.04 server edition. Earlier in our organization
    there is a proxy. At that time we are giving authentication password in /etc/apt/apt.conf
    recently organization removed that proxy. So we are using no proxy option. In
    our normal Desktops after giving authentication pwd in browser then only sudo
    apt-get update will work. Now the machine is server editon. There is no GUI to
    enter authentication pwd to enter. So how to connect the internet to the machine.
    I am trying to install package with sudo apt-get install (some package). It is
    not working.
- id: 309720
  author: Eddie
  author_email: eddiemckee@aol.com
  author_url: http://www.workoutprogramsrated.com/visual-impact/sitemap/99
  date: !binary |-
    MjAxMy0wNS0yMiAxMTo0NDoxOCArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0yMiAxMDo0NDoxOCArMDEwMA==
  content: Hello everyone, it's my first visit at this web site, and post is actually
    fruitful for me, keep up posting such content.
- id: 310312
  author: sales
  author_email: alfredbillups@t-online.de
  author_url: http://trains4america.wordpress.com/2008/10/17/more-ohio-developments/
  date: !binary |-
    MjAxMy0wNS0yNCAxMjowMzoxOCArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0yNCAxMTowMzoxOCArMDEwMA==
  content: ! "naturally like your web site but you need to check the spelling on quite
    a \r\nfew of your posts. Many of them are rife with spelling issues \r\nand I
    find it very bothersome to tell the truth nevertheless I'll certainly come back
    again."
- id: 310752
  author: games news
  author_email: joeyslaughter@gmail.com
  author_url: http://hackandcheats.org/
  date: !binary |-
    MjAxMy0wNS0yNSAyMTozMToxMCArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0yNSAyMDozMToxMCArMDEwMA==
  content: ! "I'm not sure where you're getting your info, but great topic.\r\nI needs
    to spend some time learning more or understanding more.\r\nThanks for fantastic
    information I was looking for this information for my mission."
- id: 311190
  author: rk75636
  author_email: meshramraj@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMy0wNS0yNyAxNzoyOTozMSArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0yNyAxNjoyOTozMSArMDEwMA==
  content: Thank you so much.
- id: 312052
  author: Randall
  author_email: randallcarey@googlemail.com
  author_url: http://tommylee.com/groups/the-irrefutable-fact-on-can-you-hack-clash-of-clans-nobody-is-sharing-with-you/
  date: !binary |-
    MjAxMy0wNS0zMCAxOTowMToxMCArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0zMCAxODowMToxMCArMDEwMA==
  content: I'm now not positive where you are getting your information, but good topic.
    I needs to spend a while learning much more or figuring out more. Thank you for
    excellent info I was looking for this info for my mission.
- id: 315838
  author: http://hex.io/wlodarczykczakijewliveblogspotcom
  author_email: nestorshell@gmail.com
  author_url: http://hex.io/wlodarczykczakijewliveblogspotcom
  date: !binary |-
    MjAxMy0wNi0xNSAxNjoxNDowMiArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNi0xNSAxNToxNDowMiArMDEwMA==
  content: ! "Iron and vitamin e antioxidant are very important for balanced egg development
    \r\nand growth. Starting from his invention, there were many varieties of boxing
    gloves \r\navailable and in roman times, these boxing gloves were metal added
    to inflict greater damage and \r\nas the years passed, many gloves were introduced
    and each has its own pros and cons.\r\nThere are specially made socks to be worn
    with boxing shoes."
- id: 322068
  author: toronto mold removal
  author_email: clinton_winfrey@googlemail.com
  author_url: http://www.youtube.com/watch?v=9rZVjDd0z24
  date: !binary |-
    MjAxMy0wNy0xMyAxODoxOTo0NyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNy0xMyAxNzoxOTo0NyArMDEwMA==
  content: ! "Does the creator of this web site live in the usa?  Is there any way
    to have \r\nthe mailing address so that we may be in connection?\r\n\r\nHere is
    my web page :: <a href=\"http://www.youtube.com/watch?v=9rZVjDd0z24\" rel=\"nofollow\">toronto
    mold removal</a>"
- id: 326601
  author: wireless network diagram
  author_email: cesar-venable@aol.com
  author_url: http://nfcdirect.co.uk
  date: !binary |-
    MjAxMy0wNy0yNSAwNToxMTo1NiArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNy0yNSAwNDoxMTo1NiArMDEwMA==
  content: ! "Hi, I do think this is an excellent website. I stumbledupon it ;) \r\nI
    may come back once again since i have saved as a favorite it.\r\n\r\nMoney and
    freedom is the greatest way to change, may you be rich and continue to \r\nguide
    other people."
- id: 329084
  author: Marcy Twiest
  author_email: Micek121@gmail.com
  author_url: http://suitablecreatedirectohostingies.wordpress.com
  date: !binary |-
    MjAxMy0wNy0zMCAxMjozMjoxNSArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0wNy0zMCAxMTozMjoxNSArMDEwMA==
  content: ! '"I rattling glad to find this website on bing, just what I was looking
    for : D likewise saved to favorites."'
- id: 357039
  author: ppi claims
  author_email: hester_bejah@googlemail.com
  author_url: http://www.goddreamcenter.org/8759
  date: !binary |-
    MjAxMy0xMC0wMyAwNDo0MDozMyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0xMC0wMyAwMzo0MDozMyArMDEwMA==
  content: ! "Great article. I am going through some of these issues as well..\r\n\r\n\r\nAlso
    visit my page :: <a href=\"http://www.goddreamcenter.org/8759\" rel=\"nofollow\">ppi
    claims</a>"
- id: 357835
  author: https://skydrive.live.com
  author_email: antonetta.cormier@t-online.de
  author_url: https://skydrive.live.com/redir.aspx?resid=241187DD7624380A!107
  date: !binary |-
    MjAxMy0xMC0wNCAxNTowMTo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAxMy0xMC0wNCAxNDowMTo1NyArMDEwMA==
  content: ! "Hey there! I know this is somewhat off topic but I was wondering which
    blog platform are you using for this \r\nwebsite? I'm getting fed up of Wordpress
    because I've had issues with hackers and I'm looking at alternatives for another
    platform.\r\n\r\nI would be awesome if you could point me in the direction of
    a \r\ngood platform."
- id: 395264
  author: Webagentur Innsbruck
  author_email: bonny-wieck@aol.com
  author_url: http://ottopippi.blogspot.fr/2011/09/brudnabbstoile.html
  date: !binary |-
    MjAxMy0xMi0wMSAxNToxOTozOSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0xMi0wMSAxNToxOTozOSArMDAwMA==
  content: ! "obviously like your web site however you need to take a \r\nlook at
    the spelling on quite a few of your posts.\r\nMany of them are rife with spelling
    problems and I to find \r\nit very bothersome to tell the reality nevertheless
    I \r\nwill surely come again again."
- id: 400972
  author: computer repair in new castle de
  author_email: ernestinecosgrove@gmail.com
  author_url: http://clarencestleon.wordpress.com/2013/12/06/personal-computer-fix-and-troubleshooting/
  date: !binary |-
    MjAxMy0xMi0wOSAwNToyNDozMSArMDAwMA==
  date_gmt: !binary |-
    MjAxMy0xMi0wOSAwNToyNDozMSArMDAwMA==
  content: Fantastic web site, do you update often?
- id: 419643
  author: cheap dubai holidays
  author_email: danial_brack@aol.com
  author_url: http://www.yallahdubai.com/
  date: !binary |-
    MjAxNC0wMS0wNSAxMToxNzo1NSArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0wNSAxMToxNzo1NSArMDAwMA==
  content: ! "If you are going for best contents like me, just go to see \r\nthis
    web site everyday for the reason that it provides quality contents, thanks"
- id: 422943
  author: Dedra
  author_email: dedrawasson@123mail.org
  author_url: http://www.toughtimedeals.com/content/coupon-code-plugin-coupon-discount-and-evaluation
  date: !binary |-
    MjAxNC0wMS0xMCAwODo0MzozNyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0xMCAwODo0MzozNyArMDAwMA==
  content: ! "Hi colleagues, its enormous article concerning cultureand fully defined,\r\nkeep
    it up all the time."
- id: 423127
  author: Jeux gratuit de Minecraft
  author_email: johnson.triplett@freenet.de
  author_url: http://Eminecraftpremiumgratuit.Blogspot.com
  date: !binary |-
    MjAxNC0wMS0xMCAxNjoyNTo1MyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0xMCAxNjoyNTo1MyArMDAwMA==
  content: ! "As a result, the developer has not yet committed to a release date.\r\nThe
    same spokesperson also provided some details in regards to mash-up packs.\r\nThere
    are mods that function to bring more specific content towards the \r\ngame, mods
    that maximize your graphics or the speed in \r\nthe game, mods that give new content
    that had \r\nbeen taken from another game, mods that delete the current content,
    \r\nmods that give some other feel to the activity, mods \r\nthat allow you to
    definitely connect with the Minecraft Top quality Account Generator world in many
    ways, Minecraft \r\nPremium Account Generator much more.\r\n\r\nMy weblog <a href=\"http://Eminecraftpremiumgratuit.Blogspot.com\"
    rel=\"nofollow\">Jeux gratuit de Minecraft</a>"
- id: 426206
  author: Dawn
  author_email: dawngoulet@gmail.com
  author_url: http://dentistinorlandofl.net
  date: !binary |-
    MjAxNC0wMS0xNSAwMjowOToxNSArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0xNSAwMjowOToxNSArMDAwMA==
  content: ! "This website was... how do I say it? Relevant!!\r\nFinakly I have found
    something which helpwd me. Appreciate \r\nit!"
- id: 433697
  author: Rafael Alencar
  author_email: ingehelvey@zoho.com
  author_url: http://www.xinfengjia.com/
  date: !binary |-
    MjAxNC0wMS0yNiAxMDo1MToxMCArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMS0yNiAxMDo1MToxMCArMDAwMA==
  content: ! "Valuable information. Lucky me I found your web site by \r\nchance,
    and I'm stunned why this coincidence did not took place in advance!\r\nI bookmarked
    it.\r\n\r\nmy web site: <a href=\"http://www.xinfengjia.com/\" rel=\"nofollow\">Rafael
    Alencar</a>"
- id: 438852
  author: comparatif mutuelle sante sans inscription
  author_email: rhys.cheng@inbox.com
  author_url: http://www.comparer-lesmutuelles.fr/
  date: !binary |-
    MjAxNC0wMi0wNSAxMTo0ODo1NSArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMi0wNSAxMTo0ODo1NSArMDAwMA==
  content: ! "De prÃ©cieuÒ³ conseils que je met dans un coin de ma petite tÃªte et
    qui vont m'aider,\r\nc'est sur! Et ce blog est wahou, bravo!\r\nn'hesiter pas
    de rendre visite Ã  mon site compÉ‘rateur \r\ndÐµ mutuelle en ligne , pour effectuer
    un comparasion de mutuelle en deux cliÏ²s gratÕ½itemet  et sans engagement  :)\r\n\r\nmy
    blog - <a href=\"http://www.comparer-lesmutuelles.fr/\" rel=\"nofollow\">comparatif
    mutuelle sante sans inscription</a>"
- id: 445581
  author: Amanda
  author_email: amandathorton@gmx.de
  author_url: https://play.google.com/store/apps/details?id=com.respectapps.depressingquotes
  date: !binary |-
    MjAxNC0wMi0xNyAwOTowMToyOCArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMi0xNyAwOTowMToyOCArMDAwMA==
  content: ! "There is certainly a lot to learn about this subject.\r\nI love all
    the points you've made."
- id: 455219
  author: wedding photos
  author_email: madeleineorchard@hotmail.com
  author_url: https://play.google.com/store/apps/details?id=com.favorapps.weddingphotos
  date: !binary |-
    MjAxNC0wMy0wNSAwNzo1MTozMyArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMy0wNSAwNzo1MTozMyArMDAwMA==
  content: ! "I every time used to read paragraph in news papers but now as I am a
    user \r\nof internet therefore from now I am using net for posts, thanks to web."
- id: 460052
  author: valentines day quotes
  author_email: delbert_shapiro@aol.com
  author_url: https://play.google.com/store/apps/details?id=com.respectapps.valentinesdayquotes
  date: !binary |-
    MjAxNC0wMy0wNiAxNzo0Mzo1MCArMDAwMA==
  date_gmt: !binary |-
    MjAxNC0wMy0wNiAxNzo0Mzo1MCArMDAwMA==
  content: ! "What's up Dear, are you genuinely visiting this website on a regular
    basis, if so \r\nafter that you will without doubt take fastidious experience."
- id: 500164
  author: google.com
  author_email: lawrencestrand@inbox.com
  author_url: https://play.google.com/store/apps/details?id=com.respectapps.quotesaboutsuccess
  date: !binary |-
    MjAxNC0wMy0zMSAxMTowNDowNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wMy0zMSAxMDowNDowNiArMDEwMA==
  content: ! "My partner and I stumbled over here coming from a different web \r\npage
    and thought I might as well check things out.\r\n\r\nI like what I see so now
    i am following you. Look forward to \r\nchecking out your web page repeatedly."
- id: 557568
  author: Bryan Barrera
  author_email: angelo_loane@gmail.com
  author_url: http://bryanbarrera.com
  date: !binary |-
    MjAxNC0wNS0wOSAwOToxNTowMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0wOSAwODoxNTowMSArMDEwMA==
  content: ! "whaddup, I do believe this is an excellent web site.\r\n\r\nI stumbledupon
    it ;) I will revisit yet again since I \r\nbookmarked it.  appreciate the knowledge."
- id: 566319
  author: friv juegos
  author_email: celina_betz@yahoo.com
  author_url: https://www.facebook.com/juegosfrivchile
  date: !binary |-
    MjAxNC0wNS0xNCAyMToxOTozNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0xNCAyMDoxOTozNyArMDEwMA==
  content: ! "bienvenidos al mejor portal de juegos friv hoy les presentamos el mayor
    portal de juegos para niÃ±os y adultos estamos subiendo \r\njuegos a diarios con
    mayor descripcion imagenes antiguamente \r\nque empiezes a jugarlo y veas lo escalofriante
    que pueden ser \r\ny no perder el tiempo esperando que se cargue."
- id: 572923
  author: pizzahutcouponcodes
  author_email: evangelinesievwright@hotmail.de
  author_url: https://sites.google.com/site/pizzahutcouponcodes/
  date: !binary |-
    MjAxNC0wNS0xOSAxNDo0ODo0NSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0xOSAxMzo0ODo0NSArMDEwMA==
  content: ! "Howdy! Do you use Twitter? I'd like to follow you if that would be ok.\r\nI'm
    absolutely enjoying your blog and look forward to new posts."
- id: 575066
  author: fast loans
  author_email: mckinleyyates@arcor.de
  author_url: http://www.quickloansjunction.co.uk
  date: !binary |-
    MjAxNC0wNS0yMCAyMzo1OTo0MyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yMCAyMjo1OTo0MyArMDEwMA==
  content: ! "Magnificent beat ! I wish to apprentice while \r\nyou amend your site,
    how could i subscribe for a blog site?\r\nThe account aided me a acceptable deal.
    I had been a little bit acquainted of this your broadcast provided \r\nbright
    clear concept"
- id: 579937
  author: Yousef
  author_email: bleeem@hotmail.com
  author_url: ''
  date: !binary |-
    MjAxNC0wNS0yMyAxOToxODowNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yMyAxODoxODowNCArMDEwMA==
  content: ! "thank you, it helped me so much .\r\nappreciate ."
- id: 582286
  author: choinka Å›wiÄ…teczna
  author_email: niklas_haffner@gmail.com
  author_url: http://www.odzyskaj-kase.waw.pl/choinka-element-dekoracyjny-swiat
  date: !binary |-
    MjAxNC0wNS0yNSAwMToxNzoxMiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yNSAwMDoxNzoxMiArMDEwMA==
  content: ! "I really like your blog.. very nice colors &amp; theme.\r\n\r\nDid yoou
    create this website yourself or did you hire someone to do iit for you?\r\nPlz
    reply as I'm lookjng to create my own bkog annd would like to know where u got
    this from.\r\n\r\nkudos\r\n\r\nFeel free to viosit my web site: <a href=\"http://www.odzyskaj-kase.waw.pl/choinka-element-dekoracyjny-swiat\"
    rel=\"nofollow\">choinka Å›wiÄ…teczna</a>"
- id: 582808
  author: stoican
  author_email: stoican22@yahoo.com
  author_url: ''
  date: !binary |-
    MjAxNC0wNS0yNSAwOTowMzoyOCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNS0yNSAwODowMzoyOCArMDEwMA==
  content: ! "Man, you are the great!\r\nYou were the only one who solved my problem.\r\nThanks"
- id: 598305
  author: hydroizolacja dachu
  author_email: nanbruton@gmail.com
  author_url: http://naprawadachow.wordpress.com/?attachment_id=18
  date: !binary |-
    MjAxNC0wNi0wNiAwNTo1MjowOSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNi0wNiAwNDo1MjowOSArMDEwMA==
  content: ! "Bardzo fajny post, interesujÄ…ce zapisy zalecam wszystkim literaturÄ™\r\n\r\nMy
    blog: <a href=\"http://naprawadachow.wordpress.com/?attachment_id=18\" rel=\"nofollow\">hydroizolacja
    dachu</a>"
- id: 600822
  author: /0/22143785
  author_email: ''
  author_url: http://www.kfan.com/photos/main/pstvi-united-credit-consultants-region-380504/
  date: !binary |-
    MjAxNC0wNi0wOCAxMToyNzozMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNi0wOCAxMDoyNzozMSArMDEwMA==
  content: ! '<strong>/0/22143785...</strong>


    Setting up networking on an ubuntu server Â« Source Guru...'
- id: 607151
  author: a
  author_email: shondadejesus@gmail.com
  author_url: http://example.com
  date: !binary |-
    MjAxNC0wNi0xNCAyMjoyMTo0NiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNi0xNCAyMToyMTo0NiArMDEwMA==
  content: I'm gone to convey my little brother, that he should also go to see this
    website on regular basis to obtain updated from hottest news.
- id: 638722
  author: sims 4 world adventures
  author_email: donte_catalan@yahoo.de
  author_url: http://sims4crack1.blogspot.com/
  date: !binary |-
    MjAxNC0wNy0wOCAwMTowNDozMCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0wOCAwMDowNDozMCArMDEwMA==
  content: ! "What's up to every body, it's my first visit of \r\nthis web site; this
    webpage carries awesome and really excellent stuff \r\ndesigned for visitors."
- id: 649785
  author: sims 4 keeps crashing
  author_email: beulahsellheim@freenet.de
  author_url: http://gethelpsims4crack.blogspot.com/2014/05/can-sims-4-crack-be-played-on-ipad.html
  date: !binary |-
    MjAxNC0wNy0xNyAxNzoyODoxMiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0xNyAxNjoyODoxMiArMDEwMA==
  content: ! "Wonderful, what a weblog it is! This web site provides valuable facts
    \r\nto us, keep it up."
- id: 653043
  author: à¸ªà¸¡à¸±à¸„à¸£à¸‡à¸²à¸™à¸­à¸²à¸šà¸­à¸šà¸™à¸§à¸”
  author_email: eduardo_perea@freenet.de
  author_url: https://sites.google.com/site/nightjobonline/
  date: !binary |-
    MjAxNC0wNy0yMCAxNjo0MzowNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0yMCAxNTo0MzowNiArMDEwMA==
  content: ! "Write more, thats all I have to say. Literally, it seems as though you
    relied \r\non the video to make your point. You clearly know what youre talking
    about, why waste your intelligence on just posting videos \r\nto your site when
    you could be giving us something informative to read?"
- id: 659486
  author: hand aerators
  author_email: lanoragraham@animail.net
  author_url: http://nanowrimo.org/participants/aralrpuwbduaimy
  date: !binary |-
    MjAxNC0wNy0yNyAwODoyODowMyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0yNyAwNzoyODowMyArMDEwMA==
  content: ! "Wonderful website. Plenty of useful info here.\r\nI am sending it to
    a few buddies ans additionally sharing \r\nin delicious. And of course, thank
    you in your sweat!\r\n\r\nmy blog post <a href=\"http://nanowrimo.org/participants/aralrpuwbduaimy\"
    rel=\"nofollow\">hand aerators</a>"
- id: 662114
  author: supplements to gain muscle mass fast
  author_email: violaludwick@fmgirl.com
  author_url: http://hope4anxiety.com/index.php/component/content/category/14-hancock
  date: !binary |-
    MjAxNC0wNy0zMCAwNzoyNjo1NyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0zMCAwNjoyNjo1NyArMDEwMA==
  content: ! "I have read so many content concerning the blogger lovers but \r\nthis
    post is actually a nice piece of writing, keep it \r\nup."
- id: 662582
  author: vent pipe
  author_email: nathancorser@gmail.com
  author_url: http://bouwdroger.blox.pl/2014/06/Hoe-krijg-ik-betere-resultaten-bij-chape-werken.html
  date: !binary |-
    MjAxNC0wNy0zMCAxOTowODowMCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wNy0zMCAxODowODowMCArMDEwMA==
  content: ! "Because the admin of this website is working, no question very soon
    it \r\nwill be well-known, due to its quality contents."
- id: 666780
  author: Ubuntu Server Network Configuration | My Memos
  author_email: ''
  author_url: http://engrsalmanshaikh.wordpress.com/2014/08/04/ubuntu-server-network-configuration/
  date: !binary |-
    MjAxNC0wOC0wNCAwMjoyNDozNSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0wNCAwMToyNDozNSArMDEwMA==
  content: ! '[...] http://www.sourceguru.net/setting-up-networking-on-an-ubuntu-server/
    [...]'
- id: 669846
  author: mini warriors cheat tool
  author_email: noeliastecker@gmail.com
  author_url: http://Www.Thepigsite.com/forums/member.php?u=436047
  date: !binary |-
    MjAxNC0wOC0wNyAwMDowNToyNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0wNiAyMzowNToyNyArMDEwMA==
  content: What a data of un-ambiguity and preserveness of valuable experience on
    the topic of unpredicted emotions.
- id: 673701
  author: Electonic Cigarette
  author_email: anthonyvarela@web.de
  author_url: http://Www.Oda.edu/cf_enotify/linkforward.cfm?n=2247&amp;u=0&amp;e=0&amp;dest=http://eloyfrawleyrdxq.pen.io/
  date: !binary |-
    MjAxNC0wOC0xMCAxMjowOToxNyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0xMCAxMTowOToxNyArMDEwMA==
  content: ! "I have read so many articles about the blogger lovers except this \r\npost
    is in fact a pleasant paragraph, keep it up."
- id: 677254
  author: free platinum in warframe
  author_email: samanthaknopwood@googlemail.com
  author_url: https://www.youtube.com/watch?v=BVPNHMg7sLA
  date: !binary |-
    MjAxNC0wOC0xNCAwODo1NTo0MiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0xNCAwNzo1NTo0MiArMDEwMA==
  content: ! "Thanks for finally talking about &gt; Setting up networking on an ubuntu
    server \r\n« Source Guru &lt; Liked it!"
- id: 683345
  author: http://6ab5ty.com
  author_email: harriettgant@googlemail.com
  author_url: http://6ab5ty.com/16440
  date: !binary |-
    MjAxNC0wOC0yMiAxNzo1NTo1OSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yMiAxNjo1NTo1OSArMDEwMA==
  content: ! "The Xbox Lite rumor mill has only just started spinning, but it is gaining
    speed rapidly, with a Microsoft \r\ninsider supposedly spilling the beans on the
    project. With the introduction of the XBOX 360 \r\nvieo gamers are given unprecedented
    access to \r\nbeautiful worlds, far reaching multiplayer capabilities and yes
    \r\neven a little enhvy from friends who cry 'I want \r\nthat' from their seat
    behind their Playstation 2. S-Video will look better, but \r\nthe audio cable
    is expensive ($80 - $100), so RCA is the most practical.\r\n\r\n\r\n\r\nLook into
    my page emulateur xbox 360 sur pc (<a href=\"http://6ab5ty.com/16440\" rel=\"nofollow\">http://6ab5ty.com</a>)"
- id: 683579
  author: sekar
  author_email: sekarg@gmail.com
  author_url: ''
  date: !binary |-
    MjAxNC0wOC0yMyAwMToxNzoxMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0yMyAwMDoxNzoxMSArMDEwMA==
  content: ! "hi I installed ubuntu server 12.04. I am very new to ubuntu. in my windows
    7 i have this static ip 115.119.65.243, 255.255.255.0, 115.119.65.241, 121.242.180.190,
    121.242.180.115\r\n\r\nnow how I enter this static ip in ubuntu ??"
- id: 690838
  author: Twila
  author_email: twila_rutledge@arcor.de
  author_url: http://Snipurl.com/shishapen69552
  date: !binary |-
    MjAxNC0wOC0zMSAxMTo1MDozMSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOC0zMSAxMDo1MDozMSArMDEwMA==
  content: ! "Cheap vaporizers are floating everywhere yet \r\nbeing pretty active
    about their quality and services. \" Those who are sensitive to grasses and ragweed
    will want to maintain their medication through to the first frost. Having proper
    maintenance and repairs completed for your foundation walls prevents larger problems
    later like total foundation failure and structural collapse."
- id: 693969
  author: State of Financial security definition
  author_email: carleywhitlam@inbox.com
  author_url: https://Www.Rebelmouse.com/darbygovernor/reliable-techniques-concerning-698867780.html
  date: !binary |-
    MjAxNC0wOS0wMyAyMjozNjoyNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wMyAyMTozNjoyNiArMDEwMA==
  content: ! "Howdy would you mind stating which blog platform you're using?\r\nI'm
    looking to start myy own blog iin the near future but I'm having a hard time selecting
    between BlogEngine/Wordpress/B2evolution and Drupal.\r\nThe reason I askk is because
    your design and style seems different then most blogs and I'm looking for something
    completely \r\nunique.                  P.S My apologies for being off-topic but
    I had to \r\nask!"
- id: 696209
  author: hearthstone cheap druid deck
  author_email: darrenkendrick@t-online.de
  author_url: http://www.wattpad.com/44896008-hearthstone-gameplay
  date: !binary |-
    MjAxNC0wOS0wNiAwNDoxMDozNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wNiAwMzoxMDozNiArMDEwMA==
  content: ! "whoah this weblog is magnificent i really like studying your posts.\r\nKeep
    up the good work! You understand, a lot of \r\nindividuals are hunting round for
    this info, you can help them \r\ngreatly."
- id: 696880
  author: hookah pen review youtube
  author_email: lorettacox@inbox.com
  author_url: http://to.ly/zRDb
  date: !binary |-
    MjAxNC0wOS0wNiAxOTo1MDoyMyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wNiAxODo1MDoyMyArMDEwMA==
  content: ! "Some I did secretly, under a blanket on the airplane \r\nand in the
    hospital; others I did in the open. The answer for this question is that electronic
    cigarettes are cheaper than the \r\ntraditional tobacco cigarettes. As our consumer
    society continues to churn out endless upgrades and \r\nimprovements of electronic
    equipment we are constantly told that we need to \r\nupgrade."
- id: 696951
  author: dui defence lawyers Montebello
  author_email: libbycoppola@t-online.de
  author_url: https://plus.google.com/b/113756983498904269613/events/ch7t8qjp93ifpksqrkjbqv60s38
  date: !binary |-
    MjAxNC0wOS0wNiAyMTozNzowNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wNiAyMDozNzowNCArMDEwMA==
  content: ! "Fantastic blog! Do you have any tips and hints for aspiring writers?\r\nI'm
    hoping to start my own website soon but I'm a \r\nlittle lost on everything. Would
    you propose starting with a free platform like Wordpress or go \r\nfor a paid
    option? There are so many choices out there that I'm \r\ntotally confused .. Any
    recommendations? Appreciate \r\nit!\r\n\r\nStop by my site ... <a href=\"https://plus.google.com/b/113756983498904269613/events/ch7t8qjp93ifpksqrkjbqv60s38\"
    rel=\"nofollow\">dui defence lawyers Montebello</a>"
- id: 699135
  author: Carmon
  author_email: carmonfeez@gmail.com
  author_url: https://www.youtube.com/
  date: !binary |-
    MjAxNC0wOS0wOSAwNzo1MToxOCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0wOSAwNjo1MToxOCArMDEwMA==
  content: ! "Do you have a spam issue on this site; I also am a blogger,\r\nand I
    was wondering your situation; many of us \r\nhave created some nice practices
    and we are looking to swap methods with others, why not shoot \r\nme an email
    if interested."
- id: 702902
  author: new games for 2014
  author_email: kristopherhatfield@gmail.com
  author_url: http://www.ckhwebsolutions.com/vk.com-3453.html
  date: !binary |-
    MjAxNC0wOS0xMyAwMDoyNzozNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xMiAyMzoyNzozNCArMDEwMA==
  content: ! "I love looking through an article that can make people think.\r\nAlso,
    thanks for allowing for me to comment!"
- id: 703275
  author: dui defence reaction lawyer Inglewood
  author_email: blakebroyles@gmail.com
  author_url: https://plus.google.com/u/0/b/117780429575908549304/events/cg4b3a35aqrh5lrrdpqesc38oak
  date: !binary |-
    MjAxNC0wOS0xMyAxMToyNzoxNCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xMyAxMDoyNzoxNCArMDEwMA==
  content: ! "Thanks , I've just been searching for info approximately this subject
    for a while and yours is the best I've discovered till now.\r\nBut, what in regards
    to the conclusion? Are you certain concerning \r\nthe source?\r\n\r\nMy site;
    <a href=\"https://plus.google.com/u/0/b/117780429575908549304/events/cg4b3a35aqrh5lrrdpqesc38oak\"
    rel=\"nofollow\">dui defence reaction lawyer Inglewood</a>"
- id: 705262
  author: review
  author_email: analisamyrick@t-online.de
  author_url: http://www.pubs247.co.uk/bring-on-the-tobh/
  date: !binary |-
    MjAxNC0wOS0xNSAxMDozMzo0MSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xNSAwOTozMzo0MSArMDEwMA==
  content: Nice work!
- id: 706133
  author: Layne
  author_email: layne_canterbury@gmx.de
  author_url: https://youtube.com
  date: !binary |-
    MjAxNC0wOS0xNiAwNToyMDozMyArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0xNiAwNDoyMDozMyArMDEwMA==
  content: ! "I all the time used to study post in nws papers but noow aas I am a
    \r\nuser of net therefore from now I am using net ffor articles \r\nor reviews,
    thanks to web."
- id: 711068
  author: injection mold
  author_email: adolphmarden@freenet.de
  author_url: https://www.facebook.com/pages/KB-Molded-Products
  date: !binary |-
    MjAxNC0wOS0yMSAwMTozNzo1MCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMSAwMDozNzo1MCArMDEwMA==
  content: ! "Hi it's me, I am also visiting this site daily, this website is really
    pleasant \r\nand the people are truly sharing pleasant thoughts."
- id: 711176
  author: reviews male
  author_email: carlosorell@gmail.com
  author_url: http://findyourflirt.net/index.php?m=member_profile&amp;p=profile&amp;id=52641
  date: !binary |-
    MjAxNC0wOS0yMSAwNToxNToyOCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMSAwNDoxNToyOCArMDEwMA==
  content: ! "Very good information. Lucky me I ran across your blog by accident (stumbleupon).\r\nI
    have book-marked it for later!"
- id: 712907
  author: internet america airmail
  author_email: charlotteginder@gmail.com
  author_url: http://tani-internet.com.pl/
  date: !binary |-
    MjAxNC0wOS0yMyAxMTo1NDowNSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yMyAxMDo1NDowNSArMDEwMA==
  content: ! "WOW just what I was looking for. Came here by searching for \r\ninternet
    archives music"
- id: 718143
  author: ESX Emulator
  author_email: pearline.wagstaff@gmail.com
  author_url: http://ps3emulator.fr
  date: !binary |-
    MjAxNC0wOS0yOCAxMzowMDoxMCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yOCAxMjowMDoxMCArMDEwMA==
  content: ! "Hello! Do you know if they make any plugins to safeguard against hackers?\r\n\r\nI'm
    kinda paranoid about losing everything I've worked hard \r\non. Any recommendations?\r\n\r\nmy
    page: <a href=\"http://ps3emulator.fr\" rel=\"nofollow\">ESX Emulator</a>"
- id: 720364
  author: toutlesgenerateurs.com
  author_email: courtney.wang@gmail.com
  author_url: http://toutlesgenerateurs.com/xbl/
  date: !binary |-
    MjAxNC0wOS0zMCAxMDozMzo0MiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0zMCAwOTozMzo0MiArMDEwMA==
  content: ! "It's actually a nice and helpful piece of info.\r\n\r\nI am happy that
    you simply shared this helpful info with \r\nus. Please stay us up to date like
    this. Thanks for sharing."
- id: 723871
  author: hearthstone paladin cheat
  author_email: yasmin_heidelberg@yahoo.de
  author_url: http://gamesandgamers221.jimdo.com/2014/04/08/hearthstone-game/
  date: !binary |-
    MjAxNC0xMC0wMiAyMTo0MDo0NCArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0xMC0wMiAyMDo0MDo0NCArMDEwMA==
  content: ! "Wow, fantastic weblog layout! How long have you ever been running a
    blog for?\r\nyou made running a blog glance easy. The overall look of your site
    is excellent, let alone the \r\ncontent material!"
- id: 726265
  author: primergy tx
  author_email: jaquelinedolan@gmail.com
  author_url: http://serveurs.centerblog.net/
  date: !binary |-
    MjAxNC0xMC0wNSAwNToyNjo0MSArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0xMC0wNSAwNDoyNjo0MSArMDEwMA==
  content: ! "Highly energetic blog, I enjoyed that a lot. Will there be a part \r\n2?"
permalink: setting-up-networking-on-an-ubuntu-server
---
<p>Ok, by popular demand (aka ompaul) I've decided to do a mini-howto on setting up networking on an ubuntu server, for those who are new to it.</p>
<p>In Ubuntu itself, when you install the desktop version, you get a nifty little tool called "Network Manager" (you may have noticed the icon, espescially if you have wireless) which pretty much does everything for you. However, if you're using the server, without a GUI then this isn't generaly available.</p>
<p>So, where to start?</p>
<p>It really depends on your network setup, you need to know a few things about your network before you start this.</p>
<p>The first and most important question you need to find out is whether there is a DHCP server on your network that will assign you an IP address. If so, your networking setup is very very simple, so I'll start off with that.</p>
<p><span style="text-decoration: underline;">Networking with an available DHCP server<br />
</span></p>
<p>When you have a DHCP server available on your network, things are made a lot simpler. Cut short, a DHCP server sits on your network and hands out configurations to the different computers that ask for them. I won't go into detail, but, generally you'll find these on small home networks (your router will generally work as a DHCP server, which is why you (usually) magically find your way onto the internet when you plug yourself into a network with a router on it)</p>
<p>First of all, find out whether you actually already have an internet connection. I'll assume for now that you have a keyboard and monitor hooked up to the computer you're setting up as a server, and have logged in as a user with sudo rights.</p>
<p>Type in the command "ifconfig" (without the quotes) and you should hopefully see something like this:-</p>
<blockquote>
<pre>mez@stupor:~$ ifconfig

eth0      Link encap:Ethernet  HWaddr 00:16:3E:7F:AC:B2
inet addr:212.13.30.94  Bcast:212.13.30.255  Mask:255.255.255.0
UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
RX packets:3576458 errors:0 dropped:0 overruns:0 frame:0
TX packets:1886783 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:10
RX bytes:836607596 (797.8 MB)  TX bytes:291514569 (278.0 MB)

lo        Link encap:Local Loopback
inet addr:127.0.0.1  Mask:255.0.0.0
RX packets:73611 errors:0 dropped:0 overruns:0 frame:0
TX packets:73611 errors:0 dropped:0 overruns:0 carrier:0
UP LOOPBACK RUNNING  MTU:16436  Metric:1
collisions:0 txqueuelen:0
RX bytes:15252378 (14.5 MB)  TX bytes:15252378 (14.5 MB)</pre>
</blockquote>
<p>The important bit we see here is the block of text starting with "eth0" and espescially the line</p>
<blockquote>
<pre>inet addr:212.13.30.94  Bcast:212.13.30.255  Mask:255.255.255.0</pre>
</blockquote>
<p>This generally means that the computer already has an IP address! yay!</p>
<p>Next, try the command</p>
<blockquote>
<pre>ping google.com</pre>
</blockquote>
<p>Hopefully, you'll get back a response saying something along the lines of</p>
<blockquote>
<pre>PING google.com (64.233.187.99) 56(84) bytes of data
64 bytes from jc-in-f99.google.com (64.233.187.99): icmp_seq=1 ttl=245 time=100 ms</pre>
</blockquote>
<p>If so, you have a working internet connection! Go you! you can now start using your computer on the internet (though the IP address given above might only be accessible from an internal network, depending on your setup - going into howto get this IP available on the internet proper is beyond the scope of this blog post)</p>
<p>If not, you'll get one of two errors, either a "no route to host" or a "cannot resolve google.com".</p>
<p>The first issue is a complex one, which again, is beyond the scope of this article (though feel free to email me to ask questions - or catch me on IRC - I will *try* to answer them)</p>
<p>The second one generally means that you do not have a nameserver setup.</p>
<p>Open DNS is a project that provides Accessible DNS resolvers for the whole world to use. More information can be found out about OpenDNS <a href="http://www.opendns.org/">here</a></p>
<p>For now however, lets open up your DNS resolver settings</p>
<blockquote>
<pre>sudo nano /etc/resolv.conf</pre>
</blockquote>
<p>This file should be edited to contain the following lines only</p>
<blockquote>
<pre>nameserver 208.67.222.222
nameserver 208.67.220.220</pre>
</blockquote>
<p>Hit Ctrl + O then enter, then Ctrl + X to get back to your command prompt.</p>
<p>Try pinging google again, and hopefully it should work. If not, something went wrong somewhere, again, try emailing me or poking me on IRC.</p>
<p>So, what if you don't have an IP address?</p>
<p>Well, assuming that you DO have a DHCP server running on your network, lets first of all check that we have a working interface on our system</p>
<blockquote>
<pre>ifconfig -a</pre>
</blockquote>
<p>You should hopefully see a couple of lines here, one starting with "lo" and another starting with "eth0" (or similar) - remember this name</p>
<p>Now, open up your /etc/network/interfaces file (sudo nano /etc/network/interfaces) and make sure it contains the following</p>
<blockquote>
<pre>auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp</pre>
</blockquote>
<p>Assuming that it does, we should be able to do the following</p>
<blockquote>
<pre>sudo ifup eth0</pre>
</blockquote>
<p>Which will (hopefully) bring the interface up. Go back a step if you cannot resolve google.com when trying to ping it. You might have to setup a resolver (though your DHCP server <em>should</em> provide these details for you!)</p>
<p>Voila! hopefully you now have a working network interface</p>
<p><span style="text-decoration: underline;">Networking without an available DHCP server</span></p>
<p>Now, here is where things get more interesting. To be able to setup a network without having a DHCP server readily available, you need to know the following</p>
<ul>
<li>The IP address that will be assigned to your host</li>
<li>The netmask for the IP addresses being used</li>
<li>The default gateway's IP address (usually the IP address of your router)</li>
</ul>
<p>It may differ how you get this information, however, I cannot tell you how to do so, I'd ask your network administrator if I were you (or your hosting provider)</p>
<p>So, I'm assuming here that you have the above details, are logged in at your machine and ready to go</p>
<p>I'll only be brief about this setup, as a lot of the details are covered above.</p>
<p>First of all, make sure that your interface is down</p>
<blockquote>
<pre>sudo ifdown eth0</pre>
</blockquote>
<p>next, edit your /etc/network interfaces, replacing the information between &lt; and &gt; with<br />
the information from above</p>
<blockquote>
<pre>auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
	address &lt;IP Address&gt;
	netmask &lt;Network Mask&gt;
	gateway &lt;Default Gateway&gt;</pre>
</blockquote>
<p>So, you should have something like this</p>
<blockquote>
<pre>auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
	address 212.13.30.94
	netmask 255.255.252.0
	gateway 212.13.30.1</pre>
</blockquote>
<p>Now head back to your console, and try</p>
<blockquote>
<pre>sudo ifup eth0</pre>
</blockquote>
<p>To bring your interface up. Hopefully, now, everything should be working (if not, go have a look at the DNS stuff above)</p>
<p>If you have any questions, feel free to leave me a comment here, or email me (martin AT sourceguru DOT net) and I will <em>try</em> and answer, though I make no guarantees!</p>
<p>Thus concludes Mez's basic guide to server networking on ubuntu - I'll try and add some more interesting stuff in a later blog post (IPv6, IP Aliases, etc etc)</p>
