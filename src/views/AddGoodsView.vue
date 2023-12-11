<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddGoodsView',

  data() {
    return {
      newProductData: {},
      isDataIncomplite: true
    }
  },

  watch: {
    newProductData: {
      handler(newValue) {
        if (newValue.title && newValue.price && newValue.img) {
          this.isDataIncomplite = false
        }
      },
      deep: true
    }
  },

  methods: {
    ...mapActions('goods', ['addNewGoods']),
    onButtonClick() {
      this.addNewGoods(this.newProductData)
      this.newProductData = {}
      this.isDataIncomplite = true
    }
  }
}
</script>

<template>
  <p>add new Goods:</p>
  <label
    >Title:
    <input v-model="newProductData.title" type="text" />
  </label>
  <label
    >Price:
    <input v-model="newProductData.price" type="number" step="any" />
  </label>
  <label
    >Image url:
    <input v-model="newProductData.img" type="text" />
  </label>
  <button @click="onButtonClick" type="submit" :disabled="isDataIncomplite">Add Goods</button>
</template>

<style scoped></style>
