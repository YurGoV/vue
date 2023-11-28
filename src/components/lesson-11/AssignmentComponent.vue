<template>
  <div class="section">
    <p>choose driver:</p>
    <ul>
      <li
        v-for="(driver, index) in getDriversList"
        @click="onDriverClick(driver.id, index)"
        :key="driver.id"
        :class="{ selected: index === selectedDriverIndex }"
      >
        {{ driver.name }} - {{ driver.exp }}
      </li>
    </ul>
    <p>choose bus:</p>
    <ul>
      <li
        v-for="( bus, index ) in getBusesList"
        @click="onBusClick(bus.id, index)"
        :key="bus.id"
        :class="{ selected: index === selectedBusIndex }"
      >
        {{ bus.number }} = {{ bus.capacity }}
      </li>
    </ul>
  </div>
  <ul>
    <li
      v-for="assignment in getAssignmentsList"
      @click="onAssignmentClick(assignment)"
      :key="assignment.id"
    >
      {{ getDriverById(assignment.driverId).name }} =
      {{ getBusById(assignment.busId).number }}
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const emptyAssignmentPair = { busId: null, driverId: null }

export default {
  name: 'LessonElevenAssignmentView',

  data() {
    return {
      assignmentPair: { ...emptyAssignmentPair },
      selectedDriverIndex: null,
      selectedBusIndex: null
    }
  },

  computed: {
    ...mapGetters('lesson11/lesson11Drivers', ['getDriverById']),
    ...mapGetters('lesson11/lesson11Buses', ['getBusById']),
    ...mapGetters('lesson11/lesson11Assignments', ['getAssignmentsList', 'getBusesList', 'getDriversList'])
  },

  watch: {
    assignmentPair: {
      handler(newValue) {
        if (newValue.busId && newValue.driverId) {
          const newAssignmentData = { busId: newValue.busId, driverId: newValue.driverId }
          this.addAssignmentAction(newAssignmentData)

          this.assignmentPair = { ...emptyAssignmentPair }
          this.selectedBusIndex = null
          this.selectedDriverIndex = null
        }
      },
      deep: true
    }
  },
  
  methods: {
    ...mapActions('lesson11/lesson11Assignments', ['addAssignmentAction', 'deleteAssignmentAction']),

    onDriverClick(id, index) {
      this.assignmentPair.driverId = id
      this.selectedDriverIndex = index
    },
    onBusClick(id, index) {
      this.assignmentPair.busId = id
      this.selectedBusIndex = index
    },
    onAssignmentClick(assignment) {
      this.deleteAssignmentAction(assignment)
    },
    deleteDriver(id) {
      const index = this.drivers.findIndex((driver) => driver.id === id)
      if (index !== -1) {
        this.drivers.splice(index, 1)
      }
    },
    deleteBus(id) {
      const index = this.buses.findIndex((bus) => bus.id === id)
      if (index !== -1) {
        this.buses.splice(index, 1)
      }
    },
    deleteAssignment(id) {
      const index = this.assignments.findIndex((assignment) => assignment.id === id)
      this.assignments.splice(index, 1)
    }
  },
}
</script>

<style scoped>
li {
  margin: 3px;
  padding: 2px;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
li.selected {
  border: 2px solid green;
}
.section {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>
