<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',

  data() {
    return {
      login: null,
      password: null
    }
  },

  computed: {
    isFullLoginData() {
      return !!(this.login && this.password)
    }
  },
  methods: {
    ...mapActions('auth', ['logInAction']),
    onLogin() {
      this.logInAction(this.login)
      if (this.$route.query.redirect) {
        this.$router.push({
          path: this.$route.query.redirect
        })
      } else this.$router.push({ path: '/' })
    }
  }
}
</script>

<template>
  <p>Please log in to access</p>
  <input type="text" v-model="login" />
  <input type="password" v-model="password" />
  <button type="button" :disabled="!isFullLoginData" @click="onLogin">login</button>
</template>

<style scoped></style>
