<script>
import { mapGetters } from 'vuex'

import MainMasterPage from '../masterpages/MainMasterPage.vue'
import CardComponent from '../components/CardComponent.vue'

export default {
  name: 'GoodsView',

  components: {
    MainMasterPage,
    CardComponent
  },

  computed: {
    ...mapGetters('goods', ['filteredGoods'])
  }
}
</script>

<template>
  <MainMasterPage>
    <div class="sub-navigation">
      <router-link to="/goods/selector">Search</router-link> |
      <router-link to="/goods/add">Add</router-link>
      <router-view />
    </div>
    <p>Select the product:</p>
    <div class="goods-container">
      <CardComponent v-for="item in filteredGoods" :key="item.id" :item="item" />
    </div>
  </MainMasterPage>
</template>

<style scoped>
.goods-container {
  display: flex;
  flex-direction: row;
}
.sub-navigation {
  margin-top: 10px;
  padding: 10px;
}
</style>
