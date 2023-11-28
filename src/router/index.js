import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LessonNine from "../views/LessonNine.vue";
import LessonTen from "../views/LessonTen.vue";
import LessonEleven from "../views/LessonEleven.vue";

import lessonNineRoutes from "./routeModules/lesson09Routes";
import lessonTenRoutes from "./routeModules/lesson10Routes";
import lessonElevenRoutes from "./routeModules/lesson11Routes";

const routes = [
  // ... other routes
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
];

const base = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
