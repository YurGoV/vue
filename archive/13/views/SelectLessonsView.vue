<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SelectLessonsView',

  data() {
    return {
      selectedLessons: []
    }
  },

  computed: {
    ...mapGetters('lessons', ['lessonsList'])
  },

  methods: {
    chooseTeachers() {
      this.$router.push({ name: 'select-teachers', params: { id: this.selectedLessons } })
    }
  }
}
</script>

<template>
  <div>
    <p>choose lessons please:</p>
    <label v-for="(lesson, lessonId) in lessonsList" :key="lessonId">
      {{ lesson }}
      <input v-model="selectedLessons" type="checkbox" :value="lessonId" />
    </label>
    <button type="button" :disabled="!selectedLessons.length" @click="chooseTeachers">
      Choose teachers
    </button>
  </div>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: row;
}
</style>
