import { createStore } from "vuex";
import lesson09 from "./modules/lesson09";
import lesson10 from "./modules/lesson10";
import lesson11 from "./modules/lesson11";
import lesson12 from "./modules/lesson12";

export default createStore({
  namespaced: true,
  modules: {
    lesson09,
    lesson10,
    lesson11,
    lesson12,
  },
});
