import{a7 as $,a4 as p,a5 as U,e as B,aa as u,q as c,G as g,v as t,x as a,Q as L,ab as W,y as b,a9 as N,a8 as i,H as Q,P as T,t as A}from"./index-d19cf51d.js";import{a as S,b as M,E as z}from"./el-table-column-275684a4.js";import{a as G,b as H,E as O}from"./el-input-945ba833.js";import{a as P,E as j}from"./el-select-904eb826.js";import{E as r}from"./index-306eeaa4.js";import{c as J}from"./cloneDeep-956b7e5e.js";import"./validator-af3f0aef.js";const K=$(),R=K.token,v={Authorization:"Bearer "+R},X=e=>p.request({url:"api/survey-question/add",method:"post",headers:v,data:e}),Y=e=>p.request({url:"api/survey-question/all",method:"get",params:e}),Z=e=>p.request({url:"api/survey-question/delete/"+e.id,method:"get",headers:v}),x=e=>p.request({url:"api/survey-question/edit",method:"post",data:e}),ee=e=>p.request({url:"api/survey-question/one/"+e}),m={add:X,all:Y,remove:Z,update:x,one:ee},te=B({data(){return{options:[{value:"5,118,7,8",label:"5,118,7,8"},{value:"1,2,3,117,4",label:"1,2,3,117,4"},{value:"9,11,16,32,89,63",label:"9,11,16,32,89,63"},{value:"4,6,12,33,34,65,70",label:"4,6,12,33,34,65,70"},{value:"22,31,30,27,24,23",label:"22,31,30,27,24,23"},{value:"40,46,55,56,64",label:"40,46,55,56,64"},{value:"39,41,46,58,60,72",label:"39,41,46,58,60,72"},{value:"101,104,109,187,210",label:"101,104,109,187,210"},{value:"77,79,83,88,89,91,99",label:"77,79,83,88,89,91,99"}],list:[],question:{content:"",description:"",id:0,surveyCateId:0,surveyItemIds:"",userId:0},dialogFormVisible:!1}},mounted(){this.showData()},methods:{showData(){m.all().then(e=>{console.log(e.data.surveyQuestions),this.list=e.data.surveyQuestions})},rein(){location.reload()},onInputNumber(){this.search=this.search.replace(/[^0-9]/g,"")},toDelete(e){console.log(e);const l={id:e};m.remove(l).then(h=>{if(h.success)this.showData();else return console.log(h.msg),!1}).catch(h=>{})},search(e){m.one(e).then(l=>{console.log(l),this.list=[],this.list.push(l.data.surveyQuestion),console.log(this.list)}).catch(l=>{console.log(l),r("未找到该学生")})},toEdit(e){console.log(e),this.dialogFormVisible=!0,this.question=J(e)},toAdd(){this.question={content:"",description:"",id:0,surveyCateId:0,surveyItemIds:"",userId:0},this.dialogFormVisible=!0},confirm(){this.question.id==0?m.add(this.question).then(e=>{if(e.success)this.dialogFormVisible=!1,this.showData(),r(e.msg);else return r(e.msg),!1}).catch(e=>{r("网络错误联系管理员")}):m.update(this.question).then(e=>{if(e.success)this.dialogFormVisible=!1,this.showData(),r(e.msg);else return r(e.msg),!1}).catch(e=>{r("网络错误联系管理员")})}}}),le={class:"table"},oe={class:"dialog-footer"};function ae(e,l,h,se,ne,ie){const y=u("refresh"),s=N,w=u("circle-plus"),V=u("search"),n=z,q=u("edit"),I=u("delete"),k=S,f=G,d=H,C=j,_=P,E=O,F=M;return c(),g("div",null,[t(s,{onClick:e.rein},{default:a(()=>[t(y,{style:{width:"1em",height:"1em","margin-right":"8px"}}),i("刷新 ")]),_:1},8,["onClick"]),t(s,{style:{float:"right","margin-left":"50px"},onClick:e.toAdd},{default:a(()=>[t(w,{style:{width:"1em",height:"1em","margin-right":"8px"}}),i("添加")]),_:1},8,["onClick"]),L(b("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=o=>e.keyword=o),style:{width:"500px","margin-left":"50px"},placeholder:"输入id搜索"},null,512),[[W,e.keyword]]),t(s,{onClick:l[1]||(l[1]=o=>e.search(e.keyword)),style:{width:"4em",height:"2em","margin-right":"10px"}},{default:a(()=>[t(V,{style:{width:"1em",height:"1em","margin-right":"8px"}}),i("搜索 ")]),_:1}),b("div",le,[t(k,{data:e.list},{default:a(()=>[t(n,{fixed:"",prop:"id",label:"id",align:"center"}),t(n,{prop:"content",label:"问题试卷",align:"center"}),t(n,{prop:"surveyCateId",label:"问卷类型",align:"center"}),t(n,{prop:"description",label:"问卷说明",align:"center"}),t(n,{prop:"surveyItemIds",label:"调查问卷项",align:"center"}),t(n,{prop:"userId",label:"用户编号",align:"center"}),t(n,{fixed:"right",label:"操作",width:"200"},{default:a(o=>[t(s,{onClick:D=>e.toEdit(o.row),type:"primary"},{default:a(()=>[t(q,{style:{width:"1em",height:"1em","margin-right":"8px"}}),i("修改 ")]),_:2},1032,["onClick"]),t(s,{onClick:D=>e.toDelete(o.row.id),type:"danger"},{default:a(()=>[t(I,{style:{width:"1em",height:"1em","margin-right":"8px"}}),i("删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),t(F,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[9]||(l[9]=o=>e.dialogFormVisible=o),title:"问卷问题编辑"},{footer:a(()=>[b("span",oe,[t(s,{onClick:l[7]||(l[7]=o=>e.dialogFormVisible=!1)},{default:a(()=>[i("取消")]),_:1}),t(s,{type:"primary",onClick:l[8]||(l[8]=o=>e.confirm())},{default:a(()=>[i(" 确定 ")]),_:1})])]),default:a(()=>[t(E,{model:e.question},{default:a(()=>[t(d,{label:"问卷试卷","label-width":e.formLabelWidth},{default:a(()=>[t(f,{modelValue:e.question.content,"onUpdate:modelValue":l[2]||(l[2]=o=>e.question.content=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"问卷类型","label-width":e.formLabelWidth},{default:a(()=>[t(f,{modelValue:e.question.surveyCateId,"onUpdate:modelValue":l[3]||(l[3]=o=>e.question.surveyCateId=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"问卷说明","label-width":e.formLabelWidth},{default:a(()=>[t(f,{modelValue:e.question.description,"onUpdate:modelValue":l[4]||(l[4]=o=>e.question.description=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"调查问卷项","label-width":e.formLabelWidth},{default:a(()=>[t(_,{modelValue:e.question.surveyItemIds,"onUpdate:modelValue":l[5]||(l[5]=o=>e.question.surveyItemIds=o),placeholder:"请选择问卷项"},{default:a(()=>[(c(!0),g(Q,null,T(e.options,o=>(c(),A(C,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"用户编号","label-width":e.formLabelWidth},{default:a(()=>[t(f,{modelValue:e.question.userId,"onUpdate:modelValue":l[6]||(l[6]=o=>e.question.userId=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])])}const ce=U(te,[["render",ae]]);export{ce as default};