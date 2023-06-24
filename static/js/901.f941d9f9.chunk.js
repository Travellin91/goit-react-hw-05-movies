"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[901],{115:function(e,t,n){n(791);var r=n(87),a=n(184);t.Z=function(e){var t=e.movies,n=e.prevLocation;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.original_title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:{pathname:"/movies/".concat(t),state:{from:n}},children:(0,a.jsx)("h3",{children:c})})},t)}))})})}},740:function(e,t,n){n.d(t,{Z:function(){return c}});var r={},a=n(184);function c(e){var t=e.text;return(0,a.jsx)("h1",{className:r.title,children:t})}},271:function(e,t,n){n.d(t,{Hq:function(){return h},XT:function(){return v},fU:function(){return m},l2:function(){return d},sv:function(){return g}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="f888f3c3fbbc8c9a0c5eba421bbc0c31";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="/trending/movie/week",i="/search/movie",f="/movie",l="/credits",p="/reviews",v=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,u.Z.get("".concat(o,"?api_key=").concat(s,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("".concat(i,"?api_key=").concat(s,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(f,"/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t).concat(l,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/movie/".concat(t).concat(p,"?api_key=").concat(s,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},901:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(689),o=n(791),i=n(87),f={},l=n(184),p=function(e){var t=e.onSearch,n=(0,o.useState)(""),r=(0,a.Z)(n,2),c=r[0],u=r[1];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===c.trim()?alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443"):(t(c),u(""))},className:f.searchForm,children:[(0,l.jsx)("input",{type:"text",name:"searchQuery",value:c,autoComplete:"off",autoFocus:!0,placeholder:"\u041f\u043e\u0448\u0443\u043a ...",onChange:function(e){u(e.target.value.toLowerCase())},className:f.searchInput}),(0,l.jsx)("button",{type:"submit",className:f.searchButton,children:"\u041f\u043e\u0448\u0443\u043a"})]})})},v=n(271),h=n(115),d=n(903),m=n(740),g=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,o.useState)([]),g=(0,a.Z)(f,2),x=g[0],Z=g[1],k=(0,o.useState)({error:null,message:""}),w=(0,a.Z)(k,2),b=w[0],y=w[1],j=(0,o.useState)(!1),S=(0,a.Z)(j,2),_=S[0],U=S[1],q=(0,s.TH)(),C=n.get("query");return(0,o.useEffect)((function(){if(C){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.prev=1,e.next=4,(0,v.Hq)(C);case 4:(t=e.sent).length?(y({error:!1,message:""}),Z(t)):y({error:!0,message:"\u0424\u0456\u043b\u044c\u043c\u0438 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0456!"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),y({error:!0,message:"\u0423\u043f\u0441! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),console.log(e.t0);case 12:return e.prev=12,U(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(m.Z,{text:"\u041f\u043e\u0448\u0443\u043a \u0444\u0456\u043b\u044c\u043c\u0456\u0432"}),_&&"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f ...",b.error&&(0,l.jsx)("div",{children:b.message}),(0,l.jsx)(p,{onSearch:function(e){c({query:e})}}),x&&(0,l.jsx)(h.Z,{movies:x,prevLocation:q})]})})}}}]);
//# sourceMappingURL=901.f941d9f9.chunk.js.map