(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(e,n,t){e.exports=t(171)},113:function(e,n,t){},114:function(e,n,t){},170:function(e,n,t){},171:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(15),i=t.n(o),l=t(25),c=t(26),s=t(39),u=t(37),d=t(38),m=t(174),p=t(175),h=t(176),g=t(173),f=t(33),v=t(23),b=t(36),E=t(11),w=t.n(E),y=t(71),k=(t(113),function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Loading"},this.getContent())}},{key:"getContent",value:function(){return this.props.error?r.a.createElement("div",{className:"Loading-content"},r.a.createElement("div",{className:"Loading-error"}),r.a.createElement("div",null,"Failed to load content")):this.props.timedOut?r.a.createElement("div",{className:"Loading-content"},r.a.createElement("div",{className:"Loading-error"}),r.a.createElement("div",null,"Timed out while loading content")):this.props.pastDelay?r.a.createElement("div",{className:"Loading-content"},r.a.createElement("div",{className:"Loading-spinner"}),r.a.createElement("div",null,"Loading")):null}}]),n}(a.Component)),C=(t(114),w()({loader:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,285))},loading:k,timeout:1e4})),P=w()({loader:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,294))},loading:k,timeout:1e4}),L=w()({loader:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,293))},loading:k,timeout:1e4}),N=w()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,283))},loading:k,timeout:1e4}),O=w()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,288))},loading:k,timeout:1e4}),S=w()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,287))},loading:k,timeout:1e4}),j=w()({loader:function(){return t.e(19).then(t.bind(null,278))},loading:k,timeout:1e4}),A=w()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,286))},loading:k,timeout:1e4}),W=w()({loader:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,291))},loading:k,timeout:1e4}),z=w()({loader:function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,279))},loading:k,timeout:1e4}),R=w()({loader:function(){return t.e(18).then(t.bind(null,280))},loading:k,timeout:1e4}),U=w()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(13)]).then(t.bind(null,284))},loading:k,timeout:1e4}),D=w()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,281))},loading:k,timeout:1e4}),T=w()({loader:function(){return t.e(15).then(t.bind(null,282))},loading:k,timeout:1e4}),x=w()({loader:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,290))},loading:k,timeout:1e4}),B=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(f.HashRouter,null,r.a.createElement("div",{className:"App"},this.renderNavbar(),r.a.createElement("div",{className:"App-content"},r.a.createElement(v.d,{exact:!0,path:"/",component:j}),r.a.createElement(v.d,{path:"/cipher/autokey",component:L}),r.a.createElement(v.d,{path:"/cipher/caesar",component:O}),r.a.createElement(v.d,{path:"/cipher/vigenere",component:x}),r.a.createElement(v.d,{path:"/encoding/autoconvert",component:P}),r.a.createElement(v.d,{path:"/encoding/braille",component:N}),r.a.createElement(v.d,{path:"/encoding/morse",component:A}),r.a.createElement(v.d,{path:"/encoding/pigpen",component:R}),r.a.createElement(v.d,{path:"/encoding/semaphore",component:D}),r.a.createElement(v.d,{path:"/help/settings",component:T}),r.a.createElement(v.d,{path:"/reference/characterencodings",component:S}),r.a.createElement(v.d,{path:"/reference/nato",component:W}),r.a.createElement(v.d,{path:"/reference/navalflags",component:z}),r.a.createElement(v.d,{path:"/reference/resistors",component:U}),r.a.createElement(v.d,{path:"/solvers/wordsearch",component:C}))))}},{key:"getCategoryDropdownId",value:function(e){return e.toLowerCase().replace(/[^a-z]/,"").concat("-dropdown")}},{key:"renderNavbarCategories",value:function(){var e=this;return y.a.getCategories().map(function(n){return r.a.createElement(b.LinkContainer,{key:n.name,onClick:function(e){return e.preventDefault()},to:n.rootUrl},r.a.createElement(m.a,{eventKey:n.name,id:e.getCategoryDropdownId(n.name),title:n.name},n.children.map(function(e){return r.a.createElement(b.LinkContainer,{key:"".concat(n.name,"-").concat(e.name),to:n.rootUrl+e.url},r.a.createElement(p.a,{eventKey:n.name+e.name},e.name))})))})}},{key:"renderNavbar",value:function(){return r.a.createElement(h.a,{collapseOnSelect:!0,fluid:!0,inverse:!0,onSelect:function(){return document.activeElement.blur()},staticTop:!0},r.a.createElement(h.a.Header,null,r.a.createElement(h.a.Brand,null,r.a.createElement(f.Link,{to:"/"},"PuzzTool")),r.a.createElement(h.a.Toggle,null)),r.a.createElement(h.a.Collapse,null,r.a.createElement(g.a,null,this.renderNavbarCategories()),r.a.createElement(g.a,{pullRight:!0},r.a.createElement(b.LinkContainer,{to:"/help",onClick:function(e){return e.preventDefault()}},r.a.createElement(m.a,{eventKey:"Help",title:"Help",id:"help-dropdown"},r.a.createElement(b.LinkContainer,{to:"/help/settings"},r.a.createElement(p.a,{eventKey:"Help.Settings"},"Settings")),r.a.createElement(p.a,{href:"https://github.com/beckbria/puzztool/issues/new",target:"_blank"},"Feedback"))))))}}]),n}(a.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(168),t(169),t(170);i.a.render(r.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");H?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):I(n,e)})}}()},71:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var a=t(25),r=t(26),o=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getCategories",value:function(){return e.getRoutes().categories}},{key:"getRoutes",value:function(){return{categories:[{children:[{description:"Word Search Solver",name:"Word Search",url:"/wordsearch"}],description:"Automated puzzle solvers",name:"Solvers",rootUrl:"/solvers"},{children:[{description:" A Vignere cipher which uses plaintext as the key",name:"Autokey",url:"/autokey"},{description:"Letters are shifted by a fixed value",name:"Caesar",url:"/caesar"},{description:"Letters are mapped based on a key word",name:"Vignere",url:"/vigenere"}],description:"Scrambled letters",name:"Ciphers",rootUrl:"/cipher"},{children:[{description:"Mapping numbers to letters (ASCII, Binary, Ordinal)",name:"AutoConvert",url:"/autoconvert"},{description:"Six dots in a two-by-three grid",name:"Braille",url:"/braille"},{description:"Dots and dashes with separations",name:"Morse Code",url:"/morse"},{description:"Parts of a tic-tac-toe grid or X, some with dot",name:"Pigpen",url:"/pigpen"},{description:" Positions of two different flags",name:"Semaphore",url:"/semaphore"}],description:"Different ways to represent letters",name:"Encodings",rootUrl:"/encoding"},{children:[{description:"Static display of number to letter mapping",name:"Character Encodings",url:"/characterencodings"},{description:"Words used to clearly identify a letter",name:"NATO Alphabet",url:"/nato"},{description:"Different simple flags which convey a letter",name:"Naval Flags",url:"/navalflags"},{description:"Find a resistor value using different colored bands",name:"Resistors",url:"/resistors"}],description:"Miscellaneous information",name:"Reference",rootUrl:"/reference"}],name:"Puzztool"}}}]),e}()}},[[101,3,4]]]);
//# sourceMappingURL=main.abff02ca.chunk.js.map