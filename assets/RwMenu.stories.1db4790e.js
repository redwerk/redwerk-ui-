var x=Object.defineProperty;var r=(e,o)=>x(e,"name",{value:o,configurable:!0});import"./jsx-runtime.0c216db0.js";import{c as t,A as v,C as f,S as y,b as I,a as h,M as b}from"./Props.23da72a8.js";import"./iframe.090e5274.js";import d from"./RwMenu.ae9ab7a7.js";import w from"./RwMenuItem.f99250e0.js";import g from"./RwButton.77b04b2c.js";import{r as T,g as A,T as m,p as R}from"./getSourceCode.18361779.js";import"./string.3891776a.js";import"./es.map.constructor.8a80dbf8.js";import"./es.number.to-fixed.a437c013.js";import"./vue.esm-bundler.6cad9f43.js";import"./menu.cab5eef6.js";import"./use-resolve-button-type.1a2e5f2b.js";import"./use-outside-click.5c175611.js";const s=r(e=>()=>({template:`<div style="min-height: ${e};"><story /></div>`}),"HeightDecorator");function c(){return c=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(e[p]=i[p])}return e},c.apply(this,arguments)}r(c,"_extends");const a=T({Component:d,slots:["activatorSlot","itemsSlot"],vModels:[],subcomponents:{RwMenuItem:w,RwButton:g}}),M=await A("RwMenu","DefaultCode"),C={Template:a,DEFAULT_CODE:M},E="wrapper";function S({components:e,...o}){return t(E,c({},C,o,{components:e,mdxType:"MDXLayout"}),t(b,{title:"RwMenu",component:d,subcomponents:{RwMenuItem:w},parameters:{docs:{iframeHeight:300}},argTypes:{activatorSlot:{control:"text",description:"Slot to render menu button text or component",table:{type:{summary:`({
          open: boolean,
          close: () => void
        }) => ${m.Slot}`},defaultValue:{summary:void 0}}},itemsSlot:{control:!1,description:"Slot to render menu content",table:{type:{summary:R({open:"boolean",close:"() => void"},m.Slot)},defaultValue:{summary:void 0}}}},mdxType:"Meta"}),t("h1",null,"RwMenu"),t("p",null,"With ",t("inlineCode",{parentName:"p"},"MDX"),", we can define a story for ",t("inlineCode",{parentName:"p"},"RwMenu"),` right in the middle of our
Markdown documentation.`),t(f,{withSource:"none",mdxType:"Canvas"},t(y,{name:"Default",decorators:[s("200px")],args:{activatorSlot:'<RwButton class="primary">Example menu</RwButton>',itemsSlot:`
        <RwMenuItem><a href="#">Example link 1</a></RwMenuItem>
        <RwMenuItem><a href="#">Example link 2</a></RwMenuItem>
        <RwMenuItem><a href="#">Example link 3</a></RwMenuItem>
      `,class:"primary"},mdxType:"Story"},a.bind({}))),t(h,{language:"html",dark:!0,format:!1,code:M,mdxType:"Source"}),t(I,{story:"Default",mdxType:"ArgsTable"}),t(f,{withSource:"none",mdxType:"Canvas"},t(y,{name:"RwButtonAsActivator",decorators:[s("200px")],args:{activatorSlot:"<RwButton>Test</RwButton>",itemsSlot:`<RwMenuItem><a href=#>Example link 1</a></RwMenuItem>
        <RwMenuItem><a href=#>Example link 2</a></RwMenuItem>
        <RwMenuItem><a href=#>Example link 3</a></RwMenuItem>`},mdxType:"Story"},a.bind({}))))}r(S,"MDXContent");S.isMDXComponent=!0;const u=a.bind({});u.storyName="Default";u.args={activatorSlot:'<RwButton class="primary">Example menu</RwButton>',itemsSlot:`
        <RwMenuItem><a href="#">Example link 1</a></RwMenuItem>
        <RwMenuItem><a href="#">Example link 2</a></RwMenuItem>
        <RwMenuItem><a href="#">Example link 3</a></RwMenuItem>
      `,class:"primary"};u.parameters={storySource:{source:`renderComponent({
  Component: RwMenu,
  slots: ['activatorSlot', 'itemsSlot'],
  vModels: [],
  subcomponents: {
    RwMenuItem,
    RwButton
  }
})`}};u.decorators=[s("200px")];const l=a.bind({});l.storyName="RwButtonAsActivator";l.args={activatorSlot:"<RwButton>Test</RwButton>",itemsSlot:`<RwMenuItem><a href=#>Example link 1</a></RwMenuItem>
        <RwMenuItem><a href=#>Example link 2</a></RwMenuItem>
        <RwMenuItem><a href=#>Example link 3</a></RwMenuItem>`};l.parameters={storySource:{source:`renderComponent({
  Component: RwMenu,
  slots: ['activatorSlot', 'itemsSlot'],
  vModels: [],
  subcomponents: {
    RwMenuItem,
    RwButton
  }
})`}};l.decorators=[s("200px")];const n={title:"RwMenu",parameters:{docs:{iframeHeight:300}},component:d,subcomponents:{RwMenuItem:w},argTypes:{activatorSlot:{control:"text",description:"Slot to render menu button text or component",table:{type:{summary:`({
          open: boolean,
          close: () => void
        }) => ${m.Slot}`},defaultValue:{summary:void 0}}},itemsSlot:{control:!1,description:"Slot to render menu content",table:{type:{summary:R({open:"boolean",close:"() => void"},m.Slot)},defaultValue:{summary:void 0}}}},includeStories:["defaultStory","rwButtonAsActivator"]},B={Default:"defaultStory",RwButtonAsActivator:"rwButtonAsActivator"};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>t(v,{mdxStoryNameToKey:B,mdxComponentAnnotations:n},t(S,null))};const W=["Template","DEFAULT_CODE","defaultStory","rwButtonAsActivator"];export{M as DEFAULT_CODE,a as Template,W as __namedExportsOrder,n as default,u as defaultStory,l as rwButtonAsActivator};
//# sourceMappingURL=RwMenu.stories.1db4790e.js.map
