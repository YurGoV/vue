<script>
import { mapGetters } from 'vuex'
import CategoryItem from './components/task-01/CategoryItem.vue'
import CategoryDetails from './components/task-01/CategoryDetails.vue'
export default {
  components: {
    CategoryItem,
    CategoryDetails
  },
  data() {
    return {
      category: null,
      isActiveCategory: null
    }
  },
  computed: {
    ...mapGetters(['categoriesList', 'getCategoryByName'])
  },
  methods: {
    setCategory(category) {
      this.category = category
      this.isActiveCategory = category
    }
  }
}
</script>

<template>
  <div class="task-section">
    <h2>Task 1</h2>
    <ul>
      <li v-for="category in categoriesList" :key="category.name">
        <CategoryItem
          @click="setCategory(category.name)"
          :category="{
            name: category.name,
            img: category.img
          }"
          :isActive="category.name === isActiveCategory"
        />
      </li>
    </ul>
    <!-- <CategoryDetails :details="category" /> -->
    <CategoryDetails :details="getCategoryByName(this.category)" />
  </div>
  <!-- </div> -->
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  min-width: 800px;
  justify-content: flex-start;
}
.task-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
</style>
