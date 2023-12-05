<script>
import { mapActions } from 'vuex'
import ActionBtn from './common/ActionBtn.vue'

import saveIcon from '@/assets/lesson-11/save.svg'

export default {
  name: 'LessonElevenAddDriverView',

  components: {
    ActionBtn
  },

  data() {
    return {
      newDriverData: { name: '', exp: '' },
      saveIcon
    }
  },

  methods: {
    ...mapActions('lesson11/lesson11Drivers', ['addDriverAction']),
    addDriver() {
      this.addDriverAction(this.newDriverData)
      this.$router.push('/drivers')
    },
    onKeyDown(evt) {
      const key = evt.key
      const isLetterOrSpace = key.match(/\p{L}|\s/u)
      if (!isLetterOrSpace) evt.preventDefault()
    }
  }
}
</script>

<template>
  <div class="edit">
    <input v-model="newDriverData.name" @keydown="onKeyDown" type="text" placeholder="name" />
    <input v-model="newDriverData.exp" type="number" placeholder="experience" />
  </div>
  <ActionBtn @click="addDriver" :icon="saveIcon" />
</template>

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
