import{r}from"./index-76fb7be0.js";import{c as f}from"./factory-1df513a8.js";const m=(e={})=>{const[a,n]=r.useState(e.defaultIsOpen??!1),s=f(e.onOpen),o=f(e.onClose),u=e.isOpen!==void 0,c=e.isOpen!==void 0?e.isOpen:a,l=r.useCallback((...t)=>{u||n(!0),s==null||s(...t)},[u,s]),i=r.useCallback((...t)=>{u||n(!1),o==null||o(...t)},[u,o]),O=r.useCallback((...t)=>c?i(...t):l(...t),[c,l,i]);return{isOpen:c,onOpen:l,onClose:i,onToggle:O}},b=({wasSelected:e,enabled:a,isSelected:n,mode:s="unmount"})=>!!(!a||n||s==="keepMounted"&&e);export{b as a,m as u};
//# sourceMappingURL=index-633d375d.js.map