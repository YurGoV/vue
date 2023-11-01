<template>
  <div class="task-section">
    <h2>Задача 1.</h2>
    <p>
      Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні
      модифікатора check не допускати введення некоректного віку (вік не може бути більшим за 150).
      При заданні модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий,
      інакше – оранжевий).
    </p>
    <div>
      <CustomInput v-model.check="inputValue" />
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
import CustomInput from './components/01/CustomInput.vue'

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    reset() {
      this.inputValue = ''
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
