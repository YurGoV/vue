<template>
  <div class="task-section">
    <div v-for="rasberry in raspberryList" :key="rasberry.id" >
      <RaspberryCard
        :id="rasberry.id"
        :icon="rasberry.imgSrc"
        :logo="rasberry.logo"
        :companyTitle="rasberry.companyTitle"
        :description="rasberry.description"
      />
    </div>
  </div>
</template>

<script>
import RaspberryCard from './components/02/raspberryCard.vue'
import { raspberryList } from './data/2_data_raspberry'

export default {
  components: {
    RaspberryCard
  },
  data() {
    return {
      raspberryList
    }
  },
}
</script>
<style scoped>
.task-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
  background-color: #3b3e4e;
}
</style>
