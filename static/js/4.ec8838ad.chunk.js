(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[4],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(109);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n(106);function o(e,t,n){Object(a.useLayoutEffect)(()=>t(Object(r.b)(e)),[e]),Object(a.useEffect)(()=>Object(r.c)(e,n()))}},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a="1.0.0"},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f}));var a=n(107),r=n.n(a),o=n(105);let c;function i(e){return"".concat("puzztool","_").concat(e)}function l(){var e,t;(function(e,t){try{if(e)return 0!==r()(t,e)}catch(n){}return!0})(function(e){if(u())return window.localStorage.getItem(i(e));return null}("appVersion"),o.a)&&(f(),e="appVersion",t=o.a,u()&&window.localStorage.setItem(i(e),t))}function u(){if(void 0===c){const t=window.localStorage,n="__storage_test__";try{t.setItem(n,n),t.removeItem(n),c=!0}catch(e){c=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}c&&l()}return c}function s(e){if(u()){const t=window.localStorage.getItem(i(e));if(null!==t)return JSON.parse(t)}return null}function d(e,t){u()&&window.localStorage.setItem(i(e),JSON.stringify(t))}function f(){u()&&window.localStorage.clear()}},107:function(e,t,n){var a,r,o;r=[],void 0===(o="function"===typeof(a=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,n,a=e.replace(/^v/,"").replace(/\+.*$/,""),r=(n="-",-1===(t=a).indexOf(n)?t.length:t.indexOf(n)),o=a.substring(0,r).split(".");return o.push(a.substring(r+1)),o}function n(e){return isNaN(Number(e))?e:Number(e)}function a(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(a);for(var o=t(e),c=t(r),i=0;i<Math.max(o.length-1,c.length-1);i++){var l=parseInt(o[i]||0,10),u=parseInt(c[i]||0,10);if(l>u)return 1;if(u>l)return-1}var s=o[o.length-1],d=c[c.length-1];if(s&&d){var f=s.split(".").map(n),m=d.split(".").map(n);for(i=0;i<Math.max(f.length,m.length);i++){if(void 0===f[i]||"string"===typeof m[i]&&"number"===typeof f[i])return-1;if(void 0===m[i]||"string"===typeof f[i]&&"number"===typeof m[i])return 1;if(f[i]>m[i])return 1;if(m[i]>f[i])return-1}}else if(s||d)return s?-1:1;return 0}var o=[">",">=","=","<","<="],c={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.validate=function(t){return"string"===typeof t&&e.test(t)},r.compare=function(e,t,n){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(n);var a=r(e,t);return c[n].indexOf(a)>-1},r})?a.apply(t,r):a)||(e.exports=o)},109:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}n.d(t,"a",(function(){return r}))},110:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),c=n(4),i=n.n(c);t.a=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))}))}},111:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=n(40),d=n(110),f=n(57),m=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.variant,s=e.as,d=void 0===s?"img":s,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(u.a)(n,"card-img");return l.a.createElement(d,Object(a.a)({ref:t,className:c()(i?m+"-"+i:m,o)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var v=m,b=Object(d.a)("h5"),p=Object(d.a)("h6"),E=Object(s.a)("card-body"),O=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.bg,d=e.text,m=e.border,v=e.body,b=e.children,p=e.as,O=void 0===p?"div":p,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(u.a)(n,"card"),g=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return l.a.createElement(f.a.Provider,{value:g},l.a.createElement(O,Object(a.a)({ref:t},y,{className:c()(o,h,s&&"bg-"+s,d&&"text-"+d,m&&"border-"+m)}),v?l.a.createElement(E,null,b):b))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=v,O.Title=Object(s.a)("card-title",{Component:b}),O.Subtitle=Object(s.a)("card-subtitle",{Component:p}),O.Body=E,O.Link=Object(s.a)("card-link",{Component:"a"}),O.Text=Object(s.a)("card-text",{Component:"p"}),O.Header=Object(s.a)("card-header"),O.Footer=Object(s.a)("card-footer"),O.ImgOverlay=Object(s.a)("card-img-overlay");t.a=O},112:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.size,i=e.toggle,s=e.vertical,d=e.className,f=e.as,m=void 0===f?"div":f,v=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(u.a)(n,"btn-group"),p=b;return s&&(p=b+"-vertical"),l.a.createElement(m,Object(a.a)({},v,{ref:t,className:c()(d,p,o&&b+"-"+o,i&&b+"-toggle")}))}));s.displayName="ButtonGroup",s.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=s},113:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.striped,s=e.bordered,d=e.borderless,f=e.hover,m=e.size,v=e.variant,b=e.responsive,p=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=Object(u.a)(n,"table"),O=c()(o,E,v&&E+"-"+v,m&&E+"-"+m,i&&E+"-striped",s&&E+"-bordered",d&&E+"-borderless",f&&E+"-hover"),y=l.a.createElement("table",Object(a.a)({},p,{className:O,ref:t}));if(b){var h=E+"-responsive";return"string"===typeof b&&(h=h+"-"+b),l.a.createElement("div",{className:h},y)}return y}));t.a=s},114:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=Object(r.a)(e,["bsPrefix","className"]),s=Object(u.a)(n,"btn-toolbar");return l.a.createElement("div",Object(a.a)({},i,{ref:t,className:c()(o,s)}))}));s.displayName="ButtonToolbar",s.defaultProps={role:"toolbar"},t.a=s},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function o(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}function c(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}},116:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(23),c=n(58),i=n(9);t.a=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,l=t.generateChildId,u=t.onSelect,s=t.activeKey,d=t.transition,f=t.mountOnEnter,m=t.unmountOnExit,v=t.children,b=Object(a.useMemo)((function(){return l||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,l]),p=Object(a.useMemo)((function(){return{onSelect:u,activeKey:s,transition:d,mountOnEnter:f,unmountOnExit:m,getControlledId:function(e){return b(e,"tabpane")},getControllerId:function(e){return b(e,"tab")}}}),[u,s,d,f,m,b]);return r.a.createElement(c.a.Provider,{value:p},r.a.createElement(i.a.Provider,{value:u},v))}},117:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,i=void 0===o?"div":o,s=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),f=Object(u.a)(n,"tab-content");return l.a.createElement(i,Object(a.a)({ref:t},d,{className:c()(s,f)}))}));t.a=s},118:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=n(58),d=n(9),f=n(120);var m=l.a.forwardRef((function(e,t){var n=function(e){var t=Object(i.useContext)(s.a);if(!t)return e;var n=t.activeKey,o=t.getControlledId,c=t.getControllerId,l=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==l.transition,m=Object(d.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=m?Object(d.b)(n)===m:e.active,id:o(e.eventKey),"aria-labelledby":c(e.eventKey),transition:u&&(e.transition||l.transition||f.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),o=n.bsPrefix,m=n.className,v=n.active,b=n.onEnter,p=n.onEntering,E=n.onEntered,O=n.onExit,y=n.onExiting,h=n.onExited,g=n.mountOnEnter,j=n.unmountOnExit,x=n.transition,w=n.as,N=void 0===w?"div":w,C=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),B=Object(u.a)(o,"tab-pane");if(!v&&!x&&j)return null;var S=l.a.createElement(N,Object(a.a)({},C,{ref:t,role:"tabpanel","aria-hidden":!v,className:c()(m,B,{active:v})}));return x&&(S=l.a.createElement(x,{in:v,onEnter:b,onEntering:p,onEntered:E,onExit:O,onExiting:y,onExited:h,mountOnEnter:g,unmountOnExit:j},S)),l.a.createElement(s.a.Provider,{value:null},l.a.createElement(d.a.Provider,{value:null},S))}));m.displayName="TabPane",t.a=m},120:function(e,t,n){"use strict";var a,r=n(1),o=n(3),c=n(4),i=n.n(c),l=n(59),u=n(0),s=n.n(u),d=n(31),f=n(60),m=((a={})[d.b]="show",a[d.a]="show",a),v=s.a.forwardRef((function(e,t){var n=e.className,a=e.children,c=Object(o.a)(e,["className","children"]),v=Object(u.useCallback)((function(e){Object(f.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return s.a.createElement(d.e,Object(r.a)({ref:t,addEndListener:l.a},c,{onEnter:v}),(function(e,t){return s.a.cloneElement(a,Object(r.a)({},t,{className:i()("fade",n,a.props.className,m[e])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",t.a=v},125:function(e,t,n){"use strict";var a=n(10),r=n(0),o=n.n(r),c=n(116),i=n(117),l=n(118),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);u.Container=c.a,u.Content=i.a,u.Pane=l.a,t.a=u},126:function(e,t,n){"use strict";var a=n(103),r=n(0),o=n.n(r),c=n(1),i=n(3),l=(n(74),n(23)),u=n(47),s=n(46),d=n(45),f=n(116),m=n(117),v=n(118),b=n(115);function p(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,c=t.tabClassName;return null==n?null:o.a.createElement(d.a,{as:s.a,eventKey:a,disabled:r,className:c},n)}var E=o.a.forwardRef((function(e,t){var n=Object(l.a)(e,{activeKey:"onSelect"}),a=n.id,r=n.onSelect,s=n.transition,d=n.mountOnEnter,E=n.unmountOnExit,O=n.children,y=n.activeKey,h=void 0===y?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(O):y,g=Object(i.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(f.a,{ref:t,id:a,activeKey:h,onSelect:r,transition:s,mountOnEnter:d,unmountOnExit:E},o.a.createElement(u.a,Object(c.a)({},g,{role:"tablist",as:"nav"}),Object(b.b)(O,p)),o.a.createElement(m.a,null,Object(b.b)(O,(function(e){var t=Object(c.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(v.a,t)}))))}));E.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},E.displayName="Tabs";var O=E,y=n(104);t.a=function(e){const t=Object(r.useState)(),n=Object(a.a)(t,2),c=n[0],i=n[1];return Object(y.a)(e.id,e=>{e&&i(e.activeKey)},()=>({activeKey:c})),o.a.createElement(O,{activeKey:c,defaultActiveKey:e.defaultActiveKey,id:e.id,onSelect:function(e){i(e)}},e.children)}},129:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,i=e.as,s=void 0===i?"div":i,d=e.className,f=Object(r.a)(e,["bsPrefix","fluid","as","className"]),m=Object(u.a)(n,"container"),v="string"===typeof o?"-"+o:"-fluid";return l.a.createElement(s,Object(a.a)({ref:t},f,{className:c()(d,o?""+m+v:m)}))}));s.displayName="Container",s.defaultProps={fluid:!1},t.a=s},130:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.noGutters,d=e.as,f=void 0===d?"div":d,m=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(u.a)(n,"row"),b=v+"-cols",p=[];return s.forEach((function(e){var t,n=m[e];delete m[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&p.push(""+b+a+"-"+t)})),l.a.createElement(f,Object(a.a)({ref:t},m,{className:c.a.apply(void 0,[o,v,i&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},131:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(4),c=n.n(o),i=n(0),l=n.n(i),u=n(5),s=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.as,d=void 0===i?"div":i,f=Object(r.a)(e,["bsPrefix","className","as"]),m=Object(u.a)(n,"col"),v=[],b=[];return s.forEach((function(e){var t,n,a,r=f[e];if(delete f[e],null!=r&&"object"===typeof r){var o=r.span;t=void 0===o||o,n=r.offset,a=r.order}else t=r;var c="xs"!==e?"-"+e:"";null!=t&&v.push(!0===t?""+m+c:""+m+c+"-"+t),null!=a&&b.push("order"+c+"-"+a),null!=n&&b.push("offset"+c+"-"+n)})),v.length||v.push(m),l.a.createElement(d,Object(a.a)({},f,{ref:t,className:c.a.apply(void 0,[o].concat(v,b))}))}));d.displayName="Col",t.a=d},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(125),c=n(103),i=n(108),l=n(56),u=n(112),s=n(114),d=n(111),f=n(131),m=n(129),v=n(130),b=n(104);n(192);var p=function(e){const t="BrailleCell ".concat(e.character.get(e.mask)?"BrailleCell-selected":"");return r.a.createElement("button",{className:t,onClick:function(){const t=e.onClick;t&&t(e.mask)}},r.a.createElement("svg",{viewBox:"0 0 60 60"},r.a.createElement("circle",{cx:"30",cy:"30",r:"12"}),"Sorry, your browser does not support inline SVG."))};n(193);var E=function(e){function t(t){const n=e.onClick;n&&n(t)}function n(n){return r.a.createElement(p,{character:e.character,mask:n,onClick:t})}return r.a.createElement("div",{className:"BrailleCharacter"},n(i.BrailleDot.UpperLeft),n(i.BrailleDot.UpperRight),n(i.BrailleDot.MiddleLeft),n(i.BrailleDot.MiddleRight),n(i.BrailleDot.LowerLeft),n(i.BrailleDot.LowerRight))};n(194);var O=function(){const e=Object(a.useState)(new i.BrailleStream),t=Object(c.a)(e,2),n=t[0],o=t[1],p=Object(a.useState)(new i.BrailleCharacter),O=Object(c.a)(p,2),y=O[0],h=O[1];function g(e){const t=new i.BrailleCharacter(y.encoding,y.category);t.toggle(e),h(t)}function j(){const e=new i.BrailleStream(n.chars);e.backspace(),o(e)}function x(){const e=new i.BrailleStream(n.chars);y.valid()?(e.append(y),h(new i.BrailleCharacter)):e.space(),o(e)}return Object(a.useEffect)(()=>{function e(e){if(e.defaultPrevented)return;let t=!1;8===e.keyCode&&(j(),t=!0),t&&e.preventDefault()}function t(e){if(e.defaultPrevented)return;let t=!1;13===e.keyCode?(x(),t=!0):e.charCode>=49&&e.charCode<=54&&g(Math.pow(2,e.charCode-49)),t&&e.preventDefault()}return document.addEventListener("keydown",e),document.addEventListener("keypress",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keypress",t)}}),Object(b.a)("BrailleStream",e=>{e&&(h(new i.BrailleCharacter(e.character)),o(new i.BrailleStream(e.stream)))},()=>({character:y.encoding,stream:n.chars})),r.a.createElement("div",{className:"BrailleStream"},r.a.createElement(d.a,{className:"BrailleStream-input"},r.a.createElement(d.a.Header,null,"Input"),r.a.createElement(d.a.Body,null,r.a.createElement(m.a,{fluid:!0},r.a.createElement(v.a,null,r.a.createElement(f.a,{xs:"auto",sm:"auto",md:"auto"},r.a.createElement(E,{character:y,onClick:g})),r.a.createElement(f.a,{className:"BrailleStream-view"},y.toString()||"?")),r.a.createElement(v.a,null,r.a.createElement(f.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(l.a,{onClick:j},"\u232b")),r.a.createElement(u.a,null,r.a.createElement(l.a,{onClick:x},"Next")),r.a.createElement(u.a,null,r.a.createElement(l.a,{onClick:function(){h(new i.BrailleCharacter),o(new i.BrailleStream)},variant:"danger"},"Clear")))))))),r.a.createElement(d.a,null,r.a.createElement(d.a.Header,null,"Output"),r.a.createElement(d.a.Body,null,r.a.createElement("pre",{className:"BrailleStream-output"},n.toString(),r.a.createElement("span",{className:"blinking-cursor"},"|")))))},y=n(113);var h=function(e){function t(t,n,a){return r.a.createElement("use",{transform:"translate(".concat(n,", ").concat(a,")"),xlinkHref:e.character.get(t)?"#FullDot":"#EmptyDot"})}return r.a.createElement("svg",{width:e.width,viewBox:"0 0 34 52"},r.a.createElement("defs",null,r.a.createElement("g",{id:"FullDot"},r.a.createElement("circle",{r:"6",fill:"black",cx:"0",cy:"0"})),r.a.createElement("g",{id:"EmptyDot"},r.a.createElement("circle",{r:"6",fill:"transparent",strokeWidth:"1",stroke:"black",cx:"0",cy:"0"}))),t(i.BrailleDot.UpperLeft,8,8),t(i.BrailleDot.UpperRight,26,8),t(i.BrailleDot.MiddleLeft,8,26),t(i.BrailleDot.MiddleRight,26,26),t(i.BrailleDot.LowerLeft,8,44),t(i.BrailleDot.LowerRight,26,44),"Sorry, your browser does not support inline SVG.")};n(195);var g=function(){const e=(new i.BrailleCharacter).getPotentialMatches();return r.a.createElement("div",{className:"BrailleTable"},r.a.createElement(y.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Character"),r.a.createElement("th",null,"Braille"))),r.a.createElement("tbody",null,e.map(e=>r.a.createElement("tr",{key:"".concat(e.encoding,"-").concat(e.display)},r.a.createElement("td",null,e.display),r.a.createElement("td",null,r.a.createElement(h,{width:40,character:new i.BrailleCharacter(e.encoding,e.category)})))))))},j=n(126);t.default=function(){return r.a.createElement(j.a,{id:"Braille-tabs"},r.a.createElement(o.a,{eventKey:1,title:"Value"},r.a.createElement(O,null)),r.a.createElement(o.a,{eventKey:2,title:"Reference"},r.a.createElement(g,null)))}}}]);
//# sourceMappingURL=4.ec8838ad.chunk.js.map