import{d as C,L as b,c as t,G as r,w as m,e as d,D as u,h as n,g as v,t as x,i as a,f,n as g,C as S,aq as k,a1 as w,at as G}from"./BY0piCJI.js";import{_ as $}from"./7H1LQrys.js";import{_ as B}from"./D6O_SmUP.js";const N={key:0,class:"flex border-b p-3 font-mono text-sm"},V={key:1,class:"absolute right-3 top-3 z-10"},z={class:"bg-muted/30"},M=C({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},inGroup:{type:Boolean,default:!1},highlights:{type:Array,default:()=>[]}},setup(e){var c;const o=e,s=new Map(Object.entries(b().value.main.codeIcon)),l=s.get((c=o.filename)==null?void 0:c.toLowerCase())||s.get(o.language);return(h,A)=>{const p=w,i=$,y=G,_=B;return t(),r(_,{class:g(["relative overflow-hidden [&:not(:first-child)]:mt-5 [&:not(:last-child)]:mb-5",[e.inGroup&&"mb-0 rounded-t-none border-none"]])},{default:m(()=>[!e.inGroup&&e.filename?(t(),d("div",N,[u(l)?(t(),r(p,{key:0,name:u(l),class:"mr-1.5 self-center"},null,8,["name"])):n("",!0),v(" "+x(e.filename)+" ",1),a(i,{code:e.code,class:"ml-auto mr-1"},null,8,["code"])])):n("",!0),e.filename?n("",!0):(t(),d("span",V,[a(i,{code:e.code},null,8,["code"])])),f("div",z,[a(y,null,{default:m(()=>[f("div",{class:g(["overflow-x-auto py-3 text-sm",[!e.inGroup&&!e.filename&&"inline-copy",!e.language&&"pl-3",!e.inGroup]])},[S(h.$slots,"default")],2),a(k,{orientation:"horizontal"})]),_:3})])]),_:3},8,["class"])}}});export{M as _};
