(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[12],{100:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(3),c=a.n(i),o=a(0),l=a.n(o),s=(a(46),a(98)),u=a(95),f=a(4),d=l.a.forwardRef((function(e,t){var a,i,s=e.bsPrefix,d=e.type,m=e.size,p=e.id,b=e.className,v=e.isValid,y=e.isInvalid,g=e.plaintext,O=e.readOnly,h=e.as,j=void 0===h?"input":h,x=Object(n.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),E=Object(o.useContext)(u.a).controlId;if(s=Object(f.a)(s,"form-control"),g)(i={})[s+"-plaintext"]=!0,a=i;else if("file"===d){var N;(N={})[s+"-file"]=!0,a=N}else{var w;(w={})[s]=!0,w[s+"-"+m]=m,a=w}return l.a.createElement(j,Object(r.a)({},x,{type:d,ref:t,readOnly:O,id:p||E,className:c()(b,a,v&&"is-valid",y&&"is-invalid")}))}));d.displayName="FormControl",d.Feedback=s.a,t.a=d},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(80),c=a(85),o=a(41),l=a(88),s=a(90),u=a(87),f=a(100),d=a(99),m=a(81);a(171);var p=function(e){return n.a.createElement("pre",{className:"CaesarList"},e.list.map((function(e,t){return 0===t?null:n.a.createElement("div",{key:t},t.toString().padStart(2),": ",e)})))};a(172);var b=function(e){var t=Object(d.a)(),a=Object(r.useState)(""),b=Object(i.a)(a,2),v=b[0],y=b[1];return Object(m.a)("CaesarStream",(function(e){e&&y(e.text)}),(function(){return{text:v}})),n.a.createElement("div",{className:"CaesarStream"},n.a.createElement(u.a,{className:"CaesarStream-input"},n.a.createElement(u.a.Header,null,e.prompt),n.a.createElement(u.a.Body,null,n.a.createElement(f.a,{onChange:function(e){y(e.currentTarget.value)},placeholder:"Text",ref:t,value:v}),n.a.createElement(s.a,null,n.a.createElement(l.a,null,n.a.createElement(o.a,{onClick:function(){y("")},variant:"danger"},"Clear"))))),n.a.createElement(u.a,null,n.a.createElement(u.a.Header,null,"Output"),n.a.createElement(u.a.Body,null,n.a.createElement(p,{list:new c.CaesarString(v).getRotations()}))))};a(173);t.default=function(){return n.a.createElement("div",{className:"Caesar"},n.a.createElement("div",{className:"Caesar-info"},n.a.createElement("h2",null,"Caesar Cipher"),n.a.createElement("p",null,"A Caesar cipher works by shifting every letter by a fixed amount. This is a simple cipher - there are only 25 different shifts for each letter.")),n.a.createElement(b,{prompt:"Type in your text, and all possible shifts will be displayed."}))}},80:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return r}))},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(0),n=a(83);function i(e,t,a){Object(r.useLayoutEffect)((function(){return t(Object(n.b)(e))}),[e]),Object(r.useEffect)((function(){return Object(n.c)(e,a())}))}},82:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r="0.7.0"},83:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return p}));var r,n=a(84),i=a.n(n),c=a(82),o="appVersion",l="puzztool";function s(e){return"".concat(l,"_").concat(e)}function u(){var e,t;(function(e,t){try{if(e)return 0!==i()(t,e)}catch(a){}return!0})(function(e){if(f())return window.localStorage.getItem(s(e));return null}(o),c.a)&&(p(),e=o,t=c.a,f()&&window.localStorage.setItem(s(e),t))}function f(){if(void 0===r){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),r=!0}catch(a){r=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}r&&u()}return r}function d(e){if(f()){var t=window.localStorage.getItem(s(e));if(null!==t)return JSON.parse(t)}return null}function m(e,t){f()&&window.localStorage.setItem(s(e),JSON.stringify(t))}function p(){f()&&window.localStorage.clear()}},84:function(e,t,a){var r,n,i;n=[],void 0===(i="function"===typeof(r=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,a,r=e.replace(/^v/,"").replace(/\+.*$/,""),n=(a="-",-1===(t=r).indexOf(a)?t.length:t.indexOf(a)),i=r.substring(0,n).split(".");return i.push(r.substring(n+1)),i}function a(e){return isNaN(Number(e))?e:Number(e)}function r(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function n(e,n){[e,n].forEach(r);for(var i=t(e),c=t(n),o=0;o<Math.max(i.length-1,c.length-1);o++){var l=parseInt(i[o]||0,10),s=parseInt(c[o]||0,10);if(l>s)return 1;if(s>l)return-1}var u=i[i.length-1],f=c[c.length-1];if(u&&f){var d=u.split(".").map(a),m=f.split(".").map(a);for(o=0;o<Math.max(d.length,m.length);o++){if(void 0===d[o]||"string"===typeof m[o]&&"number"===typeof d[o])return-1;if(void 0===m[o]||"string"===typeof d[o]&&"number"===typeof m[o])return 1;if(d[o]>m[o])return 1;if(m[o]>d[o])return-1}}else if(u||f)return u?-1:1;return 0}var i=[">",">=","=","<","<="],c={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return n.compare=function(e,t,a){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===i.indexOf(e))throw new TypeError("Invalid operator, expected one of "+i.join("|"))}(a);var r=n(e,t);return c[a].indexOf(r)>-1},n})?r.apply(t,n):r)||(e.exports=i)},86:function(e,t,a){"use strict";var r=a(1),n=a(0),i=a.n(n),c=a(3),o=a.n(c);t.a=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(r.a)({},t,{ref:a,className:o()(t.className,e)}))}))}},87:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(3),c=a.n(i),o=a(0),l=a.n(o),s=a(4),u=a(26),f=a(86),d=a(42),m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.variant,u=e.as,f=void 0===u?"img":u,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),m=Object(s.a)(a,"card-img");return l.a.createElement(f,Object(r.a)({ref:t,className:c()(o?m+"-"+o:m,i)},d))}));m.displayName="CardImg",m.defaultProps={variant:null};var p=m,b=Object(f.a)("h5"),v=Object(f.a)("h6"),y=Object(u.a)("card-body"),g=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,u=e.bg,f=e.text,m=e.border,p=e.body,b=e.children,v=e.as,g=void 0===v?"div":v,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(s.a)(a,"card"),j=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return l.a.createElement(d.a.Provider,{value:j},l.a.createElement(g,Object(r.a)({ref:t},O,{className:c()(i,h,u&&"bg-"+u,f&&"text-"+f,m&&"border-"+m)}),p?l.a.createElement(y,null,b):b))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=p,g.Title=Object(u.a)("card-title",{Component:b}),g.Subtitle=Object(u.a)("card-subtitle",{Component:v}),g.Body=y,g.Link=Object(u.a)("card-link",{Component:"a"}),g.Text=Object(u.a)("card-text",{Component:"p"}),g.Header=Object(u.a)("card-header"),g.Footer=Object(u.a)("card-footer"),g.ImgOverlay=Object(u.a)("card-img-overlay");t.a=g},88:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(3),c=a.n(i),o=a(0),l=a.n(o),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,o=e.toggle,u=e.vertical,f=e.className,d=e.as,m=void 0===d?"div":d,p=Object(n.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(s.a)(a,"btn-group"),v=b;return u&&(v=b+"-vertical"),l.a.createElement(m,Object(r.a)({},p,{ref:t,className:c()(f,v,i&&b+"-"+i,o&&b+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},90:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(3),c=a.n(i),o=a(0),l=a.n(o),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=Object(n.a)(e,["bsPrefix","className"]),u=Object(s.a)(a,"btn-toolbar");return l.a.createElement("div",Object(r.a)({},o,{ref:t,className:c()(i,u)}))}));u.displayName="ButtonToolbar",u.defaultProps={role:"toolbar"},t.a=u},95:function(e,t,a){"use strict";var r=a(0),n=a.n(r).a.createContext({controlId:void 0});t.a=n},98:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(3),c=a.n(i),o=a(0),l=a.n(o),s=a(13),u=a.n(s),f={type:u.a.string.isRequired,as:u.a.elementType},d=l.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,o=e.className,s=e.type,u=Object(n.a)(e,["as","className","type"]);return l.a.createElement(i,Object(r.a)({},u,{ref:t,className:c()(o,s&&s+"-feedback")}))}));d.displayName="Feedback",d.propTypes=f,d.defaultProps={type:"valid"},t.a=d},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){return Object(r.useCallback)((function(e){e&&e.focus()}),[])}}}]);
//# sourceMappingURL=12.1d850dc8.chunk.js.map