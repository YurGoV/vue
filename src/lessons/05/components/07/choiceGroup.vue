<template>
  <select v-model="selectedGroup" @change="emitGroupName" name="group">
    <option value="customers">customers</option>
    <option value="support">support</option>
  </select>
</template>

<script>
export default {
  name: 'ChoiceGroup',

  // NOTE: why browser warn without this?
  emits: ['groupChoice'],

  data() {
    return {
      selectedGroup: 'customers'
    }
  },
  methods: {
    emitGroupName() {
      this.$emit('groupChoice', this.selectedGroup)
    }
  }
}
</script>

<style scoped>
select {
  display: flex;
  align-items: center;
  background-color: #c0e9e7;
  padding: 10px;
  margin: 2px;
  border-radius: 50px;
  border: none;
  min-width: 437px;
  min-height: 40px;
  padding-left: 30px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
