(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["towingErrand"],{"0aa0":function(t,e,a){"use strict";var n=a("ec51"),i=a.n(n);i.a},"448b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form"},[0==t.type?a("input",{attrs:{type:"text",name:"name",autocomplete:"off",maxlength:t.maxlength,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):1==t.type?a("input",{attrs:{type:"password",name:"name",autocomplete:"off",maxlength:t.maxlength,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):a("input",{attrs:{type:"number",name:"name",autocomplete:"off",min:t.min,max:t.max,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),a("label",{staticClass:"label-name",attrs:{for:"name"}},[a("span",{staticClass:"content-name"},[t._v(" "+t._s(t.labelText)+" ")])])])},i=[],r={props:{type:{type:Number,default:0},value:{type:String,default:""},labelText:{type:String,default:"test"},maxlength:{type:Number,default:32},min:{type:Number,default:0},max:{type:Number,default:1e4}}},s=r,o=(a("0aa0"),a("2877")),u=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=u.exports},"652c":function(t,e,a){},"9e06":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex_box"},[a("form",{staticClass:"flex_box errand",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.handleLogin(e)}}},[a("input-label",{attrs:{type:0,"label-text":"Numer zlecenia"},model:{value:t.errandName,callback:function(e){t.errandName=e},expression:"errandName"}}),a("i",{staticClass:"fas fa-camera",on:{click:function(e){t.takePhoto=!t.takePhoto}}}),t.error?a("p",{staticClass:"message message--error"},[t._v(" "+t._s(t.error)+" ")]):t._e(),a("button",{attrs:{type:"submit"}},[t._v(" Zaloguj się ")])],1)]),t.takePhoto?a("Camera",{attrs:{take:"take"}}):t._e()],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"camera"},[a("video",{staticClass:"feed",attrs:{autoplay:"",playsinline:""}}),a("button",{attrs:{id:"snap"},on:{click:t.takepicture}},[t._v(" SNAP ")]),a("canvas",{attrs:{id:"canvas"}}),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"output"},[a("img",{attrs:{id:"photo",alt:"The screen capture will appear in this box."}})])}],o={name:"Camera",data:function(){return{front:!1,videoPlayer:null,canvas:null,photo:null,snapBtn:null,width:320,height:320,streaming:!1}},beforeMount:function(){this.videoPlayer=document.querySelector("video"),this.canvas=document.getElementById("canvas"),this.photo=document.getElementById("photo"),this.startbutton=document.getElementById("snap"),this.init()},created:function(){},methods:{init:function(){if("mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices){navigator.mediaDevices.getUserMedia({video:{facingMode:this.front?"user":"environment"}}).then((function(t){var e=document.querySelector("video");e.srcObject=t,e.play()}));var t=document.querySelector("video");t.addEventListener("canplay",(function(e){if(!this.streaming){this.width=window.innerWidth;var a=document.getElementById("canvas");this.height=t.videoHeight/(t.videoWidth/this.width),t.setAttribute("width",this.width),t.setAttribute("height",this.height),a.setAttribute("width",this.width),a.setAttribute("height",this.height),this.streaming=!0}}),!1)}else alert("cannot get Media Devices")},takepicture:function(){alert("pstryk fotka");var t=document.getElementById("canvas"),e=t.getContext("2d");if(this.width&&this.height){t.width=this.width,t.height=this.height;var a=document.querySelector("video");e.drawImage(a,0,0,this.width,this.height);var n=this.canvas.toDataURL("image/png"),i=document.getElementById("photo");i.setAttribute("src",n),this.$emit("take",n)}else alert("clearphoto")}}},u=o,l=(a("e902"),a("2877")),c=Object(l["a"])(u,r,s,!1,null,null,null),d=c.exports,h=a("448b"),m={components:{Camera:d,InputLabel:h["a"]},data:function(){return{photos:[],takePhoto:!1}},methods:{take:function(t){alert("added photo to array"),this.photos.push(t)}}},p=m,v=Object(l["a"])(p,n,i,!1,null,null,null);e["default"]=v.exports},e902:function(t,e,a){"use strict";var n=a("652c"),i=a.n(n);i.a},ec51:function(t,e,a){}}]);