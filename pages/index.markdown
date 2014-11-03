---
layout: default
permalink: /index.html
---
<!-- 文章列表 -->
<div class="container">
	<div class="row">
		{% for post in site.posts %}
		<div class="col-md-6 col-sm-12 col-xs-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title"><span class="glyphicon glyphicon-cloud"></span> <a href="{{ post.url }}">{{ post.title }}</a></h3>
				</div>
				<div class="panel-body">
					<div class="media">
						<div class="pull-left" align="center">
							<p style="font-size: 33px;margin-bottom: -5px;">{{ post.date | date: "%d" }}</p>
							<p class="text-muted">{{ post.date | date: "%Y-%m" }}</p>
						</div>
						<div class="media-body text-muted" style="padding-left: 5px;">
							{{ post.desc }}
						</div>
					</div>
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
</div>