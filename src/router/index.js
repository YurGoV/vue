import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/Home.vue";
import GoodsView from "../components/GoodsView.vue";
import GoodsList from "../components/GoodsList.vue";
import PaymentRules from "../components/PaymentRules.vue";
import ContactsView from "../components/Contacts.vue";

const routes = [
  {
    path: "/vue",
    name: "home",
    component: HomeView,
  },
  {
    path: "/vue/goods/:goodsName?",
    name: "goodsView",
    component: GoodsView,
  },
  // {
  //   path: "/vue/goods/",
  //   name: "goodsList",
  //   component: GoodsList,
  // },
  {
    path: "/vue/payments",
    name: "paymentRules",
    component: PaymentRules,
  },
  {
    path: "/vue/contacts",
    name: "contacts",
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
