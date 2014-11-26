---
category:	Javascript
layout:		post
title:		更准确高效地获取客户端浏览器|系统信息
desc:		如何使用js来获取客户端所使用的浏览器版本，操作系统版本以及其他详细的信息？那些过时的就算了，也许这篇文章能给你启发 :)
tags:		[Javascript,xss,js-getClientInfo,js获取客户端信息,js获取浏览器版本,js获取操作系统版本]
---
#### 前言
尝试着在百度、谷歌搜索过相关资料，大多都是互相转载而且版权一大堆内容特垃圾的那种～～鄙视中。。    
现在需要的是获取浏览器的具体版本和操作系统的具体版本，比如`iPhone`,`Android`,`Win10`,`IE11`等等比较新鲜的东西，网上传的那种就见鬼去了～    
所以呢，我就打算自己动刀，想一个比较完美又可以扩展的办法，终于弄出了点眉目。

#### 获取操作系统以及版本    

##### 【思路】    
创建一个对象数组，保存操作系统的通用名称，比如`Windows`,`Mac OSX`,`iPhone`等，然后再保存一个对应的正则表达式，用来从`UserAgent`中匹配出具体的版本号。    

##### 【实现】
[code:javascript:edoc]
var info = {};
var temp = {};
info.ua = navigator.userAgent;
// 
// 获取操作系统版本
//
temp.os = {
    'Mac OS X': /Mac OS X ([\d\.\_]*)/,
    'iPhone OS': /iPhone OS ([\d\.\_]*)/,
}
for (var o in temp.os){
    if (info.ua.indexOf(o)) {
        var m = info.ua.match(temp.os[o]);
        info.os = m ? m[0] : (info.os || 'UnknowOS');
    };
}
[codend]
上面的代码中`temp.os`对象可以自由地扩展，我想你都懂并能领会其中的好处！

#### 获取浏览器和版本
同上面一样，就不多说了，直接上代码：
[code:javascript:edoc]
//
// 获取浏览器版本
//
temp.browser = {
    'Safari': /Safari\/([\d\.]+)$/,
    'Chrome': /Chrome\/([\d\.]+)/,
    'Firefox': /Firefox\/([\d\.]+)$/,
}
for (var b in temp.browser){
    if (info.ua.indexOf(b)) {
        var m = info.ua.match(temp.browser[b]);
        info.browser = m ? m[0] : (info.browser || 'UnknowBrowser');
    };
}
[codend]

#### 总结
其实呢，我觉得`js`好玩的地方非常多，有很多地方是其他语言无法超越的。当然，每个语言都有自己的长处，随个人所好～