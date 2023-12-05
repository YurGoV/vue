import LessonElevenHome from "../../components/lesson-11/Home.vue";
import LessonElevenDriversView from "../../components/lesson-11/DriversComponent.vue";
import LessonElevenEditDriver from "../../components/lesson-11/EditDriverComponent.vue";
import LessonElevenAddDriver from "../../components/lesson-11/AddDriverComponent.vue";
import LessonElevenBusesView from "../../components/lesson-11/BusesComponent.vue";
import LessonElevenEditBus from "../../components/lesson-11/EditBusComponent.vue";
import LessonElevenAddBus from "../../components/lesson-11/AddBusComponent.vue";
import LessonElevenAssignmentComponentView from "../../components/lesson-11/AssignmentComponent.vue";
import LessonElevenAboutView from "../../components/lesson-11/AboutComponent.vue";
import LessonElevenContactsView from "../../components/lesson-11/ContactsComponent.vue";

const lessonElevenRoutes = [
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
];

export default lessonElevenRoutes;
