<template>
  <div class="task-section">
    <h2>Задача 2.</h2>
    <p>
      Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що
      закінчується розширенням js). При заданні модифікатора checkPath відображати червоним фоном
      input, якщо шлях некоректний.
    </p>
    <p>
      My PC is on Linux & my username is 'yuriy'. <br/>
      Please type any file name with its full path, which can be directly in my home folder & its extension is standard for JavaScript )
    </p>
    <custom-input
      v-model.checkPath="inputPath"
      :pathProps="{
        path: '/home/yuriy/',
        extension: '.js'
      }"
    />
  </div>
</template>

<script>
import CustomInput from './components/02/CustomInput.vue'

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      inputPath: ''
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
