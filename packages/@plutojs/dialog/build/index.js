!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("dialog",[],e):"object"==typeof exports?exports.dialog=e():t.dialog=e()}(this,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){t.exports=require("react")},function(t,e,o){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(o(0)),i=n(o(2));o(4);var l=o(5),c=null,u=function(){c&&(c.destroy(),c=null)};e.default={confirm:function(t,e,o,n){void 0===o&&(o="取消"),void 0===n&&(n="确定");var s=r.default.createElement("div",{className:l.container},r.default.createElement("div",{className:l.text},t),r.default.createElement("div",{className:l.btnContainer},r.default.createElement("div",{className:l.cancelBtn,onClick:u},o),r.default.createElement("div",{className:l.confirmBtn,onClick:function(){e(),u()}},n)));u(),function(t){c=i.default.popup({children:t,isOpened:!0,isMask:!0,isLock:!0,closeOnClickOverlay:!0,onHide:function(){u()}})}(s)}}},function(t,e,o){t.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},l=this&&this.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]])}return o},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s=c(o(1)),a=u(o(2)),p=o(3),f=function(t){function e(e){var o=t.call(this,e)||this;return o.positionMap={top:p.top,center:p.center,bottom:p.bottom},o.modalEl=null,o.prePosition="",o.scrollTop=0,o.setStyle=function(t){t?(o.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-"+o.scrollTop+"px",o.modalEl&&(o.modalEl.current.style.top=o.scrollTop+"px")):(document.body.style.position=o.prePosition||"static",document.body.style.top="0px",document.documentElement.scrollTop=o.scrollTop,document.body.scrollTop=o.scrollTop)},o.modalEl=a.createRef(),o}return r(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.isOpened;t.isLock&&(this.prePosition=document.body.style.position,this.setStyle(e))},e.prototype.componentDidUpdate=function(){var t=this.props,e=t.isOpened;t.isLock&&this.setStyle(e)},e.prototype.componentWillUnmount=function(){this.props.isLock&&this.setStyle(!1)},e.prototype.render=function(){var t=this.props,e=t.children,o=t.isOpened,n=t.position,r=t.isMask,i=t.isLock,l=t.closeOnClickOverlay,c=t.onHide;return a.default.createElement(a.default.Fragment,null,o&&a.default.createElement("div",{ref:this.modalEl,className:(i?p.lockModal:p.modal)+" "+this.positionMap[n]+" "+(r?p.mask:""),onClick:function(){l&&c&&c()}},a.default.createElement("div",{onClick:function(t){t.stopPropagation()}},e)))},e.defaultProps={position:"center",isMask:!0,isLock:!0,closeOnClickOverlay:!0},e.popup=function(t){var o=l(t||{},[]),n=document.createElement("div");return document.body.appendChild(n),s.default.render(a.default.createElement(e,i({},o)),n),{destroy:function(){try{s.default.unmountComponentAtNode(n),document.body.removeChild(n)}catch(t){}}}},e}(a.Component);e.default=f},function(t,e){t.exports=o(3)},function(t,e){t.exports=o(0)},function(t,e,o){t.exports={lockModal:"_3qT7ogTzSwUZT2fQt7vOg8",modal:"_2hIktabqOEZfFSgDt6Ky3h",mask:"_2r0BDlKli0IIG_5nehr5Ha",center:"_1Px9RDy249XjZI6cZoUshA",top:"_8snf9MejSTejfuiGJ3d4w",bottom:"Hayhc0EN5q8BkecUmpQCv"}}])},function(t,e){t.exports=require("react-dom")},function(t,e,o){},function(t,e,o){t.exports={container:"SYXc3QPDywUPGSoPgeUeh",text:"_2XowaszfVTPLASH47ynJVi",btnContainer:"_1GWJXTCgWDH4fp3s-vDps-",cancelBtn:"_3ZpUM1NLOnIE4n3piZaUCO",confirmBtn:"_1szKwJUVEcNKXSGIwu0UJ0"}}])}));