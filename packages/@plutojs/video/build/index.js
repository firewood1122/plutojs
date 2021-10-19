!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("video",[],t):"object"==typeof exports?exports.video=t():e.video=t()}(this,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=require("react")},function(e,t,o){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.hasOwnProperty.call(e,o)&&r(t,e,o);return l(t,e),t},d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=s(o(0)),c=d(o(2)),u=d(o(5)),p=function(e){function t(t){var o=e.call(this,t)||this;return o.videoEl=null,o.last=0,o.play=function(){var e=o.props.currentTime;o.setState({showVideo:!0,initVideo:!0},(function(){o.videoEl&&(o.last=e,o.videoEl.play())}))},o.onCanPlay=function(){var e=o.props.currentTime;e>0&&o.videoEl.currentTime<e&&(o.videoEl.currentTime=e)},o.pause=function(){o.videoEl&&o.videoEl.pause()},o.onEnded=function(){var e=o.props.onClose;o.setState({showVideo:!1}),e&&e(),o.videoEl&&(o.videoEl.pause(),o.videoEl.currentTime=0)},o.onTimeUpdate=function(){var e=o.props,t=e.disableFast,n=e.disableFastCallback;if(t){var i=o.videoEl.currentTime;i-o.last>2?(o.videoEl.currentTime=o.last,n&&n()):o.last=i}},o.closeFullscreenVideo=function(){var e=o.props.onCloseFullscreenVideo;e&&e(o.videoEl.currentTime),o.setState({showVideo:!1})},o.state={initVideo:!1,showVideo:!1},o}return i(t,e),t.prototype.componentDidUpdate=function(e){var t=this.props,o=t.closeVideo,n=t.onClose;e.closeVideo!==o&&!0===o&&(this.setState({showVideo:!1}),n&&n(),this.videoEl&&(this.videoEl.pause(),this.videoEl.currentTime=0))},t.prototype.render=function(){var e=this,t=this.props,o=t.coverUrl,n=t.videoUrl,i=t.fullscreen,r=t.fullscreenTips,l=t.controls,s=t.playsInline,d=t.controlsList,p=t.disablePictureInPicture,f=this.state,m=f.initVideo,v=f.showVideo;return a.default.createElement("div",{className:""+(m&&i&&v?u.default.fullscreenContainer:u.default.container)},o&&a.default.createElement("div",{className:""+(v?u.default.hidden:"")},a.default.createElement("div",{className:""+u.default.coverIcon,onClick:this.play}),a.default.createElement("img",{className:""+u.default.cover,src:o})),n&&m&&a.default.createElement(a.default.Fragment,null,i?a.default.createElement(c.default,{isOpened:v,isLock:!0,onHide:function(){}},a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:""+u.default.close},a.default.createElement("div",{className:""+u.default.tips},r),a.default.createElement("div",{className:""+u.default.closeIcon,onClick:this.closeFullscreenVideo})),a.default.createElement("div",{className:""+u.default.videoContent},a.default.createElement("video",{preload:"metadata",ref:function(t){e.videoEl=t},src:n,controls:l,playsInline:s,style:{objectFit:"contain",width:"100%",height:"100%"},onEnded:this.onEnded,controlsList:d,disablePictureInPicture:p,onTimeUpdate:this.onTimeUpdate,onCanPlay:this.onCanPlay})))):a.default.createElement("div",{className:u.default.videoContainer+" "+(v?"":u.default.displayHidden)},a.default.createElement("video",{preload:"metadata",ref:function(t){e.videoEl=t},src:n,poster:o,controls:l,playsInline:s,style:{objectFit:"contain"},onEnded:this.onEnded,controlsList:d,disablePictureInPicture:p,onTimeUpdate:this.onTimeUpdate}))))},t.defaultProps={fullscreen:!1,fullscreenTips:"",currentTime:0,controls:!0,playsInline:!0,closeVideo:!1,onClose:function(){},onCloseFullscreenVideo:function(){},controlsList:"",disablePictureInPicture:!1,disableFast:!1},t}(a.Component);t.default=p},function(e,t,o){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),d=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.hasOwnProperty.call(e,o)&&l(t,e,o);return s(t,e),t},a=this&&this.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=c(o(3)),p=d(o(0)),f=c(o(4));var m=new function(){var e=[],t=[];this.addModal=function(t){e.push(t)},this.removeModal=function(o){var n=[];e.forEach((function(e){o.modalId!==e.modalId&&n.push(e)})),e=n;var i=[];t.forEach((function(e){o.modalId!==e.modalId&&i.push(e)})),t=i},this.showModal=function(o){t.push(o),e.forEach((function(e){e.setVisibility(o.modalId===e.modalId?"visible":"hidden")}))},this.hideModal=function(e){var o=[];t.forEach((function(t){e.modalId!==t.modalId&&o.push(t)})),(t=o).length>0&&t[t.length-1].setVisibility("visible")},this.getShowingCount=function(){return t.length}},v=function(e){function t(t){var o=e.call(this,t)||this;return o.positionMap={top:f.default.top,center:f.default.center,bottom:f.default.bottom},o.modalId="",o.modalEl=null,o.contentEl=null,o.prePosition="",o.scrollTop=0,o.containerHeight=0,o.setStyle=function(e){if(e){if("fixed"===document.body.style.position)return;o.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-"+o.scrollTop+"px",document.body.style.overflow="hidden",o.modalEl&&(o.modalEl.current.style.top=o.scrollTop+"px")}else 0===m.getShowingCount()&&(document.body.style.position=o.prePosition||"static",document.body.style.top="0px",document.documentElement.scrollTop=o.scrollTop,document.body.scrollTop=o.scrollTop,document.body.style.overflow="auto")},o.setVisibility=function(e){o.setState({visibility:e})},o.modalEl=p.createRef(),o.state={height:0,visibility:"visible"},o.modalId=Date.now()+"_"+Math.random(),m.addModal(o),o}return i(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,o=t.isOpened,n=t.isLock,i=t.target;n&&(this.prePosition=document.body.style.position,this.setStyle(o)),setTimeout((function(){e.setState({height:document.documentElement.clientHeight||document.body.clientHeight})}),100);var r=window.navigator.userAgent.toLowerCase();/android|miuibrowser/i.test(r)&&window.addEventListener("resize",(function(){var t=document.documentElement.clientHeight||document.body.clientHeight;if(e.containerHeight!==t){e.containerHeight=t,e.setState({height:t});var o=document.activeElement;if("input"===o.tagName.toLowerCase()&&i&&i.current){var n=i.current;n.scrollTop=o.offsetTop-n.offsetHeight+o.offsetHeight}}}))},t.prototype.componentDidUpdate=function(e){var t=this.props,o=t.isOpened;t.isLock&&e.isOpened!==o&&(o?m.showModal(this):m.hideModal(this),this.setStyle(o))},t.prototype.componentWillUnmount=function(){var e=this.props.isLock;m.removeModal(this),e&&this.setStyle(!1)},t.prototype.render=function(){var e=this.props,t=e.children,o=e.isOpened,n=e.position,i=e.isMask,r=e.isLock,l=e.closeOnClickOverlay,s=e.zIndex,d=e.onHide,a=this.state,c=a.height,u=a.visibility;return p.default.createElement(p.default.Fragment,null,o&&p.default.createElement("div",{ref:this.modalEl,style:{zIndex:s,height:c+"px",visibility:u},className:(r?f.default.lockModal:f.default.modal)+" "+this.positionMap[n]+" "+(i?f.default.mask:""),onClick:function(){l&&d&&d()}},p.default.createElement("div",{ref:this.contentEl,className:f.default.content,onClick:function(e){e.stopPropagation()}},t)))},t.defaultProps={position:"center",isMask:!0,isLock:!0,zIndex:999,closeOnClickOverlay:!0},t.popup=function(e){var o=a(e||{},[]),n=document.createElement("div");return document.body.appendChild(n),u.default.render(p.default.createElement(t,r({},o)),n),{destroy:function(){try{u.default.unmountComponentAtNode(n),document.body.removeChild(n)}catch(e){}}}},t}(p.Component);t.default=v},function(e,t){e.exports=require("react-dom")},function(e,t,o){e.exports={lockModal:"plutojs_video_lockModal",modal:"plutojs_video_modal",mask:"plutojs_video_mask",popUpBg:"plutojs_video_popUpBg",content:"plutojs_video_content",popUpContent:"plutojs_video_popUpContent",center:"plutojs_video_center",top:"plutojs_video_top",bottom:"plutojs_video_bottom"}},function(e,t,o){e.exports={container:"plutojs_video_container",fullscreenContainer:"plutojs_video_fullscreenContainer",coverIcon:"plutojs_video_coverIcon",cover:"plutojs_video_cover",videoContainer:"plutojs_video_videoContainer",hidden:"plutojs_video_hidden",displayHidden:"plutojs_video_displayHidden",content:"plutojs_video_content",close:"plutojs_video_close",tips:"plutojs_video_tips",closeIcon:"plutojs_video_closeIcon",videoContent:"plutojs_video_videoContent"}}])}));