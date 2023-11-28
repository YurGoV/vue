<template>
  <div class="section">
    <p>filter:</p>
    <input v-model="nameFilter" @keydown="onKeyDown" type="text" placeholder="name" />
    <input v-model="expMinFilter" class="input-exp" type="number" placeholder="exp-min" />
    <input v-model="expMaxFilter" class="input-exp" type="number" placeholder="exp-max" />
    <p>drivers(name / experience):</p>
    <ul>
      <li v-for="driver in driversList" :key="driver.id">
        {{ driver.name }} - {{ driver.exp }}
        <ActionBtn @click="editDriver(driver.id)" :icon="editIcon" />
        <ActionBtn @click="deleteDriver(driver.id)" :icon="deleteIcon" />
      </li>
    </ul>
    <button @click="addDriver">Add Driver</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ActionBtn from './common/ActionBtn.vue'

import editIcon from '@/assets/lesson-11/edit.svg'
import deleteIcon from '@/assets/lesson-11/delete.svg'

export default {
  name: 'LessonElevenDriversView',

  components: {
    ActionBtn
  },

  data() {
    return {
      nameFilter: '',
      expMinFilter: '',
      expMaxFilter: '',
      editIcon,
      deleteIcon
    }
  },

  computed: {
    ...mapGetters('lesson11/lesson11Drivers', ['getDriversFilteredList']),
    driversList() {
      return this.getDriversFilteredList({
        name: this.nameFilter,
        expMin: this.expMinFilter,
        expMax: this.expMaxFilter
      })
    }
  },

  methods: {
    ...mapActions('lesson11/lesson11Drivers', ['deleteDriverAction']),
    addDriver() {
      this.$router.push('add-driver')
    },
    editDriver(id) {
      this.$router.push({ name: 'editDriver', params: { driverId: id } })
    },
    deleteDriver(id) {
      this.deleteDriverAction(id)
    },

    onKeyDown(event) {
      const isLetter = event.key.match(/\p{Letter}/u)
      if (!isLetter) event.preventDefault()
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  flex-direction: row;
}
button {
  width: 200px;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.input-exp {
  width: 70px;
}
</style>
