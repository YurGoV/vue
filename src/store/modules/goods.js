import { notebooksData } from "../../data";

export default {
  namespaced: true,

  state: {
    goods: notebooksData,
    goodsFilterValue: "",
  },

  getters: {
    filteredGoods(state) {
      const lowercasedFilterValue = state.goodsFilterValue.toLowerCase();

      if (!lowercasedFilterValue) {
        return state.goods;
      }
      return state.goods.filter((goodsItem) =>
        goodsItem.title.toLowerCase().includes(lowercasedFilterValue)
      );
    },

    getGoodsFilterValue: ({ goodsFilterValue }) => goodsFilterValue,
  },

  actions: {
    setGoodsFilterValue({ commit }, payload) {
      commit("setGoodsFilter", payload);
    },

    addNewGoods({ commit }, payload) {
      commit("addGoods", payload);
    },
  },

  mutations: {
    setGoodsFilter(state, payload) {
      state.goodsFilterValue = payload;
    },

    addGoods(state, payload) {
      const id = Date.now();
      state.goods.push({ ...payload, id });
    },
  },
};
