(function(e){function n(n){for(var t,o,s=n[0],u=n[1],c=n[2],l=0,d=[];l<s.length;l++)o=s[l],a[o]&&d.push(a[o][0]),a[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);f&&f(n);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,n=0;n<i.length;n++){for(var r=i[n],t=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(t=!1)}t&&(i.splice(n--,1),e=u(u.s=r[0]))}return e}var t={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({"errand~insertTowingErrand":"errand~insertTowingErrand",errand:"errand",insertTowingErrand:"insertTowingErrand",home:"home",login:"login",mainStyle:"mainStyle",register:"register",towingErrand:"towingErrand"}[e]||e)+"."+{"errand~insertTowingErrand":"5be3565c",errand:"cadb7c93",insertTowingErrand:"78b45eb6",home:"0e626cf4",login:"c2ad7852",mainStyle:"f9016b7b",register:"6a5f8707",towingErrand:"fbff04a7"}[e]+".js"}function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var n=[],r={"errand~insertTowingErrand":1,errand:1,insertTowingErrand:1,home:1,login:1,mainStyle:1,towingErrand:1};o[e]?n.push(o[e]):0!==o[e]&&r[e]&&n.push(o[e]=new Promise((function(n,r){for(var t="css/"+({"errand~insertTowingErrand":"errand~insertTowingErrand",errand:"errand",insertTowingErrand:"insertTowingErrand",home:"home",login:"login",mainStyle:"mainStyle",register:"register",towingErrand:"towingErrand"}[e]||e)+"."+{"errand~insertTowingErrand":"edb04772",errand:"4398532f",insertTowingErrand:"d782aa1f",home:"5b961f1d",login:"f079f48f",mainStyle:"97a0236c",register:"31d6cfe0",towingErrand:"ad890445"}[e]+".css",a=u.p+t,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===t||l===a))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===t||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var t=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=t,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){o[e]=0})));var t=a[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e),c=function(n){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+t+": "+o+")");i.type=t,i.request=o,r[1](i)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(r,t,function(n){return e[n]}.bind(null,t));return r},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"56d7":function(e,n,r){"use strict";r.r(n);var t=r("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[e.loggedIn?r("nav",{staticClass:"nav"},[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[r("span",{staticClass:"hidden"},[e._v("Route to home page")]),e._v(" "+e._s(e.appName)+" ")]),r("router-link",{staticClass:"item",attrs:{to:"/"}},[r("span",{staticClass:"hidden"},[e._v("Route to rental contracts")]),e._v(" Wynajmy ")]),r("router-link",{staticClass:"item",attrs:{to:"/insertTowingErrand"}},[r("span",{staticClass:"hidden"},[e._v("Route to insert errand page")]),e._v(" Dodaj zlecenie ")]),r("router-link",{staticClass:"item",attrs:{to:"/towingErrand"}},[r("span",{staticClass:"hidden"},[e._v("Route to towing errands")]),e._v(" Zlecenia ")])],1):e._e(),r("router-view",{staticClass:"content-view"})],1)},a=[],i=r("a34a"),s=r.n(i),u=r("d722");function c(e,n,r,t,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?n(u):Promise.resolve(u).then(t,o)}function l(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){c(a,t,o,i,s,"next",e)}function s(e){c(a,t,o,i,s,"throw",e)}i(void 0)}))}}var d={data:function(){return{appName:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_NAME||"Wypożyczalnia",mobileMenu:!1}},computed:{userLoaded:function(){return this.$store.getters.userLoaded},loggedIn:function(){return this.$store.getters.loggedIn},username:function(){return this.loggedIn&&this.$store.getters.username},getRole:function(){return this.$store.getters.role}},methods:{logout:function(){var e=l(s.a.mark((function e(){var n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].logout();case 2:n=e.sent,200===n.status&&(this.$store.dispatch("logout"),this.$router.push({name:"login"}));case 4:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}},f=d,g=(r("5c0b"),r("2877")),p=Object(g["a"])(f,o,a,!1,null,null,null),h=p.exports,m=r("8c4f"),v=r("2f62");t["default"].use(v["a"]);var b=new v["a"].Store({state:{user:null,userLoaded:!1},mutations:{loginUser:function(e,n){e.user=n,e.userLoaded=!0},logoutUser:function(e){e.user=null}},actions:{login:function(e,n){var r=e.commit;r("loginUser",n)},logout:function(e){var n=e.commit;n("logoutUser")}},getters:{userLoaded:function(e){return e.userLoaded},loggedIn:function(e){return!(!e.user||!e.user.id)},username:function(e){return e.user&&e.user.username},role:function(e){return e.user&&e.user.role}}});function w(e,n,r,t,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?n(u):Promise.resolve(u).then(t,o)}function E(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){w(a,t,o,i,s,"next",e)}function s(e){w(a,t,o,i,s,"throw",e)}i(void 0)}))}}t["default"].use(m["a"]);var y=new m["a"]({mode:"history",base:"",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"homepage",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return r.e("home").then(r.bind(null,"3daa"))}},{path:"/login",name:"login",meta:{loginNotRequired:!0,blockIfLoggedIn:!0},component:function(){return r.e("login").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return r.e("register").then(r.bind(null,"73cf"))}},{path:"/insertCar",name:"insertCar",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return r.e("login").then(r.bind(null,"d104"))}},{path:"/towingErrand",name:"towingErrand",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return r.e("towingErrand").then(r.bind(null,"9e06"))}},{path:"/insertTowingErrand",name:"insertTowingErrand",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return Promise.all([r.e("errand~insertTowingErrand"),r.e("insertTowingErrand")]).then(r.bind(null,"a7bf"))}},{path:"/errand/:towingErrandId",name:"errand",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return Promise.all([r.e("errand~insertTowingErrand"),r.e("errand")]).then(r.bind(null,"72cb"))}}]});y.beforeEach(function(){var e=E(s.a.mark((function e(n,r,t){var o;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(b.state.userLoaded){e.next=5;break}return e.next=3,u["a"].getUser();case 3:o=e.sent,b.dispatch("login",o.data);case 5:if(b.getters.loggedIn){e.next=11;break}if(!n.matched.some((function(e){return e.meta.loginNotRequired}))){e.next=8;break}return e.abrupt("return",t());case 8:return e.abrupt("return",t("/login"));case 11:if(!n.matched.some((function(e){return e.meta.blockIfLoggedIn}))){e.next=13;break}return e.abrupt("return",t("/"));case 13:t();case 14:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}());var T=y,k=r("26b9"),x=r.n(k),_=r("2169"),P=r("7898"),N=r.n(P),S=r("9483");Object(S["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var C={name:"_blank",specs:["fullscreen=yes","titlebar=yes","scrollbars=yes"],styles:["https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css","https://unpkg.com/kidlat-css/css/kidlat.css","./styles/contract.css"]};t["default"].use(N.a,C),t["default"].use(_["a"]),t["default"].use(x.a,{color:"#a64452",failedColor:"red"}),r.e("mainStyle").then(r.t.bind(null,"fb98",7)),t["default"].config.productionTip=!1;n["default"]=new t["default"]({router:T,store:b,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,n,r){"use strict";var t=r("c5d5"),o=r.n(t);o.a},c5d5:function(e,n,r){},d722:function(e,n,r){"use strict";var t=r("a34a"),o=r.n(t),a=r("bc3a"),i=r.n(a);function s(e,n,r,t,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?n(u):Promise.resolve(u).then(t,o)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){s(a,t,o,i,u,"next",e)}function u(e){s(a,t,o,i,u,"throw",e)}i(void 0)}))}}var c=i.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API_URL||"/api/",withCredentials:!0});n["a"]={execute:function(){var e=u(o.a.mark((function e(n,r,t){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=c({method:n,url:r,data:t,validateStatus:function(){return!0}}),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));function n(n,r,t){return e.apply(this,arguments)}return n}(),login:function(e){return this.execute("POST","/login",{username:e.username,password:e.password})},getUser:function(){return this.execute("GET","/user")},logout:function(){return this.execute("POST","/logout")},register:function(e){return this.execute("POST","/register",{username:e.username,email:e.email,password:e.password})},insertCar:function(e){return this.execute("POST","/car",{registrationNumber:e.registrationNumber,brand:e.brand,model:e.model,classCar:e.classCar,vin:e.vin})},listCars:function(){return this.execute("GET","/cars")},insertPhotos:function(e){return this.execute("POST","/towingErrand",{errandNumber:e.errandNumber,photos:e.photos})},listTowingErrands:function(){return this.execute("GET","/towingErrands")},getErrand:function(e){return this.execute("GET","/towingErrand/".concat(e))}}}});