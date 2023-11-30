import { candidates } from "../../../data/lesson12";

export default {
  namespaced: true,

  state: {
    candidates,
  },

  getters: {
    getCandidatesList(state) {
      return state.candidates;
    },

    getCandidateById: (state) => (candidateId) => {
      return state.candidates.find((candidate) => candidate.id === candidateId);
    },
  },
  actions: {
    deleteCandidateAction({ commit }, candidateId) {
      commit("deleteCandidate", candidateId);
    },
  },
  mutations: {
    deleteCandidate(state, candidateId) {
      const index = state.candidates.findIndex((candidate) =>
        candidate.id == candidateId
      );
      if (index !== -1) {
        state.candidates.splice(index, 1);

        this.dispatch("lesson12/interviews/deleteIncopleteInterviewsAction");
      } else {
        console.error("driver not found");
      }
    },
  },
};
