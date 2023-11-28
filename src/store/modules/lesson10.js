import { contacts } from "../../data/lesson10";

export default {
  namespaced: true,

  state() {
    return {
      contacts,
    };
  },
  getters: {
    getContacts(state) {
      return [...state.contacts];
    },
  },

  actions: {
    addContact(context) {
      context.commit("addContact");
    },
  },

  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
    },
  },
};
