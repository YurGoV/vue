<template>
  <div class="task-section">
    <h2>Задача 4</h2>
    <p>
      Розробити компонент для вводу віку користувача та імені. Робити форматування при заданні
      відповідних модифікаторів відповідних полів input: ім’я користувача - у випадку порожнього
      поля (червони фон) вік (вік менший за 18 – колір фону червоний, інакше – зелений).
    </p>
    <UserInputs v-model:user-name="name" v-model:user-age="age" />
  </div>
</template>

<script>
import UserInputs from './components/04/UserInputs.vue'
export default {
  components: {
    UserInputs
  },
  data() {
    return {
      name: '',
      age: null
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
  min-height: 180px;
}
</style>
