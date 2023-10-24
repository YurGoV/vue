<template>
  <div class="task-section">
    <div v-for="notebook in notebooksList" :key="notebook.id">
      <NotebookCard
        :id="notebook.id"
        :title="notebook.title"
        :imgSrc="notebook.imgSrc"
        :discount="notebook.discount"
        :oldPrice="notebook.oldPrice"
        :link="notebook.link"
        :price="notebook.price"
        :added="notebook.added"
        @addToBasket="addToBasket"
      />
    </div>
    <div v-if="basket.length">
      <h1>У вашому кошику:</h1>
      <p v-for="order in basketList" :key="order.id">{{ order.title }}</p>
    </div>
    <div v-else>
      <h1>Кошик порожній</h1>
    </div>
  </div>
</template>

<script>
import { notebooksList as data } from './data/3_data_notebooks'
import NotebookCard from './components/03/notebookCard.vue'
const notebooksList = data.map((notebook) => ({
  ...notebook,
  added: false
}))

export default {
  data() {
    return {
      notebooksList,
      basket: []
    }
  },
  components: {
    NotebookCard
    // RaspberryCard
  },
  methods: {
    addToBasket(id) {
      this.basket.push(id)
      const notebookIndex = notebooksList.findIndex((notebook) => notebook.id === id)
      this.notebooksList[notebookIndex].added = true
    }
  },
  computed: {
    basketList() {
      if (this.basket.length) {
        const result = this.notebooksList.filter((notebook) => this.basket.includes(notebook.id))
        return result
      } else {
        return null
      }
    }
  }
}
</script>
<style scoped>
.task-section {
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 680px;
}
.choise-section {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
}
.order {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
