(this["webpackJsonpall-media-desk"]=this["webpackJsonpall-media-desk"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=(n(9),n(3)),u=n(0);var l=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("output here"),i=Object(s.a)(a,2),l=i[0],o=i[1],b=function e(t){for(var n=t=(t=t.replace("(","").replace(")","")).split(/(\+|\-|\*|\/)/),c=n.some((function(e){return["*","/"].includes(e)})),r=0;r<n.length;r++)"*"==n[r]&&c&&(n[r-1]=Number(n[r-1])*Number(n[r+1]),n.splice(r,2)),"+"!=n[r]||c||(n[r-1]=Number(n[r-1])+Number(n[r+1]),n.splice(r,2)),"-"!=n[r]||c||(n[r-1]=Number(n[r-1])-Number(n[r+1]),n.splice(r,2)),"/"==n[r]&&c&&(n[r-1]=Number(n[r-1])/Number(n[r+1]),n.splice(r,2));return n.length>1?e(n.join("")):n.toString()},m=function e(t){for(var n="",c=!1,r=t,a=0;a<t.length;a++)if("("==t[a]&&(c=!0,n=""),c&&(n+=t[a]),")"==t[a]&&c){var i=b(n);r=r.replace(n,i),n="",c=!1}return r.includes("(")?e(r):b(r)};return Object(u.jsx)("div",{className:"App bg-gray-900 min-h-screen min-w-screen",children:Object(u.jsxs)("div",{className:"flex justify-center flex-col max-w-md mx-auto",children:[Object(u.jsx)("p",{className:"text-white p-2 mt-20 text-center",children:l}),Object(u.jsx)("input",{className:"p-2 bg-gray-200 w-full",autoFocus:!0,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("button",{onClick:function(){o(m(n))},className:"bg-red-500 p-2 text-white mt-6",children:"Calculate"})]})})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),o()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.ed37f961.chunk.js.map