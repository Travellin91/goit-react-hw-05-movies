"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[972],{972:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),c={},a=n(903),s=n(791),u=n(689),i=n(87),o=n(271),l=n(740),f=n(184);function v(){var e=(0,u.UO)().movieId,t=(0,u.TH)(),n=(0,u.s0)(),v=(0,s.useState)(null),d=(0,r.Z)(v,2),p=d[0],h=d[1],x=(0,s.useState)(null),g=(0,r.Z)(x,2),m=g[0],j=g[1],w=(0,s.useState)(!1),k=(0,r.Z)(w,2),b=k[0],Z=k[1],y={color:"#2196f3"};return(0,s.useEffect)((function(){Z(!0),(0,o.l2)(e).then((function(e){h(e)})).catch((function(e){j("\u041e\u0439. \u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430..."),console.log(e)})).finally((function(){return Z(!1)}))}),[e]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)("button",{onClick:function(){var e,r;return n(null!==(e=null===t||void 0===t||null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/")},className:c.backButton,children:"Go back"}),p&&(0,f.jsx)(l.Z,{text:p.title}),b&&"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f ...",m&&(0,f.jsx)("div",{children:m}),p&&(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(p.poster_path),alt:p.title}),(0,f.jsx)("h3",{children:p.title}),(0,f.jsxs)("p",{children:["(",new Date(p.release_date).getFullYear(),")"]}),(0,f.jsxs)("p",{children:["User Score: ",p.popularity]}),(0,f.jsxs)("div",{className:"movie_overview",children:[(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:p.overview})]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"}),(0,f.jsx)(i.OL,{to:"/movies/".concat(e,"/reviews"),style:function(e){return e.isActive?y:void 0},state:t.state,children:(0,f.jsx)("p",{className:c.reviews,children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438"})}),(0,f.jsx)(i.OL,{to:"/movies/".concat(e,"/cast"),style:function(e){return e.isActive?y:void 0},state:t.state,children:(0,f.jsx)("p",{className:c.cast,children:"\u0410\u043a\u0442\u043e\u0440\u0441\u044c\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434"})}),(0,f.jsx)("hr",{}),(0,f.jsx)(u.j3,{})]})]})})}},740:function(e,t,n){n.d(t,{Z:function(){return a}});var r={},c=n(184);function a(e){var t=e.text;return(0,c.jsx)("h1",{className:r.title,children:t})}},271:function(e,t,n){n.d(t,{Hq:function(){return p},XT:function(){return d},fU:function(){return x},l2:function(){return h},sv:function(){return g}});var r=n(861),c=n(757),a=n.n(c),s=n(243),u="f888f3c3fbbc8c9a0c5eba421bbc0c31";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",o="/search/movie",l="/movie",f="/credits",v="/reviews",d=function(){var e=(0,r.Z)(a().mark((function e(){var t,n,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,s.Z.get("".concat(i,"?api_key=").concat(u,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.Z.get("".concat(o,"?api_key=").concat(u,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(l,"/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t).concat(f,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.Z.get("/movie/".concat(t).concat(v,"?api_key=").concat(u,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=972.68917238.chunk.js.map