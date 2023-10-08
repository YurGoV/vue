<template>
  <!-- <button @click="increment">Рахунок: {{ count }}</button> -->
  <div style="border: 1px dotted #000; padding: 5px; min-width: 800px;">
    <form action="#" method="get">
      <div>
        <p>Введіть кількість пасажирів:</p>
        <input v-model="numberOfPassengers" tabindex="1" type="number" />
        <p>Потрібно:</p>
        <p>{{ busesAmount }} автобусів</p>
        <p>{{ bottlesAmount }} пляшок води</p>
        <p>{{ sandwichesAmount }} бутербродів</p>
      </div>
    </form>
  </div>
</template>

<script>
const busCapacity = 20
const bottlesPerPassenger = 2
const sandwichesPerPassenger = 3

export default {
  data() {
    return {
      numberOfPassengers: 0
    }
  },
  computed: {
    busesAmount() {
      return Math.ceil(this.numberOfPassengers / busCapacity)
    },
    bottlesAmount() {
      return this.numberOfPassengers * bottlesPerPassenger
    },
    sandwichesAmount() {
      return this.numberOfPassengers * sandwichesPerPassenger
    }
  }
}
</script>
