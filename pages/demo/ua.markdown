---
layout: page
permalink: /ua/
---
<script type="text/javascript">

var info = {};
var temp = {};
info.ua = navigator.userAgent;
// 
// 获取操作系统版本
//
temp.os = {
    'Mac OS X': /Mac OS X ([\d\.\_]+)/,
    'iPhone OS': /iPhone OS ([\d\.\_]+)/,
    'iPad': /iPad; CPU OS ([\d\_\.]+)/,
    'Android': /Android ([\d\.]+)/,
    'Windows Phone': /Windows Phone (OS )?([\d\.]+)/,
    'BlackBerry': /BlackBerry[ ]?[\d]+/,
    'Symbian': /SymbianOS\/([\d\.]+)/,
    'Windows': /Windows NT ([\d\.]+)/,
    'Linux': /Linux ([\w\d]+)/
}
for (var o in temp.os){
    if (info.ua.indexOf(o)) {
        var m = info.ua.match(temp.os[o]);
        info.os = m ? m[0] : (info.os || 'UnknowOS');
    };
}
//
// 获取浏览器版本
//
temp.browser = {
    'Safari': /Safari\/([\d\.]+)$/,
    'Chrome': /Chrome\/([\d\.]+)/,
    'Firefox': /Firefox\/([\d\.]+)$/,
    'Opera/': /Version\/([\d\.]+)$/,
    'MSIE': /MSIE ([\d\.]+)/,
    'Lunascape': /Lunascape ([\d\.]+)/,
    'Netscape': /Netscape6[\d]?\/([\d\.]+)/,
    'CriOS': /CriOS\/([\d\.]+)/,
    'UCBrowser': /UCBrowser\/([\d\.]+)/,
    'Trident': /Trident\/([\d\.]+)/
}
for (var b in temp.browser){
    if (info.ua.indexOf(b)) {
        var m = info.ua.match(temp.browser[b]);
        info.browser = m ? m[0] : (info.browser || 'UnknowBrowser');
    };
}

document.write("[+] 您现在使用的系统：" + info.os);
document.write("<br>");
document.write("[+] 你现在使用的浏览器：" + info.browser);
document.write("<br>");
document.write(info.ua);
</script>