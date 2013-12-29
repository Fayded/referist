window.Modernizr=function(t,e,n){function r(t){b.cssText=t}function i(t,e){return r(k.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var r in t){var i=t[r];if(!a(i,"-")&&b[i]!==n)return"pfx"==e?i:!0}return!1}function u(t,e,r){for(var i in t){var a=e[t[i]];if(a!==n)return r===!1?t[i]:o(a,"function")?a.bind(r||e):a}return!1}function l(t,e,n){var r=t.charAt(0).toUpperCase()+t.slice(1),i=(t+" "+S.join(r+" ")+r).split(" ");return o(e,"string")||o(e,"undefined")?s(i,e):(i=(t+" "+T.join(r+" ")+r).split(" "),u(i,e,n))}function c(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)O[n[r]]=!!(n[r]in $);return O.list&&(O.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),O}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(t){for(var r,i,o,a=0,s=t.length;s>a;a++)$.setAttribute("type",i=t[a]),r="text"!==$.type,r&&($.value=w,$.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&$.style.WebkitAppearance!==n?(g.appendChild($),o=e.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle($,null).WebkitAppearance&&0!==$.offsetHeight,g.removeChild($)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?$.checkValidity&&$.checkValidity()===!1:$.value!=w)),D[t[a]]=!!r;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,p,d="2.7.1",h={},m=!0,g=e.documentElement,v="modernizr",y=e.createElement(v),b=y.style,$=e.createElement("input"),w=":)",x={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",S=C.split(" "),T=C.toLowerCase().split(" "),_={svg:"http://www.w3.org/2000/svg"},E={},D={},O={},A=[],j=A.slice,M=function(t,n,r,i){var o,a,s,u,l=e.createElement("div"),c=e.body,f=c||e.createElement("body");if(parseInt(r,10))for(;r--;)s=e.createElement("div"),s.id=i?i[r]:v+(r+1),l.appendChild(s);return o=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),l.id=v,(c?l:f).innerHTML+=o,f.appendChild(l),c||(f.style.background="",f.style.overflow="hidden",u=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),a=n(l,t),c?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),g.style.overflow=u),!!a},P=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var r;return M("@media "+e+" { #"+v+" { position: absolute; } }",function(e){r="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),r},N=function(){function t(t,i){i=i||e.createElement(r[t]||"div"),t="on"+t;var a=t in i;return a||(i.setAttribute||(i=e.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(t,""),a=o(i[t],"function"),o(i[t],"undefined")||(i[t]=n),i.removeAttribute(t))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),F={}.hasOwnProperty;p=o(F,"undefined")||o(F.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return F.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=e.prototype;var o=new i,a=e.apply(o,n.concat(j.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(j.call(arguments)))};return r}),E.flexbox=function(){return l("flexWrap")},E.flexboxlegacy=function(){return l("boxDirection")},E.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},E.canvastext=function(){return!(!h.canvas||!o(e.createElement("canvas").getContext("2d").fillText,"function"))},E.webgl=function(){return!!t.WebGLRenderingContext},E.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:M(["@media (",k.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},E.geolocation=function(){return"geolocation"in navigator},E.postmessage=function(){return!!t.postMessage},E.websqldatabase=function(){return!!t.openDatabase},E.indexedDB=function(){return!!l("indexedDB",t)},E.hashchange=function(){return N("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},E.history=function(){return!(!t.history||!history.pushState)},E.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},E.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},E.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},E.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},E.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},E.backgroundsize=function(){return l("backgroundSize")},E.borderimage=function(){return l("borderImage")},E.borderradius=function(){return l("borderRadius")},E.boxshadow=function(){return l("boxShadow")},E.textshadow=function(){return""===e.createElement("div").style.textShadow},E.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},E.cssanimations=function(){return l("animationName")},E.csscolumns=function(){return l("columnCount")},E.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((t+"-webkit- ".split(" ").join(e+t)+k.join(n+t)).slice(0,-t.length)),a(b.backgroundImage,"gradient")},E.cssreflections=function(){return l("boxReflect")},E.csstransforms=function(){return!!l("transform")},E.csstransforms3d=function(){var t=!!l("perspective");return t&&"webkitPerspective"in g.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},E.csstransitions=function(){return l("transition")},E.fontface=function(){var t;return M('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=e.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";t=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),t},E.generatedcontent=function(){var t;return M(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},E.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},E.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},E.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},E.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},E.webworkers=function(){return!!t.Worker},E.applicationcache=function(){return!!t.applicationCache},E.svg=function(){return!!e.createElementNS&&!!e.createElementNS(_.svg,"svg").createSVGRect},E.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==_.svg},E.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(x.call(e.createElementNS(_.svg,"animate")))},E.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(x.call(e.createElementNS(_.svg,"clipPath")))};for(var I in E)p(E,I)&&(f=I.toLowerCase(),h[f]=E[I](),A.push((h[f]?"":"no-")+f));return h.input||c(),h.addTest=function(t,e){if("object"==typeof t)for(var r in t)p(t,r)&&h.addTest(r,t[r]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof m&&m&&(g.className+=" "+(e?"":"no-")+t),h[t]=e}return h},r(""),y=$=null,function(t,e){function n(t,e){var n=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=v[t[m]];return e||(e={},g++,t[m]=g,v[g]=e),e}function o(t,n,r){if(n||(n=e),c)return n.createElement(t);r||(r=i(n));var o;return o=r.cache[t]?r.cache[t].cloneNode():h.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),!o.canHaveChildren||d.test(t)||o.tagUrn?o:r.frag.appendChild(o)}function a(t,n){if(t||(t=e),c)return t.createDocumentFragment();n=n||i(t);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function u(t){t||(t=e);var r=i(t);return!y.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(t,r),t}var l,c,f="3.7.0",p=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,c=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};t.html5=y,u(e)}(this,e),h._version=d,h._prefixes=k,h._domPrefixes=T,h._cssomPrefixes=S,h.mq=P,h.hasEvent=N,h.testProp=function(t){return s([t])},h.testAllProps=l,h.testStyles=M,h.prefixed=function(t,e,n){return e?l(t,e,n):l(t,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+A.join(" "):""),h}(this,this.document);