import { Entities } from "@/data/lesson11";

export default {
  namespaced: true,
  state: {
    driversList: [
      {
        id: 1,
        name: "Ivan",
        exp: 12,
      },
      {
        id: 2,
        name: "Petro",
        exp: 23,
      },
    ],
  },
  getters: {
    getAllDriversList: (state) => state.driversList,

    getDriversFilteredList: (state) => ({ name, expMin, expMax }) => {
      let filteredDriversList = [...state.driversList];
      if (name) {
        filteredDriversList = filteredDriversList.filter((driver) =>
          driver.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      if (expMin) {
        filteredDriversList = filteredDriversList.filter((driver) =>
          driver.exp >= expMin
        );
      }
      if (expMax) {
        filteredDriversList = filteredDriversList.filter((driver) =>
          driver.exp <= expMax
        );
      }
      return filteredDriversList;
    },

    getDriverById: (state) => (id) =>
      state.driversList.find((driver) => driver.id == id),
  },

  actions: {
    addDriverAction({ commit }, newDriverData) {
      commit("addDriver", newDriverData);
    },
    editDriverAction({ commit }, newDriverData) {
      commit("editDriver", newDriverData);
    },
    deleteDriverAction({ commit }, driverId) {
      commit("deleteDriver", driverId);
    },
  },

  mutations: {
    addDriver(state, newDriverData) {
      const id = Date.now();
      state.driversList.push({ ...newDriverData, id });
    },
    editDriver(state, newDriverData) {
      const index = state.driversList.findIndex((driver) =>
        driver.id == newDriverData.id
      );
      if (index !== -1) {
        state.driversList[index] = { ...newDriverData };
      } else {
        console.error("driver not found");
      }
    },
    deleteDriver(state, driverId) {
      const index = state.driversList.findIndex((driver) =>
        driver.id == driverId
      );
      if (index !== -1) {
        state.driversList.splice(index, 1);

        this.dispatch("lesson11/lesson11Assignments/onEntityDeleteAction", {
          entity: Entities.DRIVERS,
          id: driverId,
        });
      } else {
        console.error("driver not found");
      }
    },
  },
};
