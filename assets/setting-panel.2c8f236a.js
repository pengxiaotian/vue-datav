import{b as _}from"./App.469555df.js";import{I as w}from"./search.aa1da860.js";import{C as I}from"./config-title.47deea05.js";import{a6 as c,aa as f,ad as l,a4 as h,a9 as S,aj as B,a5 as s,a_ as n,b2 as a,ab as V,b3 as $,b1 as y,bg as E,a7 as H,bm as M,bd as j,be as k}from"./vendor.5472ebc5.js";import"./document.ed5b6cc5.js";const z={},D={t:"1639130694709",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3985",width:"64",height:"64"},L=l("path",{d:"M230.75 624.5v200.94374971L620.07499971 624.5H230.75zM155.75000029 948.55625V549.50000029h773.17499971L155.75000029 948.55625zM928.925 474.49999971H155.75000029V75.44375L928.925 474.49999971z","p-id":"3986"},null,-1),U=[L];function A(e,t){return c(),f("svg",D,U)}var P=_(z,[["render",A]]);const N={},T={t:"1639130711621",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3985",width:"64",height:"64"},q=l("path",{d:"M948.55625 868.24999971H549.50000029V95.075L948.55625 868.24999971zM624.5 793.25h200.94374971L624.5 403.92500029V793.25zM474.49999971 95.075V868.24999971H75.44375L474.49999971 95.075z","p-id":"3986"},null,-1),O=[q];function G(e,t){return c(),f("svg",T,O)}var J=_(N,[["render",G]]);const K=h({name:"BasicSetting",components:{IconFlipV:P,IconFlipH:J},props:{attr:{type:Object,required:!0}},setup(e){const t=S([]),r=d=>{t.value.includes(d)?t.value=t.value.filter(g=>g!==d):t.value.push(d),e.attr.filpV=t.value.includes("v"),e.attr.filpH=t.value.includes("h")};return B(()=>{e.attr.filpV&&t.value.push("v"),e.attr.filpH&&t.value.push("h")}),{filps:t,onFilpChange:r}}}),Q={class:"basic-setting-wp"},R={class:"rotate-flip-wp"},W=$(" \u6C34\u5E73\u7FFB\u8F6C "),X=$(" \u5782\u76F4\u7FFB\u8F6C ");function Y(e,t,r,d,g,b){const i=s("g-input-number"),u=s("g-field"),v=s("IconFlipH"),p=s("n-icon"),m=s("n-tooltip"),F=s("IconFlipV"),C=s("g-slider");return c(),f("div",Q,[n(u,{label:"\u56FE\u8868\u5C3A\u5BF8","is-flat":!0},{default:a(()=>[n(i,{modelValue:e.attr.w,"onUpdate:modelValue":t[0]||(t[0]=o=>e.attr.w=o),min:10,max:888888,inline:""},null,8,["modelValue"]),n(i,{modelValue:e.attr.h,"onUpdate:modelValue":t[1]||(t[1]=o=>e.attr.h=o),min:10,max:888888,inline:""},null,8,["modelValue"])]),_:1}),n(u,{label:"\u56FE\u8868\u4F4D\u7F6E","is-flat":!0},{default:a(()=>[n(i,{modelValue:e.attr.x,"onUpdate:modelValue":t[2]||(t[2]=o=>e.attr.x=o),inline:""},null,8,["modelValue"]),n(i,{modelValue:e.attr.y,"onUpdate:modelValue":t[3]||(t[3]=o=>e.attr.y=o),inline:""},null,8,["modelValue"])]),_:1}),n(u,{label:"\u65CB\u8F6C\u89D2\u5EA6","is-flat":!0},{default:a(()=>[n(i,{modelValue:e.attr.deg,"onUpdate:modelValue":t[4]||(t[4]=o=>e.attr.deg=o),min:0,max:360,step:1,inline:""},null,8,["modelValue"]),l("div",R,[n(m,null,{trigger:a(()=>[l("button",{class:V(["hor",{"--checked":e.filps.includes("h")}]),onClick:t[5]||(t[5]=o=>e.onFilpChange("h"))},[n(p,null,{default:a(()=>[n(v)]),_:1})],2)]),default:a(()=>[W]),_:1}),n(m,null,{trigger:a(()=>[l("button",{class:V(["ver",{"--checked":e.filps.includes("v")}]),onClick:t[6]||(t[6]=o=>e.onFilpChange("v"))},[n(p,null,{default:a(()=>[n(F)]),_:1})],2)]),default:a(()=>[X]),_:1})])]),_:1}),n(u,{label:"\u900F\u660E\u5EA6"},{default:a(()=>[n(C,{modelValue:e.attr.opacity,"onUpdate:modelValue":t[7]||(t[7]=o=>e.attr.opacity=o),min:0,max:1,step:.05},null,8,["modelValue","step"])]),_:1})])}var Z=_(K,[["render",Y],["__scopeId","data-v-4aaf66f3"]]);const x=h({name:"SettingPanel",components:{ConfigTitle:I,BasicSetting:Z,IconSearch:w},setup(){const e=y(),t=E("com");return{toSearch:()=>{e.warning("\u6B63\u5728\u5F00\u53D1\u4E2D\u3002\u3002\u3002")},com:t}}}),ee=e=>(j("data-v-159dd502"),e=e(),k(),e),te={class:"setting-panel"},ne=ee(()=>l("span",null,"\u641C\u7D22\u914D\u7F6E",-1)),oe={class:"setting-panel-content"},ae={class:"scroll-container"};function se(e,t,r,d,g,b){const i=s("IconSearch"),u=s("n-icon"),v=s("config-title"),p=s("basic-setting");return c(),f("div",te,[n(v,{"com-name":e.com.name,"com-alias":e.com.alias},{default:a(()=>[l("div",{class:"search-config",onClick:t[0]||(t[0]=(...m)=>e.toSearch&&e.toSearch(...m))},[n(u,{class:"search-icon"},{default:a(()=>[n(i)]),_:1}),ne])]),_:1},8,["com-name","com-alias"]),l("div",oe,[l("div",ae,[n(p,{key:`${e.com.id}'_basic-setting`,attr:e.com.attr},null,8,["attr"]),(c(),H(M(e.com.name+"Prop"),{key:e.com.id,com:e.com},null,8,["com"]))])])])}var re=_(x,[["render",se],["__scopeId","data-v-159dd502"]]);export{re as default};
