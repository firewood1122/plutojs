!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("modal",[],e):"object"==typeof exports?exports.modal=e():t.modal=e()}(this,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},l=this&&this.__createBinding||(Object.create?function(t,e,o,n){void 0===n&&(n=o),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[o]}})}:function(t,e,o,n){void 0===n&&(n=o),t[n]=e[o]}),u=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),d=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)"default"!==o&&Object.hasOwnProperty.call(t,o)&&l(e,t,o);return u(e,t),e},s=this&&this.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(o[n[i]]=t[n[i]])}return o},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=a(o(1)),p=d(o(2)),f=a(o(3));var m=new function(){var t=[],e=[];this.addModal=function(e){t.push(e)},this.removeModal=function(o){var n=[];t.forEach((function(t){o.modalId!==t.modalId&&n.push(t)})),t=n;var i=[];e.forEach((function(t){o.modalId!==t.modalId&&i.push(t)})),e=i},this.showModal=function(o){e.push(o),t.forEach((function(t){t.setVisibility(o.modalId===t.modalId?"visible":"hidden")}))},this.hideModal=function(t){var o=[];e.forEach((function(e){t.modalId!==e.modalId&&o.push(e)})),(e=o).length>0&&e[e.length-1].setVisibility("visible")},this.getShowingCount=function(){return e.length}},h=function(t){function e(e){var o=t.call(this,e)||this;return o.positionMap={top:f.default.top,center:f.default.center,bottom:f.default.bottom},o.modalId="",o.containerEl=null,o.modalEl=null,o.contentEl=null,o.prePosition="",o.scrollTop=0,o.containerHeight=0,o.setStyle=function(t){if(t){if("fixed"===document.body.style.position)return;o.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-"+o.scrollTop+"px",document.body.style.overflow="hidden",o.modalEl&&(o.modalEl.current.style.top=o.scrollTop+"px")}else 0===m.getShowingCount()&&(document.body.style.position=o.prePosition||"static",document.body.style.top="0px",document.documentElement.scrollTop=o.scrollTop,document.body.scrollTop=o.scrollTop,document.body.style.overflow="initial")},o.setVisibility=function(t){o.setState({visibility:t})},o.modalEl=p.createRef(),o.state={height:0,visibility:"visible"},o.containerEl=document.createElement("div"),document.body.appendChild(o.containerEl),o.modalId=Date.now()+"_"+Math.random(),m.addModal(o),o}return i(e,t),e.prototype.componentDidMount=function(){var t=this,e=this.props,o=e.isOpened,n=e.isLock,i=e.target;n&&(this.prePosition=document.body.style.position,this.setStyle(o)),setTimeout((function(){t.setState({height:document.documentElement.clientHeight||document.body.clientHeight})}),100);var r=window.navigator.userAgent.toLowerCase();/android|miuibrowser/i.test(r)&&window.addEventListener("resize",(function(){var e=document.documentElement.clientHeight||document.body.clientHeight;if(t.containerHeight!==e){t.containerHeight=e,t.setState({height:e});var o=document.activeElement;if("input"===o.tagName.toLowerCase()&&i&&i.current){var n=i.current;n.scrollTop=o.offsetTop-n.offsetHeight+o.offsetHeight}}}))},e.prototype.componentDidUpdate=function(t){var e=this.props,o=e.isOpened;e.isLock&&t.isOpened!==o&&(o?m.showModal(this):m.hideModal(this),this.setStyle(o))},e.prototype.componentWillUnmount=function(){var t=this.props.isLock;m.removeModal(this),this.containerEl&&document.body.removeChild(this.containerEl),t&&this.setStyle(!1)},e.prototype.render=function(){var t=this.props,e=t.children,o=t.isOpened,n=t.position,i=t.isMask,r=t.isLock,l=t.closeOnClickOverlay,u=t.zIndex,d=t.transition,s=void 0===d?"popup":d,a=t.maskClassName,m=void 0===a?"":a,h=t.onHide,y=this.state,b=(y.height,y.visibility),v=[f.default.content];return"popup"===s?v.push(f.default.popUp):v.push(f.default.slideOut),c.default.createPortal(p.default.createElement(p.default.Fragment,null,o&&p.default.createElement("div",{ref:this.modalEl,style:{zIndex:u,height:"100vh",visibility:b},className:(r?f.default.lockModal:f.default.modal)+" "+this.positionMap[n]+" "+(i?m||f.default.mask:""),onClick:function(){l&&h&&h()}},p.default.createElement("div",{ref:this.contentEl,className:v.join(" "),onClick:function(t){t.stopPropagation()}},e))),this.containerEl)},e.defaultProps={position:"center",isMask:!0,isLock:!0,zIndex:999,closeOnClickOverlay:!0},e.popup=function(t){var o=s(t||{},[]),n=document.createElement("div");return document.body.appendChild(n),c.default.render(p.default.createElement(e,r({},o)),n),{destroy:function(){try{c.default.unmountComponentAtNode(n),document.body.removeChild(n)}catch(t){}}}},e}(p.Component);e.default=h},function(t,e){t.exports=require("react-dom")},function(t,e){t.exports=require("react")},function(t,e,o){t.exports={lockModal:"plutojs_modal_lockModal",modal:"plutojs_modal_modal",mask:"plutojs_modal_mask",popUpBg:"plutojs_modal_popUpBg",content:"plutojs_modal_content",popUp:"plutojs_modal_popUp",popUpContent:"plutojs_modal_popUpContent",slideOut:"plutojs_modal_slideOut",slideOutContent:"plutojs_modal_slideOutContent",center:"plutojs_modal_center",top:"plutojs_modal_top",bottom:"plutojs_modal_bottom"}}])}));