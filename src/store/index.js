import { createStore } from "vuex";
import { notebooksData } from "../lessons/08/data";
import { tabletsData } from "../lessons/08/data";
import { pcData } from "../lessons/08/data";
import { phonesData } from "../lessons/08/data";
import { categoriesList } from "../lessons/08/data";

export const store = createStore({
  state() {
    return {
      notebooksData,
      tabletsData,
      phonesData,
      pcData,
      categoriesList,
    };
  },
  getters: {
    categoriesList(state) {
      return state.categoriesList;
    },
    getCategoryByName: (state) => (categoryName) => {
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
});
