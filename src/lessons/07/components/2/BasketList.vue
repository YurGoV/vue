<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getBasketList'])
  }
}
</script>

<template>
  <div>
    <h2>Basket</h2>
    <ul>
      <li v-for="goods in getBasketList" :key="goods.id">{{ goods.name }}, {{ goods.price }}</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
