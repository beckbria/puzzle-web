(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[0],{118:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(5),r=Object(a.b)({name:"characterEncoding",initialState:{},reducers:{selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0}}}),o=r.actions.selectTab;t.a=r.reducer},119:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return d}));var a=n(5),r=Object(a.b)({name:"wordSearch",initialState:{canBend:!1,grid:"",useCardinals:!0,useDiagonals:!0,wordList:""},reducers:{setCanBend(e,t){e.canBend=t.payload},setGrid(e,t){e.grid=t.payload},setUseCardinals(e,t){e.useCardinals=t.payload},setUseDiagonals(e,t){e.useDiagonals=t.payload},setWordList(e,t){e.wordList=t.payload}}}),o=r.actions,c=o.setCanBend,i=o.setGrid,l=o.setUseCardinals,s=o.setUseDiagonals,d=o.setWordList;t.a=r.reducer},124:function(e,t,n){e.exports=n.p+"static/media/puzztool_banner_white.b6754a16.svg"},126:function(e,t,n){e.exports=n(181)},146:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},154:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(0),o=n.n(r),c=n(21),i=n.n(c),l=n(121),s=n(76),d=n(6),u=n(11),m=n.n(u),p=n(55),g=n(49),h=n(44),f=n(37),b=n(30),v=n(92),E=n(124),y=n.n(E);var w=function(e){var t,n=e.category.name,a=e.category.rootUrl;return o.a.createElement(b.LinkContainer,{key:n,onClick:e=>e.preventDefault(),to:a},o.a.createElement(f.a,{id:(t=n,t.toLowerCase().replace(/[^a-z]/,"").concat("-dropdown")),title:n},e.category.children.map(e=>o.a.createElement(b.LinkContainer,{key:"".concat(n,"-").concat(e.name),to:a+e.url},o.a.createElement(f.a.Item,{eventKey:n+e.name},e.name)))))};n(146);var C=function(){return o.a.createElement(h.a,{bg:"dark",className:"AppNav",collapseOnSelect:!0,expand:"md",onSelect:()=>document.activeElement.blur(),sticky:"top",variant:"dark"},o.a.createElement(b.LinkContainer,{to:"/"},o.a.createElement(h.a.Brand,null,o.a.createElement("img",{className:"NavbarLogo",src:y.a,alt:"PuzzTool logo"}))),o.a.createElement(h.a.Toggle,null),o.a.createElement(h.a.Collapse,null,o.a.createElement(g.a,null,Object(v.a)().map(e=>o.a.createElement(w,{key:e.name,category:e}))),o.a.createElement(g.a,null,o.a.createElement(b.LinkContainer,{to:"/help",onClick:e=>e.preventDefault()},o.a.createElement(f.a,{title:"Help",id:"help-dropdown"},o.a.createElement(b.LinkContainer,{to:"/help/settings"},o.a.createElement(f.a.Item,{eventKey:"Help.Settings"},"Settings")))),o.a.createElement(g.a.Link,{eventKey:"Help.Feedback",href:"https://github.com/puzztool/puzztool/issues/new",target:"_blank"},"Feedback"))))},k=n(33),x=n(75);n(149);var T=function(){return o.a.createElement(x.a,{title:"Not Found"},o.a.createElement("div",{className:"NotFound"},o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"If this was reached in error, use the navigation options or go ",o.a.createElement(k.Link,{to:"/"},"home"),".")))};n(150);var S=function(e){return o.a.createElement("div",{className:"Loading"},e.error?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-error"}),o.a.createElement("div",null,"Failed to load content")):e.timedOut?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-error"}),o.a.createElement("div",null,"Timed out while loading content")):e.pastDelay?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-spinner"}),o.a.createElement("div",null,"Loading")):null)},O=(n(151),m()({loader:()=>n.e(7).then(n.bind(null,230)),loading:S,timeout:1e4})),j=m()({loader:()=>n.e(14).then(n.bind(null,237)),loading:S,timeout:1e4}),N=m()({loader:()=>n.e(16).then(n.bind(null,238)),loading:S,timeout:1e4}),z=m()({loader:()=>n.e(4).then(n.bind(null,232)),loading:S,timeout:1e4}),L=m()({loader:()=>n.e(10).then(n.bind(null,236)),loading:S,timeout:1e4}),A=m()({loader:()=>n.e(8).then(n.bind(null,233)),loading:S,timeout:1e4}),B=m()({loader:()=>n.e(15).then(n.bind(null,225)),loading:S,timeout:1e4}),P=m()({loader:()=>n.e(5).then(n.bind(null,234)),loading:S,timeout:1e4}),D=m()({loader:()=>n.e(12).then(n.bind(null,226)),loading:S,timeout:1e4}),U=m()({loader:()=>n.e(9).then(n.bind(null,227)),loading:S,timeout:1e4}),W=m()({loader:()=>n.e(13).then(n.bind(null,228)),loading:S,timeout:1e4}),F=m()({loader:()=>n.e(6).then(n.bind(null,231)),loading:S,timeout:1e4}),I=m()({loader:()=>n.e(3).then(n.bind(null,229)),loading:S,timeout:1e4}),K=m()({loader:()=>n.e(11).then(n.bind(null,235)),loading:S,timeout:1e4}),H=m()({loader:()=>n.e(17).then(n.bind(null,239)),loading:S,timeout:1e4});var R=function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(C,null),o.a.createElement("div",{className:"App-content"},o.a.createElement(d.g,null,o.a.createElement(d.d,{exact:!0,path:"/",component:B}),o.a.createElement(d.d,{exact:!0,path:"/cipher/autokey",component:N}),o.a.createElement(d.d,{exact:!0,path:"/cipher/caesar",component:L}),o.a.createElement(d.d,{exact:!0,path:"/cipher/vigenere",component:H}),o.a.createElement(d.d,{exact:!0,path:"/encoding/autoconvert",component:j}),o.a.createElement(d.d,{exact:!0,path:"/encoding/braille",component:z}),o.a.createElement(d.d,{exact:!0,path:"/encoding/morse",component:P}),o.a.createElement(d.d,{exact:!0,path:"/encoding/pigpen",component:W}),o.a.createElement(d.d,{exact:!0,path:"/encoding/semaphore",component:I}),o.a.createElement(d.d,{exact:!0,path:"/help/settings",component:K}),o.a.createElement(d.d,{exact:!0,path:"/reference/characterencodings",component:A}),o.a.createElement(d.d,{exact:!0,path:"/reference/nato",component:D}),o.a.createElement(d.d,{exact:!0,path:"/reference/navalflags",component:U}),o.a.createElement(d.d,{exact:!0,path:"/reference/resistors",component:F}),o.a.createElement(d.d,{exact:!0,path:"/solvers/wordsearch",component:O}),o.a.createElement(d.d,{component:T})))))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{var n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}var G=n(5),J=n(18),V=n(42),X=n.n(V),$=n(7),q=n(94),Q=n(97),Y=n(98),Z=Object($.c)({autokey:q.b,caesar:Q.b,vigenere:Y.b}),ee=n(99),te=n(85),ne=n(118),ae=n(86),re=n(87),oe=Object($.c)({autoConvert:ee.b,braille:te.d,character:ne.a,morse:ae.d,semaphore:re.d}),ce=n(88),ie=n(119),le={key:"cipher",storage:X.a},se={key:"encoding",storage:X.a},de=()=>Object($.c)({cipher:Object(J.g)(le,Z),encoding:Object(J.g)(se,oe),resistor:ce.a,wordSearch:ie.a}),ue={key:"root",storage:X.a},me=(n(180),document.getElementsByTagName("base")[0].getAttribute("href")||""),pe=Object(a.a)({basename:me}),ge=(()=>{var e=de(),t=Object(J.g)(ue,e),n=Object(G.a)({reducer:t,middleware:Object(G.c)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})});return{store:n,persistor:Object(J.h)(n)}})(),he=ge.store,fe=ge.persistor;i.a.render(o.a.createElement(s.a,{store:he},o.a.createElement(l.a,{persistor:fe},o.a.createElement(d.e,{history:pe},o.a.createElement(R,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{var t="".concat("","/service-worker.js");M?(!function(e,t){fetch(e).then(n=>{var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):_(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):_(t,e)})}}()},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a,r=n(0),o=n.n(r),c=n(31),i=n(46),l=n(80),s=n(28),d=n(63),u=n(39),m=n(96),p=n(82);n(154);!function(e){e[e.encrypt=0]="encrypt",e[e.decrypt=1]="decrypt"}(a||(a={})),t.b=function(e){var t=Object(p.a)();return o.a.createElement("div",{className:"KeyedCipherStream"},o.a.createElement(s.a,{className:"KeyedCipherStream-input"},o.a.createElement(s.a.Header,null,e.prompt),o.a.createElement(s.a.Body,null,o.a.createElement(d.a,{onChange:function(t){e.onTextChange(t.currentTarget.value)},placeholder:"Text",ref:t,value:e.text}),o.a.createElement(d.a,{onChange:function(t){e.onSecretChange(t.currentTarget.value)},placeholder:"Key",value:e.secret}),o.a.createElement(l.a,null,o.a.createElement(m.a,{name:"KeyedCipherStream-conversion",onChange:e.onConversionChange,type:"radio",value:e.conversion},o.a.createElement(u.a,{value:a.encrypt},"Encrypt"),o.a.createElement(u.a,{value:a.decrypt},"Decrypt")),o.a.createElement(i.a,null,o.a.createElement(c.a,{onClick:function(){e.onClear()},variant:"danger"},"Clear"))))),o.a.createElement(s.a,{className:"KeyedCipherStream-output"},o.a.createElement(s.a.Header,null,"Output"),o.a.createElement(s.a.Body,null,o.a.createElement("pre",null,function(){var t=e.cipher;switch(t.key=e.secret,t.text=e.text,e.conversion){case a.encrypt:return t.encrypt();case a.decrypt:return t.decrypt();default:throw new Error("Invalid conversion type")}}()||" "))))}},55:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(123),c=n.n(o);t.a=function({children:e,title:t}){return r.a.createElement(c.a,{title:t?"".concat(t," - ").concat("PuzzTool"):"PuzzTool"},e)}},75:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(55);n(148);t.a=function({children:e,description:t,title:n}){return r.a.createElement(o.a,{title:n},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"PuzzToolPage-header"},r.a.createElement("h2",{className:"PuzzToolPage-title"},n),function(){if(t)return r.a.createElement("div",{className:"PuzzToolPage-description"},t)}()),e))}},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){return Object(a.useCallback)(e=>{e&&e.focus()},[])}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return p}));var a=n(45),r=n(5),o={encoding:a.BrailleEncoding.None,stream:[]},c=Object(r.b)({name:"brailleEncoding",initialState:o,reducers:{append(e,t){e.encoding=a.BrailleEncoding.None,e.stream.push(t.payload)},backspace(e){e.stream.pop()},clear(e){Object.assign(e,o)},selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0},setEncoding(e,t){e.encoding=t.payload},space(e){e.stream.push(a.BrailleEncoding.None)}}}),i=c.actions,l=i.append,s=i.backspace,d=i.clear,u=i.selectTab,m=i.setEncoding,p=i.space;t.d=c.reducer},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return d}));var a=n(5),r={stream:""},o=Object(a.b)({name:"morseEncoding",initialState:r,reducers:{append(e,t){e.stream+=t.payload},backspace(e){e.stream=e.stream.slice(0,-1)},clear(e){Object.assign(e,r)},selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0}}}),c=o.actions,i=c.append,l=c.backspace,s=c.clear,d=c.selectTab;t.d=o.reducer},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return m}));var a=n(5),r={directions:[],stream:""},o=Object(a.b)({name:"semaphoreEncoding",initialState:r,reducers:{append(e,t){e.directions.length=0,e.stream+=t.payload},backspace(e){e.stream=e.stream.slice(0,-1)},clear(e){Object.assign(e,r)},selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0},setDirections(e,t){e.directions=t.payload},space(e){e.stream+=" "}}}),c=o.actions,i=c.append,l=c.backspace,s=c.clear,d=c.selectTab,u=c.setDirections,m=c.space;t.d=o.reducer},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var a=n(5),r=Object(a.b)({name:"resistor",initialState:{bands:[0,0,0,-1,1]},reducers:{selectTab(e,t){var n;e.selectedTab=null!==(n=t.payload)&&void 0!==n?n:void 0},setBand(e,t){var n=t.payload,a=n.bandIndex,r=n.colorIndex;e.bands[a]=r}}}),o=r.actions,c=o.selectTab,i=o.setBand;t.a=r.reducer},92:function(e,t,n){"use strict";function a(){return[{children:[{description:"Word Search Solver",name:"Word Search",url:"/wordsearch"}],description:"Automated puzzle solvers",name:"Solvers",rootUrl:"/solvers"},{children:[{description:" A Vignere cipher which uses plaintext as the key",name:"Autokey",url:"/autokey"},{description:"Letters are shifted by a fixed value",name:"Caesar",url:"/caesar"},{description:"Letters are mapped based on a key word",name:"Vignere",url:"/vigenere"}],description:"Scrambled letters",name:"Ciphers",rootUrl:"/cipher"},{children:[{description:"Mapping numbers to letters (ASCII, Binary, Ordinal)",name:"AutoConvert",url:"/autoconvert"},{description:"Six dots in a two-by-three grid",name:"Braille",url:"/braille"},{description:"Dots and dashes with separations",name:"Morse Code",url:"/morse"},{description:"Parts of a tic-tac-toe grid or X, some with dot",name:"Pigpen",url:"/pigpen"},{description:" Positions of two different flags",name:"Semaphore",url:"/semaphore"}],description:"Different ways to represent letters",name:"Encodings",rootUrl:"/encoding"},{children:[{description:"Static display of number to letter mapping",name:"Character Encodings",url:"/characterencodings"},{description:"Words used to clearly identify a letter",name:"NATO Alphabet",url:"/nato"},{description:"Different simple flags which convey a letter",name:"Naval Flags",url:"/navalflags"},{description:"Find a resistor value using different colored bands",name:"Resistors",url:"/resistors"}],description:"Miscellaneous information",name:"Reference",rootUrl:"/reference"}]}n.d(t,"a",(function(){return a}))},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return d}));var a=n(5),r={conversion:n(50).a.decrypt,secret:"",text:""},o=Object(a.b)({name:"autokeyCipher",initialState:r,reducers:{clear(e){Object.assign(e,r)},setConversion(e,t){e.conversion=t.payload},setSecret(e,t){e.secret=t.payload},setText(e,t){e.text=t.payload}}}),c=o.actions,i=c.clear,l=c.setConversion,s=c.setSecret,d=c.setText;t.b=o.reducer},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(5),r={text:""},o=Object(a.b)({name:"caesarCipher",initialState:r,reducers:{clear(e){Object.assign(e,r)},setText(e,t){e.text=t.payload}}}),c=o.actions,i=c.clear,l=c.setText;t.b=o.reducer},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return d}));var a=n(5),r={conversion:n(50).a.decrypt,secret:"",text:""},o=Object(a.b)({name:"vigenereCipher",initialState:r,reducers:{clear(e){Object.assign(e,r)},setConversion(e,t){e.conversion=t.payload},setSecret(e,t){e.secret=t.payload},setText(e,t){e.text=t.payload}}}),c=o.actions,i=c.clear,l=c.setConversion,s=c.setSecret,d=c.setText;t.b=o.reducer},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s}));var a=n(5),r={homogeneous:!0,text:""},o=Object(a.b)({name:"autoConvert",initialState:r,reducers:{clear(e){Object.assign(e,r)},setHomogeneous(e,t){e.homogeneous=t.payload},setText(e,t){e.text=t.payload}}}),c=o.actions,i=c.clear,l=c.setHomogeneous,s=c.setText;t.b=o.reducer}},[[126,1,2]]]);
//# sourceMappingURL=main.910fef9d.chunk.js.map