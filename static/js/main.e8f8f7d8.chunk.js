(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),s=(n(17),n(18),n(10)),i=n(3),u=(n(19),n(20),n(21),n(5)),l=n(9),j=n.n(l),b=n(11),d="https://pixabay.com/api/",m="23089683-10e6383e94187ff47334541d4";function h(e,t){return f.apply(this,arguments)}function f(){return(f=Object(b.a)(j.a.mark((function e(t,n){var c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(d,"?q=").concat(t,"&page=").concat(n,"&key=").concat(m,"&image_type=photo&orientation=horizontal&per_page=12"),e.prev=1,e.next=4,fetch(c);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.hits);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var O=n(1);function g(e){var t=e.clearRender,n=e.onValueSubmit,a=e.onPageSubmit,r=Object(c.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1],j=Object(c.useState)(1),b=Object(i.a)(j,2),d=b[0],m=b[1];return Object(O.jsx)("header",{className:"Searchbar",children:Object(O.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===s.trim())return u.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435!"),void t();n(s),l(""),a(d)},children:[Object(O.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(O.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(O.jsx)("input",{className:"SearchForm-input",type:"text",value:s,onChange:function(e){l(e.target.value.toLowerCase()),m(1)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}function p(e){var t=e.onClose,n=e.largeImageURL,c=e.webformatURL,a=e.id;return Object(O.jsx)("li",{className:"ImageGalleryItem",onClick:function(){t(n)},children:Object(O.jsx)("img",{src:c,alt:a,className:"ImageGalleryItem-image"})})}function v(e){var t=e.onClick;return Object(O.jsx)("div",{className:"Button-div",children:Object(O.jsx)("button",{className:"Button",type:"button",onClick:t,children:"LoadMore"})})}function x(e){var t=e.arr,n=e.onClose,c=e.handleClick;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,c=e.webformatURL,a=e.largeImageURL;return Object(O.jsx)(p,{webformatURL:c,largeImageURL:a,onClose:n},t)}))}),t.length%12===0&&Object(O.jsx)(v,{onClick:c})]})}var S=document.querySelector("#modal-root");function C(e){var t=e.onClose,n=e.largeImageURL;Object(c.useEffect)((function(){return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(O.jsx)("div",{className:"Overlay",onClick:function(e){e.target===e.currentTarget&&t()},children:Object(O.jsx)("div",{className:"Modal",children:Object(O.jsx)("img",{src:n,alt:n})})}),S)}var y=n(12),k=n.n(y);n(44);function w(){return Object(O.jsx)(k.a,{type:"Circles",color:"#3f51b5",height:100,width:100,timeout:3e3})}function L(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),o=Object(i.a)(r,2),l=o[0],j=o[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),m=d[0],f=d[1],p=Object(c.useState)("idle"),v=Object(i.a)(p,2),S=v[0],y=v[1],k=Object(c.useState)(!1),L=Object(i.a)(k,2),N=L[0],I=L[1],R=Object(c.useState)(""),E=Object(i.a)(R,2),U=E[0],F=E[1];Object(c.useEffect)((function(){n&&(y("pending"),console.log("page in useEffect:",l),h(n).then((function(e){if(0!==e.length)return f(e),y("resolved"),void j((function(e){return e+1}));u.b.warn("\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0435\u0442"),y("idle")})).catch((function(e){console.log(e),y("error")})))}),[n]),Object(c.useEffect)((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[m]);var B=function(e){I(!N),F(e)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{onValueSubmit:a,clearRender:function(){y("idle")},onPageSubmit:j}),Object(O.jsx)(u.a,{theme:"colored",autoClose:2e3}),"idle"===S&&Object(O.jsx)("p",{children:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}),"pending"===S&&Object(O.jsx)("div",{className:"Loader",children:Object(O.jsx)(w,{})}),"resolved"===S&&Object(O.jsx)(x,{arr:m,handleClick:function(){j((function(e){return e+1})),console.log("page in handleClick:",l),h(n,l).then((function(e){f((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))})),y("resolved")})).catch((function(e){console.log(e),y("error")}))},onClose:B}),N&&Object(O.jsx)(C,{value:n,onClose:B,largeImageURL:U})]})}o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e8f8f7d8.chunk.js.map