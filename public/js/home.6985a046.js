(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"1d0d":function(t,e,n){},"3daa":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Camera"),t._m(0),t.cars?n("car-list",{attrs:{cars:t.cars}}):t._e()],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex_box radio_box"},[n("span",{staticClass:"option option--active"},[t._v(" Wszystkie ")]),n("span",{staticClass:"option"},[t._v(" Wolne ")]),n("span",{staticClass:"option"},[t._v(" Wynajęte ")])])}],s=n("a34a"),r=n.n(s),o=n("d722"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex_box tiles"},t._l(t.cars,(function(t){return n("car-tile",{key:t._id,attrs:{car:t}})})),1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile"},[n("p",[t._v(" "+t._s(t.car.number)+" ")]),n("p",[t._v(" "+t._s(t.car.model)+" "+t._s(t.car.brand))])])},d=[],h={props:{car:{type:Object,required:!0}},mounted:function(){var t=document.body;t.classList.add("modal-open")},methods:{closeModal:function(){this.$emit("close");var t=document.body;t.classList.remove("modal-open")}}},v=h,p=n("2877"),f=Object(p["a"])(v,l,d,!1,null,"7bef925f",null),m=f.exports,b={components:{CarTile:m},props:{cars:{type:Array,required:!0}},mounted:function(){var t=document.body;t.classList.add("modal-open")},methods:{closeModal:function(){this.$emit("close");var t=document.body;t.classList.remove("modal-open")}}},g=b,_=(n("c49b"),Object(p["a"])(g,c,u,!1,null,"2bef5586",null)),y=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"camera"},[n("video",{staticClass:"feed",attrs:{autoplay:"",playsinline:""}}),n("button",{attrs:{id:"snap"},on:{click:t.takepicture}},[t._v(" SNAP ")]),n("canvas",{attrs:{id:"canvas"}}),t._m(0)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"output"},[n("img",{attrs:{id:"photo",alt:"The screen capture will appear in this box."}})])}],C={name:"Camera",data:function(){return{front:!1,videoPlayer:null,canvas:null,photo:null,snapBtn:null,width:320,height:0,streaming:!1}},beforeMount:function(){this.videoPlayer=document.querySelector("video"),this.canvas=document.getElementById("canvas"),this.photo=document.getElementById("photo"),this.startbutton=document.getElementById("snap"),this.init()},created:function(){},methods:{init:function(){var t=this;"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices?(navigator.mediaDevices.getUserMedia({video:{facingMode:this.front?"user":"environment"}}).then((function(e){t.videoPlayer.srcObject=e,t.videoPlayer.play()})),this.video.addEventListener("canplay",(function(t){this.streaming||(this.height=this.video.videoHeight/(this.video.videoWidth/this.width),this.video.setAttribute("width",this.width),this.video.setAttribute("height",this.height),this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this.streaming=!0)}),!1)):alert("cannot get Media Devices")},takepicture:function(){alert("pstryk fotka");var t=this.canvas.getContext("2d");if(this.width&&this.height){this.canvas.width=this.width,this.canvas.height=this.height,t.drawImage(this.video,0,0,this.width,this.height);var e=this.canvas.toDataURL("image/png");this.photo.setAttribute("src",e)}else alert("clearphoto")}}},k=C,E=Object(p["a"])(k,w,x,!1,null,null,null),$=E.exports;function j(t,e,n,i,a,s,r){try{var o=t[s](r),c=o.value}catch(u){return void n(u)}o.done?e(c):Promise.resolve(c).then(i,a)}function A(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var s=t.apply(e,n);function r(t){j(s,i,a,r,o,"next",t)}function o(t){j(s,i,a,r,o,"throw",t)}r(void 0)}))}}var L={name:"Homepage",components:{CarList:y,Camera:$},data:function(){return{error:null,cars:null}},beforeRouteEnter:function(){var t=A(r.a.mark((function t(e,n,i){var a;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].listCars();case 2:if(a=t.sent,200===a.status){t.next=5;break}return t.abrupt("return",this.error=a.data.message);case 5:i((function(t){t.cars=a.data})),i();case 7:case"end":return t.stop()}}),t,this)})));function e(e,n,i){return t.apply(this,arguments)}return e}(),computed:{},mounted:function(){var t=A(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),methods:{}},M=L,P=(n("fc54"),Object(p["a"])(M,i,a,!1,null,null,null));e["default"]=P.exports},"6f61":function(t,e,n){},c49b:function(t,e,n){"use strict";var i=n("1d0d"),a=n.n(i);a.a},fc54:function(t,e,n){"use strict";var i=n("6f61"),a=n.n(i);a.a}}]);