(this["webpackJsonpprint-speed-test"]=this["webpackJsonpprint-speed-test"]||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(6),i=n.n(r),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))},u=n(2),l=n(4),o=n.n(l),j=n(8),d=n(0),b=function(e){var t=e.char,n=e.active,c=e.error,s=e.success;return Object(d.jsx)("span",{className:c?"bg-danger text-white p-1 rounded-2":n?"bg-success text-white p-1 rounded-2":s?"text-success":"text-dark",children:t})},x="CREATE_SYMBOLS",f="SET_ACTIVE_INDEX",O="SET_ERROR_INDEX",h="ADD_INDEX_TO_ERRORS",m="SET_START",p="SET_IS_LOADING",v="SET_FINISH",y="SET_RESULT",N=function(e){return{type:x,text:e}},g=function(e){return{type:O,errorIndex:e}},S=function(e){return{type:p,isLoading:e}};function I(e){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(){return Object(d.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100",children:Object(d.jsx)("p",{className:"display-6",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})},L=function(){var e=Object(u.c)((function(e){return e.symbols})),t=Object(u.c)((function(e){return e.activeIndex})),n=Object(u.c)((function(e){return e.errorIndex})),s=Object(u.c)((function(e){return e.errors})),r=Object(u.c)((function(e){return e.isLoading})),i=Object(u.b)(),a=["Shift","Backspace","Escape","Alt","Control","Enter","Tab","CapsLock","ArrowDown","ArrowUp","ArrowRight","ArrowLeft","NumLock","Delete","PrintScreen","GroupNext"],l=function(n){a.includes(n.key)||(n.key===e[t]?t===e.length-1?i({type:v}):(i(function(e){return{type:f,activeIndex:e}}(t+1)),i(g(null))):(i(g(t)),s.includes(t)||i({type:h,index:t})))};return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(S(!0)),e.next=3,I("https://fish-text.ru/get");case 3:t=e.sent,i(S(!1)),i(N(t.text));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){return document.addEventListener("keydown",l),function(){return document.removeEventListener("keydown",l)}}),[l]),Object(d.jsx)("div",{className:"fs-5 me-4 d-block",style:{width:"730px"},children:r?Object(d.jsx)(E,{}):e.map((function(e,c){return Object(d.jsx)(b,{char:e,active:t===c,error:n===c,success:t>c},c)}))})},T=n(15),k=function(){var e=Object(c.useState)(1),t=Object(T.a)(e,2),n=t[0],s=t[1],r=Object(u.c)((function(e){return e.activeIndex})),i=Object(u.c)((function(e){return e.errors.length})),a=Object(u.c)((function(e){return e.symbols.length})),l=Object(u.c)((function(e){return e.isLoading})),o=(a-i)/a*100||0,j=Math.floor(r/n*60),b=Object(u.b)();return Object(c.useEffect)((function(){var e=setInterval((function(){l||(b({type:y,result:{speed:j,truth:o}}),s(n+1))}),1e3);return function(){clearInterval(e)}}),[n]),Object(d.jsxs)("div",{className:"border-start border-2 ps-2",style:{width:"130px"},children:[Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)("div",{className:"text-muted d-flex align-items-center text-uppercase",children:[Object(d.jsx)("i",{className:"fas fa-tachometer-alt me-1"})," \u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"]}),Object(d.jsxs)("div",{className:"text-info",children:[Object(d.jsx)("span",{className:"me-1",style:{fontSize:"2rem"},children:j}),Object(d.jsx)("span",{style:{fontSize:"0.9rem"},children:"\u0437\u043d./\u043c\u0438\u043d."})]})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)("div",{className:"text-muted d-flex align-items-center text-uppercase",children:[Object(d.jsx)("i",{className:"fas fa-bullseye"})," \u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c"]}),Object(d.jsxs)("div",{className:"text-info",children:[Object(d.jsx)("span",{className:"me-1",style:{fontSize:"2rem"},children:o&&(o<0?0:(0^o)===o?o:o.toFixed(1))}),Object(d.jsx)("span",{style:{fontSize:"0.9rem"},children:"%"})]})]}),Object(d.jsx)("a",{href:"/",tabIndex:-1,className:"btn btn-outline-primary",children:"\u0417\u0430\u043d\u043e\u0432\u043e"})]})},F=function(){var e=Object(u.c)((function(e){return e.isFinish})),t=Object(u.c)((function(e){return e.result})),n=Object(u.b)();return Object(d.jsxs)("div",{className:"position-absolute top-0 end-0 bottom-0 start-0 bg-white d-flex flex-column justify-content-center align-items-center p-3 rounded-3 shadow",style:{width:"600px",height:"300px",margin:"auto"},children:[e&&t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)("div",{className:"text-muted d-flex align-items-center text-uppercase",children:[Object(d.jsx)("i",{className:"fas fa-tachometer-alt me-1"})," \u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"]}),Object(d.jsxs)("div",{className:"text-info",children:[Object(d.jsx)("span",{className:"me-1",style:{fontSize:"1.9rem"},children:t.speed}),Object(d.jsx)("span",{style:{fontSize:"0.9rem"},children:"\u0437\u043d./\u043c\u0438\u043d."})]})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)("div",{className:"text-muted d-flex align-items-center text-uppercase",children:[Object(d.jsx)("i",{className:"fas fa-bullseye"})," \u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c"]}),Object(d.jsxs)("div",{className:"text-info",children:[Object(d.jsx)("span",{className:"me-1",style:{fontSize:"2rem"},children:(0^t.truth)===t.truth?t.truth:t.truth.toFixed(1)}),Object(d.jsx)("span",{style:{fontSize:"0.9rem"},children:"%"})]})]})]}),Object(d.jsx)("h5",{children:e?'\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043f\u0440\u043e\u0431\u044b\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041d\u0430\u0447\u0430\u0442\u044c!"':'\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041d\u0430\u0447\u0430\u0442\u044c!"'}),Object(d.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){n({type:m,isStart:!0})},children:"\u041d\u0430\u0447\u0430\u0442\u044c!"})]})},_=function(){var e=Object(u.c)((function(e){return e.isStart})),t=Object(u.c)((function(e){return e.isFinish}));return!e||t?Object(d.jsx)("div",{className:"bg-info position-relative vh-100",children:Object(d.jsx)(F,{})}):Object(d.jsx)("div",{className:"vh-100 bg-info user-select-none",children:Object(d.jsx)("div",{className:"container d-flex justify-content-center pt-5",children:Object(d.jsxs)("div",{className:"d-flex justify-content-between bg-white rounded-3 p-5",children:[Object(d.jsx)(L,{}),Object(d.jsx)(k,{})]})})})},A=n(7),R=n(16),D=n(3),z={symbols:[],activeIndex:0,errorIndex:null,errors:[],isStart:!1,isLoading:!1,result:null,isFinish:!1},C=Object(A.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(D.a)(Object(D.a)({},e),{},{symbols:t.text.split("")});case f:return Object(D.a)(Object(D.a)({},e),{},{activeIndex:t.activeIndex});case O:return Object(D.a)(Object(D.a)({},e),{},{errorIndex:t.errorIndex});case h:return Object(D.a)(Object(D.a)({},e),{},{errors:[].concat(Object(R.a)(e.errors),[t.index])});case m:return Object(D.a)(Object(D.a)({},e),{},{isStart:t.isStart,isFinish:!1,result:null});case p:return Object(D.a)(Object(D.a)({},e),{},{isLoading:t.isLoading});case v:return Object(D.a)(Object(D.a)({},e),{},{symbols:[],activeIndex:0,errorIndex:null,errors:[],isStart:!1,isFinish:!0});case y:return Object(D.a)(Object(D.a)({},e),{},{result:t.result});default:return e}}));i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u.a,{store:C,children:Object(d.jsx)(_,{})})}),document.getElementById("root")),a()}},[[29,1,2]]]);
//# sourceMappingURL=main.a539aed1.chunk.js.map