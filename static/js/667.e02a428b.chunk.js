"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{331:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Oe});var c=t(2791),r=t(3855),a=t(184);const o=e=>{let{title:s,style:t}=e;return(0,a.jsx)("h2",{className:t,children:s})};var l=t(5125);const d="ProductsItem_cardContainer__Ho9Ps",n="ProductsItem_cardHeadContainer__mQH6j",i="ProductsItem_cardCategoryName__tWROl",u="ProductsItem_addProductBtn__FlW25",_="ProductsItem_addBtnIcon__D7JeO",m="ProductsItem_recommendWrapper__atAvR",h="ProductsItem_labelRecommend__ZlNgg",p="ProductsItem_labelNotRecommended__wZIIp",x="ProductsItem_recommendText__tCLoD",g="ProductsItem_singleCardTitle__-ILEZ",j="ProductsItem_cardRunningIcon__CZ0xb",N="ProductsItem_cardHeaderWrapper__D6Zzb",P="ProductsItem_cardProductStats__0Ausm",w="ProductsItem_cardProdStatItem__CpHza",y="ProductsItem_cardProdStatItemText__1Sjmb",C="ProductsItem_warning__JGZAz",v="ProductsItem_highlightedText__DiAzj",b="ProductsItem_notFoundText__zpC8e",S="ProductsItem_productItem__rV6k2",I={getProducts:e=>e.products.productList,getIsLoading:e=>e.products.isLoading,getProductsCategories:e=>e.products.productsCategories,getFilter:e=>e.products.filter,getCurrentProduct:e=>e.products.currentProduct,getFilteredProducts:e=>e.products.filteredProducts};var f=t(4217);const B=e=>{let{onOpenModal:s,categoryFilter:t,filterByRecommended:c,filterByBloodType:o}=e;const B=(0,r.v9)(I.getProducts),D=(0,r.v9)(I.getFilter),k=(0,r.v9)(f.dy).blood||"1",A=B.filter((e=>{let{title:s}=e;return s.toLowerCase().includes(D.toLowerCase())})).filter((e=>{let{category:s}=e;return s.toLowerCase().includes(t.toLowerCase())})),M=()=>o&&c?A.filter((e=>{let{groupBloodNotAllowed:s}=e;return s[k]})):o&&!c?A.filter((e=>{let{groupBloodNotAllowed:s}=e;return!s[k]})):A;return 0===M().length?(0,a.jsxs)("div",{className:C,children:[(0,a.jsxs)("p",{className:b,children:[(0,a.jsx)("span",{className:v,children:"Sorry, no results were found"})," ","for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),(0,a.jsx)("p",{className:v,children:"Try changing the search parameters."})]}):M().map((e=>{let{category:t,calories:c,title:r,weight:o,_id:C,groupBloodNotAllowed:v}=e;return(0,a.jsx)("li",{"data-id":C,className:S,children:(0,a.jsxs)("div",{className:d,children:[(0,a.jsxs)("div",{className:n,children:[(0,a.jsx)("div",{className:i,children:"Diet"}),(0,a.jsxs)("div",{className:m,children:[(0,a.jsx)("span",{className:v[k]?h:p}),(0,a.jsx)("p",{className:x,children:"Recommended"})]}),(0,a.jsxs)("button",{type:"button",className:u,onClick:s,children:["Add",(0,a.jsx)("svg",{className:_,width:"16",height:"16",children:(0,a.jsx)("use",{href:l.Z+"#arrow_add_icon"})})]})]}),(0,a.jsxs)("div",{className:N,children:[(0,a.jsx)("svg",{className:j,width:"24",height:"24",children:(0,a.jsx)("use",{href:l.Z+"#running_stick_figure_icon"})}),(0,a.jsx)("h3",{className:g,children:r})]}),(0,a.jsxs)("div",{className:P,children:[(0,a.jsxs)("p",{className:w,children:[(0,a.jsx)("span",{className:y,children:"Calories:"})," ",c]}),(0,a.jsxs)("p",{className:w,children:[(0,a.jsx)("span",{className:y,children:"Category: "}),t]}),(0,a.jsxs)("p",{className:w,children:[(0,a.jsx)("span",{className:y,children:"Weight:"})," ",o]})]})]})},C)}))},D="FilterProducts_searchLabel__FkkTn",k="FilterProducts_searchIcon__nn4HX",A="FilterProducts_filterBtn__hcT2I",M="FilterProducts_searchField__1sFnJ",W="FilterProducts_clearSearchIcon__F+9OF",F="FilterProducts_clearFilterBtn__R6Yqk";var T=t(4494);const L=()=>{const[e,s]=(0,c.useState)(!0),t=(0,r.I0)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("label",{className:D,children:[(0,a.jsx)("button",{type:"button",className:A,children:(0,a.jsx)("svg",{className:k,width:"18",height:"18",children:(0,a.jsx)("use",{href:l.Z+"#search_icon"})})}),!e&&(0,a.jsx)("button",{className:F,type:"button",onClick:e=>{e.currentTarget.nextElementSibling.value="",s(!0),t((0,T.Dg)())},children:(0,a.jsx)("svg",{className:W,width:"18",height:"18",children:(0,a.jsx)("use",{href:l.Z+"#close_icon"})})}),(0,a.jsx)("input",{className:M,type:"text",placeholder:"Search",onChange:e=>{""!==e.currentTarget.value?s(!1):s(!0)},onBlur:e=>{t((0,T.ft)(e.currentTarget.value))}})]})})};var Z=t(5984);const R="DropDownSelectors_categoryListWrapper__ML40J",E="DropDownSelectors_dropBtnDown__59GGP",Y="DropDownSelectors_dropDownIcon__5aEDt",O="DropDownSelectors_catDropList__YaOVf",U="DropDownSelectors_categoryItem__7CNZq",H="DropDownSelectors_selectCatBtn__HVorH",V="DropDownSelectors_dropDownAllWrapper__2UmxQ",z="DropDownSelectors_dropAllBtn__FRZLp",J="DropDownSelectors_allDropList__mm178",Q="DropDownSelectors_typeItem__76rCW";var G=t(5612);const X=e=>{let{onCategoryFilterSelect:s,onTypeSelect:t}=e;const[o,d]=(0,c.useState)(!1),[n,i]=(0,c.useState)(!1),u=(0,r.I0)(),_=(0,r.v9)(f.dy),m=(0,r.v9)(I.getProductsCategories),h=e=>{const t=e.currentTarget.dataset.category;s(t),d(!1)},p=e=>{const s=e.currentTarget.dataset.type;t(s),i(!1);const c=_.blood,r={category:"".concat(c)};u(G.Z.getFilteredProducts(r))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:R,children:[(0,a.jsxs)("button",{type:"button",className:E,onClick:()=>{d(!0),i(!1),o&&d(!1)},children:["Categories",(0,a.jsx)("svg",{className:Y,width:"18",height:"18",children:(0,a.jsx)("use",{href:l.Z+"#icon-chevron-down"})})]}),o&&(0,a.jsxs)("ul",{className:O,children:[(0,a.jsx)("li",{className:U,children:(0,a.jsx)("button",{type:"button",className:H,"data-category":"all",onClick:h,children:"All categories"})},(0,Z.x0)(5)),m.map((e=>(0,a.jsx)("li",{className:U,children:(0,a.jsx)("button",{type:"button",className:H,onClick:h,"data-category":e,children:e})},(0,Z.x0)(5))))]})]}),(0,a.jsxs)("div",{className:V,children:[(0,a.jsxs)("button",{type:"button",className:z,onClick:()=>{i(!0),d(!1),n&&i(!1)},children:["All",(0,a.jsx)("svg",{className:Y,width:"18",height:"18",children:(0,a.jsx)("use",{href:l.Z+"#icon-chevron-down"})})]}),n&&(0,a.jsxs)("ul",{className:J,children:[(0,a.jsx)("li",{className:Q,children:(0,a.jsx)("button",{type:"button",className:H,onClick:p,"data-type":"all",children:"All"})},(0,Z.x0)(5)),(0,a.jsx)("li",{className:Q,children:(0,a.jsx)("button",{type:"button",className:H,onClick:p,"data-type":"recommended",children:"Recommended"})},(0,Z.x0)(5)),(0,a.jsx)("li",{className:Q,children:(0,a.jsx)("button",{type:"button",className:H,onClick:p,"data-type":"not-recommended",children:"Not recommended"})},(0,Z.x0)(5))]})]})]})};var q=t(5748);const K="ProductsPage_dropDownContainer__VJh-k",$="ProductsPage_productsTitle__IauG3",ee="ProductsPage_prodContainer__QPuXY",se="ProductsPage_desktopCntrlWrap__OtYxc",te="ProductsPage_cardsWrapper__k697g",ce="ProductsPage_filtersTitle__MASnC",re="ProductsPage_filtersCtrls__Sl8V6";var ae=t(4164),oe=t(5705),le=t(1087);const de="AddProductSuccess_overlay__bgeXN",ne="AddProductSuccess_successWrap__borPA",ie="AddProductSuccess_closeBasicModal__YLoav",ue="AddProductSuccess_closeBasicModalIcon__jkeXD",_e="AddProductSuccess_successData__MrYia",me="AddProductSuccess_successImg__y+iQ6",he="AddProductSuccess_wellDone__ankeW",pe="AddProductSuccess_kcal__SUwX5",xe="AddProductSuccess_kcalNumber__QwIs1",ge="AddProductSuccess_nextBtn__Gd9E-",je="AddProductSuccess_linkWrapper__IRdIn",Ne="AddProductSuccess_link__mTD8S",Pe="AddProductSuccess_linkArrow__vAYUI",we=t.p+"static/media/avocado.95c6cd4821299887e2bb.png",ye=e=>{let{onCloseModal:s,consumedCalories:t}=e;return(0,a.jsx)("div",{className:de,children:(0,a.jsxs)("div",{className:ne,children:[(0,a.jsx)("button",{type:"button",className:ie,onClick:s,children:(0,a.jsx)("svg",{className:ue,width:"22",height:"22",children:(0,a.jsx)("use",{href:l.Z+"#close_icon"})})}),(0,a.jsxs)("div",{className:_e,children:[(0,a.jsx)("img",{src:we,alt:"Success",className:me}),(0,a.jsx)("p",{className:he,children:"Well done"}),(0,a.jsxs)("p",{className:pe,children:["Calories:"," ",(0,a.jsx)("span",{className:xe,children:t})]}),(0,a.jsx)("button",{type:"button",className:ge,onClick:s,children:"Next product"}),(0,a.jsxs)("div",{className:je,children:[(0,a.jsxs)(le.rU,{to:"/diary",className:Ne,children:["To the diary"," "]}),(0,a.jsx)("svg",{width:"16",height:"16",children:(0,a.jsx)("use",{href:l.Z+"#arrow_add_icon",className:Pe})})]})]})]})})},Ce="BasicModalWindow_overlay__s-mcD",ve="BasicModalWindow_basicModalContainer__P3nRC",be="BasicModalWindow_selectedProductDescr__+Yh-+",Se="BasicModalWindow_productCardPopUp__d3+uW",Ie="BasicModalWindow_caloriesCount__qECr1",fe="BasicModalWindow_basicModalSelectedProduct__z2jpB",Be="BasicModalWindow_basicModalFormInput__bpJz9",De="BasicModalWindow_weightLabel__gPTUQ",ke="BasicModalWindow_closeBasicModal__hSwTK",Ae="BasicModalWindow_closeBasicModalIcon__bsEtp",Me="BasicModalWindow_basicModalForm__fk1Ur",We="BasicModalWindow_selectedProdBtns__d3Fm6",Fe="BasicModalWindow_addDiaryBtn__nsOIB",Te="BasicModalWindow_cancelAddBtn__eWEAQ",Le="BasicModalWindow_kcalNumber__dxhRY";var Ze=t(5119);const Re=document.querySelector("#modal-root"),Ee=e=>{let{onCloseModal:s}=e;const[t,o]=(0,c.useState)(0),[d,n]=(0,c.useState)(!1),i=(0,r.I0)(),u=(0,r.v9)(I.getCurrentProduct),_=u.title,m=t*u.calories/100;return(0,ae.createPortal)(d?(0,a.jsx)(ye,{onCloseModal:s,consumedCalories:m}):(0,a.jsx)("div",{className:Ce,children:(0,a.jsxs)("div",{className:ve,children:[(0,a.jsx)("button",{type:"button",className:ke,onClick:s,children:(0,a.jsx)("svg",{className:Ae,width:"22",height:"22",children:(0,a.jsx)("use",{href:l.Z+"#close_icon"})})}),(0,a.jsxs)("div",{className:be,children:[(0,a.jsxs)("div",{className:Se,children:[(0,a.jsx)(oe.J9,{initialValues:{product:_},children:(0,a.jsxs)(oe.l0,{className:Me,children:[(0,a.jsx)(oe.gN,{as:e=>(0,a.jsx)("input",{className:fe,type:"text",value:_,...e}),name:"product",value:_,className:fe}),(0,a.jsx)(oe.gN,{className:Be,type:"text",name:"weight",label:"grams",onChange:e=>{o(e.currentTarget.value)}})]})}),(0,a.jsx)("span",{className:De,children:"grams"})]}),(0,a.jsxs)("p",{className:Ie,children:["Calories:",(0,a.jsxs)("span",{className:Le,children:[" ",m||0]})]}),(0,a.jsxs)("div",{className:We,children:[(0,a.jsx)("button",{type:"submit",className:Fe,onClick:e=>{e.preventDefault();const s={productId:u._id,amount:t,calories:m};i((0,Ze.VI)(s)),n(!0)},children:"Add to diary"}),(0,a.jsx)("button",{type:"button",className:Te,onClick:s,children:"Cancel"})]})]})]})}),Re)};var Ye=t(9273);const Oe=()=>{const[e,s]=(0,c.useState)(!1),[t,l]=(0,c.useState)(""),[d,n]=(0,c.useState)(!1),[i,u]=(0,c.useState)(!1),_=(0,r.I0)(),m=(0,r.v9)(I.getProducts);(0,c.useEffect)((()=>{_((0,Ye.n6)())}),[_]),(0,c.useEffect)((()=>{_(G.Z.fetchProducts())}),[_]),(0,c.useEffect)((()=>{_(G.Z.fetchProductsCategories())}),[_]);return(0,a.jsxs)("div",{className:ee,children:[(0,a.jsx)("p",{className:ce,children:"Filters"}),(0,a.jsxs)("div",{className:se,children:[(0,a.jsx)(o,{style:$,title:"Products"}),(0,a.jsxs)("div",{className:re,children:[(0,a.jsx)(L,{}),(0,a.jsx)("div",{className:K,children:(0,a.jsx)(X,{onCategoryFilterSelect:e=>{l("all"!==e?e:"")},onTypeSelect:e=>{switch(e){case"recommended":n(!0),u(!0);break;case"not-recommended":n(!1),u(!0);break;default:n(!1),u(!1)}}})})]})]}),0!==m.length?(0,a.jsx)("ul",{className:te,children:(0,a.jsx)(B,{onOpenModal:e=>{const t=e.target.closest("li").dataset.id;_(G.Z.getProductById(t)),s(!0)},categoryFilter:t,filterByRecommended:d,filterByBloodType:i})}):(0,a.jsx)(q._P,{height:"100",width:"100",color:"#e6533c",ariaLabel:"rings-loading",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}),e&&(0,a.jsx)(Ee,{onCloseModal:()=>{s(!1)}})]})}},4217:(e,s,t)=>{t.d(s,{$y:()=>r,dy:()=>c});const c=e=>e.auth.user,r=e=>e.auth.goToParams},5984:(e,s,t)=>{t.d(s,{x0:()=>c});let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce(((e,s)=>e+=(s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_"),"")}}}]);
//# sourceMappingURL=667.e02a428b.chunk.js.map