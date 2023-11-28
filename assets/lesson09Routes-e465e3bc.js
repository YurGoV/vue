import{_ as d,o as s,c as a,p as l,e as p,a as o,m as u,F as f,f as v,t as m,r as $,g as y}from"./index-77a7a2a3.js";const G={name:"LessonNineHome"},C=e=>(l("data-v-84ac9260"),e=e(),p(),e),I={style:{}},L=C(()=>o("h2",null,"Here we test routes in the view application",-1)),N=C(()=>o("p",null,"u can walk by the routes and check if it works",-1)),w=[L,N];function x(e,c,i,r,_,n){return s(),a("div",I,w)}const B=d(G,[["render",x],["__scopeId","data-v-84ac9260"]]);const S={name:"GoodsList",computed:{...u("lesson09",["categoriesList"])},methods:{onCategoryClick(e){this.$router.push({name:"GoodsView",params:{goodsName:e}})}}},V=e=>(l("data-v-21750e47"),e=e(),p(),e),b=V(()=>o("p",null,"Goods List:",-1)),H={class:"list"},P=["onClick"];function T(e,c,i,r,_,n){return s(),a("div",null,[b,o("ul",H,[(s(!0),a(f,null,v(e.categoriesList,t=>(s(),a("li",{onClick:g=>n.onCategoryClick(t.name),key:t.name},m(t.name),9,P))),128))])])}const F=d(S,[["render",T],["__scopeId","data-v-21750e47"]]);const M={name:"GoodsItems",computed:{...u("lesson09",["goodsByCategory"]),goodsCategoryName(){return this.$route.params.goodsName},goodsList(){return this.goodsByCategory(this.goodsCategoryName)}},methods:{goToMain(){this.$router.push({name:"LessonNineHome"})}}},R=["href"],D={class:"card"},E={class:"img-thumb"},U=["src"],j={class:"description"};function q(e,c,i,r,_,n){return s(),a("div",null,[o("p",null,m(n.goodsCategoryName),1),o("div",null,[o("ul",null,[(s(!0),a(f,null,v(n.goodsList,t=>(s(),a("li",{key:t.id},[o("a",{href:t.manual_url,target:"_blank",class:"card-link"},[o("div",D,[o("div",E,[o("img",{alt:"",src:t.img},null,8,U)]),o("p",j,m(t.title),1)])],8,R)]))),128))])]),o("p",{onClick:c[0]||(c[0]=(...t)=>n.goToMain&&n.goToMain(...t)),class:"go-to-main"},"Go to lesson home page")])}const z=d(M,[["render",q],["__scopeId","data-v-5bd08690"]]),A={name:"GoodsView",components:{GoodsList:F,GoodsItems:z},data(){return{goodsCategory:null}},computed:{...u("lesson09",["goodsByCategory"]),goodsCategoryName(){return this.$route.params.goodsName}},watch:{goodsCategoryName(e){this.goodsCategory=e}},mounted(){this.goodsCategory=this.goodsCategoryName}};function J(e,c,i,r,_,n){const t=$("GoodsItems"),g=$("GoodsList");return _.goodsCategory?(s(),y(t,{key:0})):(s(),y(g,{key:1}))}const K=d(A,[["render",J]]);const O={name:"PaymentView"},h=e=>(l("data-v-c534a92f"),e=e(),p(),e),Q={style:{}},W=h(()=>o("h2",null,"To be sure to receive a goods:",-1)),X=h(()=>o("p",null,"pay directly to shop",-1)),Y=h(()=>o("p",null,"& make donate for my coffee please )",-1)),Z=[W,X,Y];function ee(e,c,i,r,_,n){return s(),a("div",Q,Z)}const oe=d(O,[["render",ee],["__scopeId","data-v-c534a92f"]]);const te={name:"ContactsView"},k=e=>(l("data-v-5511fd63"),e=e(),p(),e),se={style:{}},ne=k(()=>o("h2",null,"Looking for contacts?",-1)),ae=k(()=>o("p",null,"Forget it! U don't need them ;)",-1)),ce=[ne,ae];function _e(e,c,i,r,_,n){return s(),a("div",se,ce)}const de=d(te,[["render",_e],["__scopeId","data-v-5511fd63"]]),re=[{path:"",name:"LessonNineHome",component:B},{path:"goods/:goodsName?",name:"GoodsView",component:K},{path:"payments",name:"Payments",component:oe},{path:"contacts",name:"Contacts",component:de}];export{re as default};
