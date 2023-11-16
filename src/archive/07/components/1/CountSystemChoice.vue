<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      countSystem: '12'
    }
  },
  watch: {
    countSystem(newValue) {
      this.setCountSystem({ countSystem: Number(newValue) })
    }
  },
  methods: {
    ...mapActions(['setCountSystem'])
  }
}
</script>

<template>
  <div class="section">
    <h2>Count system</h2>
    <div>
      <select v-model="countSystem" name="system" id="system">
        <option value="12" selected>12</option>
        <option value="5">5</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
select {
  margin-top: 20px;
}
.section {
  margin-left: 20px;
}
</style>
