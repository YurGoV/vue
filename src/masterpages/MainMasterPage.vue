<script>
export default {
  name: 'MainMasterPage'
}
</script>

<template>
  <nav>
    <router-link to="/">Main</router-link> | <router-link to="/goods">Goods</router-link> |
    <router-link to="/deliverers">Deliverers</router-link> |
    <router-link to="/contacts">Contacts</router-link> |
    <router-link to="/rules">Shopping Rules</router-link>
  </nav>
  <slot />
</template>
