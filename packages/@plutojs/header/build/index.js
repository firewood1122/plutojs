!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("header",[],t):"object"==typeof exports?exports.header=t():e.header=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var c=u(n(1)),f=n(2),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={show:!1,showBack:!1},t}return o(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.hide;if("undefined"!=typeof window){var r=window.navigator.userAgent.toLowerCase();return{show:n?!n:-1===r.indexOf("micromessenger")&&-1===r.indexOf("alipayclient")}}return{show:!1}},t.prototype.componentDidMount=function(){this.setState({showBack:window.history.length>1})},t.prototype.clickBack=function(){window.history.back()},t.prototype.render=function(){var e=this.state,t=e.show,n=e.showBack,r=this.props,o=r.title,i=r.zIndex;return t?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:f.container,style:{zIndex:i}},c.default.createElement("div",{className:f.header},n?c.default.createElement("div",{className:f.left,onClick:this.clickBack}):c.default.createElement("div",{className:f.blankLeft}),c.default.createElement("div",{className:f.title},o),c.default.createElement("div",{className:f.right}))),c.default.createElement("div",{className:f.fakeHeader})):null},t.defaultProps={title:"",hide:!1,zIndex:999},t}(c.Component);t.default=l},function(e,t){e.exports=require("react")},function(e,t,n){e.exports={container:"_3g5wxB6NANNuQPGnoACAny",header:"bOtL4-91w4OfAfx-PUj43",left:"_3iPL9qE80kFtI7MnzdaVwR",blankLeft:"_3cveGdFO5Rdb2AftP_-9qY",title:"aHdU8d1t3QANAGAsIs5NY",right:"_8bdOPXFBk0ypkuWT6zixY",fakeHeader:"DqLCHMPxmpO7F0mXqiJkJ"}}])}));