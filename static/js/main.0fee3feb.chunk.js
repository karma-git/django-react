(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(t,a,e){},60:function(t,a,e){"use strict";e.r(a);var n=e(0),c=e.n(n),s=e(25),r=e.n(s),i=(e(32),e(16),e(6)),o=e(7),b=e.n(o),d=e(8),j=e(1);var l=function(){var t=Object(n.useState)([]),a=Object(i.a)(t,2),e=a[0],c=a[1];return Object(n.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){c(t.data)}))}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{class:"container-fluid",children:[Object(j.jsx)("a",{class:"navbar-brand",href:"#",children:"Navbar"}),Object(j.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{class:"navbar-toggler-icon"})}),Object(j.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(j.jsx)("div",{class:"navbar-nav",children:e.map((function(t){return Object(j.jsx)(d.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id),fromDashboard:!1},children:t.name})}))})})]})})})};var h=function(t){var a=t.match,e=Object(n.useState)([]),c=Object(i.a)(e,2),s=c[0],r=c[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),h=(l[0],l[1]),u=a.params.id;return Object(n.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(t){r(t.data),h(t.data.post)}))}),[u]),Object(j.jsxs)("div",{children:["Category with id ",s.id,Object(j.jsxs)("p",{children:["Category: ",Object(j.jsx)("strong",{children:s.name})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{class:"row",children:s.post.map((function(t){t.title,t.content,t.id,d.b,"/post/".concat(t.id),t.id}))})]})};var u=function(t){var a=t.match,e=Object(n.useState)([]),c=Object(i.a)(e,2),s=c[0],r=c[1],o=a.params.id;return Object(n.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(o,"/")}).then((function(t){r(t.data)}))}),[o]),Object(j.jsxs)("div",{children:["Post with id ",s.id,Object(j.jsxs)("p",{children:["Post: ",Object(j.jsx)("strong",{children:s.name})]})]})},p=e(2);var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/post/:id/",exact:!0,component:u}),Object(j.jsx)(p.a,{path:"/category/:id/",exact:!0,component:h})]})]})})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,61)).then((function(a){var e=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;e(t),n(t),c(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.0fee3feb.chunk.js.map