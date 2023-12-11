<script>
import SlaveMasterPage from '../masterpages/SlaveMasterPage.vue'

export default {
  name: 'ContactsView',
  components: { SlaveMasterPage }
}
</script>

<template>
  <SlaveMasterPage />
</template>

<style scoped>
.goods-container {
  display: flex;
  flex-direction: row;
}
</style>
