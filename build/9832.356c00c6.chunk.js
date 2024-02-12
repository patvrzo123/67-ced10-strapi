"use strict";(self.webpackChunk_67_ced_10_strapi=self.webpackChunk_67_ced_10_strapi||[]).push([[9832],{9832:(p,D,s)=>{s.r(D),s.d(D,{InformationBoxEE:()=>J});var t=s(19968),a=s(50648),e=s(63952),I=s(95080),_=s(48936),L=s(65092),A=s(9544),d=s(56104),W=s(63358),z=s(89296),G=s(79080),Y=s(74264),w=s(14632),y=s(78744),o=s(58984),H=s(62552),m=s(6484),T=s(1844),N=s(85240),Z=s(54320),$=s(5240),k=s(91892),b=s(36196),q=s(20880),ss=s(21424),ts=s(70516),as=s(31812),os=s(18424),ns=s(52540),es=s(21968),_s=s(12132),ls=s(48632),is=s(85676),rs=s(35184),Es=s(99568),ds=s(96556),Ms=s(13192),Os=s(30840),Ps=s(77784),gs=s(79371),Ds=s(67888),ms=s(52600),hs=s(95752),vs=s(37388),Cs=s(61840),As=s(49108),cs=s(44632),Is=s(50840),Ls=s(20252),Ws=s(86432),Ts=s(22612),Rs=s(24808),Bs=s(24024),fs=s(40960),Us=s(33656),Ks=s(43280),us=s(79804),ys=s(19632),js=s(29576),xs=s(61152),Ss=s(9589),ps=s(45488),ws=s(75516);const V=()=>{const{initialData:l,layout:i,isSingleType:h,onChange:j}=(0,a.O_)(),r=(0,e.j)(n=>n.admin_app.permissions),{formatMessage:E}=(0,w.c)(),{_unstableFormatAPIError:x}=(0,a.An)(),S=(0,a.eo)(),{allowedActions:{canRead:R},isLoading:c}=(0,a.aU)(r.settings?.users),{data:v,isLoading:B,isError:f}=(0,e.k)({},{skip:c||!R}),M=v?.users||[],O=l?.[o.A]??null,[P,{error:U,isLoading:K}]=(0,y.u)(),u=async n=>{const g=await P({slug:h?"single-types":"collection-types",model:i.uid,id:l.id,data:{id:n?parseInt(n,10):null}});"data"in g&&(j?.({target:{type:"",name:o.A,value:g.data[o.A]}},!0),S({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}}))};return(0,t.jsx)(I.I,{name:o.A,id:o.A,children:(0,t.jsx)(_.C,{direction:"column",gap:2,alignItems:"stretch",children:(0,t.jsx)(L.k1,{clearLabel:E({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:(f&&R&&E({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||U&&x(U))??void 0,disabled:!c&&!B&&M.length===0,name:o.A,id:o.A,value:O?O.id.toString():null,onChange:u,onClear:()=>u(null),placeholder:E({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:E({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:B||c||K,children:M.map(n=>(0,t.jsx)(A.m,{value:n.id.toString(),textValue:(0,e.l)(n,E),children:(0,e.l)(n,E)},n.id))})})})},Q=()=>{const{initialData:l,layout:i,isSingleType:h,onChange:j}=(0,a.O_)(),{formatMessage:r}=(0,w.c)(),{_unstableFormatAPIError:E}=(0,a.An)(),x=(0,a.eo)(),{data:S,isLoading:R}=(0,y.a)({slug:h?"single-types":"collection-types",model:i.uid,id:l.id},{skip:!l?.id||!i?.uid}),{meta:c,stages:v=[]}=S??{},{getFeature:B}=(0,e.m)(),[f,M]=H.useState(null),O=B("review-workflows")??{},P=l?.[o.S]??null,[U,{error:K}]=(0,y.b)(),u=async g=>{try{if(O?.[T.C]&&parseInt(O[T.C],10)<(c?.workflowCount??0))M("workflow");else if(O?.[T.a]&&parseInt(O[T.a],10)<v.length)M("stage");else if(l.id&&i){const C=await U({model:i.uid,id:l.id,slug:h?"single-types":"collection-types",data:{id:g}});"data"in C&&(j?.({target:{name:o.S,value:C.data[o.S],type:""}},!0),x({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}}))}}catch{}},{themeColorName:n}=(0,N.g)(P?.color)??{};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.I,{hint:v.length===0&&r({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:o.S,id:o.S,children:(0,t.jsxs)(_.C,{direction:"column",gap:2,alignItems:"stretch",children:[(0,t.jsx)(d.K_,{disabled:v.length===0,error:K&&E(K)||void 0,name:o.S,id:o.S,value:P?.id,onChange:u,label:r({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:P&&(0,t.jsx)(_.C,{as:"span",height:2,background:P?.color,borderColor:n==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>(0,t.jsxs)(_.C,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,t.jsx)(W.O,{textColor:"neutral800",ellipsis:!0,children:P?.name??""}),R?(0,t.jsx)(z.c,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null]}),children:v.map(({id:g,color:C,name:F})=>{const{themeColorName:X}=(0,N.g)(C)??{};return(0,t.jsx)(d.kH,{startIcon:(0,t.jsx)(_.C,{height:2,background:C,borderColor:X==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:g,textValue:F,children:F},g)})}),(0,t.jsx)(G.o,{}),(0,t.jsx)(Y.Q,{})]})}),(0,t.jsxs)(m.L.Root,{isOpen:f==="workflow",onClose:()=>M(null),children:[(0,t.jsx)(m.L.Title,{children:r({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(m.L.Body,{children:r({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(m.L.Root,{isOpen:f==="stage",onClose:()=>M(null),children:[(0,t.jsx)(m.L.Title,{children:r({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(m.L.Body,{children:r({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})},J=()=>{const{isCreatingEntry:l,layout:i}=(0,a.O_)(),h=i?.options?.reviewWorkflows??!1;return(0,t.jsxs)(e.I.Root,{children:[(0,t.jsx)(e.I.Title,{}),h&&!l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Q,{}),(0,t.jsx)(V,{})]}),(0,t.jsx)(e.I.Body,{})]})}},85240:(p,D,s)=>{s.d(D,{a:()=>I,g:()=>e});var t=s(15520),a=s(1844);function e(_){if(!_)return null;const A=Object.entries(t.g.colors).filter(([,d])=>d.toUpperCase()===_.toUpperCase()).reduce((d,[W])=>(a.S?.[W]&&(d=W),d),null);return A?{themeColorName:A,name:a.S[A]}:null}function I(){return Object.entries(a.S).map(([_,L])=>({hex:t.g.colors[_].toUpperCase(),name:L}))}},58984:(p,D,s)=>{s.d(D,{A:()=>a,S:()=>t});const t="strapi_stage",a="strapi_assignee"}}]);
