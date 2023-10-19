<template>
  <div class="task-section">
    <div class="choise-section">
      <div class="column">
          <h2>Choose brand</h2>
          <select v-model="selectedBrandId">
            <option v-for="{ value: brand, id } in brands" :value="id" :key="id">
              {{ brand }}
            </option>
          </select>
      </div>
      <div v-if="selectedBrandId" class="row">
        <div class="column">
          <h2>Choose year</h2>
          <select v-model="selectedYear">
            <option v-for="(year, index) in availableYears" :value="year" :key="index">
              {{ year }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="order">
      <ul>
        <li v-for="car in filteredCars" :key="car.id">
          {{ getBrandById(car.brandId) }}, {{ car.manufacturedOn }} year, {{ car.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { brandsDb as brands } from './data/autoData'
import { automobilesDb as cars } from './data/autoData'

export default {
  data() {
    return {
      brands,
      selectedBrandId: '',
      selectedYear: '',
    }
  },
  computed: {
    availableYears() {
      return cars.reduce((acc, car) => {
        if (car.brandId === this.selectedBrandId && !acc.includes(car.manufacturedOn)) {
          acc.push(car.manufacturedOn)
        }
        return acc
      }, [])
    },
    filteredCars() {
        if (this.selectedBrandId && this.selectedYear) {
      return cars.filter(el =>
          el.brandId === this.selectedBrandId && el.manufacturedOn === this.selectedYear)
        } else if (this.selectedBrandId) {
      return cars.filter(el =>
          el.brandId === this.selectedBrandId)
      }
      return cars
    },
  },
  methods: {
    getBrandById(id) {
      const brandRecord = brands.find((el) => el.id === id)
      return brandRecord.value
    },
    resetSelectedYear() {
      this.selectedYear = null
    }
  },
  watch: {
    selectedBrandId: 'resetSelectedYear'
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.task-section {
  border: 1px dotted #000;
  padding: 5px;
  min-width: 800px;
  min-height: 180px;
}
.choise-section {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
}
.order {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
