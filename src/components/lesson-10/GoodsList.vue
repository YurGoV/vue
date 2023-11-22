<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GoodsList',
  computed: {
    ...mapGetters('lesson10', ['categoriesList'])
  },
  methods: {
    onCategoryClick(name) {
      this.$router.push({
        name: 'goodsView',
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
    <ul>
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
</style>
