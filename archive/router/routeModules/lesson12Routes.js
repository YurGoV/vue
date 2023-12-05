import Home from "../../components/lesson-12/Home.vue";
import WorkersView from "../../components/lesson-12/WorkersComponent.vue";
import CandidatesView from "../../components/lesson-12/CandidatesComponent.vue";
import InterviewsWiew from "../../components/lesson-12/InterviewsComponent.vue";

const lessonTwelveRoutes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/workers",
    name: "workers",
    component: WorkersView,
  },
  {
    path: "/candidates",
    name: "candidates",
    component: CandidatesView,
  },
  {
    path: "/interviews",
    name: "interviews",
    component: InterviewsWiew,
  },
];

export default lessonTwelveRoutes;
