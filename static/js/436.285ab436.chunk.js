"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{3436:(e,s,t)=>{t.r(s),t.d(s,{default:()=>P});var c=t(2791);const a="TitleExercise_title__wTcBM",i="TitleExercise_containerTitle__bhR38";var r=t(3855),n=t(184);const l=()=>{const e=(0,r.v9)((e=>e.exercises.title));return(0,n.jsx)("div",{className:i,children:(0,n.jsx)("h1",{className:a,children:e})})},o={bg:"ExercisesCategories_bg__Jzenr",btnCategories:"ExercisesCategories_btnCategories__McsvH",active:"ExercisesCategories_active__wLLFi",phContainer:"ExercisesCategories_phContainer__pYZLL",imageContainer:"ExercisesCategories_imageContainer__DCwIr",img:"ExercisesCategories_img__W-xOn",imageText:"ExercisesCategories_imageText__5Gcuy",categoryName:"ExercisesCategories_categoryName__NqeJW",categoryButtons:"ExercisesCategories_categoryButtons__baPbD",title:"ExercisesCategories_title__uKXDh"},x=e=>{let{data:s,onClick:t}=e;return(0,n.jsxs)("div",{className:o.imageContainer,onClick:()=>{t(s)},children:[(0,n.jsx)("img",{className:o.img,src:s.imgURL,alt:s.name}),(0,n.jsx)("p",{className:o.imageText,children:s.name}),(0,n.jsx)("p",{className:o.categoryName,children:s.filter})]})},_="ExercissesItem_exercises-item-box__Tjd0C",d="ExercissesItem_exercises-item__tJvJv",m="ExercissesItem_exercise-top__OdKZV",h="ExercissesItem_exercise-middle__8LcSW",u="ExercissesItem_exercise-bottom__nDGmQ",g="ExercissesItem_cardRunningIcon__dLItf",j="ExercissesItem_data-name__h8oKF",v="ExercissesItem_data-value__IL986",N="ExercissesItem_workout-title__uoN3u",E="ExercissesItem_start-button__DBApo",p="ExercissesItem_arrow-svg__Ezn1P",C="ExercissesItem_workout-container__n-1pv",b="ExercissesItem_button-svg-container__yB0c3",y="ExercissesItem_data-name-middle__beqra",I="ExercissesItem_exercises-photo__OLo2F";var k=t(5125),f=t(4796);const w=e=>{let{selectedExercises:s}=e;const[t,a]=(0,c.useState)(!1),[i,r]=(0,c.useState)(null);return(0,n.jsx)("div",{className:I,children:(0,n.jsxs)("div",{className:_,children:[s.map((e=>(0,n.jsxs)("div",{className:d,children:[(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("div",{className:C,children:(0,n.jsx)("h3",{className:N,children:"WORKOUT"})}),(0,n.jsxs)("button",{style:{cursor:"pointer"},onClick:()=>{(e=>{r(e),a(!0)})(e)},className:b,children:[(0,n.jsx)("div",{className:E,children:"Start"}),(0,n.jsx)("svg",{className:p,children:(0,n.jsx)("use",{href:k.Z+"#icon-arrow-right"})})]})]}),(0,n.jsxs)("div",{className:h,children:[(0,n.jsx)("svg",{className:g,width:"24",height:"24",children:(0,n.jsx)("use",{href:k.Z+"#running_stick_figure_icon"})}),(0,n.jsx)("p",{className:y,children:(0,n.jsx)("span",{className:v,children:e.equipment})})]}),(0,n.jsxs)("div",{className:u,children:[(0,n.jsxs)("p",{className:j,children:["Target:"," ",(0,n.jsx)("span",{className:v,children:e.target})]}),(0,n.jsxs)("p",{className:j,children:["Body Part:"," ",(0,n.jsx)("span",{className:v,children:e.bodyPart})]}),(0,n.jsxs)("p",{className:j,children:["Burned Calories:"," ",(0,n.jsx)("span",{className:v,children:e.burnedCalories})]})]})]},e._id))),t&&(0,n.jsx)(f.Z,{dataEx:i,closeFunc:()=>{a(!1)}})]})})};var B=t(3430),L=t(4480);const S="ExercisesSubcategoriesList_backBtn__aUi2W";var T=t(4695);const q=e=>{let{subcategory:s}=e;const t=(0,r.I0)(),[a,i]=(0,c.useState)([]),[l,_]=(0,c.useState)(!0),[d,m]=(0,c.useState)(null),h=(0,r.v9)((e=>e.exercises.filters));let u=(0,r.v9)((e=>e.exercises.exercises));(0,c.useEffect)((()=>{const e=h.filter((e=>e.filter===s));e&&_(!1),e||_(!0),i(e)}),[s,h]);return(0,n.jsxs)("div",{style:{position:"relative"},children:[d&&(0,n.jsxs)("button",{className:S,type:"button",onClick:()=>{m(null),t((0,T.X)("Exercise"))},children:[(0,n.jsx)("svg",{className:o["arrow-svg"],children:(0,n.jsx)("use",{href:k.Z+"#icon-back-arrow"})}),(0,n.jsx)("div",{className:o["icon-back-arrow"],children:"back"})]}),l?(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,n.jsx)(B._P,{height:"100",width:"100",color:"#e6533c",ariaLabel:"rings-loading"})}):(0,n.jsx)("div",{children:d?(0,n.jsx)(w,{selectedExercises:d}):(0,n.jsx)("div",{className:o.phContainer,children:a.map((e=>(0,n.jsx)(x,{data:e,onClick:()=>(async(e,s)=>{const{name:c}=s,a=c.toLowerCase();"Body parts"===e&&t((0,L.$r)(a)),"Muscles"===e&&t((0,L.FJ)(a)),"Equipment"===e&&t((0,L.oi)(a)),t((0,T.X)(c)),m(u)})(s,e)},e._id)))})})]})},M=()=>{const e=(0,r.I0)(),[s,t]=(0,c.useState)("Body parts"),a=e=>{t(e)};return(0,c.useEffect)((()=>{e((0,L.a$)())}),[e]),(0,n.jsxs)("div",{className:o.bg,children:[(0,n.jsxs)("div",{className:o.categoryButtons,children:[(0,n.jsx)("button",{className:"".concat(o.btnCategories," ").concat("Body parts"===s?o.active:""),onClick:()=>a("Body parts"),children:"Body Parts"}),(0,n.jsx)("button",{className:"".concat(o.btnCategories," ").concat("Muscles"===s?o.active:""),onClick:()=>a("Muscles"),children:"Muscles"}),(0,n.jsx)("button",{className:"".concat(o.btnCategories," ").concat("Equipment"===s?o.active:""),onClick:()=>a("Equipment"),children:"Equipments"})]}),s&&(0,n.jsx)(q,{subcategory:s,onSelectExercise:e=>console.log(e)})]})},P=()=>(0,n.jsxs)("div",{className:"exercise-container",children:[(0,n.jsx)(l,{}),(0,n.jsx)(M,{})]})}}]);
//# sourceMappingURL=436.285ab436.chunk.js.map