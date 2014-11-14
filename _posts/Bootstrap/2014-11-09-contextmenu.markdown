---
category:	Bootstrap
style:		success
layout:		post
title:		BootStrap.ContextMenu 网页右键菜单插件
desc:		基于bootstrap(v.3.2.0)写了个右键菜单的小"插件"，这里简单介绍下使用方法。
tags:		[Bootstrap,bootstrap.contextmenu,bootstrap Table,contextmenu右键菜单]
---
<script src="/static/bootstrap.contextmenu/bootstrap.contextmenu.js"></script>
#### 简介
之前在写一个`web桌面`应用框架的时候写过一款"中文"的插件，当时是自己写的`css`和`js`，除了图标之外不需要依赖`bootstrap`的支持。      
后来在测试的时候，发现并不怎么理想，尤其是在`firefox`、`Safari`下，中文有时候会不支持所以无法执行，并且想着还有很多`BUG`，于是就重新写了。。

目前貌似`bootstrap`已经更新到了`3.3.0`，但个人感觉不怎么美观，所以就在本人比较喜欢的`3.2.0`风格的基础上写了一点样式，想知道长啥样？<kbd>右键试试!</kbd>

    项目地址:   https://github.com/h01/javascript/tree/master/bootstrap.contextmenu

#### 使用
使用的方法很简单，首先在页面中加载我们的`js`文件：
[code:html:]
&lt;script&gt; src="/static/bootstrap.contextmenu/bootstrap.contextmenu.min.js"&gt;&lt;/script&gt;
[codend]

然后我们来配置我们要创建的菜单对象：
[code:js:]
var menu = _ctxMenu.init([
{
    text: '文字',
    icon: '图标class',
    menu: '多级菜单',
    callback: '回调函数',
    disabled: '是否禁用'
}
]);
[codend]
然后我们把这个菜单绑定到`dom`上，比如`document`：
[code:js:]
_ctxMenu.bind(menu, document);
[codend]

#### 文档
从上面的例子中很清晰的就了解到，我们需要先定义一个菜单，然后再把这个菜单绑定到某个`dom`上。    
菜单的选项使用注意：
1.icon的图标为[Glyphicon字体图标](http://v3.bootcss.com/components/#glyphicons)中的图标，不过我们不需要前面的`glyphicon`，只需要后面的就可以了，比如：glyphicon-plus    
2.其他可以不定义，`text`为必须，如果需要分隔符，只需要设置为`---`即可。如：
[code:js:]
{
    text: '---'
}
[codend]
3.`disabled`默认为`false`，如果需要禁用只需要设置为`true`即可，一般不需要理会。    
4.`menu`多级菜单和一级菜单定义方法一样。

然后就是绑定方法，第一个参数为我们定义好的`menu`对象，第二个为要绑定某个`dom`的右键事件，如果是某个`ID`，则可以这样定义：
[code:js:]
_ctxMenu.bind(menu, document.getElementById('id'));
[codend]
当然，如果我们图方便，也可以使用`Jquery`，不过使用方法有改变如下：
[code:js:]
_ctxMenu.bind(menu, $('#id')[0]);
[codend]
最后，试试在下面的吐槽`div`里右键一下？

<script type="text/javascript">
$(function(){
    var menu1 = _ctxMenu.init([
    {
        text: '你说的太对了'
    },{
        text: '是这样的吧',
        disabled: true
    },{
        text: '---'
    },{
        text: '很好很强大',
        icon: 'glyphicon-cloud',
        callback: function(){
            alert('很凶很彪悍!');
        }
    }
    ]);
    _ctxMenu.bind(menu1, $(".panel")[1]);

    var menu2 = _ctxMenu.init([
        {
            text: '菜单出来啦'
        },{
            text: '---'
        },{
            text: '禁用的菜单',
            disabled: true
        },{
            text: '带有图标',
            icon: 'glyphicon-cog'
        },{
            text: '点击我',
            callback: function(){
                alert('回调函数已经执行!');
            }
        },{
            text: '多级菜单',
            menu: [
            {
                text: '使用方法都一样',
                disabled: true
            },{
                text: '还可以无限极哦',
                icon: 'glyphicon-film',
                menu: [
                {
                    text: '呵呵呵'
                },{
                    text: '哈哈哈'
                },{
                    text: '---'
                },{
                    text: '嘿嘿嘿'
                }
                ]
            },{
                text: '---'
            },{
                text: '不懂写啥了..'
            }
            ]
        },{
            text: '---'
        },{
            text: '重新加载',
            icon: 'glyphicon-refresh',
            callback: function(){
                location.reload();
            }
        }
        ]);

    _ctxMenu.bind(menu2, document);
})
</script>