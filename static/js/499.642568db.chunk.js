/*! For license information please see 499.642568db.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{499:function(t,e,r){r.r(e),r.d(e,{Additional:function(){return E},BackButton:function(){return b},StyledInfo:function(){return _},StyledMovieCard:function(){return j},Subtitle:function(){return L}});var n,o,i,a,c,u=r(168),l=r(861),s=r(439),h=r(835),f=r(791),p=r(689),d=r(87),v=r(85),y=r(787),g=r(867),m=r(903),x=r(184);function w(){w=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var f="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var x={};l(x,a,(function(){return this}));var j=Object.getPrototypeOf,b=j&&j(j(G([])));b&&b!==r&&n.call(b,a)&&(x=b);var L=m.prototype=y.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?d:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=l(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(E.prototype),l(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),l(L,u,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var j=g.ZP.div(n||(n=(0,u.Z)(["\n  display: flex;\n  gap: 25px;\n  padding: 20px;\n  /* margin: 20px px; */\n"]))),b=g.ZP.button(o||(o=(0,u.Z)(["\n  width: 50px;\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),L=g.ZP.h3(i||(i=(0,u.Z)(["\n  margin: 10px 0;\n"]))),_=g.ZP.div(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 2.6%;\n"]))),E=g.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  margin: 0;\n"])));e.default=function(){var t,e,r=(0,p.UO)().id,n=(0,f.useState)(null),o=(0,s.Z)(n,2),i=o[0],a=o[1],c=(0,f.useState)(!1),u=(0,s.Z)(c,2),g=u[0],k=u[1],O=(0,p.TH)(),Z=(0,f.useRef)((null===(t=O.state)||void 0===t?void 0:t.from)||"/");return(0,f.useEffect)((function(){if(r){var t=function(){var t=(0,l.Z)(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(!0);try{(0,y.HI)(r).then((function(t){return a(t)}))}catch(e){a([]),k(!1),v.Am.error("Something went wrong. Please, try again")}finally{k(!1)}case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[r]),(0,x.jsxs)(x.Fragment,{children:[g&&(0,x.jsx)(h.Z,{}),(0,x.jsx)(d.rU,{to:Z.current,type:"button",children:(0,x.jsx)(b,{children:"\ud83d\udd19"})}),g&&(0,x.jsx)(h.Z,{}),i&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(j,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:i.poster_path?"https://image.tmdb.org/t/p/w342".concat(i.poster_path):m.Z,alt:"movie.original_title",width:"342"})}),(0,x.jsxs)(_,{children:[(0,x.jsxs)(L,{children:[i.original_title," ","(".concat(i.release_date?i.release_date.slice(0,4):"unknown",")")]}),(0,x.jsxs)("p",{children:["User score: ",(10*i.vote_average).toFixed(2),"%"]}),(0,x.jsx)(L,{children:"Overview"}),(0,x.jsx)("p",{children:i.overview}),(0,x.jsx)(L,{children:"Genres"}),(0,x.jsx)("p",{children:null===(e=i.genres)||void 0===e?void 0:e.map((function(t){return t.name})).join(", ")})]})]}),(0,x.jsxs)(E,{children:[(0,x.jsx)(L,{children:"Additional information"}),(0,x.jsx)(d.OL,{to:"cast",children:"Cast"}),(0,x.jsx)(d.OL,{to:"reviews",children:"Reviews"})]}),(0,x.jsx)(f.Suspense,{fallback:(0,x.jsx)(h.Z,{}),children:(0,x.jsx)(p.j3,{})})]})]})}}}]);
//# sourceMappingURL=499.642568db.chunk.js.map