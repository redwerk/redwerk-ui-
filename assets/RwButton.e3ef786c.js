import{d as r,a as f,o as d,b as s,w as i,r as l,e as m,u as c}from"./vue.esm-bundler.702460a2.js";const g=r({__name:"RwButton",props:{loading:{type:Boolean},type:{default:"button"},href:{default:void 0},to:{default:void 0},target:{default:void 0},rel:{default:void 0},tag:{default:void 0}},emits:["click"],setup(e,{emit:u}){const t=e,o=f(()=>t.tag?t.tag:t.href?"a":t.to?"router-link":"button");return(a,n)=>(d(),s(m(c(o)),{class:"rw-button",type:e.type,onClick:n[0]||(n[0]=p=>u("click")),href:e.href,to:e.to,target:e.target},{default:i(()=>[a.$slots.loadingSlot&&e.loading?l(a.$slots,"loadingSlot",{key:0}):l(a.$slots,"default",{key:1})]),_:3},8,["type","href","to","target"]))}});g.__docgenInfo={exportName:"default",displayName:"RwButton",description:"",tags:{},props:[{name:"loading",required:!1,type:{name:"boolean"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"submit"'}]},defaultValue:{func:!1,value:"'button'"}},{name:"href",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"target",required:!1,type:{name:"union",elements:[{name:'"_self"'},{name:'"_blank"'},{name:'"_parent"'},{name:'"_top"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"rel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click"}],slots:[{name:"loadingSlot"},{name:"default"}]};export{g as default};
//# sourceMappingURL=RwButton.e3ef786c.js.map