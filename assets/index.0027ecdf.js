import{d as e,e as l,i as a,f as n,o as s,c as i,a as t,t as o,w as d,F as c,A as u,b as v,B as m,j as r,aJ as p,p as b,k as f,g as h,b0 as g,b1 as k,q as C,a_ as y}from"./index.3e4447e7.js";import{_ as F}from"./config-title.51884eba.js";import{_ as w}from"./empty-panel.50767044.js";var j=e({name:"EventItem",props:{item:{type:Object,required:!0}},setup(e){const n=l(!0),s=l(e.item.enable),i=a("addField"),t=a("deleteField"),o=a("updateField"),d=a("toggleEnable");return{visible:n,isEnabled:s,addField:()=>{i(e.item.name)},deleteField:l=>{t(e.item.name,l)},updateField:(l,a,n)=>{l[a]=n;const s=e.item.fields.filter((e=>e.name)).map((e=>({name:e.name,map:e.map})));o(e.item.name,s)},onEnableChange:l=>{e.item.enable=l,d(e.item.name,l)}}}});const E={class:"event"},_={class:"event-text"},x=m(" 启用 "),O={key:0,class:"variables"},V={class:"variables-table"},I=t("thead",null,[t("tr",null,[t("th",{width:"80"},[t("span",null,"字段")]),t("th",{width:"110",style:{position:"relative"}},[t("span",null,"绑定到变量")]),t("th",{width:"110"},[t("span",null,"字段说明")])])],-1),q={class:"variables-tbody"},K={class:"variable-input"},L={class:"variable-input"},P={class:"variable-btn"},z={class:"variable-input"},A={class:"desc"},B={class:"add-variable"},J=m(" 新建一个字段 ");j.render=function(e,l,a,m,r,p){const b=n("el-checkbox"),f=n("g-input"),h=n("el-button");return s(),i("div",E,[t("div",{class:"events-title",onClick:l[2]||(l[2]=l=>e.visible=!e.visible)},[t("i",{class:["v-icon-arrow-right",e.visible?"events-down":"events-up"]},null,2),t("div",_,o(e.item.description),1),t(b,{modelValue:e.isEnabled,"onUpdate:modelValue":l[1]||(l[1]=l=>e.isEnabled=l),class:"enable-checkbox",onChange:e.onEnableChange},{default:d((()=>[x])),_:1},8,["modelValue","onChange"])]),e.visible?(s(),i("div",O,[t("table",V,[I,t("tbody",q,[(s(!0),i(c,null,u(e.item.fields,((l,a)=>(s(),i("tr",{key:a},[l.custom?(s(),i(c,{key:0},[t("td",K,[t(f,{"model-value":l.name,placeholder:"可自定义",class:"attr-input",onChange:a=>e.updateField(l,"name",a)},null,8,["model-value","onChange"])]),t("td",L,[t(f,{"model-value":l.map,placeholder:"可自定义",class:"attr-input",onChange:a=>e.updateField(l,"map",a)},null,8,["model-value","onChange"])]),t("td",P,[t("i",{class:"v-icon-delete delete-btn",onClick:l=>e.deleteField(a)},null,8,["onClick"])])],64)):(s(),i(c,{key:1},[t("td",null,o(l.name),1),t("td",z,[t(f,{"model-value":l.map,placeholder:"可自定义",class:"attr-input",onChange:a=>e.updateField(l,"map",a)},null,8,["model-value","onChange"])]),t("td",A,o(l.description),1)],64))])))),128))])]),t("div",B,[t(h,{size:"mini",icon:"v-icon-plus",onClick:e.addField},{default:d((()=>[J])),_:1},8,["onClick"])])])):v("",!0)])};var M=e({name:"InteractionPanel",components:{ConfigTitle:F,EmptyPanel:w,EventItem:j},setup(){const e=a("com"),n=l(!0),s=r((()=>Object.keys(e.value.events))),i=l([]);let t=l(p.pageConfig.variables.componentsView[e.value.id]);const o=(e,l,a,n=!1)=>({name:e,map:l||e,description:a,custom:n}),d=l=>{if(t.value||(t.value={}),!t.value[l]){const a=Object.keys(e.value.events[l].fields);t.value[l]={enable:!1,fields:k(a)}}};return b("addField",(e=>{const l=i.value.find((l=>l.name===e));l.fields.some((e=>""===e.name))||l.fields.push(o("","","",!0))})),b("deleteField",((e,l)=>{const a=i.value.find((l=>l.name===e)).fields.splice(l,1)[0].name;a&&delete t.value[e].fields[a]})),b("updateField",((e,l)=>{d(e),t.value[e].fields=g(l,"name","map")})),b("toggleEnable",((l,a)=>{d(l);const n=t.value[l];n.enable=a;const s=p.pageConfig.variables.publishersView;for(const i in n.fields)s[i]||(s[i]=[]),a?(n.fields[i]||(n.fields[i]=i),s[i].includes(e.value.id)||s[i].push(e.value.id)):(s[i]=s[i].filter((l=>l!==e.value.id)),0===s[i].length&&delete s[i])})),f(t,(()=>{p.pageConfig.variables.componentsView[e.value.id]=t.value})),h((()=>{(()=>{const l=[];for(const[a,n]of Object.entries(e.value.events)){const e={name:a,description:n.description,enable:!1,fields:Object.entries(n.fields).map((([e,l])=>o(e,"",l.description)))};if(t.value){const l=t.value[a];if(l){e.enable=l.enable;for(const[a,n]of Object.entries(l.fields)){const l=e.fields.find((e=>e.name===a));l?l.map=n:e.fields.push(o(a,n,"",!0))}}}l.push(e)}i.value.push(...l)})()})),{com:e,eventKeys:s,visible:n,eventList:i}}});const T={class:"interaction-panle"},U={key:0},D={class:"com-events"},G=m(o("交互事件")),H={class:"extra"},N=m("教程"),Q={class:"event-list"};M.render=function(e,l,a,o,v,m){const r=n("config-title"),p=n("router-link"),b=n("event-item"),f=n("empty-panel");return s(),i("div",T,[t(r,{"com-name":e.com.name,"com-alias":e.com.alias},null,8,["com-name","com-alias"]),e.eventKeys.length>0?(s(),i("div",U,[t("div",D,[t("div",{class:"events-title",onClick:l[1]||(l[1]=l=>e.visible=!e.visible)},[t("div",null,[t("i",{class:["v-icon-arrow-right",e.visible?"events-down":"events-up"]},null,2),G]),t("span",H,[t(p,{to:{name:"MyCase"},target:"_blank",rel:"noopener noreferrer",class:"tutorial-link"},{default:d((()=>[N])),_:1})])]),C(t("div",Q,[(s(!0),i(c,null,u(e.eventList,(e=>(s(),i(b,{key:e.name,item:e},null,8,["item"])))),128))],512),[[y,e.visible]])])])):(s(),i(f,{key:1,content:"该组件没有交互事件"}))])};export default M;
