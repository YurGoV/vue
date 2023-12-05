<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GoodsList',

  computed: {
    ...mapGetters('lesson09', ['categoriesList'])
  },

  methods: {
    onCategoryClick(name) {
      this.$router.push({
        name: 'GoodsView',
        params: {
          goodsName: name
        }
      })
    }
  }
}
</script>

<template>
  <div>
    <p>Goods List:</p>
    <ul class="list">
      <li
        @click="onCategoryClick(category.name)"
        v-for="category in categoriesList"
        :key="category.name"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  color: blue;
  padding: 5px;
}
li:hover {
  color: green;
  cursor: pointer;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
