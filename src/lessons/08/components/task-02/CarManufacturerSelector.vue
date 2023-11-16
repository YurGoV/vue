<script>
export default {
  props: ['modelValue', 'manufacturersList'],
  emits: ['update:modelValue'],
  computed: {
    manufarturers: {
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
    <h3>manufacturer</h3>
    <div>
      <select v-model="manufarturers" name="manufarturers" id="manufarturers">
        <option value=''></option>
        <option
          v-for="manufarturer of manufacturersList"
          :key="manufarturer"
          :value="manufarturer"
        >
          {{ manufarturer }}
        </option>
      </select>
    </div>
  </div>
</template>
