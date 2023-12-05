<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapGetters('auth', ['userLogin'])
  },

  methods: {
    ...mapActions('auth', ['logOutAction']),
    logOut() {
      this.logOutAction()
      this.$router.push({ path: '/' })
    },
    logIn() {
      this.logOutAction()
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<template>
  <div id="app">
    <nav>
      <div class="auth-section" v-if="!userLogin">
        <button type="button" @click="logIn">log in</button>
      </div>
      <div class="auth-section" v-else>
        <p>{{ userLogin }}</p>
        <button type="button" @click="logOut">log out</button>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/lessons/select">Lessons</router-link> |
      <router-link to="/teachers">Teachers</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 10px;
  min-width: 600px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button {
  margin-left: 50px;
  max-height: 25px;
}
.auth-section {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
