import{j as e}from"./jsx-runtime-CKrituN3.js";import{O as j,a as A,u as J,S as K,b as Q,c as U,d as W,e as X}from"./option-DVE4ZWu7.js";import{P as Y,a as Z}from"./popover-content-G8w2_ihC.js";import{P as $}from"./container-portal-Noj2PZgk.js";import{f as b}from"./forward-ref-DuAegr0M.js";import{a as ee}from"./use-component-style-DFx-AFMQ.js";import{o as se}from"./theme-provider-BXaPRWNI.js";import{x as re,u as i,c as y}from"./factory-BVMa8fXZ.js";const me=b((a,c)=>{const[t,p]=ee("Select",a);let{className:d,placeholder:s,defaultValue:m="",placeholderInOptions:r=!0,items:l=[],color:h,h:o,height:I,minH:g,minHeight:N,containerProps:O,listProps:H,iconProps:T,portalProps:w={isDisabled:!0},children:v,...D}=se(p);const S=re(v);let u=[];!S.length&&l.length&&(u=l.map((n,C)=>{if("value"in n){const{label:x,value:f,...P}=n;return e.jsx(j,{value:f,...P,children:x},C)}else if("items"in n){const{label:x,items:f=[],...P}=n;return e.jsx(A,{label:x??"",...P,children:f.map(({label:G,value:k,...q},z)=>e.jsx(j,{value:k,...q,children:G},z))},C)}}).filter(Boolean));const _=!S.length&&!u.length&&!(s&&r),{descendants:E,formControlProps:F,getPopoverProps:L,getContainerProps:M,getFieldProps:R,...V}=J({...D,placeholder:s,placeholderInOptions:r,defaultValue:m,isEmpty:_});o??(o=I),g??(g=N);const B={w:"100%",h:"fit-content",color:h,...t.container};return e.jsx(K,{value:E,children:e.jsx(Q,{value:{...V,placeholder:s,placeholderInOptions:r,styles:t},children:e.jsx(Y,{...L(),children:e.jsxs(i.div,{className:y("ui-select",d),__css:B,...M(O),children:[e.jsxs(i.div,{className:"ui-select__inner",__css:{position:"relative",...t.inner},children:[e.jsx(Z,{children:e.jsx(te,{h:o,minH:g,...R({},c)})}),e.jsx(U,{...T,...F})]}),_?null:e.jsx($,{...w,children:e.jsxs(W,{...H,children:[s&&r?e.jsx(j,{children:s}):null,v??u]})})]})})})})}),te=b(({className:a,isTruncated:c=!0,lineClamp:t,h:p,minH:d,...s},m)=>{const{label:r,placeholder:l,styles:h}=X(),o={pe:"2rem",h:p,minH:d,display:"flex",alignItems:"center",...h.field};return e.jsx(i.div,{ref:m,className:y("ui-select__field",a),__css:o,...s,children:e.jsx(i.span,{isTruncated:c,lineClamp:t,dangerouslySetInnerHTML:{__html:r??l??""}})})});export{me as S};