<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'WorkersVew',

  computed: {
    ...mapGetters('lesson12/workers', ['getWorkersList'])
  },

  methods: {
    ...mapActions('lesson12/workers', ['deleteWorkerAction']),
    deleteWorker(id) {
      this.deleteWorkerAction(id)
    }
  }
}
</script>

<template>
  <div class="section">
    <p>workers:</p>
    <ul>
      <li v-for="worker in getWorkersList" :key="worker.id" @click="deleteWorker(worker.id)">
        {{ worker.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  display: flex;
  flex-direction: row;
  margin: 3px;
  padding: 2px;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
li:hover {
  border-color: red;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
