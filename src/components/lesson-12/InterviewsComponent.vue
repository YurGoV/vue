<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'InterviewsView',

  data() {
    return {
      selectedWorkerId: null,
      selectedCandidateId: null,
      selectedDayId: null
    }
  },

  computed: {
    ...mapGetters('lesson12/interviews', [
      'getInterviewsList',
      'getWorkersWighoutInterviewList',
      'getCandidatesWighoutInterviewList',
      'getFreeForInterviewDays'
    ]),

    isButtonDisabled() {
      return !(this.selectedWorkerId && this.selectedCandidateId && this.selectedDayId)
    }
  },
  methods: {
    ...mapActions('lesson12/interviews', ['deleteInterviewByIdAction', 'addInterviewAction']),
    deleteInterview(interviewId) {
      this.deleteInterviewByIdAction(interviewId)
    },
    addInterview() {
      this.addInterviewAction({
        day: this.selectedDayId,
        workerId: this.selectedWorkerId,
        candidateId: this.selectedCandidateId
      })
      this.selectedWorkerId = null
      this.selectedCandidateId = null
      this.selectedDayId = null
    }
  }
}
</script>

<template>
  <div class="section">
    <p>Interviews</p>
    <ul>
      <li
        v-for="interview in getInterviewsList"
        :key="interview.id"
        @click="deleteInterview(interview.id)"
      >
        candidate: {{ interview.candidateName }} & interviewer {{ interview.workerName }} - meet on
        {{ interview.day }}
      </li>
    </ul>
    <select v-model="selectedWorkerId" name="group">
      <option v-for="worker in getWorkersWighoutInterviewList" :key="worker.id" :value="worker.id">
        {{ worker.name }}
      </option>
    </select>
    <select v-model="selectedCandidateId" name="group">
      <option
        v-for="candidate in getCandidatesWighoutInterviewList"
        :key="candidate.id"
        :value="candidate.id"
      >
        {{ candidate.name }}
      </option>
    </select>
    <select v-model="selectedDayId" name="group">
      <option v-for="(value, key) in getFreeForInterviewDays" :key="key" :value="key">
        {{ value }}
      </option>
    </select>

    <button @click="addInterview" :disabled="isButtonDisabled">add interview</button>
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
button {
  margin-top: 10px;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
