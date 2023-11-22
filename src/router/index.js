import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LessonTen from "../views/LessonTen.vue";
import LessonTenHome from "../components/lesson-10/Home.vue";
import GoodsView from "../components/lesson-10/GoodsView.vue";
import Payments from "../components/lesson-10/PaymentRules.vue";
import Contacts from "../components/lesson-10/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },

  {
    path: "/lesson-10",
    name: "LessonTen",
    component: LessonTen,
    children: [
      {
        path: "",
        name: "LessonTenHome",
        component: LessonTenHome,
      },
      {
        path: "goods",
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
  //   name: "Lesson11",
  //   component: () =>
  //     import(/* webpackChunkName: "lesson-11" */ "../views/Lesson11.vue"),
  // },
  // Add more routes for other lessons as needed
];

const base = import.meta.env.BASE_URL;

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(base),
  routes,
});

export default router;
