---
category:	NodeJs
layout:		post
title:		树莓派安装node.js环境
desc:		目前网上流传的大多都是通过下载源码编译，测试发现编译时间太久，结果也没装上。所以就直接来个更简单的，一步到位！
tags:		[node.js,raspberry,树莓派,树莓派安装node.js,raspberry install node.js]
---
之所以说一步到位，是因为我们只需要下载官网已经编译好的程序然后配置环境就可以了～

#### 下载程序
[code:shell:]
cd ~
wget -N http://nodejs.org/dist/v0.10.28/node-v0.10.28-linux-arm-pi.tar.gz
tar xzvf node-v0.10.28-linux-arm-pi.tar.gz
mv node-v0.10.28-linux-arm-pi/ node
[codend]
上面的命令是下载并解压文件，然后把目录重命名为`node`，这是为了方便。其中的`v0.10.28`为`node`的版本，可随机应变～

#### 配置环境
我们可以直接进入`node/bin`目录就可以直接执行`./node --version`命令了。    
但是这样显然是很麻烦的，所以我们把`node/bin`的目录加入到我们的执行环境中：
[code:shell:]
cd ~
vim .profile
[codend]
然后我们添加环境变量：
[code:shell:]
PATH=$PATH:/home/pi/node/bin
[codend]
保存，更新：
[code:shell:]
source .profile
[codend]
这样直接输入如下命令就可执行了：
[code:shell:]
node --version
[codend]
最后，我们要解决在`root`权限下执行命令无法找到的问题：
[code:shell:]
sudo vim /etc/sudoers
# 在Defaults		secure_path=".."后加入node/bin路径，如/home/pi/node/bin
:wq!
[codend]