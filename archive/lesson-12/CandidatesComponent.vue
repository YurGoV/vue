<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CandidatesView',

  computed: {
    ...mapGetters('lesson12/candidates', ['getCandidatesList'])
  },

  methods: {
    ...mapActions('lesson12/candidates', ['deleteCandidateAction']),
    deleteCandidate(id) {
      this.deleteCandidateAction(id)
    }
  }
}
</script>

<template>
  <div class="section">
    <p>candidates:</p>
    <ul>
      <li
        v-for="candidate in getCandidatesList"
        :key="candidate.id"
        @click="deleteCandidate(candidate.id)"
      >
        {{ candidate.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  display: flex;
  flex-direction: row;
  margin: 3px;
  padding: 2px;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
li:hover {
  border-color: red;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
