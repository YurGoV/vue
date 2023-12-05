<script>
export default {
  props: ['modelValue', 'yearsList'],
  emits: ['update:modelValue'],
  computed: {
    year: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<template>
  <div>
    <h3>year</h3>
    <div>
      <select v-model="year" name="year" id="year">
        <option value=''></option>
        <option v-for="year of yearsList" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>
  </div>
</template>
