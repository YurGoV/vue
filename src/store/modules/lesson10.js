// import { createStore } from "vuex";
import { notebooksData } from "../../data/lesson10";
import { phonesData } from "../../data/lesson10";
import { tabletsData } from "../../data/lesson10";
import { pcData } from "../../data/lesson10";
import { categoriesList } from "../../data/lesson10";

// export const store = createStore({
export default {
  namespaced: true,

  state() {
    return {
      notebooksData,
      phonesData,
      tabletsData,
      pcData,
      categoriesList,
    };
  },
  getters: {
    categoriesList(state) {
      return [...state.categoriesList];
    },
    goodsByCategory: (state) => (categoryName) => {
      switch (categoryName) {
        case "Notebooks":
          return state.notebooksData;
        case "Phones":
          return state.phonesData;
        case "Tablets":
          return state.tabletsData;
        case "PC":
          return state.pcData;
        default:
          return null;
      }
    },
  },
};
