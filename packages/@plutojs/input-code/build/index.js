!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("input-code",[],t):"object"==typeof exports?exports["input-code"]=t():e["input-code"]=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&u(t,e,n);return i(t,e),t},c=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r};Object.defineProperty(t,"__esModule",{value:!0});var f=a(n(1)),l=n(2),s=function(e){function t(t){var n=e.call(this,t)||this;return n.inputEl=null,n.onChange=function(e){var t=n.props.change,r=e.target.value;n.setState({value:c(r)}),t(r)},n.state={value:[]},n}return o(t,e),t.prototype.clear=function(){var e=this;this.setState({value:[]},(function(){e.inputEl.value="",e.inputEl.focus()}))},t.prototype.render=function(){for(var e=this,t=this.props.count,n=this.state.value,r=[],o=0;o<t;o++)n[o]?r.push(f.default.createElement("div",{key:"item-"+o,className:l.value},n[o])):r.push(f.default.createElement("div",{key:"item-"+o,className:l.item}));return f.default.createElement("div",{className:l.container},r,f.default.createElement("input",{className:l.input,maxLength:t,onChange:this.onChange,type:"tel",ref:function(t){e.inputEl=t}}))},t.defaultProps={count:4,change:function(){}},t}(f.Component);t.default=s},function(e,t){e.exports=require("react")},function(e,t,n){e.exports={container:"_2yZ0zfqAbT_3W6DFMGIQHT",input:"_2DNJPK5lR2OKGEdWjpY_X3",item:"_1b2YivTtBG0zdoriEI_1Sr",value:"gt71p8dTJFFKbOWC7tMyD"}}])}));