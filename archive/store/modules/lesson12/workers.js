import { workers } from "../../../data/lesson12";

export default {
  namespaced: true,

  state: {
    workers,
  },

  getters: {
    getWorkersList(state) {
      return state.workers;
    },
    getWorkerById: (state) => (workerId) => {
      return state.workers.find((worker) => worker.id === workerId);
    },
  },
  actions: {
    deleteWorkerAction({ commit }, workerId) {
      commit("deleteWorker", workerId);
    },
  },
  mutations: {
    deleteWorker(state, workerId) {
      const index = state.workers.findIndex((worker) => worker.id == workerId);
      if (index !== -1) {
        state.workers.splice(index, 1);

        this.dispatch("lesson12/interviews/deleteIncopleteInterviewsAction");
      } else {
        console.error("driver not found");
      }
    },
  },
};
