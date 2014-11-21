---
category:	Linux
layout:		post
title:		ssh文件上传下载
desc:		linux中如果要进行文件上传下载，除了用ftp外，ssh也是一个不错的选择。
tags:		[linux,scp,ssh,ssh上传,ssh下载,scp命令]
---
#### 下载文件和目录
[code:shell:]
scp username@servername:/remote/filename /local/dir/
scp -r username@servername:/remote/dir/ /local/dir/
[codend]

#### 上传文件和目录
[code:shell:]
scp /local/filename username@servername:/remote/dir/
scp  -r /local/dir username@servername:/remote/dir/
[codend]

仅作记录.