(window.webpackJsonppuzztool=window.webpackJsonppuzztool||[]).push([[11],{125:function(e,t,a){"use strict";var n=a(19),r=a(20),l=a(31),o=a(30),i=a(32),c=a(130),s=a.n(c),u=a(0),d=a(126),f=a(127),h=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var r=d.a.getObject(a.VERSION_STORAGE_KEY);return a.versionIncreased(r,f.a)&&(d.a.clear(),d.a.setObject(a.VERSION_STORAGE_KEY,f.a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"versionIncreased",value:function(e,t){return null==e||1===s()(t,e)}},{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){d.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(d.a.getObject(this.getLocalStorageKey()))}}]),t}(u.Component);t.a=h},126:function(e,t,a){"use strict";var n=a(19),r=a(20),l=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();l._isSupported=void 0,l._prefix="puzztool",t.a=l},127:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n="0.7.0"},137:function(e,t,a){e.exports=a(140)()},140:function(e,t,a){"use strict";var n=a(141);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,l,o){if(o!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return a.PropTypes=a,a}},141:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},142:function(e,t,a){"use strict";var n=a(19),r=a(20),l=a(31),o=a(30),i=a(32),c=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e)))._activeKey=1,a.state={activeKey:a._activeKey},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(a(125).a);t.a=c},233:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r=n(a(4)),l=n(a(5)),o=n(a(0)),i=n(a(137)),c=n(a(73)),s={id:i.default.any,href:i.default.string,onClick:i.default.func,title:i.default.node.isRequired,disabled:i.default.bool,menuRole:i.default.string,rootCloseEvent:i.default.string,bsPrefix:i.default.string,variant:i.default.string,size:i.default.string},u=o.default.forwardRef(function(e,t){var a=e.title,n=e.children,i=e.bsPrefix,s=e.rootCloseEvent,u=e.variant,d=e.size,f=e.menuRole,h=e.disabled,v=e.href,p=e.id,y=(0,l.default)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","disabled","href","id"]);return o.default.createElement(c.default,(0,r.default)({ref:t},y),o.default.createElement(c.default.Toggle,{id:p,href:v,size:d,variant:u,disabled:h,childBsPrefix:i},a),o.default.createElement(c.default.Menu,{role:f,rootCloseEvent:s},n))});u.displayName="DropdownButton",u.propTypes=s;var d=u;t.default=d,e.exports=t.default},252:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),l=a(31),o=a(30),i=a(32),c=a(0),s=a.n(c),u=a(145),d=a.n(u),f=a(144),h=a.n(f),v=a(142),p=a(131),y=a.n(p),m=a(124),E=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"contrastingColor",value:function(e){var t=e.substring(1),a=parseInt(t,16);return.2126*(a>>16&255)+.7152*(a>>8&255)+.0722*(255&a)<40?"#ffffff":"#000000"}}]),e}(),S=(a(233),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"ResistorTable"},s.a.createElement(y.a,{striped:!0,responsive:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Color"),s.a.createElement("th",null,"Value"),s.a.createElement("th",null,"Multiplier"),s.a.createElement("th",null,"Tolerance (%)"))),s.a.createElement("tbody",null,this.renderRows(m.Resistor.colorTable))))}},{key:"renderRows",value:function(e){var t=this;return e.map(function(e){return s.a.createElement("tr",{key:e.name},s.a.createElement("td",{style:t.cellColorStyle(e)},e.name),s.a.createElement("td",null,e.getDisplayValue()),s.a.createElement("td",null,e.multiplier),s.a.createElement("td",null,e.toleranceInPercent))})}},{key:"cellColorStyle",value:function(e){return{backgroundColor:e.colorCode,color:E.contrastingColor(e.colorCode)}}}]),t}(c.Component)),b=a(132),g=a.n(b),O=a(134),k=a.n(O),R=a(128),_=a.n(R),j=a(73),w=a.n(j),I=a(235),C=a.n(I),K=(a(234),function(e){function t(e){var a;Object(n.a)(this,t),a=Object(l.a)(this,Object(o.a)(t).call(this,e));var r=[m.Resistor.BLACK,m.Resistor.BLACK,m.Resistor.BLACK,null,m.Resistor.BROWN];return a.state={value:a.resistorValue(r),bands:r},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"ResistorInput"},s.a.createElement(_.a,{className:"ResistorInput-input"},s.a.createElement(_.a.Header,null,"Input"),s.a.createElement(_.a.Body,null,s.a.createElement("div",{className:"ResistorInput-display"},s.a.createElement("svg",{width:"240",viewBox:"0 0 136 40"},s.a.createElement("defs",null,s.a.createElement("g",{id:"Wire"},s.a.createElement("rect",{y:"20",height:"1",width:"8",fill:"black"})),s.a.createElement("g",{id:"Resistor"},s.a.createElement("rect",{y:"8",x:"8",width:"120",height:"24",rx:"4",ry:"4",stroke:"black",strokeWidth:"0.5",fill:"burlywood"}),s.a.createElement("use",{xlinkHref:"#Wire",x:"0"}),s.a.createElement("use",{xlinkHref:"#Wire",x:"128"})),s.a.createElement("g",{id:"Band"},s.a.createElement("rect",{y:"8",height:"24",width:"12",stroke:"black",strokeWidth:"0.5"}))),s.a.createElement("use",{xlinkHref:"#Resistor",x:"0",y:"0"}),this.getBand(0),this.getBand(1),this.getBand(2),this.getBand(3),this.getBand(4),"Sorry, your browser does not support inline SVG.")),s.a.createElement("div",{className:"ResistorSelectors"},s.a.createElement(k.a,null,s.a.createElement(g.a,null,this.valueSelector(0,"First Band")),s.a.createElement(g.a,null,this.valueSelector(1,"Second Band")),s.a.createElement(g.a,null,this.multiplierSelector(2,"Third Band")),s.a.createElement(g.a,null,this.multiplierOrNullSelector(3,"Fourth Band")),s.a.createElement(g.a,null,this.toleranceSelector(4,"Tolerance Band")))))),s.a.createElement(_.a,{className:"ResistorInput-output"},s.a.createElement(_.a.Header,null,"Output"),s.a.createElement(_.a.Body,null,this.state.value)))}},{key:"getBand",value:function(e){var t=this.state.bands[e];return null!==t?s.a.createElement("use",{xlinkHref:"#Band",x:this.getBandOffset(e),fill:t.colorCode}):""}},{key:"getBandOffset",value:function(e){return e===this.state.bands.length-1?104:18*e+20}},{key:"valueSelector",value:function(e,t){return this.colorSelector(e,t,m.Resistor.colorTable.filter(function(e){return e.hasValue()}))}},{key:"multiplierSelector",value:function(e,t){return this.colorSelector(e,t,m.Resistor.colorTable)}},{key:"multiplierOrNullSelector",value:function(e,t){return this.colorSelector(e,t,[new m.ResistorColorEntry("None","",0)].concat(m.Resistor.colorTable))}},{key:"toleranceSelector",value:function(e,t){return this.colorSelector(e,t,m.Resistor.colorTable.filter(function(e){return void 0!==e.toleranceInPercent}))}},{key:"colorSelector",value:function(e,t,a){var n=this;return s.a.createElement(C.a,{title:t,key:e,id:"color-select-".concat(e),onSelect:function(t){return n.updateColor(e,t)}},a.map(function(t,a){return s.a.createElement(w.a.Item,{key:"".concat(e,"-").concat(a),eventKey:t.name},t.name)}))}},{key:"updateColor",value:function(e,t){var a=this.state.bands;a[e]=this.colorByName(t),this.setState({value:this.resistorValue(a),bands:a})}},{key:"colorByName",value:function(e){var t=!0,a=!1,n=void 0;try{for(var r,l=m.Resistor.colorTable[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var o=r.value;if(e===o.name)return o}}catch(i){a=!0,n=i}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}return null}},{key:"resistorValue",value:function(e){for(var t=[],a=0;a<e.length-1;++a)null!==e[a]&&t.push(e[a]);var n=m.Resistor.getValue(t);return n===m.Resistor.INVALID_RESISTOR?"Invalid Resistor Colors":"".concat(m.Resistor.getDisplayValue(n)," \u2126 \xb1 ").concat(e[e.length-1].toleranceInPercent,"%")}}]),t}(c.Component)),T=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Resistors"},s.a.createElement("div",{className:"Resistors-content"},s.a.createElement(h.a,{activeKey:this.state.activeKey,animation:!1,id:"Resistors-tabs",onSelect:function(t){return e.onTabSelect(t)}},s.a.createElement(d.a,{eventKey:1,title:"Value"},s.a.createElement(K,null)),s.a.createElement(d.a,{eventKey:2,title:"Reference"},s.a.createElement(S,null)))))}},{key:"getLocalStorageKey",value:function(){return"Resistors"}}]),t}(v.a);t.default=T}}]);
//# sourceMappingURL=11.9ecc7647.chunk.js.map