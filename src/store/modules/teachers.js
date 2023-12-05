import { teachers } from "../../data";

export default {
  namespaced: true,

  state: {
    teachers,
  },

  getters: {
    teachersList: ({ teachers }) => teachers,

    teacherById: ({ teachers }) => (id) =>
      teachers.find((teacher) => teacher.id === parseInt(id)),

    teachersByLessonId: ({ teachers }) => (lessonId) => {
      const teachersList = teachers.filter((teacher) => {
        return teacher.canTeach.includes(parseInt(lessonId));
      });
      return teachersList;
    },
  },
};
