"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{7727:function(e,t,s){s.r(t),s.d(t,{default:function(){return fe}});var r=s(9439),c=s(2791),a=s(9434),o=s(184),n=function(e){var t=e.title,s=e.style;return(0,o.jsx)("h2",{className:s,children:t})},l=s(5125),i="ProductsItem_cardContainer__Ho9Ps",d="ProductsItem_cardHeadContainer__mQH6j",u="ProductsItem_cardCategoryName__tWROl",_="ProductsItem_addProductBtn__FlW25",h="ProductsItem_addBtnIcon__D7JeO",m="ProductsItem_recommendWrapper__atAvR",p="ProductsItem_labelRecommend__ZlNgg",x="ProductsItem_recommendText__tCLoD",g="ProductsItem_singleCardTitle__-ILEZ",j="ProductsItem_cardRunningIcon__CZ0xb",N="ProductsItem_cardHeaderWrapper__D6Zzb",f="ProductsItem_cardProductStats__0Ausm",P="ProductsItem_cardProdStatItem__CpHza",C="ProductsItem_cardProdStatItemText__1Sjmb",w="ProductsItem_productItem__rV6k2",v={getProducts:function(e){return e.info.products.productList},getIsLoading:function(e){return e.info.products.isLoading},getProductsCategories:function(e){return e.info.products.productsCategories},getFilter:function(e){return e.info.products.filter},getCurrentProduct:function(e){return e.info.products.currentProduct}},b=function(e){var t=e.onOpenModal,s=e.categoryFilter,r=(0,a.v9)(v.getProducts),c=(0,a.v9)(v.getFilter);return r.slice(0,20).filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})).filter((function(e){return e.category.toLowerCase().includes(s.toLowerCase())})).map((function(e){var s=e.category,r=e.calories,c=e.title,a=e.weight,n=e._id;return(0,o.jsx)("li",{"data-id":n,className:w,children:(0,o.jsxs)("div",{className:i,children:[(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("div",{className:u,children:"Diet"}),(0,o.jsxs)("div",{className:m,children:[(0,o.jsx)("span",{className:p}),(0,o.jsx)("p",{className:x,children:"Recommended"})]}),(0,o.jsxs)("button",{type:"button",className:_,onClick:t,children:["Add",(0,o.jsx)("svg",{className:h,width:"16",height:"16",children:(0,o.jsx)("use",{href:l.Z+"#arrow_add_icon"})})]})]}),(0,o.jsxs)("div",{className:N,children:[(0,o.jsx)("svg",{className:j,width:"24",height:"24",children:(0,o.jsx)("use",{href:l.Z+"#running_stick_figure_icon"})}),(0,o.jsx)("h3",{className:g,children:c})]}),(0,o.jsxs)("div",{className:f,children:[(0,o.jsxs)("p",{className:P,children:[(0,o.jsx)("span",{className:C,children:"Calories:"})," ",r]}),(0,o.jsxs)("p",{className:P,children:[(0,o.jsx)("span",{className:C,children:"Category: "}),s]}),(0,o.jsxs)("p",{className:P,children:[(0,o.jsx)("span",{className:C,children:"Weight:"})," ",a]})]})]})},n)}))},y="FilterProducts_searchLabel__FkkTn",I="FilterProducts_searchIcon__nn4HX",D="FilterProducts_filterBtn__hcT2I",B="FilterProducts_searchField__1sFnJ",S="FilterProducts_clearSearchIcon__F+9OF",F="FilterProducts_clearFilterBtn__R6Yqk",M=s(4494),k=function(){var e=(0,c.useState)(!0),t=(0,r.Z)(e,2),s=t[0],n=t[1],i=(0,a.I0)(),d=(0,a.v9)(v.getFilter);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("label",{className:y,children:[(0,o.jsx)("button",{type:"button",className:D,children:(0,o.jsx)("svg",{className:I,width:"18",height:"18",children:(0,o.jsx)("use",{href:l.Z+"#search_icon"})})}),!s&&(0,o.jsx)("button",{className:F,type:"button",onClick:function(){n(!0),i((0,M.Dg)())},children:(0,o.jsx)("svg",{className:S,width:"18",height:"18",children:(0,o.jsx)("use",{href:l.Z+"#close_icon"})})}),(0,o.jsx)("input",{className:B,type:"text",placeholder:"Search",value:d,onChange:function(e){n(!1),i((0,M.ft)(e.currentTarget.value))}})]})})},W=s(5984),Z="DropDownSelectors_categoryListWrapper__ML40J",L="DropDownSelectors_dropBtnDown__59GGP",T="DropDownSelectors_dropDownIcon__5aEDt",A="DropDownSelectors_catDropList__YaOVf",R="DropDownSelectors_categoryItem__7CNZq",H="DropDownSelectors_selectCatBtn__HVorH",O="DropDownSelectors_dropDownAllWrapper__2UmxQ",E="DropDownSelectors_dropAllBtn__FRZLp",J="DropDownSelectors_allDropList__mm178",V=function(e){var t=e.onCategoryFilterSelect,s=(0,c.useState)(!1),n=(0,r.Z)(s,2),i=n[0],d=n[1],u=(0,c.useState)(!1),_=(0,r.Z)(u,2),h=_[0],m=_[1],p=(0,a.v9)(v.getProductsCategories),x=function(){m(!1)},g=function(e){var s=e.currentTarget.dataset.category;t(s),d(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:Z,children:[(0,o.jsxs)("button",{type:"button",className:L,onClick:function(){d(!0),m(!1),i&&d(!1)},children:["Categories",(0,o.jsx)("svg",{className:T,width:"18",height:"18",children:(0,o.jsx)("use",{href:l.Z+"#icon-chevron-down"})})]}),i&&(0,o.jsx)("ul",{className:A,children:p.map((function(e){return(0,o.jsx)("li",{className:R,children:(0,o.jsx)("button",{type:"button",className:H,onClick:g,"data-category":e,children:e})},(0,W.x0)(5))}))})]}),(0,o.jsxs)("div",{className:O,children:[(0,o.jsxs)("button",{type:"button",className:E,onClick:function(){m(!0),d(!1),h&&m(!1)},children:["All",(0,o.jsx)("svg",{className:T,width:"18",height:"18",children:(0,o.jsx)("use",{href:l.Z+"#icon-chevron-down"})})]}),h&&(0,o.jsxs)("ul",{className:J,children:[(0,o.jsx)("button",{type:"button",className:H,onClick:x,children:"All"}),(0,o.jsx)("button",{type:"button",className:H,onClick:x,children:"Recommended"}),(0,o.jsx)("button",{type:"button",className:H,onClick:x,children:"Not recommended"})]})]})]})},Y=s(5748),Q="ProductsPage_dropDownContainer__VJh-k",q="ProductsPage_productsTitle__IauG3",z="ProductsPage_prodContainer__QPuXY",U="ProductsPage_desktopCntrlWrap__OtYxc",G="ProductsPage_cardsWrapper__k697g",X="ProductsPage_filtersTitle__MASnC",K="ProductsPage_filtersCtrls__Sl8V6",$=s(1413),ee=s(4164),te=s(5705),se="BasicModalWindow_overlay__s-mcD",re="BasicModalWindow_basicModalContainer__P3nRC",ce="BasicModalWindow_selectedProductDescr__+Yh-+",ae="BasicModalWindow_productCardPopUp__d3+uW",oe="BasicModalWindow_caloriesCount__qECr1",ne="BasicModalWindow_basicModalSelectedProduct__z2jpB",le="BasicModalWindow_basicModalFormInput__bpJz9",ie="BasicModalWindow_weightLabel__gPTUQ",de="BasicModalWindow_closeBasicModal__hSwTK",ue="BasicModalWindow_closeBasicModalIcon__bsEtp",_e="BasicModalWindow_basicModalForm__fk1Ur",he="BasicModalWindow_selectedProdBtns__d3Fm6",me="BasicModalWindow_addDiaryBtn__nsOIB",pe="BasicModalWindow_cancelAddBtn__eWEAQ",xe="BasicModalWindow_kcalNumber__dxhRY",ge=document.querySelector("#modal-root"),je=function(e){var t=e.onCloseModal,s=(0,c.useState)(0),n=(0,r.Z)(s,2),i=n[0],d=n[1],u=(0,a.v9)(v.getCurrentProduct),_=u.title,h=i*u.calories/100;return(0,ee.createPortal)((0,o.jsx)("div",{className:se,children:(0,o.jsxs)("div",{className:re,children:[(0,o.jsx)("button",{type:"button",className:de,onClick:t,children:(0,o.jsx)("svg",{className:ue,width:"22",height:"22",children:(0,o.jsx)("use",{href:l.Z+"#close_icon"})})}),(0,o.jsxs)("div",{className:ce,children:[(0,o.jsxs)("div",{className:ae,children:[(0,o.jsx)(te.J9,{initialValues:{product:_},children:(0,o.jsxs)(te.l0,{className:_e,children:[(0,o.jsx)(te.gN,{as:function(e){return(0,o.jsx)("input",(0,$.Z)({className:ne,type:"text",value:_},e))},name:"product",value:_,className:ne}),(0,o.jsx)(te.gN,{className:le,type:"text",name:"weight",label:"grams",onChange:function(e){d(e.currentTarget.value)}})]})}),(0,o.jsx)("span",{className:ie,children:"grams"})]}),(0,o.jsxs)("p",{className:oe,children:["Calories:",(0,o.jsxs)("span",{className:xe,children:[" ",h||0]})]}),(0,o.jsxs)("div",{className:he,children:[(0,o.jsx)("button",{type:"button",className:me,children:"Add to diary"}),(0,o.jsx)("button",{type:"button",className:pe,onClick:t,children:"Cancel"})]})]})]})}),ge)},Ne=s(5612),fe=function(){var e=(0,c.useState)(!1),t=(0,r.Z)(e,2),s=t[0],l=t[1],i=(0,c.useState)(""),d=(0,r.Z)(i,2),u=d[0],_=d[1],h=(0,a.I0)(),m=(0,a.v9)(v.getProducts);(0,c.useEffect)((function(){h(Ne.Z.fetchProducts())}),[h]),(0,c.useEffect)((function(){h(Ne.Z.fetchProductsCategories())}),[h]);return(0,o.jsxs)("div",{className:z,children:[(0,o.jsx)("p",{className:X,children:"Filters"}),(0,o.jsxs)("div",{className:U,children:[(0,o.jsx)(n,{style:q,title:"Products"}),(0,o.jsxs)("div",{className:K,children:[(0,o.jsx)(k,{}),(0,o.jsx)("div",{className:Q,children:(0,o.jsx)(V,{onCategoryFilterSelect:function(e){_(e)}})})]})]}),0!==m.length?(0,o.jsx)("ul",{className:G,children:(0,o.jsx)(b,{onOpenModal:function(e){var t=e.target.closest("li").dataset.id;h(Ne.Z.getProductById(t)),l(!0)},categoryFilter:u})}):(0,o.jsx)(Y._P,{height:"100",width:"100",color:"#e6533c",ariaLabel:"rings-loading",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}),s&&(0,o.jsx)(je,{onCloseModal:function(){l(!1)}})]})}}}]);
//# sourceMappingURL=727.b2672a15.chunk.js.map