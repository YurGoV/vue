<template>
  <input type="text" v-model="value" />
</template>

<script>
export default {
  props: {
    modelValue: String,
    mailData: Object,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      inputBgColor: ''
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        if (this.modelModifiers.check) {
          const isNameCorrect = value === this.mailData.userName
          this.inputBgColor = isNameCorrect ? '#82ce89' : '#d49191'
          value = isNameCorrect ? value + '@' + this.mailData.domain : value
          this.$emit('update:modelValue', value)
        } else {
          this.$emit('update:modelValue', value)
        }
      }
    }
  }
}
</script>

<style scoped>
input {
  max-width: 400px;
  background: v-bind(inputBgColor);
}
</style>
