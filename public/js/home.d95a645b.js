(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"1d0d":function(t,e,n){},"3daa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("camera"),t._m(0),t.cars?n("car-list",{attrs:{cars:t.cars}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex_box radio_box"},[n("span",{staticClass:"option option--active"},[t._v(" Wszystkie ")]),n("span",{staticClass:"option"},[t._v(" Wolne ")]),n("span",{staticClass:"option"},[t._v(" Wynajęte ")])])}],s=n("a34a"),i=n.n(s),o=n("d722"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex_box tiles"},t._l(t.cars,(function(t){return n("car-tile",{key:t._id,attrs:{car:t}})})),1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile"},[n("p",[t._v(" "+t._s(t.car.number)+" ")]),n("p",[t._v(" "+t._s(t.car.model)+" "+t._s(t.car.brand))])])},d=[],f={props:{car:{type:Object,required:!0}},mounted:function(){var t=document.body;t.classList.add("modal-open")},methods:{closeModal:function(){this.$emit("close");var t=document.body;t.classList.remove("modal-open")}}},v=f,m=n("2877"),p=Object(m["a"])(v,l,d,!1,null,"7bef925f",null),b=p.exports,_={components:{CarTile:b},props:{cars:{type:Array,required:!0}},mounted:function(){var t=document.body;t.classList.add("modal-open")},methods:{closeModal:function(){this.$emit("close");var t=document.body;t.classList.remove("modal-open")}}},h=_,y=(n("c49b"),Object(m["a"])(h,c,u,!1,null,"2bef5586",null)),w=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"camera"},[n("video",{staticClass:"feed"}),n("button",{staticClass:"snap"},[t._v(" SNAP ")])])}],g={name:"Camera",methods:{init:function(){"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){var e=document.querySelector("video");e.setAttribute("autoplay",""),e.setAttribute("muted",""),e.setAttribute("playsinline",""),e.srcObject=t,e.play()})):alert("cannot get Media Devices")},beforeMount:function(){this.init()}}},$=g,j=Object(m["a"])($,x,C,!1,null,null,null),k=j.exports;function E(t,e,n,a,r,s,i){try{var o=t[s](i),c=o.value}catch(u){return void n(u)}o.done?e(c):Promise.resolve(c).then(a,r)}function M(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function i(t){E(s,a,r,i,o,"next",t)}function o(t){E(s,a,r,i,o,"throw",t)}i(void 0)}))}}var O={name:"Homepage",components:{CarList:w,Camera:k},data:function(){return{error:null,cars:null}},beforeRouteEnter:function(){var t=M(i.a.mark((function t(e,n,a){var r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].listCars();case 2:if(r=t.sent,200===r.status){t.next=5;break}return t.abrupt("return",this.error=r.data.message);case 5:a((function(t){t.cars=r.data})),a();case 7:case"end":return t.stop()}}),t,this)})));function e(e,n,a){return t.apply(this,arguments)}return e}(),computed:{},mounted:function(){var t=M(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),methods:{}},A=O,L=(n("fc54"),Object(m["a"])(A,a,r,!1,null,null,null));e["default"]=L.exports},"6f61":function(t,e,n){},c49b:function(t,e,n){"use strict";var a=n("1d0d"),r=n.n(a);r.a},fc54:function(t,e,n){"use strict";var a=n("6f61"),r=n.n(a);r.a}}]);