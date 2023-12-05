<template>
  <div class="task-section">
    <h2>Задача 6</h2>
    <p>
      Створити компонент - форму для вводу даних кредитної карти (на зразок поданого прикладу). При
      вводі “EXPIRY DATE” розділювач “/” додається автоматично.
    </p>
    <PayCard v-model="cardData" />
  </div>
</template>
<script>
import PayCard from './components/06/PayCard.vue'
export default {
  components: {
    PayCard
  },
  data() {
    return {
      cardData: {
        cardNumber: '',
        expiryDate: '',
        secureCode: null
      }
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
