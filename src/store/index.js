import { createStore } from "vuex";
import lesson10 from "./modules/lesson10";

export default createStore({
  modules: {
    lesson10,
  },
});

// import { notebooksData } from "../data";
// import { phonesData } from "../data";
// import { tabletsData } from "../data";
// import { pcData } from "../data";
// import { categoriesList } from "../data";
//
// export const store = createStore({
//   state() {
//     return {
//       notebooksData,
//       phonesData,
//       tabletsData,
//       pcData,
//       categoriesList,
//     };
//   },
//   getters: {
//     categoriesList(state) {
//       return [...state.categoriesList];
//     },
//     goodsByCategory: (state) => (categoryName) => {
//       switch (categoryName) {
//         case "Notebooks":
//           return state.notebooksData;
//         case "Phones":
//           return state.phonesData;
//         case "Tablets":
//           return state.tabletsData;
//         case "PC":
//           return state.pcData;
//         default:
//           return null;
//       }
//     },
//   },
// });
