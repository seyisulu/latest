!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.spruce=t()}(this,function(){"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e,t=(function(e,t){e.exports=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,r=e.replace(/^v/,"").replace(/\+.*$/,""),n=-1===(t=r).indexOf("-")?t.length:t.indexOf("-"),i=r.substring(0,n).split(".");return i.push(r.substring(n+1)),i}function r(e){return isNaN(Number(e))?e:Number(e)}function n(t){if("string"!=typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function i(e,i){[e,i].forEach(n);for(var s=t(e),o=t(i),a=0;a<Math.max(s.length-1,o.length-1);a++){var u=parseInt(s[a]||0,10),c=parseInt(o[a]||0,10);if(u>c)return 1;if(c>u)return-1}var f=s[s.length-1],d=o[o.length-1];if(f&&d){var h=f.split(".").map(r),p=d.split(".").map(r);for(a=0;a<Math.max(h.length,p.length);a++){if(void 0===h[a]||"string"==typeof p[a]&&"number"==typeof h[a])return-1;if(void 0===p[a]||"string"==typeof h[a]&&"number"==typeof p[a])return 1;if(h[a]>p[a])return 1;if(p[a]>h[a])return-1}}else if(f||d)return f?-1:1;return 0}var s=[">",">=","=","<","<="],o={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return i.validate=function(t){return"string"==typeof t&&e.test(t)},i.compare=function(e,t,r){!function(e){if("string"!=typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===s.indexOf(e))throw new TypeError("Invalid operator, expected one of "+s.join("|"))}(r);var n=i(e,t);return o[r].indexOf(n)>-1},i}()}(e={exports:{}}),e.exports),r=function(e){return null==e},n=function(e){return Object.getPrototypeOf(e)===Object.prototype},i=function(e,t){return Object.entries(e).forEach(function(s){var o=s[0],a=s[1];r(a)||!n(a)&&!Array.isArray(a)||(e[o]=i(a,t))}),new Proxy(e,{set:function(e,s,o){return!r(o)&&n(o)&&(o=i(o,t)),t.set(e,s,e[s]=o),!0}})},s={stores:{},persistenceDriver:window.localStorage,persisted:[],subscribers:[],watchers:{},disableReactivity:!1,startingCallbacks:[],startedCallbacks:[],start:function(){var e=this;this.startingCallbacks.forEach(function(e){return e()}),this.attach(),this.stores=i(this.stores,{set:function(t,r,n){if(!e.disableReactivity){e.updateSubscribers(),e.runWatchers(e.stores,t,r,n),e.disableReactivity=!0;try{e.persisted.forEach(e.updateLocalStorage.bind(e))}catch(e){}e.disableReactivity=!1}}}),this.startedCallbacks.forEach(function(e){return e()})},starting:function(e){this.startingCallbacks.push(e)},started:function(e){this.startedCallbacks.push(e)},attach:function(){if(!(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")||window.Alpine&&t.compare(window.Alpine.version,"2.7.0",">=")))throw new Error("[Spruce] You must be using Alpine >= 2.5.0 to use Spruce.");var e=this;window.Alpine.addMagicProperty("store",function(t){return e.subscribe(t),e.stores})},store:function(e,t,r){if(void 0===r&&(r=!1),"function"==typeof t&&(t=t()),r)try{this.stores[e]=this.retrieveFromLocalStorage(e,(n={},Object.entries(t).filter(function(e){return"function"==typeof e[1]}).forEach(function(e){return n[e[0]]=e[1]}),n)),this.persisted.includes(e)||this.persisted.push(e)}catch(e){}var n;return this.stores[e]||(this.stores[e]=t),this.stores[e]},reset:function(e,t){this.stores[e]=t},subscribe:function(e){return this.subscribers.includes(e)||this.subscribers.push(e),this.stores},updateSubscribers:function(){this.subscribers.filter(function(e){return!!e.__x}).forEach(function(e){e.__x.updateElements(e)})},retrieveFromLocalStorage:function(e,t){void 0===t&&(t={});var r=this.persistenceDriver.getItem("__spruce:"+e);if(!r)return null;var n=JSON.parse(r);return"object"==typeof n&&(n=Object.assign(t,n)),n},updateLocalStorage:function(e){this.persistenceDriver.setItem("__spruce:"+e,JSON.stringify(this.store(e)))},watch:function(e,t){this.watchers[e]||(this.watchers[e]=[]),this.watchers[e].push(t)},runWatchers:function(e,t,r,n){var i=this;if(i.watchers[r])return i.watchers[r].forEach(function(e){return e(n)});Object.keys(i.watchers).filter(function(e){return e.includes(".")}).forEach(function(s){var o=s.split(".");r===o[o.length-1]&&o.reduce(function(e,o){return(e[r]===t[r]||Object.is(t,e))&&i.watchers[s].forEach(function(e){return e(n)}),e[o]},e)})},persistUsing:function(e){if(this.persisted.length>0&&console.warn("[Spruce] You have already initialised a persisted store. Changing the driver may cause issues."),"function"!=typeof e.getItem)throw new Error("[Spruce] The persistence driver must have a `getItem(key)` method.");if("function"!=typeof e.setItem)throw new Error("[Spruce] The persistence driver must have a `setItem(key, value)` method.");this.persistenceDriver=e}};window.Spruce=s;var o=window.deferLoadingAlpine||function(e){e()};return window.deferLoadingAlpine=function(e){window.Spruce.start(),o(e)},s});
//# sourceMappingURL=spruce.umd.js.map