(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[4],{181:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(3),c=n.n(l),o=n(0),i=n.n(o),s=n(4),u=i.a.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,o=e.striped,u=e.bordered,d=e.borderless,m=e.hover,f=e.size,E=e.variant,v=e.responsive,b=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(s.a)(n,"table"),O=c()(l,p,E&&p+"-"+E,f&&p+"-"+f,o&&p+"-striped",u&&p+"-bordered",d&&p+"-borderless",m&&p+"-hover"),h=i.a.createElement("table",Object(a.a)({},b,{className:O,ref:t}));if(v){var y=p+"-responsive";return"string"===typeof v&&(y=y+"-"+v),i.a.createElement("div",{className:y},h)}return h}));t.a=u},182:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(19),c=n(76),o=n(10);t.a=function(e){var t=Object(l.a)(e,{activeKey:"onSelect"}),n=t.id,i=t.generateChildId,s=t.onSelect,u=t.activeKey,d=t.transition,m=t.mountOnEnter,f=t.unmountOnExit,E=t.children,v=Object(a.useMemo)((function(){return i||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,i]),b=Object(a.useMemo)((function(){return{onSelect:s,activeKey:u,transition:d,mountOnEnter:m||!1,unmountOnExit:f||!1,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[s,u,d,m,f,v]);return r.a.createElement(c.a.Provider,{value:b},r.a.createElement(o.a.Provider,{value:s||null},E))}},183:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(3),c=n.n(l),o=n(0),i=n.n(o),s=n(4),u=i.a.forwardRef((function(e,t){var n=e.bsPrefix,l=e.as,o=void 0===l?"div":l,u=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),m=Object(s.a)(n,"tab-content");return i.a.createElement(o,Object(a.a)({ref:t},d,{className:c()(u,m)}))}));t.a=u},184:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(3),c=n.n(l),o=n(0),i=n.n(o),s=n(4),u=n(76),d=n(10),m=n(185);var f=i.a.forwardRef((function(e,t){var n=function(e){var t=Object(o.useContext)(u.a);if(!t)return e;var n=t.activeKey,l=t.getControlledId,c=t.getControllerId,i=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==i.transition,f=Object(d.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=f?Object(d.b)(n)===f:e.active,id:l(e.eventKey),"aria-labelledby":c(e.eventKey),transition:s&&(e.transition||i.transition||m.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:i.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:i.unmountOnExit})}(e),l=n.bsPrefix,f=n.className,E=n.active,v=n.onEnter,b=n.onEntering,p=n.onEntered,O=n.onExit,h=n.onExiting,y=n.onExited,g=n.mountOnEnter,x=n.unmountOnExit,j=n.transition,C=n.as,N=void 0===C?"div":C,w=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),B=Object(s.a)(l,"tab-pane");if(!E&&!j&&x)return null;var k=i.a.createElement(N,Object(a.a)({},w,{ref:t,role:"tabpanel","aria-hidden":!E,className:c()(f,B,{active:E})}));return j&&(k=i.a.createElement(j,{in:E,onEnter:v,onEntering:b,onEntered:p,onExit:O,onExiting:h,onExited:y,mountOnEnter:g,unmountOnExit:x},k)),i.a.createElement(u.a.Provider,{value:null},i.a.createElement(d.a.Provider,{value:null},k))}));f.displayName="TabPane",t.a=f},185:function(e,t,n){"use strict";var a,r=n(1),l=n(2),c=n(3),o=n.n(c),i=n(77),s=n(0),u=n.n(s),d=n(32),m=n(78),f=((a={})[d.b]="show",a[d.a]="show",a),E=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,c=Object(l.a)(e,["className","children"]),E=Object(s.useCallback)((function(e){Object(m.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return u.a.createElement(d.e,Object(r.a)({ref:t,addEndListener:i.a},c,{onEnter:E}),(function(e,t){return u.a.cloneElement(a,Object(r.a)({},t,{className:o()("fade",n,a.props.className,f[e])}))}))}));E.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},E.displayName="Fade",t.a=E},186:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(0),c=n.n(l),o=(n(123),n(19)),i=n(49),s=n(48),u=n(47),d=n(182),m=n(183),f=n(184),E=n(80);function v(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,l=t.tabClassName,o=t.id;return null==n?null:c.a.createElement(u.a,{as:s.a,eventKey:a,disabled:r,id:o,className:l},n)}var b=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,l=t.onSelect,s=t.transition,u=t.mountOnEnter,b=t.unmountOnExit,p=t.children,O=t.activeKey,h=void 0===O?function(e){var t;return Object(E.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(p):O,y=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return c.a.createElement(d.a,{id:n,activeKey:h,onSelect:l,transition:s,mountOnEnter:u,unmountOnExit:b},c.a.createElement(i.a,Object(a.a)({},y,{role:"tablist",as:"nav"}),Object(E.b)(p,v)),c.a.createElement(m.a,null,Object(E.b)(p,(function(e){var t=Object(a.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,c.a.createElement(f.a,t)}))))};b.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},b.displayName="Tabs",t.a=b},187:function(e,t,n){"use strict";var a=n(9),r=n(0),l=n.n(r),c=n(182),o=n(183),i=n(184),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(l.a.Component);s.Container=c.a,s.Content=o.a,s.Pane=i.a,t.a=s},188:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(3),c=n.n(l),o=n(0),i=n.n(o),s=n(4),u=i.a.forwardRef((function(e,t){var n=e.bsPrefix,l=e.fluid,o=e.as,u=void 0===o?"div":o,d=e.className,m=Object(r.a)(e,["bsPrefix","fluid","as","className"]),f=Object(s.a)(n,"container"),E="string"===typeof l?"-"+l:"-fluid";return i.a.createElement(u,Object(a.a)({ref:t},m,{className:c()(d,l?""+f+E:f)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},189:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(3),c=n.n(l),o=n(0),i=n.n(o),s=n(4),u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,o=e.noGutters,d=e.as,m=void 0===d?"div":d,f=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),E=Object(s.a)(n,"row"),v=E+"-cols",b=[];return u.forEach((function(e){var t,n=f[e];delete f[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&b.push(""+v+a+"-"+t)})),i.a.createElement(m,Object(a.a)({ref:t},f,{className:c.a.apply(void 0,[l,E,o&&"no-gutters"].concat(b))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},190:function(e,t,n){"use strict";var a=n(1),r=n(2),l=n(3),c=n.n(l),o=n(0),i=n.n(o),s=n(4),u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,o=e.as,d=void 0===o?"div":o,m=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(s.a)(n,"col"),E=[],v=[];return u.forEach((function(e){var t,n,a,r=m[e];if(delete m[e],"object"===typeof r&&null!=r){var l=r.span;t=void 0===l||l,n=r.offset,a=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&E.push(!0===t?""+f+c:""+f+c+"-"+t),null!=a&&v.push("order"+c+"-"+a),null!=n&&v.push("offset"+c+"-"+n)})),E.length||E.push(f),i.a.createElement(d,Object(a.a)({},m,{ref:t,className:c.a.apply(void 0,[l].concat(E,v))}))}));d.displayName="Col",t.a=d},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(187),c=n(186),o=n(75),i=n(84),s=n(45),u=n(31),d=n(46),m=n(79),f=n(27),E=n(190),v=n(188),b=n(189);n(199);var p=function(e){const t="BrailleCell ".concat(e.character.get(e.mask)?"BrailleCell-selected":"");return r.a.createElement("button",{className:t,onClick:function(){const t=e.onClick;t&&t(e.mask)}},r.a.createElement("svg",{viewBox:"0 0 60 60"},r.a.createElement("circle",{cx:"30",cy:"30",r:"12"}),"Sorry, your browser does not support inline SVG."))};n(200);var O=function(e){function t(t){const n=e.onClick;n&&n(t)}function n(n){return r.a.createElement(p,{character:e.character,mask:n,onClick:t})}return r.a.createElement("div",{className:"BrailleCharacter"},n(s.BrailleDot.UpperLeft),n(s.BrailleDot.UpperRight),n(s.BrailleDot.MiddleLeft),n(s.BrailleDot.MiddleRight),n(s.BrailleDot.LowerLeft),n(s.BrailleDot.LowerRight))};n(201);const h={append:i.a,backspace:i.b,clear:i.c,setEncoding:i.f,space:i.g};var y=Object(o.b)(e=>({encoding:e.encoding.braille.encoding,stream:e.encoding.braille.stream}),h)((function(e){function t(t){const n=new s.BrailleCharacter(e.encoding);n.toggle(t),e.setEncoding(n.encoding)}function n(){const t=new s.BrailleCharacter(e.encoding);t.valid()?e.append(t.valueOf()):e.space()}Object(a.useEffect)(()=>{function a(t){if(t.defaultPrevented)return;let n=!1;8===t.keyCode&&(e.backspace(),n=!0),n&&t.preventDefault()}function r(e){if(e.defaultPrevented)return;let a=!1;13===e.keyCode?(n(),a=!0):e.charCode>=49&&e.charCode<=54&&t(Math.pow(2,e.charCode-49)),a&&e.preventDefault()}return document.addEventListener("keydown",a),document.addEventListener("keypress",r),()=>{document.removeEventListener("keydown",a),document.removeEventListener("keypress",r)}});const l=new s.BrailleCharacter(e.encoding);return r.a.createElement("div",{className:"BrailleStream"},r.a.createElement(f.a,{className:"BrailleStream-input"},r.a.createElement(f.a.Header,null,"Input"),r.a.createElement(f.a.Body,null,r.a.createElement(v.a,{fluid:!0},r.a.createElement(b.a,null,r.a.createElement(E.a,{xs:"auto",sm:"auto",md:"auto"},r.a.createElement(O,{character:l,onClick:t})),r.a.createElement(E.a,{className:"BrailleStream-view"},l.toString()||"?")),r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(u.a,{onClick:function(){e.backspace()}},"\u232b")),r.a.createElement(d.a,null,r.a.createElement(u.a,{onClick:n},"Next")),r.a.createElement(d.a,null,r.a.createElement(u.a,{onClick:function(){e.clear()},variant:"danger"},"Clear")))))))),r.a.createElement(f.a,null,r.a.createElement(f.a.Header,null,"Output"),r.a.createElement(f.a.Body,null,r.a.createElement("pre",{className:"BrailleStream-output"},new s.BrailleStream(e.stream).toString(),r.a.createElement("span",{className:"blinking-cursor"},"|")))))})),g=n(181);var x=function(e){function t(t,n,a){return r.a.createElement("use",{transform:"translate(".concat(n,", ").concat(a,")"),xlinkHref:e.character.get(t)?"#FullDot":"#EmptyDot"})}return r.a.createElement("svg",{width:e.width,viewBox:"0 0 34 52"},r.a.createElement("defs",null,r.a.createElement("g",{id:"FullDot"},r.a.createElement("circle",{r:"6",fill:"black",cx:"0",cy:"0"})),r.a.createElement("g",{id:"EmptyDot"},r.a.createElement("circle",{r:"6",fill:"transparent",strokeWidth:"1",stroke:"black",cx:"0",cy:"0"}))),t(s.BrailleDot.UpperLeft,8,8),t(s.BrailleDot.UpperRight,26,8),t(s.BrailleDot.MiddleLeft,8,26),t(s.BrailleDot.MiddleRight,26,26),t(s.BrailleDot.LowerLeft,8,44),t(s.BrailleDot.LowerRight,26,44),"Sorry, your browser does not support inline SVG.")};n(202);var j=function(){const e=(new s.BrailleCharacter).getPotentialMatches();return r.a.createElement("div",{className:"BrailleTable"},r.a.createElement(g.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Character"),r.a.createElement("th",null,"Braille"))),r.a.createElement("tbody",null,e.map(e=>r.a.createElement("tr",{key:"".concat(e.encoding,"-").concat(e.display)},r.a.createElement("td",null,e.display),r.a.createElement("td",null,r.a.createElement(x,{width:40,character:new s.BrailleCharacter(e.encoding,e.category)})))))))};const C={selectTab:i.e},N=Object(o.b)(e=>({selectedTab:e.encoding.braille.selectedTab}),C);t.default=N((function(e){return r.a.createElement(c.a,{activeKey:e.selectedTab,id:"Braille-tabs",onSelect:e.selectTab},r.a.createElement(l.a,{eventKey:"1",title:"Value"},r.a.createElement(y,null)),r.a.createElement(l.a,{eventKey:"2",title:"Reference"},r.a.createElement(j,null)))}))}}]);
//# sourceMappingURL=4.2d377aa0.chunk.js.map