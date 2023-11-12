<script>
import ValutChoice from './components/2/ValutChoice.vue'
import GoodsList from './components/2/GoodsList.vue'
import BasketList from './components/2/BasketList.vue'
export default {
  components: {
    ValutChoice,
    GoodsList,
    BasketList
  }
}
</script>

<template>
  <div class="task-section">
    <GoodsList />
    <ValutChoice />
    <BasketList />
  </div>
</template>

<style scoped>
.task-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
</style>
