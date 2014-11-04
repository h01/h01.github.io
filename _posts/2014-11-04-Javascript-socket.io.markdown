---
category:    javascript
layout:      post
title:       socket.io的简单使用
desc:        socket.io 是一个为实时应用提供跨平台实时通信的库。简记如何与Node.js完美搭配使用
tags:        [Javascript,socket.io,socket.io.js使用,node.js Websocket]
---
具体的介绍就不说了，在服务端安装命令：
{% highlight bash %}
npm install socket.io
{% endhighlight %}

安装完毕我们本地监听一个`web`端口用于和用户交互以及通信：
{% highlight js %}
var app = require('http').createServer(handler),
     io = require('socket.io').listen(app);

function handler(req, res) {
    res.writeHead(200);
    res.end('Hello socket.io!');
}
function debug(msg){
    console.log("[-] " + msg);
}
app.listen(8888);
io.sockets.on('connection',function(socket){
    debug("主机连接:" + socket.id);

    socket.on('msg',function(data){
        debug("收到数据:" + data.msg);
        socket.emit("msg", {
            msg: "你的数据(" + data.msg + ")我收到啦!"
        });
    });
    socket.on('disconnect"', function(){
        debug("主机断开:" + socket.id);
    })
});
{% endhighlight %}

然后客户端调用`web`的`socket.io.js`，或者直接调用外部`cdn`的`js`文件，进行和客户端通信：
{% highlight js %}
var socket = io.connect("http://localhost:8888");
socket.on("msg", function(msg){
    console.log("[+] " + msg.msg);
});
socket.emit("msg", {
    msg: "Hello!!!"
});
{% endhighlight %}