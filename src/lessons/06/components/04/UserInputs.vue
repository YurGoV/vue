<template>
  <p>Name:</p>
  <input type="text" v-model="userNameValue" class="name-bg-color" />
  <p>Age:</p>
  <input type="number" v-model="userAgeValue" class="age-bg-color" />
</template>

<script>
export default {
  props: {
    userName: String,
    userAge: Number
  },
  emits: ['update:userName', 'update:userAge'],
  computed: {
    userNameValue: {
      get() {
        return this.userName
      },
      set(value) {
        this.$emit('update:userName', value)
      }
    },
    userAgeValue: {
      get() {
        return this.userAge
      },
      set(value) {
        this.$emit('update:userAge', value)
      }
    },
    isName() {
      return this.userName.length > 0 ? '#82ce89' : '#d49191'
    },
    ageBgColor() {
      if (!this.userAge) return ''
      if (this.userAge < 18) return '#d49191'
      return '#82ce89'
    }
  }
}
</script>
<style scoped>
input {
  max-width: 400px;
}
.name-bg-color {
  background: v-bind(isName);
}
.age-bg-color {
  background: v-bind(ageBgColor);
}
</style>
