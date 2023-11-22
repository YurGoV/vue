<script setup></script>

<template>
  <nav>
    <router-link to="/lesson-10">Home</router-link> | <router-link to="/lesson-10/goods">Goods</router-link> |
    <router-link to="/lesson-10/payments">Payments Rules</router-link> |
    <router-link to="/lesson-10/contacts">Contacts</router-link>
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
  text-decoration: none; /* Remove underlines from links */
}
nav a:hover {
  font-weight: bold;
  color: blue;
  text-decoration: none; /* Remove underlines from links */
}

nav a.router-link-exact-active {
  color: green;
}
</style>



<!-- <script> -->
<!-- export default { -->
<!--   name: 'LessonTen' -->
<!-- } -->
<!-- </script> -->
<!---->
<!-- <template> -->
<!--   <div style="tasks"> -->
<!--     <h1>Lesson 10</h1> -->
<!--     <h2>Here we test routes in the view application</h2> -->
<!--     <p>u can walk by the routes and check if it works</p> -->
<!--     <router-view /> -->
<!--     // Include components and tasks specific to Lesson 10 --> 
<!--   </div> -->
<!-- </template> -->
<!---->
<!-- <style scoped> -->
<!-- .tasks { -->
<!--   display: flex; -->
<!--   flex-direction: column; -->
<!-- } -->
<!-- </style> -->


<!---->
<!-- <template> -->
<!--   <div> -->
<!--     <h1>Lesson 10</h1> -->
<!--     <router-view /> -->
<!--   </div> -->
<!-- </template> -->
<!---->
<!-- <script> -->
<!-- export default { -->
<!--   name: 'LessonTen' -->
<!-- } -->
<!-- </script> -->
