<template>
  <!-- <button @click="increment">Рахунок: {{ count }}</button> -->
  <div
    class="task-section"
    :class="{
      'background-business': isBusinessClassElected,
      'background-econom': isEconomClassElected
    }"
  >
    <form @submit.prevent="loginCheck" action="#" method="get">
      <div style="display: flex flexdirection: column ">
        <div style="display: flex; padding-bottom: 20px">
          <label for="tikcetClass">Choose Ticket Class:</label>
          <select v-model="ticketClass" name="ticketClass">
            <option value="business">Business</option>
            <option value="econom">Econom</option>
            <option value="null" selected>no choice</option>
          </select>
        </div>
        <div v-if="isBusinessClassElected" style="display: flex; flex-direction: column">
          <div>
            <label for="newsPaper">news paper</label>
            <input v-model="newsPaper" name="newsPaper" type="checkbox" value="true" />
          </div>
          <div>
            <label for="newsPaper">cognac</label>
            <input v-model="cognac" type="checkbox" value="true" />
          </div>
          <div v-if="isCogacElected">
            <label for="blackChocolate">black chocolate</label>
            <input v-model="blackChocolate" type="checkbox" value="true" />
          </div>
        </div>
        <div
          v-if="isEconomClassElected"
          style="display: flex; flex-direction: column; min-height: 65px"
        >
          <form>
            <div>
              <label for="lightBeer">light beer</label>
              <input v-model="lightBeer" name="beer" type="radio" value="true" />
            </div>
            <div>
              <label for="darkBeer">dark beer</label>
              <input v-model="darkBeer" name="beer" type="radio" value="true" />
            </div>
          </form>
          <div v-if="isBeerElected">
            <label for="chips">chips</label>
            <input v-model="chips" type="checkbox" value="true" />
          </div>
        </div>
        <div v-show="canMakeOrder" style="padding-top: 15px">
          <button @click="makeOrder">make order</button>
        </div>
        <div v-show="showOrder">
          <p>your order:</p>
          <p>{{ this.order }}</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ticketClass: null,
      newsPaper: null,
      cognac: null,
      blackChocolate: null,
      lightBeer: null,
      darkBeer: null,
      chips: null,
      order: null
    }
  },
  methods: {
    makeOrder() {
      this.order = ''
      const ticketClass = this.ticketClass + ' class ticket.'
      const newsPaper = this.newsPaper ? ' news paper.' : ''
      const cognac = this.cognac ? ' cognac.' : ''
      const blackChocolate = this.blackChocolate ? ' black chocolate.' : ''
      const lightBeer = this.lightBeer ? ' light beer.' : ''
      const darkBeer = this.darkBeer ? ' dark beer.' : ''
      const chips = this.chips ? ' chips.' : ''

      this.order = ticketClass + newsPaper + cognac + blackChocolate + lightBeer + darkBeer + chips
    },
    resetOrder() {
      this.order = null
    }
  },
  computed: {
    isBusinessClassElected() {
      return this.ticketClass === 'business'
    },
    isEconomClassElected() {
      return this.ticketClass === 'econom'
    },
    isCogacElected() {
      return this.cognac
    },
    isBeerElected() {
      return this.lightBeer || this.darkBeer
    },
    canMakeOrder() {
      return this.isBusinessClassElected || this.isEconomClassElected
    },
    showOrder() {
      return this.order && this.canMakeOrder
    }
  },
  watch: {
    ticketClass: 'resetOrder'
  }
}
</script>

<style scoped>
.custom-error-color {
  color: blue;
}
.default-error-color {
  color: red;
}
.background {
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
.background-business {
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url('/02-business-class.png');
}
.background-econom {
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url('/02-illuminators.png');
}
</style>
