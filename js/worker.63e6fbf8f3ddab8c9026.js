!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"get_primes",(function(){return l})),t.d(n,"_multiply",(function(){return a})),t.d(n,"multiply",(function(){return u})),t.d(n,"_multiply_slower",(function(){return f})),t.d(n,"multiply_slower",(function(){return i}));const o=e=>{for(let r=2;r<e;r++)if(e%r==0)return!1;return e>=2},l=e=>{let r=0;for(let t=0;t<e+1;t+=1)o(t)&&(r+=1);return r},a=(e,r)=>{let t=[];for(let n=0;n<e.length;n++)for(let o=0;o<r[0].length;o++)for(let l=0;l<r.length;l++)t[n]=t[n]||[],t[n][o]=t[n][o]||0,t[n][o]+=e[n][l]*r[l][o];return t},u=(e,r)=>a(Array(e).fill(Array(e).fill(1)),Array(r).fill(Array(r).fill(1)))[0][0],f=(e,r)=>{let t=[];for(let n=0;n<r.length;n++)for(let o=0;o<r[0].length;o++)for(let l=0;l<e.length;l++)t[l]=t[l]||[],t[l][o]=t[l][o]||0,t[l][o]+=e[l][n]*r[n][o];return t},i=(e,r)=>f(Array(e).fill(Array(e).fill(1)),Array(r).fill(Array(r).fill(1)))[0][0],c=(e,r)=>{performance.mark(`${e}-start`);const t=r();performance.mark(`${e}-end`),performance.measure(`${e}-measure`,`${e}-start`,`${e}-end`);const n=performance.getEntriesByName(`${e}-measure`),o=n[n.length-1];return{fn_return:t,entries:n.map(e=>e.toJSON()),measure:o.toJSON()}};onmessage=e=>{const r=c(e.data.payload.method,()=>n[e.data.payload.method](...e.data.payload.args));postMessage({...e.data,workerName:"js",performance:r})}}]);