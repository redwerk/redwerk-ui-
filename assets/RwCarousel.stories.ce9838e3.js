var f=Object.defineProperty;var l=(o,t)=>f(o,"name",{value:t,configurable:!0});import"./jsx-runtime.0c216db0.js";import{c as e,A as y,C as S,S as C,M as b,a as w,b as g}from"./Props.23da72a8.js";import"./iframe.090e5274.js";import m from"./RwCarousel.569cb0dc.js";import v from"./RwCarouselItem.1d6e4879.js";import{_ as x}from"./RwCarouselItemMock.5fb1bc2e.js";import{r as T,g as D,T as r}from"./getSourceCode.18361779.js";import"./string.3891776a.js";import"./es.map.constructor.8a80dbf8.js";import"./es.number.to-fixed.a437c013.js";import"./vue.esm-bundler.6cad9f43.js";import"./index.dc09eb7b.js";import"./index.b199dee7.js";function u(){return u=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o[s]=a[s])}return o},u.apply(this,arguments)}l(u,"_extends");const d=T({Component:m,slots:["default","prevButtonSlot","nextButtonSlot"],subcomponents:{RwCarouselItem:v,RwCarouselItemMock:x}}),i=await D("RwCarousel","DefaultCode"),R={Template:d,DEFAULT_CODE:i},_="wrapper";function c({components:o,...t}){return e(_,u({},R,t,{components:o,mdxType:"MDXLayout"}),e(b,{title:"RwCarousel",component:m,argTypes:{default:{control:"text",description:"Slot to render items in the carousel",table:{type:{summary:r.String},defaultValue:{summary:void 0}}},prevButtonSlot:{control:!1,description:"Slot to render previous button",table:{type:{summary:r.Slot},defaultValue:{summary:void 0}}},nextButtonSlot:{control:!1,description:"Slot to render previous button",table:{type:{summary:r.Slot},defaultValue:{summary:void 0}}}},mdxType:"Meta"}),e("h1",null,"RwCarousel"),e("p",null,"With ",e("inlineCode",{parentName:"p"},"MDX"),", we can define a story for ",e("inlineCode",{parentName:"p"},"RwCarousel"),` right in the middle of our
Markdown documentation.`),e(S,{withSource:"none",mdxType:"Canvas"},e(C,{name:"Default",args:{default:`
    <RwCarouselItem v-for="n in 20" :key="n">
        <div class="colored_card"> <p>{{ n }} </p>
        </div>
    </RwCarouselItem>
`},mdxType:"Story"},d.bind({}))),e(w,{language:"html",dark:!0,format:!1,code:i,mdxType:"Source"}),e(g,{story:"Default",mdxType:"ArgsTable"}))}l(c,"MDXContent");c.isMDXComponent=!0;const p=d.bind({});p.storyName="Default";p.args={default:`
    <RwCarouselItem v-for="n in 20" :key="n">
        <div class="colored_card"> <p>{{ n }} </p>
        </div>
    </RwCarouselItem>
`};p.parameters={storySource:{source:`renderComponent({
  Component: RwCarousel,
  slots: ['default', 'prevButtonSlot', 'nextButtonSlot'],
  subcomponents: {
    RwCarouselItem,
    RwCarouselItemMock
  }
})`}};const n={title:"RwCarousel",component:m,argTypes:{default:{control:"text",description:"Slot to render items in the carousel",table:{type:{summary:r.String},defaultValue:{summary:void 0}}},prevButtonSlot:{control:!1,description:"Slot to render previous button",table:{type:{summary:r.Slot},defaultValue:{summary:void 0}}},nextButtonSlot:{control:!1,description:"Slot to render previous button",table:{type:{summary:r.Slot},defaultValue:{summary:void 0}}}},includeStories:["defaultStory"]},M={Default:"defaultStory"};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(y,{mdxStoryNameToKey:M,mdxComponentAnnotations:n},e(c,null))};const P=["Template","DEFAULT_CODE","defaultStory"];export{i as DEFAULT_CODE,d as Template,P as __namedExportsOrder,n as default,p as defaultStory};
//# sourceMappingURL=RwCarousel.stories.ce9838e3.js.map
