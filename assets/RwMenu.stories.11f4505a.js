var x=Object.defineProperty;var r=(t,o)=>x(t,"name",{value:o,configurable:!0});import"./jsx-runtime.dba62b37.js";import{c as e,A as v,C as f,S as M,b as I,a as h,M as b}from"./Props.77d99c35.js";import"./iframe.70e4d47a.js";import d from"./RwMenu.dde84988.js";import w from"./RwMenuItem.43b410ee.js";import g from"./RwButton.d33a7df4.js";import{r as T,g as A,T as m,p as y}from"./getSourceCode.eb727001.js";import"./string.d08dc97e.js";import"./es.map.constructor.de7a6ab7.js";import"./es.number.to-fixed.15fdb26d.js";import"./vue.esm-bundler.7d3de5e1.js";import"./menu.ef82e24e.js";import"./use-resolve-button-type.6832d112.js";import"./use-outside-click.36bc2faf.js";import"./_plugin-vue_export-helper.cdc0426e.js";const s=r(t=>()=>({template:`<div style="min-height: ${t};"><story /></div>`}),"HeightDecorator");function c(){return c=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(t[p]=i[p])}return t},c.apply(this,arguments)}r(c,"_extends");const a=T({Component:d,slots:["activatorSlot","itemsSlot"],vModels:[],subcomponents:{RwMenuItem:w,RwButton:g}}),R=await A("RwMenu","DefaultCode"),C={Template:a,DEFAULT_CODE:R},E="wrapper";function S({components:t,...o}){return e(E,c({},C,o,{components:t,mdxType:"MDXLayout"}),e(b,{title:"RwMenu",component:d,subcomponents:{RwMenuItem:w},parameters:{docs:{iframeHeight:300}},argTypes:{activatorSlot:{control:"text",description:"Slot to render menu button text or component",table:{type:{summary:`({
          open: boolean,
          close: () => void
        }) => ${m.Slot}`},defaultValue:{summary:void 0}}},itemsSlot:{control:!1,description:"Slot to render menu content",table:{type:{summary:y({open:"boolean",close:"() => void"},m.Slot)},defaultValue:{summary:void 0}}}},mdxType:"Meta"}),e("h1",null,"RwMenu"),e("p",null,"With ",e("inlineCode",{parentName:"p"},"MDX"),", we can define a story for ",e("inlineCode",{parentName:"p"},"RwMenu"),` right in the middle of our
Markdown documentation.`),e(f,{withSource:"none",mdxType:"Canvas"},e(M,{name:"Default",decorators:[s("200px")],args:{activatorSlot:"Example menu",itemsSlot:`
        <RwMenuItem><a href="#">Example link 1</a></RwMenuItem>
        <RwMenuItem><a href="#">Example link 2</a></RwMenuItem>
        <RwMenuItem><a href="#">Example link 3</a></RwMenuItem>
      `},mdxType:"Story"},a.bind({}))),e(h,{language:"html",dark:!0,format:!1,code:R,mdxType:"Source"}),e(I,{story:"Default",mdxType:"ArgsTable"}),e(f,{withSource:"none",mdxType:"Canvas"},e(M,{name:"RwButtonAsActivator",decorators:[s("200px")],args:{activatorSlot:"<RwButton>Test</RwButton>",itemsSlot:`<RwMenuItem><a href=#>Example link 1</a></RwMenuItem>
        <RwMenuItem><a href=#>Example link 2</a></RwMenuItem>
        <RwMenuItem><a href=#>Example link 3</a></RwMenuItem>`},mdxType:"Story"},a.bind({}))))}r(S,"MDXContent");S.isMDXComponent=!0;const u=a.bind({});u.storyName="Default";u.args={activatorSlot:"Example menu",itemsSlot:`
        <RwMenuItem><a href="#">Example link 1</a></RwMenuItem>
        <RwMenuItem><a href="#">Example link 2</a></RwMenuItem>
        <RwMenuItem><a href="#">Example link 3</a></RwMenuItem>
      `};u.parameters={storySource:{source:`renderComponent({
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
        }) => ${m.Slot}`},defaultValue:{summary:void 0}}},itemsSlot:{control:!1,description:"Slot to render menu content",table:{type:{summary:y({open:"boolean",close:"() => void"},m.Slot)},defaultValue:{summary:void 0}}}},includeStories:["defaultStory","rwButtonAsActivator"]},D={Default:"defaultStory",RwButtonAsActivator:"rwButtonAsActivator"};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(v,{mdxStoryNameToKey:D,mdxComponentAnnotations:n},e(S,null))};const q=["Template","DEFAULT_CODE","defaultStory","rwButtonAsActivator"];export{R as DEFAULT_CODE,a as Template,q as __namedExportsOrder,n as default,u as defaultStory,l as rwButtonAsActivator};
//# sourceMappingURL=RwMenu.stories.11f4505a.js.map
