(function(){$(function(){var t,n,e,r,a,f,i,o;return n=function(t){return parseInt(t.get(0).nodeName[1])},r=function(t){return[].shift.call(t)},t=function(e){var a,f,i,o,u;for(e.length&&(o=n(e.first())),a=[];e.length;){for(u=[r(e)],f=o+1;e.length&&(i=e.first(),f=n(i),f>o);)u.push(r(e));u=$(u),u=u.length>1?[$(r(u)),t(u)]:[u],a.push(u)}return a},i=function(t){var n,e,r,a,f,o;for(a=$("<ul/>"),f=0,o=t.length;o>f;f++)e=t[f],n=e[0],r=$("<li/>"),r.append('<a href="#'+n.attr("id")+'">'+n.text()+"</a>"),e.length>1&&r.append(i(e[1])),a.append(r);return a},e=$(':header[id^="toc_"]:not(h1)'),a=t(e),o=i(a),f=$('<nav id="generated-toc"/>').append(o),$("#toc_0").after(f)})}).call(this);