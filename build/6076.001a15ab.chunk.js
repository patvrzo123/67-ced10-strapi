"use strict";(self.webpackChunk_67_ced_10_strapi=self.webpackChunk_67_ced_10_strapi||[]).push([[6076],{86076:(c,M,_)=>{_.r(M),_.d(M,{AdminSeatInfoEE:()=>K});var E=_(19968),i=_(70996),t=_(63358),D=_(48936),l=_(70544),L=_(55716),C=_(5540),a=_(50648),A=_(30048),I=_(73648),v=_(14632),B=_(70516),U=_(72704),R=_(63952),N=_(62552),F=_(17892),G=_(31212),H=_(35184),z=_(85676),V=_(96556),J=_(54320),Q=_(5240),X=_(91892),Y=_(36196),Z=_(20880),$=_(21424),e=_(31812),p=_(18424),u=_(52540),k=_(21968),w=_(12132),b=_(48632),q=_(99568),__=_(13192),E_=_(30840),s_=_(77784),t_=_(79371),a_=_(67888),O_=_(52600),M_=_(95752),D_=_(37388),n_=_(61840),P_=_(49108),o_=_(44632),d_=_(50840),i_=_(20252),l_=_(86432),L_=_(22612),C_=_(24808),A_=_(24024),I_=_(40960),v_=_(33656),B_=_(43280),U_=_(79804),R_=_(19632),T_=_(29576),W_=_(61152),K_=_(9589),m_=_(45488),h_=_(75516);const T="https://cloud.strapi.io/profile/billing",W="https://strapi.io/billing/request-seats",K=()=>{const{formatMessage:s}=(0,v.c)(),{settings:m}=(0,B.w1)(U.s),{isLoading:n,allowedActions:{canRead:h,canCreate:r,canUpdate:g,canDelete:f}}=(0,a.aU)(m?.users??{}),{license:P,isError:x,isLoading:j}=(0,R.m)({enabled:!n&&h&&r&&g&&f});if(x||(n||j)||!P)return null;const{licenseLimitStatus:S,enforcementUserCount:o,permittedSeats:O,isHostedOnStrapiCloud:d}=P;return O?(0,E.jsxs)(i.C,{col:6,s:12,children:[(0,E.jsx)(t.O,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,E.jsxs)(D.C,{gap:2,children:[(0,E.jsx)(D.C,{children:(0,E.jsx)(t.O,{as:"p",children:s({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:O,enforcementUserCount:o,text:y=>(0,E.jsx)(t.O,{fontWeight:"semiBold",textColor:o>O?"danger500":void 0,children:y})})})}),S==="OVER_LIMIT"&&(0,E.jsx)(l.o,{description:s({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,E.jsx)(L.G,{width:(0,a.W8)(14),height:(0,a.W8)(14),color:"danger500",as:A.c})})]}),(0,E.jsx)(C.c,{href:d?T:W,isExternal:!0,endIcon:(0,E.jsx)(I.c,{}),children:s({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:d})})]}):null}}}]);
