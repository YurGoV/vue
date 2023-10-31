<template>
  <div class="task-section">
    <GoodsSelector v-model:selected-brand="selectedBrand" v-model:selected-city="selectedCity" />
    <GoodsList :notebooks-list="selectedNotebooks" />
  </div>
</template>
<script>
import GoodsList from './components/05/GoodsList.vue'
import GoodsSelector from './components/05/GoodsSelector.vue'
import { notebooksData } from './data/notebooksData'

export default {
  components: {
    GoodsList,
    GoodsSelector
  },
  data() {
    return {
      notebooksData,
      selectedBrand: null,
      selectedCity: null
    }
  },
  computed: {
    selectedNotebooks() {
      return notebooksData.filter((notebook) => {
        if (this.selectedCity && this.selectedBrand) {
          return notebook.city === this.selectedCity && notebook.brand === this.selectedBrand
        } else if (this.selectedBrand) {
          return notebook.brand === this.selectedBrand
        } else if (this.selectedCity) {
          return notebook.city === this.selectedCity
        } else return this.notebooksData
      })
    }
  }
}
</script>
<style scoped>
.task-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
</style>
