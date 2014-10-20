---
layout: post
status: publish
published: true
title: Source Guru returns
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 55
wordpress_url: http://www.sourceguru.net/archives/55
date: !binary |-
  MjAwNy0wNC0xNSAxNDoyOTozMCArMDEwMA==
date_gmt: !binary |-
  MjAwNy0wNC0xNSAxMzoyOTozMCArMDEwMA==
categories:
- Personal
- Geeky
- Linux
- Interweb
tags: []
comments: []
permalink: source-guru-returns
---
<p>So, after a few issues with <a href="http://www.paypal.com/">Paypal</a> (damn them!) I've finally managed to be able to actually send my payment(s) for my VPS, and it has now returned.</p>
<p>Over the years, I've been hosted in many places, from Tripod, to Freedom2surf, to lyximer (man, I miss that place!) enhosting, one&amp;one, and now to <a href="http://www.bitfolk.com/">bitfolk</a> and over all that time -I've used many a different Control Panel (except for lyximer - those were the good old days of getting down and dirty with the configuration files)</p>
<p>Well anyway, in Source Guru's past implementation, I used <a href="http://www.ispconfig.org/">ISPConfig</a> which did exactly what I wanted, to an extent. It automated the creation of new domains, including mail, DNS etc etc. However, it lacked in a few features. It was horridly coded, and well, cause me more hassle than was worth (espescially when <a href="http://www.sourceguru.net/archives/52">trying to upgrade)</a></p>
<p>So, now I'm using <a href="http://www.webmin.com/">webmin</a>, <a href="http://www.webmin.com/usermin.html">usermin</a>, and <a href="http://www.webmin.com/virtualmin.html">virtualmin</a>, and I'm surprised at how well <a href="http://www.webmin.com/">Webmin</a> actually interfaces with the config files actually on your server. You can add as many obscure settings as you want and <a href="http://www.webmin.com/">webmin</a> either recognises them, or just leaves them alone.</p>
<p>Unfortunately, It's still not up to scratch, for me probably more than most. As I'm hosted by <a href="http://www.bitfolk.com/">bitfolk</a> I have access to 5 other DNS secondaries. It's nice to know that you'll be able to access your DNS even if things go wrong. However, using <a href="http://www.webmin.com/virtualmin.html">VirtualMin</a> to create sites (for things like <a href="http://www.realistanew.com/">Realist Anew</a>) it doesn't actually create the proper Nameserver records, meaning that the Secondary Nameservers won't take the transfer requests.</p>
<p>If I use <a href="http://www.webmin.com/">Webmin</a>'s DNS settings to create it, I can add in a nice bit that will add all the nameservers for me, but it seems that <a href="http://www.webmin.com/virtualmin.html">Virtualmin</a> doesn't interface with this! Gah!</p>
<p>So well, yeah, it's getting down and dirty again in the config files to make things work (Many thanks to <a href="http://strugglers.net/~andy/blog/">Andy Smith</a> for helping me out with this one)</p>
<p>Anyways, other than a nice swap death, my server's been up and playing nicely, now I just need to import all the old websites I had on there!</p>
<p>But it does lead me to want to start making my own "Control Panel" software ... ... ...</p>
