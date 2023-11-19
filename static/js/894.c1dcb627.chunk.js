"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[894],{4894:(e,s,c)=>{c.r(s),c.d(s,{default:()=>T});var a=c(2791);const t="TitleExercise_title__wTcBM",r="TitleExercise_container__q3e2Y";var i=c(184);const n=()=>(0,i.jsx)("div",{className:r,children:(0,i.jsx)("h1",{className:t,children:"Exercise"})});var l=c(5294);const o="ExercisesCategories_bg__Jzenr",d="ExercisesCategories_btnCategories__McsvH",x="ExercisesCategories_active__wLLFi",_="ExercisesCategories_phContainer__pYZLL",m="ExercisesCategories_imageContainer__DCwIr",h="ExercisesCategories_img__W-xOn",j="ExercisesCategories_imageText__5Gcuy",u="ExercisesCategories_categoryName__NqeJW",g="ExercisesCategories_categoryButtons__baPbD",N=e=>{let{data:s,onClick:c}=e;return(0,i.jsxs)("div",{className:m,onClick:()=>{c(s)},children:[(0,i.jsx)("img",{className:h,src:s.imgURL,alt:s.name}),(0,i.jsx)("p",{className:j,children:s.name}),(0,i.jsx)("p",{className:u,children:s.filter})]})},p="ExercissesItem_exercises-item__tJvJv",E="ExercissesItem_exercise-top__OdKZV",I="ExercissesItem_exercise-middle__8LcSW",C="ExercissesItem_exercise-bottom__nDGmQ",v="ExercissesItem_cardRunningIcon__dLItf",y="ExercissesItem_data-name__h8oKF",b="ExercissesItem_data-value__IL986",w="ExercissesItem_workout-title__uoN3u",k="ExercissesItem_start-button__DBApo",M="ExercissesItem_arrow-svg__Ezn1P",f="ExercissesItem_workout-container__n-1pv",L="ExercissesItem_button-svg-container__yB0c3",J="ExercissesItem_data-name-middle__beqra";var W=c(5125),R=c(4796);const z=e=>{let{selectedExercises:s}=e;const[c,t]=(0,a.useState)(!1),[r,n]=(0,a.useState)(null);return(0,i.jsxs)("div",{children:[s.map((e=>(0,i.jsxs)("div",{className:p,children:[(0,i.jsxs)("div",{className:E,children:[(0,i.jsx)("div",{className:f,children:(0,i.jsx)("h3",{className:w,children:"WORKOUT"})}),(0,i.jsxs)("button",{onClick:()=>{(e=>{n(e),t(!0)})(e)},className:L,children:[(0,i.jsx)("div",{className:k,children:"Start"}),(0,i.jsx)("svg",{className:M,children:(0,i.jsx)("use",{href:W.Z+"#icon-arrow-right"})})]})]}),(0,i.jsxs)("div",{className:I,children:[(0,i.jsx)("svg",{className:v,width:"24",height:"24",children:(0,i.jsx)("use",{href:W.Z+"#running_stick_figure_icon"})}),(0,i.jsx)("p",{className:J,children:(0,i.jsx)("span",{className:b,children:e.equipment})})]}),(0,i.jsxs)("div",{className:C,children:[(0,i.jsxs)("p",{className:y,children:["Target:"," ",(0,i.jsx)("span",{className:b,children:e.target})]}),(0,i.jsxs)("p",{className:y,children:["Body Part:"," ",(0,i.jsx)("span",{className:b,children:e.bodyPart})]}),(0,i.jsxs)("p",{className:y,children:["Burned Calories:"," ",(0,i.jsx)("span",{className:b,children:e.burnedCalories})]})]})]},e._id))),c&&(0,i.jsx)(R.Z,{dataEx:r,closeFunc:()=>{t(!1)}})]})};var O=c(5748);const P=e=>{let{subcategory:s,onSelectExercise:c}=e;const[t,r]=(0,a.useState)([]),[n,o]=(0,a.useState)(!0),[d,x]=(0,a.useState)(null);(0,a.useEffect)((()=>{(async()=>{try{o(!0);const e=await l.Z.get("https://powerpulse-backend.onrender.com/exercises/".concat(s.toLowerCase()),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUyMWRjNzdiZjRlYzMwYjNjYWQzMWUiLCJpYXQiOjE3MDAyNTM0NjUsImV4cCI6MTcwMDg1ODI2NX0.b1lP8YMZkgLKjx9xr6wW36fv_RLtpakwePByRg0Myb8"}});r(e.data.data)}catch(e){console.error("Error fetching data:",e)}finally{o(!1)}})()}),[s]);return(0,i.jsx)("div",{children:n?(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,i.jsx)(O._P,{height:"100",width:"100",color:"#e6533c",ariaLabel:"rings-loading"})}):(0,i.jsx)("div",{children:d?(0,i.jsx)(z,{selectedExercises:d}):(0,i.jsx)("div",{className:_,children:t.map((e=>(0,i.jsx)(N,{data:e,onClick:()=>(async e=>{const{name:c}=e;try{const e=await l.Z.get("https://powerpulse-backend.onrender.com/exercises/".concat(s.toLowerCase(),"/").concat(c.toLowerCase()),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUyMWRjNzdiZjRlYzMwYjNjYWQzMWUiLCJpYXQiOjE3MDAyNTM0NjUsImV4cCI6MTcwMDg1ODI2NX0.b1lP8YMZkgLKjx9xr6wW36fv_RLtpakwePByRg0Myb8"}});console.log("Filtered Exercise:",e.data);const a=e.data.data;x(a)}catch(a){console.error("Error fetching filtered exercises:",a)}})(e)},e._id)))})})})},S=()=>{const[e,s]=(0,a.useState)(null),c=e=>{s(e)};return(0,i.jsxs)("div",{className:o,children:[(0,i.jsxs)("div",{className:g,children:[(0,i.jsx)("button",{className:"".concat(d," ").concat("bodyParts"===e?x:""),onClick:()=>c("bodyParts"),children:"Body Parts"}),(0,i.jsx)("button",{className:"".concat(d," ").concat("muscules"===e?x:""),onClick:()=>c("muscules"),children:"Muscles"}),(0,i.jsx)("button",{className:"".concat(d," ").concat("equipments"===e?x:""),onClick:()=>c("equipments"),children:"Equipments"})]}),e&&(0,i.jsx)(P,{subcategory:e,onSelectExercise:e=>console.log(e)})]})},T=()=>(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(n,{}),(0,i.jsx)(S,{})]})}}]);
//# sourceMappingURL=894.c1dcb627.chunk.js.map