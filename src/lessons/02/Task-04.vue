<template>
  <!-- <div class="background"> -->
  <div class="task-section">
    <ul>
      <li v-for="worker in workersList" :key="worker.id">{{ worker.name }}: {{ worker.salary }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { workersList }
  }
}
const workersList = [
  {
    id: '111',
    name: 'Іванов',
    salary: 10000
  },
  {
    id: '112',
    name: 'Петров',
    salary: 20000
  },
  {
    id: '113',
    name: 'Сидоров',
    salary: 50000
  }
]
</script>

<style scoped>
ul {
  margin-top: auto;
  margin-bottom: auto;
}
.background {
  display: flex;
  padding: 5px;
  border: 1px dotted #000;
  min-width: 800px;
  min-height: 180px;
}
</style>
