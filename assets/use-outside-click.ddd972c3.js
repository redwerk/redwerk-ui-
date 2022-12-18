var D=Object.defineProperty;var u=(e,t)=>D(e,"name",{value:t,configurable:!0});import{N as F,h as L,F as I,M as T,K as k,f as E,j as M,J as O,n as U,a as H}from"./vue.esm-bundler.442e6891.js";function y(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,y),r}u(y,"u");var C=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(C||{}),R=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(R||{});function ue({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var a;let l=W(r,n),i=Object.assign(o,{props:l});if(e||t&2&&l.static)return h(i);if(t&1){let c=(a=l.unmount)==null||a?0:1;return y(c,{[0](){return null},[1](){return h({...o,props:{...l,hidden:!0,style:{display:"none"}}})}})}return h(i)}u(ue,"P$1");function h({props:e,attrs:t,slots:n,slot:r,name:o}){var a;let{as:l,...i}=_(e,["unmount","static"]),c=(a=n.default)==null?void 0:a.call(n,r),d={};if(r){let s=!1,p=[];for(let[f,v]of Object.entries(r))typeof v=="boolean"&&(s=!0),v===!0&&p.push(f);s&&(d["data-headlessui-state"]=p.join(" "))}if(l==="template"){if(c=x(c??[]),Object.keys(i).length>0||Object.keys(t).length>0){let[s,...p]=c??[];if(!B(s)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(t)).sort((f,v)=>f.localeCompare(v)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return F(s,Object.assign({},i,d))}return Array.isArray(c)&&c.length===1?c[0]:c}return L(l,Object.assign({},i,d),{default:()=>c})}u(h,"p$1");function x(e){return e.flatMap(t=>t.type===I?x(t.children):[t])}u(x,"g");function W(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...a){let l=n[r];for(let i of l){if(o instanceof Event&&o.defaultPrevented)return;i(o,...a)}}});return t}u(W,"k");function ae(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}u(ae,"V");function _(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}u(_,"w$1");function B(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}u(B,"x$1");let G=0;function V(){return++G}u(V,"n$1");function ie(){return V()}u(ie,"t");var q=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(q||{});function J(e){throw new Error("Unexpected object: "+e)}u(J,"f");var K=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(K||{});function se(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=r??-1,a=(()=>{switch(e.focus){case 0:return n.findIndex(l=>!t.resolveDisabled(l));case 1:{let l=n.slice().reverse().findIndex((i,c,d)=>o!==-1&&d.length-c-1>=o?!1:!t.resolveDisabled(i));return l===-1?l:n.length-1-l}case 2:return n.findIndex((l,i)=>i<=o?!1:!t.resolveDisabled(l));case 3:{let l=n.slice().reverse().findIndex(i=>!t.resolveDisabled(i));return l===-1?l:n.length-1-l}case 4:return n.findIndex(l=>t.resolveId(l)===e.id);case 5:return null;default:J(e)}})();return a===-1?r:a}u(se,"x");function m(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}u(m,"o");let N=Symbol("Context");var Y=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Y||{});function ce(){return T(N,null)}u(ce,"p");function fe(e){k(N,e)}u(fe,"c");function g(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}u(g,"r");function de(e,t){let n=E(g(e.value.type,e.value.as));return M(()=>{n.value=g(e.value.type,e.value.as)}),O(()=>{var r;n.value||!m(t)||m(t)instanceof HTMLButtonElement&&!((r=m(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}u(de,"b$1");const j=typeof window>"u"||typeof document>"u";function P(e){if(j)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=m(e);if(t)return t.ownerDocument}return document}u(P,"m$1");let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var z=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(z||{}),Q=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Q||{}),X=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(X||{});function A(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w))}u(A,"E");var S=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(S||{});function $(e,t=0){var n;return e===((n=P(e))==null?void 0:n.body)?!1:y(t,{[0](){return e.matches(w)},[1](){let r=e;for(;r!==null;){if(r.matches(w))return!0;r=r.parentElement}return!1}})}u($,"h");function pe(e){let t=P(e);U(()=>{t&&!$(t.activeElement,0)&&Z(e)})}u(pe,"D");function Z(e){e==null||e.focus({preventScroll:!0})}u(Z,"w");let ee=["textarea","input"].join(",");function te(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ee))!=null?n:!1}u(te,"S");function ne(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}u(ne,"O");function ve(e,t){return re(A(),t,!0,e)}u(ve,"v$1");function re(e,t,n=!0,r=null){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,l=Array.isArray(e)?n?ne(e):e:A(e);r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},s=0,p=l.length,f;do{if(s>=p||s+p<=0)return 0;let v=c+s;if(t&16)v=(v+p)%p;else{if(v<0)return 3;if(v>=p)return 1}f=l[v],f==null||f.focus(d),s+=i}while(f!==a.activeElement);return t&6&&te(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}u(re,"P");function b(e,t,n){j||O(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}u(b,"v");function me(e,t,n=H(()=>!0)){function r(a,l){if(!n.value||a.defaultPrevented)return;let i=l(a);if(i===null||!i.getRootNode().contains(i))return;let c=u(function d(s){return typeof s=="function"?d(s()):Array.isArray(s)||s instanceof Set?s:[s]},"o")(e);for(let d of c){if(d===null)continue;let s=d instanceof HTMLElement?d:m(d);if(s!=null&&s.contains(i))return}return!$(i,S.Loose)&&i.tabIndex!==-1&&a.preventDefault(),t(a,i)}u(r,"a");let o=E(null);b("mousedown",a=>{var l,i;n.value&&(o.value=((i=(l=a.composedPath)==null?void 0:l.call(a))==null?void 0:i[0])||a.target)},!0),b("click",a=>{!o.value||(r(a,()=>o.value),o.value=null)},!0),b("blur",a=>r(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}u(me,"y");export{pe as D,S as F,z as M,ne as O,ue as P,C as R,ae as V,K as a,de as b,fe as c,q as d,$ as h,Y as l,P as m,m as o,ce as p,ie as t,y as u,ve as v,_ as w,se as x,me as y};
//# sourceMappingURL=use-outside-click.ddd972c3.js.map
