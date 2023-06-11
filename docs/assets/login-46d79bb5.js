import{i as B,a as be,b as fe,d as le,m as me,c as ue,e as j,f as ce,g as he,s as ke,u as pe,h as ve,j as Ie,r as h,k as Ee,l as Le,n as z,w as re,o as ge,p as we,q as _,t as ie,v as l,x as f,y as p,z as m,A as t,B as Q,C as ze,D as $,E as O,F as Ce,G as C,H as ee,I as $e,J as Te,K as Se,L as Ne,M as Oe,N as Fe,O as Re,P as xe,Q as Ve,R as Ae,S as J,T as Be,U as Me,_ as ye,V as M,W as A,X as Ye,Y as _e,Z as Xe,$ as De,a0 as Pe,a1 as He,a2 as Ue,a3 as je,a4 as We,a5 as qe,a6 as Ze,a7 as Ge,a8 as de,a9 as Ke}from"./index-d19cf51d.js";import{d as Je,u as Qe,g as et,E as tt,a as st,b as at}from"./el-input-945ba833.js";const nt=(s,i)=>{if(!B||!s||!i)return!1;const o=s.getBoundingClientRect();let n;return i instanceof Element?n=i.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<n.bottom&&o.bottom>n.top&&o.right>n.left&&o.left<n.right};var ot="Expected a function";function oe(s,i,o){var n=!0,c=!0;if(typeof s!="function")throw new TypeError(ot);return be(o)&&(n="leading"in o?!!o.leading:n,c="trailing"in o?!!o.trailing:c),Je(s,i,{leading:n,maxWait:i,trailing:c})}const lt=fe({urlList:{type:le(Array),default:()=>me([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),rt={close:()=>!0,switch:s=>ue(s)},it=["src"],ut=j({name:"ElImageViewer"}),ct=j({...ut,props:lt,emits:rt,setup(s,{expose:i,emit:o}){const n=s,c={CONTAIN:{name:"contain",icon:ce(he)},ORIGINAL:{name:"original",icon:ce(ke)}},{t:g}=pe(),u=ve("image-viewer"),{nextZIndex:F}=Ie(),k=h(),I=h([]),E=Ee(),v=h(!0),w=h(n.initialIndex),y=Le(c.CONTAIN),d=h({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=z(()=>{const{urlList:e}=n;return e.length<=1}),R=z(()=>w.value===0),W=z(()=>w.value===n.urlList.length-1),te=z(()=>n.urlList[w.value]),X=z(()=>{const{scale:e,deg:a,offsetX:r,offsetY:b,enableTransition:S}=d.value;let L=r/e,N=b/e;switch(a%360){case 90:case-270:[L,N]=[N,-L];break;case 180:case-180:[L,N]=[-L,-N];break;case 270:case-90:[L,N]=[-N,L];break}const V={transform:`scale(${e}) rotate(${a}deg) translate(${L}px, ${N}px)`,transition:S?"transform .3s":""};return y.value.name===c.CONTAIN.name&&(V.maxWidth=V.maxHeight="100%"),V}),se=z(()=>ue(n.zIndex)?n.zIndex:F());function x(){ae(),o("close")}function D(){const e=oe(r=>{switch(r.code){case A.esc:n.closeOnPressEscape&&x();break;case A.space:H();break;case A.left:G();break;case A.up:T("zoomIn");break;case A.right:K();break;case A.down:T("zoomOut");break}}),a=oe(r=>{const b=r.deltaY||r.deltaX;T(b<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});E.run(()=>{M(document,"keydown",e),M(document,"wheel",a)})}function ae(){E.stop()}function ne(){v.value=!1}function q(e){v.value=!1,e.target.alt=g("el.image.error")}function Z(e){if(v.value||e.button!==0||!k.value)return;d.value.enableTransition=!1;const{offsetX:a,offsetY:r}=d.value,b=e.pageX,S=e.pageY,L=oe(V=>{d.value={...d.value,offsetX:a+V.pageX-b,offsetY:r+V.pageY-S}}),N=M(document,"mousemove",L);M(document,"mouseup",()=>{N()}),e.preventDefault()}function P(){d.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function H(){if(v.value)return;const e=Ye(c),a=Object.values(c),r=y.value.name,S=(a.findIndex(L=>L.name===r)+1)%e.length;y.value=c[e[S]],P()}function U(e){const a=n.urlList.length;w.value=(e+a)%a}function G(){R.value&&!n.infinite||U(w.value-1)}function K(){W.value&&!n.infinite||U(w.value+1)}function T(e,a={}){if(v.value)return;const{zoomRate:r,rotateDeg:b,enableTransition:S}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":d.value.scale>.2&&(d.value.scale=Number.parseFloat((d.value.scale/r).toFixed(3)));break;case"zoomIn":d.value.scale<7&&(d.value.scale=Number.parseFloat((d.value.scale*r).toFixed(3)));break;case"clockwise":d.value.deg+=b;break;case"anticlockwise":d.value.deg-=b;break}d.value.enableTransition=S}return re(te,()=>{ge(()=>{const e=I.value[0];e!=null&&e.complete||(v.value=!0)})}),re(w,e=>{P(),o("switch",e)}),we(()=>{var e,a;D(),(a=(e=k.value)==null?void 0:e.focus)==null||a.call(e)}),i({setActiveItem:U}),(e,a)=>(_(),ie(Me,{to:"body",disabled:!e.teleported},[l(Be,{name:"viewer-fade",appear:""},{default:f(()=>[p("div",{ref_key:"wrapper",ref:k,tabindex:-1,class:m(t(u).e("wrapper")),style:Q({zIndex:t(se)})},[p("div",{class:m(t(u).e("mask")),onClick:a[0]||(a[0]=ze(r=>e.hideOnClickModal&&x(),["self"]))},null,2),$(" CLOSE "),p("span",{class:m([t(u).e("btn"),t(u).e("close")]),onClick:x},[l(t(O),null,{default:f(()=>[l(t(Ce))]),_:1})],2),$(" ARROW "),t(Y)?$("v-if",!0):(_(),C(ee,{key:0},[p("span",{class:m([t(u).e("btn"),t(u).e("prev"),t(u).is("disabled",!e.infinite&&t(R))]),onClick:G},[l(t(O),null,{default:f(()=>[l(t($e))]),_:1})],2),p("span",{class:m([t(u).e("btn"),t(u).e("next"),t(u).is("disabled",!e.infinite&&t(W))]),onClick:K},[l(t(O),null,{default:f(()=>[l(t(Te))]),_:1})],2)],64)),$(" ACTIONS "),p("div",{class:m([t(u).e("btn"),t(u).e("actions")])},[p("div",{class:m(t(u).e("actions__inner"))},[l(t(O),{onClick:a[1]||(a[1]=r=>T("zoomOut"))},{default:f(()=>[l(t(Se))]),_:1}),l(t(O),{onClick:a[2]||(a[2]=r=>T("zoomIn"))},{default:f(()=>[l(t(Ne))]),_:1}),p("i",{class:m(t(u).e("actions__divider"))},null,2),l(t(O),{onClick:H},{default:f(()=>[(_(),ie(Oe(t(y).icon)))]),_:1}),p("i",{class:m(t(u).e("actions__divider"))},null,2),l(t(O),{onClick:a[3]||(a[3]=r=>T("anticlockwise"))},{default:f(()=>[l(t(Fe))]),_:1}),l(t(O),{onClick:a[4]||(a[4]=r=>T("clockwise"))},{default:f(()=>[l(t(Re))]),_:1})],2)],2),$(" CANVAS "),p("div",{class:m(t(u).e("canvas"))},[(_(!0),C(ee,null,xe(e.urlList,(r,b)=>Ve((_(),C("img",{ref_for:!0,ref:S=>I.value[b]=S,key:r,src:r,style:Q(t(X)),class:m(t(u).e("img")),onLoad:ne,onError:q,onMousedown:Z},null,46,it)),[[Ae,b===w.value]])),128))],2),J(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var dt=ye(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const ft=_e(dt),mt=fe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:le([String,Object])},previewSrcList:{type:le(Array),default:()=>me([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),pt={load:s=>s instanceof Event,error:s=>s instanceof Event,switch:s=>ue(s),close:()=>!0,show:()=>!0},vt=["src","loading"],gt={key:0},wt=j({name:"ElImage",inheritAttrs:!1}),yt=j({...wt,props:mt,emits:pt,setup(s,{emit:i}){const o=s;let n="";const{t:c}=pe(),g=ve("image"),u=Xe(),F=Qe(),k=h(),I=h(!1),E=h(!0),v=h(!1),w=h(),y=h(),d=B&&"loading"in HTMLImageElement.prototype;let Y,R;const W=z(()=>u.style),te=z(()=>{const{fit:e}=o;return B&&e?{objectFit:e}:{}}),X=z(()=>{const{previewSrcList:e}=o;return Array.isArray(e)&&e.length>0}),se=z(()=>{const{previewSrcList:e,initialIndex:a}=o;let r=a;return a>e.length-1&&(r=0),r}),x=z(()=>o.loading==="eager"?!1:!d&&o.loading==="lazy"||o.lazy),D=()=>{B&&(E.value=!0,I.value=!1,k.value=o.src)};function ae(e){E.value=!1,I.value=!1,i("load",e)}function ne(e){E.value=!1,I.value=!0,i("error",e)}function q(){nt(w.value,y.value)&&(D(),H())}const Z=je(q,200,!0);async function P(){var e;if(!B)return;await ge();const{scrollContainer:a}=o;He(a)?y.value=a:Ue(a)&&a!==""?y.value=(e=document.querySelector(a))!=null?e:void 0:w.value&&(y.value=et(w.value)),y.value&&(Y=M(y,"scroll",Z),setTimeout(()=>q(),100))}function H(){!B||!y.value||!Z||(Y==null||Y(),y.value=void 0)}function U(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function G(){X.value&&(R=M("wheel",U,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",v.value=!0,i("show"))}function K(){R==null||R(),document.body.style.overflow=n,v.value=!1,i("close")}function T(e){i("switch",e)}return re(()=>o.src,()=>{x.value?(E.value=!0,I.value=!1,H(),P()):D()}),we(()=>{x.value?P():D()}),(e,a)=>(_(),C("div",{ref_key:"container",ref:w,class:m([t(g).b(),e.$attrs.class]),style:Q(t(W))},[I.value?J(e.$slots,"error",{key:0},()=>[p("div",{class:m(t(g).e("error"))},De(t(c)("el.image.error")),3)]):(_(),C(ee,{key:1},[k.value!==void 0?(_(),C("img",Pe({key:0},t(F),{src:k.value,loading:e.loading,style:t(te),class:[t(g).e("inner"),t(X)&&t(g).e("preview"),E.value&&t(g).is("loading")],onClick:G,onLoad:ae,onError:ne}),null,16,vt)):$("v-if",!0),E.value?(_(),C("div",{key:1,class:m(t(g).e("wrapper"))},[J(e.$slots,"placeholder",{},()=>[p("div",{class:m(t(g).e("placeholder"))},null,2)])],2)):$("v-if",!0)],64)),t(X)?(_(),C(ee,{key:2},[v.value?(_(),ie(t(ft),{key:0,"z-index":e.zIndex,"initial-index":t(se),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:K,onSwitch:T},{default:f(()=>[e.$slots.viewer?(_(),C("div",gt,[J(e.$slots,"viewer")])):$("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):$("v-if",!0)],64)):$("v-if",!0)],6))}});var _t=ye(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const bt=_e(_t);const ht=s=>We.request({url:"api/mobile/elogin",method:"post",data:s});const kt=j({setup(){return{src:h("../../src/assets/logo.png")}},data(){return{n:30,userForm:{email:"",password:""},rules:{email:[{required:!0,message:"请输入正确的电子邮箱",trigger:"blur"},{type:"email",message:"电子邮箱格式错误",trigger:"blur"}],password:[{required:!0,message:"请输入正确的用户密码",trigger:"blur"},{min:8,message:"密码长度不得小于8个字符",trigger:"blur"}]}}},mounted(){},methods:{...Ze(Ge,["setToken","fillUserinfo"]),btnLogin(){const s=this,i=s.$refs.ruleFormRef;i&&i.validate(o=>{if(o)ht(s.userForm).then(c=>{if(c.success){const g=c.data.userinfo;console.log(s),s.setToken(g.token),s.fillUserinfo(g),s.$router.push("/Test")}else return!1}).catch(c=>{console.log(c)});else return console.log("error submit!"),!1})},resetForm(){this.$refs.ruleFormRef.resetFields()}}}),It={class:"login"},Et={class:"login-form"},Lt={class:"login-form-logo"};function zt(s,i,o,n,c,g){const u=bt,F=st,k=at,I=Ke,E=tt;return _(),C("div",{style:Q({backgroundImage:"url(/src/assets/6.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"})},[p("div",It,[p("div",Et,[p("div",Lt,[l(u,{src:s.src,fit:"fill",lazy:!0},null,8,["src"])]),l(E,{ref:"ruleFormRef",model:s.userForm,"status-icon":"",rules:s.rules,class:"login-ruleForm"},{default:f(()=>[l(k,{prop:"email"},{default:f(()=>[l(F,{modelValue:s.userForm.email,"onUpdate:modelValue":i[0]||(i[0]=v=>s.userForm.email=v),autocomplete:"off",placeholder:"请输入你的用户邮箱","suffix-icon":"Message"},null,8,["modelValue"])]),_:1}),l(k,{prop:"password"},{default:f(()=>[l(F,{modelValue:s.userForm.password,"onUpdate:modelValue":i[1]||(i[1]=v=>s.userForm.password=v),type:"password",autocomplete:"off",placeholder:"请输入你的用户密码","suffix-icon":"Lock"},null,8,["modelValue"])]),_:1}),l(k,{class:"login-form-btns"},{default:f(()=>[l(I,{type:"primary",onClick:s.btnLogin,index:"/Test"},{default:f(()=>[de("用户登录")]),_:1},8,["onClick"]),l(I,{onClick:s.resetForm},{default:f(()=>[de("重置")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])],4)}const Tt=qe(kt,[["render",zt],["__scopeId","data-v-d42765d5"]]);export{Tt as default};
