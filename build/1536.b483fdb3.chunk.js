(self.webpackChunk_67_ced_10_strapi=self.webpackChunk_67_ced_10_strapi||[]).push([[1536],{94456:D=>{function x(e,s,l,d){for(var c=l-1,u=e.length;++c<u;)if(d(e[c],s))return c;return-1}D.exports=x},97368:(D,x,e)=>{var s=e(12480),l=e(39024),d=e(94456),c=e(85968),u=e(4288),v=Array.prototype,m=v.splice;function y(i,C,h,Y){var w=Y?d:l,z=-1,b=C.length,E=i;for(i===C&&(C=u(C)),h&&(E=s(i,c(h)));++z<b;)for(var K=0,L=C[z],G=h?h(L):L;(K=w(E,G,K,Y))>-1;)E!==i&&m.call(E,K,1),m.call(i,K,1);return i}D.exports=y},92096:(D,x,e)=>{var s=e(12480),l=e(24020),d=e(22488),c=e(75516);function u(v,m){var y=c(v)?s:d;return y(v,l(m,3))}D.exports=u},39620:(D,x,e)=>{var s=e(41912),l=e(35140),d=s(l);D.exports=d},35140:(D,x,e)=>{var s=e(97368);function l(d,c){return d&&d.length&&c&&c.length?s(d,c):d}D.exports=l},96772:(D,x,e)=>{var s=e(35904);function l(d){var c=d==null?0:d.length;return c?s(d,1,c):[]}D.exports=l},1536:(D,x,e)=>{"use strict";e.d(x,{M:()=>ie,ProtectedEditView:()=>We});var s=e(19968),l=e(62552),d=e(5e3),c=e(48936),u=e(63358),v=e(28724),m=e(70996),y=e(48112),i=e(28464),C=e(35676),h=e(42816),Y=e(42616),w=e(34404),z=e(12248),b=e(32568),E=e(50648),K=e(31812),L=e(14632),G=e(49008),$=e(63952),q=e(71076),V=e(49748),W=e(7496),le=e(43164),de=e(53305),ce=e(46596),_e=e(92096),Ee=e(96772),J=e(69372),pe=e(76683),Q=e(52540),ue=e(29088),ae=e(39620),He=e(54320),Ye=e(5240),ze=e(91892),be=e(36196),Je=e(20880),Ze=e(21424),Xe=e(70516),we=e(18424),qe=e(21968),es=e(12132),ss=e(48632),ts=e(85676),ns=e(35184),as=e(99568),os=e(96556),is=e(13192),rs=e(30840),ls=e(77784),ds=e(79371),cs=e(67888),_s=e(52600),Es=e(95752),ps=e(37388),us=e(61840),Ps=e(49108),gs=e(44632),Os=e(50840),hs=e(20252),As=e(86432),ms=e(22612),Ms=e(24808),Ts=e(24024),Ds=e(40960),Cs=e(33656),ys=e(43280),fs=e(79804),Is=e(19632),xs=e(29576),vs=e(61152),Ls=e(9589),Rs=e(45488),Us=e(75516);const Pe=$.n.injectEndpoints({endpoints:n=>({getPermissions:n.query({query:()=>"/admin/content-api/permissions",transformResponse:t=>t.data}),getRoutes:n.query({query:()=>"/admin/content-api/routes",transformResponse:t=>t.data})}),overrideExisting:!1}),{useGetPermissionsQuery:ge,useGetRoutesQuery:Oe}=Pe,[he,Ae]=(0,le.G)("ApiTokenPermissionsContext"),me=({children:n,...t})=>(0,s.jsx)(he,{...t,children:n}),ee=()=>Ae("useApiTokenPermissions"),Me=({errors:n={},onChange:t,canEditInputs:a,isCreating:_,values:o={},apiToken:P={},onDispatch:r,setHasChangedPermissions:j})=>{const{formatMessage:A}=(0,L.c)(),U=({target:{value:f}})=>{j(!1),f==="full-access"&&r({type:"SELECT_ALL_ACTIONS"}),f==="read-only"&&r({type:"ON_CHANGE_READ_ONLY"})},F=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,s.jsx)(d.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(u.O,{variant:"delta",as:"h2",children:A({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(v.y,{gap:5,children:[(0,s.jsx)(m.C,{col:6,xs:12,children:(0,s.jsx)(W.T,{error:n.name,value:o.name,canEditInputs:a,onChange:t})},"name"),(0,s.jsx)(m.C,{col:6,xs:12,children:(0,s.jsx)(W.a,{error:n.description,value:o.description,canEditInputs:a,onChange:t})},"description"),(0,s.jsx)(m.C,{col:6,xs:12,children:(0,s.jsx)(W.L,{isCreating:_,error:n.lifespan,value:o.lifespan,onChange:t,token:P})},"lifespan"),(0,s.jsx)(m.C,{col:6,xs:12,children:(0,s.jsx)(W.b,{value:o.type,error:n.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:f=>{U({target:{value:f}}),t({target:{name:"type",value:f}})},options:F,canEditInputs:a})},"type")]})]})})},Te=({apiTokenName:n=null})=>{const{formatMessage:t}=(0,L.c)();return(0,E.G0)(),(0,s.jsxs)(y.G,{"aria-busy":"true",children:[(0,s.jsx)(E.K8,{name:"API Tokens"}),(0,s.jsx)(i.a,{primaryAction:(0,s.jsx)(C.Z,{disabled:!0,startIcon:(0,s.jsx)(de.c,{}),type:"button",size:"L",children:t({id:"global.save",defaultMessage:"Save"})}),title:n||t({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,s.jsx)(h.S,{children:(0,s.jsx)(E.Wm,{})})]})},De=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ce=(0,J.cp)(d.k)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`,ye=({route:n={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:t}=(0,L.c)(),{method:a,handler:_,path:o}=n,P=o?Ee(o.split("/")):[],[r="",j=""]=_?_.split("."):[],A=De(n.method);return(0,s.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(u.O,{variant:"delta",as:"h3",children:[t({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,s.jsx)("span",{children:r}),(0,s.jsxs)(u.O,{variant:"delta",textColor:"primary600",children:[".",j]})]}),(0,s.jsxs)(c.C,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,s.jsx)(Ce,{background:A.background,borderColor:A.border,padding:2,children:(0,s.jsx)(u.O,{fontWeight:"bold",textColor:A.text,children:a})}),(0,s.jsx)(d.k,{paddingLeft:2,paddingRight:2,children:_e(P,U=>(0,s.jsxs)(u.O,{textColor:U.includes(":")?"neutral600":"neutral900",children:["/",U]},U))})]})]})},fe=()=>{const{value:{selectedAction:n,routes:t}}=ee(),{formatMessage:a}=(0,L.c)(),_=n?.split(".")[0];return(0,s.jsx)(m.C,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:n?(0,s.jsx)(c.C,{direction:"column",alignItems:"stretch",gap:2,children:_&&_ in t&&t[_].map(o=>o.config.auth?.scope?.includes(n)||o.handler===n?(0,s.jsx)(ye,{route:o},o.handler):null)}):(0,s.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(u.O,{variant:"delta",as:"h3",children:a({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,s.jsx)(u.O,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},oe=(0,J.gV)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ie=(0,J.cp)(d.k)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&oe}
  &:hover {
    ${oe}
  }
`,xe=J.cp.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,ve=({controllers:n=[],label:t,orderNumber:a=0,disabled:_=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:P=null})=>{const{value:{onChangeSelectAll:r,onChange:j,selectedActions:A,setSelectedAction:U,selectedAction:F}}=ee(),[f,Z]=l.useState(!1),{formatMessage:H}=(0,L.c)(),M=()=>{Z(O=>!O),o(a)};l.useEffect(()=>{P!==null&&P!==a&&f&&Z(!1)},[P,a,f]);const re=O=>O===F;return(0,s.jsxs)(Y.G,{expanded:f,onToggle:M,variant:a%2?"primary":"secondary",children:[(0,s.jsx)(w.M,{title:pe(t)}),(0,s.jsx)(z.u,{children:n?.map(O=>{const I=O.actions.every(T=>A.includes(T.actionId)),R=O.actions.some(T=>A.includes(T.actionId));return(0,s.jsxs)(d.k,{children:[(0,s.jsxs)(c.C,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,s.jsx)(d.k,{paddingRight:4,children:(0,s.jsx)(u.O,{variant:"sigma",textColor:"neutral600",children:O?.controller})}),(0,s.jsx)(xe,{}),(0,s.jsx)(d.k,{paddingLeft:4,children:(0,s.jsx)(b.y,{value:I,indeterminate:!I&&R,onValueChange:()=>{r({target:{value:[...O.actions]}})},disabled:_,children:H({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsx)(v.y,{gap:4,padding:4,children:O?.actions&&O?.actions.map(T=>(0,s.jsx)(m.C,{col:6,children:(0,s.jsxs)(Ie,{isActive:re(T.actionId),padding:2,hasRadius:!0,children:[(0,s.jsx)(b.y,{value:A.includes(T.actionId),name:T.actionId,onValueChange:()=>{j({target:{value:T.actionId}})},disabled:_,children:T.action}),(0,s.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>U({target:{value:T.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,s.jsx)(ce.c,{})})]})},T.actionId))})]},`${t}.${O?.controller}`)})})]})},Le=({section:n=null,...t})=>{const[a,_]=l.useState(null),o=P=>_(P);return(0,s.jsx)(d.k,{padding:4,background:"neutral0",children:n&&n.map((P,r)=>(0,s.jsx)(ve,{label:P.label,controllers:P.controllers,orderNumber:r,indexExpandendCollapsedContent:a,onExpanded:o,...t},P.apiId))})},Re=({...n})=>{const{value:{data:t}}=ee(),{formatMessage:a}=(0,L.c)();return(0,s.jsxs)(v.y,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,s.jsxs)(m.C,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,s.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(u.O,{variant:"delta",as:"h2",children:a({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,s.jsx)(u.O,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),t?.permissions&&(0,s.jsx)(Le,{section:t?.permissions,...n})]}),(0,s.jsx)(fe,{})]})},Ue=Q.kt().shape({name:Q.Qb().max(100).required(E.aO.required),type:Q.Qb().oneOf(["read-only","full-access","custom"]).required(E.aO.required),description:Q.Qb().nullable(),lifespan:Q.CQ().integer().min(0).nullable().defined(E.aO.required)}),je=n=>{const t={allActionsIds:[],permissions:[]};return t.permissions=Object.entries(n).map(([a,_])=>({apiId:a,label:a.split("::")[1],controllers:Object.keys(_.controllers).map(o=>({controller:o,actions:o in _.controllers?_.controllers[o].map(P=>{const r=`${a}.${o}.${P}`;return a.includes("api::")&&t.allActionsIds.push(r),{action:P,actionId:r}}).flat():[]})).flat()})),t},Be={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},Ke=(n,t)=>(0,ue.cp)(n,a=>{switch(t.type){case"ON_CHANGE":{a.selectedActions.includes(t.value)?ae(a.selectedActions,t.value):a.selectedActions.push(t.value);break}case"SELECT_ALL_IN_PERMISSION":{t.value.every(o=>a.selectedActions.includes(o.actionId))?t.value.forEach(o=>{ae(a.selectedActions,o.actionId)}):t.value.forEach(o=>{a.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{a.selectedActions=[...a.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const _=a.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));a.selectedActions=[..._];break}case"UPDATE_PERMISSIONS_LAYOUT":{a.data=je(t.value);break}case"UPDATE_ROUTES":{a.routes={...t.value};break}case"UPDATE_PERMISSIONS":{a.selectedActions=[...t.value];break}case"SET_SELECTED_ACTION":{a.selectedAction=t.value;break}default:return a}}),ie=()=>{(0,E.G0)();const{formatMessage:n}=(0,L.c)(),t=(0,E.eo)(),{lockApp:a,unlockApp:_}=(0,E.H6)(),{state:o}=(0,G.IT)(),P=(0,$.j)(p=>p.admin_app.permissions),[r,j]=l.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:A}=(0,E.m4)(),{setCurrentStep:U}=(0,E.sg)(),{allowedActions:{canCreate:F,canUpdate:f,canRegenerate:Z}}=(0,E.aU)(P.settings?.["api-tokens"]),[H,M]=l.useReducer(Ke,Be),O=(0,G.SU)("/settings/api-tokens/:id")?.params?.id,I=O==="create",{_unstableFormatAPIError:R,_unstableFormatValidationErrors:T}=(0,E.An)(),Se=(0,G.Uz)(),S=ge(),k=Oe();l.useEffect(()=>{S.error&&t({type:"warning",message:R(S.error)})},[S.error,R,t]),l.useEffect(()=>{k.error&&t({type:"warning",message:R(k.error)})},[k.error,R,t]),l.useEffect(()=>{S.data&&M({type:"UPDATE_PERMISSIONS_LAYOUT",value:S.data})},[S.data]),l.useEffect(()=>{k.data&&M({type:"UPDATE_ROUTES",value:k.data})},[k.data]),l.useEffect(()=>{r&&(r.type==="read-only"&&M({type:"ON_CHANGE_READ_ONLY"}),r.type==="full-access"&&M({type:"SELECT_ALL_ACTIONS"}),r.type==="custom"&&M({type:"UPDATE_PERMISSIONS",value:r?.permissions}))},[r]),l.useEffect(()=>{A(I?"didAddTokenFromList":"didEditTokenFromList",{tokenType:V.A})},[I,A]);const{data:B,error:se,isLoading:ke}=(0,q.b)(O,{skip:!O||I||!!r});l.useEffect(()=>{se&&t({type:"warning",message:R(se)})},[se,R,t]),l.useEffect(()=>{B&&(j(B),B.type==="read-only"&&M({type:"ON_CHANGE_READ_ONLY"}),B.type==="full-access"&&M({type:"SELECT_ALL_ACTIONS"}),B.type==="custom"&&M({type:"UPDATE_PERMISSIONS",value:B?.permissions}))},[B]);const[Ne]=(0,q.c)(),[Ge]=(0,q.d)(),$e=async(p,N)=>{A(I?"willCreateToken":"willEditToken",{tokenType:V.A}),a();try{if(I){const g=await Ne({...p,lifespan:p.lifespan==="0"?parseInt(p.lifespan):null,permissions:p.type==="custom"?H.selectedActions:null});if("error"in g){(0,$.x)(g.error)&&g.error.name==="ValidationError"?N.setErrors(T(g.error)):t({type:"warning",message:R(g.error)});return}t({type:"success",message:n({id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"})}),A("didCreateToken",{type:g.data.type,tokenType:V.A}),Se.replace(`/settings/api-tokens/${g.data.id}`,{apiToken:g.data}),U("apiTokens.success")}else{const g=await Ge({id:O,name:p.name,description:p.description,type:p.type,permissions:p.type==="custom"?H.selectedActions:null});if("error"in g){(0,$.x)(g.error)&&g.error.name==="ValidationError"?N.setErrors(T(g.error)):t({type:"warning",message:R(g.error)});return}t({type:"success",message:n({id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),A("didEditToken",{type:g.data.type,tokenType:V.A})}}catch{t({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{_()}},[Ve,te]=l.useState(!1),Qe={...H,onChange:({target:{value:p}})=>{te(!0),M({type:"ON_CHANGE",value:p})},onChangeSelectAll:({target:{value:p}})=>{te(!0),M({type:"SELECT_ALL_IN_PERMISSION",value:p})},setSelectedAction:({target:{value:p}})=>{M({type:"SET_SELECTED_ACTION",value:p})}},ne=f&&!I||F&&I;return ke?(0,s.jsx)(Te,{apiTokenName:r?.name}):(0,s.jsx)(me,{value:Qe,children:(0,s.jsxs)(y.G,{children:[(0,s.jsx)(E.K8,{name:"API Tokens"}),(0,s.jsx)(K.QJ,{validationSchema:Ue,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",type:r?.type,lifespan:r?.lifespan?r.lifespan.toString():r?.lifespan},enableReinitialize:!0,onSubmit:(p,N)=>$e(p,N),children:({errors:p,handleChange:N,isSubmitting:g,values:X,setFieldValue:Fe})=>(Ve&&X?.type!=="custom"&&Fe("type","custom"),(0,s.jsxs)(E.QF,{children:[(0,s.jsx)(W.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:r,setToken:j,canEditInputs:ne,canRegenerate:Z,isSubmitting:g,regenerateUrl:"/admin/api-tokens/"}),(0,s.jsx)(h.S,{children:(0,s.jsxs)(c.C,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(r?.name)&&(0,s.jsx)(W.c,{token:r?.accessKey,tokenType:V.A}),(0,s.jsx)(Me,{errors:p,onChange:N,canEditInputs:ne,isCreating:I,values:X,apiToken:r,onDispatch:M,setHasChangedPermissions:te}),(0,s.jsx)(Re,{disabled:!ne||X?.type==="read-only"||X?.type==="full-access"})]})})]}))})]})})},We=()=>{const n=(0,$.j)(t=>t.admin_app.permissions.settings?.["api-tokens"].read);return(0,s.jsx)(E.rF,{permissions:n,children:(0,s.jsx)(ie,{})})}},71076:(D,x,e)=>{"use strict";e.d(x,{a:()=>v,b:()=>c,c:()=>u,d:()=>m,u:()=>d});var s=e(63952);const l=s.n.injectEndpoints({endpoints:y=>({getAPITokens:y.query({query:()=>"/admin/api-tokens",transformResponse:i=>i.data,providesTags:(i,C)=>[...i?.map(({id:h})=>({type:"ApiToken",id:h}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:y.query({query:i=>`/admin/api-tokens/${i}`,transformResponse:i=>i.data,providesTags:(i,C,h)=>[{type:"ApiToken",id:h}]}),createAPIToken:y.mutation({query:i=>({url:"/admin/api-tokens",method:"POST",data:i}),transformResponse:i=>i.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:y.mutation({query:i=>({url:`/admin/api-tokens/${i}`,method:"DELETE"}),transformResponse:i=>i.data,invalidatesTags:(i,C,h)=>[{type:"ApiToken",id:h}]}),updateAPIToken:y.mutation({query:({id:i,...C})=>({url:`/admin/api-tokens/${i}`,method:"PUT",data:C}),transformResponse:i=>i.data,invalidatesTags:(i,C,{id:h})=>[{type:"ApiToken",id:h}]})}),overrideExisting:!1}),{useGetAPITokensQuery:d,useGetAPITokenQuery:c,useCreateAPITokenMutation:u,useDeleteAPITokenMutation:v,useUpdateAPITokenMutation:m}=l}}]);
