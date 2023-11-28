import { Entities } from "@/data/lesson11";

export default {
  namespaced: true,
  state: {
    busesList: [
      {
        id: 1,
        number: "AO2312HA",
        capacity: 25,
      },
      {
        id: 2,
        number: "AO237HA",
        capacity: 40,
      },
    ],
  },
  getters: {
    getAllBusesList: (state) => [...state.busesList],

    getBusById: (state) => (id) => state.busesList.find((bus) => bus.id == id),
  },

  actions: {
    addBusAction({ commit }, newBusData) {
      commit("addBus", newBusData);
    },
    editBusAction({ commit }, newBusData) {
      commit("editBus", newBusData);
    },
    deleteBusAction({ commit }, busId) {
      commit("deleteBus", busId);
    },
  },

  mutations: {
    addBus(state, newBusData) {
      const id = Date.now();
      state.busesList.push({ ...newBusData, id });
    },
    editBus(state, newBusData) {
      const index = state.busesList.findIndex((bus) => bus.id == newBusData.id);
      if (index !== -1) {
        state.busesList[index] = { ...newBusData };
      } else {
        console.error("bus not found");
      }
    },
    deleteBus(state, driverId) {
      const index = state.busesList.findIndex((bus) => bus.id == driverId);
      if (index !== -1) {
        state.busesList.splice(index, 1);

        this.dispatch("lesson11/lesson11Assignments/onEntityDeleteAction", {
          action: Entities.BUSES,
          id: driverId,
        });
      } else {
        console.error("bus not found");
      }
    },
  },
};
