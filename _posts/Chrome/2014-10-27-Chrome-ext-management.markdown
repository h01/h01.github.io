---
category:    Chrome
layout:      post
title:       Chrome扩展开发之扩展与应用管理
desc:        通过Chrome的management接口来完成用户已安装的扩展和应用管理。
tags:        [Chrome,Chrome扩展开发,Chrome插件管理,Chrome扩展管理,Chrome.management]
---
#### 【设置权限】
{% highlight js linenos %}
"permissions": ["management"]
{% endhighlight %}

#### 【读取信息】
{% highlight js linenos %}
chrome.management.getAll(function(arr){
    console.log(arr);
}
{% endhighlight %}

其中`arr`对象的结构如下：
{% highlight js linenos %}
{
    id: "扩展的ID",
    name: "扩展的名称",
    shortName: "扩展短名称",
    description: "扩展的描述",
    version: "扩展的版本",
    mayDisable: "是否可被用户卸载或者禁用",
    enabled: "是否已经禁用",
    disableReason: "扩展被禁用的原因",
    type: "扩展的类型",
    appLaunchUrl: "应用启动的URL",
    homepageUrl: "扩展主页地址",
    updateUrl: "扩展更新URL地址",
    offlineEnabled: "是否可以离线使用",
    optionsUrl: "设置选项页面地址",
    icons: [{
        size: "图片尺寸",
        url: "图片地址"
    }],
    permissions: "扩展权限",
    hostPermissions: "扩展有权限访问的host",
    installType: "扩展被安装的方式"
}
{% endhighlight %}

其中`type`扩展类型的值有如下：

	extension
    hosted_app
    packaged_app
    legacy_packaged_app
    theme

`installType`安装方式的值有如下：

    admin       // 管理员安装
    development // 载入未打包的扩展
    normal      // 通过crx文件正常安装
    sideload    // 第三方程序安装
    other       // 其他

#### 【获取权限警告】
{% highlight js linenos %}
chrome.management.getPermissionWarningsById("扩展的ID", function(warning){
    console.log(warning);
}
{% endhighlight %}

#### 【启用禁用扩展】
{% highlight js linenos %}
// true=启用;false=禁用
chrome.management.setEnabled("扩展ID", false, function(){
    console.log(".");
}
{% endhighlight %}

#### 【卸载扩展】
{% highlight js linenos %}
// 等待实验中..
{% endhighlight %}