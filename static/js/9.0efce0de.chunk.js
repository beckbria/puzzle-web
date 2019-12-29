(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[9],{100:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),i=a.n(c),o=a(0),u=a.n(o),l=(a(46),a(98)),s=a(95),f=a(4),d=u.a.forwardRef((function(e,t){var a,c,l=e.bsPrefix,d=e.type,m=e.size,p=e.id,b=e.className,v=e.isValid,y=e.isInvalid,g=e.plaintext,h=e.readOnly,O=e.as,j=void 0===O?"input":O,E=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=Object(o.useContext)(s.a).controlId;if(l=Object(f.a)(l,"form-control"),g)(c={})[l+"-plaintext"]=!0,a=c;else if("file"===d){var N;(N={})[l+"-file"]=!0,a=N}else{var w;(w={})[l]=!0,w[l+"-"+m]=m,a=w}return u.a.createElement(j,Object(n.a)({},E,{type:d,ref:t,readOnly:h,id:p||x,className:i()(b,a,v&&"is-valid",y&&"is-invalid")}))}));d.displayName="FormControl",d.Feedback=l.a,t.a=d},103:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),i=a.n(c),o=a(0),u=a.n(o),l=a(41),s=function(){},f=u.a.forwardRef((function(e,t){var a=e.children,c=e.name,f=e.className,d=e.checked,m=e.type,p=e.onChange,b=e.value,v=e.disabled,y=e.inputRef,g=Object(r.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),h=Object(o.useState)(!1),O=h[0],j=h[1],E=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&j(!0)}),[]),x=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&j(!1)}),[]);return u.a.createElement(l.a,Object(n.a)({},g,{ref:t,className:i()(f,O&&"focus",v&&"disabled"),type:null,active:!!d,as:"label"}),u.a.createElement("input",{name:c,type:m,value:b,ref:y,autoComplete:"off",checked:!!d,disabled:!!v,onFocus:E,onBlur:x,onChange:p||s}),a)}));f.displayName="ToggleButton",t.a=f},108:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),i=a.n(c),o=a(27),u=a.n(o),l=a(14),s=a(16),f=a(91),d=a(88),m=a(103),p=i.a.forwardRef((function(e,t){var a=Object(l.a)(e,{value:"onChange"}),c=a.children,o=a.type,m=a.name,p=a.value,b=a.onChange,v=Object(r.a)(a,["children","type","name","value","onChange"]),y=function(){return null==p?[]:[].concat(p)};return"radio"!==o||m||u()(!1),i.a.createElement(d.a,Object(n.a)({},v,{ref:t,toggle:!0}),Object(f.b)(c,(function(e){var t=y(),a=e.props,n=a.value,r=a.onChange;return i.a.cloneElement(e,{type:o,name:e.name||m,checked:-1!==t.indexOf(n),onChange:Object(s.a)(r,(function(e){return function(e,t){var a=y(),n=-1!==a.indexOf(e);"radio"!==o?b(n?a.filter((function(t){return t!==e})):[].concat(a,[e]),t):n||b(e,t)}(n,e)}))})})))}));p.defaultProps={type:"radio"},p.Button=m.a,t.a=p},117:function(e,t,a){"use strict";var n=a(80),r=a(0),c=a.n(r),i=a(41),o=a(88),u=a(90),l=a(87),s=a(100),f=a(103),d=a(108),m=a(99),p=a(81);a(118);t.a=function(e){var t=Object(m.a)(),a=Object(r.useState)(2),b=Object(n.a)(a,2),v=b[0],y=b[1],g=Object(r.useState)(""),h=Object(n.a)(g,2),O=h[0],j=h[1],E=Object(r.useState)(""),x=Object(n.a)(E,2),N=x[0],w=x[1];return Object(p.a)(e.id,(function(e){e&&(y(e.conversion),j(e.key),w(e.text))}),(function(){return{conversion:v,key:O,text:N}})),c.a.createElement("div",{className:"KeyedCipherStream"},c.a.createElement(l.a,{className:"KeyedCipherStream-input"},c.a.createElement(l.a.Header,null,e.prompt),c.a.createElement(l.a.Body,null,c.a.createElement(s.a,{onChange:function(e){w(e.currentTarget.value)},placeholder:"Text",ref:t,value:N}),c.a.createElement(s.a,{onChange:function(e){j(e.currentTarget.value)},placeholder:"Key",value:O}),c.a.createElement(u.a,null,c.a.createElement(d.a,{name:"KeyedCipherStream-conversion",onChange:function(e){y(e)},type:"radio",value:v},c.a.createElement(f.a,{value:1},"Encrypt"),c.a.createElement(f.a,{value:2},"Decrypt")),c.a.createElement(o.a,null,c.a.createElement(i.a,{onClick:function(e){y(2),j(""),w("")},variant:"danger"},"Clear"))))),c.a.createElement(l.a,{className:"KeyedCipherStream-output"},c.a.createElement(l.a.Header,null,"Output"),c.a.createElement(l.a.Body,null,c.a.createElement("pre",null,(e.cipher.key=O,e.cipher.text=N,(1===v?e.cipher.encrypt():e.cipher.decrypt())||" ")))))}},118:function(e,t,a){},190:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(85),i=a(117);var o=function(e){return r.a.createElement(i.a,{cipher:new c.VigenereString,id:"VigenereStream",prompt:e.prompt})};a(190);t.default=function(){return r.a.createElement("div",{className:"Vigenere"},r.a.createElement("div",{className:"Vigenere-info"},r.a.createElement("h2",null,"Vigenere Cipher"),r.a.createElement("p",null,'A Vigenere cipher is a type of substitution cipher.  It shifts each letter by using a keyword. For example, a the keyword "ace" would shift the first letter by 1, second by 3, and third by 5.')),r.a.createElement(o,{prompt:"Enter the text you want to convert, and the keyword to shift the text by."}))}},80:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(u){r=!0,c=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return n}))},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a(83);function c(e,t,a){Object(n.useLayoutEffect)((function(){return t(Object(r.b)(e))}),[e]),Object(n.useEffect)((function(){return Object(r.c)(e,a())}))}},82:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="0.7.0"},83:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return p}));var n,r=a(84),c=a.n(r),i=a(82),o="appVersion",u="puzztool";function l(e){return"".concat(u,"_").concat(e)}function s(){var e,t;(function(e,t){try{if(e)return 0!==c()(t,e)}catch(a){}return!0})(function(e){if(f())return window.localStorage.getItem(l(e));return null}(o),i.a)&&(p(),e=o,t=i.a,f()&&window.localStorage.setItem(l(e),t))}function f(){if(void 0===n){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),n=!0}catch(a){n=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}n&&s()}return n}function d(e){if(f()){var t=window.localStorage.getItem(l(e));if(null!==t)return JSON.parse(t)}return null}function m(e,t){f()&&window.localStorage.setItem(l(e),JSON.stringify(t))}function p(){f()&&window.localStorage.clear()}},84:function(e,t,a){var n,r,c;r=[],void 0===(c="function"===typeof(n=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,a,n=e.replace(/^v/,"").replace(/\+.*$/,""),r=(a="-",-1===(t=n).indexOf(a)?t.length:t.indexOf(a)),c=n.substring(0,r).split(".");return c.push(n.substring(r+1)),c}function a(e){return isNaN(Number(e))?e:Number(e)}function n(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(n);for(var c=t(e),i=t(r),o=0;o<Math.max(c.length-1,i.length-1);o++){var u=parseInt(c[o]||0,10),l=parseInt(i[o]||0,10);if(u>l)return 1;if(l>u)return-1}var s=c[c.length-1],f=i[i.length-1];if(s&&f){var d=s.split(".").map(a),m=f.split(".").map(a);for(o=0;o<Math.max(d.length,m.length);o++){if(void 0===d[o]||"string"===typeof m[o]&&"number"===typeof d[o])return-1;if(void 0===m[o]||"string"===typeof d[o]&&"number"===typeof m[o])return 1;if(d[o]>m[o])return 1;if(m[o]>d[o])return-1}}else if(s||f)return s?-1:1;return 0}var c=[">",">=","=","<","<="],i={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.compare=function(e,t,a){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===c.indexOf(e))throw new TypeError("Invalid operator, expected one of "+c.join("|"))}(a);var n=r(e,t);return i[a].indexOf(n)>-1},r})?n.apply(t,r):n)||(e.exports=c)},86:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),i=a(3),o=a.n(i);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(n.a)({},t,{ref:a,className:o()(t.className,e)}))}))}},87:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),i=a.n(c),o=a(0),u=a.n(o),l=a(4),s=a(26),f=a(86),d=a(42),m=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.variant,s=e.as,f=void 0===s?"img":s,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(l.a)(a,"card-img");return u.a.createElement(f,Object(n.a)({ref:t,className:i()(o?m+"-"+o:m,c)},d))}));m.displayName="CardImg",m.defaultProps={variant:null};var p=m,b=Object(f.a)("h5"),v=Object(f.a)("h6"),y=Object(s.a)("card-body"),g=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.bg,f=e.text,m=e.border,p=e.body,b=e.children,v=e.as,g=void 0===v?"div":v,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(l.a)(a,"card"),j=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return u.a.createElement(d.a.Provider,{value:j},u.a.createElement(g,Object(n.a)({ref:t},h,{className:i()(c,O,s&&"bg-"+s,f&&"text-"+f,m&&"border-"+m)}),p?u.a.createElement(y,null,b):b))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=p,g.Title=Object(s.a)("card-title",{Component:b}),g.Subtitle=Object(s.a)("card-subtitle",{Component:v}),g.Body=y,g.Link=Object(s.a)("card-link",{Component:"a"}),g.Text=Object(s.a)("card-text",{Component:"p"}),g.Header=Object(s.a)("card-header"),g.Footer=Object(s.a)("card-footer"),g.ImgOverlay=Object(s.a)("card-img-overlay");t.a=g},88:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),i=a.n(c),o=a(0),u=a.n(o),l=a(4),s=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.size,o=e.toggle,s=e.vertical,f=e.className,d=e.as,m=void 0===d?"div":d,p=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(l.a)(a,"btn-group"),v=b;return s&&(v=b+"-vertical"),u.a.createElement(m,Object(n.a)({},p,{ref:t,className:i()(f,v,c&&b+"-"+c,o&&b+"-toggle")}))}));s.displayName="ButtonGroup",s.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=s},90:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),i=a.n(c),o=a(0),u=a.n(o),l=a(4),s=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=Object(r.a)(e,["bsPrefix","className"]),s=Object(l.a)(a,"btn-toolbar");return u.a.createElement("div",Object(n.a)({},o,{ref:t,className:i()(c,s)}))}));s.displayName="ButtonToolbar",s.defaultProps={role:"toolbar"},t.a=s},91:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);function c(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}function i(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({controlId:void 0});t.a=r},98:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),i=a.n(c),o=a(0),u=a.n(o),l=a(13),s=a.n(l),f={type:s.a.string.isRequired,as:s.a.elementType},d=u.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,o=e.className,l=e.type,s=Object(r.a)(e,["as","className","type"]);return u.a.createElement(c,Object(n.a)({},s,{ref:t,className:i()(o,l&&l+"-feedback")}))}));d.displayName="Feedback",d.propTypes=f,d.defaultProps={type:"valid"},t.a=d},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useCallback)((function(e){e&&e.focus()}),[])}}}]);
//# sourceMappingURL=9.0efce0de.chunk.js.map