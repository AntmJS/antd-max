"use strict";(self.webpackChunkantd_max=self.webpackChunkantd_max||[]).push([[953],{7584:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(5893),a=r(7294),l=r(5372);function n(e){const{onClick:t,children:r,async:n,loadingText:s,...c}=e,[i,p]=(0,a.useState)(!1),m=(0,a.useCallback)((async e=>{i||(t&&n?(p(!0),await t(e),p(!1)):t&&t(e))}),[n,i,t]);return(0,o.jsx)(l.ZP,{...c,onClick:m,loading:i,children:i&&s||r})}},3953:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var o=r(5893),a=r(5933);function l(){const[e]=a.Z.useForm();return(0,o.jsx)(a.Z,{queryInit:!0,form:e,actions:[{type:"default",children:"重置",actionType:"reset"},{type:"primary",children:"搜索",onClick:e=>new Promise((t=>{setTimeout((()=>{console.info(e),t(null)}),2e3)})),async:!0}],config:[{key:"name",label:"用户名称",type:"input"},{key:"select",label:"下拉搜索",type:"select",props:{options:[{label:"选项1",value:"key1"},{label:"选项2",value:"key2"}]}},{key:"time",label:"日期选择",type:"timePicker"},{key:"month",label:"月份选择",type:"monthPicker"},{key:"creatTime",label:"创建时间",type:"rangePicker"},{key:"treeSelect",label:"树选择",type:"treeSelect",props:{treeData:[]}},{key:"cascader",label:"树选择",type:"cascader",props:{options:[]}}]})}},5933:(e,t,r)=>{r.d(t,{Z:()=>Y});var o=r(5893),a=r(7294),l=r(7004),n=r(5746),s=r(1230);var c=r(7584);function i(e,t,r){for(const o in e){let a="",l={};for(let e=0;e<t.length;e++){const r=t[e];r?.key===o&&(a=r.type,l=r.props)}const n=r[a]?.transformDefaultValue,s=r?.[a]?.transformProps(l,{});n&&(e[o]=n(e[o],s))}return e}var p=r(7727),m=r(4041),f=r(8351),u=r(2637),y=r(8958),d=r(6178),h=r(3182),k=r(7484),b=r.n(k);const C=p.default.MonthPicker,x=p.default.RangePicker,w=m.Z.Option,P={},Z=(e,t)=>{if(e)return Array.isArray(e)?e.map((e=>e?b()(e,t.format):void 0)):b()(e,t.format)},$=(e,t)=>{if(e)return Array.isArray(e)?e.map((e=>e?e.format(t.format):void 0)):e?e.format(t.format):void 0},v=[{type:"timePicker",component:f.Z,transformDefaultValue:Z,transformValue:$,transformProps:(e,t)=>({allowClear:!0,format:"HH:mm:ss",placeholder:`请选择${t.label||""}`,...e})},{type:"monthPicker",component:C,transformDefaultValue:Z,transformValue:$,transformProps:e=>({allowClear:!0,format:"YYYY-MM",placeholder:"请选择",...e})},{type:"rangePicker",component:x,transformDefaultValue:Z,transformValue:$,transformProps:e=>({allowClear:!0,format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"],...e})},{type:"cascader",component:u.Z,transformProps:(e,t)=>({allowClear:!0,placeholder:`请选择${t.label||""}`,...e})},{type:"treeSelect",component:y.Z,transformProps:e=>({allowClear:!0,showSearch:!0,placeholder:"请选择",...e})},{type:"input",component:d.Z,transformProps:(e,t)=>({allowClear:!0,placeholder:`请输入${t.label||""}`,...e})},{type:"select",component:m.Z,transformProps:(e,t)=>({allowClear:!0,filterOption:e.showSearch?(e,t)=>{t?.props.children.props.title.toLowerCase().indexOf(e.toLowerCase())}:void 0,placeholder:`请输入${t.label||""}`,...e,children:(e.options||[]).map((e=>(0,o.jsx)(w,{value:e.value,children:(0,o.jsx)(h.Z,{title:e.label,children:e.label})},`${e.value}_${e.label}`)))})}];function g(e){const{type:t}=e;P[t]&&console.warn(`FormBox: Overwrite existing component ${t}`),P[t]=e}v.forEach((e=>{g(e)}));const j="antm-ui",V=l.Z.Item;let D=0;function S(e){const{config:t,defaultValues:r,actions:p,queryInit:m,col:f,form:u,...y}=e,d=f,[h]=(0,a.useState)(D++);(0,a.useEffect)((()=>{if(m){const e=i(((e=window.location.href)=>{const t=e.split("?")[1],r={};if(t){const e=t.split("&");for(let t=0;t<e.length;t++){const a=e[t]?.split("=");r[a[0]]=a[1]?(o=a[1],"object"==typeof decodeURIComponent(o)?JSON.parse(o):o):void 0}}var o;return r})(),t,P);u.setFieldsValue(e)}}),[]);const k=(0,a.useCallback)(((e,t)=>{const{type:r,key:a,label:l,props:s,col:c,...i}=e,p=P[r],{component:m,transformProps:f,transformDefaultValue:u,transformValue:y,...k}=p,b=m,C=f?.(s||{},{label:l});return(0,o.jsx)(n.Z,{xl:c||d||8,lg:12,md:24,sm:24,xs:24,style:{marginBottom:"24px"},children:(0,o.jsx)(V,{label:l,name:a,...Object.assign(k,i),children:(0,o.jsx)(b,{...C})})},`${j}-form-col${t}_${h}_${Array.isArray(a)?a.join("_"):a}`)}),[h,d]),b=(0,a.useCallback)((()=>{const e=u.getFieldsValue();for(const r in e){let o="",a={};for(let e=0;e<t.length;e++){const l=t[e];l?.key===r&&(o=l.type,a=l.props)}const l=P[o]?.transformValue,n=P[o].transformProps(a,{});l&&(e[r]=l(e[r],n))}return e}),[t,u]),C=(0,a.useCallback)((e=>{const t=b();"reset"===e.actionType&&u.resetFields(),e.onClick?.(t)}),[u,b]),x=(0,a.useCallback)((()=>i(r||{},t,P)),[t,r]);return(0,o.jsxs)(l.Z,{initialValues:x||{},className:`${j}-form-max`,layout:"inline",form:u,...y,children:[(0,o.jsx)(s.Z,{style:{width:"100%"},children:t.map(((e,t)=>k(e,t)))}),(0,o.jsx)(s.Z,{style:{width:"100%"},children:(0,o.jsx)(n.Z,{span:24,className:`${j}-form-max-btns`,children:p?.map(((e,t)=>{const{actionType:r,...o}=e;return(0,a.createElement)(c.Z,{...o,className:`${j}-form-max-btn ${e.className||""}`,key:`${j}-btn_${h}_${t}`,onClick:()=>C(e)})}))})})]})}S.resiterComponent=g,S.showComponents=function(){return P},S.useForm=l.Z.useForm;const Y=S}}]);