<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SelectTeachersView',

  props: {
    id: {
      type: [Array],
      required: true
    }
  },

  data() {
    return {
      schedule: {}
    }
  },

  computed: {
    ...mapGetters('lessons', ['lessonsList', 'lessonsByIds']),
    ...mapGetters('teachers', ['teachersByLessonId']),
    lessonsList() {
      return this.lessonsByIds(this.id)
    },
    canShowSchedule() {
      console.log(Object.keys(this.schedule).length)
      return !!Object.keys(this.schedule).length
    }
  },

  methods: {
    onChange(lessonId, teacherId) {
      this.schedule[lessonId] = teacherId
    },
    showSchedule() {
      const schedulesArr = Object.entries(this.schedule)
      this.$router.push({ name: 'schedule', params: { id: schedulesArr } })
    }
  }
}
</script>

<template>
  <div>
    <p>teacherss</p>
    <ul>
      <li v-for="(lesson, lessonId) in lessonsList" :key="lessonId">
        {{ lesson }}
        <select @change="onChange(lessonId, $event.target.value)">
          <option default>Select teacher</option>
          <option
            v-for="teacher in teachersByLessonId(lessonId)"
            :key="teacher.id"
            :value="teacher.id"
          >
            {{ teacher.name }}
          </option>
        </select>
      </li>
    </ul>
    <button type="button" :disabled="!canShowSchedule" @click="showSchedule">Show schedule</button>
  </div>
</template>
