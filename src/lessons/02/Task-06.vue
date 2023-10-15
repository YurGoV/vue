<template>
  <!-- <button @click="increment">Рахунок: {{ count }}</button> -->
  <!-- <div style="border: 1px dotted #000; padding: 5px; min-width: 800px; min-height: 180px"> -->
  <div class="task-section">
    <!-- <form @submit.prevent="loginCheck" action="#" method="get"> -->
    <h1>Order a meal:</h1>
    <input v-model.trim="mealOrder" type="string" />
    <button @click="makeOrder">Make order</button>
    <div class="main-display">
      <div class="column">
        <h2>Awaiting Execution</h2>
        <ul>
          <li v-for="waitingOrder in waitingList" :key="waitingOrder.id">
            {{ waitingOrder.food }}
            <button @click="startToCook(waitingOrder.id)">Start to cook</button>
          </li>
        </ul>
      </div>
      <div class="column">
        <h2>In Progress</h2>
        <ul>
          <li v-for="inProgressOrder in inProgressList" :key="inProgressOrder.id">
            {{ inProgressOrder.food }}
            <button @click="isReady(inProgressOrder.id)">Ready</button>
          </li>
        </ul>
      </div>
      <div class="column">
        <h2>Ready to Serve</h2>
        <ul>
          <li v-for="readyOrder in isReadyList" :key="readyOrder.id">
            {{ readyOrder.food }}
            <button @click="served(readyOrder.id)">Served</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  data() {
    return {
      mealOrder: '',
      waitingList: [],
      inProgressList: [],
      isReadyList: []
    }
  },
  methods: {
    makeOrder() {
      if (!this.mealOrder) return
      this.waitingList.push({ id: getRandomId(), food: this.mealOrder })
      this.mealOrder = ''
    },
    startToCook(id) {
      const index = this.waitingList.findIndex((el) => el.id === id)
      this.inProgressList.push(this.waitingList[index])
      this.waitingList.splice(index, 1)
    },
    isReady(id) {
      const index = this.inProgressList.findIndex((el) => el.id === id)
      this.isReadyList.push(this.inProgressList[index])
      this.inProgressList.splice(index, 1)
    },
    served(id) {
      this.isReadyList.splice(id, 1)
    }
  },
  computed: {}
}
function getRandomId() {
  return uuidv4()
}
</script>

<style scoped>
.main-display {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
  width: 250px;
  border: 1px solid grey;
}
.custom-error-color {
  color: blue;
}
.default-error-color {
  color: red;
}
</style>
