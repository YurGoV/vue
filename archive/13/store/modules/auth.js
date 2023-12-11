export default {
  namespaced: true,

  state: {
    login: null,
  },

  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    userLogin: ({ login }) => login,
  },

  actions: {
    logInAction({ commit }, login) {
      commit("logIn", login);
    },
    logOutAction({ commit }) {
      commit("logOut");
    },
  },

  mutations: {
    logIn(state, login) {
      state.login = login;
    },
    logOut(state) {
      state.login = null;
    },
  },
};
