(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[5],{181:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(3),o=n.n(c),l=n(0),s=n.n(l),i=n(4),u=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,l=e.striped,u=e.bordered,m=e.borderless,d=e.hover,E=e.size,b=e.variant,v=e.responsive,p=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=Object(i.a)(n,"table"),O=o()(c,f,b&&f+"-"+b,E&&f+"-"+E,l&&f+"-striped",u&&f+"-bordered",m&&f+"-borderless",d&&f+"-hover"),y=s.a.createElement("table",Object(a.a)({},p,{className:O,ref:t}));if(v){var g=f+"-responsive";return"string"===typeof v&&(g=g+"-"+v),s.a.createElement("div",{className:g},y)}return y}));t.a=u},182:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(19),o=n(76),l=n(10);t.a=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.id,s=t.generateChildId,i=t.onSelect,u=t.activeKey,m=t.transition,d=t.mountOnEnter,E=t.unmountOnExit,b=t.children,v=Object(a.useMemo)((function(){return s||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,s]),p=Object(a.useMemo)((function(){return{onSelect:i,activeKey:u,transition:m,mountOnEnter:d||!1,unmountOnExit:E||!1,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[i,u,m,d,E,v]);return r.a.createElement(o.a.Provider,{value:p},r.a.createElement(l.a.Provider,{value:i||null},b))}},183:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(3),o=n.n(c),l=n(0),s=n.n(l),i=n(4),u=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.as,l=void 0===c?"div":c,u=e.className,m=Object(r.a)(e,["bsPrefix","as","className"]),d=Object(i.a)(n,"tab-content");return s.a.createElement(l,Object(a.a)({ref:t},m,{className:o()(u,d)}))}));t.a=u},184:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(3),o=n.n(c),l=n(0),s=n.n(l),i=n(4),u=n(76),m=n(10),d=n(185);var E=s.a.forwardRef((function(e,t){var n=function(e){var t=Object(l.useContext)(u.a);if(!t)return e;var n=t.activeKey,c=t.getControlledId,o=t.getControllerId,s=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),i=!1!==e.transition&&!1!==s.transition,E=Object(m.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=E?Object(m.b)(n)===E:e.active,id:c(e.eventKey),"aria-labelledby":o(e.eventKey),transition:i&&(e.transition||s.transition||d.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:s.unmountOnExit})}(e),c=n.bsPrefix,E=n.className,b=n.active,v=n.onEnter,p=n.onEntering,f=n.onEntered,O=n.onExit,y=n.onExiting,g=n.onExited,h=n.mountOnEnter,S=n.unmountOnExit,k=n.transition,x=n.as,C=void 0===x?"div":x,N=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),j=Object(i.a)(c,"tab-pane");if(!b&&!k&&S)return null;var M=s.a.createElement(C,Object(a.a)({},N,{ref:t,role:"tabpanel","aria-hidden":!b,className:o()(E,j,{active:b})}));return k&&(M=s.a.createElement(k,{in:b,onEnter:v,onEntering:p,onEntered:f,onExit:O,onExiting:y,onExited:g,mountOnEnter:h,unmountOnExit:S},M)),s.a.createElement(u.a.Provider,{value:null},s.a.createElement(m.a.Provider,{value:null},M))}));E.displayName="TabPane",t.a=E},185:function(e,t,n){"use strict";var a,r=n(1),c=n(2),o=n(3),l=n.n(o),s=n(77),i=n(0),u=n.n(i),m=n(32),d=n(78),E=((a={})[m.b]="show",a[m.a]="show",a),b=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,o=Object(c.a)(e,["className","children"]),b=Object(i.useCallback)((function(e){Object(d.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return u.a.createElement(m.e,Object(r.a)({ref:t,addEndListener:s.a},o,{onEnter:b}),(function(e,t){return u.a.cloneElement(a,Object(r.a)({},t,{className:l()("fade",n,a.props.className,E[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",t.a=b},186:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(0),o=n.n(c),l=(n(123),n(19)),s=n(49),i=n(48),u=n(47),m=n(182),d=n(183),E=n(184),b=n(80);function v(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,c=t.tabClassName,l=t.id;return null==n?null:o.a.createElement(u.a,{as:i.a,eventKey:a,disabled:r,id:l,className:c},n)}var p=function(e){var t=Object(l.a)(e,{activeKey:"onSelect"}),n=t.id,c=t.onSelect,i=t.transition,u=t.mountOnEnter,p=t.unmountOnExit,f=t.children,O=t.activeKey,y=void 0===O?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(f):O,g=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(m.a,{id:n,activeKey:y,onSelect:c,transition:i,mountOnEnter:u,unmountOnExit:p},o.a.createElement(s.a,Object(a.a)({},g,{role:"tablist",as:"nav"}),Object(b.b)(f,v)),o.a.createElement(d.a,null,Object(b.b)(f,(function(e){var t=Object(a.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(E.a,t)}))))};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",t.a=p},187:function(e,t,n){"use strict";var a=n(9),r=n(0),c=n.n(r),o=n(182),l=n(183),s=n(184),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);i.Container=o.a,i.Content=l.a,i.Pane=s.a,t.a=i},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(187),o=n(186),l=n(75),s=n(85),i=n(45),u=n(31),m=n(46),d=n(79),E=n(27);function b(){return r.a.createElement("svg",{className:"MorsePicture-dotIcon",viewBox:"0 0 30 30"},r.a.createElement("circle",{cx:"15",cy:"15",r:"15"}),"Sorry, your browser does not support inline SVG.")}function v(){return r.a.createElement("svg",{className:"MorsePicture-dashIcon",viewBox:"0 0 90 30"},r.a.createElement("rect",{width:"90",height:"30"}),"Sorry, your browser does not support inline SVG.")}var p=function(e){return r.a.createElement(r.a.Fragment,null,Array.from(e.morseString).map((e,t)=>r.a.createElement("span",{key:t},"."===e?b():v())))};n(208);const f={append:s.a,backspace:s.b,clear:s.c};var O=Object(l.b)(e=>({stream:e.encoding.morse.stream}),f)((function(e){function t(){e.append(i.MorseCharacter.DOT)}function n(){e.append(i.MorseCharacter.DASH)}function c(){if(e.stream.length>0){const t=e.stream.slice(-1);t===i.MorseString.CHARACTER_DIVIDER?(e.backspace(),e.append(i.MorseString.WORD_DIVIDER)):t!==i.MorseString.WORD_DIVIDER&&e.append(i.MorseString.CHARACTER_DIVIDER)}}return Object(a.useEffect)(()=>{function a(t){if(t.defaultPrevented)return;let n=!1;"Backspace"!==t.key&&8!==t.keyCode||(e.backspace(),n=!0),n&&t.preventDefault()}function r(a){if(a.defaultPrevented)return;let r=!0;if(a.key)switch(a.key){case"-":case"j":n();break;case".":case"k":t();break;case"Enter":case" ":case"l":c();break;case";":e.backspace();break;default:r=!1}else switch(a.keyCode){case 45:case 106:n();break;case 46:case 107:t();break;case 13:case 32:case 108:c();break;case 59:e.backspace();break;default:r=!1}r&&a.preventDefault()}return document.addEventListener("keydown",a),document.addEventListener("keypress",r),()=>{document.removeEventListener("keydown",a),document.removeEventListener("keypress",r)}}),r.a.createElement("div",{className:"MorseStream"},r.a.createElement(E.a,{className:"MorseStream-morse-output"},r.a.createElement(E.a.Header,null,"Input"),r.a.createElement(E.a.Body,null,r.a.createElement("pre",null,e.stream.replace(/\./g,"\xb7").replace(/-/g,"\uff0d"),r.a.createElement("span",{className:"blinking-cursor"},"|")))),r.a.createElement(E.a,{className:"MorseStream-output"},r.a.createElement(E.a.Header,null,"Plaintext"),r.a.createElement(E.a.Body,null,r.a.createElement("pre",null,new i.MorseString(e.stream).toString()||" "))),r.a.createElement(E.a,{className:"MorseStream-output"},r.a.createElement(E.a.Header,null,"Swap Dots/Dashes"),r.a.createElement(E.a.Body,null,r.a.createElement("pre",null,new i.MorseString(e.stream).invertDotsAndDashes().toString()||" "))),r.a.createElement(E.a,{className:"MorseStream-output"},r.a.createElement(E.a.Header,null,"Right to Left"),r.a.createElement(E.a.Body,null,r.a.createElement("pre",null,new i.MorseString(e.stream).reverse().toString()||" "))),r.a.createElement(E.a,{className:"MorseStream-output"},r.a.createElement(E.a.Header,null,"Right to Left + Swap Dots/Dashes"),r.a.createElement(E.a.Body,null,r.a.createElement("pre",null,new i.MorseString(e.stream).invertDotsAndDashes().reverse().toString()||" "))),r.a.createElement(d.a,{className:"MorseStream-inputCommands"},r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:t,variant:"primary"},b())),r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:n,variant:"primary"},v()))),r.a.createElement(d.a,{className:"MorseStream-commands"},r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:function(){e.backspace()}},"\u232b")),r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:c},"Next")),r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:function(){e.clear()},variant:"danger"},"Clear"))))})),y=n(181);n(209);var g=function(){const e=(new i.MorseCharacter).getPotentialMatches();return r.a.createElement("div",{className:"MorseTable"},r.a.createElement(y.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Character"),r.a.createElement("th",null,"Morse"))),r.a.createElement("tbody",null,e.map(e=>r.a.createElement("tr",{key:e.display},r.a.createElement("td",null,e.display),r.a.createElement("td",null,r.a.createElement("div",{className:"MorseTable-morseView"},r.a.createElement(p,{morseString:i.MorseCharacter.toMorseString(e.encoding)}))))))))};n(210);const h={selectTab:s.e},S=Object(l.b)(e=>({selectedTab:e.encoding.morse.selectedTab}),h);t.default=S((function(e){return r.a.createElement(o.a,{activeKey:e.selectedTab,id:"Morse-tabs",onSelect:e.selectTab},r.a.createElement(c.a,{className:"Morse-tab-value",eventKey:"1",title:"Value"},r.a.createElement(O,null)),r.a.createElement(c.a,{eventKey:"2",title:"Reference"},r.a.createElement(g,null)))}))}}]);
//# sourceMappingURL=5.30e20de0.chunk.js.map