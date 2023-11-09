<script>
import StudentsList from './components/1/StudentsList.vue'
import CountSystemChoice from './components/1/CountSystemChoice.vue'
import CategoryChoice from './components/1/CategoryChoice.vue'

export default {
  components: {
    StudentsList,
    CountSystemChoice,
    CategoryChoice
  }
}
</script>

<template>
  <div class="task-section">
    <StudentsList />
    <CountSystemChoice />
    <CategoryChoice />
  </div>
</template>

<style scoped>
.task-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
</style>
