<script setup>
import Task01 from './06/Task-01.vue'
import Task02 from './06/Task-02.vue'
import Task03 from './06/Task-03.vue'
import Task04 from './06/Task-04.vue'
import Task05 from './06/Task-05.vue'
import Task06 from './06/Task-06.vue'
</script>

<template>
  <div>
    <h1>Домашні завдання до уроку №6</h1>
    <div class="tasks">
      <Task01 />
      <Task02 />
      <Task03 />
      <Task04 />
      <Task05 />
      <Task06 />
    </div>
  </div>
</template>
<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
}
</style>
