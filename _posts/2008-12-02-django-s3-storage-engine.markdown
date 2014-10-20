---
layout: post
status: publish
published: true
title: Django - S3 Storage Engine
author:
  display_name: Mez
  login: admin
  email: martin@sourceguru.net
  url: http://www.sourceguru.net/
author_login: admin
author_email: martin@sourceguru.net
author_url: http://www.sourceguru.net/
wordpress_id: 177
wordpress_url: http://www.sourceguru.net/?p=177
date: !binary |-
  MjAwOC0xMi0wMiAxOToyNToxMiArMDAwMA==
date_gmt: !binary |-
  MjAwOC0xMi0wMiAxODoyNToxMiArMDAwMA==
categories:
- Personal
tags:
- python
- django
- s3
- amazon
- amazon web services
- storage
comments:
- id: 31111
  author: jeff
  author_email: jeff.hammerbacher@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOC0xMi0yNyAxNjowMzo1NCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0yNyAxNTowMzo1NCArMDAwMA==
  content: ! "hey,\r\n\r\ni was just setting out to do the same thing when i saw your
    code. would you mind if i put it up on gist (http://gist.github.com)? it will
    be easier for others to pull it down and use it then.\r\n\r\nthanks,\r\njeff"
- id: 31113
  author: Mez
  author_email: martin@sourceguru.net
  author_url: http://
  date: !binary |-
    MjAwOC0xMi0yNyAxODoxMjo1NCArMDAwMA==
  date_gmt: !binary |-
    MjAwOC0xMi0yNyAxNzoxMjo1NCArMDAwMA==
  content: er, go for it :D I've not really any idea why that makes it easier :D
- id: 44759
  author: Great Little Helpers For Django Devs &bull; Blog Archive &bull; Lonely Code
  author_email: ''
  author_url: http://www.lonelycode.com/?p=276
  date: !binary |-
    MjAwOS0xMC0yMCAxMjo0NjowNiArMDEwMA==
  date_gmt: !binary |-
    MjAwOS0xMC0yMCAxMTo0NjowNiArMDEwMA==
  content: ! '[...] 4. Django S3 Storage Engine [...]'
- id: 52013
  author: Lisa Baker
  author_email: Varagona@gmail.com
  author_url: http://www.djangodummy.com
  date: !binary |-
    MjAxMC0wMy0wNiAxOTozNDoxMyArMDAwMA==
  date_gmt: !binary |-
    MjAxMC0wMy0wNiAxOTozNDoxMyArMDAwMA==
  content: Thanks for your article. I am new at django and this is a big help.
- id: 58797
  author: Andy
  author_email: superjoe30@gmail.com
  author_url: http://superjoesoftware.com/
  date: !binary |-
    MjAxMC0wNi0xNCAwNzo0NzowNiArMDEwMA==
  date_gmt: !binary |-
    MjAxMC0wNi0xNCAwNjo0NzowNiArMDEwMA==
  content: ! "little oopsie in your code resulting in an infinite loop:\r\n\r\n        while
    self.exists(filename):\r\n            filename = '%s-%d%s' % (basefilename[0],
    i, basefilename[1])\r\n\r\n\r\nyou need to increment i in that loop."
- id: 87734
  author: mnstefan
  author_email: mnstefan@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMS0wMS0yOCAxMToyMDoxOSArMDAwMA==
  date_gmt: !binary |-
    MjAxMS0wMS0yOCAxMToyMDoxOSArMDAwMA==
  content: ! "Is this storage compatible with Django 1.2.* Are there changes to make?\r\n\r\nThanks
    in advice, Stefan"
- id: 718041
  author: download sniper elite 3
  author_email: luthersolomon@gmail.com
  author_url: http://www.wat.tv/video/telecharger-sniper-elite-gratuitement-6wl21_6wl1z_.html
  date: !binary |-
    MjAxNC0wOS0yOCAxMDo0MjoyNiArMDEwMA==
  date_gmt: !binary |-
    MjAxNC0wOS0yOCAwOTo0MjoyNiArMDEwMA==
  content: ! "Good web site you've got here.. It's hard to find good quality writing
    \r\nlike yours these days. I truly appreciate people like you!\r\n\r\nTake care!!"
permalink: django-s3-storage-engine
---
<p>After having read <a href="http://www.b-list.org/">James Bennett</a>'s <a href="http://www.b-list.org/weblog/2008/jun/23/media/">article on Django Media and Performance</a> I decided that I wanted to be using S3 for storing and serving media for a new site that I'm working on (in Django)</p>
<p>So, it seems that it's not that easy. I did first of all experiment with using FUSE, but decided against it.</p>
<p>Anyway, looking through some obscure documentation, I found that Django can use custom storage methods. So, I thought I'd write one.</p>
<p>You can find the file <a href="http://files.sourceguru.net/code/s3storage.py">here</a></p>
<p>The code requires you to have Amazon's S3 API installed.</p>
<p>So, how do you use it? It's pretty simple really. First of all - you need to setup your configuration - so edit settings.py and add the following (changing the values to suit your needs!)</p>
<pre style="padding-left: 30px;">S3_SETTINGS = {
    'aws_key': 'XXXXXXXXXXXXXXXXXXXX',
    'aws_secret_key': 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'bucket': 'bucket_name',
    'default_perm': 'public-read',
    'vanity_url': False
}</pre>
<p>The settings should be self-explanatory - apart from 'vanity_url'. S3 allows you to CNAME a domain name to a bucket with a similar name - for example, I could CNAME files.sourceguru.net to files.sourceguru.net.s3.amazonaws.com and it would allow me to serve information from that bucket as if they were coming from my own domain. (infact, I'm tempted to do this - I've too much stuff in my files section!) - the vanity_url - when set to True - will use the bucketname as the domain instead of &lt;bucketname&gt;.s3.amazonaws.com.</p>
<p>Now, to use it in a model, it's as simple as adding an import line at the top of the models file</p>
<pre style="padding-left: 30px;">from site.app.s3storage import S3Storage</pre>
<p>and then, in your model</p>
<pre style="padding-left: 30px;">class Item(models.Model):
    storage = S3Storage()
    image = models.ImageField(upload_to='path', storage=storage)</pre>
<p>Pretty simple, :D</p>
<p>Hope this helps some people out there!</p>
