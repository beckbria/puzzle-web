(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[14],{202:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(75),o=a(45),c=a(31),u=a(46),i=a(80),m=a(28),s=a(63),E=a(39),p=a(96),d=a(76),v=a(82),g=a(99),f=(a(202),{clear:g.a,setHomogeneous:g.c,setText:g.d});var C=Object(d.b)(e=>({homogeneous:e.encoding.autoConvert.homogeneous,text:e.encoding.autoConvert.text}),f)((function(e){var t=Object(v.a)();return l.a.createElement("div",{className:"AutoConvertStream"},l.a.createElement(m.a,{className:"AutoConvertStream-input"},l.a.createElement(m.a.Header,null,e.prompt),l.a.createElement(m.a.Body,null,l.a.createElement(s.a,{onChange:function(t){e.setText(t.currentTarget.value)},placeholder:"Text",ref:t,value:e.text}),l.a.createElement(i.a,{className:"AutoConvertStream-commands"},l.a.createElement(p.a,{defaultValue:!0,name:"options",onChange:e.setHomogeneous,type:"radio"},l.a.createElement(E.a,{value:!0},"Consistent"),l.a.createElement(E.a,{value:!1},"Mixed")),l.a.createElement(u.a,null,l.a.createElement(c.a,{onClick:function(){e.clear()},variant:"danger"},"Clear"))))),l.a.createElement(m.a,null,l.a.createElement(m.a.Header,null,"Output"),l.a.createElement(m.a.Body,null,l.a.createElement("pre",{className:"AutoConvertStream-output"},o.StringAutoConvert.convertString(e.text,e.homogeneous)||" "))))}));t.default=function(){return l.a.createElement(r.a,{description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,'AutoConvert will automatically detect and convert several encodings - simply enter your ciphertext. If all of your text is in the same encoding, you can select "force consistent encoding". This can be useful for ambigious strings.'),l.a.createElement("p",null,"Some of the supported encodings are:"),l.a.createElement("ul",null,l.a.createElement("li",null,"ASCII (A=65, B=66)"),l.a.createElement("li",null,"Five bit binary (A=00001, B=00010)"),l.a.createElement("li",null,"Eight bit binary (A=01100001, B=01100010)"),l.a.createElement("li",null,"Ordinal (A=1, B=2)"),l.a.createElement("li",null,"Ternary (A=001, E=012)"))),title:"AutoConvert"},l.a.createElement(C,{prompt:"Input"}))}}}]);
//# sourceMappingURL=14.5fe02bf6.chunk.js.map