(self.webpackChunk_67_ced_10_strapi=self.webpackChunk_67_ced_10_strapi||[]).push([[4648],{59576:(C,f,n)=>{var l,D;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(i){var d;if(l=i,D=typeof l=="function"?l.call(f,n,f,C):l,D!==void 0&&(C.exports=D),d=!0,C.exports=i(),d=!0,!d){var O=window.Cookies,t=window.Cookies=i();t.noConflict=function(){return window.Cookies=O,t}}})(function(){function i(){for(var t=0,E={};t<arguments.length;t++){var M=arguments[t];for(var P in M)E[P]=M[P]}return E}function d(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function O(t){function E(){}function M(_,s,o){if(!(typeof document>"u")){o=i({path:"/"},E.defaults,o),typeof o.expires=="number"&&(o.expires=new Date(new Date*1+o.expires*864e5)),o.expires=o.expires?o.expires.toUTCString():"";try{var v=JSON.stringify(s);/^[\{\[]/.test(v)&&(s=v)}catch{}s=t.write?t.write(s,_):encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),_=encodeURIComponent(String(_)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var e="";for(var r in o)o[r]&&(e+="; "+r,o[r]!==!0&&(e+="="+o[r].split(";")[0]));return document.cookie=_+"="+s+e}}function P(_,s){if(!(typeof document>"u")){for(var o={},v=document.cookie?document.cookie.split("; "):[],e=0;e<v.length;e++){var r=v[e].split("="),a=r.slice(1).join("=");!s&&a.charAt(0)==='"'&&(a=a.slice(1,-1));try{var I=d(r[0]);if(a=(t.read||t)(a,I)||d(a),s)try{a=JSON.parse(a)}catch{}if(o[I]=a,_===I)break}catch{}}return _?o[_]:o}}return E.set=M,E.get=function(_){return P(_,!1)},E.getJSON=function(_){return P(_,!0)},E.remove=function(_,s){M(_,"",i(s,{expires:-1}))},E.defaults={},E.withConverter=O,E}return O(function(){})})},44648:(C,f,n)=>{"use strict";n.r(f),n.d(f,{ADMIN_PERMISSIONS_EE:()=>W,ROUTES_EE:()=>m,SETTINGS_LINKS_EE:()=>h});var l=n(19968),D=n(62552),i=n(50648),d=n(59576),O=n(14632),t=n(49008),E=n(63952),M=n(54320),P=n(5240),_=n(91892),s=n(36196),o=n(20880),v=n(21424),e=n(70516),r=n(31812),a=n(18424),I=n(52540),U=n(21968),K=n(12132),c=n(48632),S=n(85676),p=n(35184),j=n(99568),w=n(96556),x=n(13192),N=n(30840),y=n(77784),F=n(79371),z=n(67888),G=n(52600),J=n(95752),V=n(37388),Y=n(61840),Z=n(49108),$=n(44632),H=n(50840),Q=n(20252),X=n(86432),k=n(22612),b=n(24808),q=n(24024),nn=n(40960),on=n(33656),tn=n(43280),_n=n(79804),En=n(19632),sn=n(29576),an=n(61152),dn=n(9589),en=n(45488),rn=n(75516);const B=()=>{const T=(0,t.SU)("/auth/login/:authResponse"),{formatMessage:u}=(0,O.c)(),{push:R}=(0,t.Uz)(),L=D.useCallback(()=>{R(`/auth/oops?info=${encodeURIComponent(u({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[R,u]),g=(0,E.a)("AuthResponse",A=>A.setToken);return D.useEffect(()=>{if(T?.params.authResponse==="error"&&L(),T?.params.authResponse==="success"){const A=d.get("jwtToken");A?(g(A),d.remove("jwtToken"),R("/auth/login")):L()}},[T,L,g,R]),(0,l.jsx)(i.Wm,{})},W={settings:{auditLogs:{main:[{action:"admin::audit-logs.read",subject:null}],read:[{action:"admin::audit-logs.read",subject:null}],update:[{action:"admin::audit-logs.update",subject:null}]},"review-workflows":{main:[{action:"admin::review-workflows.read",subject:null}],read:[{action:"admin::review-workflows.read",subject:null}],create:[{action:"admin::review-workflows.create",subject:null}],delete:[{action:"admin::review-workflows.delete",subject:null}],update:[{action:"admin::review-workflows.update",subject:null}]},sso:{main:[{action:"admin::provider-login.read",subject:null}],read:[{action:"admin::provider-login.read",subject:null}],update:[{action:"admin::provider-login.update",subject:null}]}}},m=[{Component:()=>({default:B}),to:"/auth/login/:authResponse",exact:!0}],h=()=>({global:[...window.strapi.features.isEnabled(window.strapi.features.SSO)?[{intlLabel:{id:"Settings.sso.title",defaultMessage:"Single Sign-On"},to:"/settings/single-sign-on",id:"sso"}]:[],...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)?[{intlLabel:{id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"},to:"/settings/review-workflows",id:"review-workflows"}]:[]],admin:[...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)?[{intlLabel:{id:"global.auditLogs",defaultMessage:"Audit Logs"},to:"/settings/audit-logs?pageSize=50&page=1&sort=date:DESC",id:"auditLogs"}]:[]]})}}]);
