import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LessonTen from "../views/LessonNine.vue";
import LessonTenHome from "../components/lesson-09/Home.vue";
import GoodsView from "../components/lesson-09/GoodsView.vue";
import Payments from "../components/lesson-09/PaymentRules.vue";
import Contacts from "../components/lesson-09/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },

  {
    path: "/lesson-9",
    name: "LessonTen",
    component: LessonTen,
    children: [
      {
        path: "",
        name: "LessonTenHome",
        component: LessonTenHome,
      },
      {
        path: "goods/:goodsName?",
        name: "GoodsView",
        component: GoodsView,
      },
      {
        path: "payments",
        name: "Payments",
        component: Payments,
      },
      {
        path: "contacts",
        name: "Contacts",
        component: Contacts,
      },
    ],
  },
  // {
  //   path: "/lesson-11",
  // ....
];

const base = import.meta.env.BASE_URL;

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(base),
  routes,
});

export default router;
