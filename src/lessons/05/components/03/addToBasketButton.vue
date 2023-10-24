<template>
  <button :disabled="added" @click="addToBasket(id)">До кошика</button>
</template>

<script>
export default {
  props: {
    id: Number,
    added: Boolean
  },
  methods: {
    addToBasket() {
      this.$emit('addToBasket', this.id)
    }
  }
}
</script>

<style scoped>
p {
  margin: 3px;
}
button:hover {
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
