(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(t,e,a){},60:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),r=a(25),s=a.n(r),i=(a(32),a(16),a(6)),o=a(7),j=a.n(o),d=a(8),b=a(1);var l=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)("a",{class:"navbar-brand",href:"#",children:"Navbar"}),Object(b.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})}),Object(b.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsx)("div",{class:"navbar-nav",children:a.map((function(t){return Object(b.jsx)(d.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id),fromDashboard:!1},children:t.name})}))})})]})})})};var h=function(t){var e=t.match,a=Object(c.useState)([]),n=Object(i.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)([]),l=Object(i.a)(o,2),h=l[0],p=l[1],u=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(t){s(t.data),p(t.data.post)}))}),[u]),Object(b.jsxs)("div",{children:["Category with id ",r.id,Object(b.jsxs)("p",{children:["Category: ",Object(b.jsx)("strong",{children:r.name})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{class:"row",children:h.map((function(t){return Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.content}),Object(b.jsx)("p",{children:t.id}),Object(b.jsx)(d.b,{to:{pathname:"/post/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})};var p=function(t){var e=t.match,a=Object(c.useState)([]),n=Object(i.a)(a,2),r=n[0],s=n[1],o=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(o,"/")}).then((function(t){s(t.data)}))}),[o]),Object(b.jsxs)("div",{children:["Post with id ",r.id,Object(b.jsxs)("p",{children:["Title: ",Object(b.jsx)("strong",{children:r.title}),"; piblished at: ",r.pub_date,"; in archive?: ",r.in_archive]}),Object(b.jsxs)("p",{children:["Content: ",Object(b.jsx)("strong",{children:r.content})]})]})},u=a(2);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(l,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/post/:id/",exact:!0,component:p}),Object(b.jsx)(u.a,{path:"/category/:id/",exact:!0,component:h})]})]})})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),c(t),n(t),r(t),s(t)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.01c9f3e0.chunk.js.map