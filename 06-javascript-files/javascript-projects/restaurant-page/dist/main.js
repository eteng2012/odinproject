(()=>{var n={208:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var i=t(354),o=t.n(i),r=t(314),a=t.n(r)()(o());a.push([n.id,"* {\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    padding: 0%;\n    margin: 0%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\nheader {\n    width: 100vw;\n    display: flex;\n    justify-content: space-between;\n}\nheader div {\n    display: flex;\n    align-items: center;\n}\nheader button {\n    font-size: 3rem;\n}\nheader img {\n    height: 10vh;\n}\nheader nav {\n    height: 10vh;\n    width: 30vw;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\nbody #content .home .header {\n    display: flex;\n    height: 10vh;\n    justify-content: center;\n    align-items: center;\n    font-size: 5rem;\n}\n\nbody #content .home .body {\n    display: grid;\n    /* USING GRID WAS WAY EASIER THAN FLEX! */\n    grid-template: 1fr / 1fr 1fr;\n    height: 75vh;\n}\n\nbody #content .home .body img {\n    height: 100%;\n    overflow: hidden;\n    /* Hides overflow of image */\n    position: relative;\n    justify-self: center;\n}\n\nbody #content .home .body .text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n    background-color: white;\n    padding: 1%;\n    font-size: 2rem;\n    text-align: center;\n}\n\nbody #content .home .body .text div {\n    margin: 1%;\n}\n\nbody #content .home .body .text div:first-child {\n    font-weight: bold;\n}\n\nbody #content .body .text div:nth-child(2) {\n    font-weight:100;\n}\n\nbody #content .about .header {\n    display: flex;\n    height: 10vh;\n    justify-content: left;\n    align-items: center;\n    font-size: 5rem;\n}\n\nbody #content .about .grid {\n    height: 75vh;\n    display: grid;\n    grid-template: 1fr 0.25fr / repeat(3, 1fr);\n}\n\nbody #content .about .grid .grid-item {\n    margin: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\nbody #content .about .grid .grid-item .img_container{\n    margin: 3vh;\n    overflow: hidden;\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    border: solid black;\n    position: relative;\n    display: flex;\n}\n\nbody #content .about .grid .grid-item .img_container img{\n    width: 100%;\n    object-fit: cover;\n    /* Used to have pizza icon fill box */\n}\n\nbody #content .menu .header {\n    display: flex;\n    height: 10vh;\n    justify-content: left;\n    align-items: center;\n    font-size: 5rem;\n}\n\nbody #content .menu .grid {\n    height: 75vh;\n    display: grid;\n    grid-template: repeat(3, 25vh) / 1fr;\n}\n\nbody #content .menu .grid .grid-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1vh;\n}\n\nbody #content .menu .grid .grid-item .text {\n    display: flex;\n    flex-direction: column;\n}\n\nbody #content .menu .grid .grid-item .text div:first-child  {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\nbody #content .menu .grid .grid-item .img_container{\n    margin: 5vh;\n    overflow: hidden;\n    aspect-ratio: 1 / 1;\n    height: 100%;\n    position: relative;\n    display: flex;\n}\n\nbody #content .menu .grid .grid-item .img_container img{\n    width: 100%;\n    object-fit: cover;\n    /* Used to have pizza icon fill box */\n}\n\nbody #content .contact .header {\n    display: flex;\n    height: 10vh;\n    justify-content: left;\n    align-items: center;\n    font-size: 5rem;\n}\n\nbody #content .contact .grid {\n    display: grid;\n    height: 75vh;\n    grid-template: 1fr 2fr 0.25fr / repeat(3, 1fr);\n}\n\nbody #content .contact .grid form {\n    display: flex;\n    flex-direction: column;\n    grid-column: 1 / span 3;\n}\n\nbody #content .contact .grid form label{\n    margin: 2% 0% 0% 2%;\n    font-size: 2rem;\n}\n\nbody #content .contact .grid form input{\n    margin: 2% 2% 1% 2%;\n    font-size: 2rem;\n    flex: 1;\n}\n\nbody #content .contact .grid form .button_div{\n    display: flex;\n    justify-content: right;\n    margin: 0% 2% 2% 0%;\n    font-size: 1rem;\n}\n\nbody #content .contact .grid .social {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nbody #content .contact .grid .social img{\n    height: 25vh;\n    /* DO NOT USE %! .social divs become huge */\n    margin: 1%;\n}\n\nbody #content .contact .grid .social div{\n    font-size: 2rem;\n}\n\nbody .credits {\n    height: vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,4BAA4B;IAC5B,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,0CAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,UAAU;IACV,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,2CAA2C;IAC3C,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB",sourcesContent:["* {\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    padding: 0%;\n    margin: 0%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\nheader {\n    width: 100vw;\n    display: flex;\n    justify-content: space-between;\n}\nheader div {\n    display: flex;\n    align-items: center;\n}\nheader button {\n    font-size: 3rem;\n}\nheader img {\n    height: 10vh;\n}\nheader nav {\n    height: 10vh;\n    width: 30vw;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\nbody #content .home .header {\n    display: flex;\n    height: 10vh;\n    justify-content: center;\n    align-items: center;\n    font-size: 5rem;\n}\n\nbody #content .home .body {\n    display: grid;\n    /* USING GRID WAS WAY EASIER THAN FLEX! */\n    grid-template: 1fr / 1fr 1fr;\n    height: 75vh;\n}\n\nbody #content .home .body img {\n    height: 100%;\n    overflow: hidden;\n    /* Hides overflow of image */\n    position: relative;\n    justify-self: center;\n}\n\nbody #content .home .body .text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n    background-color: white;\n    padding: 1%;\n    font-size: 2rem;\n    text-align: center;\n}\n\nbody #content .home .body .text div {\n    margin: 1%;\n}\n\nbody #content .home .body .text div:first-child {\n    font-weight: bold;\n}\n\nbody #content .body .text div:nth-child(2) {\n    font-weight:100;\n}\n\nbody #content .about .header {\n    display: flex;\n    height: 10vh;\n    justify-content: left;\n    align-items: center;\n    font-size: 5rem;\n}\n\nbody #content .about .grid {\n    height: 75vh;\n    display: grid;\n    grid-template: 1fr 0.25fr / repeat(3, 1fr);\n}\n\nbody #content .about .grid .grid-item {\n    margin: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\nbody #content .about .grid .grid-item .img_container{\n    margin: 3vh;\n    overflow: hidden;\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    border: solid black;\n    position: relative;\n    display: flex;\n}\n\nbody #content .about .grid .grid-item .img_container img{\n    width: 100%;\n    object-fit: cover;\n    /* Used to have pizza icon fill box */\n}\n\nbody #content .menu .header {\n    display: flex;\n    height: 10vh;\n    justify-content: left;\n    align-items: center;\n    font-size: 5rem;\n}\n\nbody #content .menu .grid {\n    height: 75vh;\n    display: grid;\n    grid-template: repeat(3, 25vh) / 1fr;\n}\n\nbody #content .menu .grid .grid-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1vh;\n}\n\nbody #content .menu .grid .grid-item .text {\n    display: flex;\n    flex-direction: column;\n}\n\nbody #content .menu .grid .grid-item .text div:first-child  {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\nbody #content .menu .grid .grid-item .img_container{\n    margin: 5vh;\n    overflow: hidden;\n    aspect-ratio: 1 / 1;\n    height: 100%;\n    position: relative;\n    display: flex;\n}\n\nbody #content .menu .grid .grid-item .img_container img{\n    width: 100%;\n    object-fit: cover;\n    /* Used to have pizza icon fill box */\n}\n\nbody #content .contact .header {\n    display: flex;\n    height: 10vh;\n    justify-content: left;\n    align-items: center;\n    font-size: 5rem;\n}\n\nbody #content .contact .grid {\n    display: grid;\n    height: 75vh;\n    grid-template: 1fr 2fr 0.25fr / repeat(3, 1fr);\n}\n\nbody #content .contact .grid form {\n    display: flex;\n    flex-direction: column;\n    grid-column: 1 / span 3;\n}\n\nbody #content .contact .grid form label{\n    margin: 2% 0% 0% 2%;\n    font-size: 2rem;\n}\n\nbody #content .contact .grid form input{\n    margin: 2% 2% 1% 2%;\n    font-size: 2rem;\n    flex: 1;\n}\n\nbody #content .contact .grid form .button_div{\n    display: flex;\n    justify-content: right;\n    margin: 0% 2% 2% 0%;\n    font-size: 1rem;\n}\n\nbody #content .contact .grid .social {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nbody #content .contact .grid .social img{\n    height: 25vh;\n    /* DO NOT USE %! .social divs become huge */\n    margin: 1%;\n}\n\nbody #content .contact .grid .social div{\n    font-size: 2rem;\n}\n\nbody .credits {\n    height: vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],sourceRoot:""}]);const c=a},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var A=0;A<n.length;A++){var s=[].concat(n[A]);i&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(o," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],c=0;c<n.length;c++){var d=n[c],A=i.base?d[0]+i.base:d[0],s=r[A]||0,l="".concat(A," ").concat(s);r[A]=s+1;var m=t(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var p=o(u,i);i.byIndex=c,e.splice(c,0,{identifier:l,updater:p,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=t(r[a]);e[c].references--}for(var d=i(n,o),A=0;A<r.length;A++){var s=t(r[A]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=d}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},686:()=>{}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),i=t(825),o=t.n(i),r=t(659),a=t.n(r),c=t(56),d=t.n(c),A=t(540),s=t.n(A),l=t(113),m=t.n(l),u=t(208),p={};p.styleTagTransform=m(),p.setAttributes=d(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=s(),e()(u.A,p),u.A&&u.A.locals&&u.A.locals;const f=t.p+"restaurant.jpeg",h=(t.p,t.p+"icon-1.jpeg"),C=t.p+"icon-2.jpeg",g=t.p+"icon-3.jpeg";var y=t(686),v=t.n(y);const b=t.p+"social_1.jpeg",I=t.p+"social_2.jpeg",B=t.p+"social_3.jpeg";function x(){const n=document.querySelector("#content");n.innerHTML="";const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("header"),t.textContent="Pastel Plates",e.appendChild(t);const i=document.createElement("div");i.classList.add("body");const o=document.createElement("img");o.src=f,i.appendChild(o);const r=document.createElement("div");r.classList.add("text");const a=document.createElement("div");a.textContent="Welcome to Pastel Plates~",r.appendChild(a);const c=document.createElement("div");c.textContent="The yummiest meals this side of the color spectrum!",r.appendChild(c),i.appendChild(r),e.appendChild(i),n.appendChild(e)}x();const E=document.querySelectorAll("button");E[0].addEventListener("click",(()=>{x()})),E[1].addEventListener("click",(()=>{!function(){const n=[h,C,g],e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.classList.add("about");const i=document.createElement("div");i.classList.add("header"),i.textContent="Our History",t.appendChild(i);const o=document.createElement("div");o.classList.add("grid");for(let e=0;e<3;e++){const t=document.createElement("div");t.classList.add("grid-item");const i=document.createElement("div");i.classList.add("img_container");const r=document.createElement("img");r.src=n[e],i.appendChild(r),t.appendChild(i);const a=document.createElement("text");a.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos tempora, magni, ducimus minima excepturi facere nobis inventore officiis assumenda expedita architecto soluta? Eos repudiandae porro perferendis mollitia, soluta repellat.",t.appendChild(a),o.appendChild(t)}t.appendChild(o),e.appendChild(t)}()})),E[2].addEventListener("click",(()=>{!function(){const n=[h,C,g],e=["Pizza","Sandwiches","Desserts"],t=document.querySelector("#content");t.innerHTML="";const i=document.createElement("div");i.classList.add("menu");const o=document.createElement("div");o.classList.add("header"),o.textContent="Our Menu",i.appendChild(o);const r=document.createElement("div");r.classList.add("grid");for(let t=0;t<3;t++){const i=document.createElement("div");i.classList.add("grid-item");const o=document.createElement("div");o.classList.add("img_container");const a=document.createElement("img");a.src=n[t],o.appendChild(a),i.appendChild(o);const c=document.createElement("div");c.classList.add("text");const d=document.createElement("div"),A=document.createElement("div");d.textContent=e[t],A.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos tempora, magni, ducimus minima excepturi facere nobis inventore officiis assumenda expedita architecto soluta? Eos repudiandae porro perferendis mollitia, soluta repellat.",c.appendChild(d),c.appendChild(A),i.appendChild(c),r.appendChild(i)}i.appendChild(r),t.appendChild(i)}()})),E[3].addEventListener("click",(()=>{!function(){const n=document.querySelector("#content");n.innerHTML="";const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div");t.classList.add("header"),t.textContent="Contact Us!",e.appendChild(t);const i=[b,I,B],o=["X/Twitter","Instagram","Tiktok"],r=document.createElement("div");r.classList.add("grid");const a=document.createElement("form");a.action=v(),a.method="post";const c=document.createElement("label");c.for="feedback",c.textContent="Please Give us Feedback!",a.appendChild(c);const d=document.createElement("input");d.type="text",d.id="feedback",d.name="feedback",d.required=!0,a.appendChild(d);const A=document.createElement("div");A.classList.add("button_div");const s=document.createElement("button");s.type="submit",s.textContent="Submit Feedback",s.addEventListener("click",(n=>{n.preventDefault(),d.value=""})),A.appendChild(s),a.appendChild(A),r.appendChild(a);for(let n=0;n<3;n++){const e=document.createElement("div");e.classList.add("social");const t=document.createElement("img");t.src=i[n],e.appendChild(t);const a=document.createElement("div");a.textContent=`Follow us on ${o[n]}`,e.appendChild(a),r.appendChild(e)}e.appendChild(r),n.appendChild(e)}()}))})()})();
//# sourceMappingURL=main.js.map