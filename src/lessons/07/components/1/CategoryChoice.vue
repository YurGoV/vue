<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      category: ''
    }
  },
  watch: {
    category(newValue) {
      this.setCategory({ category: newValue })
    }
  },
  methods: {
    ...mapActions(['setCategory'])
  },
  computed: {
    ...mapGetters(['getCategories', 'getSelectedCountSystem']),
    isFivePointRatingSystem() {
      return this.getSelectedCountSystem === 5
    }
  }
}
</script>

<template>
  <div v-if="isFivePointRatingSystem" class="section">
    <h2>category</h2>
    <select v-model="category" name="category" id="category">
      <option v-for="categoryOption in getCategories" :key="categoryOption" :value="categoryOption">
        {{ categoryOption }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.section {
  margin-left: 20px;
}
</style>
