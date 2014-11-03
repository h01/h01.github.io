---
layout: page
title: 留言板
permalink: /guest/
icon: glyphicon-envelope
---
	<!-- 留言板 -->
	<div class="container">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title"><span class="glyphicon {{ page.icon }}"></span> {{ page.title }}</h3>
			</div>
			<div class="panel-body">
				<!-- 多说评论框 start -->
				<div class="ds-thread" data-thread-key="0" data-title="{{ page.title }}" data-url="{{ page.url | prepend: site.baseurl }}"></div>
				<!-- 多说评论框 end -->
				<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
				<script type="text/javascript">
				var duoshuoQuery = {short_name:"{{ site.duoshuo_user }}"};
					(function() {
						var ds = document.createElement('script');
						ds.type = 'text/javascript';ds.async = true;
						ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
						ds.charset = 'UTF-8';
						(document.getElementsByTagName('head')[0] 
						 || document.getElementsByTagName('body')[0]).appendChild(ds);
					})();
					</script>
				<!-- 多说公共JS代码 end -->
			</div>
		</div>
	</div>