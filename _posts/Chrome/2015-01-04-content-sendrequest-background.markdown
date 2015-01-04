---
category:	chrome
layout:		post
title:		Chrome扩展background与content通信
desc:		简单使用content脚本与background脚本之间互相通信
tags:		[chrome通信,chrome background与content通信]
---
#### 配置文件
在`manifest.json`中声明`background`与`content`：
[code:js:edoc]
"background": {
	"scripts": ["background.js"]
},
"content_scripts": [{
	"all_frames": true,
	"js": ["content.js"],
	"matches": ["http://*/*", "https://*/*"],
	"run_at": "document_start"
}]
[codend]
当然，代码仅供参考，具体API请查阅文档，这里只是说明要定义的文件名。

#### 后台监听与发送
[code:js:edoc]
//	监听消息事件
chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	var msg = '后台收到信息:' + request;
	//	返回消息
	chrome.tabs.sendRequest(sender.tab.id, msg);
	console.log(msg);
});
[codend]

#### 内容脚本发送与监听
[code:js:edoc]
//	监听消息
chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	console.log('内容脚本收到信息:' + request);
});
//	发送消息
chrome.extension.sendRequest('内容脚本发送消息不需要指定也没有tab', function(data){});
[codend]