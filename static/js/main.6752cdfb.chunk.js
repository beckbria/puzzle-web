(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[0],{117:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(5);const r=Object(a.b)({name:"characterEncoding",initialState:{},reducers:{selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0}}}),o=r.actions.selectTab;t.a=r.reducer},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return d}));var a=n(5);const r=Object(a.b)({name:"wordSearch",initialState:{canBend:!1,grid:"",useCardinals:!0,useDiagonals:!0,wordList:""},reducers:{setCanBend(e,t){e.canBend=t.payload},setGrid(e,t){e.grid=t.payload},setUseCardinals(e,t){e.useCardinals=t.payload},setUseDiagonals(e,t){e.useDiagonals=t.payload},setWordList(e,t){e.wordList=t.payload}}}),o=r.actions,c=o.setCanBend,i=o.setGrid,l=o.setUseCardinals,s=o.setUseDiagonals,d=o.setWordList;t.a=r.reducer},122:function(e,t,n){e.exports=n.p+"static/media/puzztool_banner_white.b6754a16.svg"},124:function(e,t,n){e.exports=n(176)},142:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},149:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(0),o=n.n(r),c=n(21),i=n.n(c),l=n(120),s=n(75),d=n(6),u=n(11),p=n.n(u),m=n(49),g=n(44),h=n(37),b=n(30),f=n(91),v=n(122),E=n.n(v);var y=function(e){const t=e.category.name,n=e.category.rootUrl;return o.a.createElement(b.LinkContainer,{key:t,onClick:e=>e.preventDefault(),to:n},o.a.createElement(h.a,{id:(a=t,a.toLowerCase().replace(/[^a-z]/,"").concat("-dropdown")),title:t},e.category.children.map(e=>o.a.createElement(b.LinkContainer,{key:"".concat(t,"-").concat(e.name),to:n+e.url},o.a.createElement(h.a.Item,{eventKey:t+e.name},e.name)))));var a};n(142);var w=function(){return o.a.createElement(g.a,{bg:"dark",className:"AppNav",collapseOnSelect:!0,expand:"md",onSelect:()=>document.activeElement.blur(),sticky:"top",variant:"dark"},o.a.createElement(b.LinkContainer,{to:"/"},o.a.createElement(g.a.Brand,null,o.a.createElement("img",{className:"NavbarLogo",src:E.a,alt:"PuzzTool logo"}))),o.a.createElement(g.a.Toggle,null),o.a.createElement(g.a.Collapse,null,o.a.createElement(m.a,null,Object(f.a)().map(e=>o.a.createElement(y,{key:e.name,category:e}))),o.a.createElement(m.a,null,o.a.createElement(b.LinkContainer,{to:"/help",onClick:e=>e.preventDefault()},o.a.createElement(h.a,{title:"Help",id:"help-dropdown"},o.a.createElement(b.LinkContainer,{to:"/help/settings"},o.a.createElement(h.a.Item,{eventKey:"Help.Settings"},"Settings")))),o.a.createElement(m.a.Link,{eventKey:"Help.Feedback",href:"https://github.com/puzztool/puzztool/issues/new",target:"_blank"},"Feedback"))))},C=n(33);n(144);var k=function(){return o.a.createElement("div",{className:"NotFound"},o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"If this was reached in error, use the navigation options or go ",o.a.createElement(C.Link,{to:"/"},"home"),"."))};n(145);var x=function(e){return o.a.createElement("div",{className:"Loading"},e.error?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-error"}),o.a.createElement("div",null,"Failed to load content")):e.timedOut?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-error"}),o.a.createElement("div",null,"Timed out while loading content")):e.pastDelay?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-spinner"}),o.a.createElement("div",null,"Loading")):null)};n(146);const S=p()({loader:()=>n.e(7).then(n.bind(null,230)),loading:x,timeout:1e4}),O=p()({loader:()=>n.e(10).then(n.bind(null,237)),loading:x,timeout:1e4}),T=p()({loader:()=>n.e(15).then(n.bind(null,238)),loading:x,timeout:1e4}),j=p()({loader:()=>n.e(4).then(n.bind(null,232)),loading:x,timeout:1e4}),N=p()({loader:()=>n.e(9).then(n.bind(null,236)),loading:x,timeout:1e4}),L=p()({loader:()=>n.e(8).then(n.bind(null,233)),loading:x,timeout:1e4}),A=p()({loader:()=>n.e(17).then(n.bind(null,225)),loading:x,timeout:1e4}),B=p()({loader:()=>n.e(5).then(n.bind(null,234)),loading:x,timeout:1e4}),z=p()({loader:()=>n.e(12).then(n.bind(null,226)),loading:x,timeout:1e4}),D=p()({loader:()=>n.e(13).then(n.bind(null,227)),loading:x,timeout:1e4}),U=p()({loader:()=>n.e(14).then(n.bind(null,228)),loading:x,timeout:1e4}),W=p()({loader:()=>n.e(6).then(n.bind(null,231)),loading:x,timeout:1e4}),I=p()({loader:()=>n.e(3).then(n.bind(null,229)),loading:x,timeout:1e4}),K=p()({loader:()=>n.e(11).then(n.bind(null,235)),loading:x,timeout:1e4}),F=p()({loader:()=>n.e(16).then(n.bind(null,239)),loading:x,timeout:1e4});var H=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null),o.a.createElement("div",{className:"App-content"},o.a.createElement(d.g,null,o.a.createElement(d.d,{exact:!0,path:"/",component:A}),o.a.createElement(d.d,{exact:!0,path:"/cipher/autokey",component:T}),o.a.createElement(d.d,{exact:!0,path:"/cipher/caesar",component:N}),o.a.createElement(d.d,{exact:!0,path:"/cipher/vigenere",component:F}),o.a.createElement(d.d,{exact:!0,path:"/encoding/autoconvert",component:O}),o.a.createElement(d.d,{exact:!0,path:"/encoding/braille",component:j}),o.a.createElement(d.d,{exact:!0,path:"/encoding/morse",component:B}),o.a.createElement(d.d,{exact:!0,path:"/encoding/pigpen",component:U}),o.a.createElement(d.d,{exact:!0,path:"/encoding/semaphore",component:I}),o.a.createElement(d.d,{exact:!0,path:"/help/settings",component:K}),o.a.createElement(d.d,{exact:!0,path:"/reference/characterencodings",component:L}),o.a.createElement(d.d,{exact:!0,path:"/reference/nato",component:z}),o.a.createElement(d.d,{exact:!0,path:"/reference/navalflags",component:D}),o.a.createElement(d.d,{exact:!0,path:"/reference/resistors",component:W}),o.a.createElement(d.d,{exact:!0,path:"/solvers/wordsearch",component:S}),o.a.createElement(d.d,{component:k}))))};const P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}var M=n(5),_=n(18),G=n(42),J=n.n(G),V=n(7),X=n(93),$=n(96),q=n(97),Q=Object(V.c)({autokey:X.b,caesar:$.b,vigenere:q.b}),Y=n(98),Z=n(84),ee=n(117),te=n(85),ne=n(86),ae=Object(V.c)({autoConvert:Y.b,braille:Z.d,character:ee.a,morse:te.d,semaphore:ne.d}),re=n(87),oe=n(118);const ce={key:"cipher",storage:J.a},ie={key:"encoding",storage:J.a};var le=()=>Object(V.c)({cipher:Object(_.g)(ce,Q),encoding:Object(_.g)(ie,ae),resistor:re.a,wordSearch:oe.a});const se={key:"root",storage:J.a};n(175);const de=document.getElementsByTagName("base")[0].getAttribute("href")||"",ue=Object(a.a)({basename:de}),pe=(()=>{const e=le(),t=Object(_.g)(se,e),n=Object(M.a)({reducer:t,middleware:Object(M.c)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}})});return{store:n,persistor:Object(_.h)(n)}})(),me=pe.store,ge=pe.persistor;i.a.render(o.a.createElement(s.a,{store:me},o.a.createElement(l.a,{persistor:ge},o.a.createElement(d.e,{history:ue},o.a.createElement(H,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("","/service-worker.js");P?(!function(e,t){fetch(e).then(n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):R(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(t,e)})}}()},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),o=n(31),c=n(46),i=n(79),l=n(27),s=n(63),d=n(39),u=n(95),p=n(81);n(149);let m;!function(e){e[e.encrypt=0]="encrypt",e[e.decrypt=1]="decrypt"}(m||(m={})),t.b=function(e){const t=Object(p.a)();return r.a.createElement("div",{className:"KeyedCipherStream"},r.a.createElement(l.a,{className:"KeyedCipherStream-input"},r.a.createElement(l.a.Header,null,e.prompt),r.a.createElement(l.a.Body,null,r.a.createElement(s.a,{onChange:function(t){e.onTextChange(t.currentTarget.value)},placeholder:"Text",ref:t,value:e.text}),r.a.createElement(s.a,{onChange:function(t){e.onSecretChange(t.currentTarget.value)},placeholder:"Key",value:e.secret}),r.a.createElement(i.a,null,r.a.createElement(u.a,{name:"KeyedCipherStream-conversion",onChange:e.onConversionChange,type:"radio",value:e.conversion},r.a.createElement(d.a,{value:m.encrypt},"Encrypt"),r.a.createElement(d.a,{value:m.decrypt},"Decrypt")),r.a.createElement(c.a,null,r.a.createElement(o.a,{onClick:function(){e.onClear()},variant:"danger"},"Clear"))))),r.a.createElement(l.a,{className:"KeyedCipherStream-output"},r.a.createElement(l.a.Header,null,"Output"),r.a.createElement(l.a.Body,null,r.a.createElement("pre",null,function(){const t=e.cipher;switch(t.key=e.secret,t.text=e.text,e.conversion){case m.encrypt:return t.encrypt();case m.decrypt:return t.decrypt();default:throw new Error("Invalid conversion type")}}()||" "))))}},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){return Object(a.useCallback)(e=>{e&&e.focus()},[])}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return m}));var a=n(45),r=n(5);const o={encoding:a.BrailleEncoding.None,stream:[]},c=Object(r.b)({name:"brailleEncoding",initialState:o,reducers:{append(e,t){e.encoding=a.BrailleEncoding.None,e.stream.push(t.payload)},backspace(e){e.stream.pop()},clear(e){Object.assign(e,o)},selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0},setEncoding(e,t){e.encoding=t.payload},space(e){e.stream.push(a.BrailleEncoding.None)}}}),i=c.actions,l=i.append,s=i.backspace,d=i.clear,u=i.selectTab,p=i.setEncoding,m=i.space;t.d=c.reducer},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return d}));var a=n(5);const r={stream:""},o=Object(a.b)({name:"morseEncoding",initialState:r,reducers:{append(e,t){e.stream+=t.payload},backspace(e){e.stream=e.stream.slice(0,-1)},clear(e){Object.assign(e,r)},selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0}}}),c=o.actions,i=c.append,l=c.backspace,s=c.clear,d=c.selectTab;t.d=o.reducer},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return p}));var a=n(5);const r={directions:[],stream:""},o=Object(a.b)({name:"semaphoreEncoding",initialState:r,reducers:{append(e,t){e.directions.length=0,e.stream+=t.payload},backspace(e){e.stream=e.stream.slice(0,-1)},clear(e){Object.assign(e,r)},selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0},setDirections(e,t){e.directions=t.payload},space(e){e.stream+=" "}}}),c=o.actions,i=c.append,l=c.backspace,s=c.clear,d=c.selectTab,u=c.setDirections,p=c.space;t.d=o.reducer},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var a=n(5);const r=Object(a.b)({name:"resistor",initialState:{bands:[0,0,0,-1,1]},reducers:{selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0},setBand(e,t){const n=t.payload,a=n.bandIndex,r=n.colorIndex;e.bands[a]=r}}}),o=r.actions,c=o.selectTab,i=o.setBand;t.a=r.reducer},91:function(e,t,n){"use strict";function a(){return[{children:[{description:"Word Search Solver",name:"Word Search",url:"/wordsearch"}],description:"Automated puzzle solvers",name:"Solvers",rootUrl:"/solvers"},{children:[{description:" A Vignere cipher which uses plaintext as the key",name:"Autokey",url:"/autokey"},{description:"Letters are shifted by a fixed value",name:"Caesar",url:"/caesar"},{description:"Letters are mapped based on a key word",name:"Vignere",url:"/vigenere"}],description:"Scrambled letters",name:"Ciphers",rootUrl:"/cipher"},{children:[{description:"Mapping numbers to letters (ASCII, Binary, Ordinal)",name:"AutoConvert",url:"/autoconvert"},{description:"Six dots in a two-by-three grid",name:"Braille",url:"/braille"},{description:"Dots and dashes with separations",name:"Morse Code",url:"/morse"},{description:"Parts of a tic-tac-toe grid or X, some with dot",name:"Pigpen",url:"/pigpen"},{description:" Positions of two different flags",name:"Semaphore",url:"/semaphore"}],description:"Different ways to represent letters",name:"Encodings",rootUrl:"/encoding"},{children:[{description:"Static display of number to letter mapping",name:"Character Encodings",url:"/characterencodings"},{description:"Words used to clearly identify a letter",name:"NATO Alphabet",url:"/nato"},{description:"Different simple flags which convey a letter",name:"Naval Flags",url:"/navalflags"},{description:"Find a resistor value using different colored bands",name:"Resistors",url:"/resistors"}],description:"Miscellaneous information",name:"Reference",rootUrl:"/reference"}]}n.d(t,"a",(function(){return a}))},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return d}));var a=n(5);const r={conversion:n(50).a.decrypt,secret:"",text:""},o=Object(a.b)({name:"autokeyCipher",initialState:r,reducers:{clear(e){Object.assign(e,r)},setConversion(e,t){e.conversion=t.payload},setSecret(e,t){e.secret=t.payload},setText(e,t){e.text=t.payload}}}),c=o.actions,i=c.clear,l=c.setConversion,s=c.setSecret,d=c.setText;t.b=o.reducer},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(5);const r={text:""},o=Object(a.b)({name:"caesarCipher",initialState:r,reducers:{clear(e){Object.assign(e,r)},setText(e,t){e.text=t.payload}}}),c=o.actions,i=c.clear,l=c.setText;t.b=o.reducer},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return d}));var a=n(5);const r={conversion:n(50).a.decrypt,secret:"",text:""},o=Object(a.b)({name:"vigenereCipher",initialState:r,reducers:{clear(e){Object.assign(e,r)},setConversion(e,t){e.conversion=t.payload},setSecret(e,t){e.secret=t.payload},setText(e,t){e.text=t.payload}}}),c=o.actions,i=c.clear,l=c.setConversion,s=c.setSecret,d=c.setText;t.b=o.reducer},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s}));var a=n(5);const r={homogeneous:!0,text:""},o=Object(a.b)({name:"autoConvert",initialState:r,reducers:{clear(e){Object.assign(e,r)},setHomogeneous(e,t){e.homogeneous=t.payload},setText(e,t){e.text=t.payload}}}),c=o.actions,i=c.clear,l=c.setHomogeneous,s=c.setText;t.b=o.reducer}},[[124,1,2]]]);
//# sourceMappingURL=main.6752cdfb.chunk.js.map