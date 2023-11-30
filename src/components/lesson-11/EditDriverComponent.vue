<script>
import { mapGetters, mapActions } from 'vuex'
import ActionBtn from './common/ActionBtn.vue'

import saveIcon from '@/assets/lesson-11/save.svg'

export default {
  name: 'LessonElevenEditDriverView',

  components: {
    ActionBtn
  },

  data() {
    return {
      newDriverData: { name: '', exp: '' },
      saveIcon
    }
  },

  computed: {
    ...mapGetters('lesson11/lesson11Drivers', ['getDriverById']),
    driverId() {
      return this.$route.params.driverId
    },
    driverData() {
      return this.getDriverById(this.driverId)
    }
  },

  watch: {
    driverData: {
      handler(newDriverData) {
        this.newDriverData = { ...newDriverData }
      },
      immediate: true
    }
  },

  methods: {
    ...mapActions('lesson11/lesson11Drivers', ['editDriverAction']),
    editDriver() {
      this.editDriverAction(this.newDriverData)
      this.$router.push('/drivers')
    }
  }
}
</script>

<template>
  <div class="edit">
    <input v-model="newDriverData.name" type="text" />
    <input v-model="newDriverData.exp" type="text" />
  </div>
  <ActionBtn @click="editDriver" :icon="saveIcon" />
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
