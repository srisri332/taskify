(this.webpackJsonptaskify=this.webpackJsonptaskify||[]).push([[0],[,,,,,,,,,,,,,function(A,e,t){A.exports=t.p+"static/media/settings (1).63291610.png"},function(A,e,t){A.exports=t.p+"static/media/user.805ac484.png"},function(A,e,t){A.exports=t.p+"static/media/find.80552311.png"},function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA5RAAAOUQHUtve0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAxQTFRF////JIj/JIj/JIj/F8uszQAAAAN0Uk5TALDnIN0dvQAAATZJREFUeNrt2LENwCAQBMF3ZzSBO6NeyHD+yUnWbAGnia+q3bNvoxIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwFMNu9H2D1V2qHAwAAAAAAAAAAAAAAAAAAAAAAAMgD4kelrxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA04mH0SDlAalXwAAAAASUVORK5CYII="},function(A,e,t){A.exports=t.p+"static/media/close.fa5a1660.png"},,,function(A,e,t){A.exports=t(37)},,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},,,,,,,function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),c=t(5),i=t.n(c),r=(t(25),t(26),t(13)),s=t.n(r),l=t(14),o=t.n(l),u=t(15),m=t.n(u);var d=function(){return n.a.createElement("div",{className:"main-nav"},n.a.createElement("div",{className:"left-nav"},n.a.createElement("div",{className:"hamburger"},n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"line"})),n.a.createElement("div",{className:"setting"},n.a.createElement("img",{src:s.a})),n.a.createElement("div",{className:"profile"},n.a.createElement("img",{src:o.a}))),n.a.createElement("div",{className:"right-nav"},n.a.createElement("div",{className:"logo"},n.a.createElement("img",{src:m.a})),n.a.createElement("p",null,"Taskify")))},f=(t(27),t(2)),v=(t(28),t(3));t(29),t(30);var g=function(A){var e=A.task,t=A.deleteTask;return n.a.createElement("div",{className:"each-task"},n.a.createElement("input",{type:"checkbox",id:"checkbox",onClick:t})," ",n.a.createElement("label",null,e))},p=t(16),E=t.n(p),b=t(17),N=t.n(b);var h=function(A){var e=A.deleteList,t=Object(a.useState)(""),c=Object(f.a)(t,2),i=c[0],r=c[1],s=Object(a.useState)(!1),l=Object(f.a)(s,2),o=l[0],u=l[1],m=Object(a.useState)(""),d=Object(f.a)(m,2),p=d[0],b=d[1],h=Object(a.useState)([]),k=Object(f.a)(h,2),j=k[0],O=k[1];return n.a.createElement("div",{className:"list-group"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"},n.a.createElement("form",{onSubmit:function(A){A.preventDefault()}},n.a.createElement("input",{type:"text",onChange:function(A){A.preventDefault(),r(A.target.value)},value:i,className:"title-input",placeholder:"Set Title"})),n.a.createElement("img",{src:N.a,className:"close-button",onClick:e})),n.a.createElement("div",{className:"tasks"},o?n.a.createElement("form",{onSubmit:function(A){A.preventDefault(),""!=p&&O([].concat(Object(v.a)(j),[p])),u(!1),b("")}},n.a.createElement("input",{type:"text",onChange:function(A){A.preventDefault(),b(A.target.value)},className:"task-input",placeholder:"Click again to add",onBlur:function(A){A.preventDefault(),""!=p&&O([].concat(Object(v.a)(j),[p])),u(!1),b("")}})):n.a.createElement("div",{className:"add-task",onClick:function(){u(!0)}},n.a.createElement("span",{className:"plus"},n.a.createElement("img",{src:E.a}))," ","Add a task"),j.map((function(A){return n.a.createElement(g,{task:A,key:A,deleteTask:function(){!function(A){var e=A.task,t=j.filter((function(A){return A!=e}));O(Object(v.a)(t))}({task:A})}})})))))},k=t(7);var j=Object(k.b)((function(A){return{list:A.list.lists}}),(function(A){return{addList:function(e){return A(function(A){return function(e,t){e({type:"ADD_LIST",list:A})}}(e))},delList:function(e){return A(function(A){return function(e,t){e({type:"DELETE_LIST",list:A})}}(e))}}}))((function(A){var e=Object(a.useState)(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),t=Object(f.a)(e,2),c=t[0],i=t[1];return console.log(A.list),n.a.createElement("div",{className:"main-list"},A.list.map((function(e){return n.a.createElement(h,{key:e,deleteList:function(){!function(e){var t=e.list_id;A.delList(t)}({list_id:e})}})})),n.a.createElement("button",{className:"add-list",type:"click",onClick:function(){i(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),A.addList(c)}},"Add List"))}));var O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=t(1),y={logged:[{id:1,name:"srisri"},{id:2,name:"seocnd"}]},D=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return A},I=t(11),L={lists:[]},w=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIST":return A.lists=[].concat(Object(v.a)(A.lists),[e.list]),{lists:A.lists};case"DELETE_LIST":var t=A.lists.filter((function(A){return A!==e.list}));return Object(I.a)(Object(I.a)({},A),{},{lists:t})}return A},x=Object(S.c)({auth:D,list:w}),T=t(19),C=Object(S.d)(x,Object(S.a)(T.a));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k.a,{store:C},n.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.ecee2d5e.chunk.js.map