import { lessons } from "../../data";

export default {
  namespaced: true,

  state: {
    lessons,
  },

  getters: {
    lessonsList: ({ lessons }) => lessons,

    lessonById: (state) => (id) => state.lessons[id],

    lessonsByIds: (state) => (idsArr) => {
      console.log(idsArr, "iA");
      const lessonsByIds = {};

      for (const id of idsArr) {
        lessonsByIds[id] = state.lessons[id];
      }

      return lessonsByIds;
    },
  },
};
