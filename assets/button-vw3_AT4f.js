import{j as e,a as I,F as z}from"./jsx-runtime-TtYKBvr-.js";import{r as c}from"./index-IybTgENJ.js";import{c as D,u as p,a as m,I as _,W as H,m as U}from"./factory-yYnGGCem.js";import{f as T}from"./forward-ref-6T0UNPU-.js";import{u as W,R as $}from"./use-ripple-oUvMmrsO.js";import{L as S}from"./loading-JdMW4dxy.js";import{a as q}from"./use-component-style-5-ma296Y.js";import{o as J}from"./theme-provider-Wsw433nP.js";const[K,Q]=D({strict:!1,name:"ButtonGroupContext"}),rt=T(({className:o,size:t,variant:n,direction:s,isAttached:r,isDisabled:i,gap:f,columnGap:d,rowGap:g,...a},b)=>{const l=s==="column"||s==="column-reverse",u={display:"inline-flex",flexDirection:s},y=c.useMemo(()=>({size:t,variant:n,isDisabled:i}),[t,n,i]);return r?Object.assign(u,{"> *:first-of-type:not(:last-of-type)":l?{borderBottomRadius:0,marginBlockEnd:"-1px"}:{borderRightRadius:0,marginInlineEnd:"-1px"},"> *:not(:first-of-type):not(:last-of-type)":l?{borderRadius:0,marginBlockStart:"-1px"}:{borderRadius:0,marginInlineEnd:"-1px"},"> *:not(:first-of-type):last-of-type":l?{borderTopRadius:0,marginBlockStart:"-1px"}:{borderLeftRadius:0}}):Object.assign(u,{gap:f,columnGap:d,rowGap:g}),e(K,{value:y,children:e(p.div,{ref:b,role:"group",className:m("ui-button-group",o),"data-attached":_(r),__css:u,...a})})}),at=T(({children:o,...t},n)=>{const s=Q(),[r,i]=q("Button",{...s,...t}),{className:f,as:d,type:g,isLoading:a,isActive:b,isDisabled:l=s==null?void 0:s.isDisabled,leftIcon:u,rightIcon:y,loadingIcon:k,loadingText:x,loadingPlacement:h="start",disableRipple:w,__css:B,...R}=J(i),{ref:L,type:M}=V(d),E=H(n,L),{onPointerDown:G,...O}=W(R),A=c.useMemo(()=>{const F="_focus"in r?U(r._focus??{},{zIndex:"yamcha"}):{};return{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"2",appearance:"none",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",overflow:"hidden",outline:"none",...r,...B,...s?{_focus:F}:{}}},[r,B,s]),v={leftIcon:u,rightIcon:y,children:o},N={loadingIcon:k,loadingText:x};return I(p.button,{ref:E,as:d,className:m("ui-button",f),type:g??M,disabled:l||a,"data-active":_(b),data__loading:_(a),__css:A,...R,onPointerDown:G,children:[a&&h==="start"?e(P,{className:"ui-button__loading--start",...N}):null,a?x||e(p.span,{opacity:0,children:e(C,{...v})}):e(C,{...v}),a&&h==="end"?e(P,{className:"ui-button__loading--end",...N}):null,e($,{isDisabled:w||l||a,...O})]})}),P=({className:o,loadingIcon:t,loadingText:n})=>{const s=c.useMemo(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",fontSize:"1em",lineHeight:"normal"}),[n]),r=c.useMemo(()=>typeof t=="string"?e(S,{color:"current",variant:t}):t||e(S,{color:"current"}),[t]);return e(p.div,{className:m("ui-button__loading",o),__css:s,children:r})},C=({leftIcon:o,rightIcon:t,children:n})=>I(z,{children:[o?e(j,{children:o}):null,n,t?e(j,{children:t}):null]}),j=({children:o,className:t,...n})=>e(p.span,{className:m("ui-button__icon",t),display:"inline-flex",alignSelf:"center",flexShrink:0,"aria-hidden":!0,...n,children:o}),V=o=>{const[t,n]=c.useState(!o);return{ref:c.useCallback(i=>{i&&n(i.tagName==="BUTTON")},[]),type:t?"button":void 0}};export{at as B,rt as a};