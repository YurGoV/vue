import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LessonNine from "../views/LessonNine.vue";
import LessonNineHome from "../components/lesson-09/Home.vue";
import GoodsView from "../components/lesson-09/GoodsView.vue";
import Payments from "../components/lesson-09/PaymentRules.vue";
import Contacts from "../components/lesson-09/Contacts.vue";

import LessonTen from "../views/LessonTen.vue";
import LessonTenHome from "../components/lesson-10/Home.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },

  {
    path: "/lesson-9",
    name: "LessonNine",
    component: LessonNine,
    children: [
      {
        path: "",
        name: "LessonNineHome",
        component: LessonNineHome,
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
  {
    path: "/lesson-10",
    name: "LessonTen",
    component: LessonTen,
    children: [
      {
        path: ":groups?",
        name: "Groups",
        component: LessonTenHome,
      },
    ],
  },
];

const base = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
