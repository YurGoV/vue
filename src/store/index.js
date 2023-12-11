import { createStore } from "vuex";
import goods from "./modules/goods";
import deliverers from "./modules/deliverers";

export default createStore({
  namespaced: true,

  modules: {
    goods,
    deliverers,
  },
});
