---
category:	NodeJs
title:		NodeJs中的http操作封装
layout:		post
desc:		简记如何使用http(s)的request函数进行封装get和post请求
tags:		[node.js, node http, node http get, node http post]
---
#### 说在前头
最近玩`node.js`，涉及到`http`的操作，搜索了下资料发现一个模块`nodegrass`挺不错，但看了下源码感觉太臃肿。    
于是了解了下http的一些方法，然后做了个[httpor](https://github.com/h01/httpor)模块，如果有兴趣直接输入下面命令安装即可：
[code:bash:edoc]
$ npm install httpor
[codend]

#### 基础知识
先来看下如何使用`http`模块的`request`方法进行`get`请求发包：
[code:js:edoc]
var opt = {
	method: 'GET',
	headers: {
		'User-Agent': 'httpor/1.0'
	},
	host: 'ursb.org',
	port: 80,
	path: '/'
}
http.request(opt, function(res){
	var _html = '';
	res.on('data', function(c){
		_html += c;
	}).on('end', function(){
		console.log('请求完成');
		console.log('状态码:' + res.statusCode);
		console.log('头信息:' + res.headers);
		console.log('数据:' + _html);
	})
}).on('error', function(e){
	console.log('请求错误');
	console.log(e);
}).end();
[codend]
很简单的代码，随手敲的，`POST`请求也类似，无非就是先定义一个请求信息对象，包含`host`,`port`等信息，不过注意的是`POST`请求设置中的`method`为`POST`,以及需要定义一个`Content-Typ`为`application/x-www-form-urlencoded`的`headers`头信息，这样才能让目标接收到我们的数据，
最后使用`write`方法把数据包写入操作对象中：
[code:js:edoc]
var opt = {
	method: 'POST',
	host: 'ursb.org',
	port: 80,
	path: '/api/posts.json',
	data: {
		id: 111,
		name: 'test post data'
	},
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}
var req = http.request(opt, function(res){
	// ...你懂的
});
req.write(querystring.stringify(opt.data));
req.end();
[codend]
可以看出，只需要`write`一个格式化过后的数据就OK了。    
那么，如何请求`https`页面呢？很简单，把`http`模块换为`https`即可：
[code:js:edoc]
var https = require("https");
[codend]

#### 其他细节
使用`request`已经能满足大部分的操作了，但是呢，有个问题，就是网页的编码，并不是每个页面的编码设置都一样，所以我们就需要第三方模块`iconv-lite`来处理编码了，当然，有能力自己写也是可以的～    

#### 优化处理
我们怎么封装才能使用更方便呢？参考`jQuery.ajax`？不错的想法，可以先写下方便操作的代码：
[code:js:edoc]
myhttp.get("http://ursb.org/", function(res){
	console.log(res);
});
myhttp.post("http://ursb.org/api/posts.json", {
	data: 'testdata'
}, function(res){
	console.log(res);
});
myhttp.ajax({
	url: 'http://ursb.org',
	method: 'POST',
	success: function(res){
		console.log(res);
	}
});
...
[codend]
这样封装就很方便了吧！完全模拟的`jQuery`，怎么写这一个封装函数？具体你都懂的。。