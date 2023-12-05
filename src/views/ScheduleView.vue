<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ScheduleView',

  props: {
    id: {
      type: [Array],
      required: true
    }
  },

  computed: {
    ...mapGetters('lessons', ['lessonById']),
    ...mapGetters('teachers', ['teacherById']),
    scheduleData() {
      return this.id.map((scheduleItem) => {
        const scheduleItemArr = scheduleItem.split(',')
        return {
          lessonId: scheduleItemArr[0],
          teacherId: scheduleItemArr[1]
        }
      })
    },

    scheduleList() {
      const arr = []
      for (const i of this.scheduleData) {
        arr.push({
          lesson: this.lessonById(i.lessonId),
          teacher: this.teacherById(i.teacherId).name
        })
      }
      return arr
    }
  }
}
</script>

<template>
  <div>
    <p>schedule:</p>
    <ul>
      <li v-for="schedule in scheduleList" :key="schedule.lesson">
        {{ schedule.lesson }} - {{ schedule.teacher }}
      </li>
    </ul>
  </div>
</template>
