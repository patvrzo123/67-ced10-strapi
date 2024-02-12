"use strict";(self.webpackChunk_67_ced_10_strapi=self.webpackChunk_67_ced_10_strapi||[]).push([[4660],{44660:(_s,z,s)=>{s.d(z,{ReviewWorkflowsCreatePage:()=>X});var t=s(19968),r=s(62552),Y=s(35676),c=s(48936),V=s(89296),A=s(63358),O=s(50648),k=s(53305),h=s(31812),N=s(14632),i=s(70516),G=s(49008),Q=s(58276),H=s(47752),o=s(33556),I=s(63952),P=s(9164),l=s(6484),D=s(1844),J=s(46964),rs=s(85240),ls=s(13192),is=s(35184),Es=s(52540),ds=s(54320),Ms=s(5240),Os=s(91892),Ps=s(36196),Ds=s(20880),gs=s(21424),fs=s(18424),vs=s(21968),ms=s(12132),cs=s(48632),hs=s(85676),Cs=s(99568),Ls=s(96556),Rs=s(30840),Ts=s(77784),Ws=s(79371),As=s(67888),Is=s(52600),Bs=s(95752),Ks=s(37388),Us=s(61840),ws=s(49108),ys=s(44632),us=s(50840),js=s(20252),xs=s(86432),ps=s(22612),Ss=s(24808),Fs=s(24024),zs=s(40960),Ys=s(33656),Vs=s(43280),ks=s(79804),Ns=s(19632),Gs=s(29576),Qs=s(61152),Hs=s(9589),Js=s(45488),Xs=s(75516),Zs=s(78744);const X=()=>{const{formatMessage:a}=(0,N.c)(),{push:Z}=(0,G.Uz)(),{_unstableFormatAPIError:$,_unstableFormatValidationErrors:b}=(0,O.An)(),_=(0,i.OY)(),E=(0,O.eo)(),{collectionTypes:B,singleTypes:K,isLoading:C}=(0,H.u)(),{isLoading:g,meta:U,workflows:f,createWorkflow:q}=(0,J.u)(),{isLoading:L,roles:w}=(0,Q.u)(),v=(0,i.w1)(o.s),ss=(0,i.w1)(o.a),n=(0,i.w1)(o.b),y=(0,i.w1)(o.c),[u,d]=r.useState(null),{isLoading:j,getFeature:ts}=(0,I.m)(),[os,es]=r.useState(),[x,R]=r.useState({}),m=ts("review-workflows"),p=m?.[D.C],M=m?.[D.a],S=f?.flatMap(e=>e.contentTypes),F=async()=>{R({});try{const e=await q({data:n});if("error"in e){(0,I.x)(e.error)&&e.error.name==="ValidationError"&&es(b(e.error)),E({type:"warning",message:$(e.error)});return}E({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}}),Z(`/settings/review-workflows/${e.data.id}`)}catch{E({type:"warning",message:{id:"Settings.review-workflows.create.page.notification.error",defaultMessage:"An error occurred"}})}},as=async()=>{await F()},ns=()=>{R({})},T=(0,h.KO)({enableReinitialize:!0,initialErrors:os,initialValues:n,async onSubmit(){const e=n.contentTypes?.some(W=>S?.includes(W));U&&p&&U?.workflowCount>=parseInt(p,10)?d("workflow"):n.stages&&M&&n.stages.length>=parseInt(M,10)?d("stage"):e?R(W=>({...W,hasReassignedContentTypes:!0})):F()},validate(e){return(0,o.v)({values:e,formatMessage:a})}});return(0,o.u)(D.R,o.i),r.useEffect(()=>{_((0,o.r)()),!g&&f&&_((0,o.d)({workflows:f})),C||_((0,o.e)({collectionTypes:B,singleTypes:K})),L||_((0,o.f)(w)),_((0,o.g)(C||L)),_((0,o.h)({name:""}))},[B,_,C,L,g,w,K,f]),r.useEffect(()=>{!g&&!j&&n.stages&&m?.[D.a]&&M&&n.stages.length>=parseInt(M,10)&&d("stage")},[j,g,m,n.stages,M]),r.useEffect(()=>{!v&&y?.length===0&&E({blockTransition:!0,type:"warning",message:a({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[a,v,y,E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.D,{}),(0,t.jsx)(h.uo,{value:T,children:(0,t.jsxs)(h.QF,{onSubmit:T.handleSubmit,children:[(0,t.jsx)(P.H,{navigationAction:(0,t.jsx)(P.B,{href:"/settings/review-workflows"}),primaryAction:(0,t.jsx)(Y.Z,{startIcon:(0,t.jsx)(k.c,{}),type:"submit",size:"M",disabled:!ss,children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:a({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:n?.stages?.length??0})}),(0,t.jsx)(P.R,{children:(0,t.jsx)(c.C,{alignItems:"stretch",direction:"column",gap:7,children:v?(0,t.jsx)(V.c,{children:a({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})}):(0,t.jsxs)(c.C,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(o.W,{}),(0,t.jsx)(o.S,{stages:T.values?.stages})]})})})]})}),(0,t.jsx)(O.cz.Root,{isConfirmButtonLoading:v,isOpen:Object.keys(x).length>0,onToggleDialog:ns,onConfirm:as,children:(0,t.jsx)(O.cz.Body,{children:(0,t.jsxs)(c.C,{direction:"column",gap:5,children:[x.hasReassignedContentTypes&&(0,t.jsx)(A.O,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:S?.filter(e=>n.contentTypes?.includes(e)).length})}),(0,t.jsx)(A.O,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(l.L.Root,{isOpen:u==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(l.L.Title,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(l.L.Body,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(l.L.Root,{isOpen:u==="stage",onClose:()=>d(null),children:[(0,t.jsx)(l.L.Title,{children:a({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(l.L.Body,{children:a({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
