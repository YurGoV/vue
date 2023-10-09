<template>
  <!-- <button @click="increment">Рахунок: {{ count }}</button> -->
  <div style="border: 1px dotted #000; padding: 5px; min-width: 800px; min-height: 180px">
    <form @submit.prevent="click" action="#" method="get">
      <div>
        <p>Сума до зарахування:</p>
        <input v-model="sumToAdd" type="number" />
        <button @click="add">Зарахувати</button>
        <p>Сума до зняття:</p>
        <input v-model="sumToWithdraw" type="number" />
        <button @click="withdraw">Знятии</button>
        <p>
          Баланс: <span :style="{ color: amountSumColor }"> {{ amount }} </span> UAH
        </p>
        <p> <span style="color: red"> {{ errorMessage }} </span> </p>
        <p>Списано відсотків за проведення операції: {{ percentages }} UAH</p>
        <p>
          Сума у доларах <span :style="{ color: usdSumColor }"> {{ sumInUsd }} USD</span>
        </p>
        <p>
          Сума у Євро <span :style="{ color: eurSumColor }"> {{ sumInEur }} </span> EUR
        </p>
      </div>
    </form>
  </div>
</template>

<script>
const uahToEur = 40.0
const uahToUsd = 38.0

export default {
  data() {
    return {
      amount: null,
      sumToAdd: null,
      sumToWithdraw: null,
      amountSumColor: null,
      percentages: null,
      errorMessage: null,
      sumInUsd: null,
      usdSumColor: null,
      sumInEur: null,
      eurSumColor: null
    }
  },
  methods: {
    add() {
      this.percentages = (this.sumToAdd * 0.03).toFixed(2)
      this.amount = this.amount + this.sumToAdd - this.percentages
      this.amountSumColor = 'green'
      this.countValutesBalances()
      this.errorMessage = null
    },
    withdraw() {
      const percentages = (this.sumToWithdraw * 0.03).toFixed(2)
      if (this.amount - this.sumToWithdraw - percentages < 0) {
        this.errorMessage = 'недостатньо коштів'
      } else {
        this.amount = this.amount - this.sumToWithdraw - percentages
        this.percentages = percentages
        this.amountSumColor = 'red'
        this.errorMessage = null
      }
      this.countValutesBalances()
    },
    countValutesBalances() {
      this.sumInUsd = (this.amount / uahToUsd).toFixed(2)
      this.usdSumColor = this.sumInUsd < 100 ? 'red' : 'green'
      this.sumInEur = (this.amount / uahToEur).toFixed(2)
      this.eurSumColor = this.sumInEur < 100 ? 'red' : 'green'
    }
  }
}
</script>
