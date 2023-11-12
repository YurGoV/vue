<script>
import Task01 from './07/Task-01.vue'
import Task02 from './07/Task-02.vue'
export default {
  components: {
    Task01,
    Task02
  }
}
</script>

<template>
  <div class="tasks">
    <h1>Lesson 7 tasks</h1>
    <Task01 />
    <Task02 />
  </div>
</template>

<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
}
</style>
