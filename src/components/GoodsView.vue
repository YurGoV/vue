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
  computed: {
    ...mapGetters(['goodsByCategory']),
    goodsCategoryName() {
      return this.$route.params.goodsName
    }
  },
  data() {
    return {
      goodsCategory: null
    }
  },
  watch: {
    goodsCategoryName(newGoodsCategoryName) {
      this.goodsCategory = newGoodsCategoryName
    }
  },
  methods: {
    goToMain() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<template>
  <GoodsItems v-if="goodsCategory" />
  <GoodsList v-else />
</template>
