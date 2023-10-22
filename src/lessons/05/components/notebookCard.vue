<template>
  <div class="card">
    <div class="img-thumb">
      <img alt="" :src="imgSrc" />
    </div>
    <div>
      <div class="item-details">
        <p>
          <a :href="link" target="_blank" rel="noopener noreferrer">{{ title }}</a>
        </p>
        <p>Ваша економія {{ discount }} грн.</p>
        <p>{{ oldPrice }} грн.</p>
        <p>{{ price }} грн.</p>
      </div>
      <AddToBasketButton :id="id" :added="added" @addToBasket="addToBasket" />
    </div>
  </div>
</template>

<script>
import AddToBasketButton from './addToBasketButton.vue'

export default {
  props: {
    id: Number,
    title: String,
    imgSrc: String,
    discount: Number,
    oldPrice: Number,
    price: Number,
    link: String,
    added: Boolean
  },
  methods: {
    addToBasket(id) {
      this.$emit('addToBasket', id)
    }
  },
  components: { AddToBasketButton }
}
</script>

<style scoped>
p {
  margin: 3px;
}
button {
  margin-left: 250px;
  background-color: lightseagreen;
  border-radius: 3px;
  padding: 6px;
}
.card {
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 200px;
  border: 1px dotted blue;
  background-color: white;
  border-radius: 10px;
}
.img-thumb {
  width: 150px;
  height: 150px;
  padding-left: 5px;
}
.img-thumb > img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-top-left-radius: 10px;
}
.item-details {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 5px;
}
.logo-thumb {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.logo-thumb > img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.company-title {
  margin: 0;
}
.description {
  margin: 0;
  padding-left: 5px;
}
</style>
