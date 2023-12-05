<script>
export default {
  name: 'LessonTen'
}
</script>

<template>
  <nav>
    <router-link to="/lesson-10">Contacts</router-link> |
    <router-link to="/lesson-10/groups">Groups</router-link> |
    <router-link to="/">Main Page</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  padding: 10px;
}
nav a {
  font-weight: bold;
  color: #5757d5;
  text-decoration: none;
}
nav a:hover {
  font-weight: bold;
  color: blue;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: green;
}
</style>

