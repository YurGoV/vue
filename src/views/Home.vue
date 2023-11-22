<script>
export default {
  name: 'HomeView'
}
</script>

<template>
  <div style="tasks">
    <h1>Vue.js course homeworks</h1>
    <h2>To Check:</h2>
    <ul>
      <li><router-link to="/lesson-10">Lesson 10</router-link></li>
      <!-- Add more links for other lessons as needed -->
    </ul>
  </div>
</template>

<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
  margin: 0;
}
</style>
