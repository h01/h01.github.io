---
category:	Glass
layout:		post
title:		Google glass刷机
desc:		闲置了一阵子的Glass自从root后各种不好用，新rom已经出了一阵子了，立马从XE19.1刷到XE22吧！
tags:		[google glass,google glass刷机,glass刷机,谷歌眼镜,谷歌眼镜刷机]
---
#### 系统下载
1.[谷歌官方](https://developers.google.com/glass/tools-downloads/system)
2.[翻墙地址](https://awk.so/@developers.google.com!/glass/tools-downloads/system)
推荐进入翻墙地址，然后复制`System Image`的下载链接，比如最新的(XE22):`http://awk.so/@dl.google.com!/glass/xe22/signed-glass_1-img-1511057.zip`，换为官方地址则为：`http://dl.google.com/glass/xe22/signed-glass_1-img-1511057.zip`。把此地址放入QQ旋风或者百度网盘离线下载即可～    
最后下载完成，把他解压出来吧

#### 开始刷机
先保证设备电量足够并且已经安装好`adb`和`fastboot`命令环境～    
然后开机状态下连接windows，最好不要用osx，为什么？因为远离变砖～    
然后输入命令重启设备：
[code:shell:edoc]
// 查看设备是否连接
$ adb devices
// 重启设备
$ adb reboot bootloader
[codend]
然后过一阵子（大概一两分钟）设备重启完毕，输入命令查看是否已经进入刷机模式：
[code:shell:edoc]
$ fastboot devices
[codend]
然后进入我们解压的系统文件目录，开始刷机！
[code:shell:]
// 解锁设备
$ fastboot oem unlock
// 刷入boot.img
$ fastboot flash boot boot.img
// 刷入system
$ fastboot flash system system.img
// 刷入recovery
$ fastboot flash recovery recovery.img
[codend]
OK，等待那么五分钟左右就好了，接下来就是要清除设备的数据：
[code:shell:edoc]
$ fastboot erase cache
$ fastboot erase userdata
[codend]
最后如果需要`root`(不推荐)的话，则输入命令：
[code:shell:edoc]
$ fastboot oem unlock
[codend]
否则直接锁定设备好了：
[code:shell:edoc]
$ fastboot oem lock
[codend]
最后的最后，重启，初始化，搞定！
[code:shell:edoc]
$ fastboot reboot
[codend]