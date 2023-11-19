<script>
import { mapGetters } from 'vuex'
import CarBodytypeSelector from './components/task-02/CarBodytypeSelector.vue'
import CarManufacturerSelector from './components/task-02/CarManufacturerSelector.vue'
import CarYearOfManufacturedSelector from './components/task-02/CarYearOfManufacturedSelector.vue'
import SelectedCars from './components/task-02/SelectedCars.vue'

export default {
  components: {
    CarBodytypeSelector,
    CarManufacturerSelector,
    CarYearOfManufacturedSelector,
    SelectedCars
  },
  data() {
    return {
      selectedBodyType: null,
      selectedManufacturer: null,
      selectedYear: null
    }
  },
  computed: {
    ...mapGetters(['carsBodyTypeList', 'carsManufacturersList', 'yearsList', 'cars']),
    selectedCars() {
      let selectedCars = [...this.cars]
      if (this.selectedBodyType) {
        selectedCars = selectedCars.filter((car) => car.bodyType === this.selectedBodyType)
      }
      if (this.selectedManufacturer) {
        selectedCars = selectedCars.filter((car) => car.manufacturer === this.selectedManufacturer)
      }
      if (this.selectedYear) {
        selectedCars = selectedCars.filter((car) => car.year === this.selectedYear)
      }
      return selectedCars
    }
  }
}
</script>

<template>
  <div class="task-section">
    <div class="selectors-section">
      <h2>Task 2</h2>
      <CarBodytypeSelector v-model="selectedBodyType" :bodyTypesList="carsBodyTypeList" />
      <CarManufacturerSelector
        v-model="selectedManufacturer"
        :manufacturersList="carsManufacturersList"
      />
      <CarYearOfManufacturedSelector v-model="selectedYear" :yearsList="yearsList" />
    </div>
    <SelectedCars :cars="this.selectedCars" />
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  min-width: 800px;
  justify-content: flex-start;
}
.task-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
.selectors-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
  max-width: 400px;
  min-height: 180px;
  margin-right: 30px;
}
</style>
