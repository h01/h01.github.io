---
layout: default
permalink: /index.html
---
<!-- 文章列表 -->
<div class="container">
	<div class="row" id="posts">
		{% for post in site.posts %}
		<div class="col-md-6 col-sm-12 col-xs-12">
			<div class="panel panel-{% if post.style %}{{ post.style }}{% else %}{{ "default" }}{% endif %}">
				<div class="panel-heading">
					<h3 class="panel-title"><span class="glyphicon glyphicon-file"></span> <a href="{{ post.url }}">{{ post.title }}</a></h3>
				</div>
				<div class="panel-body">
					<div class="media">
						<div class="pull-left" align="center">
							<p style="font-size: 33px;margin-bottom: -5px;" class="text-{% if post.style %}{{ post.style }}{% else %}{{ "muted" }}{% endif %}">{{ post.date | date: "%d" }}</p>
							<p class="text-{% if post.style %}{{ post.style }}{% else %}{{ "muted" }}{% endif %}">{{ post.date | date: "%Y-%m" }}</p>
						</div>
						<div class="media-body text-{% if post.style %}{{ post.style }}{% else %}{{ "muted" }}{% endif %}" style="padding-left: 5px;">
							{{ post.desc }}
						</div>
					</div>
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
</div>
<!-- 右键菜单 -->
<script src="/static/bootstrap.contextmenu/bootstrap.contextmenu.min.js"></script>
<script type="text/javascript">
var category_menu = [];
category_menu.push({
	text: '<i class="pull-right badge">{{ site.posts | size }}</i>全部分类',
	icon: 'glyphicon-th',
	callback: function(){
		getCategory('all');
	}
});
category_menu.push({
	text: '---'
});
{% for category in site.categories %}
category_menu.push({
	text: '<i class="pull-right badge">{{ category[1] | size }}</i>{{ category[0] }}',
	icon: 'glyphicon-file',
	callback: function(){
		getCategory('{{ category[0] }}');
	}
});
{% endfor %}
category_menu.push({
	text: '---'
});
category_menu.push({
	text: '默认分类',
	icon: 'glyphicon-th-large',
	callback: function(){
		getCategory('');
	}
});

var mainmenu = _ctxMenu.init([
{
	text: '返回顶部',
	icon: 'glyphicon-chevron-up',
	callback: function(){
		location.href = "#top";
	}
},{
	text: '---'
},{
	text: '刷新页面',
	icon: 'glyphicon-refresh',
	callback: function(){
		location.reload();
	}
},{
	text: '---'
},{
	text: '文章分类',
	icon: 'glyphicon-th-large',
	menu: category_menu
},{
	text: '个人页面',
	icon: 'glyphicon-book',
	menu: [
	{
		text: '关于本站',
		icon: 'glyphicon-heart',
		callback: function(){
			window.open("/about/", "_blank");
		}
	},{
		text: '留个言吧',
		icon: 'glyphicon-envelope',
		callback: function(){
			window.open("/guest/", "_blank");
		}
	},{
		text: '---'
	},{
		text: 'GitHub',
		icon: 'glyphicon-paperclip',
		callback: function(){
			window.open("https://github.com/h01", "_blank");
		}
	}]
},{
	text: '---'
},{
	text: '关闭页面',
	icon: 'glyphicon-off',
	disabled: true
}
]);
_ctxMenu.bind(mainmenu, document);
</script>