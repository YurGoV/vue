<script>
import { mapGetters } from 'vuex'
import CategoryItem from './components/CategoryItem.vue'
import CategoryDetails from './components/CategoryDetails.vue'
export default {
  components: {
    CategoryItem,
    CategoryDetails
  },
  computed: {
    ...mapGetters(['categoriesList', 'getCategoryByName'])
    // selectorBoardColor() {
    //  return
    // }
  },
  methods: {
    setCategory(category) {
      this.category = category
      this.isActiveCategory = category
    }
  },
  data() {
    return {
      category: null,
      isActiveCategory: null
    }
  }
}
</script>

<template>
  <div class="task-section">
    <p>Task 1</p>
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
