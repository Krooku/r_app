(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["towingErrand"],{"0aa0":function(t,e,n){"use strict";var a=n("ec51"),r=n.n(a);r.a},"448b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[0==t.type?n("input",{attrs:{type:"text",name:"name",autocomplete:"off",maxlength:t.maxlength,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):1==t.type?n("input",{attrs:{type:"password",name:"name",autocomplete:"off",maxlength:t.maxlength,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):n("input",{attrs:{type:"number",name:"name",autocomplete:"off",min:t.min,max:t.max,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),n("label",{staticClass:"label-name",attrs:{for:"name"}},[n("span",{staticClass:"content-name"},[t._v(" "+t._s(t.labelText)+" ")])])])},r=[],i={props:{type:{type:Number,default:0},value:{type:String,default:""},labelText:{type:String,default:"test"},maxlength:{type:Number,default:32},min:{type:Number,default:0},max:{type:Number,default:1e4}}},o=i,s=(n("0aa0"),n("2877")),u=Object(s["a"])(o,a,r,!1,null,null,null);e["a"]=u.exports},"652c":function(t,e,n){},"9e06":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex_box"},[n("form",{staticClass:"flex_box errand",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.insertPhotos(e)}}},[n("input-label",{attrs:{type:0,"label-text":"Numer zlecenia"},model:{value:t.errandNumber,callback:function(e){t.errandNumber=e},expression:"errandNumber"}}),n("i",{staticClass:"fas fa-camera",on:{click:function(e){t.takePhoto=!t.takePhoto}}}),t.error?n("p",{staticClass:"message message--error"},[t._v(" "+t._s(t.error)+" ")]):t._e(),n("button",{attrs:{type:"submit"}},[t._v(" Wyślij ")])],1)]),t.takePhoto?n("Camera",{on:{take:t.takePhotoF,close:function(e){t.takePhoto=!1}}}):t._e(),t._l(t.photos,(function(t){return n("img",{key:t,attrs:{src:t}})}))],2)},r=[],i=n("a34a"),o=n.n(i),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"camera"},[n("video",{staticClass:"feed",attrs:{autoplay:"",playsinline:""}}),n("i",{staticClass:"icon fas fa-window-close",on:{click:function(e){return t.$emit("close")}}}),n("button",{attrs:{id:"snap"},on:{click:t.takepicture}},[t._v(" SNAP ")]),n("canvas",{staticClass:"hidden",attrs:{id:"canvas"}})])},u=[],c={name:"Camera",data:function(){return{front:!1,videoPlayer:null,canvas:null,photo:null,snapBtn:null,width:window.innerWidth,height:window.innerHeight,streaming:!1}},beforeMount:function(){this.videoPlayer=document.querySelector("video"),this.canvas=document.getElementById("canvas"),this.photo=document.getElementById("photo"),this.startbutton=document.getElementById("snap"),this.width=window.innerWidth,this.height=window.innerHeight,this.init()},created:function(){},methods:{init:function(){if("mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices){navigator.mediaDevices.getUserMedia({video:{width:{min:1280,max:1560},height:{min:720,max:1440},facingMode:this.front?"user":"environment"}}).then((function(t){var e=document.querySelector("video");e.srcObject=t,e.play()}));var t=document.querySelector("video");t.addEventListener("canplay",(function(t){this.streaming||(console.log(this.width+" "+this.height),this.streaming=!0)}),!1)}else alert("cannot get Media Devices")},takepicture:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");if(this.width&&this.height){t.width=1560,t.height=1440;var n=document.querySelector("video");e.drawImage(n,0,0,1560,1440);var a=t.toDataURL("image/png");this.$emit("take",a)}else alert("clearphoto")}}},l=c,d=(n("e902"),n("2877")),m=Object(d["a"])(l,s,u,!1,null,null,null),h=m.exports,p=n("448b"),f=n("d722");function v(t,e,n,a,r,i,o){try{var s=t[i](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(a,r)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){v(i,a,r,o,s,"next",t)}function s(t){v(i,a,r,o,s,"throw",t)}o(void 0)}))}}var b={components:{Camera:h,InputLabel:p["a"]},data:function(){return{errandNumber:null,photos:[],takePhoto:!1}},methods:{takePhotoF:function(t){console.log("added photo to array"+t),this.photos.push(t)},insertPhotos:function(){var t=g(o.a.mark((function t(){var e;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].insertPhotos({errandNumber:this.errandNumber,photos:this.photos});case 2:if(e=t.sent,200===e.status){t.next=5;break}return t.abrupt("return",this.error=e.data.message);case 5:this.$store.dispatch("login",e.data),this.$router.push({name:"homepage"});case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},y=b,w=Object(d["a"])(y,a,r,!1,null,null,null);e["default"]=w.exports},e902:function(t,e,n){"use strict";var a=n("652c"),r=n.n(a);r.a},ec51:function(t,e,n){}}]);