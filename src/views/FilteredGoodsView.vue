<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilteredGoodsView',

  data() {
    return {
      inputVal: ''
    }
  },

  computed: {
    ...mapGetters('goods', ['getGoodsFilterValue']),
    currentInput: {
      get() {
        return this.getGoodsFilterValue
      },
      set(val) {
        return this.setGoodsFilterValue(val)
      }
    }
  },

  methods: {
    ...mapActions('goods', ['setGoodsFilterValue'])
  }
}
</script>

<template>
  <p>search by title:</p>
  <input v-model="currentInput" type="text" />
</template>

<style scoped></style>
