import { days } from "../../../data/lesson12";
import { interviews } from "../../../data/lesson12";

export default {
  namespaced: true,

  state: {
    interviews,
  },

  getters: {
    getInterviewsList(state, getters, rootState, rootGetters) {
      const getWorkerById = rootGetters["lesson12/workers/getWorkerById"];
      const getCandidateById =
        rootGetters["lesson12/candidates/getCandidateById"];

      const sortedInterviews = state.interviews.sort((a, b) => a.day - b.day);

      return sortedInterviews.reduce((acc, interview) => {
        const workerName = getWorkerById(interview.workerId).name;
        const candidateName = getCandidateById(interview.candidateId).name;
        const day = days[interview.day];
        const id = interview.id;

        acc.push({ id, candidateName, workerName, day });
        return acc;
      }, []);
    },

    getWorkersWighoutInterviewList(state, getters, rootState, rootGetters) {
      const allWorkers = rootGetters["lesson12/workers/getWorkersList"];
      const workersWithInterviewIds = state.interviews.map((interview) =>
        interview.workerId
      );
      return allWorkers.filter((worker) =>
        !workersWithInterviewIds.includes(worker.id)
      );
    },

    getCandidatesWighoutInterviewList(state, getters, rootState, rootGetters) {
      const allCandidates =
        rootGetters["lesson12/candidates/getCandidatesList"];
      const candidatesWithInterviewIds = state.interviews.map((interview) =>
        interview.candidateId
      );
      return allCandidates.filter((candidate) =>
        !candidatesWithInterviewIds.includes(candidate.id)
      );
    },

    getFreeForInterviewDays(state) {
      const interviewDaysIds = state.interviews.map((interview) =>
        interview.day
      );
      const countMap = {};
      interviewDaysIds.forEach((value) => {
        countMap[value] = (countMap[value] || 0) + 1;
      });

      const filteredDaysArray = Object.entries(days).filter(([key]) =>
        !countMap[key] || countMap[key] <= 1
      );

      const filteredDays = Object.fromEntries(
        filteredDaysArray,
        //   Object.entries(days).filter(([key]) => countMap[parseInt(key)] <= 1),
        // );
        // const filteredDays =
      );

      return filteredDays;
    },
  },

  actions: {
    deleteInterviewByIdAction({ commit }, interviewId) {
      commit("deleteInterviewById", interviewId);
    },

    deleteIncopleteInterviewsAction({ commit, rootGetters }) {
      commit("deleteIncompleteInterview", { rootGetters });
    },

    addInterviewAction({ commit }, interviewData) {
      commit("addInterview", interviewData);
    },
  },

  mutations: {
    deleteInterviewById(state, id) {
      const index = state.interviews.findIndex((interview) =>
        interview.id === id
      );

      state.interviews.splice(index, 1);
    },

    deleteIncompleteInterview(state, payload) {
      const workers = payload.rootGetters["lesson12/workers/getWorkersList"];
      const workersIds = workers.map((worker) => worker.id);
      const candidates =
        payload.rootGetters["lesson12/candidates/getCandidatesList"];
      const candidatesIds = candidates.map((candidate) => candidate.id);

      const incompleteInterviewsIds = state.interviews.filter((interview) =>
        !workersIds.includes(interview.workerId) ||
        !candidatesIds.includes(interview.candidateId)
      )
        .map((interview) => interview.id);

      for (const interviewId of incompleteInterviewsIds) {
        const index = state.interviews.findIndex((interview) =>
          interview.id === interviewId
        );

        state.interviews.splice(index, 1);
      }
    },

    addInterview(state, interviewData) {
      const id = Date.now();
      state.interviews.push({ ...interviewData, id });
    },
  },
};
