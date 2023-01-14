import{c as s,a as p,g as n,u as _,_ as t,b as m,i as c,N as l,G as E,D as d,d as h,A as v}from"./App.c8de2d3d.js";const A=[{path:"/",name:"Home",redirect:"/project",component:()=>t(()=>import("./index.e5a2e6f5.js"),["assets/index.e5a2e6f5.js","assets/App.c8de2d3d.js","assets/App.4717e360.css","assets/arrow-down.2f9c9a99.js","assets/document.8e3f3044.js","assets/tutorial.382dd6f9.js","assets/my-com.b964c829.js","assets/my-data.d050ba15.js","assets/layer.f891f2b6.js","assets/index.1819be48.css"]),children:[{path:"project",name:"MyProject",component:()=>t(()=>import("./index.a00cf7c2.js"),["assets/index.a00cf7c2.js","assets/App.c8de2d3d.js","assets/App.4717e360.css","assets/project.14f90fe3.js","assets/templates.1a41ce2a.js","assets/dom.59566496.js","assets/warning.feae0676.js","assets/plus.a9d8f7d9.js","assets/edit.4ad17d44.js","assets/delete.bcfacf57.js","assets/arrow-down.2f9c9a99.js","assets/search.ec21aede.js","assets/copy.3a9ecbda.js","assets/publish-screen.671ed07b.js","assets/publish-screen.075bc684.css","assets/release.077b5d20.js","assets/sortBy.32cf4535.js","assets/index.4728d400.css"]),meta:{title:"\u6211\u7684\u53EF\u89C6\u5316"}},{path:"data",name:"MyData",component:()=>t(()=>import("./index.936ece0e.js"),["assets/index.936ece0e.js","assets/my-data.d050ba15.js","assets/App.c8de2d3d.js","assets/App.4717e360.css"]),meta:{title:"\u6211\u7684\u6570\u636E"}},{path:"com",name:"MyCom",component:()=>t(()=>import("./index.a9f4d03d.js"),["assets/index.a9f4d03d.js","assets/my-com.b964c829.js","assets/App.c8de2d3d.js","assets/App.4717e360.css"]),meta:{title:"\u6211\u7684\u7EC4\u4EF6"}},{path:"case",name:"MyCase",component:()=>t(()=>import("./index.bca8bf89.js"),["assets/index.bca8bf89.js","assets/tutorial.382dd6f9.js","assets/App.c8de2d3d.js","assets/App.4717e360.css"]),meta:{title:"\u6559\u7A0B"}}]}],I=[{path:"/login",name:"Login",component:()=>t(()=>import("./index.0430b1aa.js"),["assets/index.0430b1aa.js","assets/App.c8de2d3d.js","assets/App.4717e360.css","assets/index.8696754d.css"]),meta:{title:"\u767B\u5F55"}},...A,{path:"/create-screen",name:"CreateScreen",component:()=>t(()=>import("./create-screen.2d70819f.js"),["assets/create-screen.2d70819f.js","assets/App.c8de2d3d.js","assets/App.4717e360.css","assets/project.14f90fe3.js","assets/templates.1a41ce2a.js","assets/arrow-left.9afce2be.js","assets/arrow-right.d715366d.js","assets/plus.a9d8f7d9.js","assets/back.866f357a.js","assets/create-screen.27d3efec.css"]),meta:{title:"\u521B\u5EFA"}},{path:"/admin/screen/:projectId",name:"ScreenEditor",props:!0,component:()=>t(()=>import("./index.931d7417.js").then(e=>e.i),["assets/index.931d7417.js","assets/App.c8de2d3d.js","assets/App.4717e360.css","assets/templates.1a41ce2a.js","assets/index.b90a9a8a.css"]),meta:{title:"\u7F16\u8F91\u5668"}},{path:"/screen/preview/:screenId",name:"Preview",props:!0,component:()=>t(()=>import("./index.f8f183ea.js"),["assets/index.f8f183ea.js","assets/App.c8de2d3d.js","assets/App.4717e360.css","assets/dom.59566496.js","assets/screen.58e1484a.js","assets/index.b4972611.css"])},{path:"/:catchAll(.*)*",name:"NotFound",component:()=>t(()=>import("./index.c416ba00.js"),["assets/index.c416ba00.js","assets/App.c8de2d3d.js","assets/App.4717e360.css","assets/index.9fbc8cb5.css"]),meta:{title:"\u627E\u4E0D\u5230\u9875\u9762"}}],u=s({history:p(),routes:I}),D=["/login","/auth-redirect","/dev"];u.beforeEach(async(e,P,o)=>{e.meta&&e.meta.title?document.title=`${e.meta.title} | ${n.title}`:document.title=n.title;const r=_();if(r.isLogin())if(e.path==="/login")o({path:"/"});else if(r.role>0)o();else try{await r.getUserInfo(),o({...e,replace:!0})}catch{r.resetToken(),o(`/login?redirect=${e.path}`)}else D.some(i=>e.path.startsWith(i))?o():o(`/login?redirect=${e.path}`)});const a=m(v);a.use(c);a.use(l);a.use(E);a.use(d);a.use(h());a.use(u);a.mount("#app");
