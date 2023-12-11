import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import GoodsView from "../views/GoodsView.vue";
import FilteredGoodsView from "../views/FilteredGoodsView.vue";
import AddGoodsView from "../views/AddGoodsView.vue";
import DeliverersView from "../views/DeliverersView.vue";
import ContactsView from "../views/ContactsView.vue";
import ShoppingRulesView from "../views/ShoppingRulesView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/goods",
    name: "goods",
    component: GoodsView,
    children: [
      { path: "selector", components: { default: FilteredGoodsView } },
      { path: "add", components: { default: AddGoodsView } },
    ],
  },
  {
    path: "/deliverers",
    name: "deliverers",
    component: DeliverersView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/rules",
    name: "rules",
    component: ShoppingRulesView,
  },
];

const base = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
