import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LessonTwelve from "../views/LessonTwelve.vue";
import lessonTwelveRoutes from "./routeModules/lesson12Routes";

// lazy load:
const LessonEleven = () => import("../views/LessonEleven.vue");
const LessonNine = () => import("../views/LessonNine.vue");
const LessonTen = () => import("../views/LessonTen.vue");
// TODO: not work with:
// const lessonNineRoutes = () => import("./routeModules/lesson09Routes");
// const lessonTenRoutes = () => imoprt("./routeModules/lesson10Routes");

import lessonNineRoutes from "./routeModules/lesson09Routes";
import lessonTenRoutes from "./routeModules/lesson10Routes";
import lessonElevenRoutes from "./routeModules/lesson11Routes";

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
    children: lessonNineRoutes,
  },
  {
    path: "/lesson-10",
    name: "LessonTen",
    component: LessonTen,
    children: lessonTenRoutes,
  },
  {
    path: "/lesson-11",
    name: "LessonEleven",
    component: LessonEleven,
    children: lessonElevenRoutes,
  },
  {
    path: "/lesson-12",
    name: "LessonTwelve",
    component: LessonTwelve,
    children: lessonTwelveRoutes,
  },
];

const base = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
