var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{d as i,f as c,D as d,O as w,I as f,S as p,o as u,b as m,w as _,r as v,v as T,u as S}from"./vue.esm-bundler.598ec8ba.js";import g from"./RwButton.e9a7f46c.js";import{R as h}from"./index.4d3ec0ac.js";import"./iframe.454abcfa.js";const R=i({__name:"RwScrollToTop",setup(t){const o=c(!1);function s(){const e=window.innerHeight;o.value=window.scrollY>=e}n(s,"onUserScroll");function l(){typeof window<"u"&&window.scrollTo(0,0)}return n(l,"scrollToTop"),d(()=>{window.document.addEventListener("scroll",s)}),w(()=>{window.document.removeEventListener("scroll",s)}),(e,r)=>f((u(),m(g,{class:"rw-scroll-to-top",onClick:r[0]||(r[0]=x=>l())},{default:_(()=>[v(e.$slots,"default",{},()=>[T(S(h),{name:"mdi:arrow-up"})])]),_:3},512)),[[p,o.value]])}});R.__docgenInfo={exportName:"default",displayName:"RwScrollToTop",description:"",tags:{},slots:[{name:"default"}]};export{R as default};
//# sourceMappingURL=RwScrollToTop.abab6a6b.js.map
