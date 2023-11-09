<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      currencyRate: 1
    }
  },
  methods: {
    ...mapActions(['setCurrencyRate'])
  },
  watch: {
    currencyRate(newValue) {
      this.setCurrencyRate({ currencyRate: Number(newValue) })
    }
  }
}
</script>

<template>
  <div>
    <h2>Choose valut</h2>
    <div>
      <select v-model="currencyRate" name="currency" id="currency">
        <option value="1" selected>UAH</option>
        <option value="0.028">USD</option>
      </select>
    </div>
  </div>
</template>
