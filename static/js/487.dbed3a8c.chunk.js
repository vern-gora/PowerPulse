"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[487],{3487:(e,a,l)=>{l.r(a),l.d(a,{default:()=>$});var s=l(3855),i=l(4217),r=l(5705),t=l(8007),n=l(9273);const d="RadioOption_radio__OZsP-",c="RadioOption_radio_input__BOryR",o="RadioOption_radio_label__CBeMP";var _=l(184);const m=e=>{let{id:a,name:l,value:s,label:i,onChange:r}=e;return(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("input",{className:c,type:"radio",id:a,name:l,value:s,onChange:r}),(0,_.jsx)("label",{className:o,htmlFor:a,children:i})]})},h="UserForm_form_container__1faXX",u="UserForm_section_title__PHNHu",p="UserForm_input__qGgJS",v="UserForm_input_field__zsA2L",x="UserForm_wrapper_input_field__lNWmu",g="UserForm_wrapper_input__YlfRd",j="UserForm_wrapper_radio__4FX5R",y="UserForm_wrapper_level__l-QaO",b="UserForm_button__pDShj",N=()=>{var e,a;const l=(0,s.I0)(),d=(0,s.v9)(i.dy),c=(0,s.v9)(i.$y),o=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],N=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],f=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],w={name:d.name||"Name",height:d.height||"150",currentWeight:d.currentWeight||"35",desiredWeight:d.desiredWeight||"35",blood:(null!==(e=d.blood)&&void 0!==e?e:"1").toString()||"1",sex:d.sex||"male",levelActivity:(null!==(a=d.levelActivity)&&void 0!==a?a:"1").toString()||"1"},k=t.Ry({name:t.Z_().required("Name is required"),height:t.Rx().positive("Height must me positive").required("Height is requeired"),currentWeight:t.Rx().positive("Weight must be positive").required("Current weight is required"),desiredWeight:t.Rx().positive("Weight must be positive").required("Desired weight is required")});return(0,_.jsx)(r.J9,{initialValues:w,validationSchema:k,onSubmit:e=>{const a={...e,birthday:"1990-01-01"};c?(console.log("put"),l((0,n.KL)(a))):(console.log("patch"),l((0,n.IO)(a)))},children:e=>(0,_.jsxs)(r.l0,{children:[(0,_.jsxs)("div",{className:h,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:u,children:"Basic info"}),(0,_.jsx)("input",{className:p,name:"name",type:"text",placeholder:"Name",defaultValue:d.name,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]}),(0,_.jsx)("div",{children:(0,_.jsx)("input",{className:p,type:"text",name:"email",placeholder:"Email",defaultValue:d.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})})]}),(0,_.jsxs)("div",{className:x,children:[(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)("p",{className:u,children:"Height"}),(0,_.jsx)("input",{className:v,type:"number",name:"height",id:"height",placeholder:"0"})]}),(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)("p",{className:u,children:"Current Weight"}),(0,_.jsx)("input",{className:v,type:"number",name:"currentWeight",id:"currentWeight",placeholder:"0"})]}),(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)("p",{className:u,children:"Desired Weight"}),(0,_.jsx)("input",{type:"number",className:v,name:"desiredWeight",id:"desiredWeight",placeholder:"0"}),(0,_.jsx)("input",{type:"number",className:v,name:"desiredWeight",id:"desiredWeight",placeholder:"0"})]})]}),(0,_.jsxs)("div",{className:j,children:[(0,_.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginRight:"20px"},children:[(0,_.jsx)("p",{className:u,children:"Blood"}),(0,_.jsxs)("div",{style:{fontFamily:"Roboto",display:"flex",flexDirection:"row",marginRight:"20px",marginBottom:"32px"},children:[o.map((a=>(0,_.jsx)(m,{style:{fontFamily:"Roboto"},id:a.id,name:"blood",checked:e.values.blood===a.value,label:a.label,onChange:()=>e.setFieldValue("blood",a.value)},a.id))),N.map((a=>(0,_.jsx)(m,{id:a.id,name:"sex",checked:e.values.sex===a.value,label:a.label,onChange:()=>e.setFieldValue("sex",a.value)},a.id)))]})]}),(0,_.jsx)("div",{"\u0441lassName":y,children:f.map((a=>(0,_.jsx)(m,{id:a.id,name:"levelActivity",checked:e.values.levelActivity===a.value,label:a.label,onChange:()=>e.setFieldValue("levelActivity",a.value)},a.id)))})]}),(0,_.jsx)("button",{className:b,type:"submit",children:"Save"})]})})};var f=l(5125);const w="UserCard_main_wrapper__0gr+Q",k="UserCard_wrap_avatar__TA5qY",U="UserCard_avatar__RIaQC",C="UserCard_avatar_svg__oUr1O",F="UserCard_button__61Mjl",W="UserCard_icon_btn__SeqOG",D="UserCard_title_name__Jkmls",P="UserCard_subtitle__CPN-+";var q=l(5984);const R=()=>{const e=(0,s.I0)(),a=(0,s.v9)(i.dy),l=(0,q.x0)();return(0,_.jsxs)("div",{className:w,children:[(0,_.jsx)("div",{className:k,children:a.avatarUrl?(0,_.jsx)("img",{src:a.avatarUrl,alt:"Avatar",className:U}):(0,_.jsx)("svg",{className:C,children:(0,_.jsx)("use",{href:f.Z+"#avatar_icon"})})}),(0,_.jsxs)("form",{id:"upload-form",children:[(0,_.jsx)("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:a=>{const s=new FormData;s.append("avatar",a.target.files[0],l),e((0,n.n1)(s))}}),(0,_.jsx)("label",{htmlFor:"file-input",children:(0,_.jsx)("div",{className:F,children:(0,_.jsx)("svg",{className:W,children:(0,_.jsx)("use",{href:"".concat(f.Z,"#check_mark_icon")})})})})]}),(0,_.jsx)("p",{className:D,children:a.name?a.name:"User"}),(0,_.jsx)("p",{className:P,children:"User"})]})},S="ProfilePage_container__HAlWm",B="ProfilePage_title__qrAwv",A="ProfilePage_wrapper__avBB+",M="ProfilePage_wrapper_content__nSBrY",O="ProfilePage_wrapper_form__vlDSB",I="Daily_container__UOJ5v",L="Daily_wrapper__bD6VD",V="Daily_svg__ltmA3",E="Daily_text__b8M9e",H="Daily_value__ck7FE",Z=e=>{let{color:a,iconId:l,text:s,value:i}=e;return(0,_.jsxs)("div",{className:I,style:{backgroundColor:"".concat(a)},children:[(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)("svg",{className:V,children:(0,_.jsx)("use",{href:"".concat(f.Z,"#").concat(l)})}),(0,_.jsx)("p",{className:E,children:s})]}),(0,_.jsx)("p",{className:H,children:i})]})},J={wrappers:"ExclamationMark_wrappers__nHqQe",wrapper:"ExclamationMark_wrapper__cxsFK",icon_mark:"ExclamationMark_icon_mark__PcIel",text:"ExclamationMark_text__z+Dt7"},Q=()=>(0,_.jsx)("div",{className:J.wrappers,children:(0,_.jsxs)("div",{className:J.wrapper,children:[(0,_.jsx)("div",{className:J.wrapper_mark,children:(0,_.jsx)("svg",{className:J.icon_mark,children:(0,_.jsx)("use",{href:"".concat(f.Z,"#exclamation_mark_icon")})})}),(0,_.jsx)("p",{className:J.text,children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})});var T=l(1087);const Y="LogoutBtn_log_out_link__lY8Li",G="LogoutBtn_btn__TITsM",X="LogoutBtn_icon_wrap__3mq8G",z="LogoutBtn_icon__WL2-F",K=()=>{const e=(0,s.I0)();return(0,_.jsx)(T.rU,{to:"/",onClick:()=>e((0,n.ni)()),className:Y,children:(0,_.jsx)("span",{className:G,children:(0,_.jsxs)("label",{className:X,children:["Logout\xa0",(0,_.jsx)("svg",{className:z,children:(0,_.jsx)("use",{href:"".concat(f.Z,"#log_out_icon")})})]})})})},$=()=>{const e=(0,s.v9)(i.dy);return(0,_.jsxs)("div",{className:S,children:[(0,_.jsx)("h2",{className:B,children:"Profile Settings"}),(0,_.jsxs)("div",{className:M,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(R,{}),(0,_.jsxs)("div",{className:A,children:[(0,_.jsx)(Z,{color:"var(--orange-main-color)",iconId:"fluent_food_icon",text:"Daily calorie intake",value:"110 min"}),(0,_.jsx)(Z,{color:"var(--orange-main-color)",iconId:"dumbbell_icon",text:"Daily norm of sports",value:Math.round(e.bmr)||0})]}),(0,_.jsx)(Q,{}),(0,_.jsx)(K,{})]}),(0,_.jsx)("div",{className:O,children:(0,_.jsx)(N,{})})]})]})}},4217:(e,a,l)=>{l.d(a,{$y:()=>i,dy:()=>s});const s=e=>e.auth.user,i=e=>e.auth.goToParams},5984:(e,a,l)=>{l.d(a,{x0:()=>s});let s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce(((e,a)=>e+=(a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_"),"")}}}]);
//# sourceMappingURL=487.dbed3a8c.chunk.js.map