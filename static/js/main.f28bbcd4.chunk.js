(this["webpackJsonpprint-speed-test"]=this["webpackJsonpprint-speed-test"]||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(4),i=n.n(s),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))},o=n(2),u=n(1),l=function(e){var t=e.char,n=e.active,c=e.error,r=e.success;return Object(u.jsx)("span",{className:c?"bg-danger text-white p-1 rounded-2":n?"bg-success text-white p-1 rounded-2":r?"text-success":"text-dark",children:t})},b="CREATE_SYMBOLS",j="SET_ACTIVE_INDEX",d="SET_ERROR_INDEX",x="ADD_ERRORS_COUNT",f="SET_START",O="RESTART",h=function(e){return{type:d,errorIndex:e}},m=function(){var e=Object(o.c)((function(e){return e.symbols})),t=Object(o.c)((function(e){return e.activeIndex})),n=Object(o.c)((function(e){return e.errorIndex})),r=Object(o.b)(),s=function(n){t===e.length-1&&alert("\u0424\u0438\u043d\u0438\u0448"),"Shift"!==n.key&&"Backspace"!==n.key&&"Escape"!==n.key&&"Alt"!==n.key&&"Control"!==n.key&&(n.key===e[t]?(r(function(e){return{type:j,activeIndex:e}}(t+1)),r(h(null))):(r(h(t)),r({type:x})))};return Object(c.useEffect)((function(){return document.addEventListener("keydown",s),function(){return document.removeEventListener("keydown",s)}}),[s]),Object(u.jsx)("p",{className:"fs-5 me-4 d-block",style:{width:"730px"},children:e.map((function(e,c){return Object(u.jsx)(l,{char:e,active:t===c,error:n===c,success:t>c},c)}))})},p=n(11),v=function(){var e=Object(c.useState)(1),t=Object(p.a)(e,2),n=t[0],r=t[1],s=Object(o.c)((function(e){return e.activeIndex})),i=Object(o.c)((function(e){return e.errorsCount})),a=Object(o.c)((function(e){return e.symbols.length})),l=Object(o.b)();Object(c.useEffect)((function(){var e=setInterval((function(){r(n+1)}),1e3);return function(){clearInterval(e)}}),[n]);return Object(u.jsxs)("div",{className:"border-start border-2 ps-2",style:{width:"130px"},children:[Object(u.jsxs)("div",{className:"mb-2",children:[Object(u.jsxs)("div",{className:"text-muted d-flex align-items-center text-uppercase",children:[Object(u.jsx)("i",{className:"fas fa-tachometer-alt me-1"})," \u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"]}),Object(u.jsxs)("div",{className:"text-info",children:[Object(u.jsx)("span",{className:"me-1",style:{fontSize:"1.9rem"},children:Math.floor(s/n*60)}),Object(u.jsx)("span",{style:{fontSize:"0.9rem"},children:"\u0437\u043d./\u043c\u0438\u043d."})]})]}),Object(u.jsxs)("div",{className:"mb-2",children:[Object(u.jsxs)("div",{className:"text-muted d-flex align-items-center text-uppercase",children:[Object(u.jsx)("i",{className:"fas fa-bullseye"})," \u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c"]}),Object(u.jsxs)("div",{className:"text-info",children:[Object(u.jsx)("span",{className:"me-1",style:{fontSize:"2rem"},children:Math.floor((a-i)/a*100)}),Object(u.jsx)("span",{style:{fontSize:"0.9rem"},children:"%"})]})]}),Object(u.jsx)("button",{onClick:function(){l({type:O})},onMouseDown:function(e){return e.preventDefault()},className:"btn btn-outline-primary",children:"\u0417\u0430\u043d\u043e\u0432\u043e"})]})},y=function(){var e=Object(o.b)();return Object(u.jsxs)("div",{className:"position-absolute top-0 end-0 bottom-0 start-0 bg-white d-flex flex-column justify-content-center align-items-center p-3 rounded-3 shadow",style:{width:"450px",height:"100px",margin:"auto"},children:[Object(u.jsx)("h5",{children:'\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0442\u0435\u0441\u044c \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041d\u0430\u0447\u0430\u0442\u044c"!'}),Object(u.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){e({type:f,isStart:!0})},children:"\u041d\u0430\u0447\u0430\u0442\u044c!"})]})},N=function(){var e=Object(o.b)(),t="\u0414\u0430\u0432\u043d\u043e \u0432\u044b\u044f\u0441\u043d\u0435\u043d\u043e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u043a\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0430. \u0414\u0430\u0432\u043d\u043e \u0432\u044b\u044f\u0441\u043d\u0435\u043d\u043e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u043a\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0430. \u0414\u0430\u0432\u043d\u043e \u0432\u044b\u044f\u0441\u043d\u0435\u043d\u043e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u043a\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0430. \u0414\u0430\u0432\u043d\u043e \u0432\u044b\u044f\u0441\u043d\u0435\u043d\u043e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u043a\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0430. \u0414\u0430\u0432\u043d\u043e \u0432\u044b\u044f\u0441\u043d\u0435\u043d\u043e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u043a\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0430. \u0414\u0430\u0432\u043d\u043e \u0432\u044b\u044f\u0441\u043d\u0435\u043d\u043e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u043a\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0430.",n=Object(o.c)((function(e){return e.isStart}));return Object(c.useEffect)((function(){e({type:b,text:t})}),[t]),n?Object(u.jsx)("div",{className:"vh-100 bg-info",children:Object(u.jsx)("div",{className:"container d-flex justify-content-center pt-5",children:Object(u.jsxs)("div",{className:"d-flex justify-content-between bg-white rounded-3 p-5",children:[Object(u.jsx)(m,{}),Object(u.jsx)(v,{})]})})}):Object(u.jsx)("div",{className:"bg-info position-relative vh-100",children:Object(u.jsx)(y,{})})},g=n(5),S=n(3),I={symbols:[],activeIndex:0,errorIndex:null,errorsCount:0,isStart:!1},E=Object(g.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(S.a)(Object(S.a)({},e),{},{symbols:t.text.split("")});case j:return Object(S.a)(Object(S.a)({},e),{},{activeIndex:t.activeIndex});case d:return Object(S.a)(Object(S.a)({},e),{},{errorIndex:t.errorIndex});case x:return Object(S.a)(Object(S.a)({},e),{},{errorsCount:e.errorsCount+1});case f:return Object(S.a)(Object(S.a)({},e),{},{isStart:t.isStart});case O:return Object(S.a)(Object(S.a)({},e),{},{activeIndex:0,errorIndex:null,errorsCount:0});default:return e}}));i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(o.a,{store:E,children:Object(u.jsx)(N,{})})}),document.getElementById("root")),a()}},[[23,1,2]]]);
//# sourceMappingURL=main.f28bbcd4.chunk.js.map