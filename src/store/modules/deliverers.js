import { deliverersData } from "../../data";

export default {
  namespaced: true,

  state: {
    deliverers: deliverersData,
  },

  getters: {
    deliverersList: ({ deliverers }) => deliverers,
  },
};
