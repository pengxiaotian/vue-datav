import{f as T,a as x,i as U}from"./select-options.8a7ac8f4.js";import{e as z,aH as q,aq as s,o as r,f as F,j as a,w as t,k as l,s as p,p as f,L as E,O as B,K as D,t as y}from"./App.c8de2d3d.js";const S={class:"setting-panel-gui"},O=z({__name:"config",props:{com:null},setup(A){const e=q(A.com,"config"),w=[{key:"desc",value:"\u964D\u5E8F"},{key:"asc",value:"\u5347\u5E8F"}],k=[{key:"1",value:"1"},{key:"2",value:"NO.1"},{key:"3",value:"(1)"}];return(L,o)=>{const V=s("g-select"),d=s("g-field"),b=s("n-switch"),n=s("g-input-number"),m=s("g-field-collapse"),i=s("g-color-picker"),g=s("g-input"),v=s("n-radio-button"),C=s("n-radio-group");return r(),F("div",S,[a(m,{label:"\u5168\u5C40\u6837\u5F0F"},{default:t(()=>[a(d,{level:2,tooltip:"\u8BF7\u9009\u62E9\u60A8\u7CFB\u7EDF\u6709\u7684\u5B57\u4F53\uFF0C\u5982\u679C\u60A8\u7CFB\u7EDF\u65E0\u6B64\u5B57\u4F53\uFF0C\u6807\u9898\u5C06\u4F1A\u663E\u793A\u9ED8\u8BA4\u5B57\u4F53",label:"\u5B57\u4F53"},{default:t(()=>[a(V,{modelValue:l(e).global.fontFamily,"onUpdate:modelValue":o[0]||(o[0]=u=>l(e).global.fontFamily=u),data:l(T)},null,8,["modelValue","data"])]),_:1}),a(d,{level:2,label:"\u5F00\u542F\u52A8\u753B"},{default:t(()=>[a(b,{value:l(e).global.animation,"onUpdate:value":o[1]||(o[1]=u=>l(e).global.animation=u)},null,8,["value"])]),_:1}),a(d,{level:2,label:"\u52A8\u753B\u65F6\u95F4"},{default:t(()=>[a(n,{modelValue:l(e).global.duration,"onUpdate:modelValue":o[2]||(o[2]=u=>l(e).global.duration=u),min:100,max:999999,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u884C\u95F4\u8DDD"},{default:t(()=>[a(n,{modelValue:l(e).global.padding,"onUpdate:modelValue":o[3]||(o[3]=u=>l(e).global.padding=u),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u6570\u91CF"},{default:t(()=>[a(n,{modelValue:l(e).global.quantity,"onUpdate:modelValue":o[4]||(o[4]=u=>l(e).global.quantity=u),min:1,max:100,step:1},null,8,["modelValue"])]),_:1}),a(d,{level:2,tooltip:"\u5F00\u542F\u81EA\u52A8\u8F6E\u64AD\u540E, \u914D\u7F6E\u4E0D\u4F1A\u7ACB\u5373\u751F\u6548, \u5C06\u4F1A\u5728\u4E0B\u4E00\u6B21\u8F6E\u64AD\u540E\u751F\u6548",label:"\u81EA\u52A8\u8F6E\u64AD"},{default:t(()=>[a(b,{value:l(e).global.loop,"onUpdate:value":o[5]||(o[5]=u=>l(e).global.loop=u)},null,8,["value"])]),_:1}),l(e).global.loop===!0?(r(),p(d,{key:0,level:2,label:"\u8F6E\u64AD\u65F6\u95F4"},{default:t(()=>[a(n,{modelValue:l(e).global.looptime,"onUpdate:modelValue":o[6]||(o[6]=u=>l(e).global.looptime=u),min:100,max:999999,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1})):f("",!0),a(m,{modelValue:l(e).global.sort.show,"onUpdate:modelValue":o[8]||(o[8]=u=>l(e).global.sort.show=u),toggle:!0,label:"\u6392\u5E8F"},{default:t(()=>[a(d,{level:2,label:"\u6392\u5E8F"},{default:t(()=>[a(V,{modelValue:l(e).global.sort.sort,"onUpdate:modelValue":o[7]||(o[7]=u=>l(e).global.sort.sort=u),data:w},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,{modelValue:l(e).index.show,"onUpdate:modelValue":o[15]||(o[15]=u=>l(e).index.show=u),toggle:!0,label:"\u5E8F\u5217\u53F7"},{default:t(()=>[a(m,{label:"\u6587\u672C\u6837\u5F0F"},{default:t(()=>[a(d,{level:2,label:"\u5B57\u53F7"},{default:t(()=>[a(n,{modelValue:l(e).index.textarea.fontSize,"onUpdate:modelValue":o[9]||(o[9]=u=>l(e).index.textarea.fontSize=u),min:12,max:100,step:1},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).index.textarea.color,"onUpdate:modelValue":o[10]||(o[10]=u=>l(e).index.textarea.color=u)},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u5B57\u4F53\u7C97\u7EC6"},{default:t(()=>[a(V,{modelValue:l(e).index.textarea.fontWeight,"onUpdate:modelValue":o[11]||(o[11]=u=>l(e).index.textarea.fontWeight=u),data:l(x)},null,8,["modelValue","data"])]),_:1})]),_:1}),a(d,{level:2,label:"\u5BBD\u5EA6"},{default:t(()=>[a(g,{modelValue:l(e).index.width,"onUpdate:modelValue":o[12]||(o[12]=u=>l(e).index.width=u)},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u95F4\u9694"},{default:t(()=>[a(n,{modelValue:l(e).index.padding,"onUpdate:modelValue":o[13]||(o[13]=u=>l(e).index.padding=u),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u683C\u5F0F"},{default:t(()=>[a(V,{modelValue:l(e).index.format,"onUpdate:modelValue":o[14]||(o[14]=u=>l(e).index.format=u),data:k},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a(m,{label:"\u5185\u5BB9"},{default:t(()=>[a(m,{label:"\u6587\u672C\u6837\u5F0F"},{default:t(()=>[a(d,{level:2,label:"\u5B57\u53F7"},{default:t(()=>[a(n,{modelValue:l(e).content.textarea.fontSize,"onUpdate:modelValue":o[16]||(o[16]=u=>l(e).content.textarea.fontSize=u),min:12,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).content.textarea.color,"onUpdate:modelValue":o[17]||(o[17]=u=>l(e).content.textarea.color=u)},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u5B57\u4F53\u7C97\u7EC6"},{default:t(()=>[a(V,{modelValue:l(e).content.textarea.fontWeight,"onUpdate:modelValue":o[18]||(o[18]=u=>l(e).content.textarea.fontWeight=u),data:l(x)},null,8,["modelValue","data"])]),_:1})]),_:1}),a(m,{modelValue:l(e).content.marquee.show,"onUpdate:modelValue":o[20]||(o[20]=u=>l(e).content.marquee.show=u),toggle:!0,label:"\u8DD1\u9A6C\u706F"},{default:t(()=>[a(d,{level:2,label:"\u52A8\u753B\u65F6\u95F4"},{default:t(()=>[a(n,{modelValue:l(e).content.marquee.duration,"onUpdate:modelValue":o[19]||(o[19]=u=>l(e).content.marquee.duration=u),min:100,max:999999,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,{modelValue:l(e).number.show,"onUpdate:modelValue":o[32]||(o[32]=u=>l(e).number.show=u),toggle:!0,label:"\u6570\u503C"},{default:t(()=>[a(d,{level:2,label:"\u5B57\u53F7"},{default:t(()=>[a(n,{modelValue:l(e).number.fontSize,"onUpdate:modelValue":o[21]||(o[21]=u=>l(e).number.fontSize=u),min:12,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).number.color,"onUpdate:modelValue":o[22]||(o[22]=u=>l(e).number.color=u)},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u5B57\u4F53\u7C97\u7EC6"},{default:t(()=>[a(V,{modelValue:l(e).number.fontWeight,"onUpdate:modelValue":o[23]||(o[23]=u=>l(e).number.fontWeight=u),data:l(x)},null,8,["modelValue","data"])]),_:1}),a(d,{level:2,label:"\u95F4\u9694"},{default:t(()=>[a(n,{modelValue:l(e).number.padding,"onUpdate:modelValue":o[24]||(o[24]=u=>l(e).number.padding=u),min:0,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u663E\u793A\u767E\u5206\u6570"},{default:t(()=>[a(b,{value:l(e).number.percentage,"onUpdate:value":o[25]||(o[25]=u=>l(e).number.percentage=u)},null,8,["value"])]),_:1}),a(d,{level:2,label:"\u5343\u5206\u4F4D\u5206\u9694\u7B26"},{default:t(()=>[a(b,{value:l(e).number.separatingChart,"onUpdate:value":o[26]||(o[26]=u=>l(e).number.separatingChart=u)},null,8,["value"])]),_:1}),a(d,{level:2,label:"\u4FDD\u7559\u5C0F\u6570\u4F4D"},{default:t(()=>[a(n,{modelValue:l(e).number.decimal,"onUpdate:modelValue":o[27]||(o[27]=u=>l(e).number.decimal=u),min:0,max:100,step:1},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u524D\u540E\u7F00","is-flat":!0},{default:t(()=>[a(g,{modelValue:l(e).number.symbol.prefix,"onUpdate:modelValue":o[28]||(o[28]=u=>l(e).number.symbol.prefix=u),inline:"inline",label:"\u524D\u7F00"},null,8,["modelValue"]),a(g,{modelValue:l(e).number.symbol.suffix,"onUpdate:modelValue":o[29]||(o[29]=u=>l(e).number.symbol.suffix=u),inline:"inline",label:"\u540E\u7F00"},null,8,["modelValue"]),a(n,{modelValue:l(e).number.symbol.marginLeft,"onUpdate:modelValue":o[30]||(o[30]=u=>l(e).number.symbol.marginLeft=u),min:0,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u5DE6\u95F4\u8DDD"},null,8,["modelValue"]),a(n,{modelValue:l(e).number.symbol.marginRight,"onUpdate:modelValue":o[31]||(o[31]=u=>l(e).number.symbol.marginRight=u),min:0,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u53F3\u95F4\u8DDD"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a(m,{modelValue:l(e).bar.show,"onUpdate:modelValue":o[45]||(o[45]=u=>l(e).bar.show=u),toggle:!0,label:"\u67F1\u72B6\u56FE"},{default:t(()=>[a(d,{level:2,label:"\u586B\u5145\u7C7B\u578B"},{default:t(()=>[a(C,{value:l(e).bar.fillColorType,"onUpdate:value":o[33]||(o[33]=u=>l(e).bar.fillColorType=u),size:"small"},{default:t(()=>[(r(!0),F(E,null,B(l(U),u=>(r(),p(v,{key:u.id,value:u.id},{default:t(()=>[D(y(u.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(e).bar.fillColorType==="solid"?(r(),p(d,{key:0,level:2,label:"\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).bar.color,"onUpdate:modelValue":o[34]||(o[34]=u=>l(e).bar.color=u)},null,8,["modelValue"])]),_:1})):f("",!0),l(e).bar.fillColorType==="gradient"?(r(),p(d,{key:1,level:2,label:"\u5F00\u59CB\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).bar.fromColor,"onUpdate:modelValue":o[35]||(o[35]=u=>l(e).bar.fromColor=u)},null,8,["modelValue"])]),_:1})):f("",!0),l(e).bar.fillColorType==="gradient"?(r(),p(d,{key:2,level:2,label:"\u7ED3\u675F\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).bar.toColor,"onUpdate:modelValue":o[36]||(o[36]=u=>l(e).bar.toColor=u)},null,8,["modelValue"])]),_:1})):f("",!0),a(d,{level:2,label:"\u9AD8\u5EA6"},{default:t(()=>[a(n,{modelValue:l(e).bar.height,"onUpdate:modelValue":o[37]||(o[37]=u=>l(e).bar.height=u),min:1,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u5706\u89D2"},{default:t(()=>[a(n,{modelValue:l(e).bar.radius,"onUpdate:modelValue":o[38]||(o[38]=u=>l(e).bar.radius=u),min:0,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(m,{modelValue:l(e).bar.threshold.show,"onUpdate:modelValue":o[44]||(o[44]=u=>l(e).bar.threshold.show=u),toggle:!0,label:"\u9AD8\u4EAE"},{default:t(()=>[a(d,{level:2,label:"\u9608\u503C"},{default:t(()=>[a(n,{modelValue:l(e).bar.threshold.value,"onUpdate:modelValue":o[39]||(o[39]=u=>l(e).bar.threshold.value=u),step:1,suffix:"%"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u586B\u5145\u7C7B\u578B"},{default:t(()=>[a(C,{value:l(e).bar.threshold.fillColorType,"onUpdate:value":o[40]||(o[40]=u=>l(e).bar.threshold.fillColorType=u),size:"small"},{default:t(()=>[(r(!0),F(E,null,B(l(U),u=>(r(),p(v,{key:u.id,value:u.id},{default:t(()=>[D(y(u.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(e).bar.threshold.fillColorType==="solid"?(r(),p(d,{key:0,level:2,label:"\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).bar.threshold.color,"onUpdate:modelValue":o[41]||(o[41]=u=>l(e).bar.threshold.color=u)},null,8,["modelValue"])]),_:1})):f("",!0),l(e).bar.threshold.fillColorType==="gradient"?(r(),p(d,{key:1,level:2,label:"\u5F00\u59CB\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).bar.threshold.fromColor,"onUpdate:modelValue":o[42]||(o[42]=u=>l(e).bar.threshold.fromColor=u)},null,8,["modelValue"])]),_:1})):f("",!0),l(e).bar.threshold.fillColorType==="gradient"?(r(),p(d,{key:2,level:2,label:"\u7ED3\u675F\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).bar.threshold.toColor,"onUpdate:modelValue":o[43]||(o[43]=u=>l(e).bar.threshold.toColor=u)},null,8,["modelValue"])]),_:1})):f("",!0)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),a(m,{modelValue:l(e).light.show,"onUpdate:modelValue":o[50]||(o[50]=u=>l(e).light.show=u),toggle:!0,label:"\u6D41\u5149"},{default:t(()=>[a(d,{level:2,label:"\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).light.color,"onUpdate:modelValue":o[46]||(o[46]=u=>l(e).light.color=u)},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u5BBD\u5EA6"},{default:t(()=>[a(n,{modelValue:l(e).light.width,"onUpdate:modelValue":o[47]||(o[47]=u=>l(e).light.width=u),min:0,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u9AD8\u5EA6"},{default:t(()=>[a(n,{modelValue:l(e).light.height,"onUpdate:modelValue":o[48]||(o[48]=u=>l(e).light.height=u),min:0,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u52A8\u753B\u95F4\u9694"},{default:t(()=>[a(n,{modelValue:l(e).light.duration,"onUpdate:modelValue":o[49]||(o[49]=u=>l(e).light.duration=u),min:100,max:999999,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a(m,{modelValue:l(e).segment.show,"onUpdate:modelValue":o[53]||(o[53]=u=>l(e).segment.show=u),toggle:!0,label:"\u5206\u9694\u7EBF"},{default:t(()=>[a(d,{level:2,label:"\u989C\u8272"},{default:t(()=>[a(i,{modelValue:l(e).segment.color,"onUpdate:modelValue":o[51]||(o[51]=u=>l(e).segment.color=u)},null,8,["modelValue"])]),_:1}),a(d,{level:2,label:"\u9AD8\u5EA6"},{default:t(()=>[a(n,{modelValue:l(e).segment.height,"onUpdate:modelValue":o[52]||(o[52]=u=>l(e).segment.height=u),min:0,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])])}}});export{O as default};
