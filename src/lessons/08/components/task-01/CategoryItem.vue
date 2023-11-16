<script>
export default {
  props: {
    category: Object,
    isActive: Boolean
  },
  computed: {
    borderStyle() {
      return this.isActive ? '2px dotted green' : '1px dotted black'
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="img-thumb">
      <img alt="" :src="category.img" />
    </div>
    <p class="description">{{ category.name }}</p>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border: v-bind(borderStyle);
  background-color: white;
  border-radius: 10px;
  margin-left: 5px;
  cursor: pointer;
}
.img-thumb > img {
  display: block;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 5px;
}
</style>
