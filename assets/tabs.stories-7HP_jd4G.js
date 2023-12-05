import{a as n,j as l,F as w}from"./jsx-runtime-yA-pgArV.js";import{r as v}from"./index-IybTgENJ.js";import{u as ee}from"./index-xewpD759.js";import{c as ae}from"./index-y7fBSNyz.js";import{c as Jn,v as Un,J as Y,S as Z,u as k,a as z,h as q,s as re,H as le}from"./factory-LMyrE5lk.js";import{u as te}from"./index-Y8pDyq33.js";import{f as L}from"./forward-ref-6T0UNPU-.js";import{a as Te}from"./index-FxO9NTK8.js";import{u as ce}from"./use-component-style-_JdcgHxa.js";import{o as ie}from"./theme-provider-DF2eZl7U.js";import{T as r}from"./text-4QJI2M8s.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-5aja2wZ-.js";const{DescendantsContextProvider:se,useDescendantsContext:de,useDescendants:be,useDescendant:oe}=ae(),[he,J]=Jn({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),t=L(({align:o="start",...s},u)=>{const[b,f]=ce("Tabs",{align:o,...s}),{className:P,index:h,defaultIndex:c=0,onChange:d,isFitted:x,isManual:m,isLazy:g=!0,lazyBehavior:p="keepMounted",orientation:S="horizontal",tabListProps:y,tabPanelsProps:T,children:i,...C}=ie(f),[U,X]=v.useState(c),[qn,Gn]=ee({value:h,defaultValue:c,onChange:d}),Qn=be(),_=Un(i),[Xn]=Y(_,G),[Yn]=Y(_,Q),Zn=Z(_,e),$n=Z(_,a);v.useEffect(()=>{h!=null&&X(h)},[h]);const ne={w:"100%",...b.container};return n(se,{value:Qn,children:n(he,{value:{focusedIndex:U,setFocusedIndex:X,selectedIndex:qn,setSelectedIndex:Gn,isFitted:x,align:o,isManual:m,isLazy:g,lazyBehavior:p,orientation:S,tabListProps:y,tabPanelsProps:T,styles:b},children:l(k.div,{ref:u,className:z("ui-tabs",P),__css:ne,...C,children:[Xn??n(G,{children:Zn}),Yn??n(Q,{children:$n})]})})})}),G=L(({className:o,...s},u)=>{const{focusedIndex:b,orientation:f,tabListProps:P,styles:h}=J(),c=de(),d=f==="vertical",x=v.useCallback(()=>{var i;const T=c.enabledNextValue(b);T&&((i=T.node)==null||i.focus())},[c,b]),m=v.useCallback(()=>{var i;const T=c.enabledPrevValue(b);T&&((i=T.node)==null||i.focus())},[c,b]),g=v.useCallback(()=>{var i;const T=c.enabledFirstValue();T&&((i=T.node)==null||i.focus())},[c]),p=v.useCallback(()=>{var i;const T=c.enabledLastValue();T&&((i=T.node)==null||i.focus())},[c]),S=v.useCallback(T=>{const C={ArrowLeft:()=>d?{}:m(),ArrowRight:()=>d?{}:x(),ArrowDown:()=>d?x():{},ArrowUp:()=>d?m():{},Home:g,End:p}[T.key];C&&(T.preventDefault(),C(T))},[g,p,d,m,x]),y={display:"flex",...h.tabList};return n(k.div,{ref:u,className:z("ui-tabs__list",o),role:"tablist",__css:y,...P,...s,onKeyDown:q(s.onKeyDown,S)})}),e=L(({className:o,isDisabled:s,isFocusable:u,clickOnEnter:b,clickOnSpace:f,...P},h)=>{const{selectedIndex:c,isManual:d,setSelectedIndex:x,setFocusedIndex:m,styles:g}=J(),{index:p,register:S}=oe({disabled:s&&!u}),y=p===c,T=()=>x(p),i=()=>{m(p),!d&&!(s&&u)&&x(p)},C=te({ref:re(S,h),isDisabled:s,isFocusable:u,clickOnEnter:b,clickOnSpace:f,onClick:q(P.onClick,T)}),U={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...g.tab};return n(k.button,{className:z("ui-tabs__tab",o),__css:U,role:"tab",...P,...C,type:"button",tabIndex:y?0:-1,"aria-selected":le(y),onFocus:s?void 0:q(P.onFocus,i)})}),[xe,ue]=Jn({}),Q=L(({className:o,children:s,...u},b)=>{const{selectedIndex:f,tabPanelsProps:P,styles:h}=J(),d=Un(s).map((m,g)=>{const p=g===f;return v.createElement(xe,{key:g,value:{isSelected:p,selectedIndex:f}},m)}),x={w:"100%",...h.tabPanels};return n(k.div,{ref:b,className:z("ui-tabs__panels",o),__css:x,...P,...u,children:d})}),a=L(({className:o,children:s,...u},b)=>{const{isLazy:f,lazyBehavior:P,styles:h}=J(),{isSelected:c}=ue(),d=v.useRef(!1);c&&(d.current=!0);const x=Te({wasSelected:d.current,isSelected:c,enabled:f,mode:P}),m={...h.tabPanel};return n(k.div,{ref:b,className:z("ui-tabs__panel",o),role:"tabpanel",__css:m,...u,hidden:!c,children:x?s:null})}),Fe={title:"Components / Disclosure / Tabs",component:t},F=()=>l(t,{children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),D=()=>l(t,{defaultIndex:1,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),I=()=>l(w,{children:[l(t,{size:"sm",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{size:"md",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{size:"lg",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),M=()=>l(w,{children:[l(t,{variant:"line",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"sticky",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"sticky-subtle",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"sticky-solid",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"rounded",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"rounded-subtle",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"rounded-solid",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"unstyled",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),V=()=>l(t,{variant:"rounded-solid",colorScheme:"red",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),A=()=>l(w,{children:[l(t,{align:"start",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{align:"center",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{align:"end",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),N=()=>l(w,{children:[l(t,{orientation:"horizontal",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{orientation:"vertical",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),W=()=>l(w,{children:[l(t,{variant:"line",isFitted:!0,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"sticky",isFitted:!0,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),B=()=>l(t,{children:[n(e,{children:"孫悟空"}),n(e,{isDisabled:!0,children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),R=()=>l(t,{children:[n(e,{children:"孫悟空"}),n(e,{isFocusable:!0,children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),E=()=>l(t,{isManual:!0,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),j=()=>l(t,{isLazy:!0,lazyBehavior:"unmount",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),K=()=>l(t,{children:[l(G,{borderWidth:1,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"})]}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>l(t,{variant:"sticky",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),l(Q,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),H=()=>{const[o,s]=v.useState(0);return l(t,{index:o,onChange:s,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var $,nn,en;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(en=(nn=F.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,rn,ln;D.parameters={...D.parameters,docs:{...(an=D.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <Tabs defaultIndex={1}>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(ln=(rn=D.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var tn,Tn,cn;I.parameters={...I.parameters,docs:{...(tn=I.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
  return <>
      <Tabs size="sm">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs size="md">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs size="lg">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(cn=(Tn=I.parameters)==null?void 0:Tn.docs)==null?void 0:cn.source}}};var sn,dn,bn;M.parameters={...M.parameters,docs:{...(sn=M.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <>
      <Tabs variant="line">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky-subtle">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky-solid">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded-subtle">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded-solid">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="unstyled">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(bn=(dn=M.parameters)==null?void 0:dn.docs)==null?void 0:bn.source}}};var on,hn,xn;V.parameters={...V.parameters,docs:{...(on=V.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  return <Tabs variant="rounded-solid" colorScheme="red">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(xn=(hn=V.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};var un,Pn,mn;A.parameters={...A.parameters,docs:{...(un=A.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
  return <>
      <Tabs align="start">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs align="center">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs align="end">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(mn=(Pn=A.parameters)==null?void 0:Pn.docs)==null?void 0:mn.source}}};var pn,fn,vn;N.parameters={...N.parameters,docs:{...(pn=N.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  return <>
      <Tabs orientation="horizontal">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs orientation="vertical">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(vn=(fn=N.parameters)==null?void 0:fn.docs)==null?void 0:vn.source}}};var gn,yn,Cn;W.parameters={...W.parameters,docs:{...(gn=W.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <>
      <Tabs variant="line" isFitted>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky" isFitted>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(Cn=(yn=W.parameters)==null?void 0:yn.docs)==null?void 0:Cn.source}}};var Sn,wn,kn;B.parameters={...B.parameters,docs:{...(Sn=B.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab isDisabled>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(kn=(wn=B.parameters)==null?void 0:wn.docs)==null?void 0:kn.source}}};var zn,Ln,_n;R.parameters={...R.parameters,docs:{...(zn=R.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab isFocusable>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(_n=(Ln=R.parameters)==null?void 0:Ln.docs)==null?void 0:_n.source}}};var Fn,Dn,In;E.parameters={...E.parameters,docs:{...(Fn=E.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <Tabs isManual>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(In=(Dn=E.parameters)==null?void 0:Dn.docs)==null?void 0:In.source}}};var Mn,Vn,An;j.parameters={...j.parameters,docs:{...(Mn=j.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  return <Tabs isLazy lazyBehavior="unmount">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(An=(Vn=j.parameters)==null?void 0:Vn.docs)==null?void 0:An.source}}};var Nn,Wn,Bn;K.parameters={...K.parameters,docs:{...(Nn=K.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <Tabs>
      <TabList borderWidth={1}>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>
      </TabList>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Bn=(Wn=K.parameters)==null?void 0:Wn.docs)==null?void 0:Bn.source}}};var Rn,En,jn;O.parameters={...O.parameters,docs:{...(Rn=O.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <Tabs variant="sticky">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanels borderBottomWidth={1} borderLeftWidth={1} borderRightWidth={1}>
        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>;
}`,...(jn=(En=O.parameters)==null?void 0:En.docs)==null?void 0:jn.source}}};var Kn,On,Hn;H.parameters={...H.parameters,docs:{...(Kn=H.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  const [index, onChange] = useState<number>(0);
  return <Tabs index={index} onChange={onChange}>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Hn=(On=H.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};const De=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","isDisabled","isFocusable","isManual","isLazy","customTabList","customTabPanels","customControl"];export{De as __namedExportsOrder,F as basic,H as customControl,K as customTabList,O as customTabPanels,Fe as default,B as isDisabled,R as isFocusable,j as isLazy,E as isManual,A as withAlign,V as withColorScheme,D as withDefaultIndex,W as withFitted,N as withOrientation,I as withSize,M as withVariant};