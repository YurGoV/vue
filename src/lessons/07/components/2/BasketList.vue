<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['removeFromBasket'])
  },
  computed: {
    ...mapGetters(['getBasketList', 'getTotalBasketCount'])
  }
}
</script>

<template>
  <div>
    <h2>Basket</h2>
    <ul>
      <li v-for="goods in getBasketList" :key="goods.id">
        {{ goods.name }}, {{ goods.price }}
        <button @click="removeFromBasket({ id: goods.id })">remove</button>
      </li>
    </ul>
    <p>Total: {{ getTotalBasketCount }}</p>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
