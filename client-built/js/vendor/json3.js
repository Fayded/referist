!function(t){function e(t){if(e[t]!==i)return e[t];var n;if("bug-string-char-index"==t)n="a"!="a"[0];else if("json"==t)n=e("json-stringify")&&e("json-parse");else{var r,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var s=u.stringify,c="function"==typeof s&&l;if(c){(r=function(){return 1}).toJSON=r;try{c="0"===s(0)&&"0"===s(new Number)&&'""'==s(new String)&&s(o)===i&&s(i)===i&&s()===i&&"1"===s(r)&&"[1]"==s([r])&&"[null]"==s([i])&&"null"==s(null)&&"[null,null,null]"==s([i,o,null])&&s({a:[r,!0,!1,null,"\x00\b\n\f\r	"]})==a&&"1"===s(null,r)&&"[\n 1,\n 2\n]"==s([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==s(new Date(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==s(new Date(864e13))&&'"-000001-01-01T00:00:00.000Z"'==s(new Date(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==s(new Date(-1))}catch(f){c=!1}}n=c}if("json-parse"==t){var p=u.parse;if("function"==typeof p)try{if(0===p("0")&&!p(!1)){r=p(a);var d=5==r.a.length&&1===r.a[0];if(d){try{d=!p('"	"')}catch(f){}if(d)try{d=1!==p("01")}catch(f){}if(d)try{d=1!==p("1.")}catch(f){}}}}catch(f){d=!1}n=d}}return e[t]=!!n}var n,r,i,o={}.toString,a="function"==typeof define&&define.amd,s="object"==typeof JSON&&JSON,u="object"==typeof exports&&exports&&!exports.nodeType&&exports;u&&s?(u.stringify=s.stringify,u.parse=s.parse):u=t.JSON=s||{};var l=new Date(-0xc782b5b800cec);try{l=-109252==l.getUTCFullYear()&&0===l.getUTCMonth()&&1===l.getUTCDate()&&10==l.getUTCHours()&&37==l.getUTCMinutes()&&6==l.getUTCSeconds()&&708==l.getUTCMilliseconds()}catch(c){}if(!e("json")){var f="[object Function]",p="[object Date]",d="[object Number]",h="[object String]",m="[object Array]",g="[object Boolean]",v=e("bug-string-char-index");if(!l)var y=Math.floor,b=[0,31,59,90,120,151,181,212,243,273,304,334],$=function(t,e){return b[e]+365*(t-1970)+y((t-1969+(e=+(e>1)))/4)-y((t-1901+e)/100)+y((t-1601+e)/400)};(n={}.hasOwnProperty)||(n=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=o?n=function(t){var e=this.__proto__,n=t in(this.__proto__=null,this);return this.__proto__=e,n}:(e=r.constructor,n=function(t){var n=(this.constructor||e).prototype;return t in this&&!(t in n&&this[t]===n[t])}),r=null,n.call(this,t)});var w={"boolean":1,number:1,string:1,undefined:1},x=function(t,e){var n=typeof t[e];return"object"==n?!!t[e]:!w[n]};if(r=function(t,e){var i,a,s,u=0;(i=function(){this.valueOf=0}).prototype.valueOf=0,a=new i;for(s in a)n.call(a,s)&&u++;return i=a=null,u?r=2==u?function(t,e){var r,i={},a=o.call(t)==f;for(r in t)a&&"prototype"==r||n.call(i,r)||!(i[r]=1)||!n.call(t,r)||e(r)}:function(t,e){var r,i,a=o.call(t)==f;for(r in t)a&&"prototype"==r||!n.call(t,r)||(i="constructor"===r)||e(r);(i||n.call(t,r="constructor"))&&e(r)}:(a=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],r=function(t,e){var r,i,s=o.call(t)==f,u=!s&&"function"!=typeof t.constructor&&x(t,"hasOwnProperty")?t.hasOwnProperty:n;for(r in t)s&&"prototype"==r||!u.call(t,r)||e(r);for(i=a.length;r=a[--i];u.call(t,r)&&e(r));}),r(t,e)},!e("json-stringify")){var k={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},C="000000",S=function(t,e){return(C+(e||0)).slice(-t)},T="\\u00",_=function(t){var e,n='"',r=0,i=t.length,o=i>10&&v;for(o&&(e=t.split(""));i>r;r++){var a=t.charCodeAt(r);switch(a){case 8:case 9:case 10:case 12:case 13:case 34:case 92:n+=k[a];break;default:if(32>a){n+=T+S(2,a.toString(16));break}n+=o?e[r]:v?t.charAt(r):t[r]}}return n+'"'},E=function(t,e,a,s,u,l,c){var f,v,b,w,x,k,C,T,D,O,A,j,M,P,N,F;try{f=e[t]}catch(I){}if("object"==typeof f&&f)if(v=o.call(f),v!=p||n.call(f,"toJSON"))"function"==typeof f.toJSON&&(v!=d&&v!=h&&v!=m||n.call(f,"toJSON"))&&(f=f.toJSON(t));else if(f>-1/0&&1/0>f){if($){for(x=y(f/864e5),b=y(x/365.2425)+1970-1;$(b+1,0)<=x;b++);for(w=y((x-$(b,0))/30.42);$(b,w+1)<=x;w++);x=1+x-$(b,w),k=(f%864e5+864e5)%864e5,C=y(k/36e5)%24,T=y(k/6e4)%60,D=y(k/1e3)%60,O=k%1e3}else b=f.getUTCFullYear(),w=f.getUTCMonth(),x=f.getUTCDate(),C=f.getUTCHours(),T=f.getUTCMinutes(),D=f.getUTCSeconds(),O=f.getUTCMilliseconds();f=(0>=b||b>=1e4?(0>b?"-":"+")+S(6,0>b?-b:b):S(4,b))+"-"+S(2,w+1)+"-"+S(2,x)+"T"+S(2,C)+":"+S(2,T)+":"+S(2,D)+"."+S(3,O)+"Z"}else f=null;if(a&&(f=a.call(e,t,f)),null===f)return"null";if(v=o.call(f),v==g)return""+f;if(v==d)return f>-1/0&&1/0>f?""+f:"null";if(v==h)return _(""+f);if("object"==typeof f){for(P=c.length;P--;)if(c[P]===f)throw TypeError();if(c.push(f),A=[],N=l,l+=u,v==m){for(M=0,P=f.length;P>M;M++)j=E(M,f,a,s,u,l,c),A.push(j===i?"null":j);F=A.length?u?"[\n"+l+A.join(",\n"+l)+"\n"+N+"]":"["+A.join(",")+"]":"[]"}else r(s||f,function(t){var e=E(t,f,a,s,u,l,c);e!==i&&A.push(_(t)+":"+(u?" ":"")+e)}),F=A.length?u?"{\n"+l+A.join(",\n"+l)+"\n"+N+"}":"{"+A.join(",")+"}":"{}";return c.pop(),F}};u.stringify=function(t,e,n){var r,i,a,s;if("function"==typeof e||"object"==typeof e&&e)if((s=o.call(e))==f)i=e;else if(s==m){a={};for(var u,l=0,c=e.length;c>l;u=e[l++],s=o.call(u),(s==h||s==d)&&(a[u]=1));}if(n)if((s=o.call(n))==d){if((n-=n%1)>0)for(r="",n>10&&(n=10);r.length<n;r+=" ");}else s==h&&(r=n.length<=10?n:n.slice(0,10));return E("",(u={},u[""]=t,u),i,a,r,"",[])}}if(!e("json-parse")){var D,O,A=String.fromCharCode,j={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},M=function(){throw D=O=null,SyntaxError()},P=function(){for(var t,e,n,r,i,o=O,a=o.length;a>D;)switch(i=o.charCodeAt(D)){case 9:case 10:case 13:case 32:D++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=v?o.charAt(D):o[D],D++,t;case 34:for(t="@",D++;a>D;)if(i=o.charCodeAt(D),32>i)M();else if(92==i)switch(i=o.charCodeAt(++D)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=j[i],D++;break;case 117:for(e=++D,n=D+4;n>D;D++)i=o.charCodeAt(D),i>=48&&57>=i||i>=97&&102>=i||i>=65&&70>=i||M();t+=A("0x"+o.slice(e,D));break;default:M()}else{if(34==i)break;for(i=o.charCodeAt(D),e=D;i>=32&&92!=i&&34!=i;)i=o.charCodeAt(++D);t+=o.slice(e,D)}if(34==o.charCodeAt(D))return D++,t;M();default:if(e=D,45==i&&(r=!0,i=o.charCodeAt(++D)),i>=48&&57>=i){for(48==i&&(i=o.charCodeAt(D+1),i>=48&&57>=i)&&M(),r=!1;a>D&&(i=o.charCodeAt(D),i>=48&&57>=i);D++);if(46==o.charCodeAt(D)){for(n=++D;a>n&&(i=o.charCodeAt(n),i>=48&&57>=i);n++);n==D&&M(),D=n}if(i=o.charCodeAt(D),101==i||69==i){for(i=o.charCodeAt(++D),(43==i||45==i)&&D++,n=D;a>n&&(i=o.charCodeAt(n),i>=48&&57>=i);n++);n==D&&M(),D=n}return+o.slice(e,D)}if(r&&M(),"true"==o.slice(D,D+4))return D+=4,!0;if("false"==o.slice(D,D+5))return D+=5,!1;if("null"==o.slice(D,D+4))return D+=4,null;M()}return"$"},N=function(t){var e,n;if("$"==t&&M(),"string"==typeof t){if("@"==(v?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=P(),"]"!=t;n||(n=!0))n&&(","==t?(t=P(),"]"==t&&M()):M()),","==t&&M(),e.push(N(t));return e}if("{"==t){for(e={};t=P(),"}"!=t;n||(n=!0))n&&(","==t?(t=P(),"}"==t&&M()):M()),(","==t||"string"!=typeof t||"@"!=(v?t.charAt(0):t[0])||":"!=P())&&M(),e[t.slice(1)]=N(P());return e}M()}return t},F=function(t,e,n){var r=I(t,e,n);r===i?delete t[e]:t[e]=r},I=function(t,e,n){var i,a=t[e];if("object"==typeof a&&a)if(o.call(a)==m)for(i=a.length;i--;)F(a,i,n);else r(a,function(t){F(a,t,n)});return n.call(t,e,a)};u.parse=function(t,e){var n,r;return D=0,O=""+t,n=N(P()),"$"!=P()&&M(),D=O=null,e&&o.call(e)==f?I((r={},r[""]=n,r),"",e):n}}}a&&define(function(){return u})}(this);