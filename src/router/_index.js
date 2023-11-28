import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LessonNine from "../views/LessonNine.vue";
import LessonNineHome from "../components/lesson-09/Home.vue";
import GoodsView from "../components/lesson-09/GoodsView.vue";
import Payments from "../components/lesson-09/PaymentRules.vue";
import Contacts from "../components/lesson-09/Contacts.vue";

import LessonTen from "../views/LessonTen.vue";
import LessonTenHome from "../components/lesson-10/Home.vue";

import LessonEleven from "../views/LessonEleven.vue";
import LessonElevenHome from "../components/lesson-11/Home.vue";
import LessonElevenAboutView from "../components/lesson-11/AboutComponent.vue";
import LessonElevenContactsView from "../components/lesson-11/ContactsComponent.vue";
import LessonElevenDriversView from "../components/lesson-11/DriversComponent.vue";
import LessonElevenBusesView from "../components/lesson-11/BusesComponent.vue";
import LessonElevenEditBus from "../components/lesson-11/EditBusComponent.vue";
import LessonElevenAssignmentComponentView from "../components/lesson-11/AssignmentComponent.vue";
import LessonElevenEditDriver from "../components/lesson-11/EditDriverComponent.vue";
import LessonElevenAddDriver from "../components/lesson-11/AddDriverComponent.vue";
import LessonElevenAddBus from "../components/lesson-11/AddBusComponent.vue";

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
  {
    path: "/lesson-11",
    name: "LessonEleven",
    component: LessonEleven,
    children: [
      {
        path: "",
        name: "LessonElevenHome",
        component: LessonElevenHome,
      },
      {
        path: "/drivers",
        name: "drivers",
        component: LessonElevenDriversView,
      },
      {
        path: "/editDriver/:driverId",
        name: "editDriver",
        component: LessonElevenEditDriver,
      },
      {
        path: "/add-driver/",
        name: "addDriver",
        component: LessonElevenAddDriver,
      },
      {
        path: "/buses",
        name: "buses",
        component: LessonElevenBusesView,
      },
      {
        path: "/editBus/:busId",
        name: "editBus",
        component: LessonElevenEditBus,
      },
      {
        path: "/add-bus/",
        name: "addBus",
        component: LessonElevenAddBus,
      },
      {
        path: "/assignments",
        name: "assignments",
        component: LessonElevenAssignmentComponentView,
      },
      {
        path: "about",
        name: "LessonElevenAboutView",
        component: LessonElevenAboutView,
      },
      {
        path: "contacts",
        name: "LessonElevenContactsView",
        component: LessonElevenContactsView,
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
