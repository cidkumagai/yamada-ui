import{a as w,j as Ie}from"./jsx-runtime-b08f8875.js";import{r as s}from"./index-8ee6c85d.js";import{t as Ee,a as Ne,c as Re}from"./number-cdadea8f.js";import{b as O,t as S,B as Me,f as Te,D as Y,A as Oe,x as $,s as Ve,k as Fe,d as W,e as V}from"./factory-2d442159.js";import{a as Le}from"./index-98029261.js";import{u as je}from"./index-5e97e8a5.js";import{u as Ke,f as J}from"./form-control-cf335ace.js";import{c as Pe}from"./icon-a76117e5.js";import{f as F}from"./forward-ref-cf7188bd.js";import{a as Ue}from"./use-component-style-b6002d28.js";import{o as Be}from"./theme-provider-78d359c6.js";const Ge=({min:t=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER,keepWithinRange:a=!0,...n}={})=>{const l=O(n.onChange),[c,d]=s.useState(()=>n.defaultValue==null?"":Q(n.defaultValue,n.step??1,n.precision)??""),f=typeof n.value<"u",u=f?n.value:c,E=ve(_(u),n.step??1),g=n.precision??E,C=s.useCallback(p=>{p!==u&&(f||d(p.toString()),l(p.toString(),_(p)))},[l,f,u]),b=s.useCallback(p=>{let m=p;return a&&(m=Re(m,t,r)),Ee(m,g)},[g,a,r,t]),I=s.useCallback((p=n.step??1)=>{let m;u===""?m=_(p):m=_(u)+p,m=b(m),C(m)},[b,n.step,C,u]),M=s.useCallback((p=n.step??1)=>{let m;u===""?m=_(-p):m=_(u)-p,m=b(m),C(m)},[b,n.step,C,u]),A=s.useCallback(()=>{let p;c==null?p="":p=Q(c,n.step??1,n.precision)??t,C(p)},[c,n.precision,n.step,C,t]),o=s.useCallback(p=>{const m=Q(p,n.step??1,g)??t;C(m)},[g,n.step,C,t]),k=_(u);return{isOut:k<t||r<k,isMax:k===r,isMin:k===t,precision:g,value:u,valueAsNumber:k,update:C,reset:A,increment:I,decrement:M,clamp:b,cast:o,setValue:d}},_=t=>parseFloat(t.toString().replace(/[^\w.-]+/g,"")),ve=(t,r)=>Math.max(Ne(r),Ne(t)),Q=(t,r,a)=>(t=_(t),Number.isNaN(t)?void 0:Ee(t,a??ve(t,r))),qe=t=>/^[Ee0-9+\-.]$/.test(t),ze=({key:t,ctrlKey:r,altKey:a,metaKey:n},l)=>{if(t==null)return!0;const c=r||a||n;return!(t.length===1)||c?!0:l(t)},he=({ctrlKey:t,shiftKey:r,metaKey:a})=>{let n=1;return(a||t)&&(n=.1),r&&(n=10),n},We=(t={})=>{const{id:r,name:a,inputMode:n="decimal",pattern:l="[0-9]*(.[0-9]+)?",required:c,disabled:d,readOnly:f,focusInputOnChange:u=!0,clampValueOnBlur:E=!0,keepWithinRange:g=!0,allowMouseWheel:C,min:b=Number.MIN_SAFE_INTEGER,max:I=Number.MAX_SAFE_INTEGER,precision:M,"aria-invalid":A,...o}=Ke(t),k=c,Z=f,ee=d,[te,p]=s.useState(!1),m=!(f||d),P=s.useRef(null),L=s.useRef(null),ne=s.useRef(null),se=s.useRef(null),re=O(S(o.onFocus,e=>{var i;p(!0),L.current&&(e.target.selectionStart=L.current.start??((i=e.currentTarget.value)==null?void 0:i.length),e.currentTarget.selectionEnd=L.current.end??e.currentTarget.selectionStart)})),oe=O(S(o.onBlur,()=>{p(!1),E&&_e()})),x=O(o.onInvalid),j=O(o.isValidCharacter??qe),{isMin:ae,isMax:ce,isOut:ue,value:N,valueAsNumber:D,setValue:X,update:T,cast:ie,...K}=Ge({min:b,max:I,precision:M,keepWithinRange:g,...o}),U=s.useCallback(e=>e.split("").filter(j).join(""),[j]),B=s.useCallback(e=>{var i;return((i=o.parse)==null?void 0:i.call(o,e))??e},[o]),R=s.useCallback(e=>{var i;return(((i=o.format)==null?void 0:i.call(o,e))??e).toString()},[o]),G=s.useCallback((e=o.step??1)=>{m&&K.increment(e)},[m,K,o.step]),q=s.useCallback((e=o.step??1)=>{m&&K.decrement(e)},[m,K,o.step]),_e=s.useCallback(()=>{let e=N;if(N==="")return;/^[eE]/.test(N.toString())?X(""):(D<b&&(e=b),D>I&&(e=I),ie(e))},[ie,I,b,X,N,D]),le=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;const i=B(e.currentTarget.value);T(U(i)),L.current={start:e.currentTarget.selectionStart,end:e.currentTarget.selectionEnd}},[B,T,U]),fe=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;ze(e,j)||e.preventDefault();const i=he(e)*(o.step??1),h={ArrowUp:()=>G(i),ArrowDown:()=>q(i),Home:()=>T(b),End:()=>T(I)}[e.key];h&&(e.preventDefault(),h(e))},[q,G,j,I,b,o.step,T]),{up:me,down:de,stop:v,isSpinning:pe}=Xe(G,q);De(ne,["disabled"],pe,v),De(se,["disabled"],pe,v);const z=s.useCallback(()=>{u&&requestAnimationFrame(()=>{var e;(e=P.current)==null||e.focus()})},[u]),be=s.useCallback(e=>{e.preventDefault(),me(),z()},[z,me]),Ce=s.useCallback(e=>{e.preventDefault(),de(),z()},[z,de]);Me(()=>{(D>I||D<b)&&(x==null||x("rangeOverflow",R(N),D))},[D,N,R,x]),Te(()=>{if(!P.current||!(P.current.value!=N))return;const i=B(P.current.value);X(U(i))},[B,U]),Le(()=>P.current,"wheel",e=>{var Se;const y=(((Se=P.current)==null?void 0:Se.ownerDocument)??document).activeElement===P.current;if(!C||!y)return;e.preventDefault();const h=he(e)*(o.step??1),ge=Math.sign(e.deltaY);ge===-1?G(h):ge===1&&q(h)},{passive:!1});const ke=s.useCallback((e={},i=null)=>({id:r,name:a,type:"text",inputMode:n,pattern:l,required:c,disabled:d,readOnly:f,...Y(o,J),...Oe(e,["defaultValue"]),ref:$(P,i),value:R(N),"aria-invalid":Ve(A??ue),autoComplete:"off",autoCorrect:"off",onChange:S(e.onChange,le),onKeyDown:S(e.onKeyDown,fe),onFocus:S(e.onFocus,re),onBlur:S(e.onBlur,oe)}),[r,a,n,l,c,d,f,o,R,N,A,ue,le,fe,re,oe]),xe=s.useCallback((e={},i=null)=>{const y=e.disabled||g&&ce;return{required:c,readOnly:f,disabled:y,...Y(o,J),...e,ref:$(i,ne),role:"button",tabIndex:-1,cursor:f?"not-allowed":e.cursor,onPointerDown:S(e.onPointerDown,h=>{h.button===0&&!y&&be(h)}),onPointerLeave:S(e.onPointerLeave,v),onPointerUp:S(e.onPointerUp,v)}},[g,ce,c,f,o,v,be]),Ae=s.useCallback((e={},i=null)=>{const y=e.disabled||g&&ae;return{required:c,readOnly:f,disabled:y,...Y(o,J),...e,ref:$(i,se),role:"button",tabIndex:-1,cursor:f?"not-allowed":e.cursor,onPointerDown:S(e.onPointerDown,h=>{h.button===0&&!y&&Ce(h)}),onPointerLeave:S(e.onPointerLeave,v),onPointerUp:S(e.onPointerUp,v)}},[g,ae,c,f,o,v,Ce]);return{value:R(N),valueAsNumber:D,isFocused:te,isRequired:k,isReadOnly:Z,isDisabled:ee,getInputProps:ke,getIncrementProps:xe,getDecrementProps:Ae}},He=50,we=300,Xe=(t,r)=>{const[a,n]=s.useState(!1),[l,c]=s.useState(null),[d,f]=s.useState(!0),u=s.useRef(null),E=()=>clearTimeout(u.current);je(()=>{l==="increment"&&t(),l==="decrement"&&r()},a?He:null);const g=s.useCallback(()=>{d&&t(),u.current=setTimeout(()=>{f(!1),n(!0),c("increment")},we)},[t,d]),C=s.useCallback(()=>{d&&r(),u.current=setTimeout(()=>{f(!1),n(!0),c("decrement")},we)},[r,d]),b=s.useCallback(()=>{f(!0),n(!1),E()},[]);return s.useEffect(()=>()=>E(),[]),{up:g,down:C,stop:b,isSpinning:a}},De=(t,r,a,n)=>{s.useEffect(()=>{if(!t.current||!a)return;const l=t.current.ownerDocument.defaultView??window,c=new l.MutationObserver(d=>{for(const{type:f,attributeName:u}of d)f==="attributes"&&u&&r.includes(u)&&n()});return c.observe(t.current,{attributes:!0,attributeFilter:r}),()=>c.disconnect()})},[Ye,H]=Fe({strict:!1,name:"NumberInputContext"}),ft=F((t,r)=>{const[a,n]=Ue("NumberInput",t),{className:l,isStepper:c=!0,containerProps:d,addonProps:f,incrementProps:u,decrementProps:E,onChange:g,...C}=Be(n),{getInputProps:b,getIncrementProps:I,getDecrementProps:M}=We({onChange:g,...C}),A={position:"relative",zIndex:0,...a.container};return w(Ye,{value:{getInputProps:b,getIncrementProps:I,getDecrementProps:M,styles:a},children:Ie(W.div,{className:V("ui-number-input",l),__css:A,...d,children:[w($e,{...b(C,r)}),c?Ie(Je,{...f,children:[w(Qe,{...u}),w(Ze,{...E})]}):null]})})}),$e=F(({className:t,...r},a)=>{const{styles:n}=H(),l={width:"100%",...n.field};return w(W.input,{ref:a,className:V("ui-number-input__field",t),__css:l,...r})}),Je=F(({className:t,...r},a)=>{const{styles:n}=H(),l={display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:"yamcha",...n.addon};return w(W.div,{ref:a,className:V("ui-number-input__addon",t),"aria-hidden":!0,__css:l,...r})}),ye=W("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),Qe=F(({className:t,children:r,...a},n)=>{const{getIncrementProps:l,styles:c}=H(),d={...c.stepper};return w(ye,{className:V("ui-number-input__stepper--up",t),...l(a,n),__css:d,children:r??w(Pe,{__css:{transform:"rotate(180deg)"}})})}),Ze=F(({className:t,children:r,...a},n)=>{const{getDecrementProps:l,styles:c}=H(),d={...c.stepper};return w(ye,{className:V("ui-number-input__stepper--down",t),...l(a,n),__css:d,children:r??w(Pe,{})})});export{ft as N,We as u};
//# sourceMappingURL=number-input-8f66dad0.js.map