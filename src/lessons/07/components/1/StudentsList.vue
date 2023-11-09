<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getStudents'])
  }
}
</script>

<template>
  <div>
    <h2>Students List</h2>
    <ul>
      <li v-for="student in getStudents" :key="student.id">
        {{ student.name }}, {{ student.averageGrade }}
      </li>
    </ul>
  </div>
</template>
