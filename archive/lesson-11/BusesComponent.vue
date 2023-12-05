<script>
import { mapGetters, mapActions } from 'vuex'

import ActionBtn from './common/ActionBtn.vue'

import editIcon from '@/assets/lesson-11/edit.svg'
import deleteIcon from '@/assets/lesson-11/delete.svg'

export default {
  name: 'LessonElevenBusesView',

  components: {
    ActionBtn
  },

  data() {
    return {
      editIcon,
      deleteIcon
    }
  },

  computed: {
    ...mapGetters('lesson11/lesson11Buses', ['getAllBusesList'])
  },

  methods: {
    ...mapActions('lesson11/lesson11Buses', ['deleteBusAction']),
    editBus(id) {
      this.$router.push({ name: 'editBus', params: { busId: id } })
    },
    deleteBus(id) {
      this.deleteBusAction(id)
    },
    addBus() {
      this.$router.push('add-bus')
    }
  }
}
</script>

<template>
  <div class="section">
    <p>buses:</p>
    <p>number - capacity (peoples)</p>
    <ul>
      <li v-for="bus in getAllBusesList" :key="bus.id">
        {{ bus.number }} = {{ bus.capacity }}
        <ActionBtn @click="editBus(bus.id)" :icon="editIcon" />
        <ActionBtn @click="deleteBus(bus.id)" :icon="deleteIcon" />
      </li>
    </ul>
    <button @click="addBus">Add Bus</button>
  </div>
</template>

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
