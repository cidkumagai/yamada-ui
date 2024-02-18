import{j as h,a as L}from"./jsx-runtime-TtYKBvr-.js";import{u as Se}from"./index-EQvUcbnd.js";import{r as C}from"./index-IybTgENJ.js";import{b as _e,c as be,g as re,a6 as te,e as X,Q as ye,h as x,o as ve,a as A,u as E,s as Pe}from"./factory-ilkGXtBr.js";import{u as we,f as xe}from"./form-control-ZJLHMW15.js";import{d as ke,h as U,c as se,f as Ee,r as De,p as Re,g as Ne,i as Me,o as Te}from"./theme-provider-xH9zRqO9.js";import{I as Oe}from"./icon-button-Tmc0BC1V.js";import{b as Ae}from"./icon-tcOP_kzz.js";import{f as H}from"./forward-ref-6T0UNPU-.js";import{A as He}from"./alpha-slider-Y8d8NcHZ.js";import{H as Ve}from"./hue-slider-oIi5kbLL.js";import{C as le}from"./color-swatch-jZ07Y2JY.js";import{I as je}from"./input--uIOUTpt.js";import{S as Le}from"./saturation-slider-rDYPQ5D2.js";import{u as Be}from"./use-component-style-Ji6G5y4B.js";const We=()=>{const[r,i]=C.useState(!1);_e(()=>{i(typeof window<"u"&&"EyeDropper"in window)},[]);const n=C.useCallback((l={})=>r?new window.EyeDropper().open(l):Promise.resolve(void 0),[r]);return{supported:r,onOpen:n}},ne=(r,i)=>{let[n,l,c,u]=Re(r,i)??[0,0,1,1];return u>1&&(u=1),{h:n,s:l,l:c,a:u}},ae=(r,i)=>{let[n,l,c,u]=Ne(r,i)??[255,255,255,1];return n>255&&(n=255),l>255&&(l=255),c>255&&(c=255),u>1&&(u=1),{r:n,g:l,b:c,a:u}},Y=(r,i)=>{const[n,l,c,u]=Me(r,i);return{h:n,s:l,v:c,a:u}},[Fe,B]=be({name:"ColorSelectorContext",errorMessage:`useColorSelectorContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorSelector />"`}),Ie=({isInvalid:r,...i})=>{let{id:n,name:l,value:c,defaultValue:u,fallbackValue:o,onChange:f,onChangeStart:y,onChangeEnd:v,format:g,required:p,disabled:a,readOnly:d,onSwatchClick:D,...W}=we({isInvalid:r,...i});const z=re(y),G=re(v),{supported:Z,onOpen:q}=We(),[S,Q]=Se({value:c,defaultValue:u??o??"#ffffff",onChange:f}),F=C.useRef(void 0),_=C.useRef(g??ke(S)),I=C.useRef(!1),[T,$]=C.useState(Y(S,o)),{h:k,s:R,v:N,a:O}=T,V=_.current.endsWith("a"),ce=!(a||d),ue=C.useMemo(()=>{if(S.startsWith("hsl")){const{h:e,s,l:t,a:m}=ne(S,o);let b=[{label:"H",space:"h",value:Math.round(e),min:0,max:360},{label:"S(%)",space:"s",value:Math.round(s*100),min:0,max:100},{label:"L(%)",space:"l",value:Math.round(t*100),min:0,max:100}];return V&&(b=[...b,{label:"A(%)",space:"a",value:Math.round(m*100),min:0,max:100}]),b}else{const{r:e,g:s,b:t,a:m}=ae(S,o);let b=[{label:"R",space:"r",value:Math.round(e),min:0,max:255},{label:"G",space:"g",value:Math.round(s),min:0,max:255},{label:"B",space:"b",value:Math.round(t),min:0,max:255}];return V&&(b=[...b,{label:"A(%)",space:"a",value:Math.round(m*100),min:0,max:100}]),b}},[S,V,o]),P=C.useCallback(e=>{te(e)?$(Y(e,o)):$(s=>({...s,...e}))},[o]),j=C.useCallback(e=>{window.clearTimeout(F.current),I.current=!0;const{h:s,s:t,v:m,a:b}={...T,...e},M=U([s,t,m,b],o)(_.current);M&&z(M)},[_,z,o,T]),w=C.useCallback(e=>{window.clearTimeout(F.current),F.current=window.setTimeout(()=>{I.current=!1},200);let s;if(te(e))s=se(e,o)(_.current);else{const{h:t,s:m,v:b,a:M}={...T,...e};s=U([t,m,b,M],o)(_.current)}s&&G(s)},[_,G,o,T]),ee=C.useCallback((e,s)=>{let t=Math.floor(parseFloat(e.target.value));isNaN(t)&&(t=0),["s","l","a"].includes(s)&&(t=t/100);let m;if(S.startsWith("hsl")){const{h:b,s:M,l:J,a:K}=Object.assign(ne(S,o),{[s]:t});m=Ee([b,M,J,K],o)(_.current)}else{const{r:b,g:M,b:J,a:K}=Object.assign(ae(S,o),{[s]:t});m=De([b,M,J,K],o)(_.current)}m&&(P(m),w(m))},[S,P,w,_,o]),oe=C.useCallback(async()=>{try{const{sRGBHex:e}=await q()??{};if(!e)return;P(e),w(e)}catch{}},[q,P,w]);X(()=>{const e=U([k,R,N,O],o)(_.current);e&&Q(e)},[k,R,N,O,o]),X(()=>{I.current||c&&$(Y(c,o))},[c]),X(()=>{if(!g)return;_.current=g;const e=se(S,o)(g);e&&Q(e)},[g,o]);const ie=(e={},s=null)=>({...e,ref:s,...ve(W,["aria-readonly"])}),he=C.useCallback((e={},s=null)=>({...ye(W,xe),...e,id:n,ref:s,type:"hidden",name:l,value:S,required:p,disabled:a,readOnly:d}),[a,n,l,d,p,W,S]),pe=C.useCallback((e={},s=null)=>({required:p,disabled:a,readOnly:d,isInvalid:r,...e,ref:s,value:[k,R,N],onChange:x(e.onChange,([,t,m])=>P({s:t,v:m})),onChangeStart:x(e.onChangeStart,([,t,m])=>j({s:t,v:m})),onChangeEnd:x(e.onChangeEnd,([,t,m])=>w({s:t,v:m}))}),[p,a,d,r,k,R,N,P,j,w]),de=C.useCallback((e={},s=null)=>({required:p,disabled:a,readOnly:d,isInvalid:r,...e,ref:s,value:k,onChange:x(e.onChange,t=>P({h:t})),onChangeStart:x(e.onChangeStart,t=>j({h:t})),onChangeEnd:x(e.onChangeEnd,t=>w({h:t}))}),[p,a,d,r,k,P,j,w]),me=C.useCallback((e={},s=null)=>({required:p,disabled:a,readOnly:d,isInvalid:r,...e,ref:s,value:O,color:U([k,R,N,O],o)(_.current),onChange:x(e.onChange,t=>P({a:t})),onChangeStart:x(e.onChangeStart,t=>j({a:t})),onChangeEnd:x(e.onChangeEnd,t=>w({a:t}))}),[o,p,a,d,r,_,k,R,N,O,P,j,w]),fe=C.useCallback(({space:e,...s},t=null)=>({required:p,disabled:a,readOnly:d,isInvalid:r,...s,ref:t,type:"number",step:1,onChange:x(s.onChange,m=>ee(m,e))}),[p,a,d,r,ee]),Ce=C.useCallback((e={},s=null)=>({disabled:a,"aria-label":"Pick a color",...e,ref:s,onClick:x(e.onClick,oe)}),[a,oe]),ge=C.useCallback(({color:e,...s}={},t=null)=>({"aria-label":`select ${e} as the color`,disabled:a,readOnly:d,...s,ref:t,color:e,onClick:x(s.onClick,()=>{e&&(D==null||D(e),P(e),w(e))})}),[a,d,D,P,w]);return{value:S,onChange:P,eyeDropperSupported:Z,withAlpha:V,isInteractive:ce,disabled:a,readOnly:d,channels:ue,getContainerProps:ie,getInputProps:he,getSaturationSliderProps:pe,getHueSliderProps:de,getAlphaSliderProps:me,getEyeDropperProps:Ce,getChannelProps:fe,getSwatchProps:ge}},$e=H(({className:r,...i},n)=>{const{getEyeDropperProps:l,readOnly:c,size:u,styles:o}=B(),f={h:"auto",minW:"auto",pointerEvents:c?"none":void 0,...o.eyeDropper};return h(Oe,{className:A("ui-color-selector__eye-dropper",r),variant:"outline",size:u,__css:f,...l(i,n),children:h(ze,{className:"ui-color-selector__eye-dropper__icon"})})}),ze=({...r})=>L(Ae,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[h("path",{d:"m2 22 1-1h3l9-9"}),h("path",{d:"M3 21v-3l9-9"}),h("path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"})]}),Ge=H(({className:r,hueSliderRef:i,hueSliderProps:n,alphaSliderRef:l,alphaSliderProps:c,...u},o)=>{let{size:f,withAlpha:y,getHueSliderProps:v,getAlphaSliderProps:g,styles:p}=B();f==="full"&&(f="lg");const a={display:"flex",flexDirection:"column",...p.sliders};return L(E.div,{ref:o,className:A("ui-color-selector__sliders",r),__css:a,...u,children:[h(Ve,{size:f,className:"ui-color-selector__hue-slider",__css:{...p.hueSlider},...v(n,i)}),y?h(He,{size:f,className:"ui-color-selector__alpha-slider",__css:{...p.alphaSlider},...g(c,l)}):null]})}),qe=H(({className:r,withEyeDropper:i=!0,withResult:n,eyeDropperRef:l,eyeDropperProps:c,hueSliderRef:u,hueSliderProps:o,alphaSliderRef:f,alphaSliderProps:y,...v},g)=>{const{value:p,eyeDropperSupported:a,styles:d}=B(),D={display:"flex",w:"full",...d.body};return L(E.div,{ref:g,className:A("ui-color-selector__body",r),__css:D,...v,children:[h(Ge,{hueSliderRef:u,hueSliderProps:o,alphaSliderRef:f,alphaSliderProps:y}),i&&a?h($e,{ref:l,...c}):null,n?h(le,{className:"ui-color-selector__result",color:p,__css:{...d.result}}):null]})}),Qe=H(({className:r,channelProps:i,...n},l)=>{const{withAlpha:c,channels:u,getChannelProps:o,styles:f}=B(),y={display:"grid",gridTemplateColumns:`repeat(${c?"4":"3"}, 1fr)`,...f.channels};return h(E.div,{ref:l,className:A("ui-color-selector__channels",r),__css:y,...n,children:u.map(({label:v,space:g,value:p,min:a,max:d})=>h(Ue,{channelLabel:v,...o({...i,space:g,value:p,min:a,max:d})},v))})}),Ue=H(({className:r,channelLabel:i,...n},l)=>{const c=C.useId();let{size:u,disabled:o,readOnly:f,styles:y}=B();u==="full"&&(u="lg");const v={...y.channel};return L(E.div,{className:A("ui-color-selector__channel",r),children:[i?h(E.label,{htmlFor:c,style:{cursor:o?"not-allowed":void 0},__css:{display:"block",pointerEvents:f?"none":void 0,...y.channelLabel},children:i}):null,h(je,{ref:l,id:c,size:u,__css:v,...n})]})}),Ze=H(({className:r,swatchesLabel:i,swatches:n,swatchesContainerProps:l,swatchProps:c,swatchesColumns:u,...o},f)=>{const{getSwatchProps:y,readOnly:v,styles:g}=B(),p={display:"grid",gridTemplateColumns:Pe(u,a=>a!=null?`repeat(${a}, minmax(0, 1fr))`:void 0),...g.swatches};return n!=null&&n.length?L(E.div,{...l,children:[i?h(E.p,{className:"ui-color-selector__swatches__label",__css:{...g.swatchesLabel},children:i}):null,h(E.div,{ref:f,className:A("ui-color-selector__swatches",r),__css:p,...o,children:n.map(a=>h(le,{as:"button",__css:{boxSize:"full",pointerEvents:v?"none":void 0,...g.swatch},...y({color:a,...c})},a))})]}):null}),ho=H(({size:r,...i},n)=>{const[l,c]=Be("ColorSelector",{size:r,...i}),{className:u,withResult:o=!0,withPicker:f=!0,withChannel:y=!0,swatches:v,swatchesColumns:g=7,inputProps:p,withEyeDropper:a,eyeDropperRef:d,eyeDropperProps:D,saturationSliderRef:W,saturationSliderProps:z,hueSliderRef:G,hueSliderProps:Z,alphaSliderRef:q,alphaSliderProps:S,swatchesLabel:Q,swatchProps:F,swatchesProps:_,channelsProps:I,channelProps:T,...$}=Te(c),{getContainerProps:k,getInputProps:R,getSaturationSliderProps:N,...O}=Ie($),V={display:"flex",flexDirection:"column",...l.container};return h(Fe,{value:{styles:l,size:r,...O},children:L(E.div,{ref:n,className:A("ui-color-selector",u),__css:V,...k(),children:[h(E.input,{...R(p,n)}),f?h(Le,{size:r,className:"ui-color-selector__saturation-slider",__css:{...l.saturationSlider},...N(z,W)}):null,f?h(qe,{withResult:o,withEyeDropper:a,eyeDropperRef:d,eyeDropperProps:D,hueSliderRef:G,hueSliderProps:Z,alphaSliderRef:q,alphaSliderProps:S}):null,f&&y?h(Qe,{channelProps:T,...I}):null,h(Ze,{swatchesLabel:Q,swatches:v,swatchesColumns:g,swatchProps:F,..._})]})})});export{ho as C,ze as E,We as u};
