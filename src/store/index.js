import { createStore } from "vuex";
import lessons from "./modules/lessons";
import teachers from "./modules/teachers";
import auth from "./modules/auth";

export default createStore({
  namespaced: true,

  modules: {
    lessons,
    teachers,
    auth,
  },
});
