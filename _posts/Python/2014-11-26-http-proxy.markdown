---
category:	Python
layout:		post
title:		Python验证http代理函数
desc:		简记如何使用Python验证http代理是否存活
tags:		[python, python proxy, python代理, python http代理, http代理验证]
---
#### 写在前面
很简单的东西，网上示例一大堆，为什么还要写？    
因为我无聊啊～～因为这里只是记录我自己的东西，和你们无关啊～～因为自己不定时用上，懒得再搜索啊～～好吧，编不下去了。。。    
其实，就是因为打算写一个`Python`全自动扫描代理+验证的工具，以及写一个`Chrome`科学翻墙的扩展，高大上了吧？

#### 实现代码
[code:python:edoc]
def isProxy(h, p, u = 'http://www.baidu.com/', t = 5):
	_p = "http://%s:%s"%(h, p)
	_h = urllib2.ProxyHandler({'http': _p})
	_o = urllib2.build_opener(_h, urllib2.HTTPHandler)
	try:
		_r = _o.open(u, timeout = t)
		_l = len(_r.read())
		if _l > 1024:
			return True
		return False
	except Exception,e:
		return False
[codend]
我选用了[http://www.baidu.com/](http://www.baidu.com)来作为测试连接目标，原因嘛，国人测试网络不都喜欢直接`ping www.baidu.com`。。

#### 函数使用
[code:python:edoc]
isProxy('127.0.0.1', 8080)
[codend]
只需要传递两个参数就好了，第一个为代理的IP地址，第二个为端口，也可以加入第三个验证测试的URL地址和第四个连接超时时间。