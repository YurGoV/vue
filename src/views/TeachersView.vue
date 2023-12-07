<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TeachersView',

  computed: {
    ...mapGetters('teachers', ['teachersList']),
    ...mapGetters('lessons', ['lessonsByIds'])
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="teacher in teachersList" :key="teacher.id">
        {{ teacher.name }} can teach:
        <ul>
          <li v-for="(lesson, key) in lessonsByIds(teacher.canTeach)" :key="key">
            {{ lesson }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
