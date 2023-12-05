import LessonNineHome from "../../components/lesson-09/Home.vue";
import GoodsView from "../../components/lesson-09/GoodsView.vue";
import Payments from "../../components/lesson-09/PaymentRules.vue";
import Contacts from "../../components/lesson-09/Contacts.vue";

const lessonNineRoutes = [
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
];

export default lessonNineRoutes;
