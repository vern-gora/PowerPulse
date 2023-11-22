"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{331:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Ue});var c=t(2791),r=t(3855),a=t(184);const o=e=>{let{title:s,style:t}=e;return(0,a.jsx)("h2",{className:t,children:s})};var d=t(5125);const l="ProductsItem_cardContainer__Ho9Ps",n="ProductsItem_cardHeadContainer__mQH6j",i="ProductsItem_cardCategoryName__tWROl",u="ProductsItem_addProductBtn__FlW25",_="ProductsItem_addBtnIcon__D7JeO",m="ProductsItem_recommendWrapper__atAvR",h="ProductsItem_labelRecommend__ZlNgg",p="ProductsItem_labelNotRecommended__wZIIp",x="ProductsItem_recommendText__tCLoD",g="ProductsItem_singleCardTitle__-ILEZ",j="ProductsItem_cardRunningIcon__CZ0xb",N="ProductsItem_cardHeaderWrapper__D6Zzb",w="ProductsItem_cardProductStats__0Ausm",P="ProductsItem_cardProdStatItem__CpHza",v="ProductsItem_cardProdStatItemText__1Sjmb",y="ProductsItem_warning__JGZAz",C="ProductsItem_highlightedText__DiAzj",b="ProductsItem_notFoundText__zpC8e",S="ProductsItem_productItem__rV6k2",f={getProducts:e=>e.products.productList,getIsLoading:e=>e.products.isLoading,getProductsCategories:e=>e.products.productsCategories,getFilter:e=>e.products.filter,getCurrentProduct:e=>e.products.currentProduct,getFilteredProducts:e=>e.products.filteredProducts};var k=t(4217);const I=e=>{let{onOpenModal:s,filterByRecommended:t,filterByBloodType:c}=e;const o=(0,r.v9)(f.getProducts),I=(0,r.v9)(k.dy).blood,B=()=>0===o.length?o:c&&t?o.filter((e=>{let{groupBloodNotAllowed:s}=e;return s[I]})):c&&!t?o.filter((e=>{let{groupBloodNotAllowed:s}=e;return!s[I]})):o;return 0===B().length?(0,a.jsxs)("div",{className:y,children:[(0,a.jsxs)("p",{className:b,children:[(0,a.jsx)("span",{className:C,children:"Sorry, no results were found"})," ","for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),(0,a.jsx)("p",{className:C,children:"Try changing the search parameters."})]}):B().map((e=>{let{category:t,calories:c,title:r,weight:o,_id:y,groupBloodNotAllowed:C}=e;return(0,a.jsx)("li",{"data-id":y,className:S,children:(0,a.jsxs)("div",{className:l,children:[(0,a.jsxs)("div",{className:n,children:[(0,a.jsx)("div",{className:i,children:"Diet"}),(0,a.jsxs)("div",{className:m,children:[(0,a.jsx)("span",{className:C[I]?h:p}),(0,a.jsx)("p",{className:x,children:C[I]?"Recommended":"Not recommended"})]}),(0,a.jsxs)("button",{type:"button",className:u,onClick:s,children:["Add",(0,a.jsx)("svg",{className:_,width:"16",height:"16",children:(0,a.jsx)("use",{href:d.Z+"#arrow_add_icon"})})]})]}),(0,a.jsxs)("div",{className:N,children:[(0,a.jsx)("svg",{className:j,width:"24",height:"24",children:(0,a.jsx)("use",{href:d.Z+"#running_stick_figure_icon"})}),(0,a.jsx)("h3",{className:g,children:r})]}),(0,a.jsxs)("div",{className:w,children:[(0,a.jsxs)("p",{className:P,children:[(0,a.jsx)("span",{className:v,children:"Calories:"})," ",c]}),(0,a.jsxs)("p",{className:P,children:[(0,a.jsx)("span",{className:v,children:"Category: "}),t]}),(0,a.jsxs)("p",{className:P,children:[(0,a.jsx)("span",{className:v,children:"Weight:"})," ",o]})]})]})},y)}))},B="FilterProducts_searchLabel__FkkTn",D="FilterProducts_searchIcon__nn4HX",A="FilterProducts_filterBtn__hcT2I",W="FilterProducts_searchField__1sFnJ",M="FilterProducts_clearSearchIcon__F+9OF",F="FilterProducts_clearFilterBtn__R6Yqk";var L=t(4494),E=t(5612);const T=e=>{let{categoryFilter:s}=e;const[t,o]=(0,c.useState)(!0),l=(0,r.I0)();(0,c.useEffect)((()=>{const e=e=>{"Enter"===e.code&&l((0,L.ft)(e.target.value))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[l]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("label",{className:B,children:[(0,a.jsx)("button",{type:"button",className:A,children:(0,a.jsx)("svg",{className:D,width:"18",height:"18",children:(0,a.jsx)("use",{href:d.Z+"#search_icon"})})}),!t&&(0,a.jsx)("button",{className:F,type:"button",onClick:e=>{if(e.currentTarget.nextElementSibling.value="",o(!0),l((0,L.Dg)()),s){const e={category:s};l(E.Z.getFilteredProducts(e))}else l(E.Z.fetchProducts())},children:(0,a.jsx)("svg",{className:M,width:"18",height:"18",children:(0,a.jsx)("use",{href:d.Z+"#close_icon"})})}),(0,a.jsx)("input",{className:W,type:"text",placeholder:"Search",onChange:e=>{""!==e.currentTarget.value?o(!1):o(!0)},onBlur:e=>{l((0,L.ft)(e.currentTarget.value))}})]})})};var Z=t(5984);const R="DropDownSelectors_categoryListWrapper__ML40J",z="DropDownSelectors_dropBtnDown__59GGP",O="DropDownSelectors_dropDownIcon__5aEDt",U="DropDownSelectors_catDropList__YaOVf",Y="DropDownSelectors_categoryItem__7CNZq",H="DropDownSelectors_selectCatBtn__HVorH",V="DropDownSelectors_dropDownAllWrapper__2UmxQ",J="DropDownSelectors_dropAllBtn__FRZLp",Q="DropDownSelectors_allDropList__mm178",G="DropDownSelectors_typeItem__76rCW",X=e=>{let{onCategoryFilterSelect:s,onTypeSelect:t}=e;const[o,l]=(0,c.useState)(!1),[n,i]=(0,c.useState)(!1),[u,_]=(0,c.useState)("All"),[m,h]=(0,c.useState)("Categories");(0,c.useEffect)((()=>{const e=e=>{"Escape"===e.code&&(l(!1),i(!1))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[i,l]);const p=(0,r.v9)(f.getProductsCategories),x=e=>{const t=e.currentTarget.dataset.category;s(t),"all"===t&&h("Categories"),h(t),l(!1)},g=e=>{const s=e.currentTarget.dataset.type;t(s),j(s),i(!1)},j=e=>{switch(e){case"all":_("All");break;case"recommended":_("Recommended");break;case"not-recommended":_("Not recommended")}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:R,children:[(0,a.jsxs)("button",{type:"button",className:z,onClick:()=>{l(!0),i(!1),o&&l(!1)},value:"Categories",children:[m,(0,a.jsx)("svg",{className:O,width:"18",height:"18",children:(0,a.jsx)("use",{href:d.Z+"#icon-chevron-down"})})]}),o&&(0,a.jsxs)("ul",{className:U,children:[(0,a.jsx)("li",{className:Y,children:(0,a.jsx)("button",{type:"button",className:H,"data-category":"all",onClick:x,children:"All categories"})},(0,Z.x0)(5)),p.map((e=>(0,a.jsx)("li",{className:Y,children:(0,a.jsx)("button",{type:"button",className:H,onClick:x,"data-category":e,children:e})},(0,Z.x0)(5))))]})]}),(0,a.jsxs)("div",{className:V,children:[(0,a.jsxs)("button",{type:"button",className:J,onClick:()=>{i(!0),l(!1),n&&i(!1)},children:[u,(0,a.jsx)("svg",{className:O,width:"18",height:"18",children:(0,a.jsx)("use",{href:d.Z+"#icon-chevron-down"})})]}),n&&(0,a.jsxs)("ul",{className:Q,children:[(0,a.jsx)("li",{className:G,children:(0,a.jsx)("button",{type:"button",className:H,onClick:g,"data-type":"all",children:"All"})},(0,Z.x0)(5)),(0,a.jsx)("li",{className:G,children:(0,a.jsx)("button",{type:"button",className:H,onClick:g,"data-type":"recommended",children:"Recommended"})},(0,Z.x0)(5)),(0,a.jsx)("li",{className:G,children:(0,a.jsx)("button",{type:"button",className:H,onClick:g,"data-type":"not-recommended",children:"Not recommended"})},(0,Z.x0)(5))]})]})]})};var q=t(3430);const K="ProductsPage_prodContainer__QPuXY",$="ProductsPage_dropDownContainer__VJh-k",ee="ProductsPage_productsTitle__IauG3",se="ProductsPage_desktopCntrlWrap__OtYxc",te="ProductsPage_cardsWrapper__k697g",ce="ProductsPage_cardsWrapperFiltered__GSUmz",re="ProductsPage_filtersTitle__MASnC",ae="ProductsPage_filtersCtrls__Sl8V6";var oe=t(4164),de=t(5705),le=t(1087);const ne="AddProductSuccess_overlay__bgeXN",ie="AddProductSuccess_successWrap__borPA",ue="AddProductSuccess_closeBasicModal__YLoav",_e="AddProductSuccess_closeBasicModalIcon__jkeXD",me="AddProductSuccess_successData__MrYia",he="AddProductSuccess_successImg__y+iQ6",pe="AddProductSuccess_wellDone__ankeW",xe="AddProductSuccess_kcal__SUwX5",ge="AddProductSuccess_kcalNumber__QwIs1",je="AddProductSuccess_nextBtn__Gd9E-",Ne="AddProductSuccess_linkWrapper__IRdIn",we="AddProductSuccess_link__mTD8S",Pe="AddProductSuccess_linkArrow__vAYUI",ve=t.p+"static/media/avocado.95c6cd4821299887e2bb.png",ye=e=>{let{onCloseModal:s,consumedCalories:t,handleBackdropClick:c}=e;return(0,a.jsx)("div",{className:ne,onClick:c,children:(0,a.jsxs)("div",{className:ie,children:[(0,a.jsx)("button",{type:"button",className:ue,onClick:s,children:(0,a.jsx)("svg",{className:_e,width:"22",height:"22",children:(0,a.jsx)("use",{href:d.Z+"#close_icon"})})}),(0,a.jsxs)("div",{className:me,children:[(0,a.jsx)("img",{src:ve,alt:"Success",className:he}),(0,a.jsx)("p",{className:pe,children:"Well done"}),(0,a.jsxs)("p",{className:xe,children:["Calories:"," ",(0,a.jsx)("span",{className:ge,children:t})]}),(0,a.jsx)("button",{type:"button",className:je,onClick:s,children:"Next product"}),(0,a.jsxs)("div",{className:Ne,children:[(0,a.jsxs)(le.rU,{to:"/diary",className:we,children:["To the diary"," "]}),(0,a.jsx)("svg",{width:"16",height:"16",children:(0,a.jsx)("use",{href:d.Z+"#arrow_add_icon",className:Pe})})]})]})]})})},Ce="BasicModalWindow_overlay__s-mcD",be="BasicModalWindow_basicModalContainer__P3nRC",Se="BasicModalWindow_selectedProductDescr__+Yh-+",fe="BasicModalWindow_productCardPopUp__d3+uW",ke="BasicModalWindow_caloriesCount__qECr1",Ie="BasicModalWindow_basicModalSelectedProduct__z2jpB",Be="BasicModalWindow_basicModalFormInput__bpJz9",De="BasicModalWindow_weightLabel__gPTUQ",Ae="BasicModalWindow_closeBasicModal__hSwTK",We="BasicModalWindow_closeBasicModalIcon__bsEtp",Me="BasicModalWindow_basicModalForm__fk1Ur",Fe="BasicModalWindow_selectedProdBtns__d3Fm6",Le="BasicModalWindow_addDiaryBtn__nsOIB",Ee="BasicModalWindow_cancelAddBtn__eWEAQ",Te="BasicModalWindow_kcalNumber__dxhRY";var Ze=t(5119);const Re=document.querySelector("#modal-root"),ze=e=>{let{onCloseModal:s}=e;const[t,o]=(0,c.useState)(0),[l,n]=(0,c.useState)(!1);(0,c.useEffect)((()=>{const e=e=>{"Escape"===e.code&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[s]);const i=(0,r.I0)(),u=(0,r.v9)(f.getCurrentProduct),_=u.title,m=t*u.calories/100,h=e=>{e.currentTarget===e.target&&s()};return(0,oe.createPortal)(l?(0,a.jsx)(ye,{onCloseModal:s,consumedCalories:m,handleBackdropClick:h}):(0,a.jsx)("div",{className:Ce,onClick:h,children:(0,a.jsxs)("div",{className:be,children:[(0,a.jsx)("button",{type:"button",className:Ae,onClick:s,children:(0,a.jsx)("svg",{className:We,width:"22",height:"22",children:(0,a.jsx)("use",{href:d.Z+"#close_icon"})})}),(0,a.jsxs)("div",{className:Se,children:[(0,a.jsxs)("div",{className:fe,children:[(0,a.jsx)(de.J9,{initialValues:{product:_},children:(0,a.jsxs)(de.l0,{className:Me,children:[(0,a.jsx)(de.gN,{as:e=>(0,a.jsx)("input",{className:Ie,type:"text",value:_,...e}),name:"product",value:_,className:Ie}),(0,a.jsx)(de.gN,{className:Be,type:"text",name:"weight",label:"grams",onChange:e=>{o(e.currentTarget.value)}})]})}),(0,a.jsx)("span",{className:De,children:"grams"})]}),(0,a.jsxs)("p",{className:ke,children:["Calories:",(0,a.jsxs)("span",{className:Te,children:[" ",m||0]})]}),(0,a.jsxs)("div",{className:Fe,children:[(0,a.jsx)("button",{type:"submit",className:Le,onClick:e=>{e.preventDefault();const s={productId:u._id,amount:t,calories:m};i((0,Ze.VI)(s)),n(!!m)},children:"Add to diary"}),(0,a.jsx)("button",{type:"button",className:Ee,onClick:s,children:"Cancel"})]})]})]})}),Re)};var Oe=t(9273);const Ue=()=>{const[e,s]=(0,c.useState)(window.innerWidth),[t,d]=(0,c.useState)(!1),[l,n]=(0,c.useState)(""),[i,u]=(0,c.useState)(!1),[_,m]=(0,c.useState)(!1),h=(0,r.I0)(),p=(0,r.v9)(f.getIsLoading),x=(0,r.v9)(f.getFilter);(0,c.useEffect)((()=>{const e=()=>{s(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,c.useEffect)((()=>{h((0,Oe.n6)())}),[h]),(0,c.useEffect)((()=>{const e={search:x,category:l};""!==Object.values(e).join("")?h(E.Z.getFilteredProducts(e)):h(E.Z.fetchProducts())}),[h,x,l]),(0,c.useEffect)((()=>{h(E.Z.fetchProductsCategories())}),[h]);return(0,a.jsxs)("div",{className:K,children:[e>=1440&&(0,a.jsx)("p",{className:re,children:"Filters"}),(0,a.jsxs)("div",{className:se,children:[(0,a.jsx)(o,{style:ee,title:"Products"}),(0,a.jsxs)("div",{className:ae,children:[(0,a.jsx)(T,{categoryFilter:l}),(0,a.jsx)("div",{className:$,children:(0,a.jsx)(X,{onCategoryFilterSelect:e=>{n("all"!==e?e:"")},onTypeSelect:e=>{switch(e){case"recommended":u(!0),m(!0);break;case"not-recommended":u(!1),m(!0);break;default:u(!1),m(!1)}}})})]})]}),p?(0,a.jsx)(q._P,{height:"100",width:"100",color:"#e6533c",ariaLabel:"rings-loading",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}):(0,a.jsx)("ul",{className:0===l.length?te:ce,children:(0,a.jsx)(I,{onOpenModal:e=>{const s=e.target.closest("li").dataset.id;h(E.Z.getProductById(s)),d(!0)},filterByRecommended:i,filterByBloodType:_})}),t&&(0,a.jsx)(ze,{onCloseModal:()=>{d(!1)}})]})}},5984:(e,s,t)=>{t.d(s,{x0:()=>c});let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce(((e,s)=>e+=(s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_"),"")}}}]);
//# sourceMappingURL=667.edf4ec58.chunk.js.map