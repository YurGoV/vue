<template>
  <div class="main">
    <p>Cities:</p>
    <div v-for="brand in brands" :key="brand">
      <input type="radio" :value="brand" v-model="localSelectedBrand" :id="brand" name="brand" />
      <label :for="brand">{{ brand }}</label>
    </div>

    <p>Brands:</p>
    <div v-for="city in cities" :key="city">
      <input type="radio" :value="city" v-model="localSelectedCity" :id="city" name="city" />
      <label :for="city">{{ city }}</label>
    </div>
  </div>
</template>
<script>
import { cities } from '../../data/citiesData'
import { brands } from '../../data/brandsData'

export default {
  emits: ['update:selectedBrand', 'update:selectedCity'],
  data() {
    return {
      cities,
      brands,
      selectedBrand: null,
      selectedCity: null
    }
  },
  computed: {
    localSelectedBrand: {
      get() {
        return this.selectedBrand
      },
      set(value) {
        this.$emit('update:selectedBrand', value)
      }
    },
    localSelectedCity: {
      get() {
        return this.selectedCity
      },
      set(value) {
        this.$emit('update:selectedCity', value)
      }
    }
  }
}
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
