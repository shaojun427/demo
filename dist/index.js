webpackJsonp([0],[,,,,function(t,e){var n=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(5),o=n(4),u=n(87),i=n(10),c=n(6),a=function(t,e,n){var f,l,s,p=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,h=t&a.B,_=t&a.W,m=d?o:o[e]||(o[e]={}),b=m.prototype,g=d?r:v?r[e]:(r[e]||{}).prototype;d&&(n=e);for(f in n)(l=!p&&g&&void 0!==g[f])&&c(m,f)||(s=l?g[f]:n[f],m[f]=d&&"function"!=typeof g[f]?n[f]:h&&l?u(s,r):_&&g[f]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):y&&"function"==typeof s?u(Function.call,s):s,y&&((m.virtual||(m.virtual={}))[f]=s,t&a.R&&b&&!b[f]&&i(b,f,s)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(17),o=n(88),u=n(47),i=Object.defineProperty;e.f=n(9)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8),o=n(24);t.exports=n(9)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(94),o=n(44);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(46)("wks"),o=n(23),u=n(5).Symbol,i="function"==typeof u;(t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))}).store=r},,,function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},,,,,function(t,e,n){t.exports={default:n(161),__esModule:!0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(165),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0;var r=n(90),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){var r=n(93),o=n(52);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(192),u=r(o),i=n(196),c=r(i),a=n(90),f=r(a);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u.default?(0,u.default)(t,e):t.__proto__=e)}},,,,,,,,,,,,,function(t,e,n){var r=n(44);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(46)("keys"),o=n(23);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(5),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,n){var r=n(17),o=n(173),u=n(52),i=n(45)("IE_PROTO"),c=function(){},a=function(){var t,e=n(89)("iframe"),r=u.length;for(e.style.display="none",n(177).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[u[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[i]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(8).f,o=n(6),u=n(14)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e,n){e.f=n(14)},function(t,e,n){var r=n(5),o=n(4),u=n(49),i=n(54),c=n(8).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:i.f(t)})}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(84),o=function(t){return t&&t.__esModule?t:{default:t}}(r),u={reducers:{},setReducers:function(t){var e=o.default.assign(this.reducers,t);this.reducers=e},getReducers:function(){return this.reducers}};e.default=u},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(6),o=n(43),u=n(45)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,n){var r=n(164);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=!n(9)&&!n(12)(function(){return 7!=Object.defineProperty(n(89)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11),o=n(5).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(168),u=r(o),i=n(182),c=r(i),a="function"==typeof c.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===a(u.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){"use strict";var r=n(49),o=n(7),u=n(92),i=n(10),c=n(50),a=n(172),f=n(53),l=n(86),s=n(14)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,y,h,_){a(n,e,v);var m,b,g,O=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",S="values"==y,E=!1,w=t.prototype,j=w[s]||w["@@iterator"]||y&&w[y],M=j||O(y),P=y?S?O("entries"):M:void 0,k="Array"==e?w.entries||j:j;if(k&&(g=l(k.call(new t)))!==Object.prototype&&g.next&&(f(g,x,!0),r||"function"==typeof g[s]||i(g,s,d)),S&&j&&"values"!==j.name&&(E=!0,M=function(){return j.call(this)}),r&&!_||!p&&!E&&w[s]||i(w,s,M),c[e]=M,c[x]=d,y)if(m={values:S?M:O("values"),keys:h?M:O("keys"),entries:P},_)for(b in m)b in w||u(w,b,m[b]);else o(o.P+o.F*(p||E),e,m);return m}},function(t,e,n){t.exports=n(10)},function(t,e,n){var r=n(6),o=n(13),u=n(174)(!1),i=n(45)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=i&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~u(f,n)||f.push(n));return f}},function(t,e,n){var r=n(95);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(93),o=n(52).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(29),o=n(24),u=n(13),i=n(47),c=n(6),a=n(88),f=Object.getOwnPropertyDescriptor;e.f=n(9)?f:function(t,e){if(t=u(t),e=i(e,!0),a)try{return f(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){t.exports={default:n(206),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.IO=e.context=void 0;var o=n(85),u=r(o),i=n(42),c=r(i),a=u.default.context({mockUrlPrefix:"/mock/",mock:!1,willFetch:function(){c.default.start()},didFetch:function(){c.default.done()},withCredentials:!0,traditional:!0,fit:function(t){return{success:0===t.errcode||t.success,content:t,error:t}}}),f=a.api;e.context=a,e.IO=f},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n(157),n(159);var o=n(42),u=r(o),i=n(60),c=n(160),a=r(c);u.default.start(),window.onload=function(){u.default.done()},document.title="DEMO",(0,i.render)(a.default,document.getElementById("App"))},function(t,e){},,function(t,e){},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(22),u=r(o),i=n(25),c=r(i),a=n(26),f=r(a),l=n(27),s=r(l),p=n(30),d=r(p),v=n(0),y=r(v),h=n(71),_=n(199),m=r(_),b=n(201),g=r(b),O=n(209),x=r(O),S=n(39),E=n(21),w=n(83),j=r(w),M=n(57),P=r(M),k=(0,S.combineReducers)(P.default.getReducers()),T=(0,S.createStore)(k,(0,S.applyMiddleware)(j.default)),N=function(t){function e(t){return(0,c.default)(this,e),(0,s.default)(this,(e.__proto__||(0,u.default)(e)).call(this,t))}return(0,d.default)(e,t),(0,f.default)(e,[{key:"render",value:function(){return y.default.createElement(h.BrowserRouter,null,y.default.createElement(h.Switch,null,y.default.createElement(h.Route,{path:"/",exact:!0,component:g.default}),y.default.createElement(h.Route,{path:"/cameraDemo",exact:!0,component:x.default}),y.default.createElement(h.Route,{path:"/404",exact:!0,component:m.default}),y.default.createElement(h.Redirect,{path:"/",to:"/404"})))}}]),e}(v.Component);e.default=y.default.createElement(E.Provider,{store:T},y.default.createElement(N,null))},function(t,e,n){n(162),t.exports=n(4).Object.getPrototypeOf},function(t,e,n){var r=n(43),o=n(86);n(163)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(7),o=n(4),u=n(12);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*u(function(){n(1)}),"Object",i)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports={default:n(166),__esModule:!0}},function(t,e,n){n(167);var r=n(4).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(7);r(r.S+r.F*!n(9),"Object",{defineProperty:n(8).f})},function(t,e,n){t.exports={default:n(169),__esModule:!0}},function(t,e,n){n(170),n(178),t.exports=n(54).f("iterator")},function(t,e,n){"use strict";var r=n(171)(!0);n(91)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(48),o=n(44);t.exports=function(t){return function(e,n){var u,i,c=String(o(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(u=c.charCodeAt(a),u<55296||u>56319||a+1===f||(i=c.charCodeAt(a+1))<56320||i>57343?t?c.charAt(a):u:t?c.slice(a,a+2):i-56320+(u-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(51),o=n(24),u=n(53),i={};n(10)(i,n(14)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),u(t,e+" Iterator")}},function(t,e,n){var r=n(8),o=n(17),u=n(28);t.exports=n(9)?Object.defineProperties:function(t,e){o(t);for(var n,i=u(e),c=i.length,a=0;c>a;)r.f(t,n=i[a++],e[n]);return t}},function(t,e,n){var r=n(13),o=n(175),u=n(176);t.exports=function(t){return function(e,n,i){var c,a=r(e),f=o(a.length),l=u(i,f);if(t&&n!=n){for(;f>l;)if((c=a[l++])!=c)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(48),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(48),o=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):u(t,e)}},function(t,e,n){var r=n(5).document;t.exports=r&&r.documentElement},function(t,e,n){n(179);for(var r=n(5),o=n(10),u=n(50),i=n(14)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var f=c[a],l=r[f],s=l&&l.prototype;s&&!s[i]&&o(s,i,f),u[f]=u.Array}},function(t,e,n){"use strict";var r=n(180),o=n(181),u=n(50),i=n(13);t.exports=n(91)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(183),__esModule:!0}},function(t,e,n){n(184),n(189),n(190),n(191),t.exports=n(4).Symbol},function(t,e,n){"use strict";var r=n(5),o=n(6),u=n(9),i=n(7),c=n(92),a=n(185).KEY,f=n(12),l=n(46),s=n(53),p=n(23),d=n(14),v=n(54),y=n(55),h=n(186),_=n(187),m=n(17),b=n(11),g=n(13),O=n(47),x=n(24),S=n(51),E=n(188),w=n(97),j=n(8),M=n(28),P=w.f,k=j.f,T=E.f,N=r.Symbol,L=r.JSON,A=L&&L.stringify,H=d("_hidden"),C=d("toPrimitive"),R={}.propertyIsEnumerable,D=l("symbol-registry"),F=l("symbols"),I=l("op-symbols"),G=Object.prototype,V="function"==typeof N,J=r.QObject,U=!J||!J.prototype||!J.prototype.findChild,W=u&&f(function(){return 7!=S(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=P(G,e);r&&delete G[e],k(t,e,n),r&&t!==G&&k(G,e,r)}:k,B=function(t){var e=F[t]=S(N.prototype);return e._k=t,e},K=V&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},q=function(t,e,n){return t===G&&q(I,e,n),m(t),e=O(e,!0),m(n),o(F,e)?(n.enumerable?(o(t,H)&&t[H][e]&&(t[H][e]=!1),n=S(n,{enumerable:x(0,!1)})):(o(t,H)||k(t,H,x(1,{})),t[H][e]=!0),W(t,e,n)):k(t,e,n)},z=function(t,e){m(t);for(var n,r=h(e=g(e)),o=0,u=r.length;u>o;)q(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?S(t):z(S(t),e)},Q=function(t){var e=R.call(this,t=O(t,!0));return!(this===G&&o(F,t)&&!o(I,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,H)&&this[H][t])||e)},X=function(t,e){if(t=g(t),e=O(e,!0),t!==G||!o(F,e)||o(I,e)){var n=P(t,e);return!n||!o(F,e)||o(t,H)&&t[H][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=T(g(t)),r=[],u=0;n.length>u;)o(F,e=n[u++])||e==H||e==a||r.push(e);return r},$=function(t){for(var e,n=t===G,r=T(n?I:g(t)),u=[],i=0;r.length>i;)!o(F,e=r[i++])||n&&!o(G,e)||u.push(F[e]);return u};V||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(I,n),o(this,H)&&o(this[H],t)&&(this[H][t]=!1),W(this,t,x(1,n))};return u&&U&&W(G,t,{configurable:!0,set:e}),B(t)},c(N.prototype,"toString",function(){return this._k}),w.f=X,j.f=q,n(96).f=E.f=Z,n(29).f=Q,n(56).f=$,u&&!n(49)&&c(G,"propertyIsEnumerable",Q,!0),v.f=function(t){return B(d(t))}),i(i.G+i.W+i.F*!V,{Symbol:N});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=M(d.store),rt=0;nt.length>rt;)y(nt[rt++]);i(i.S+i.F*!V,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=N(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),i(i.S+i.F*!V,"Object",{create:Y,defineProperty:q,defineProperties:z,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),L&&i(i.S+i.F*(!V||f(function(){var t=N();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!K(t))return _(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),r[1]=e,A.apply(L,r)}}),N.prototype[C]||n(10)(N.prototype,C,N.prototype.valueOf),s(N,"Symbol"),s(Math,"Math",!0),s(r.JSON,"JSON",!0)},function(t,e,n){var r=n(23)("meta"),o=n(11),u=n(6),i=n(8).f,c=0,a=Object.isExtensible||function(){return!0},f=!n(12)(function(){return a(Object.preventExtensions({}))}),l=function(t){i(t,r,{value:{i:"O"+ ++c,w:{}}})},s=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!a(t))return"F";if(!e)return"E";l(t)}return t[r].i},p=function(t,e){if(!u(t,r)){if(!a(t))return!0;if(!e)return!1;l(t)}return t[r].w},d=function(t){return f&&v.NEED&&a(t)&&!u(t,r)&&l(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:s,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(28),o=n(56),u=n(29);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,c=n(t),a=u.f,f=0;c.length>f;)a.call(t,i=c[f++])&&e.push(i);return e}},function(t,e,n){var r=n(95);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(13),o=n(96).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?c(t):o(r(t))}},function(t,e){},function(t,e,n){n(55)("asyncIterator")},function(t,e,n){n(55)("observable")},function(t,e,n){t.exports={default:n(193),__esModule:!0}},function(t,e,n){n(194),t.exports=n(4).Object.setPrototypeOf},function(t,e,n){var r=n(7);r(r.S,"Object",{setPrototypeOf:n(195).set})},function(t,e,n){var r=n(11),o=n(17),u=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(87)(Function.call,n(97).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){t.exports={default:n(197),__esModule:!0}},function(t,e,n){n(198);var r=n(4).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(7);r(r.S,"Object",{create:n(51)})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(22),u=r(o),i=n(25),c=r(i),a=n(26),f=r(a),l=n(27),s=r(l),p=n(30),d=r(p);n(200);var v=n(0),y=r(v),h=function(t){function e(t){return(0,c.default)(this,e),(0,s.default)(this,(e.__proto__||(0,u.default)(e)).call(this,t))}return(0,d.default)(e,t),(0,f.default)(e,[{key:"render",value:function(){return y.default.createElement("div",{className:"undefined-page-bg"},y.default.createElement("a",{className:"button",href:"/"},"返回首页"))}}]),e}(v.Component);e.default=h},function(t,e){},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(22),u=r(o),i=n(25),c=r(i),a=n(26),f=r(a),l=n(27),s=r(l),p=n(30),d=r(p);n(202);var v=n(0),y=r(v),h=n(21),_=n(203),m=function(t){function e(t){(0,c.default)(this,e);var n=(0,s.default)(this,(e.__proto__||(0,u.default)(e)).call(this,t));return n.state={},n}return(0,d.default)(e,t),(0,f.default)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"changeHandle",value:function(t){this.props.changeHandle(t.target.value)}},{key:"clickHandle",value:function(){var t=this;t.props.clickHandle(t.props.value)}},{key:"getDataHandle",value:function(){this.props.getDataHandle()}},{key:"render",value:function(){var t=this,e=t.props,n=e.test,r=e.final,o=e.data;return y.default.createElement("div",null,y.default.createElement("input",{type:"text",value:n,onChange:t.changeHandle.bind(t)}),y.default.createElement("button",{onClick:t.clickHandle.bind(t)},"平方计算"),y.default.createElement("span",null,r),y.default.createElement("br",null),y.default.createElement("button",{onClick:t.getDataHandle.bind(t)},"获取接口数据"),y.default.createElement("span",null,o))}}]),e}(v.Component),b=function(t){var e=t.homeReducer;return{value:e.value,final:e.final,data:e.data}};e.default=(0,h.connect)(b,_.action)(m)},function(t,e){},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.IO=e.action=void 0;var o=n(204),u=r(o),i=n(98),c=r(i),a=n(57),f=r(a),l=n(99);l.context.create("Home",{test:{mockUrl:"home/test.json",url:"mock/home/test.json"}});var s={reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{test:""},e=arguments[1];switch(e.type){case"CHANGE_VALUE":var n=e.value;return(0,c.default)({},t,{value:n});case"COUNT_HANDLE":var r=e.inputValue,o=r?Number(r)?Number(r)*Number(r):"请输入数字后计算":"";return(0,c.default)({},t,{final:o});case"GET_DATA":var i=(0,u.default)(e.data);return(0,c.default)({},t,{data:i})}return t},action:function(t,e){return{changeHandle:function(e){t({type:"CHANGE_VALUE",value:e})},clickHandle:function(e){t({type:"COUNT_HANDLE",inputValue:e})},getDataHandle:function(){l.IO.Home.test().then(function(e){var n=e.data;t({type:"GET_DATA",data:n})}).catch()}}}};f.default.setReducers({homeReducer:s.reducer});var p=s.action;e.action=p,e.IO=l.IO},function(t,e,n){t.exports={default:n(205),__esModule:!0}},function(t,e,n){var r=n(4),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(207),t.exports=n(4).Object.assign},function(t,e,n){var r=n(7);r(r.S+r.F,"Object",{assign:n(208)})},function(t,e,n){"use strict";var r=n(28),o=n(56),u=n(29),i=n(43),c=n(94),a=Object.assign;t.exports=!a||n(12)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=i(t),a=arguments.length,f=1,l=o.f,s=u.f;a>f;)for(var p,d=c(arguments[f++]),v=l?r(d).concat(l(d)):r(d),y=v.length,h=0;y>h;)s.call(d,p=v[h++])&&(n[p]=d[p]);return n}:a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(22),u=r(o),i=n(25),c=r(i),a=n(26),f=r(a),l=n(27),s=r(l),p=n(30),d=r(p);n(210);var v=n(0),y=r(v),h=n(21),_=n(211),m=function(t){function e(t){return(0,c.default)(this,e),(0,s.default)(this,(e.__proto__||(0,u.default)(e)).call(this,t))}return(0,d.default)(e,t),(0,f.default)(e,[{key:"photoHandle",value:function(t){var e=this.props,n=t.target.files[0],r=new FileReader;r.readAsDataURL(n),r.onload=function(t){e.photoHandle(t.target.result)}}},{key:"render",value:function(){var t=this.props.picSrc,e=this.photoHandle;return y.default.createElement("div",null,y.default.createElement("input",{onChange:e.bind(this),type:"file",id:"take-picture",accept:"image/*"}),y.default.createElement("img",{width:"50%",src:t}),y.default.createElement("div",{className:"box"},y.default.createElement("ul",{className:"one"},y.default.createElement("li",null),y.default.createElement("li",null)),y.default.createElement("ul",{className:"two"},y.default.createElement("li",null),y.default.createElement("li",null)),y.default.createElement("ul",{className:"mask"})))}}]),e}(v.Component),b=function(t){return{picSrc:t.demoReducer.picSrc}};e.default=(0,h.connect)(b,_.action)(m)},function(t,e){},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.IO=e.action=void 0;var o=n(98),u=r(o),i=n(57),c=r(i),a=n(99),f={reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{picSrc:""},e=arguments[1];switch(e.type){case"PHOTO_HANDLE":var n=e.picSrc;return(0,u.default)({},t,{picSrc:n})}return t},action:function(t,e){return{photoHandle:function(e){t({type:"PHOTO_HANDLE",picSrc:e})}}}};c.default.setReducers({demoReducer:f.reducer});var l=f.action;e.action=l,e.IO=a.IO}],[156]);
//# sourceMappingURL=index.js.map