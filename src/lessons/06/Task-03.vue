<template>
  <div class="task-section">
    <h2>Задача 3.</h2>
    <p>
      Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu”
      (приклад: ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не
      вводить її). При заданні модифікатора check відображати червоним фоном input, якщо
      некоректний.
    </p>
    <EmailInput
      v-model.check="emailValue"
      :mailData="{
        userName,
        domain
      }"
    />
  </div>
</template>

<script>
import EmailInput from './components/03/EmailInput.vue'
const userName = 'ivan-hopko'
const domain = 'inv.mn.edu'

export default {
  components: {
    EmailInput
  },
  data() {
    return {
      emailValue: '',
      userName,
      domain
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
  /* background-color: #3b3e4e; */
}
</style>
