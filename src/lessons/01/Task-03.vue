<template>
  <!-- <button @click="increment">Рахунок: {{ count }}</button> -->
  <div style="border: 1px dotted #000; padding: 5px; min-width: 800px; min-height: 180px;">
    <form @submit.prevent='click' action="#" method="get">
      <div>
        <p>початок діапазону:</p>
        <input v-model="minNumber" type="number" />
        <p>кінець діапазону:</p>
        <input v-model="maxNumber" type="number" />
        <button @click="generate">Згенерувати</button>
        <p>Результат: {{ result }}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      minNumber: null,
      maxNumber: null
    }
  },
  methods: {
    generate() {
      if (this.minNumber >= this.maxNumber || !this.minNumber || !this.maxNumber) {
        this.result = 'помилка'
      } else {
        this.result = Math.ceil(Math.random() * (this.maxNumber - this.minNumber) + this.minNumber)
      }
    }
  }
}
</script>
