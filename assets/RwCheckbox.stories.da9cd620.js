var M=Object.defineProperty;var d=(o,t)=>M(o,"name",{value:t,configurable:!0});import"./jsx-runtime.9c63eb1f.js";import{c as a,A as D,C as R,S as N,M as A,a as E,b as O}from"./Props.5b72d25a.js";import"./iframe.5a9a2094.js";import{o as b,a as y,r as i,d as k,w as $,v as B,u,b as C,i as V,e as _,f as L,n as I,g as X}from"./vue.esm-bundler.d0d48e14.js";import{u as S}from"./index.14bab656.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as U,g as j,T as n}from"./getSourceCode.7f7040d0.js";import"./string.8df7f2e5.js";import"./es.map.constructor.02c257b7.js";import"./es.number.to-fixed.b24e2ff8.js";const w={},F={class:"rw-checkbox__text"};function K(o,t){return b(),y("span",F,[i(o.$slots,"default")])}d(K,"_sfc_render");const q=P(w,[["render",K]]);w.__docgenInfo={displayName:"RwCheckboxLabel",description:"",tags:{},slots:[{name:"default"}]};const z=["checked"],W=C("span",{class:"rw-checkbox__checkmark"},null,-1),g=k({__name:"RwCheckboxInput",emits:["update:modelValue"],setup(o,{emit:t}){const e=S(o,"modelValue",t);return(m,s)=>(b(),y("span",null,[$(C("input",{"onUpdate:modelValue":s[0]||(s[0]=p=>V(e)?e.value=p:null),checked:u(e),class:"rw-checkbox__input",type:"checkbox"},null,8,z),[[B,u(e)]]),W]))}});g.__docgenInfo={exportName:"default",displayName:"RwCheckboxInput",description:"",tags:{},events:[{name:"update:modelValue",type:{names:["boolean"]}}]};const G={class:"rw-checkbox"},c=k({__name:"RwCheckbox",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:t}){const e=S(o,"modelValue",t);return(m,s)=>(b(),y("label",G,[i(m.$slots,"contentSlot",I(X({modelValue:u(e)})),()=>[_(g,{modelValue:u(e),"onUpdate:modelValue":s[0]||(s[0]=p=>V(e)?e.value=p:null)},null,8,["modelValue"]),_(q,null,{default:L(()=>[i(m.$slots,"default")]),_:3})])]))}});c.__docgenInfo={exportName:"default",displayName:"RwCheckbox",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"contentSlot",scoped:!0,bindings:[{name:"modelValue",title:"binding"}]},{name:"default"}]};function f(){return f=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&(o[e]=l[e])}return o},f.apply(this,arguments)}d(f,"_extends");const x=U({Component:c,slots:["default","contentSlot"],vModels:["modelValue"]}),v=await j("RwCheckbox","DefaultCode"),H={Template:x,DEFAULT_CODE:v},J="wrapper";function T({components:o,...t}){return a(J,f({},H,t,{components:o,mdxType:"MDXLayout"}),a(A,{title:"RwCheckbox",component:c,argTypes:{contentSlot:{control:!1,description:"Slot to replace all checkbox content. Allows you to build your own checkbox",table:{type:{summary:n.Slot},defaultValue:{summary:void 0}}},default:{control:"text",description:"Slot to render checkbox label",table:{type:{summary:n.Slot},defaultValue:{summary:void 0}}},modelValue:{control:"boolean",description:"Value of checkbox",table:{type:{summary:n.Boolean}}},"update:modelValue":{control:!1,description:"Model value update event",table:{type:{summary:"(value: boolean) => void"}}}},mdxType:"Meta"}),a("h1",null,"RwCheckbox"),a("p",null,"With ",a("inlineCode",{parentName:"p"},"MDX"),", we can define a story for ",a("inlineCode",{parentName:"p"},"RwCheckbox"),` right in the middle of our
Markdown documentation.`),a(R,{withSource:"none",mdxType:"Canvas"},a(N,{name:"Default",args:{default:"Checkbox",modelValue:!1},mdxType:"Story"},x.bind({}))),a(E,{language:"html",dark:!0,format:!1,code:v,mdxType:"Source"}),a(O,{story:"Default",mdxType:"ArgsTable"}))}d(T,"MDXContent");T.isMDXComponent=!0;const h=x.bind({});h.storyName="Default";h.args={default:"Checkbox",modelValue:!1};h.parameters={storySource:{source:`renderComponent({
  Component: RwCheckbox,
  slots: ['default', 'contentSlot'],
  vModels: ['modelValue']
})`}};const r={title:"RwCheckbox",component:c,argTypes:{contentSlot:{control:!1,description:"Slot to replace all checkbox content. Allows you to build your own checkbox",table:{type:{summary:n.Slot},defaultValue:{summary:void 0}}},default:{control:"text",description:"Slot to render checkbox label",table:{type:{summary:n.Slot},defaultValue:{summary:void 0}}},modelValue:{control:"boolean",description:"Value of checkbox",table:{type:{summary:n.Boolean}}},"update:modelValue":{control:!1,description:"Model value update event",table:{type:{summary:"(value: boolean) => void"}}}},includeStories:["defaultStory"]},Q={Default:"defaultStory"};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>a(D,{mdxStoryNameToKey:Q,mdxComponentAnnotations:r},a(T,null))};const ue=["Template","DEFAULT_CODE","defaultStory"];export{v as DEFAULT_CODE,x as Template,ue as __namedExportsOrder,r as default,h as defaultStory};
//# sourceMappingURL=RwCheckbox.stories.da9cd620.js.map
