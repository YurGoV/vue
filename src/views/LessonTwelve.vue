<script setup></script>

<template>
  <nav>
    <router-link to="/lesson-12"> Home </router-link> |
    <router-link :to="{ name: 'workers' }"> Workers </router-link> |
    <router-link :to="{ name: 'candidates' }"> Candidates </router-link> |
    <router-link :to="{ name: 'interviews' }"> Interviews </router-link> |
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
