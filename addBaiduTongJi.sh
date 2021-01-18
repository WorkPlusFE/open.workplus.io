#!/usr/bin/env sh

basepath=$(cd `dirname $0`; pwd)
sourcePath=$basepath'/docs/.vuepress/dist/'

echo "添加百度统计"
cd $sourcePath
sed -i '/<html/a\
<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?d4d09268a04f5592cb8426d540e51d00";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();</script>' index.html
echo "添加代码执行完毕"
