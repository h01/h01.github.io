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