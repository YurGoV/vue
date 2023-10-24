<template>
  <button
    :class="[{ selected: isSelected, 'not-selected': !isSelected }, 'button']"
    :disabled="!isActive"
  >
    {{ screen }}
  </button>
</template>

<script>
export default {
  name: 'ViewToggleButton',

  props: {
    screen: String,
    isActive: Boolean,
    isSelected: Boolean
  }
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  cursor: pointer;
}
.disabled {
  background-color: #ccc;
  background-color: #ccc;
  cursor: not-allowed;
}
.selected {
  background-color: #c0e9e7;
}

.not-selected {
  background-color: #edeee9;
}
</style>
