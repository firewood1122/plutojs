!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("countdown",[],e):"object"==typeof exports?exports.countdown=e():t.countdown=e()}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e){var n=t.call(this,e)||this;return n.timer=null,n.state={hour:0,min:0,second:0},n}return r(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.leftSecond,n=t.callback;this.setState({hour:e>3600?Math.floor(e/3600):0,min:Math.floor(e%3600/60),second:e%3600%60}),this.handleCountdown(e,n)},e.prototype.componentWillUnmount=function(){window.clearTimeout(this.timer),this.timer=null,this.setState=function(t,e){}},e.prototype.handleCountdown=function(t,e){var n=this,o=this.props.done,r=Date.now()+1e3*t;Date.now()<r&&(this.timer=window.setTimeout((function(){Date.now()<r?(t--,n.setState({hour:t>3600?Math.floor(t/3600):0,min:Math.floor(t%3600/60),second:t%3600%60}),e(t),n.handleCountdown(t,e)):(n.setState({second:0}),window.clearTimeout(n.timer),n.timer=null,o&&o())}),1e3))},e.prototype.render=function(){var t=this.props.renderChildren,e=this.state,n=e.hour,o=e.min,r=e.second;return 0===n&&0==o&&0===r?null:t(n,o,r)},e.defaultProps={callback:function(t){},renderChildren:function(t,e,n){return t+"小时"+e+"分"+n+"秒"},done:function(){}},e}(n(1).Component);e.default=i},function(t,e){t.exports=require("react")}])}));