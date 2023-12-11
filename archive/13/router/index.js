import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import HomeView from "../views/HomeView.vue";
import SelectLessonsView from "../views/SelectLessonsView.vue";
import SelectTeachersView from "../views/SelectTeachersView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import TeachersView from "../views/TeachersView.vue";
import LoginView from "../views/LoginView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: { requireAuth: false },
  },
  {
    path: "/lessons/select",
    name: "select-lessons",
    component: SelectLessonsView,
    meta: { requireAuth: true },
  },
  {
    path: "/lessons/:id(\\d*)+",
    name: "select-teachers",
    component: SelectTeachersView,
    props: true,
    meta: { requireAuth: true },
  },
  {
    path: "/lessons/:id(\\d*,\\d*)+",
    name: "schedule",
    component: ScheduleView,
    props: true,
    meta: { requireAuth: false },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { requireAuth: false },
  },
  {
    path: "/teachers",
    name: "teachers",
    component: TeachersView,
    meta: { requireAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { requireAuth: true },
  },
];

const base = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

router.beforeEach((to) => {
  const isLoggedIn = store.getters["auth/userLogin"];
  if (to.meta.requireAuth && !isLoggedIn) {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
