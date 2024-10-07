import{d as $,P as X,c as s,G as c,w as u,C as w,Q as Y,R as Z,D as o,ak as ee,I as x,U as P,E as M,al as ae,am as se,W as te,an as ne,r as oe,L as re,i as B,e as _,F as h,J as C,h as k,g as E,t as F,ao as R,f as q,n as A,ap as le,aq as ce,ar as ie,as as ue,a1 as de,at as fe}from"./BY0piCJI.js";import{_ as me}from"./7H1LQrys.js";import{_ as pe}from"./D6O_SmUP.js";const _e=$({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(m,{emit:t}){const a=X(m,t);return(e,y)=>(s(),c(o(ee),Y(Z(o(a))),{default:u(()=>[w(e.$slots,"default")]),_:3},16))}}),ge=$({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const t=m,d=x(()=>{const{class:r,...a}=t;return a});return(r,a)=>(s(),c(o(ae),P({class:o(M)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t.class)},d.value),{default:u(()=>[w(r.$slots,"default")]),_:3},16,["class"]))}}),ve=$({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const t=m,d=x(()=>{const{class:r,...a}=t;return a});return(r,a)=>(s(),c(o(se),P(d.value,{class:o(M)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t.class)}),{default:u(()=>[w(r.$slots,"default")]),_:3},16,["class"]))}}),be=$({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(m){const t=m,d=x(()=>{const{class:a,...e}=t;return e}),r=te(d);return(a,e)=>(s(),c(o(ne),P(o(r),{class:o(M)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t.class)}),{default:u(()=>[w(a.$slots,"default")]),_:3},16,["class"]))}}),$e={class:"relative flex overflow-x-auto border-b p-0.5 text-sm"},ye={class:"flex p-1"},he=["value","onMousedown"],Ce=["value"],xe=$({__name:"Tabs",props:{variant:{default:"separate"},padded:{type:Boolean,default:!0}},setup(m){const t=oe(0),d=new Map(Object.entries(re().value.main.codeIcon));function r(e){var y;return(e==null?void 0:e.icon)||d.get((y=e==null?void 0:e.filename)==null?void 0:y.toLowerCase())||d.get(e==null?void 0:e.language)}function a(e){return(e==null?void 0:e.label)||(e==null?void 0:e.filename)}return(e,y)=>{var V,I,L;const U=de,G=be,J=ve,O=ge,Q=_e,W=me,H=fe,K=pe;return e.variant==="separate"?(s(),c(Q,{key:0,class:"[&:not(:first-child)]:mt-5","default-value":a((L=(((I=(V=e.$slots).default)==null?void 0:I.call(V))??[])[0])==null?void 0:L.props)},{default:u(()=>{var g,v;return[B(J,null,{default:u(()=>{var l,i;return[(s(!0),_(h,null,C(((i=(l=e.$slots).default)==null?void 0:i.call(l))??[],(n,p)=>(s(),c(G,{key:`${p}${a(n.props)}`,value:a(n.props)},{default:u(()=>[r(n==null?void 0:n.props)?(s(),c(U,{key:0,name:r(n==null?void 0:n.props),class:"mr-1.5 self-center"},null,8,["name"])):k("",!0),E(" "+F(a(n.props)),1)]),_:2},1032,["value"]))),128))]}),_:1}),(s(!0),_(h,null,C(((v=(g=e.$slots).default)==null?void 0:v.call(g))??[],(l,i)=>(s(),c(O,{key:`${i}${a(l.props)}`,value:a(l.props)},{default:u(()=>[(s(),c(R(l)))]),_:2},1032,["value"]))),128))]}),_:1},8,["default-value"])):e.variant==="card"?(s(),c(K,{key:1,class:"[&:not(:first-child)]:mt-5"},{default:u(()=>{var g,v;return[B(H,null,{default:u(()=>{var l,i,n,p,b,S,D,N,j,z;return[q("div",$e,[q("div",ye,[(s(!0),_(h,null,C(((i=(l=e.$slots).default)==null?void 0:i.call(l))??[],(f,T)=>(s(),_("div",{key:`${T}${a(f.props)}`,value:a(f.props),class:A(["flex cursor-pointer rounded-md px-3 py-1.5 text-muted-foreground transition-all duration-75",[o(t)===T&&"bg-muted text-primary"]]),onMousedown:le(ke=>t.value=T,["left"])},[r(f==null?void 0:f.props)?(s(),c(U,{key:0,name:r(f==null?void 0:f.props),class:"mr-1.5 self-center"},null,8,["name"])):k("",!0),E(" "+F(a(f.props)),1)],42,he))),128))]),(S=(b=(p=(n=e.$slots).default)==null?void 0:p.call(n)[o(t)])==null?void 0:b.props)!=null&&S.code?(s(),c(W,{key:0,class:"ml-auto mr-3 self-center pl-2",code:(z=(j=(N=(D=e.$slots).default)==null?void 0:N.call(D)[o(t)])==null?void 0:j.props)==null?void 0:z.code},null,8,["code"])):k("",!0)]),B(ce,{orientation:"horizontal"})]}),_:1}),(s(!0),_(h,null,C(((v=(g=e.$slots).default)==null?void 0:v.call(g))??[],(l,i)=>{var n,p,b;return ie((s(),_("div",{key:`${i}${a(l.props)}`,value:a(l.props),class:A(["mt-0",[e.padded&&((b=(p=(n=e.$slots).default)==null?void 0:p.call(n)[o(t)])==null?void 0:b.type).tag!=="pre"&&"p-3"]])},[(s(),c(R(l),{"in-group":!0}))],10,Ce)),[[ue,o(t)===i]])}),128))]}),_:1})):k("",!0)}}});export{xe as _};
