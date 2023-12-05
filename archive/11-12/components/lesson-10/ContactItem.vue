<script>
export default {
  name: 'ContactItem',

  props: {
    first_name: String,
    last_name: String,
    emails: Array
  },

  computed: {
    firstLetters() {
      const firstLetter = this.first_name ? this.first_name[0].toUpperCase() : ''
      const lastLetter = this.last_name ? this.last_name[0].toUpperCase() : ''
      return firstLetter + lastLetter
    }
  }
}
</script>

<template>
  <div class="contact-container">
    <div class="icon">{{ firstLetters }}</div>
    <p>
      <span class="title"> {{ first_name }} {{ last_name ?? '' }}</span>
    </p>
    <p class="email" v-for="email in emails" :key="email">{{ email }}</p>
  </div>
</template>

<style scoped>
p {
  margin-left: 5px;
}
.contact-container {
  display: flex;
  align-items: center;
  background-color: #edeee9;
  padding: 3px;
  margin: 2px;
  border-radius: 50px;
  min-width: 400px;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  border: 1px solid #c0e9e7;
  border-radius: 50px;
  width: 40px;
  height: 40px;
}
.title {
  font-weight: 700;
}
.email {
  padding-left: 5px;
}
</style>
