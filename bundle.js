!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);class i{constructor(t,e,n,i,o,r,a){this.x=n,this.y=i,this.vx=o,this.vy=r,this.image=a?"🍣":"☕"}update(t,e){(0>this.x||this.x>t-30)&&(this.vx=-1*this.vx),this.x+=this.vx,(30>this.y||this.y>e)&&(this.vy=-1*this.vy),this.y+=this.vy}changeImage(){"🍣"==this.image?this.image="☕":this.image="🍣"}draw(t){t.fillText(this.image,this.x,this.y)}}const o=(t,e)=>(t=Math.floor(t),e=Math.floor(e),Math.floor(Math.random()*(t-e)+e)),r=(t,e,n,i)=>{n.clearRect(0,0,e.width,e.height),t.forEach(t=>t.update(e.width,e.height)),t.forEach(t=>t.draw(n)),window.requestAnimationFrame(o=>r(t,e,n,i))},a=document.getElementById("myCanvas").clientWidth,c=document.getElementById("myCanvas").clientHeight,s=document.createElement("canvas");s.width=a,s.height=c;const d=s.getContext("2d");d.font="30px sans-serif",document.getElementById("myCanvas").appendChild(s);let l=!0;const u=[];u.push(new i(s,d,80,40,5,2,l)),window.requestAnimationFrame(t=>r(u,s,d,t)),window.addEventListener("click",t=>{u.push(new i(s,d,t.x,t.y,o(5,-5),o(5,-5),l))}),document.getElementById("cblabel").addEventListener("click",t=>{t.stopPropagation()}),document.getElementById("cb").addEventListener("click",t=>{t.stopPropagation()}),document.querySelectorAll(".link").forEach((function(t){t.addEventListener("click",t=>{t.stopPropagation()})})),document.getElementById("img").addEventListener("click",t=>{t.stopPropagation(),u.forEach(t=>t.changeImage()),l=!l})}]);