(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{173:function(e,t,c){},174:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(51),r=c.n(s),o=(c(57),c(6)),i=c(26),l=c.n(i),u=c(9),b=c.n(u),j=c(52),d=c(2),f=[{value:"USD",label:"United States Dollar"},{value:"GBP",label:"British Pound Sterling"},{value:"EUR",label:"Euro"}];var O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],u=r[1],O=Object(a.useState)(""),p=Object(o.a)(O,2),h=p[0],v=p[1],g=Object(a.useState)([]),m=Object(o.a)(g,2),S=m[0],x=m[1],D=Object(a.useState)([]),y=Object(o.a)(D,2),U=y[0],Y=y[1],k=Object(a.useState)({}),B=Object(o.a)(k,2),C=(B[0],B[1],b()().format("YYYY-MM-DD")),E=b()(b()().subtract(60,"days")).format("YYYY-MM-DD"),P={labels:U,datasets:[{label:"Last 60 days trend",data:S,fill:!0,backgroundColor:"USD"===h?"rgb(30,144,255, 0.2)":"GBP"===h?"rgb(140, 30, 20, 0.2)":"rgb(19, 138, 29, 0.2)",borderColor:"USD"===h?"#1e90ff":"GBP"===h?"#8c2214":"#11821a"}]};return Object(a.useEffect)((function(){l.a.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){e=e.data.bpi,n(e),v(e.USD.code),u(e.USD.rate)}))}),[]),Object(a.useEffect)((function(){""!==h&&void 0!==h&&l.a.get("https://api.coindesk.com/v1/bpi/historical/close.json?currency=".concat(h,"&start=").concat(E,"&end=").concat(C)).then((function(e){e=e.data.bpi,Y(Object.keys(e)),x(Object.values(e))}))}),[h]),Object(d.jsxs)("div",{className:"p-3",children:[Object(d.jsxs)("h5",{className:"p-3",children:["1 Bitcoin Equals = ",i," ",h]}),Object(d.jsx)("select",{onChange:function(e){return function(e){e=e.target.value,v(c[e].code),u(c[e].rate)}(e)},defaultValue:"USD",className:"form-select form-select-lg mb-3 m-2","aria-label":".form-select-lg example",style:{maxWidth:"300px",display:"inline-block",justifyContent:"center"},children:f.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.label},e.value)}))}),Object(d.jsx)(j.Line,{data:P,options:{scales:{}},width:50,height:20})]})};c(173);var p=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(O,{})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,175)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),h()},57:function(e,t,c){}},[[174,1,2]]]);
//# sourceMappingURL=main.9aabcc58.chunk.js.map