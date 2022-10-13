var B=Object.defineProperty;var a=(e,t)=>B(e,"name",{value:t,configurable:!0});import{r as o}from"./index.f8b2105c.js";import{$ as W,a as R}from"./index.module.e9f7fca8.js";import{r as F}from"./index.2d757aa4.js";import{j as b,F as k,a as q}from"./jsx-runtime.16d2391f.js";import{I as K,r as X}from"./IconBase.esm.6520d143.js";import{T as H}from"./Text.c425a84b.js";import"./iframe.fddb2be1.js";import"./clsx.m.256e9345.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}a(y,"_extends$1");function Z(e,t){const n=o.exports.createContext(t);function r(c){const{children:d,...l}=c,i=o.exports.useMemo(()=>l,Object.values(l));return o.exports.createElement(n.Provider,{value:i},d)}a(r,"Provider");function s(c){const d=o.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return a(s,"useContext"),r.displayName=e+"Provider",[r,s]}a(Z,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function G(e,t=[]){let n=[];function r(c,d){const l=o.exports.createContext(d),i=n.length;n=[...n,d];function u(f){const{scope:p,children:x,...$}=f,P=(p==null?void 0:p[e][i])||l,E=o.exports.useMemo(()=>$,Object.values($));return o.exports.createElement(P.Provider,{value:E},x)}a(u,"Provider");function h(f,p){const x=(p==null?void 0:p[e][i])||l,$=o.exports.useContext(x);if($)return $;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${c}\``)}return a(h,"useContext"),u.displayName=c+"Provider",[u,h]}a(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=a(()=>{const c=n.map(d=>o.exports.createContext(d));return a(function(l){const i=(l==null?void 0:l[e])||c;return o.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])},"useScope")},"createScope");return s.scopeName=e,[r,J(s,...t)]}a(G,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function J(...e){const t=e[0];if(e.length===1)return t;const n=a(()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return a(function(c){const d=r.reduce((l,{useScope:i,scopeName:u})=>{const f=i(c)[`__scope${u}`];return{...l,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}a(J,"$c512c27ab02ef895$var$composeContextScopes");function _(e,t,{checkForDefaultPrevented:n=!0}={}){return a(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}a(_,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function L(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}a(L,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function Q({prop:e,defaultProp:t,onChange:n=a(()=>{},"onChange")}){const[r,s]=Y({defaultProp:t,onChange:n}),c=e!==void 0,d=c?e:r,l=L(n),i=o.exports.useCallback(u=>{if(c){const f=typeof u=="function"?u(e):u;f!==e&&l(f)}else s(u)},[c,e,s,l]);return[d,i]}a(Q,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Y({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,s=o.exports.useRef(r),c=L(t);return o.exports.useEffect(()=>{s.current!==r&&(c(r),s.current=r)},[r,s,c]),n}a(Y,"$71cd76cc60e0454e$var$useUncontrolledState");function V(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}a(V,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const O=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function ee(e){const[t,n]=o.exports.useState(void 0);return O(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let d,l;if("borderBoxSize"in c){const i=c.borderBoxSize,u=Array.isArray(i)?i[0]:i;d=u.inlineSize,l=u.blockSize}else d=e.offsetWidth,l=e.offsetHeight;n({width:d,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}a(ee,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}a(A,"_extends");const te=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],I=te.reduce((e,t)=>{const n=o.exports.forwardRef((r,s)=>{const{asChild:c,...d}=r,l=c?W:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(l,A({},d,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ne="Label",[Oe,re]=Z(ne,{id:void 0,controlRef:{current:null}}),oe=a(e=>{const t=re("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function se(e,t){return o.exports.useReducer((n,r)=>{const s=t[n][r];return s!=null?s:n},e)}a(se,"$fe963b355347cc68$export$3e6543de14f8614f");const T=a(e=>{const{present:t,children:n}=e,r=ce(t),s=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),c=R(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");T.displayName="Presence";function ce(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),s=o.exports.useRef(e),c=o.exports.useRef("none"),d=e?"mounted":"unmounted",[l,i]=se(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const u=N(r.current);c.current=l==="mounted"?u:"none"},[l]),O(()=>{const u=r.current,h=s.current;if(h!==e){const p=c.current,x=N(u);e?i("MOUNT"):x==="none"||(u==null?void 0:u.display)==="none"?i("UNMOUNT"):i(h&&p!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,i]),O(()=>{if(t){const u=a(f=>{const x=N(r.current).includes(f.animationName);f.target===t&&x&&F.exports.flushSync(()=>i("ANIMATION_END"))},"handleAnimationEnd"),h=a(f=>{f.target===t&&(c.current=N(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.exports.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}a(ce,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}a(N,"$921a889cee6df7e8$var$getAnimationName");const j="Checkbox",[ae,Ae]=G(j),[ie,ue]=ae(j),de=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:s,checked:c,defaultChecked:d,required:l,disabled:i,value:u="on",onCheckedChange:h,...f}=e,[p,x]=o.exports.useState(null),$=R(t,m=>x(m)),P=oe(p),E=r||P,S=o.exports.useRef(!1),w=p?Boolean(p.closest("form")):!0,[g=!1,z]=Q({prop:c,defaultProp:d,onChange:h});return o.exports.createElement(ie,{scope:n,state:g,disabled:i},o.exports.createElement(I.button,y({type:"button",role:"checkbox","aria-checked":v(g)?"mixed":g,"aria-labelledby":E,"aria-required":l,"data-state":D(g),"data-disabled":i?"":void 0,disabled:i,value:u},f,{ref:$,onKeyDown:_(e.onKeyDown,m=>{m.key==="Enter"&&m.preventDefault()}),onClick:_(e.onClick,m=>{z(M=>v(M)?!0:!M),w&&(S.current=m.isPropagationStopped(),S.current||m.stopPropagation())})})),w&&o.exports.createElement(pe,{control:p,bubbles:!S.current,name:s,value:u,checked:g,required:l,disabled:i,style:{transform:"translateX(-100%)"}}))}),le="CheckboxIndicator",fe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=ue(le,n);return o.exports.createElement(T,{present:r||v(c.state)||c.state===!0},o.exports.createElement(I.span,y({"data-state":D(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),pe=a(e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=o.exports.useRef(null),d=V(n),l=ee(t);return o.exports.useEffect(()=>{const i=c.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(d!==n&&f){const p=new Event("click",{bubbles:r});i.indeterminate=v(n),f.call(i,v(n)?!1:n),i.dispatchEvent(p)}},[d,n,r]),o.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}a(v,"$e698a72e93240346$var$isIndeterminate");function D(e){return v(e)?"indeterminate":e?"checked":"unchecked"}a(D,"$e698a72e93240346$var$getState");const be=de,he=fe;var C=new Map;C.set("bold",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return b(k,{children:b("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var xe=a(function(t,n){return X(t,n,C)},"renderPath"),U=o.exports.forwardRef(function(e,t){return b(K,{...Object.assign({ref:t},e,{renderPath:xe})})});U.displayName="Check";const $e=U;function me(){return b(be,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:b(he,{asChild:!0,children:b($e,{weight:"bold",className:"w-5 h-5 text-cyan-500"})})})}a(me,"Checkbox");const we={title:"Components/Checkbox",component:me,args:{},argTypes:{},decorators:[e=>q("div",{className:"flex items-center gap-2",children:[e(),b(H,{size:"sm",children:"Lembrar de mim por 30 dias"})]})]},Me={},_e=["Default"];export{Me as Default,_e as __namedExportsOrder,we as default};
//# sourceMappingURL=Checkbox.stories.08d61ec9.js.map
