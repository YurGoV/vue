<template>
  <div class="task-section">
    <div v-for="item in raspberryList" :key="item.id" >
      <RaspberryCard
        :id="item.id"
        :icon="item.imgSrc"
        :logo="item.logo"
        :companyTitle="item.companyTitle"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
import RaspberryCard from './components/raspberryCard.vue'
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
  // computed: {
  //   raspberryList() {
  //     return raspberryList
  //   }
  // },
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
