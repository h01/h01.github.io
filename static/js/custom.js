/*
 * Custom.js 4 Hotes
 * http://ursb.org
 */

// 文章JSON数据
var posts = new Array();

// 获取分类文章列表
function getCategory(type){
	var html = "";
	type = type.toUpperCase();
	$.each(posts, function(i){
		if (posts[i].category.toUpperCase() == type || type == "ALL") {
			html += genPostHtml(posts[i]);
		};
	});
	if (html == "") {
		html = genPostHtml({
			style: "warning",
			link: "#",
			date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " 00:00:00 +0000",
			desc: "没有<code>" + type + "</code>这个分类 =$@.@$=",
			title: "出错啦"
		});
	};
	$("#posts").html(html);
}

// 生成文章列表HTML
function genPostHtml(obj){
	var html = '<div class="col-md-6 col-sm-12 col-xs-12">';
	html += '<div class="panel panel-' + (obj.style || "default") + '">';
	html += '	<div class="panel-heading">';
	html += '		<h3 class="panel-title"><span class="glyphicon glyphicon-file"></span> <a href="' + obj.link + '">' + obj.title + '</a></h3>';
	html += '	</div>';
	html += '	<div class="panel-body">';
	html += '		<div class="media">';
	html += '			<div class="pull-left" align="center">';
	html += '				<p style="font-size: 33px;margin-bottom: -5px;" class="text-' + (obj.style || "default") + '">' + obj.date.split(" ")[0].split("-")[2] + '</p>';
	html += '				<p class="text-' + (obj.style || "default") + '">' + obj.date.split(" ")[0].split("-")[0] + "-" + obj.date.split(" ")[0].split("-")[1] + '</p>';
	html += '			</div>';
	html += '			<div class="media-body text-' + (obj.style || "default") + '" style="padding-left: 5px;">';
	html += obj.desc;
	html += '			</div>';
	html += '		</div>';
	html += '	</div></div></div>';
	return html;
}


$(document).ready(function(){
	// 获取文章JSON数据列表
	$.getJSON("/api/posts.json", function(temp){
		posts = temp;
	});
})