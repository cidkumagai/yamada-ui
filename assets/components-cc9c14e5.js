import{j as s,a}from"./jsx-runtime-29545a09.js";import{r as c}from"./index-76fb7be0.js";import{u as n}from"./index-f89c890c.js";import{U as m}from"./ui-provider-21ac57d6.js";import{C as d}from"./container-9c1ae079.js";import{H as l,V as p}from"./stack-a4995db2.js";import{a as f,n as h}from"./factory-1df513a8.js";import{B as C}from"./box-afdf46cf.js";import{T as e}from"./text-34d34098.js";const U=({children:o})=>s(m,{children:s(g,{children:o})}),g=({children:o})=>{const{changeColorMode:t}=f(),r=n()?"dark":"light";return c.useEffect(()=>{t(r)},[r,t]),s(d,{children:o})},u=({name:o,colors:t})=>Object.entries(t[o]).map(([r,i])=>s(x,{name:o,hue:r,value:i},r)),x=({name:o,hue:t,value:r})=>{const i=n()?"dark":"light";return a(l,{children:[s(C,{bg:t?`${o}.${t}`:o,minW:"12",minH:"12",rounded:"md",boxShadow:"inner"}),a(p,{gap:"1",children:[a(e,{m:"0",fontWeight:"semibold",noOfLines:1,children:[o.charAt(0).toUpperCase()+o.slice(1)," ",t]}),s(e,{m:"0",noOfLines:1,children:h(r)?i==="light"?r[0]:r[1]:r})]})]},t)};export{x as C,U as J,u as a};
//# sourceMappingURL=components-cc9c14e5.js.map