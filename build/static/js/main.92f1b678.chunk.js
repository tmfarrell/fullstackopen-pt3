(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(15),a=t.n(c),o=(t(20),t(6)),u=t(3),i=t(4),s=t.n(i),j="/api/persons",l=function(){return s.a.get(j).then((function(e){return e.data}))},d=function(e){return s.a.post(j,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return s.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},m=t(0),f=function(e){var n=e.person,t=e.removePerson;return Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:n.name})," / ",n.number,Object(m.jsx)("button",{onClick:t,children:"delete"})]})},O=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,c=e.newNumber,a=e.handleNumberChange;return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{value:t,onChange:r})]}),Object(m.jsxs)("div",{children:["number: ",Object(m.jsx)("input",{value:c,onChange:a})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.persons,t=e.removePerson;return Object(m.jsx)("div",{children:n.map((function(e){return Object(m.jsx)(f,{person:e,removePerson:function(){return t(e)}},e.name)}))})},v=function(e){var n=e.someFilter,t=e.handleFilter;return Object(m.jsx)("form",{children:Object(m.jsx)("div",{children:Object(m.jsx)("input",{value:n,onChange:t})})})},x=function(e){var n=e.message,t=e.class_name;return null===n?null:Object(m.jsx)("div",{className:t,children:n})},g=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),i=Object(u.a)(a,2),s=i[0],j=i[1],f=Object(r.useState)(""),g=Object(u.a)(f,2),w=g[0],N=g[1],C=Object(r.useState)(""),P=Object(u.a)(C,2),S=P[0],k=P[1],y=Object(r.useState)(null),F=Object(u.a)(y,2),E=F[0],T=F[1],_=Object(r.useState)(null),A=Object(u.a)(_,2),D=A[0],J=A[1],B=t.filter((function(e){return e.name.includes(S)}));return Object(r.useEffect)((function(){l().then((function(e){c(e)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(x,{message:E,class_name:"success"}),Object(m.jsx)(x,{message:D,class_name:"error"}),Object(m.jsx)("h2",{children:"Filter Entries"}),Object(m.jsx)(v,{someFilter:S,handleFilter:function(e){k(e.target.value)}}),Object(m.jsx)("h2",{children:"Add New Entry"}),Object(m.jsx)(O,{addPerson:function(e){e.preventDefault();var n={name:s,number:w},r=t.filter((function(e){return e.name===n.name}));if(0===r.length)d(n).then((function(e){c(t.concat(e)),j(""),N("")})).catch((function(e){J(e.response.data.error),setTimeout((function(){J(null)}),5e3)}));else{var a=Object(o.a)(Object(o.a)({},r[0]),{},{number:w});window.confirm("".concat(a.name," is already in the phonebook, replace old number with new one?"))&&b(a.id,a).then((function(e){c(t.map((function(e){return e.id!==a.id?e:a}))),j(""),N(""),T("Phone number for ".concat(a.name," updated.")),setTimeout((function(){T(null)}),5e3)})).catch((function(e){e.response.data.error?J(e.response.data.error):J("An error occurred while updating phonebook entry for ".concat(a.name,".")),setTimeout((function(){J(null)}),5e3)}))}},newName:s,handleNameChange:function(e){j(e.target.value)},newNumber:w,handleNumberChange:function(e){N(e.target.value)}}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(p,{persons:B,removePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&h(e.id).then((function(){c(t.filter((function(n){return n.id!==e.id})))}))}})]})};a.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.92f1b678.chunk.js.map