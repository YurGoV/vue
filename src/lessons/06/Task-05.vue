<template>
  <div>
    <h2>Задача 5</h2>
    <p>
      Спробуйте відтворити фрагмент. Компонент ProductsFilters через v-model повертає 2 значення
      фільтра: продавець, бренд. При заданні модифікатора “check” відображати секцію зеленою рамкою,
      якщо фільтр з відповідної секції (продавець чи бренд) не обрано.
    </p>
    <div class="task-section">
      <GoodsSelector v-model.check="filter" />
      <GoodsList :notebooks-list="filteredNotebooksList" />
    </div>
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
  props: {
    modelModifiers: {
      default: () => ({})
    }
  },
  data() {
    return {
      notebooksData,
      filter: {
        selectedBrand: null,
        selectedCity: null
      }
    }
  },
  computed: {
    filteredNotebooksList() {
      return notebooksData.filter((notebook) => {
        if (this.filter.selectedCity && this.filter.selectedBrand) {
          return (
            notebook.city === this.filter.selectedCity &&
            notebook.brand === this.filter.selectedBrand
          )
        } else if (this.filter.selectedBrand) {
          return notebook.brand === this.filter.selectedBrand
        } else if (this.filter.selectedCity) {
          return notebook.city === this.filter.selectedCity
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
  justify-content: space-between;
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
</style>
