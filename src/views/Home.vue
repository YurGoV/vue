<script>
export default {
  name: 'HomeView'
}
</script>

<template>
  <div style="tasks">
    <h1>Vue.js course homeworks</h1>
    <h2>Ready for review:</h2>
    <ul>
      <li><router-link to="/lesson-11">Lesson 11</router-link></li>
      <li><router-link to="/lesson-12">Lesson 12</router-link></li>
    </ul>

    <h2>Reviewed (needs refactoring)</h2>
    <ul>
      <li><router-link to="/lesson-9">Lesson 9</router-link></li>
      <li><router-link to="/lesson-10">Lesson 10</router-link></li>
    </ul>
    <h2>Reviewed (refactored)</h2>
  </div>
</template>

<style scoped>
li {
  padding: 5px;
}
.tasks {
  display: flex;
  flex-direction: column;
  margin: 0;
}
</style>
