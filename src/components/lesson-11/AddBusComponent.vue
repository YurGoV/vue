<template>
  <div class="edit">
    <input v-model="newBusData.number" @keydown="onKeyDown" type="text" placeholder="number" />
    <input v-model="newBusData.capacity" type="number" placeholder="capacity" />
  </div>
  <ActionBtn @click="addBus" :icon="saveIcon" />
</template>

<script>
import { mapActions } from 'vuex'
import ActionBtn from './common/ActionBtn.vue'

import saveIcon from '@/assets/lesson-11/save.svg'

export default {
  name: 'LessonElevenAddBusView',

  components: {
    ActionBtn
  },

  data() {
    return {
      newBusData: { number: '', capacity: '' },
      saveIcon
    }
  },

  watch: {
    'newBusData.number'() {
      this.newBusData.number = this.newBusData.number.toUpperCase()
    }
  },

  methods: {
    ...mapActions('lesson11/lesson11Buses', ['addBusAction']),
    addBus() {
      this.addBusAction(this.newBusData)
      this.$router.push('/buses')
    },
    onKeyDown(evt) {
      const isLetterOrNumber = evt.key.match(/[a-zA-Z0-9]/)
      if (!isLetterOrNumber) {
        if (!isLetterOrNumber) evt.preventDefault()
      }
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  flex-direction: row;
}
input {
  display: flex;
  max-width: 200px;
}
.edit {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}
</style>
