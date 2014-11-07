/*
 * Custom.js 4 Hotes
 * http://ursb.org
 */

// 文章JSON数据
var posts = new Array();

// 获取文章JSON数据列表
$.getJSON("/api/posts.json", function(temp){
	posts = temp;
});


// 获取分类文章列表
function getCategory(type){
	var html = "";
	type = type.toUpperCase();
	$.each(posts, function(i){
		if (posts[i].category.toUpperCase() == type) {
			html += genPostHtml(posts[i]);
		};
	});
	$("#posts").html(html);
}

// 生成文章列表HTML
function genPostHtml(arr){
	var html = '<div class="col-md-6 col-sm-12 col-xs-12">';
	html += '<div class="panel panel-default">';
	html += '	<div class="panel-heading">';
	html += '		<h3 class="panel-title"><span class="glyphicon glyphicon-file"></span> <a href="' + arr.link + '">' + arr.title + '</a></h3>';
	html += '	</div>';
	html += '	<div class="panel-body">';
	html += '		<div class="media">';
	html += '			<div class="pull-left" align="center">';
	html += '				<p style="font-size: 33px;margin-bottom: -5px;" class="text-muted">' + arr.date.split(" ")[0].split("-")[2] + '</p>';
	html += '				<p class="text-muted">' + arr.date.split(" ")[0].split("-")[0] + "-" + arr.date.split(" ")[0].split("-")[1] + '</p>';
	html += '			</div>';
	html += '			<div class="media-body text-muted" style="padding-left: 5px;">';
	html += arr.desc;
	html += '			</div>';
	html += '		</div>';
	html += '	</div></div></div>';
	return html;
}