"use strict";(self.webpackChunk_67_ced_10_strapi=self.webpackChunk_67_ced_10_strapi||[]).push([[7104,9852],{97104:(F,U,s)=>{s.d(U,{ProtectedCreateView:()=>Q});var _=s(19968),P=s(50648),m=s(70516),C=s(72704),v=s(9852),g=s(62552),c=s(17892),D=s(31212),t=s(63952),O=s(54320),e=s(5240),a=s(91892),G=s(36196),z=s(20880),y=s(21424),j=s(31812),L=s(18424),I=s(52540),x=s(21968),A=s(12132),l=s(48632),H=s(85676),X=s(35184),Z=s(99568),w=s(96556),b=s(13192),q=s(30840),ss=s(77784),_s=s(79371),ts=s(67888),ns=s(52600),as=s(95752),Es=s(37388),os=s(61840),rs=s(49108),es=s(44632),ds=s(50840),Ms=s(20252),is=s(86432),Ps=s(22612),Ds=s(24808),Os=s(24024),ls=s(40960),Ts=s(33656),ms=s(43280),Cs=s(79804),vs=s(19632),Ls=s(29576),As=s(61152),Ks=s(9589),fs=s(45488),Rs=s(75516),Us=s(54424),Is=s(7496);const Q=()=>{const N=(0,m.w1)(C.s);return(0,_.jsx)(P.rF,{permissions:N.settings?.["transfer-tokens"].create,children:(0,_.jsx)(v.M,{})})}},9852:(F,U,s)=>{s.d(U,{M:()=>k,ProtectedEditView:()=>Ws});var _=s(19968),P=s(62552),m=s(48112),C=s(42816),v=s(48936),g=s(5e3),c=s(63358),D=s(28724),t=s(70996),O=s(28464),e=s(35676),a=s(50648),G=s(53305),z=s(31812),y=s(14632),j=s(49008),L=s(52540),I=s(63952),x=s(54424),A=s(49748),l=s(7496),H=s(54320),X=s(5240),Z=s(91892),w=s(36196),b=s(20880),q=s(21424),ss=s(70516),_s=s(18424),ts=s(21968),ns=s(12132),as=s(48632),Es=s(85676),os=s(35184),rs=s(99568),es=s(96556),ds=s(13192),Ms=s(30840),is=s(77784),Ps=s(79371),Ds=s(67888),Os=s(52600),ls=s(95752),Ts=s(37388),ms=s(61840),Cs=s(49108),vs=s(44632),Ls=s(50840),As=s(20252),Ks=s(86432),fs=s(22612),Rs=s(24808),Us=s(24024),Is=s(40960),Q=s(33656),N=s(43280),Fs=s(79804),Gs=s(19632),zs=s(29576),Qs=s(61152),Ns=s(9589),ks=s(45488),$s=s(75516);const Bs=L.kt().shape({name:L.Qb().max(100).required(a.aO.required),description:L.Qb().nullable(),lifespan:L.CQ().integer().min(0).nullable().defined(a.aO.required),permissions:L.Qb().required(a.aO.required)}),k=()=>{(0,a.G0)();const{formatMessage:o}=(0,y.c)(),{lockApp:r,unlockApp:B}=(0,a.H6)(),M=(0,a.eo)(),K=(0,j.Uz)(),{state:W}=(0,j.IT)(),[E,f]=P.useState(W&&"accessKey"in W.transferToken?{...W.transferToken}:null),{trackUsage:T}=(0,a.m4)(),{setCurrentStep:cs}=(0,a.sg)(),ys=(0,I.j)(d=>d.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:js,canUpdate:xs,canRegenerate:ps}}=(0,a.aU)(ys),p=(0,j.SU)("/settings/transfer-tokens/:id")?.params?.id,i=p==="create",{_unstableFormatAPIError:u,_unstableFormatValidationErrors:$}=(0,a.An)();P.useEffect(()=>{T(i?"didAddTokenFromList":"didEditTokenFromList",{tokenType:A.T})},[i,T]);const{data:S,error:V}=(0,x.u)(p,{skip:i||E!==null||!p});P.useEffect(()=>{V&&M({type:"warning",message:u(V)})},[V,u,M]),P.useEffect(()=>{S&&f(S)},[S]);const[us]=(0,x.a)(),[Ss]=(0,x.b)(),Vs=async(d,R)=>{T(i?"willCreateToken":"willEditToken",{tokenType:A.T}),r();const h=d.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(h))try{if(i){const n=await us({...d,permissions:h});if("error"in n){(0,I.x)(n.error)&&n.error.name==="ValidationError"?R.setErrors($(n.error)):M({type:"warning",message:u(n.error)});return}f(n.data),M({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:A.T}),K.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),cs("transferTokens.success")}else{const n=await Ss({id:p,name:d.name,description:d.description,permissions:h});if("error"in n){(0,I.x)(n.error)&&n.error.name==="ValidationError"?R.setErrors($(n.error)):M({type:"warning",message:u(n.error)});return}f(n.data),M({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:A.T})}}catch{M({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{B()}},Y=xs&&!i||js&&i;return!i&&!E?(0,_.jsx)(gs,{}):(0,_.jsxs)(m.G,{children:[(0,_.jsx)(a.K8,{name:"Transfer Tokens"}),(0,_.jsx)(z.QJ,{validationSchema:Bs,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan??null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(d,R)=>Vs(d,R),children:({errors:d,handleChange:R,isSubmitting:h,values:J})=>(0,_.jsxs)(a.QF,{children:[(0,_.jsx)(l.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:f,canEditInputs:Y,canRegenerate:ps,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,_.jsx)(C.S,{children:(0,_.jsxs)(v.C,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,_.jsx)(l.c,{token:E.accessKey,tokenType:A.T}),(0,_.jsx)(hs,{errors:d,onChange:R,canEditInputs:Y,isCreating:i,values:J,transferToken:E})]})})]})})]})},Ws=()=>{const o=(0,I.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,_.jsx)(a.rF,{permissions:o,children:(0,_.jsx)(k,{})})},hs=({errors:o={},onChange:r,canEditInputs:B,isCreating:M,values:K,transferToken:W={}})=>{const{formatMessage:E}=(0,y.c)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,_.jsx)(g.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,_.jsxs)(v.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,_.jsx)(c.O,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,_.jsxs)(D.y,{gap:5,children:[(0,_.jsx)(t.C,{col:6,xs:12,children:(0,_.jsx)(l.T,{error:o.name,value:K.name,canEditInputs:B,onChange:r})},"name"),(0,_.jsx)(t.C,{col:6,xs:12,children:(0,_.jsx)(l.a,{error:o.description,value:K.description,canEditInputs:B,onChange:r})},"description"),(0,_.jsx)(t.C,{col:6,xs:12,children:(0,_.jsx)(l.L,{isCreating:M,error:o.lifespan,value:K.lifespan,onChange:r,token:W})},"lifespan"),(0,_.jsx)(t.C,{col:6,xs:12,children:(0,_.jsx)(l.b,{name:"permissions",value:K.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:f,canEditInputs:B})},"permissions")]})]})})},gs=({transferTokenName:o})=>{const{formatMessage:r}=(0,y.c)();return(0,a.G0)(),(0,_.jsxs)(m.G,{"aria-busy":"true",children:[(0,_.jsx)(a.K8,{name:"Transfer Tokens"}),(0,_.jsx)(O.a,{primaryAction:(0,_.jsx)(e.Z,{disabled:!0,startIcon:(0,_.jsx)(G.c,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,_.jsx)(C.S,{children:(0,_.jsx)(a.Wm,{})})]})}},54424:(F,U,s)=>{s.d(U,{a:()=>v,b:()=>c,c:()=>m,d:()=>g,u:()=>C});var _=s(63952);const P=_.n.injectEndpoints({endpoints:D=>({getTransferTokens:D.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:t=>t.data,providesTags:(t,O)=>[...t?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:D.query({query:t=>`/admin/transfer/tokens/${t}`,transformResponse:t=>t.data,providesTags:(t,O,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:D.mutation({query:t=>({url:"/admin/transfer/tokens",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:D.mutation({query:t=>({url:`/admin/transfer/tokens/${t}`,method:"DELETE"}),transformResponse:t=>t.data,invalidatesTags:(t,O,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:D.mutation({query:({id:t,...O})=>({url:`/admin/transfer/tokens/${t}`,method:"PUT",data:O}),transformResponse:t=>t.data,invalidatesTags:(t,O,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:C,useCreateTransferTokenMutation:v,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:c}=P}}]);
