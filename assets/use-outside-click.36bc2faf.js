var I=Object.defineProperty;var i=(e,t)=>I(e,"name",{value:t,configurable:!0});import{n as P,K as y,f as L,a as S}from"./vue.esm-bundler.7d3de5e1.js";import{o as w,u as D}from"./use-resolve-button-type.6832d112.js";function O(e){throw new Error("Unexpected object: "+e)}i(O,"f");var g=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(g||{});function G(e,t){let r=t.resolveItems();if(r.length<=0)return null;let o=t.resolveActiveIndex(),s=o??-1,u=(()=>{switch(e.focus){case 0:return r.findIndex(n=>!t.resolveDisabled(n));case 1:{let n=r.slice().reverse().findIndex((l,d,c)=>s!==-1&&c.length-d-1>=s?!1:!t.resolveDisabled(l));return n===-1?n:r.length-1-n}case 2:return r.findIndex((n,l)=>l<=s?!1:!t.resolveDisabled(n));case 3:{let n=r.slice().reverse().findIndex(l=>!t.resolveDisabled(l));return n===-1?n:r.length-1-n}case 4:return r.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:O(e)}})();return u===-1?o:u}i(G,"x");const p=typeof window>"u"||typeof document>"u";function N(e){if(p)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=w(e);if(t)return t.ownerDocument}return document}i(N,"m$1");let h=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var A=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(A||{}),M=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(M||{}),T=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(T||{});function b(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(h))}i(b,"E");var E=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(E||{});function F(e,t=0){var r;return e===((r=N(e))==null?void 0:r.body)?!1:D(t,{[0](){return e.matches(h)},[1](){let o=e;for(;o!==null;){if(o.matches(h))return!0;o=o.parentElement}return!1}})}i(F,"h");function R(e){let t=N(e);P(()=>{t&&!F(t.activeElement,0)&&U(e)})}i(R,"D");function U(e){e==null||e.focus({preventScroll:!0})}i(U,"w");let _=["textarea","input"].join(",");function $(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,_))!=null?r:!1}i($,"S");function j(e,t=r=>r){return e.slice().sort((r,o)=>{let s=t(r),u=t(o);if(s===null||u===null)return 0;let n=s.compareDocumentPosition(u);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}i(j,"O");function q(e,t){return C(b(),t,!0,e)}i(q,"v$1");function C(e,t,r=!0,o=null){var s;let u=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,n=Array.isArray(e)?r?j(e):e:b(e);o=o??u.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,n.indexOf(o))-1;if(t&4)return Math.max(0,n.indexOf(o))+1;if(t&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},a=0,v=n.length,f;do{if(a>=v||a+v<=0)return 0;let m=d+a;if(t&16)m=(m+v)%v;else{if(m<0)return 3;if(m>=v)return 1}f=n[m],f==null||f.focus(c),a+=l}while(f!==u.activeElement);return t&6&&$(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}i(C,"P");function x(e,t,r){p||y(o=>{document.addEventListener(e,t,r),o(()=>document.removeEventListener(e,t,r))})}i(x,"v");function K(e,t,r=S(()=>!0)){function o(u,n){if(!r.value||u.defaultPrevented)return;let l=n(u);if(l===null||!l.getRootNode().contains(l))return;let d=i(function c(a){return typeof a=="function"?c(a()):Array.isArray(a)||a instanceof Set?a:[a]},"o")(e);for(let c of d){if(c===null)continue;let a=c instanceof HTMLElement?c:w(c);if(a!=null&&a.contains(l))return}return!F(l,E.Loose)&&l.tabIndex!==-1&&u.preventDefault(),t(u,l)}i(o,"a");let s=L(null);x("mousedown",u=>{var n,l;r.value&&(s.value=((l=(n=u.composedPath)==null?void 0:n.call(u))==null?void 0:l[0])||u.target)},!0),x("click",u=>{!s.value||(o(u,()=>s.value),s.value=null)},!0),x("blur",u=>o(u,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}i(K,"y");export{R as D,E as F,A as M,j as O,g as a,F as h,N as m,q as v,G as x,K as y};
//# sourceMappingURL=use-outside-click.36bc2faf.js.map
