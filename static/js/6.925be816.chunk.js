(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[6],{188:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(21),s=n(79),i=n(14);t.a=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.id,o=t.generateChildId,l=t.onSelect,d=t.activeKey,u=t.transition,b=t.mountOnEnter,j=t.unmountOnExit,m=t.children,O=Object(r.useMemo)((function(){return o||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,o]),v=Object(r.useMemo)((function(){return{onSelect:l,activeKey:d,transition:u,mountOnEnter:b||!1,unmountOnExit:j||!1,getControlledId:function(e){return O(e,"tabpane")},getControllerId:function(e){return O(e,"tab")}}}),[l,d,u,b,j,O]);return a.a.createElement(s.a.Provider,{value:v},a.a.createElement(i.a.Provider,{value:l||null},m))}},189:function(e,t,n){"use strict";var r=n(1),a=n(3),c=n(4),s=n.n(c),i=n(0),o=n.n(i),l=n(5),d=["bsPrefix","as","className"],u=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.as,i=void 0===c?"div":c,u=e.className,b=Object(a.a)(e,d),j=Object(l.a)(n,"tab-content");return o.a.createElement(i,Object(r.a)({ref:t},b,{className:s()(u,j)}))}));t.a=u},190:function(e,t,n){"use strict";var r=n(1),a=n(3),c=n(4),s=n.n(c),i=n(0),o=n.n(i),l=n(5),d=n(79),u=n(14),b=n(191),j=["activeKey","getControlledId","getControllerId"],m=["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"];var O=o.a.forwardRef((function(e,t){var n=function(e){var t=Object(i.useContext)(d.a);if(!t)return e;var n=t.activeKey,c=t.getControlledId,s=t.getControllerId,o=Object(a.a)(t,j),l=!1!==e.transition&&!1!==o.transition,m=Object(u.b)(e.eventKey);return Object(r.a)({},e,{active:null==e.active&&null!=m?Object(u.b)(n)===m:e.active,id:c(e.eventKey),"aria-labelledby":s(e.eventKey),transition:l&&(e.transition||o.transition||b.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:o.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:o.unmountOnExit})}(e),c=n.bsPrefix,O=n.className,v=n.active,h=n.onEnter,f=n.onEntering,p=n.onEntered,x=n.onExit,E=n.onExiting,y=n.onExited,g=n.mountOnEnter,S=n.unmountOnExit,C=n.transition,N=n.as,k=void 0===N?"div":N,M=(n.eventKey,Object(a.a)(n,m)),w=Object(l.a)(c,"tab-pane");if(!v&&!C&&S)return null;var D=o.a.createElement(k,Object(r.a)({},M,{ref:t,role:"tabpanel","aria-hidden":!v,className:s()(O,w,{active:v})}));return C&&(D=o.a.createElement(C,{in:v,onEnter:h,onEntering:f,onEntered:p,onExit:x,onExiting:E,onExited:y,mountOnEnter:g,unmountOnExit:S},D)),o.a.createElement(d.a.Provider,{value:null},o.a.createElement(u.a.Provider,{value:null},D))}));O.displayName="TabPane",t.a=O},191:function(e,t,n){"use strict";var r,a=n(1),c=n(3),s=n(4),i=n.n(s),o=n(0),l=n.n(o),d=n(36),u=n(82),b=n(80),j=["className","children"],m=((r={})[d.b]="show",r[d.a]="show",r),O=l.a.forwardRef((function(e,t){var n=e.className,r=e.children,s=Object(c.a)(e,j),O=Object(o.useCallback)((function(e){Object(b.a)(e),s.onEnter&&s.onEnter(e)}),[s]);return l.a.createElement(d.e,Object(a.a)({ref:t,addEndListener:u.a},s,{onEnter:O}),(function(e,t){return l.a.cloneElement(r,Object(a.a)({},t,{className:i()("fade",n,r.props.className,m[e])}))}))}));O.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},O.displayName="Fade",t.a=O},192:function(e,t,n){"use strict";var r=n(1),a=n(3),c=n(4),s=n.n(c),i=n(0),o=n.n(i),l=n(5),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.striped,u=e.bordered,b=e.borderless,j=e.hover,m=e.size,O=e.variant,v=e.responsive,h=Object(a.a)(e,d),f=Object(l.a)(n,"table"),p=s()(c,f,O&&f+"-"+O,m&&f+"-"+m,i&&f+"-striped",u&&f+"-bordered",b&&f+"-borderless",j&&f+"-hover"),x=o.a.createElement("table",Object(r.a)({},h,{className:p,ref:t}));if(v){var E=f+"-responsive";return"string"===typeof v&&(E=E+"-"+v),o.a.createElement("div",{className:E},x)}return x}));t.a=u},193:function(e,t,n){"use strict";var r=n(1),a=n(3),c=n(0),s=n.n(c),i=(n(126),n(21)),o=n(52),l=n(51),d=n(83),u=n(188),b=n(189),j=n(190),m=n(84),O=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function v(e){var t=e.props,n=t.title,r=t.eventKey,a=t.disabled,c=t.tabClassName,i=t.id;return null==n?null:s.a.createElement(d.a,{as:l.a,eventKey:r,disabled:a,id:i,className:c},n)}var h=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),n=t.id,c=t.onSelect,l=t.transition,d=t.mountOnEnter,h=t.unmountOnExit,f=t.children,p=t.activeKey,x=void 0===p?function(e){var t;return Object(m.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(f):p,E=Object(a.a)(t,O);return s.a.createElement(u.a,{id:n,activeKey:x,onSelect:c,transition:l,mountOnEnter:d,unmountOnExit:h},s.a.createElement(o.a,Object(r.a)({},E,{role:"tablist",as:"nav"}),Object(m.b)(f,v)),s.a.createElement(b.a,null,Object(m.b)(f,(function(e){var t=Object(r.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,s.a.createElement(j.a,t)}))))};h.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},h.displayName="Tabs",t.a=h},194:function(e,t,n){"use strict";var r=n(12),a=n(0),c=n.n(a),s=n(188),i=n(189),o=n(190),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);l.Container=s.a,l.Content=i.a,l.Pane=o.a,t.a=l},213:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var r=n(194),a=n(193),c=n(78),s=n(77),i=n(89),o=n(49),l=n(0),d=n(35),u=n(50),b=n(81),j=n(31),m=n(2);function O(){return Object(m.jsxs)("svg",{className:"MorsePicture-dotIcon",viewBox:"0 0 30 30",children:[Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"}),"Sorry, your browser does not support inline SVG."]})}function v(){return Object(m.jsxs)("svg",{className:"MorsePicture-dashIcon",viewBox:"0 0 90 30",children:[Object(m.jsx)("rect",{width:"90",height:"30"}),"Sorry, your browser does not support inline SVG."]})}var h=function(e){return Object(m.jsx)(m.Fragment,{children:Array.from(e.morseString).map((function(e,t){return Object(m.jsx)("span",{children:"."===e?O():v()},t)}))})},f=(n(213),{append:i.a,backspace:i.b,clear:i.c});var p=Object(c.b)((function(e){return{stream:e.encoding.morse.stream}}),f)((function(e){function t(){e.append(o.MorseCharacter.DOT)}function n(){e.append(o.MorseCharacter.DASH)}function r(){if(e.stream.length>0){var t=e.stream.slice(-1);t===o.MorseString.CHARACTER_DIVIDER?(e.backspace(),e.append(o.MorseString.WORD_DIVIDER)):t!==o.MorseString.WORD_DIVIDER&&e.append(o.MorseString.CHARACTER_DIVIDER)}}return Object(l.useEffect)((function(){function a(t){if(!t.defaultPrevented){var n=!1;"Backspace"!==t.key&&8!==t.keyCode||(e.backspace(),n=!0),n&&t.preventDefault()}}function c(a){if(!a.defaultPrevented){var c=!0;if(a.key)switch(a.key){case"-":case"j":n();break;case".":case"k":t();break;case"Enter":case" ":case"l":r();break;case";":e.backspace();break;default:c=!1}else switch(a.keyCode){case 45:case 106:n();break;case 46:case 107:t();break;case 13:case 32:case 108:r();break;case 59:e.backspace();break;default:c=!1}c&&a.preventDefault()}}return document.addEventListener("keydown",a),document.addEventListener("keypress",c),function(){document.removeEventListener("keydown",a),document.removeEventListener("keypress",c)}})),Object(m.jsxs)("div",{className:"MorseStream",children:[Object(m.jsxs)(j.a,{className:"MorseStream-morse-output",children:[Object(m.jsx)(j.a.Header,{children:"Input"}),Object(m.jsx)(j.a.Body,{children:Object(m.jsxs)("pre",{children:[e.stream.replace(/\./g,"\xb7").replace(/-/g,"\uff0d"),Object(m.jsx)("span",{className:"blinking-cursor",children:"|"})]})})]}),Object(m.jsxs)(j.a,{className:"MorseStream-output",children:[Object(m.jsx)(j.a.Header,{children:"Plaintext"}),Object(m.jsx)(j.a.Body,{children:Object(m.jsx)("pre",{children:new o.MorseString(e.stream).toString()||" "})})]}),Object(m.jsxs)(j.a,{className:"MorseStream-output",children:[Object(m.jsx)(j.a.Header,{children:"Swap Dots/Dashes"}),Object(m.jsx)(j.a.Body,{children:Object(m.jsx)("pre",{children:new o.MorseString(e.stream).invertDotsAndDashes().toString()||" "})})]}),Object(m.jsxs)(j.a,{className:"MorseStream-output",children:[Object(m.jsx)(j.a.Header,{children:"Right to Left"}),Object(m.jsx)(j.a.Body,{children:Object(m.jsx)("pre",{children:new o.MorseString(e.stream).reverse().toString()||" "})})]}),Object(m.jsxs)(j.a,{className:"MorseStream-output",children:[Object(m.jsx)(j.a.Header,{children:"Right to Left + Swap Dots/Dashes"}),Object(m.jsx)(j.a.Body,{children:Object(m.jsx)("pre",{children:new o.MorseString(e.stream).invertDotsAndDashes().reverse().toString()||" "})})]}),Object(m.jsxs)(b.a,{className:"MorseStream-inputCommands",children:[Object(m.jsx)(u.a,{children:Object(m.jsx)(d.a,{onClick:t,variant:"primary",children:O()})}),Object(m.jsx)(u.a,{children:Object(m.jsx)(d.a,{onClick:n,variant:"primary",children:v()})})]}),Object(m.jsxs)(b.a,{className:"MorseStream-commands",children:[Object(m.jsx)(u.a,{children:Object(m.jsx)(d.a,{onClick:function(){e.backspace()},children:"\u232b"})}),Object(m.jsx)(u.a,{children:Object(m.jsx)(d.a,{onClick:r,children:"Next"})}),Object(m.jsx)(u.a,{children:Object(m.jsx)(d.a,{onClick:function(){e.clear()},variant:"danger",children:"Clear"})})]})]})})),x=n(192);n(214);var E=function(){var e=(new o.MorseCharacter).getPotentialMatches();return Object(m.jsx)("div",{className:"MorseTable",children:Object(m.jsxs)(x.a,{striped:!0,responsive:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Character"}),Object(m.jsx)("th",{children:"Morse"})]})}),Object(m.jsx)("tbody",{children:e.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.display}),Object(m.jsx)("td",{children:Object(m.jsx)("div",{className:"MorseTable-morseView",children:Object(m.jsx)(h,{morseString:o.MorseCharacter.toMorseString(e.encoding)})})})]},e.display)}))})]})})},y=(n(215),{selectTab:i.e}),g=Object(c.b)((function(e){return{selectedTab:e.encoding.morse.selectedTab}}),y);t.default=g((function(e){return Object(m.jsx)(s.a,{title:"Morse Code",children:Object(m.jsxs)(a.a,{activeKey:e.selectedTab,id:"Morse-tabs",onSelect:e.selectTab,children:[Object(m.jsx)(r.a,{className:"Morse-tab-value",eventKey:"1",title:"Value",children:Object(m.jsx)(p,{})}),Object(m.jsx)(r.a,{eventKey:"2",title:"Reference",children:Object(m.jsx)(E,{})})]})})}))}}]);
//# sourceMappingURL=6.925be816.chunk.js.map