### BootStrap.ContextMenu
>    一款bootstrap(v3.2.0)的小"插件"    
>    用于网页各种dom右键菜单

### 使用
	在使用前首先需要加载bootstrap(v3.2.0)的css文件，然后再引入本JS脚本
	使用方法：
	1.初始化
		var menu1 = _ctxMenu.init([
		{
			text: '这个是菜单的文字，如果需要分隔符，则输入"---"',
			icon: '菜单的图标，如：glyphicon-flash（参考：http://v3.bootcss.com/components/#glyphicons）',
			disabled: '禁用菜单，为true|false',
			callback: function(){
				console.log('这里是菜单点击的回调事件');
			},
			menu: ['子菜单列表，格式如同']
		}
		]);
	2.绑定右键菜单
		_cxtMenu.bind(menu1, document);

### DEMO
[点击查看Demo](http://ursb.org/bootstrap/2014/11/09/contextmenu.html)