<template>
  <div class="edit">
    <input v-model="newBusData.number" type="text" />
    <input v-model="newBusData.capacity" type="number" />
  </div>
  <ActionBtn @click="editBus" :icon="saveIcon" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ActionBtn from './common/ActionBtn.vue'

import saveIcon from '@/assets/lesson-11/save.svg'

export default {
  name: 'LessonElevenEditBusView',

  components: {
    ActionBtn
  },

  data() {
    return {
      newBusData: { number: '', capacity: '' },
      saveIcon
    }
  },

  computed: {
    ...mapGetters('lesson11/lesson11Buses', ['getBusById']),
    busId() {
      return this.$route.params.busId
    },
    busData() {
      return this.getBusById(this.busId)
    }
  },

  watch: {
    busData: {
      handler(newBusData) {
        this.newBusData = { ...newBusData }
      },
      immediate: true
    }
  },

  methods: {
    ...mapActions('lesson11/lesson11Buses', ['editBusAction']),
    editBus() {
      this.editBusAction(this.newBusData)
      this.$router.push('/buses')
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
