<script>
export default {
  props: ['modelValue', 'bodyTypesList'],
  emits: ['update:modelValue'],
  computed: {
    bodyType: {
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
    <h3>body type</h3>
    <div>
      <select v-model="bodyType" name="bodyType" id="bodyType">
        <option value=""></option>
        <option v-for="bodyType of bodyTypesList" :key="bodyType" :value="bodyType">
          {{ bodyType }}
        </option>
      </select>
    </div>
  </div>
</template>
