import { Entities } from "@/data/lesson11";

export default {
  namespaced: true,
  state: {
    assignmentsList: [],
  },
  getters: {
    getAssignmentsList: (state) => state.assignmentsList,
    getDriversList: (state, getters, rootState, rootGetters) => {
      const allDrivers = rootGetters["lesson11/lesson11Drivers/getAllDriversList"];
      if (state.assignmentsList.length === 0) {
        return allDrivers;
      } else {
        const driversIds = state.assignmentsList.map((assignment) =>
          assignment.driverId
        );
        return allDrivers.filter((driver) => !driversIds.includes(driver.id));
      }
    },
    getBusesList: (state, getters, rootState, rootGetters) => {
      const allBuses = rootGetters["lesson11/lesson11Buses/getAllBusesList"];
      if (state.assignmentsList.length === 0) {
        return allBuses;
      } else {
        const busesIds = state.assignmentsList.map((assignment) =>
          assignment.busId
        );
        return allBuses.filter((bus) => !busesIds.includes(bus.id));
      }
    },
  },

  actions: {
    addAssignmentAction({ commit }, newAssignmentData) {
      commit("addAssignment", newAssignmentData);
    },
    deleteAssignmentAction({ commit }, assignmentId) {
      commit("deleteAssignment", assignmentId);
    },
    onEntityDeleteAction({ commit }, deleteActionData) {
      commit("onEntityDelete", deleteActionData);
    },
  },

  mutations: {
    addAssignment(state, newAssignmentData) {
      const id = Date.now();
      state.assignmentsList.push({ ...newAssignmentData, id });
    },
    deleteAssignment(state, assignment) {
      const { id } = assignment;
      const index = state.assignmentsList.findIndex((assignment) =>
        assignment.id === id
      );
      if (index !== -1) {
        state.assignmentsList.splice(index, 1);
      } else {
        console.error("assignment not found");
      }
    },
    onEntityDelete(state, deleteActionData) {
      const { action, id } = deleteActionData;
      let assignmentIndex = null;
      if (action === Entities.DRIVERS) {
        assignmentIndex = state.assignmentsList.findIndex((assignment) =>
          assignment.driverId === id
        );
        state.assignmentsList.splice(assignmentIndex, 1);
      } else if (action === Entities.BUSES) {
        assignmentIndex = state.assignmentsList.findIndex((assignment) =>
          assignment.driverId === id
        );
        state.assignmentsList.splice(assignmentIndex, 1);
      } else {
        throw new Error("no valid atction");
      }
      if (assignmentIndex && assignmentIndex !== -1) {
        state.assignmentsList.splice(assignmentIndex, 1);
      }
    },
  },
};
