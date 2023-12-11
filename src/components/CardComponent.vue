<script>
export default {
  name: 'CardComponent',

  props: {
    item: {
      type: Object
    }
  }
}
</script>

<template>
  <div>
    <div class="card">
      <div class="img-thumb">
        <img alt="" :src="item.img" />
      </div>
      <p class="description">{{ item.title }}</p>
      <slot>
        <p>{{ item.price }} UAH</p>
      </slot>
      <button type="button">Choose</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px dotted black;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
}
.img-thumb > img {
  display: block;
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 5px;
}
button {
  max-width: 60px;
  cursor: pointer;
}
</style>
