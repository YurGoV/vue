<script>
import SlaveMasterPage from '../masterpages/SlaveMasterPage.vue'

export default {
  name: 'ShoppingRulesView',
  components: { SlaveMasterPage }
}
</script>

<template>
  <SlaveMasterPage>
    <h1>Shopping Rules</h1>
    <h2>choose carefully, buy decisively</h2>
  </SlaveMasterPage>
</template>

<style scoped>
.goods-container {
  display: flex;
  flex-direction: row;
}
</style>
