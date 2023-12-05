<script>
import { mapGetters } from 'vuex'
import GoodsList from './GoodsList.vue'
import GoodsItems from './GoodsItems.vue'

export default {
  name: 'GoodsView',

  components: {
    GoodsList,
    GoodsItems
  },

  data() {
    return {
      goodsCategory: null
    }
  },

  computed: {
    ...mapGetters('lesson09', ['goodsByCategory']),
    goodsCategoryName() {
      return this.$route.params.goodsName
    }
  },

  watch: {
    goodsCategoryName(newGoodsCategoryName) {
      this.goodsCategory = newGoodsCategoryName
    }
  },

  mounted() {
    this.goodsCategory = this.goodsCategoryName
  }
}
</script>

<template>
  <GoodsItems v-if="goodsCategory" />
  <GoodsList v-else />
</template>
