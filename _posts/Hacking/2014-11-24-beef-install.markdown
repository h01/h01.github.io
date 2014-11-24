---
category:	hacking
layout:		post
title:		Mac下安装beeF以及简单使用
desc:		神器beeF之前在backtrack中粗略地使用过，不过当时使用的是已经安装好的环境。这次记录下如何在mac中安装并使用
tags:		[beef,beef-xss,install-beef,安装beef,mac安装beef,beef使用]
---
#### 安装环境
首先我们从`GitHub`中把最新的版本下载回来
[code:shell:]
$ git clone https://github.com/beefproject/beef.git
[codend]
进入目录直接执行`./beef`发现需要安装依赖环境`bundler`，根据`./install`的提示进行安装(预先已经安装好`ruby`环境)
[code:shell:]
$ sudo gem install bundler
[codend]
然后直接使用`bundler`进行安装：
[code:shell:]
$ bundle install
[codend]
骚等片刻，会安装一堆东西，完毕后直接运行即可：
[code:shell:]
$ ./beef
[codend]
附上运行的截图：    
![beeF-install](/static/upload/img/beef-install.jpg)

#### 简单使用
根据提示，我们访问`http://localhost:3000/ui/panel`，然后使用默认帐号密码`beef`进行登录。    
然后测试呢，直接使用给出的`js`地址`http://localhost:3000/hook.js`，具体你懂的！    
最后附上截图，挺不错的一个工具。    
![beeF-browser](/static/upload/img/beef-browser.jpg)