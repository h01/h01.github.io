---
permalink: /feed.xml
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>{{ site.title | xml_escape }}</title>
		<atom:link href="{{ "/feed.xml" | prepend: site.url }}" rel="self" type="application/rss+xml" />
		<url>{{ site.url | xml_escape }}</url>
		<lastBuildDate>{{ site.time | date_to_rfc822 }}</lastBuildDate>
		<language>zh-CN</language>
		<generator>{{ site.email | xml_escape }}</generator>
		{% for post in site.posts limit:10 %}
		<item>
			<title>{{ post.title | xml_escape }}</title>
			<url>{{ post.url | prepend: site.url | xml_escape }}</url>
			<pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
			<category>{{ post.tags | join: "," | xml_escape }}</category>
			<description>{{ post.desc | xml_escape }}</description>
		</item>
		{% endfor %}
	</channel>
</rss>