"use strict";(self.webpackChunkantd_max=self.webpackChunkantd_max||[]).push([[458],{4068:(e,s,i)=>{i.r(s),i.d(s,{default:()=>o});var d=i(5893),n=i(7294),t=i(5372);function a(e,s){if(e.length!==s.length)return!1;let i=0;for(let d=0;d<e.length;d++){const n=e[d];n&&s.includes(n)&&i++}return i===e.length}const l="antm-ui-sku";function c(e){const{sku:s=[],className:i="",goodsList:c=[],goodsId:u,onChange:r,clickAttrDisable:o,itemRender:m,itemDisable:k}=e,[f,h]=(0,n.useState)();(0,n.useEffect)((function(){if(!u&&c)for(let e=0;e<c.length;e++){const s=c[e];if(!0!==s?.disabled){h(s),r&&r(s);break}}if(u&&c)for(let e=0;e<c.length;e++){const s=c[e];if(s?.id===u){h(s);break}}}),[u,c]);const B=(0,n.useCallback)((function(e,s){let i=[...f?.skuIds||[]];if(!i.length)return;const d=s.filter((e=>i.includes(e.id)))[0].id;let n;i.splice(i.indexOf(d),1),i=i.concat(e);for(let e=0;e<c.length;e++)if(c[e]?.skuIds&&a(c[e]?.skuIds||[],i)){n=c[e];break}return n}),[f?.skuIds,c]),G=(0,n.useCallback)((function(e,s){s?(h(e),r&&r(e)):o&&o(e)}),[o,r]);return(0,d.jsx)("div",{className:`${l} ${i}`,children:s.map(((e,s)=>(0,d.jsxs)("div",{className:`${l}-item`,children:[(0,d.jsx)("div",{className:`${l}-name`,children:e.name}),(0,d.jsx)("div",{className:`${l}-attrs`,children:e.items.map(((s,i)=>{const n=B(s.id,e.items),a=!(!n||!0===n.disabled||k&&k(n));return(0,d.jsx)(t.ZP,{className:`${l}-attr`,onClick:()=>G(n,a),disabled:!a,type:f?.skuIds.includes(s.id)?"primary":"default",children:m?m(s):s.name},`attr#${i}@${s.id}`)}))})]},`sku#${s}@${e.id}`)))})}const u=[{id:1,name:"颜色",items:[{name:"亮黑色",id:11,color:"#131111"},{name:"釉白色",id:12,mark:"首发",color:"#ffff"},{name:"秘银色",id:13,color:"#d2cccc"},{name:"夏日胡杨",id:14,color:"#dd5151"}]},{id:2,name:"版本",items:[{name:"8GB+128GB",id:21},{name:"8GB+256GB",id:22}]}],r=[{id:1,skuIds:[11,21],skuName:"亮黑色&8GB+128GB"},{id:2,skuIds:[11,22],skuName:"亮黑色&8GB+256GB",count:0},{id:3,skuIds:[12,21],skuName:"釉白色&8GB+128GB"},{id:4,skuIds:[12,22],skuName:"釉白色&8GB+256GB"},{id:4,skuIds:[21,13],skuName:"秘银色&8GB+128GB"},{id:6,skuIds:[13,22],skuName:"秘银色&8GB+256GB",disabled:!0},{id:7,skuIds:[14,22],skuName:"夏日胡杨&8GB+256GB"}];function o(){const[e,s]=(0,n.useState)({});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:"当前选择商品："}),(0,d.jsxs)("div",{style:{paddingBottom:10},children:["HUAWEI手机【",e.skuName||"--","】"]}),(0,d.jsx)(c,{sku:u,goodsList:r,onChange:e=>s(e),itemDisable:e=>!e||0===e.count,itemRender:e=>e.color?(0,d.jsxs)("div",{className:"sku-color-item",children:[(0,d.jsx)("div",{className:"color-item",style:{background:e.color}}),(0,d.jsx)("div",{children:e.name})]}):e.name})]})}}}]);