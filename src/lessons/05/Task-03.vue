<template>
  <div class="task-section">
    <div v-for="item in notebooksList" :key="item.id">
      <NotebookCard
        :id="item.id"
        :title="item.title"
        :imgSrc="item.imgSrc"
        :discount="item.discount"
        :oldPrice="item.oldPrice"
        :link="item.link"
        :price="item.price"
        :added="item.added"
        @addToBasket="addToBasket"
      />
    </div>
    <div v-if="basket.length">
      <h1>У вашому кошику:</h1>
      <p v-for="item in basketList" :key="item.id">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { notebooksList as data } from './data/3_data_notebooks'
import NotebookCard from './components/notebookCard.vue'
// import { raspberryList } from './data/2_data_raspberry'
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
      const notebookIndex = notebooksList.findIndex((el) => el.id === id)
      console.log(notebookIndex)
      this.notebooksList[notebookIndex].added = true
      console.log(id, 'in main section')
      // this.$emit('addToBasket', id)
    }
  },
  computed: {
    basketList() {
      if (this.basket.length) {
        const result = this.notebooksList.filter((notebook) => this.basket.includes(notebook.id))
        console.log(result)
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
