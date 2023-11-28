<script setup></script>

<template>
  <nav>
    <router-link to="/lesson-11"> Home </router-link> |
    <router-link :to="{ name: 'drivers' }"> Drivers </router-link> |
    <router-link :to="{ name: 'buses' }"> Buses </router-link> |
    <router-link :to="{ name: 'assignments' }"> Assignments </router-link> |
    <router-link to="/lesson-11/about"> About </router-link> |
    <router-link to="/lesson-11/contacts"> My Contacts </router-link> |
    <router-link to="/">Main Page</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
