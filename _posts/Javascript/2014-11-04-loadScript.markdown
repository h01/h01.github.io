---
category:    Javascript
layout:      post
title:       Javascript同步加载js文件
desc:        页面中的js并不是同步加载的，这就会导致如果几个js文件是互为牵制的话，可能会造成有未读取到的js没有及时生成元素而报错的问题
tags:        [Javascript,loadScript,同步加载js文件]
---
#### 文章代码参考于网络修改，在此留笔记供日后翻阅
实现的原理很简单，我们首先创建一个`script`元素并赋予`src`值，等加载完毕后再执行`callback`函数。    
代码直接贴出来吧，很简单：
{% highlight js linenos %}
function loadScript(url, callback){
	var script = document.createElement("script");
	script.type = "text/javascript";
	if (script.readyState) {
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				callback();
			};
		}
	}else{
		script.onload = function(){
			callback();
		}
	};
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}
{% endhighlight %}

调用方法：
{% highlight js linenos %}
loadScript("/jquery.js", function(){
	console.log($("#test").val());
})
{% endhighlight %}