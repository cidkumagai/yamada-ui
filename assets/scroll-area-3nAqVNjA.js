import{j as v}from"./jsx-runtime-TtYKBvr-.js";import{r}from"./index-IybTgENJ.js";import{f as L}from"./forward-ref-6T0UNPU-.js";import{a as N}from"./use-component-style-Ji6G5y4B.js";import{o as H}from"./theme-provider-xH9zRqO9.js";import{m as T,u as _,a as I,h as u}from"./factory-ilkGXtBr.js";const R={scrollbarWidth:"none",_scrollbar:{display:"none"},"&::-webkit-scrollbar":{display:"none"}},j={_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"},_light:{_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}},_dark:{_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}},"@-moz-document url-prefix()":{scrollbarColor:"transparent transparent",_light:{scrollbarColor:"transparent transparent"},_dark:{scrollbarColor:"transparent transparent"}}},F=L((y,S)=>{const[i,w]=N("ScrollArea",y),{className:x,type:e="hover",overflow:b="overlay",scrollHideDelay:s=1e3,onScrollPositionChange:a,children:m,innerProps:p,...o}=H(w),[f,d]=r.useState(!1),[l,g]=r.useState(!1),h=e==="always",k=e==="never",n=r.useRef(void 0),c=r.useRef(void 0),M=r.useCallback(()=>{e==="hover"&&(clearTimeout(n.current),d(!0))},[e]),C=r.useCallback(()=>{e==="hover"&&(n.current=setTimeout(()=>d(!1),s))},[s,e]),E=r.useCallback(t=>{a==null||a({x:t.target.scrollLeft,y:t.target.scrollTop}),e==="scroll"&&(l||g(!0),clearTimeout(c.current),c.current=setTimeout(()=>g(!1),s))},[l,a,s,e]);r.useEffect(()=>()=>{n.current&&clearTimeout(n.current),c.current&&clearTimeout(c.current)},[]);const A=r.useMemo(()=>{const t={overflow:b,...i};return k?T(t,R):T(t,!h&&!f&&!l?j:{})},[h,f,k,l,b,i]);return v(_.div,{ref:S,className:I("ui-scroll-area",x),tabIndex:0,__css:A,...o,onMouseEnter:u(o.onMouseEnter,M),onMouseLeave:u(o.onMouseLeave,C),onScroll:u(o.onScroll,E),children:p?v(_.div,{className:"ui-scroll-area__inner",...p,children:m}):m})});export{F as S};
