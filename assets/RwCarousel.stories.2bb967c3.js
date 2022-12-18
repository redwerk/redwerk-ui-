var f=Object.defineProperty;var l=(o,t)=>f(o,"name",{value:t,configurable:!0});import"./jsx-runtime.85deb164.js";import{c as e,A as y,C as S,S as C,M as b,a as g,b as v}from"./Props.6b2c5dc5.js";import"./iframe.45729d7c.js";import m from"./RwCarousel.016b91dd.js";import x from"./RwCarouselItem.d65dd68d.js";import{r as w,g as T,T as r}from"./getSourceCode.eb727001.js";import"./string.e4822254.js";import"./es.map.constructor.6e967136.js";import"./es.number.to-fixed.3d662d97.js";import"./vue.esm-bundler.442e6891.js";import"./index.50a3fc66.js";import"./index.10077dc5.js";function u(){return u=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o[s]=a[s])}return o},u.apply(this,arguments)}l(u,"_extends");const d=w({Component:m,slots:["default","prevButtonSlot","nextButtonSlot"],subcomponents:{RwCarouselItem:x}}),i=await T("RwCarousel","DefaultCode"),D={Template:d,DEFAULT_CODE:i},R="wrapper";function c({components:o,...t}){return e(R,u({},D,t,{components:o,mdxType:"MDXLayout"}),e(b,{title:"RwCarousel",component:m,argTypes:{default:{control:"text",description:"Slot to render items in the carousel",table:{type:{summary:r.String},defaultValue:{summary:void 0}}},prevButtonSlot:{control:!1,description:"Slot to render previous button",table:{type:{summary:r.Slot},defaultValue:{summary:void 0}}},nextButtonSlot:{control:!1,description:"Slot to render previous button",table:{type:{summary:r.Slot},defaultValue:{summary:void 0}}}},mdxType:"Meta"}),e("h1",null,"RwCarousel"),e("p",null,"With ",e("inlineCode",{parentName:"p"},"MDX"),", we can define a story for ",e("inlineCode",{parentName:"p"},"RwCarousel"),` right in the middle of our
Markdown documentation.`),e(S,{withSource:"none",mdxType:"Canvas"},e(C,{name:"Default",args:{default:`
    <RwCarouselItem v-for="n in 20" :key="n">
        <div class="colored_card"> <p>{{ n }} </p>
        </div>
    </RwCarouselItem>
`},mdxType:"Story"},d.bind({}))),e(g,{language:"html",dark:!0,format:!1,code:i,mdxType:"Source"}),e(v,{story:"Default",mdxType:"ArgsTable"}))}l(c,"MDXContent");c.isMDXComponent=!0;const p=d.bind({});p.storyName="Default";p.args={default:`
    <RwCarouselItem v-for="n in 20" :key="n">
        <div class="colored_card"> <p>{{ n }} </p>
        </div>
    </RwCarouselItem>
`};p.parameters={storySource:{source:`renderComponent({
  Component: RwCarousel,
  slots: ['default', 'prevButtonSlot', 'nextButtonSlot'],
  subcomponents: {
    RwCarouselItem
  }
})`}};const n={title:"RwCarousel",component:m,argTypes:{default:{control:"text",description:"Slot to render items in the carousel",table:{type:{summary:r.String},defaultValue:{summary:void 0}}},prevButtonSlot:{control:!1,description:"Slot to render previous button",table:{type:{summary:r.Slot},defaultValue:{summary:void 0}}},nextButtonSlot:{control:!1,description:"Slot to render previous button",table:{type:{summary:r.Slot},defaultValue:{summary:void 0}}}},includeStories:["defaultStory"]},h={Default:"defaultStory"};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(y,{mdxStoryNameToKey:h,mdxComponentAnnotations:n},e(c,null))};const F=["Template","DEFAULT_CODE","defaultStory"];export{i as DEFAULT_CODE,d as Template,F as __namedExportsOrder,n as default,p as defaultStory};
//# sourceMappingURL=RwCarousel.stories.2bb967c3.js.map
