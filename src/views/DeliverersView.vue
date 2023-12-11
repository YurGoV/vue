<script>
import { mapGetters } from 'vuex'

import MainMasterPage from '../masterpages/MainMasterPage.vue'
import CardComponent from '../components/CardComponent.vue'

export default {
  name: 'DeliverersView',

  components: {
    MainMasterPage,
    CardComponent
  },

  computed: {
    ...mapGetters('deliverers', ['deliverersList'])
  }
}
</script>

<template>
  <MainMasterPage>
    <p>Select deliverer:</p>
    <div class="goods-container">
      <CardComponent v-for="item in deliverersList" :key="item.id" :item="item">
        <font-awesome-icon :icon="['fas', 'truck']" />
      </CardComponent>
    </div>
  </MainMasterPage>
</template>

<style scoped>
.goods-container {
  display: flex;
  flex-direction: row;
}
</style>
