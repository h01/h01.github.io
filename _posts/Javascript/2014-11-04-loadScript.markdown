---
category:    Javascript
layout:      post
title:       Javascript同步加载js文件
desc:        页面中的js并不是同步加载的，这就会导致如果几个js文件是互为牵制的话，可能会造成有未读取到的js没有及时生成元素而报错的问题
tags:        [Javascript,loadScript,同步加载js文件]
---
#### 代码贴上
实现的原理很简单，我们首先创建一个`script`元素并赋予`src`值，等加载完毕后再执行`callback`函数。    
代码直接贴出来吧，很简单：
[code:js:edoc]
function loadScript(opt){
	var u = opt.url;
	var s = opt.success || function(){};
	var e = opt.error || function(e){};
	var a = document.createElement("script");
	a.type = "text/javascript";
	a.onerror = function(e){
		e(e);
	}
	if (a.readyState) {
		a.onreadystatechange = function(){
			if (a.readyState == "loaded" || a.readyState == "complete") {
				s();
			};
		}
	}else{
		a.onload = function(){
			s();
		}
	};
	a.src = u;
	document.getElementsByTagName("head")[0].appendChild(a);
}
[codend]

#### 调用方法
[code:js:edoc]
loadScript({
	url: '/jquery.js',
	success: function(){
		console.log("加载完毕");
	}
})
[codend]