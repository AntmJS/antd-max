"use strict";(self.webpackChunkantd_max=self.webpackChunkantd_max||[]).push([[457],{9457:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t(3111),o=t(371),i=t(5746),c=t(8638),l=t(5261),a=t(5893);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==u(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function y(e){return(0,a.jsx)(l.Z,p({},e))}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}l.Z.resiterComponent({type:"checkbox",component:o.Z.Group,transformProps:function(e){return p({children:function(e){var r=e.options;return(0,a.jsx)(a.Fragment,{children:r.map((function(e,r){return"object"===u(e)?(0,a.jsx)(i.Z,{span:8,children:(0,a.jsx)(o.Z,{value:e.value,children:e.label})},"".concat(e.value,"_").concat(r)):(0,a.jsx)(i.Z,{span:8,children:(0,a.jsx)(o.Z,{value:e,children:e})},"".concat(e,"_").concat(r))}))})}},e)}}),l.Z.resiterComponent({type:"imageUploader",component:c.Z,trigger:"onChange",valuePropName:"fileList",getValueFromEvent:function(e){return Array.isArray(e)?e:null==e?void 0:e.fileList},transformProps:function(e){return p({action:"/upload.do",listType:"picture-card",children:(0,a.jsx)("div",{style:{marginTop:8},children:"上传"})},e)}}),y.resiterComponent=l.Z.resiterComponent,y.showComponents=l.Z.showComponents,y.useForm=l.Z.useForm;var m=y;function d(){var e,r,t=(e=y.useForm(),r=1,function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,c,l=[],a=!0,u=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;a=!1}else for(;!(a=(n=i.call(t)).done)&&(l.push(n.value),l.length!==r);a=!0);}catch(e){u=!0,o=e}finally{try{if(!a&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"表单模块1"}),(0,a.jsx)(m,{form:t,config:[{key:"images",label:"上传图片",type:"imageUploader"},{key:"checkbox",label:"选择品类",type:"checkbox",props:{options:["A","B","C","D"]}}]}),(0,a.jsx)("span",{children:"表单模块2"}),(0,a.jsx)(m,{form:t,config:[{col:24,key:"checkbox1",label:"选择品类",type:"checkbox",props:{options:["A","B","C","D"]}}]}),(0,a.jsx)(n.Z,{onClick:function(){alert(JSON.stringify(t.getFieldsValue()))},children:"点击"})]})}}}]);