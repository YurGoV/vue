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
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
    },
  },
  actions: {
    addContact(context) {
      context.commit("addContact");
    },
  },
};
