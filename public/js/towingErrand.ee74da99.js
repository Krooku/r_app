(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["towingErrand"],{"273c":function(t,r,n){"use strict";var a=n("b1a1"),e=n.n(a);e.a},"9e06":function(t,r,n){"use strict";n.r(r);var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"flex_box"},[t.loaded?t._e():n("div",{staticClass:"spinner"}),t.errands&&t.errands.length>0?n("table",[t._m(0),n("tbody",t._l(t.errands,(function(r){return n("tr",{key:r._id,staticClass:"tab"},[n("th",{staticClass:"tab"},["during"===r.status?n("router-link",{attrs:{to:{name:"insertTowingErrand",params:{towingErrandId:r._id}}}},[t._v(" "+t._s(r.errandNumber)+" ")]):n("router-link",{attrs:{to:{name:"errand",params:{towingErrandId:r._id}}}},[t._v(" "+t._s(r.errandNumber)+" ")])],1),n("td",{staticClass:"tab"},[t._v(" "+t._s(r.userId.username)+" ")]),"during"===r.status?n("td",{staticClass:"tab"},[t._v(" W trakcie ")]):"realized"===r.status?n("td",{staticClass:"tab"},[t._v(" Zrealizowane ")]):"canceled"===r.status?n("td",{staticClass:"tab"},[t._v(" Anulowane ")]):t._e()])})),0)]):n("p",[t._v(" Brak zleceń ")])])},e=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("thead",[n("tr",[n("th",[t._v(" Numer zlecenia ")]),t._v(" "),n("th",[t._v(" Kierowca ")]),t._v(" "),n("th",[t._v(" Status ")])])])}],s=n("a34a"),i=n.n(s),u=n("d722");function o(t,r,n,a,e,s,i){try{var u=t[s](i),o=u.value}catch(c){return void n(c)}u.done?r(o):Promise.resolve(o).then(a,e)}function c(t){return function(){var r=this,n=arguments;return new Promise((function(a,e){var s=t.apply(r,n);function i(t){o(s,a,e,i,u,"next",t)}function u(t){o(s,a,e,i,u,"throw",t)}i(void 0)}))}}var d={data:function(){return{search:null,loadedErrands:10,error:null,errands:null,loaded:!0}},beforeRouteEnter:function(){var t=c(i.a.mark((function t(r,n,a){var e;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].listTowingErrands();case 2:if(e=t.sent,200===e.status){t.next=6;break}return console.log(e),t.abrupt("return",a({name:"insertTowingErrand"}));case 6:a((function(t){console.log(e.data),t.errands=e.data})),a();case 8:case"end":return t.stop()}}),t)})));function r(r,n,a){return t.apply(this,arguments)}return r}(),methods:{}},l=d,v=(n("273c"),n("2877")),_=Object(v["a"])(l,a,e,!1,null,"73b08604",null);r["default"]=_.exports},b1a1:function(t,r,n){}}]);