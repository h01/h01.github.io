---
permalink: /demo/bootstrap.contextmenu.html
---
<html>
<head>
	<meta charset="UTF-8">
	<title>Hotes - BootStrap.Contextmenu插件演示页面</title>
	<link rel="stylesheet" type="text/css" href="/static/bootstrap/css/bootstrap.min.css">
	<script type="text/javascript" src="/static/bootstrap.contextmenu/bootstrap.contextmenu.js"></script>
	<style type="text/css">
	#test {
		width: 100%;
		height: 250px;
		position: fixed;
		background-color: rgba(20, 127, 158, 0.71);
	}
	</style>
</head>
<body>
	<div id="test"></div>
</body>
<script type="text/javascript">
var menu1 = _ctxMenu.init([
{
	text: '默认菜单'
},{
	text: '禁用菜单',
	disabled: true
},{
	text: '点我看看',
	icon: 'glyphicon-cog',
	callback: function(){
		alert("callback函数成功执行 !");
	}
},{
	text: '---'
},{
	text: '多级菜单',
	menu: [
	{
		text: '可以带图标',
		icon: 'glyphicon-user'
	},{
		text: '带图标也禁用',
		icon: 'glyphicon-cloud',
		disabled: true
	},{
		text: '---'
	},{
		text: '都能带回调',
		callback: function(){
			alert('已经执行!');
		}
	},{
		text: '无限级菜单',
		menu: [
		{
			text: 'aaa'
		},
		{
			text: 'bbb'
		},{
			text: '---'
		},{
			text: 'ccc'
		}
		]
	}
	]
},{
	text: '随意绑定div',
	menu: [
	{
		text: '呵呵呵'
	},{
		text: '---'
	},{
		text: '简单易用'
	}
	]
},{
	text: '使用教程',
	icon: 'glyphicon-th-list',
	menu: [
	{
		text: 'GitHub地址',
		icon: 'glyphicon-link',
		callback: function(){
			window.open("https://github.com/h01/javascript/tree/master/bootstrap.contextmenu", "_blank");
		}
	},{
		text: '详细简介',
		icon: 'glyphicon-link',
		callback: function(){
			window.open("http://ursb.org/bootstrap/2014/11/09/contextmenu.html", "_blank");
		}
	},{
		text: '---'
	},{
		text: '欢迎一起更新哟!',
		disabled: true
	}
	]
}
]);
_ctxMenu.bind(menu1, document);

var menu_test = _ctxMenu.init([
{
	text: '#test#',
	disabled: true
},{
	text: '可以带图标',
	icon: 'glyphicon-heart'
},{
	text: '点击事件',
	callback: function(){
		alert(0);
	}
},{
	text: '---'
},{
	text: '简单易用'
},{
	text: '无需jQuery'
},{
	text: '---'
},{
	text: '试试在空白地方右键'
}
	]);
_ctxMenu.bind(menu_test, document.getElementById("test"));
</script>
</html>