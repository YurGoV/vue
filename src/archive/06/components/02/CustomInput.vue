<template>
  <input type="text" v-model="value" />
</template>

<script>
export default {
  props: {
    modelValue: String,
    pathProps: Object,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    bgColor() {
      if (this.modelModifiers.checkPath) {
        if (this.modelValue === '') return ''
        return this.modelValue.startsWith(this.pathProps.path) &&
          this.modelValue.endsWith(this.pathProps.extension)
          ? '#82ce89'
          : '#d49191'
      } else return null
    }
  }
}
</script>

<style scoped>
input {
  max-width: 400px;
  background: v-bind(bgColor);
}
</style>
