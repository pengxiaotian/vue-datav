import{b as n}from"./config.3c16c364.js";import{a as r}from"./AppRoot.9161bc33.js";import{a4 as s,bd as c,a5 as i,aa as d,aX as p,a6 as u}from"./vendor.1c7e0fbb.js";const m=s({name:"DsStaticEditor",setup(){const{apiDataConfig:a}=c(n);return{apiDataConfig:a,updateData:o=>{a.value.config.data=o.value}}}}),f={class:"ds-wrapper ds-static"};function l(a,t,o,_,g,D){const e=i("g-monaco-editor");return u(),d("div",f,[p(e,{language:"json","auto-format":!0,code:a.apiDataConfig.config.data,onBlur:a.updateData},null,8,["code","onBlur"])])}var $=r(m,[["render",l]]);export{$ as default};
