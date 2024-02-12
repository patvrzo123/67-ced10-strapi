"use strict";(self.webpackChunk_67_ced_10_strapi=self.webpackChunk_67_ced_10_strapi||[]).push([[7728],{67728:(J,v,s)=>{s.d(v,{ProtectedEditPage:()=>$});var t=s(19968),c=s(62552),E=s(5e3),M=s(48936),m=s(63358),h=s(35676),I=s(28724),C=s(70996),R=s(62492),A=s(25352),U=s(48112),B=s(28464),K=s(42816),W=s(5540),n=s(50648),T=s(15396),f=s(31812),p=s(14632),j=s(49008),Q=s(39380),x=s(52540),e=s(63952),G=s(58276),H=s(28104),os=s(54320),is=s(5240),Es=s(91892),rs=s(36196),ds=s(20880),es=s(21424),ls=s(70516),Ms=s(18424),Ps=s(21968),Os=s(12132),Ds=s(48632),ms=s(85676),hs=s(35184),Cs=s(99568),Rs=s(96556),As=s(13192),gs=s(30840),Ls=s(77784),vs=s(79371),cs=s(67888),Is=s(52600),Us=s(95752),Bs=s(37388),Ks=s(61840),Ws=s(49108),Ts=s(44632),fs=s(50840),js=s(20252),xs=s(86432),us=s(22612),ys=s(24808),ps=s(24024),Ss=s(40960),Fs=s(33656),Ns=s(43280),zs=s(79804),Vs=s(19632),Js=s(29576),Qs=s(61152),Gs=s(9589),Hs=s(45488),Ys=s(75516),Zs=s(56781),Xs=s(30680);const Y=({disabled:o,role:a,values:O,errors:_,onChange:r,onBlur:g})=>{const{formatMessage:i}=(0,p.c)();return(0,t.jsx)(E.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.C,{justifyContent:"space-between",children:[(0,t.jsxs)(E.k,{children:[(0,t.jsx)(E.k,{children:(0,t.jsx)(m.O,{fontWeight:"bold",children:a?a.name:i({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(E.k,{children:(0,t.jsx)(m.O,{textColor:"neutral500",variant:"pi",children:a?a.description:i({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.Z,{disabled:!0,variant:"secondary",children:i({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(I.y,{gap:4,children:[(0,t.jsx)(C.C,{col:6,children:(0,t.jsx)(R.g,{disabled:o,name:"name",error:_.name&&i({id:_.name}),label:i({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:g,required:!0,value:O.name||""})}),(0,t.jsx)(C.C,{col:6,children:(0,t.jsx)(A.A,{disabled:o,label:i({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&i({id:_.name}),onChange:r,onBlur:g,children:O.description||""})})]})]})})},Z=x.kt().shape({name:x.Qb().required(n.aO.required),description:x.Qb().optional()}),X=()=>{const o=(0,n.eo)(),{formatMessage:a}=(0,p.c)(),_=(0,j.SU)("/settings/roles/:id")?.params.id,r=c.useRef(null),{lockApp:g,unlockApp:i}=(0,n.H6)(),{trackUsage:b}=(0,n.m4)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:F}=(0,n.An)(),{isLoading:k,data:N}=(0,e.A)({role:_??""}),{roles:w,isLoading:z,refetch:q}=(0,G.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(j.YJ,{to:"/settings/roles"});const ns=async(u,L)=>{try{g();const{permissionsToSend:D,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await _s({id:_,...u});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?L.setErrors(F(d.error)):o({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&D){const l=await as({id:d.data.id,permissions:D});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?L.setErrors(F(l.error)):o({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),o({type:"success",message:{id:"notification.success.saved"}})}catch{o({type:"warning",message:{id:"notification.error"}})}finally{i()}},V=!z&&P.code==="strapi-super-admin";return(0,t.jsxs)(U.G,{children:[(0,t.jsx)(n.K8,{name:"Roles"}),(0,t.jsx)(f.QJ,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:ns,validationSchema:Z,validateOnChange:!1,children:({handleSubmit:u,values:L,errors:D,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(B.a,{primaryAction:(0,t.jsx)(M.C,{gap:2,children:(0,t.jsx)(h.Z,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.c,{as:Q.Af,startIcon:(0,t.jsx)(T.c,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(K.S,{children:(0,t.jsxs)(M.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(Y,{disabled:V,errors:D,values:L,onChange:y,onBlur:d,role:P}),!k&&!z&&!ts&&N?(0,t.jsx)(E.k,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(H.P,{isFormDisabled:V,permissions:ss,ref:r,layout:N})}):(0,t.jsx)(E.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(n.Wm,{})})]})})]})})]})},$=()=>{const o=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:O,canUpdate:_}}=(0,n.aU)(o);return a?(0,t.jsx)(n.Wm,{}):!O&&!_?(0,t.jsx)(j.YJ,{to:"/"}):(0,t.jsx)(X,{})}},58276:(J,v,s)=>{s.d(v,{u:()=>m});var t=s(62552),c=s(50648),E=s(14632),M=s(63952);const m=(h={},I)=>{const{locale:C}=(0,E.c)(),R=(0,c.In)(C,{sensitivity:"base"}),{data:A,error:U,isError:B,isLoading:K,refetch:W}=(0,M.z)(h,I);return{roles:t.useMemo(()=>[...A??[]].sort((T,f)=>R.compare(T.name,f.name)),[A,R]),error:U,isError:B,isLoading:K,refetch:W}}}}]);
