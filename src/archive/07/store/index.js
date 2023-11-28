import { createStore } from "vuex";
import { students } from "../lessons/07/data/";
import { categories } from "../lessons/07/data/";
import { goodsList } from "../lessons/07/data/";

export const store = createStore({
  state() {
    return {
      students,
      selectedCountSystem: 12,
      categories,
      selectedCategory: null,
      currencyRate: 1,
      goodsList,
      goodsBasket: [],
    };
  },
  getters: {
    getStudents(state) {
      if (state.selectedCountSystem === 12) {
        return students;
      }
      const fivePointCountedStudents = students.map((student) => {
        const fivePointGrade = Math.ceil(student.averageGrade / 12 * 5);
        const fivePointCountedStudents = {
          ...student,
          averageGrade: fivePointGrade,
        };
        return fivePointCountedStudents;
      });
      if (state.selectedCategory) {
        const categoryRange = categories[state.selectedCategory];
        return fivePointCountedStudents.filter((student) => {
          return (
            student.averageGrade >= categoryRange[0] &&
            student.averageGrade <= categoryRange[1]
          );
        });
      }
      return fivePointCountedStudents;
    },
    getCategories(state) {
      return Object.keys(state.categories);
    },
    getSelectedCountSystem(state) {
      return state.selectedCountSystem;
    },
    getGoodsList(state) {
      if (state.currencyRate === 1) {
        return state.goodsList.map((goods) => {
          const formattedPrice = `${goods.priceUAH} UAH`;
          return { id: goods.id, name: goods.name, price: formattedPrice };
        });
      }
      return state.goodsList.map((goods) => {
        const formattedPrice = `${
          (goods.priceUAH * state.currencyRate).toFixed(2)
        } USD`;
        return { id: goods.id, name: goods.name, price: formattedPrice };
      });
    },
    getBasketList(state) {
      if (state.currencyRate === 1) {
        return state.goodsBasket.map((goods) => {
          const formattedPrice = `${goods.priceUAH} UAH`;
          return { id: goods.id, name: goods.name, price: formattedPrice };
        });
      }
      return state.goodsBasket.map((goods) => {
        const formattedPrice = `${
          (goods.priceUAH * state.currencyRate).toFixed(2)
        } USD`;
        return { id: goods.id, name: goods.name, price: formattedPrice };
      });
    },
    getTotalBasketCount(state) {
      if (state.currencyRate === 1) {
        const totalCount = state.goodsBasket.reduce(
        (sum, goods) => sum + goods.priceUAH,
          0,
        );
        return `${totalCount} UAH`;
      }
      const totalCount = state.goodsBasket.reduce(
          (sum, goods) => sum + Number((goods.priceUAH * state.currencyRate).toFixed(2)),
        0,
      );
      return `${totalCount} USD`;
    },
  },
  mutations: {
    setCountSystem(state, payload) {
      state.selectedCountSystem = payload.countSystem;
    },
    setCategory(state, payload) {
      state.selectedCategory = payload.category;
    },
    setCurrencyRate(state, payload) {
      state.currencyRate = payload.currencyRate;
    },
    addToBasket(state, payload) {
      const index = state.goodsList.findIndex((goods) =>
        goods.id === payload.id
      );
      state.goodsBasket.push(state.goodsList[index]);
    },
    removeFromBasket(state, payload) {
      const index = state.goodsBasket.findIndex((goods) =>
        goods.id === payload.id
      );
      state.goodsBasket.splice(index, 1);
    },
  },
  actions: {
    setCountSystem(context, payload) {
      context.commit("setCountSystem", payload);
    },
    setCategory(context, payload) {
      context.commit("setCategory", payload);
    },
    setCurrencyRate(context, payload) {
      context.commit("setCurrencyRate", payload);
    },
    addToBasket(context, payload) {
      context.commit("addToBasket", payload);
    },
    removeFromBasket(context, payload) {
      context.commit("removeFromBasket", payload);
    },
  },
});
