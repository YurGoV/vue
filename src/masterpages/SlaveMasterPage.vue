<script>
export default {
  name: 'SlaveMasterPage'
}
</script>

<template>
  <nav>
    <router-link to="/">Main</router-link>
  </nav>
  <slot>
    <h1>Our Contacts:</h1>
    <h2>We find you, don't worry ))</h2>
  </slot>
  <footer>
    <p>created by someone in 2003</p>
  </footer>
</template>
