(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({home:"home",login:"login",mainStyle:"mainStyle",register:"register",towingErrand:"towingErrand"}[e]||e)+"."+{home:"ab640381",login:"23d689a8",mainStyle:"f9016b7b",register:"d715bf1c",towingErrand:"1014fcd4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={home:1,login:1,mainStyle:1,towingErrand:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({home:"home",login:"login",mainStyle:"mainStyle",register:"register",towingErrand:"towingErrand"}[e]||e)+"."+{home:"5b961f1d",login:"f079f48f",mainStyle:"eb902b58",register:"31d6cfe0",towingErrand:"5b5eb7ac"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e),c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loggedIn?n("nav",{staticClass:"nav"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("span",{staticClass:"hidden"},[e._v("Route to home page")]),e._v(" "+e._s(e.appName)+" ")]),n("router-link",{staticClass:"item",attrs:{to:"/"}},[n("span",{staticClass:"hidden"},[e._v("Route to rental contracts")]),e._v(" Wynajmy ")]),n("router-link",{staticClass:"item",attrs:{to:"/"}},[n("span",{staticClass:"hidden"},[e._v("Route to listed cars")]),e._v(" Samochody ")]),n("router-link",{staticClass:"item",attrs:{to:"/towingErrand"}},[n("span",{staticClass:"hidden"},[e._v("Route to towing errands")]),e._v(" Zlecenia ")])],1):e._e(),n("router-view",{staticClass:"content-view"})],1)},a=[],i=n("a34a"),s=n.n(i),u=n("d722");function c(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){c(a,r,o,i,s,"next",e)}function s(e){c(a,r,o,i,s,"throw",e)}i(void 0)}))}}var d={data:function(){return{appName:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_NAME||"Wypożyczalnia",mobileMenu:!1}},computed:{userLoaded:function(){return this.$store.getters.userLoaded},loggedIn:function(){return this.$store.getters.loggedIn},username:function(){return this.loggedIn&&this.$store.getters.username},getRole:function(){return this.$store.getters.role}},methods:{logout:function(){var e=l(s.a.mark((function e(){var t;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].logout();case 2:t=e.sent,200===t.status&&(this.$store.dispatch("logout"),this.$router.push({name:"login"}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},f=d,g=(n("5c0b"),n("2877")),p=Object(g["a"])(f,o,a,!1,null,null,null),h=p.exports,m=n("8c4f"),v=n("2f62");r["a"].use(v["a"]);var b=new v["a"].Store({state:{user:null,userLoaded:!1},mutations:{loginUser:function(e,t){e.user=t,e.userLoaded=!0},logoutUser:function(e){e.user=null}},actions:{login:function(e,t){var n=e.commit;n("loginUser",t)},logout:function(e){var t=e.commit;t("logoutUser")}},getters:{userLoaded:function(e){return e.userLoaded},loggedIn:function(e){return!(!e.user||!e.user.id)},username:function(e){return e.user&&e.user.username},role:function(e){return e.user&&e.user.role}}});function w(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){w(a,r,o,i,s,"next",e)}function s(e){w(a,r,o,i,s,"throw",e)}i(void 0)}))}}r["a"].use(m["a"]);var k=new m["a"]({mode:"history",base:"",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"homepage",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return n.e("home").then(n.bind(null,"3daa"))}},{path:"/login",name:"login",meta:{loginNotRequired:!0,blockIfLoggedIn:!0},component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return n.e("register").then(n.bind(null,"73cf"))}},{path:"/insertCar",name:"insertCar",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return n.e("login").then(n.bind(null,"d104"))}},{path:"/towingErrand",name:"towingErrand",meta:{loginNotRequired:!1,blockIfLoggedIn:!1},component:function(){return n.e("towingErrand").then(n.bind(null,"9e06"))}}]});k.beforeEach(function(){var e=y(s.a.mark((function e(t,n,r){var o;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(b.state.userLoaded){e.next=5;break}return e.next=3,u["a"].getUser();case 3:o=e.sent,b.dispatch("login",o.data);case 5:if(b.getters.loggedIn){e.next=11;break}if(!t.matched.some((function(e){return e.meta.loginNotRequired}))){e.next=8;break}return e.abrupt("return",r());case 8:return e.abrupt("return",r("/login"));case 11:if(!t.matched.some((function(e){return e.meta.blockIfLoggedIn}))){e.next=13;break}return e.abrupt("return",r("/"));case 13:r();case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var E=k,_=n("26b9"),x=n.n(_),S=n("2169"),C=n("7898"),P=n.n(C),N=n("9483");Object(N["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var L={name:"_blank",specs:["fullscreen=yes","titlebar=yes","scrollbars=yes"],styles:["https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css","https://unpkg.com/kidlat-css/css/kidlat.css","./styles/contract.css"]};r["a"].use(P.a,L),r["a"].use(S["a"]),r["a"].use(x.a,{color:"#a64452",failedColor:"red"}),n.e("mainStyle").then(n.t.bind(null,"fb98",7)),r["a"].config.productionTip=!1;t["default"]=new r["a"]({router:E,store:b,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("c5d5"),o=n.n(r);o.a},c5d5:function(e,t,n){},d722:function(e,t,n){"use strict";var r=n("a34a"),o=n.n(r),a=n("bc3a"),i=n.n(a);function s(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,u,"next",e)}function u(e){s(a,r,o,i,u,"throw",e)}i(void 0)}))}}var c=i.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API_URL||"/api/",withCredentials:!0});t["a"]={execute:function(){var e=u(o.a.mark((function e(t,n,r){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=c({method:t,url:n,data:r,validateStatus:function(){return!0}}),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}(),login:function(e){return this.execute("POST","/login",{username:e.username,password:e.password})},getUser:function(){return this.execute("GET","/user")},logout:function(){return this.execute("POST","/logout")},register:function(e){return this.execute("POST","/register",{username:e.username,email:e.email,password:e.password})},insertCar:function(e){return this.execute("POST","/car",{registrationNumber:e.registrationNumber,brand:e.brand,model:e.model,classCar:e.classCar,vin:e.vin})},listCars:function(){return this.execute("GET","/cars")}}}});