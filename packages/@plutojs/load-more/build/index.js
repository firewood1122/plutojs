!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("load-more",[],t):"object"==typeof exports?exports["load-more"]=t():e["load-more"]=t()}(this,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.hasOwnProperty.call(e,o)&&c(t,e,o);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var l=u(o(1)),d=o(2),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.containerEl=null,t.scroll=function(e,o,n){var r=0;e.addEventListener("touchstart",(function(e){r=e.changedTouches[0].clientY})),e.addEventListener("touchend",d.debounce((function(n){var c=document.documentElement.scrollTop||document.body.scrollTop,i=document.documentElement.clientHeight||document.body.clientHeight,u=document.documentElement.scrollHeight||document.body.scrollHeight;o||(c=e.scrollTop,i=e.clientHeight,u=e.scrollHeight);var l=t.props,d=l.scrollThreshold,f=l.loadMore;d>1&&(d=1),o&&"fixed"===document.body.style.position||c+i>=u*d&&f&&(0===c&&i===u&&r-n.changedTouches[0].clientY<20||f())}),n))},t}return r(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.bodyScroll,o=e.debounceTime;if(t)this.scroll(document,t,o);else{var n=this.containerEl.childNodes[0];this.scroll(n,t,o)}},t.prototype.render=function(){var e=this,t=this.props.children;return l.default.createElement("div",{ref:function(t){e.containerEl=t}},t)},t.defaultProps={bodyScroll:!0,scrollThreshold:1,debounceTime:1e3},t}(l.Component);t.default=f},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("debounce")}])}));