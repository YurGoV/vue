<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['addToBasket'])
  },
  computed: {
    ...mapGetters(['getGoodsList'])
  }
}
</script>

<template>
  <div>
    <h2>Goods List</h2>
    <ul>
      <li v-for="goods in getGoodsList" :key="goods.id">
        {{ goods.name }}, {{ goods.price }}
        <button @click="addToBasket({ id: goods.id })">add</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
