<script>
export default {
  name: 'ActionBtn',

  props: {
    icon: String
  }
}
</script>

<template>
  <div class="btn">
    <img class="icon" :src="icon" alt="edit icon" />
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  flex-direction: column;
  width: 15px;
  height: 15px;
  margin-left: 10px;
}
.icon:hover {
  cursor: pointer;
}
</style>
