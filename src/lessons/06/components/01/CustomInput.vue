<template>
  <!-- <input :value="modelValue" @input="emitValue" type="number" /> -->
  <input
    v-model="value"
    @input="emitValue"
    type="number"
    :disabled="isDisabled"
    :class="backgroundColor"
  />
</template>

<script>
export default {
  props: {
    modelValue: {},
    modelModifiers: {
      default: () => ({})
    }
  },

  emits: ['update:modelValue'],

  data() {
    return {
      isDisabled: false
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        if (this.modelModifiers.check) {
          console.log(typeof value, 'check')
          if (value > 150) {
            value = 150
            this.isDisabled = true
            console.log('150')
          }
        }
        this.$emit('update:modelValue', value)
      }
    },
    backgroundColor() {
      if (this.modelValue === '' || this.modelValue === 0) {
        return ''
      }
      if (this.modelValue < 10) {
        return 'green'
      }
      if (this.modelValue >= 10 && this.modelValue < 21) {
        return 'yellow'
      }
      return 'orange'
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue <= 150) {
        this.isDisabled = false
      }
    }
  }
}
</script>

<style scoped>
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.orange {
  background-color: orange;
}
</style>
