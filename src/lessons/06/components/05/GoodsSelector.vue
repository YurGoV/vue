<template>
  <div class="main">
    <p>Brands:</p>
    <div v-for="brand in brands" :key="brand">
      <input
        type="radio"
        :value="brand"
        v-model="localFilter.selectedBrand"
        :id="brand"
        name="brand"
      />
      <label :for="brand">{{ brand }}</label>
    </div>

    <p>Cities:</p>
    <div v-for="city in cities" :key="city">
      <input type="radio" :value="city" v-model="localFilter.selectedCity" :id="city" name="city" />
      <label :for="city">{{ city }}</label>
    </div>
  </div>
</template>
<script>
import { cities } from '../../data/citiesData'
import { brands } from '../../data/brandsData'

export default {
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:filter'],
  data() {
    return {
      cities,
      brands,
      localFilter: {
        selectedBrand: this.modelValue.selectedBrand,
        selectedCity: this.modelValue.selectedCity
      }
    }
  },
  computed: {
    sectionColor() {
      if (this.modelModifiers.check) {
        return this.localFilter.selectedCity && this.localFilter.selectedBrand ? null : 'green'
      }
      return null
    }
  },
  watch: {
    localFilter: {
      handler(newValue) {
        this.$emit('update:modelValue', newValue)
      },
      deep: true
    }
  }
}
</script>
<style scoped>
.main {
  display: flex;
  min-width: 200px;
  flex-direction: column;
  border: 2px solid;
  border-color: v-bind(sectionColor);
}
</style>
